import React from 'react'
// Three
import * as THREE from "three";
// Shaders
import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";
import {
  extend
} from '@react-three/fiber';

export default class BackgroundMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: {
          value: 0
        },
        uColor1: {
          value: new THREE.Color()
        },
        uColor2: {
          value: new THREE.Color()
        },
        uColor3: {
          value: new THREE.Color()
        },
      },
      vertexShader: vertex,
      fragmentShader: fragment
    })
  }
  get time() {
    return this.uniforms.uTime.value;
  }

  set time(v) {
    this.uniforms.uTime.value = v;
  }

  get color1() {
    return this.uniforms.uColor1.value;
  }

  set color1(v) {
    this.uniforms.uColor1.value = v;
  }

  get color2() {
    return this.uniforms.uColor2.value;
  }

  set color2(v) {
    this.uniforms.uColor2.value = v;
  }

}
extend({
  BackgroundMaterial
})