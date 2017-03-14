'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    "GetBalanceIntent": function () {
        //if no amazon token, return a LinkAccount card
        if (this.event.session.user.accessToken == undefined) {
            this.emit(':tellWithLinkAccountCard', 'to start using this skill, please use the companion app to authenticate on Amazon');
            return;
        }
        this.emit(':tell', 'Your balance is $100');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye2!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye1!');
    },
    'Unhandled': function () {
        this.emit(':tell', 'Goodbye3!');
    }
};