![aframe-shaderfrog-component](https://cdn.glitch.com/79dfcf15-2e86-4e07-a7f2-57d0ebfeae7f%2Fsf.png?v=1591440920168)
# aframe-shaderfrog-component
___

Use shaders designed at <a href="https://shaderfrog.com/app" rel="noopener noreferrer">ShaderFrog</a> in your A-Frame applications.


![demo gif](https://cdn.glitch.com/79dfcf15-2e86-4e07-a7f2-57d0ebfeae7f%2Faframe-shaderfrog-component.gif?v=1591456179970)


<a href="https://aframe-shaderfrog-component.glitch.me/" rel="noopener noreferrer">**Demo**</a>



___

**Schema**

| Parameter   | Default | Description |
|-------------|---------|-------------|
| name | Flowing_Circles_Shader | Specifies the shader to be used. |


___

**Builtin Shader Names**
- CS1_Shader
- Cool_Tiles_Shader
- Cosmic_Shader
- Disco_Shader
- Electric_Shader
- Flowing_Circles_Shader
- Goo_Shader
- Green_Dance_Shader
- Jelly_Shader
- Marching_Ants_Shader
- Ova_Shader
- Polkadot_Shader
- Psycho_Shader
- Sun_Shader
- Thruster_Shader

___

**HTML - Include after A-Frame in the HEAD**

```
<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
<script src="https://unpkg.com/aframe-shaderfrog-component"></script>
```

___

**HTML - Usage in A-Frame Scene**

```
<a-scene>
<a-box position="-1 0.5 -3" rotation="0 45 0" shader-frog="name:Polkadot_Shader"></a-box>
<a-sphere position="0 1.25 -5" radius="1.25" shader-frog="name:Goo_Shader"></a-sphere>
<a-sphere position="1 0.75 -3" radius="0.6" shader-frog="name:Thruster_Shader"></a-sphere>
<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" shader-frog></a-plane>
</a-scene>
```

___

**Customize Shaders in JavaScript**

Access shader references via ```AFRAME.shaderfrog```.

```
AFRAME.shaderfrog.Thruster_Shader.uniforms.backgroundColor.value.r = "0.2";
AFRAME.shaderfrog.Thruster_Shader.uniforms.backgroundColor.value.g = "1";

```

___

**Build and Publish Your Own Custom Shader Packs**

- <a href="https://glitch.com/edit/#!/remix/aframe-shaderfrog-component" rel="noopener noreferrer">Remix</a> this project on Glitch

- Follow these <a href="https://glitch.com/edit/#!/aframe-shaderfrog-component?path=src%2Fshaders%2FREADME.md%3A22%3A0" rel="noopener noreferrer">instructions</a>.