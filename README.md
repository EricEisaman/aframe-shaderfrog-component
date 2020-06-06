![maintainer](https://cdn.glitch.com/4e53cd53-db7a-4126-950a-47ec03902b02%2Fhacker.png?v=1591365090437)

# Maintainer
____
**Description**

This is a boilerplate for designing and maintaining libraries, frameworks, and plugins.
____

**Features**

- Javascript bundling with <a href="https://rollupjs.org/guide/en/" rel="noopener noreferrer">rollup.js</a>.
- Publish to <a href="https://docs.npmjs.com/cli/publish" rel="noopener noreferrer">NPM</a>.


___

**Building**

- Development/Staging Builds:
  - Edit the **package.json** with your details.
  - Edit the source code found in the **src** directory.
  - Edit the library name in **public/staging/index.html**
  - In the **Terminal** ```pnpm run dev```
  - <a href="https://maintainer.glitch.me/staging/" rel="noopener noreferrer">Show Staging Page</a>
- Production Builds:
  - Edit the library name in **public/index.html**
  - In the **Terminal** ```pnpm run prod```
  - <a href="https://maintainer.glitch.me" rel="noopener noreferrer">Show Production Page</a>


___

**Publishing to NPM**

*Use the following pattern to publish any npm package from Glitch*

#### Do Once:
If you wish to create your own modified version of the CS1 Game Server:
- Create an <a href="https://www.npmjs.com/" rel="noopener noreferrer ">**npm account**</a>
- Create an <a href="https://docs.npmjs.com/creating-and-viewing-authentication-tokens" rel="noopener noreferrer ">**npm token**</a>
- Record your **npm token** in **.env**.

#### Do Every Publish
- In the **Terminal** ```pnpm run publish```

___

**🎉Congratulations!🎉**

#### From Node
- You can now install and require your NPM package!

#### In Your HTML
- You can load your package via the **unpkg.com** cdn!
  - <a href="unpkg.com/lib2020" rel="noopener noreferrer ">**unpkg.com/lib2020**</a>


