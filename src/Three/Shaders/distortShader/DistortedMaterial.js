import { extend } from "@react-three/fiber";
// Three
import * as THREE from "three";
// Shaders
import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";
// GSap
import * as THREE from "three";

export default class DistortedMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uCube: { value: texture },
        uTime: { value: 0 },
        uDistortionIntensity: { value: 0.0 },
        uDistortionSpeed: { value: 0.0 },
        uDistortionFrequency: {
          value: uniforms,
        },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
  }

  get time() {
    return this.uniforms.uTime.value;
  }

  set time(v) {
    this.uniforms.uTime = v;
  }

  get distortionFrequency() {
    return this.uniforms.uDistortionFrequency.value;
  }

  set distortionFrequency(v) {
    this.uniforms.uDistortionFrequency = v;
  }

  get texture() {
    return this.uniforms.uTexture;
  }

  set texture(v) {
    this.uniforms.uTexture = v;
  }
}
extend({
  DistortedMaterial,
});
