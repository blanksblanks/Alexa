/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This simple function uses the Amazon Alexa Skills
 * nodejs skill development kit and returns a random
 * hello operator switch and bait style rhyme when it
 * receives a request.
 **/
  
"use strict";
var Alexa = require("alexa-sdk");
var APP_ID = "amzn1.ask.skill.f949e7cf-6c18-4afe-806a-bd9015954dc9";

const helloOperator = {
    name: "Hello Operator (Version 1)",
    lyrics:
    "Miss Susie had a steamboat,\
    The steamboat had a bell,\
    Miss Susie went to heaven,\
    The steamboat went to.\
    Hello operator?\
    Please give me number nine,\
    And if you disconnect me,\
    I'll chop off your.\
    Behind the refrigerator,\
    There was a piece of glass,\
    Miss Susie sat upon it,\
    It went right up her.\
    Ask me no more questions,\
    And I'll tell you no more lies,\
    The boys are in the bathroom,\
    Zipping up their.\
    Flies are in the city,\
    The bees are in the park,\
    Boys and girls are kissing,\
    In the D-A-R-K D-A-R-K D-A-R-K.\
    Dark is like a movie,\
    A movie's like a show,\
    A show is like a TV screen,\
    And that is all I know.\
    I know I know my mother,\
    I know I know my pa,\
    I know I know my sister,\
    With the forty acre bra.\
    Brother's like a sister,\
    A sister's like an aunt,\
    An aunt is like a relative,\
    Who likes to rave and rant,\
    I wish I had a nickel,\
    I wish I had a dime,\
    I wish I had a boyfriend,\
    Who kissed me all the time!\
    My Ma gave me a nickel,\
    My Pa gave me a dime,\
    My Sister gave me a boyfriend,\
    Who'd kiss me all the time.\
    My Ma took back the nickel,\
    My Pa took back the dime,\
    My Sister took back her boyfriend,\
    and gave me Frankenstein!\
    He made me wash the dishes,\
    He made me wash the floors,\
    He made me wash his underwear,\
    So I kicked him out the door,\
    I kicked him over London,\
    I kicked him over France,\
    I kicked him to Hawaii,\
    where he learned to Hula dance!\
    My mother's like Godzilla,\
    My father's like King Kong,\
    My sister is the stupid one,\
    That taught me this dumb song.\
    Hello operator?\
    Please give me number ten!\
    And if you disconnect me,\
    I'll sing this song again!"
};

const helloOperator2 = {
    name: "Hello Operator (Version 2)",
    lyrics:
    "Miss Susie had a steamboat,\
    The steamboat had a bell,\
    Miss Susie went to heaven,\
    The steamboat went to.\
    Hello operator?\
    Please give me number nine,\
    And if you disconnect me,\
    I'll chop off your.\
    Behind the refrigerator,\
    There was a piece of glass,\
    And if you slip up on it,\
    It'll go right up your.\
    Ask me no more questions,\
    And I'll tell you no more lies,\
    The boys are in the bathroom,\
    Zipping up their.\
    Flies are in the city,\
    The bees are in the park,\
    Boys and girls are kissing,\
    In the D-A-R-K D-A-R-K D-A-R-K.\
    Dark dark dark!"
};

const helloOperator3 = {
    name: "Hello Operator (Version 3)",
    lyrics:
    "Miss Susie had a steamboat,\
    The steamboat had a bell,\
    Miss Susie went to heaven,\
    The steamboat went to.\
    Hello operator?\
    Please give me number nine,\
    And if you disconnect me,\
    I'll chop off your.\
    Behind the refrigerator,\
    There was a piece of glass,\
    And if you slip up on it,\
    It'll go right up your.\
    Ask me no more questions,\
    I'll tell you no more lies,\
    The cows are in the pasture,\
    Making chocolate pies!"
};

const helloOperator4 = {
    name: "Hello Operator (Version 4)",
    lyrics:
    "Miss Susie had a steamboat,\
    The steamboat had a bell,\
    Miss Susie went to heaven,\
    The steamboat went to.\
    Hello operator?\
    Please give me number nine,\
    And if you disconnect me,\
    I'll chop off your.\
    Behind the refrigerator,\
    There was a piece of glass,\
    And if you slip up on it,\
    You'll fall upon your.\
    Ask me no more questions,\
    Tell me no more lies,\
    Miss Susie told me all of this,\
    The day before she.\
    Dyed her hair all purple,\
    She dyed her hair all pink,\
    She dyed her hair in polka dots,\
    And washed it down the.\
    Sink me in the ocean,\
    Sink me in the sea,\
    You can piddle in the puddle,\
    But please don't pee on me!"
};

const wendysAuditionSong = {
    name: "Wendy's Audition Song from South Park",
    lyrics:
    "Mrs. Landers was a health nut,\
    she cooked food in a wok,\
    Mr. Harris was her boyfriend,\
    and he had a great big.\
    Cock-a-doodle-doodle!\
    the rooster just won't quit,\
    And I don't want my breakfast,\
    because it tastes like.\
    Shih Tzus make good house pets,\
    they're cuddly and sweet,\
    Monkeys aren't good to have,\
    'cos they like to beat their,\
    Meeting in the office,\
    a meeting in the hall,\
    The boss he wants to see you,\
    so you can suck his.\
    Balzac was a writer,\
    he lived with Allen Funt,\
    Mrs. Roberts didn't like him,\
    but that's 'cos she's a.\
    Contaminated water,\
    can really make you sick,\
    Your bladder gets infected,\
    and blood comes out your.\
    Dictate what I'm saying,\
    'cos it will bring you luck,\
    and if you all don't like it,\
    I don't give a flying duck!"
}

const languageStrings = {
    "en": {
        "translation": {
            "RHYMES": [
                helloOperator,
                helloOperator2,
                helloOperator3,
                helloOperator4,
                wendysAuditionSong
            ],
            "SKILL_NAME" : "Hello Operator",
            "HELP_MESSAGE" : "You can say 'give me a song', or you can say 'exit' this time... How do you do? What can I do for you?",
            "HELP_REPROMPT" : "What can I do for you?",
            "STOP_MESSAGE" : "Goodbye! Hope you give me another try!"
        }
    }
};

const handlers = {
    "LaunchRequest": function () {
        this.emit("GetRhyme");
    },
    "GetNewRhymeIntent": function () {
        this.emit("GetRhyme");
    },
    "GetRhyme": function () {
        const rhymes = this.t("RHYMES");
        const index = Math.floor(Math.random() * rhymes.length);
        const title = rhymes[index]["name"];
        const speechOutput = rhymes[index]["lyrics"];
        const textOutput = speechOutput.replace(/        /g, "\n")
                                .replace(/\<([^<>]+)\>/g, "")
        this.emit(":tellWithCard", speechOutput, title, textOutput);
    },
    "AMAZON.HelpIntent": function () {
        const speechOutput = this.t("HELP_MESSAGE");
        const reprompt = this.t("HELP_MESSAGE");
        this.emit(":ask", speechOutput, reprompt);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
    "SessionEndedRequest": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
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
