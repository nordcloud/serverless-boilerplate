// Split IAM Roles to separate cloudformation stack
const stacksMap = require('serverless-plugin-split-stacks').stacksMap;
stacksMap['AWS::IAM::Role'] = {
    destination: 'Roles' 
};