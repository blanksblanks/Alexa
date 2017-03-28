/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This simple function uses the Amazon Alexa Skills
 * nodejs skill development kit and returns a random
 * nursery rhyme when it receives a request.
 **/
 
'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.ad861929-ecc8-415c-a441-8e750ac3e268';

const sailorWentToSea = {
    name: 'A Sailor Went To Sea',
    lyrics:
    'A sailor went to sea sea sea.\
    To see what he could see see see.\
    But all that he could see see see.\
    Was the bottom of the deep blue sea sea sea!'
};

const fiveLittleMonkeys = {
    name: 'Five Little Monkeys',
    lyrics:
    'Five little monkeys jumping on the bed.\
    One fell off and bumped his head.\
    Mama called the doctor and the doctor said:\
    "No more monkeys jumping on the bed!"\
    \
    Four little monkeys jumping on the bed.\
    One fell off and bumped his head.\
    Mama called the doctor and the doctor said:\
    "No more monkeys jumping on the bed!"\
    \
    Three little monkeys jumping on the bed.\
    One fell off and bumped his head.\
    Mama called the doctor and the doctor said:\
    "No more monkeys jumping on the bed!"\
    \
    Two little monkeys jumping on the bed.\
    One fell off and bumped his head.\
    Mama called the doctor and the doctor said:\
    "No more monkeys jumping on the bed!"\
    \
    One little monkey jumping on the bed.\
    He fell off and bumped his head.\
    Mama called the doctor and the doctor said:\
    "No more monkeys jumping on the bed!"\
    \
    Now there\'s no little monkeys jumping on the bed.\
    They\'re all jumping on the sofa instead!'
};

const littleTeapot = {
    name: 'I\'m A Little Teapot',
    lyrics:
    'I\'m a little teapot.\
    Short and stout.\
    Here is my handle.\
    Here is my spout.\
    When I get all steamed up.\
    Hear me shout.\
    Just tip me over and pour me out!\
    \
    I\'m a special teapot.\
    Yes, it\'s true.\
    Here\'s an example of what I can do.\
    I can turn my handle into a spout.\
    Just tip me over and pour me out!'
};

const languageStrings = {
    'en': {
        'translation': {
            'RHYMES': [
                sailorWentToSea,
                fiveLittleMonkeys,
                littleTeapot
            ],
            'SKILL_NAME' : 'Nursery Rhymes',
            'HELP_MESSAGE' : 'You can say "give me a nursery rhyme", or you can say "exit" this time... How do you do? What can I do for you?',
            'HELP_REPROMPT' : 'What can I do for you?',
            'STOP_MESSAGE' : 'Goodbye! Hope you give me another try!'
        }
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetRhyme');
    },
    'GetNewRhymeIntent': function () {
        this.emit('GetRhyme');
    },
    'GetRhyme': function () {
        const rhymes = this.t('RHYMES');
        const index = Math.floor(Math.random() * rhymes.length);
        const title = rhymes[index]['name'];
        const speechOutput = rhymes[index]['lyrics'];
        const textOutput = speechOutput.replace(/    /g, '\n')
                                .replace(/\<([^<>]+)\>/g, '')
        this.emit(':tellWithCard', speechOutput, title, textOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
