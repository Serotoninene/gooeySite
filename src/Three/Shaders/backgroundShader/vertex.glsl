precision mediump float ;
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec2 uPixels;

float PI = 3.14159265359;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * viewMatrix  * modelViewMatrix * vec4(position, 1.0);  
}