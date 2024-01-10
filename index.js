const express = require('express');// express makes APIs - connect frotend to database
const app = express(); // create an express application
app.listen(3000); //listen for web requests form the frontend and don't stop () => console.log('listening at 3000')); // listen for requests on port 3000
//make a list of boxes
const boxes = [
    { name: 'Box1', boxid: 1 },
    { name: 'Box2', boxid: 2 },
    { name: 'Box3', boxid: 3 },
    { name: 'Box4', boxid: 4 }
];
//1-URL
//2-Callback function
//3-Response
//req=request
//res=response

app.get('/boxes', (req,res)=>{
    res.send(JSON.stringify(boxes));//convert boxes to a string and send it to the user
});//return boxes to the user