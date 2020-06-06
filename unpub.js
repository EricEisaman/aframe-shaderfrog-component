const {exec} = require('child_process');

const settings = require( process.cwd() + "/package.json" );

const versionToRemove = process.argv[2];

console.log('running script:');
console.log(`pnpm run npmrc && cd /app/dist && npm unpublish ${settings.name}@${versionToRemove}`);

exec(`pnpm run npmrc && cd /app/dist && npm unpublish ${settings.name}@${versionToRemove}` , err=>{
  if (err) {
    console.error(err);
    return;
  }
  console.log('Unpublish script executed successfully.');
  console.log(`Check NPM for final verification at https://www.npmjs.com/package/${settings.name}`);
  console.log(`Removing local distribution directory for version ${versionToRemove}`);
  exec(`rm -rf /app/dist/${versionToRemove} && refresh` , err=>{if(err)console.log(err)});
})

