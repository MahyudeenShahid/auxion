"use client";

import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  vec2 rotate(vec2 p, float a) {
      float c = cos(a);
      float s = sin(a);
      return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
  }

  // Pseudo-random hash
  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  // Value noise
  float noise(vec2 x) {
      vec2 i = floor(x);
      vec2 f = fract(x);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  
  // Fractional Brownian Motion
  float fbm(vec2 x) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      for (int i = 0; i < 5; ++i) {
          v += a * noise(x);
          x = rotate(x, 0.5) * 2.0 + shift;
          a *= 0.5;
      }
      return v;
  }

  void main() {
      // Normalize and adjust for aspect ratio
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      // Mouse influence
      vec2 mouse = u_mouse * 2.0 - 1.0;
      mouse.x *= u_resolution.x / u_resolution.y;
      
      // Add subtle displacement based on mouse distance
      float distToMouse = length(p - mouse);
      float mouseInfluence = smoothstep(1.5, 0.0, distToMouse) * 0.5;
      p -= normalize(p - mouse) * mouseInfluence * 0.2;

      // Slow down time for a sultry, luxurious fluid movement
      float t = u_time * 0.15;
      
      // Domain warping for the fluid folds
      vec2 q = vec2(0.0);
      q.x = fbm(p + 0.0 * t);
      q.y = fbm(p + vec2(1.0));
      
      vec2 r = vec2(0.0);
      r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
      r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);
      
      float f = fbm(p + r);
      
      // Create a faux 3D normal from the noise gradient
      float dx = fbm(p + r + vec2(0.02, 0.0)) - f;
      float dy = fbm(p + r + vec2(0.0, 0.02)) - f;
      vec3 normal = normalize(vec3(dx, dy, 0.015)); // Adjust Z for bumpiness
      
      // Simulate light hitting the liquid folds
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      float diffuse = max(0.0, dot(normal, lightDir));
      
      // Colors based on the vibrant 3D particle swarm reference
      vec3 colorDeepSpace = vec3(0.0, 0.0, 0.02); 
      vec3 colorCyanHaze = vec3(0.0, 0.1, 0.15);
      vec3 colorNeonGreen = vec3(0.0, 1.0, 0.6); // #00FF99
      vec3 colorCyanHighlight = vec3(0.0, 0.8, 1.0);
      
      // Base fluid color
      vec3 col = mix(colorDeepSpace, colorCyanHaze, smoothstep(0.0, 1.0, f));
      
      // Add the glowing neon green on the ridges (diffuse light reflection)
      float glow = smoothstep(0.2, 0.8, diffuse);
      col = mix(col, colorNeonGreen, glow * 2.0 * f);
      
      // Extreme peak highlights for cyan aurora effect
      float peak = smoothstep(0.6, 0.95, diffuse);
      col = mix(col, colorCyanHighlight, peak * 1.5 * f);
      
      // Contrast and vignette
      col *= smoothstep(0.0, 0.6, f + 0.1); 
      col -= dot(uv - 0.5, uv - 0.5) * 0.6; // Darken edges
      
      gl_FragColor = vec4(col, 1.0);
  }
`;

export function FluidGradientBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;

        // Type casting to WebGLRenderingContext since experimental-webgl can return unknown
        const glCtx = gl as WebGLRenderingContext;

        const compileShader = (type: number, source: string) => {
            const shader = glCtx.createShader(type);
            if (!shader) return null;
            glCtx.shaderSource(shader, source);
            glCtx.compileShader(shader);
            if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
                console.error('Shader compilation error:', glCtx.getShaderInfoLog(shader));
                glCtx.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(glCtx.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(glCtx.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) return;

        const program = glCtx.createProgram();
        if (!program) return;
        glCtx.attachShader(program, vertexShader);
        glCtx.attachShader(program, fragmentShader);
        glCtx.linkProgram(program);
        if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
            console.error('Program linking error:', glCtx.getProgramInfoLog(program));
            return;
        }
        glCtx.useProgram(program);

        // Full screen quad
        const vertices = new Float32Array([
            -1.0, -1.0,
            1.0, -1.0,
            -1.0, 1.0,
            -1.0, 1.0,
            1.0, -1.0,
            1.0, 1.0,
        ]);
        const buffer = glCtx.createBuffer();
        glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buffer);
        glCtx.bufferData(glCtx.ARRAY_BUFFER, vertices, glCtx.STATIC_DRAW);

        const positionLoc = glCtx.getAttribLocation(program, 'position');
        glCtx.enableVertexAttribArray(positionLoc);
        glCtx.vertexAttribPointer(positionLoc, 2, glCtx.FLOAT, false, 0, 0);

        const resolutionLoc = glCtx.getUniformLocation(program, 'u_resolution');
        const timeLoc = glCtx.getUniformLocation(program, 'u_time');
        const mouseLoc = glCtx.getUniformLocation(program, 'u_mouse');

        let animationFrameId: number;
        let startTime = Date.now();

        // Track mouse
        let mouseX = 0.5;
        let mouseY = 0.5;
        let targetMouseX = 0.5;
        let targetMouseY = 0.5;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX / window.innerWidth;
            targetMouseY = 1.0 - (e.clientY / window.innerHeight); // WebGL Y is inverted
        };

        window.addEventListener('mousemove', handleMouseMove);

        const resize = () => {
            // Scale down slightly for performance since shader is heavy, blur covers it
            const pixelRatio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * pixelRatio * 0.75;
            canvas.height = window.innerHeight * pixelRatio * 0.75;
            glCtx.viewport(0, 0, canvas.width, canvas.height);
            if (resolutionLoc) glCtx.uniform2f(resolutionLoc, canvas.width, canvas.height);
        };

        window.addEventListener('resize', resize);
        resize();

        const render = () => {
            if (!glCtx) return;
            const currentTime = (Date.now() - startTime) / 1000.0;
            if (timeLoc) glCtx.uniform1f(timeLoc, currentTime);

            // Lerp mouse for smooth liquid feel
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;
            if (mouseLoc) glCtx.uniform2f(mouseLoc, mouseX, mouseY);

            glCtx.drawArrays(glCtx.TRIANGLES, 0, 6);
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (program) glCtx.deleteProgram(program);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden z-[-1] bg-[#000000]">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover blur-[20px] scale-110 opacity-90"
            />
            {/* Intense noise overlay to add that cinematic Awwwards texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.25] mix-blend-overlay pointer-events-none" />
        </div>
    );
}
