## Instructions
___

Remix this project then...

Place your **.json** shaders exported from <a href="https://shaderfrog.com/app" rel="noopener noreferrer">ShaderFrog</a> in this directory, then import them into the [main.js](https://glitch.com/edit/#!/aframe-shaderfrog-component?path=src%2Fmain.js%3A1%3A0) file and add it to the shaders array.
Remove any shaders you don't want.

Example:

```
import Polkadot_Shader from './shaders/Polkadot_Shader.json';
shaders['Polkadot_Shader']=Polkadot_Shader;

```

Set a <a href="https://remarkablemark.org/npm-package-name-checker/" rel="noopener noreferrer">unique package name</a> in the **package.json**.


Set your first version to start at **0.0.10** in the **package.json**.

Perform a development build with ```pnpm run dev``` in the **Terminal**.

Perform a production build with ```pnpm run prod``` in the **Terminal**.

Your production build will appear in the associated **dist/<version>** folder.

If you wish, you can add your **NPM_TOKEN** in **.env** and publish your own custom shaders package with ```pnpm run publish``` in the **Terminal**.



