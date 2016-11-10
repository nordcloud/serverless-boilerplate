'use strict';

// Remove comments if you have a .env file
// require('dotenv').config();

/**
 * Sets up the environmental variables
 * @param event
 * @param context
 */
const config = () => {
  // current version of Serverless Framework doesn't pass project name to lambda or
  // stage in event object when function is scheduled to execution, this implementations
  // assumes that function name is project-name-{stage}-{function}

  if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const functionNameFragments = process.env.AWS_LAMBDA_FUNCTION_NAME.split('-');
    process.env.SERVERLESS_FUNCTION_NAME = functionNameFragments.pop();
    process.env.SERVERLESS_STAGE = functionNameFragments.pop();
    process.env.SERVERLESS_PROJECT = functionNameFragments.join('-');
  }
};

module.exports = {
  config,
};
