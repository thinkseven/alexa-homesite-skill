var express = require('express');
var router = express.Router();

router.post('/auth', function (req, res, next) {

    /*
    res.json({
        "access_token": "20522e89cb56fbd074fed8d731d80a11",
        "token_type": "bearer"
    });
    */


    /*
    var request = require("request");

    var options = {
        method: 'GET',
        url: 'http://liveq-service.us-west-2.elasticbeanstalk.com/service/api/category',
        headers: {
            'postman-token': '5b9aa90d-ff86-2267-6184-eb999cc86490',
            'cache-control': 'no-cache'
        }
    };

    request(options, function (error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
        if (error) throw new Error(error);
        res.json(body);
    });
    */


    var request = require("request");
    var options = {
        method: 'POST',
        url: 'https://paceapi.homesitep2.com/auth',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            email: req.body.email,
            password: req.body.password
        },
        json: true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(body);
    });


});

router.get('/user', function (req, res, next) {

});

router.get('/billing', function (req, res, next) {

});

router.post('/payments', function (req, res, next) {

});

router.post('/confirmation', function (req, res, next) {

});

module.exports = router;