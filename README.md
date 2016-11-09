# SC5 Serverless Boilerplate

sc5-serverless-boilerplate is a project template for new serverless services. Contents of the template:
* plugin [serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin): enable test driven development using mocha, creation of functions from command line
* plugin [serverless-offline] (https://github.com/dherault/serverless-offline): enable endpoint create from cli
* plugin [serverless-webpack] (https://github.com/elastic-coders/serverless-webpack): enable endpoint create from cli
* file `serverless.yml.json`: Register plugins above
* file `webpack.config.js`: Settings for webpack-plugin

## Creating new project

A new project based on the project template is initialized with the command

```
> sls install -u https://github.com/SC5/sc5-serverless-boilerplate
> mv sc5-serverless-boilerplate myservicename
> cd myservicename
> perl -pi -e "s/sc5-serverless-boilerplate/myservicename/" serverless.yml package.json
> npm install
```


## TODO

Please see project GitHub [issue tracker](https://github.com/SC5/sc5-serverless-boilerplate/issues).

## Release History

* 2016/11/02 - v1.0.0 - Initial version for Serverless 1.0

## License

Copyright (c) 2016 [SC5](http://sc5.io/), licensed for users and contributors under MIT license.
https://github.com/sc5/sc5-serverless-boilerplate/blob/master/LICENSE-MIT
