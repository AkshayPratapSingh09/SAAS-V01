var axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();
var data = JSON.stringify({
    "collection": "linkData",
    "database": "Bookmarks",
    "dataSource": "SAAS-Login",
    // "projection": {
    //     "_id": 1
    // }
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-nlimw/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.mongo_api,
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data["documents"]));
    })
    .catch(function (error) {
        console.log(error);
    });