const request = require('request-json');
const client = request.createClient('https://raw.githubusercontent.com');
const boilerplatePackagesPath = "/SC5/sc5-serverless-boilerplate/master/package.json";

const currentPackages = require('../package.json');

client.get(boilerplatePackagesPath, function(err, res, body) {
  const boilerPackages = body;
  console.log('DEVDEPENDENCIES');

  const devPackages = Object.keys(boilerPackages.devDependencies);
  devPackages.forEach((pkg) => {
    if (boilerPackages.devDependencies[pkg] != currentPackages.devDependencies[pkg]) {
      console.log(` ${pkg}: ${boilerPackages.devDependencies[pkg]} <=> ${currentPackages.devDependencies[pkg]}`);
    }
  });

  console.log('DEPENDENCIES');
  const prodPackages = Object.keys(boilerPackages.dependencies);
  prodPackages.forEach((pkg) => {
    if (boilerPackages.dependencies[pkg] != currentPackages.dependencies[pkg]) {
      console.log(` ${pkg}: ${boilerPackages.dependencies[pkg]} <=> ${currentPackages.dependencies[pkg]}`);
    }
  });

  console.log('SCRIPTS');
  const scripts = Object.keys(boilerPackages.scripts);
  scripts.forEach((script) => {
    if (boilerPackages.scripts[script] != currentPackages.scripts[script]) {
      console.log(` ${script}: ${boilerPackages.scripts[script]} <=> ${currentPackages.scripts[script]}`);
    }
  });
});