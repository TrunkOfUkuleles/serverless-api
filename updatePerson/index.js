'use strict';

const dynamoose = require('dynamoose');
const PeopleModel = require('./dynamoose.schema.js');

exports.handler = async (event) => {
    const update = event.body
    const id = event.queryStringParameters.id
console.log("UPDATING: ", event.queryStringParameters.id, update)
    
  try {
    let newey = await PeopleModel.update({"id": id}, {...update});
    console.log("Hope that updated", newey);

    return {
      statusCode: 200,
      body: JSON.stringify(newey)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}