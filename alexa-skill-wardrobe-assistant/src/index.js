var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.a4d52cc4-9879-4597-8f17-6f98f46b23ed";

var states = {
    STARTMODE: '_STARTMODE',
    ASKMODE: '_ASKMODE',
    DESCRIPTIONMODE: '_DESCRIPTIONMODE'
};

// Questions
var nodes = [{ "node": 1, "message": "Do you absolutely love it?", "yes": 2, "no": 3 },
             { "node": 2, "message": "Does it fit?", "yes": 4, "no": 5 },
             { "node": 3, "message": "Is it a wardrobe staple?", "yes": 2, "no": 6 },
             { "node": 4, "message": "Is it flattering on your body?", "yes": 7, "no": 17 },
             { "node": 5, "message": "Are you currently pregnant or post-partum?", "yes": 8, "no": 17 },
             { "node": 6, "message": "Does it have sentimental value", "yes": 9, "no": 17 },
             { "node": 7, "message": "Have you worn it in the last 12 months?", "yes": 10, "no": 11 },
             { "node": 8, "message": "Is it damaged or stained?", "yes": 12, "no": 10 },
             { "node": 9, "message": "Did you wear it to your wedding?", "yes": 16, "no": 13 },
             { "node": 10, "message": "Is it currently in style?", "yes": 16, "no": 14 },
             { "node": 11, "message": "Is it for special occasions?", "yes": 10, "no": 17 },
             { "node": 12, "message": "Can you get it fixed this month?", "yes": 10, "no": 17 },
             { "node": 13, "message": "Is it one of your Top 5 sentimental clothing items?", "yes": 16, "no": 15 },
             { "node": 14, "message": "Can I convince you to get rid of it?", "yes": 17, "no": 16 },
             { "node": 15, "message": "Is it a uniform for a current job?", "yes": 16, "no": 14 },
             // Answers & descriptions
             { "node": 16, "message": "keep it!", "yes": 0, "no": 0, "description": "Use garment organizers to separate your clothes into categories that work for you - seasons, occasions, type of item, etc. If you're hanging your clothes, use the backwards hanger strategy when putting clothes back into your closet to get a better idea of the items you actually wear often." },
             { "node": 17, "message": "get rid of it!", "yes": 0, "no": 0, "description": "You can donate it to Salvation Army or a friend or family member, try selling it on eBay, bring it to a clothes swap, or just throw it out."}
            ];

var welcomeMessage = "Hi, I am your Wardrobe Assistant. Before we begin, make sure you have picked a piece of clothing from your closet. Are you ready?";
var repeatWelcomeMessage = "Say yes to start or no to quit.";
var promptToStartMessage = "Say yes to continue, or no to stop.";
var promptToSayYesNo = "Say yes or no to answer the question.";
var decisionMessage = "You should";
var playAgainMessage = "Say 'tell me more' to have me elaborate, or do you want to play again?";
var helpMessage = "I will ask you some questions that will help you decide whether you should keep an item of clothing in your closet. Pick an item, any item. Want to start now?";
var goodbyeMessage = "Ok, let's try again next time!";
var speechNotFoundMessage = "Could not find speech for node";
var nodeNotFoundMessage = "In nodes array could not find node";
var descriptionNotFoundMessage = "Could not find description for node";
var utteranceTellMeMore = "tell me more";
var utterancePlayAgain = "play again";

var START_NODE = 1;

// --------------- Handlers -----------------------

// Called when the session starts.
exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandler, startGameHandlers, askQuestionHandlers, descriptionHandlers);
    alexa.execute();
};

// set state to start up and welcome the user
var newSessionHandler = {
  'LaunchRequest': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
  },'AMAZON.HelpIntent': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', helpMessage, helpMessage);
  },
  'Unhandled': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', promptToStartMessage, promptToStartMessage);
  }
};

var startGameHandlers = Alexa.CreateStateHandler(states.STARTMODE, {
    'AMAZON.YesIntent': function () {
        this.handler.state = states.ASKMODE;
        var message = helper.getSpeechForNode(START_NODE);
        this.attributes.currentNode = START_NODE;
        this.emit(':ask', message, message);
    },
    'AMAZON.NoIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StartOverIntent': function () {
         this.emit(':ask', promptToStartMessage, promptToStartMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', helpMessage, helpMessage);
    },
    'Unhandled': function () {
        this.emit(':ask', promptToStartMessage, promptToStartMessage);
    }
});

// user will have been asked a question when this intent is called. We want to look at their yes/no
// response and then ask another question. If we have asked more than the requested number of questions Alexa will
// make a choice, inform the user and then ask if they want to play again
var askQuestionHandlers = Alexa.CreateStateHandler(states.ASKMODE, {
    'AMAZON.YesIntent': function () {
        helper.yesOrNo(this,'yes');
    },
    'AMAZON.NoIntent': function () {
         helper.yesOrNo(this, 'no');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', promptToSayYesNo, promptToSayYesNo);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StartOverIntent': function () {
        this.handler.state = states.STARTMODE;
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'Unhandled': function () {
        this.emit(':ask', promptToSayYesNo, promptToSayYesNo);
    }
});

// user has heard the final choice and has been asked if they want to hear the description or to play again
var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTIONMODE, {
 'AMAZON.YesIntent': function () {
        this.handler.state = states.STARTMODE;
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'AMAZON.NoIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', promptToSayYesNo, promptToSayYesNo);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StartOverIntent': function () {
        this.handler.state = states.STARTMODE;
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'DescriptionIntent': function () {
        helper.giveDescription(this);
      },

    'Unhandled': function () {
        this.emit(':ask', promptToSayYesNo, promptToSayYesNo);
    }
});

// --------------- Helper Functions  -----------------------
var helper = {
    // gives the user more information on their final choice
    giveDescription: function (context) {
        var description = helper.getDescriptionForNode(context.attributes.currentNode);
        var message = description + ', ' + repeatWelcomeMessage;
        context.emit(':ask', message, message);
    },

    // logic to provide the responses to the yes or no responses to the main questions
    yesOrNo: function (context, reply) {
        var nextNodeId = helper.getNextNode(context.attributes.currentNode, reply);
        if (nextNodeId == -1)
        {
            context.handler.state = states.STARTMODE;
            // the current node was not found in the nodes array
            // this is due to the current node in the nodes array having a yes / no node id for a node that does not exist
            context.emit(':tell', nodeNotFoundMessage, nodeNotFoundMessage);
        }

        // get the speech for the child node
        var message = helper.getSpeechForNode(nextNodeId);
        if (helper.isAnswerNode(nextNodeId) === true) {
            context.handler.state = states.DESCRIPTIONMODE;
            message = decisionMessage + ' ' + message + ' ' + playAgainMessage;
        }
        context.attributes.currentNode = nextNodeId;
        context.emit(':ask', message, message);
    },

    // gets the description for the given node id
    getDescriptionForNode: function (nodeId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                return nodes[i].description;
            }
        }
        return descriptionNotFoundMessage + nodeId;
    },

    // returns the speech for the provided node id
    getSpeechForNode: function (nodeId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                return nodes[i].message;
            }
        }
        return speechNotFoundMessage + nodeId;
    },

    // checks to see if this node is an choice node or a decision node
    isAnswerNode: function (nodeId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                if (nodes[i].yes === 0 && nodes[i].no === 0) {
                    return true;
                }
            }
        }
        return false;
    },

    // gets the next node to traverse to based on the yes no response
    getNextNode: function (nodeId, yesNo) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                if (yesNo == "yes") {
                    return nodes[i].yes;
                }
                return nodes[i].no;
            }
        }
        return -1;
    },
};
