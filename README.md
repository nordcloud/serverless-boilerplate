# SC5 Serverless Boilerplate

sc5-serverless-boilerplate is a project template for new serverless projects. Contents of the template:
* plugins serverless-cors-plugin, serverless-helpers-js
* s-template with RequestTemplates restGet, restPost, restPut, restDelete for use in endpoints in s-function files

## Creating new project

A new project based on the project template is initialized with the command

```
> sls project install sc5-serverless-boilerplate
> cd sc5-serverless-boilerplate
> npm install
> sls project init
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

Add the following to the "custom" section of either s-components or s-function files.

```
"cors": {
    "allowOrigin": "*",
    "allowHeaders": ["Content-Type", "X-Amz-Date", "Authorization", "X-Api-Key"]
}  
```

## Determining project name / stage during runtime

Some resources (e.g. database tables, SNS topics, etc...) may be specific to the project and stage. 
The project name and stage name can be determined during runtime using
```
  process.env.SERVERLESS_PROJECT_NAME (for the project name)
  process.env.SERVERLESS_STAGE (for the project stage)
```
## TODO

Please see project GitHub [issue tracker](https://github.com/SC5/sc5-serverless-boilerplate/issues).

## Release History

* 2016/03/02 - v0.1.0 - Initial commit (partially working stub)

## License

Copyright (c) 2016 [SC5](http://sc5.io/), licensed for users and contributors under MIT license.
https://github.com/sc5/sc5-serverless-boilerplate/blob/master/LICENSE-MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/SC5/sc5-serverless-boilerplate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
