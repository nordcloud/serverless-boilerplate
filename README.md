# Nordcloud Serverless Boilerplate

The Nordcloud serverless-boilerplate is a project template for new serverless services. Contents of the template:
* plugin [serverless-mocha-plugin](https://github.com/nordcloud/serverless-mocha-plugin): enable test driven development using mocha, creation of functions from command line
* plugin [serverless-offline](https://github.com/dherault/serverless-offline): run your services offline for e.g. testing
* plugin [serverless-webpack](https://github.com/elastic-coders/serverless-webpack): optimize pacakge size with webpack
* plugin [serverless-kms-secrets](https://github.com/nordcloud/serverless-kms-secrets): ease handling of KMS encrypted secrets
* plugin [serverless-plugin-custom-roles](https://www.npmjs.com/package/serverless-plugin-custom-roles): enable setting roles on a per function basis
* plugin [serverless-plugin-split-stacks](https://github.com/dougmoscrop/serverless-plugin-split-stacks): Split Cloudformation stack to multiple stacks to overcome the 200 resource limit
* file `serverless.yml.json`: Register plugins above
* file `webpack.config.js`: Settings for webpack-plugin
* file `templates/function.ejs`: Template to use for new functions

## Creating new project

With Serverless Framework v1.5 and later, a new project based on the project template is initialized with the command

```
> sls install -u https://github.com/nordcloud/serverless-boilerplate -n myservicename
> cd myservicename
> npm install
```

## Testing vulnerabilities

Test vulnerabilities with NSP using
```
> npm run nsp
```

## Comparing setup with boilerplate

You can compare your project setup (dependencies, devdependencies, scripts) with the boilerplate using the command

```
> npm run compare-boilerplate
```

The script reports only for items that are in the boilerplate and differ from your current project.

## TODO

Please see project GitHub [issue tracker](https://github.com/nordcloud/serverless-boilerplate/issues).

## Release History

* 2016/11/02 - v1.0.0 - Initial version for Serverless 1.0

## License

Copyright (c) 2016 [Nordcloud](https://www.nordcloud.com/), licensed for users and contributors under MIT license.
https://github.com/nordcloud/serverless-boilerplate/blob/master/LICENSE-MIT
