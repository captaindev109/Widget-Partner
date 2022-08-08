/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Module Generator v1.0
 * This generator can create a styled component module, unit and snapt shot testing  module
 * storybook module and a global index export module as an Interface within the module
 */
const fs = require('fs') ;
const { component, story, mytest, barrel } = require('./component_template');

const initAndLoadFileSystems = () => {

  // grab component name from terminal argument
const [moduleName] = process.argv.slice(2);
if (!moduleName) throw new Error('You must include a component name.');

const dir = `./src/components/${moduleName}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

const writeFileErrorHandler = (err) => {
  if (err) throw err;
}


// we define the list of modules below
const modules = [
  {
    moduleName: moduleName,
    extensioType: '.tsx',
    wrapper: component
  },
  {
    moduleName: moduleName,
    extensioType: '.stories.tsx',
    wrapper: story
  },
  {
    moduleName: moduleName,
    extensioType: '.test.tsx',
    wrapper: mytest
  },
  {
    moduleName: moduleName,
    extensioType: 'index.ts',
    wrapper: barrel
  },
]

modules.forEach((module) => {
  const formattedName = module.extensioType === 'index.ts' ? 'index.ts' : `${module.moduleName}${module.extensioType}`
  fs.writeFile(`${dir}/${formattedName}`, module.wrapper(moduleName), writeFileErrorHandler);
})

}

initAndLoadFileSystems();





