# SC5 Serverless Boilerplate

sc5-serverless-boilerplate is a project template for new serverless projects. Contents of the template:
* plugin serverless-cors-plugin: allows centralized adding of CORS headers
* plugin serverless-optimizer-plugin: optimize size of lambda function size in deployment
* plugin [serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin): enable test driven development using mocha
* plugin [serverless-endpoint-helper](https://github.com/SC5/serverless-endpoint-helper): enable endpoint create from cli
* file s-project.json: Register plugins above
* file s-template.json: RequestTemplates restGet, restPost, restPut, restDelete for use in endpoints in s-function files

## Creating new project

A new project based on the project template is initialized with the command

```
> sls project install -n myProjectName sc5-serverless-boilerplate
> cd myProjectName
> npm install
```

## Using the REST endpoint templates

The REST endpoint templates can be used by refering to them in RequestTemplates in the endpoints section of the s-function file.
For example (for an endpoint with GET method)

```
RequestTemplates: "$${restGet}"
```

When using the REST endpoint templates, the incoming event has the following structure:
```
{
    "method": "GET/POST/PUT/DELETE/...",
    "body": { ... payload sent by client ... },  (only in restPost and restPut)
    "id": "identifier" (only in restPut and restDelete)
}
```

## Defining CORS headers

Add the following to the "custom" section of either _s-components_ or _s-function_ files.

```
"cors": {
    "allowOrigin": "*",
    "allowHeaders": ["Content-Type", "X-Amz-Date", "Authorization", "X-Api-Key"]
}
```

Deploy the endpoints (after deploying functions) inside the component folder using
```
sls endpoint deploy --all
```
Using this (instead of e.g. sls dash deploy) ensures that CORS headers (incl. the OPTIONS method
required for CORS preflight) are created properly

(see https://github.com/joostfarla/serverless-cors-plugin)

## Optimizing Lambda function size

To enabled optimization of Lambda function size, add the following to the "custom" section of
either _s-components_ or _s-function_ files.

```
"optimize": true
```
(see https://github.com/serverless/serverless-optimizer-plugin)

## Determining project name / stage during runtime

Some resources (e.g. database tables, SNS topics, etc...) may be specific to the project and stage.
The project name and stage name can be determined during runtime using
```
  process.env.SERVERLESS_PROJECT_NAME (for the project name)
  process.env.SERVERLESS_STAGE (for the project stage)
```

## Test Driven Development

Function test are created automatically when creating new functions into the test/ directory.
See [serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin) for more info


## TODO

Please see project GitHub [issue tracker](https://github.com/SC5/sc5-serverless-boilerplate/issues).

## Release History

* 2016/06/22 - v0.5.6 - Add serverless-endpoint-helper plugin
* 2016/04/09 - v0.5.5 - DynamoDB tables allowed by default
* 2016/04/09 - v0.5.2 - Add serverless-mocha-plugin for test driven development
* 2016/04/07 - v0.5.0 - Adds Serverless 0.5 compatibility
* 2016/03/09 - v0.0.6 - Documentation updates
* 2016/03/02 - v0.0.2 - Initial commit (partially working stub)

## License

Copyright (c) 2016 [SC5](http://sc5.io/), licensed for users and contributors under MIT license.
https://github.com/sc5/sc5-serverless-boilerplate/blob/master/LICENSE-MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/SC5/sc5-serverless-boilerplate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
