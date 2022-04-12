precision mediump float;

uniform float uTime;  
uniform float uProgress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform samplerCube uCube;

varying vec2 vUv; 
varying vec3 vPosition;

varying vec3 vReflect;
varying vec3 vRefract[3];
varying float vReflectionFactor;

void main() {

  vec4 reflectedColor = textureCube( uCube, vec3( -vReflect.x, vReflect.yz ) );
  vec4 refractedColor = vec4( 1.0 );

  refractedColor.r = textureCube( uCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;
  refractedColor.g = textureCube( uCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;
  refractedColor.b = textureCube( uCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;

  gl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );
  // gl_FragColor = vec4(1.00,0.0,0.0,1.0);
}