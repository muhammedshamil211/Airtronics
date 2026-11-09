'use client';

import React, { useRef, useEffect } from 'react';

export interface AnimatedShaderBackgroundProps {
  className?: string;
  patternStyle?: 0 | 1 | 2 | 3 | 4; // 0: Chrome, 1: Ribs, 2: Fins, 3: Abyss, 4: Halftone/Web
  speed?: number;
  scale?: number;
  distortion?: number;
  brightness?: number;
  refraction?: number;
  // Colors as hex strings
  colors?: {
    base?: string;
    mid?: string;
    high?: string;
  };
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16) / 255;
    const g = parseInt(clean[1] + clean[1], 16) / 255;
    const b = parseInt(clean[2] + clean[2], 16) / 255;
    return [r, g, b];
  }
  const num = parseInt(clean, 16);
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  return [r, g, b];
}

const VERTEX_SHADER_SOURCE = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  uniform int uStyle;
  uniform float uTime;
  uniform vec2 uResolution;
  
  // Colors
  uniform vec3 uChromeDark;  uniform vec3 uChromeMid;   uniform vec3 uChromeLight;
  uniform vec3 uRibBase;     uniform vec3 uRibHigh1;    uniform vec3 uRibHigh2;
  uniform vec3 uFinBase;     uniform vec3 uFinMid;      uniform vec3 uFinHigh;
  uniform vec3 uAbyssBase;   uniform vec3 uAbyssMid;    uniform vec3 uAbyssHigh;
  uniform vec3 uWebBase;     uniform vec3 uWebMid;      uniform vec3 uWebHigh;

  uniform float uSpeed;
  uniform float uScale;
  uniform float uDistortion;
  uniform float uBrightness;
  uniform float uRefraction;

  varying vec2 vUv;

  float skewedTri(float x, float s) {
    float f = fract(x);
    float val = f < s ? (f / s) : (1.0 - (f - s) / (1.0 - s));
    return smoothstep(0.0, 1.0, val);
  }

  // 0: CHROME
  float mapChrome(vec2 p, float t) {
    float a = 0.6; mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    p = rot * p; p.x *= 0.35; p.y *= 1.4;
    float h = 0.0, amp = 1.0, freq = 1.8;
    vec2 q = p;
    for(int i = 0; i < 5; i++) {
      q += vec2(sin(q.y * 1.2 + t * 0.6), cos(q.x * 1.4 - t * 0.5)) * uDistortion * 0.15;
      h += sin(q.y * freq + t * 0.8) * amp;
      q *= 1.4;
      mat2 rot2 = mat2(cos(0.35), -sin(0.35), sin(0.35), cos(0.35));
      q = rot2 * q; amp *= 0.45;
    }
    return h;
  }

  // 1: RIBS
  float mapRibs(vec2 p, float t) {
    float a = -0.55; mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    vec2 q = rot * p;
    q.x += sin(q.y * 1.5 + t * 0.3) * 0.1 * uDistortion;
    q.x += sin(q.y * 3.0 - t * 0.2) * 0.05 * uDistortion;
    return sin(q.x * 25.0 * uScale) * 0.15;
  }

  // 2: FINS
  float mapFins(vec2 p, float t) {
    float a = -0.6; mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    vec2 q = rot * p;
    q.x += sin(q.y * 1.2 + t * 0.25) * 0.2 * uDistortion;
    q.y += cos(q.x * 1.0 - t * 0.2) * 0.2 * uDistortion;
    float phase = q.x * 3.5 * uScale + sin(q.y * 2.0 * uScale) * 1.5;
    float fin = skewedTri(phase, 0.85);
    float pocketPhase = q.y * 4.0 * uScale + q.x * 2.0;
    float pocket = smoothstep(0.1, 0.9, sin(pocketPhase - t * 1.0) * 0.5 + 0.5);
    return (fin * mix(0.15, 1.0, pocket) + sin(q.x * 1.5) * 0.15) * 0.35;
  }

  // 3: ABYSS
  float mapAbyss(vec2 p, float t) {
    vec2 q = p; float h = 0.0, amp = 1.0;
    q.x += sin(t * 0.2) * 0.5; q.y += cos(t * 0.15) * 0.5;
    for(int i = 0; i < 5; i++) {
      float angle = h * 2.5 + t * 0.4;
      q += vec2(cos(angle), sin(angle)) * 0.2 * uDistortion;
      h += sin(q.x * 1.4 + t * 0.3) * cos(q.y * 1.4 - t * 0.2) * amp;
      q *= 1.5; q = mat2(cos(0.6), -sin(0.6), sin(0.6), cos(0.6)) * q;
      amp *= 0.55;
    }
    return h;
  }

  // 4: HALFTONE / SILKY FLUID WEB
  float mapWeb(vec2 p, float t) {
    vec2 q = p;
    q += vec2(t * 0.15, -t * 0.1);
    float h = 0.0;
    float amp = 1.0;
    for(int i = 0; i < 3; i++) {
      float warpX = sin(q.y * 1.2 + t * 0.8) * uDistortion * 0.3;
      float warpY = cos(q.x * 1.1 - t * 0.6) * uDistortion * 0.3;
      q += vec2(warpX, warpY);
      h += sin(q.x * 1.5) * cos(q.y * 1.5) * amp;
      q = mat2(cos(0.6), -sin(0.6), sin(0.6), cos(0.6)) * q * 1.4;
      amp *= 0.5;
    }
    return h;
  }

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;
    p *= uScale;

    float t = uTime * uSpeed * 0.5;
    vec3 finalColor = vec3(0.0);

    if (uStyle == 0) {
      // 0: CHROME
      float h = mapChrome(p, t);
      vec2 eps = vec2(0.01, 0.0);
      float nx = mapChrome(p + eps.xy, t) - h;
      float ny = mapChrome(p + eps.yx, t) - h;
      vec3 normal = normalize(vec3(nx, ny, 0.008));
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      vec3 ref = reflect(-viewDir, normal);
      ref.xy += normal.xy * uRefraction * 0.05;

      float topLight = smoothstep(0.1, 0.7, ref.y);
      float bottomLight = smoothstep(-0.2, -0.6, ref.y) * 0.2;
      float sideLight1 = smoothstep(0.6, 0.9, ref.x) * 0.4;
      float sideLight2 = smoothstep(0.6, 0.9, -ref.x) * 0.2;
      float lightTube = smoothstep(0.9, 0.98, sin(ref.y * 12.0)) * 0.5;
      float totalReflection = topLight + bottomLight + sideLight1 + sideLight2 + lightTube;

      vec3 color = mix(uChromeDark, uChromeMid, smoothstep(-0.8, 0.8, h));
      color = mix(color, uChromeLight, smoothstep(0.3, 1.1, totalReflection));

      vec3 halfDir = normalize(normalize(vec3(0.5, 1.5, 1.0)) + viewDir);
      color += uChromeLight * pow(max(dot(normal, halfDir), 0.0), 80.0) * uBrightness;
      color *= mix(0.15, 1.0, smoothstep(-1.2, 1.0, h));
      color *= smoothstep(1.0, 0.2, length(vUv - 0.5) * 0.7);
      finalColor = color;

    } else if (uStyle == 1) {
      // 1: RIBS
      float h = mapRibs(p, t);
      vec2 eps = vec2(0.01, 0.0);
      float nx = mapRibs(p + eps.xy, t) - h;
      float ny = mapRibs(p + eps.yx, t) - h;
      vec3 normal = normalize(vec3(nx, ny, 0.03));
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      
      vec3 color = uRibBase;
      float areaOrange = smoothstep(1.5, -0.5, p.x + p.y);
      float areaBlue = smoothstep(-1.5, 0.5, p.x + p.y);
      color += uRibHigh2 * smoothstep(0.0, 0.8, -normal.x) * areaOrange * 2.0;
      color += uRibHigh1 * smoothstep(0.0, 0.8, normal.x) * areaBlue * 2.0;
      
      vec3 halfDir = normalize(normalize(vec3(0.5, 0.5, 1.0)) + viewDir);
      color += vec3(1.0) * pow(max(dot(normal, halfDir), 0.0), 50.0) * uBrightness * 0.5;
      color *= mix(0.1, 1.0, smoothstep(-0.15, 0.15, h));
      color *= smoothstep(1.2, 0.2, length(vUv - 0.5) * 0.8);
      finalColor = color;

    } else if (uStyle == 2) {
      // 2: FINS
      float h = mapFins(p, t);
      vec2 eps = vec2(0.01, 0.0);
      float nx = mapFins(p + eps.xy, t) - h;
      float ny = mapFins(p + eps.yx, t) - h;
      vec3 normal = normalize(vec3(nx, ny, 0.05));
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      
      vec3 lightDir1 = normalize(vec3(-0.8, 1.0, 0.8));
      float diff1 = max(dot(normal, lightDir1), 0.0);
      vec3 color = mix(uFinBase, uFinMid, smoothstep(-0.05, 0.35, h + diff1 * 0.3));
      color = mix(color, uFinHigh, smoothstep(0.5, 0.95, diff1));
      
      color += uFinHigh * pow(max(dot(normal, normalize(lightDir1 + viewDir)), 0.0), 40.0) * uBrightness * 0.8;
      color += mix(uFinMid, vec3(1.0), 0.5) * pow(max(dot(normal, normalize(normalize(vec3(1.0, -1.0, 0.4)) + viewDir)), 0.0), 20.0) * uBrightness * 0.3;
      color *= mix(0.15, 1.0, smoothstep(0.0, 0.12, h));
      color *= smoothstep(1.3, 0.2, length(vUv - 0.5) * 0.8);
      finalColor = color;

    } else if (uStyle == 3) {
      // 3: ABYSS
      float h = mapAbyss(p, t);
      vec2 eps = vec2(0.01, 0.0);
      float nx = mapAbyss(p + eps.xy, t) - h;
      float ny = mapAbyss(p + eps.yx, t) - h;
      vec3 normal = normalize(vec3(nx, ny, 0.2));

      vec2 rUV = p + normal.xy * uRefraction * 0.1;
      vec2 gUV = p + normal.xy * uRefraction * 0.05;
      vec2 bUV = p;

      float hR = mapAbyss(rUV, t);
      float hG = mapAbyss(gUV, t);
      float hB = mapAbyss(bUV, t);

      vec3 color = uAbyssBase;
      float avgH = (hR + hG + hB) / 3.0;
      color = mix(color, uAbyssMid, smoothstep(-0.5, 0.5, avgH));

      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      vec3 halfDir = normalize(normalize(vec3(0.5, 0.8, 1.0)) + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 30.0);

      color += uAbyssHigh * vec3(smoothstep(0.1, 1.0, hR), smoothstep(0.1, 1.0, hG), smoothstep(0.1, 1.0, hB)) * uBrightness * 0.8;
      color += vec3(1.0) * spec * uBrightness * 0.3;
      color *= mix(0.1, 1.0, smoothstep(-0.8, 0.4, avgH));
      color *= smoothstep(1.3, 0.1, length(vUv - 0.5) * 0.8);
      finalColor = color;

    } else {
      // 4: HALFTONE / SILKY FLUID WEB
      float h = mapWeb(p, t);
      float luma = smoothstep(-1.2, 1.2, h);
      luma = pow(luma, 1.5);
      luma = smoothstep(0.0, 0.9, luma);
      
      vec2 screenUv = vUv * uResolution;
      float angle = 0.785398; // 45-degree rotation
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      vec2 grid = rot * screenUv * 1.2;
      
      float dotPattern = (sin(grid.x) + sin(grid.y)) * 0.5;
      dotPattern = dotPattern * 0.5 + 0.5;
      
      float aa = 0.05;
      float mask = smoothstep(dotPattern - aa, dotPattern + aa, luma);
      
      vec3 color = mix(uWebBase, uWebMid, smoothstep(0.0, 0.6, luma));
      color = mix(color, uWebHigh, mask);
      color += uWebHigh * smoothstep(0.7, 1.0, luma) * 0.15;
      color *= smoothstep(1.5, 0.1, length(vUv - 0.5) * 0.9);
      finalColor = color * uBrightness;
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function AnimatedShaderBackground({
  className = '',
  patternStyle = 4,
  speed = 0.3,
  scale = 1.0,
  distortion = 2.5,
  brightness = 1.3,
  refraction = 1.0,
  colors = {
    base: '#031229',
    mid: '#072754',
    high: '#00AEEF',
  },
}: AnimatedShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isIntersectingRef = useRef(true);

  // Keep props in refs for zero-re-render WebGL loop updates
  const configRef = useRef({
    patternStyle,
    speed,
    scale,
    distortion,
    brightness,
    refraction,
    colors,
  });

  useEffect(() => {
    configRef.current = {
      patternStyle,
      speed,
      scale,
      distortion,
      brightness,
      refraction,
      colors,
    };
  }, [patternStyle, speed, scale, distortion, brightness, refraction, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: false, antialias: true, powerPreference: 'high-performance' }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      console.warn('WebGL not supported for AnimatedShaderBackground');
      return;
    }

    // Compile Shader Helper
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error('Shader compile error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const quadVertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uStyleLoc = gl.getUniformLocation(program, 'uStyle');
    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');

    const uChromeDarkLoc = gl.getUniformLocation(program, 'uChromeDark');
    const uChromeMidLoc = gl.getUniformLocation(program, 'uChromeMid');
    const uChromeLightLoc = gl.getUniformLocation(program, 'uChromeLight');

    const uRibBaseLoc = gl.getUniformLocation(program, 'uRibBase');
    const uRibHigh1Loc = gl.getUniformLocation(program, 'uRibHigh1');
    const uRibHigh2Loc = gl.getUniformLocation(program, 'uRibHigh2');

    const uFinBaseLoc = gl.getUniformLocation(program, 'uFinBase');
    const uFinMidLoc = gl.getUniformLocation(program, 'uFinMid');
    const uFinHighLoc = gl.getUniformLocation(program, 'uFinHigh');

    const uAbyssBaseLoc = gl.getUniformLocation(program, 'uAbyssBase');
    const uAbyssMidLoc = gl.getUniformLocation(program, 'uAbyssMid');
    const uAbyssHighLoc = gl.getUniformLocation(program, 'uAbyssHigh');

    const uWebBaseLoc = gl.getUniformLocation(program, 'uWebBase');
    const uWebMidLoc = gl.getUniformLocation(program, 'uWebMid');
    const uWebHighLoc = gl.getUniformLocation(program, 'uWebHigh');

    const uSpeedLoc = gl.getUniformLocation(program, 'uSpeed');
    const uScaleLoc = gl.getUniformLocation(program, 'uScale');
    const uDistortionLoc = gl.getUniformLocation(program, 'uDistortion');
    const uBrightnessLoc = gl.getUniformLocation(program, 'uBrightness');
    const uRefractionLoc = gl.getUniformLocation(program, 'uRefraction');

    let width = 0;
    let height = 0;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Viewport Intersection Observer (pause animation when out of view)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersectingRef.current = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    let animationFrameId: number;
    const startTime = performance.now();

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isIntersectingRef.current || width === 0 || height === 0) return;

      const elapsedTime = (now - startTime) * 0.001;
      const current = configRef.current;

      gl.useProgram(program);

      // Uniforms
      gl.uniform1i(uStyleLoc, current.patternStyle);
      gl.uniform1f(uTimeLoc, elapsedTime);
      gl.uniform2f(uResolutionLoc, width, height);

      gl.uniform1f(uSpeedLoc, current.speed);
      gl.uniform1f(uScaleLoc, current.scale);
      gl.uniform1f(uDistortionLoc, current.distortion);
      gl.uniform1f(uBrightnessLoc, current.brightness);
      gl.uniform1f(uRefractionLoc, current.refraction);

      // Colors
      const baseRgb = hexToRgb(current.colors.base || '#031229');
      const midRgb = hexToRgb(current.colors.mid || '#072754');
      const highRgb = hexToRgb(current.colors.high || '#00AEEF');

      gl.uniform3f(uChromeDarkLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uChromeMidLoc, midRgb[0], midRgb[1], midRgb[2]);
      gl.uniform3f(uChromeLightLoc, highRgb[0], highRgb[1], highRgb[2]);

      gl.uniform3f(uRibBaseLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uRibHigh1Loc, highRgb[0], highRgb[1], highRgb[2]);
      gl.uniform3f(uRibHigh2Loc, midRgb[0], midRgb[1], midRgb[2]);

      gl.uniform3f(uFinBaseLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uFinMidLoc, midRgb[0], midRgb[1], midRgb[2]);
      gl.uniform3f(uFinHighLoc, highRgb[0], highRgb[1], highRgb[2]);

      gl.uniform3f(uAbyssBaseLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uAbyssMidLoc, midRgb[0], midRgb[1], midRgb[2]);
      gl.uniform3f(uAbyssHighLoc, highRgb[0], highRgb[1], highRgb[2]);

      gl.uniform3f(uWebBaseLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uWebMidLoc, midRgb[0], midRgb[1], midRgb[2]);
      gl.uniform3f(uWebHighLoc, highRgb[0], highRgb[1], highRgb[2]);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      gl.deleteBuffer(positionBuffer);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}

