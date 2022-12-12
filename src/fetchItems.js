"use strickt";

const { DynamoDB } = require("aws-sdk");
const AWS = require("aws-skd");

const fetchItems = async (event) => {

    const dynamodb = new AWS.Dynamodb.DocumentClient();
    let items;

    try {
        const results = await DynamoDB.scan({
            TableName: "ItemTableNew" 
        }).promise();
    
        items =result.Items
    } catch (error) {
      
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    };
}

module.exports = {
    handler: fetchItems
}