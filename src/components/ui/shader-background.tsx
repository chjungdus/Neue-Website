"use client"

import { useEffect, useRef } from "react"

// Dependency-free WebGL fragment shader: a slow flowing electric-blue aurora on
// near-black that reacts gently to the cursor. Replaces the old decorative
// floating shapes with one cohesive, intentional background.
// Falls back to a static CSS gradient when WebGL is unavailable or the user
// prefers reduced motion.

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_base;
uniform float u_amt;
uniform float u_vig;

vec2 hash(vec2 p){
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
                 dot(hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
             mix(dot(hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
                 dot(hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv;
  p.x *= u_res.x / u_res.y;
  float t = u_time * 0.04;
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  float n = fbm(p * 1.6 + 1.4 * q + vec2(t * 0.6, -t * 0.4));
  n = smoothstep(-0.1, 0.95, n);
  float d = distance(uv, u_mouse);
  float glow = smoothstep(0.45, 0.0, d) * 0.12;
  vec3 base = u_base;
  vec3 blue = vec3(0.0, 0.4, 1.0);
  vec3 col = mix(base, blue, n * u_amt + glow);
  col *= 1.0 - u_vig * distance(uv, vec2(0.5));
  gl_FragColor = vec4(col, 1.0);
}
`

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`

// "light" draws pale blue clouds on the off-white page colour, without the dark vignette.
const TONES = {
  dark: { base: [0.039, 0.039, 0.06], amt: 0.26, vig: 0.32, fallback: "radial-gradient(120% 100% at 20% 0%, rgba(0,102,255,0.18), transparent 55%), #0a0a0f" },
  light: { base: [0.965, 0.961, 0.945], amt: 0.45, vig: 0, fallback: "radial-gradient(80% 90% at 80% 20%, rgba(0,102,255,0.12), transparent 60%), #F6F5F1" },
} as const

export default function ShaderBackground({ className = "", tone = "dark" }: { className?: string; tone?: keyof typeof TONES }) {
  const t = TONES[tone]
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false })
    if (!gl) return // CSS fallback stays visible

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return sh
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_res")
    const uTime = gl.getUniformLocation(prog, "u_time")
    const uMouse = gl.getUniformLocation(prog, "u_mouse")
    gl.uniform3f(gl.getUniformLocation(prog, "u_base"), t.base[0], t.base[1], t.base[2])
    gl.uniform1f(gl.getUniformLocation(prog, "u_amt"), t.amt)
    gl.uniform1f(gl.getUniformLocation(prog, "u_vig"), t.vig)

    const mouse = { x: 0.5, y: 0.6 }
    const target = { x: 0.5, y: 0.6 }
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      target.x = (e.clientX - r.left) / r.width
      target.y = 1.0 - (e.clientY - r.top) / r.height
    }
    window.addEventListener("pointermove", onMove)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth * dpr
      const h = canvas.clientHeight * dpr
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    let raf = 0
    const start = performance.now()
    const render = (now: number) => {
      resize()
      mouse.x += (target.x - mouse.x) * 0.05
      mouse.y += (target.y - mouse.y) * 0.05
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, reduce ? 8 : (now - start) / 1000)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      if (!reduce) raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [t])

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ background: t.fallback }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
