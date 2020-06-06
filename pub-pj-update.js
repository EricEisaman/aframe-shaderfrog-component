/*
The rollup.config currently builds an IIFE style package allowing CommonJS.
TODO: Add support for pure ES6 Modules
*/
const fs = require('fs')

const settings = require( process.cwd() + "/package.json" );


const pj = {
  
  name: settings.name,
  
  version: settings.version,
  
  description: settings.description,
  
  main: `latest/${settings.name}.min.js`,
  
  homepage: settings.homepage,
  
  repository: settings.repository,
  
  license: settings.license,
  
  keywords: settings.keywords,
   
}

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

storeData( pj , './dist/package.json' );

