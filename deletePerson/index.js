'use strict';

const dynamoose = require('dynamoose');
const PeopleModel = require('./dynamoose.schema.js');

exports.handler = async (event) => {
  console.log("event ", event)
    const id = event.queryStringParameters.id
  try {

    let test = await PeopleModel.delete({"id": id});
    console.log("Delete operation was successful.", test);

    return {
      statusCode: 200,
      body: JSON.stringify( test)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}