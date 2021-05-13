'use string';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./dynamoose.schema.js') ;


exports.handler = async (event) => {
    
    try {
        // const gap = JSON.parse(event);
        // console.log("1:   ", gap)
        const {name, number} = event.body;
        const id = uuid();
        const record = new PeopleModel({id, name, number})
        console.log("2:   ", record)
        const data = await record.save();
        console.log("NEW PERSON:", data, record)
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }catch(e){
        return{ 
            statusCode: 500,
            response: e.message}
    }
}