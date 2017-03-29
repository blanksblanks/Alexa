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
    I don't give a flying fuck!"
}

const shavingCream = {
    name: "Shaving Cream by Dr. Demento",
    lyrics:
    "I have a sad story to tell you\
    It may hurt your feelings a bit\
    Last night when I walked into my bathroom\
    I stepped in a big pile of...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!\
    \
    I think I'll break off with my girlfriend\
    Her antics are queer I'll admit\
    Each time I say, 'Darling, I love you'\
    She tells me that I'm full of...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!\
    \
    Our baby fell out of the window\
    You'd think that her head would be split\
    But good luck was with her that morning\
    She fell in a barrel of...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!\
    \
    An old lady died in a bathtub\
    She died from a terrible fit\
    In order to fulfill her wishes\
    She was buried in six feet of...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!\
    \
    When I was in France with the army\
    One day I looked into my kit\
    I thought I would find me a sandwich\
    But the darn thing was loaded with...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!\
    \
    And now, folks, my story is ended\
    I think it is time I should quit\
    If any of you feel offended\
    Stick your head in a barrel of...\
    \
    Shaving cream, be nice and clean!\
    Shave everyday and you'll always look keen!"
};

const polkaDot = {
    name: "Polka Dot Undies by Bowser & Blue",
    lyrics:
    "Well, I went for a drive in my pickup truck.\
    I picked up my girl, 'cause I wanted to.\
    Show her my gloves, 'cause she had on her mitts,\
    And I blushed brightly when she showed me her.\
    Perfume that she buys whenever Avon calls,\
    So I took off my pants, and I showed her my.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!\
    My polka-dot undies!\
    Yeah, my polka-dot undies from Miracle Mart.\
    I said, 'Look, be careful, I think I'm gonna.\
    Turn a sharp corner, and go up on the grass.'\
    She leaned out the window, and I thought I saw her.\
    Pointing to something that flashed by real quick.\
    She said, 'Hey, look at that! It looks just like your.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!\
    Polka-dot undies!\
    Yeah, my polka-dot undies that I wear back-to-front.\
    She smiled and she said, 'Have you seen my.\
    Brother's new car? The one that he stole?'\
    Then she asked me to look up her.\
    Whole damn family, and I went into shock.\
    When I found out it was her sister who really liked.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!\
    Polka-dot undies!\
    Well, I took her out to dinner, but on one thing she was firm:\
    She'd swallow almost anything, except for.\
    Stories that her brother didn't like birds,\
    But hung around leather bars, and liked to eat.\
    Fish and chips, and he still sucked his thumb.\
    I said, 'I don't mind!'' And she kissed me on my.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!\
    My polka-dot undies!\
    I kissed her softly, and I said, 'I'll tell you what.\
    Let's roll up the windows, and I'll eat your.\
    Last bar of chocolate - the one that's in the parcel.'\
    She said, 'No, no, no', and she called me a.\
    Taxi. And I said, 'I beg your pardon!\
    But get me home real fast before I lose my.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!'\
    Polka-dot undies!\
    The moral of this story, like a jewel it is gleamin'.\
    But you'll never find it in a glass of warm.\
    Milk or tea, 'cause it will not fit,\
    And you probably already think I am full of.\
    Vague innuendos and double-meanin' rhymes.\
    But I'll tell you that obscenity is all in your.\
    <say-as interpret-as='interjection'>Dot dot dot</say-as>\
    Polka-dot undies!\
    Your polka-dot undies!\
    Yeah, your edible undies!\
    Your polka-dot undies!\
    Yeah!"
};

const luluChorus =
"Bang, Bang, Lulu,\
Bang, <say-as interpret-as='interjection'>Bang</say-as> away,\
Who's gonna' Bang, Bang Lulu,\
When Lulu's gone away.\n"

const bangBangLulu = {
    name: "Bang Bang Lulu (Version 1)",
    lyrics:
    "Lulu had a chicken,\
    Lulu had a duck,\
    She put the two together,\
    To see if they could..." +
    luluChorus +
    "Lulu had a boyfriend,\
    His name was Diamond Rick,\
    She never got his diamond,\
    But always got his..." +
    luluChorus +
    "Lulu had a baby,\
    It was an awful shock,\
    She couldn't call it Lulu,\
    'Cause the bastard had a..." +
    luluChorus +
    "I took her to the pictures,\
    We sat down in the stalls,\
    And every time the lights went out,\
    She'd grab me by the..." +
    luluChorus +
    "She and I went fishing,\
    In a dainty punt,\
    And every time she caught a sprat,\
    She'd stuff it up her..." +
    luluChorus +
    "Some girls work in factories,\
    Some girls work in stores,\
    But Lulu works in a honky tonk,\
    With forty other..." +
    luluChorus +
    "I wish I were the silver ring,\
    On Lulu's dainty hand,\
    Then every time she scratches her arse,\
    I'd see the promised..." +
    luluChorus +
    "I wish I were the chamber pot,\
    Under Lulu's bed,\
    Then every time she took a piss,\
    I'd see her maiden..." +
    luluChorus +
    "Lulu had two boy-friends,\
    Both were very rich,\
    One was the son of a banker,\
    The other a son-of-a..." +
    luluChorus +
    "Lulu had a boy-friend,\
    His name was Tommy Tucker,\
    He took her down the alley,\
    To see if he could..." +
    luluChorus +
    "Lulu had a boy-friend,\
    A funny little chap,\
    Every time they had a bit,\
    She got a dose of..." +
    luluChorus +
    "Lulu had a boy-friend,\
    He was very fit,\
    Working all day on the farm,\
    His job was shoveling..." +
    luluChorus +
    "Lulu had a little lamb,\
    She kept it in a bucket,\
    Every time the lamb jumped out,\
    The bulldog used to..." +
    luluChorus +
    "She and I went walking,\
    We walked along the grass,\
    She slipped on a banana peel,\
    And fell down on her..." +
    luluChorus +
    "Lulu had a bicycle,\
    The seat was sharp not blunt,\
    Every time she jumps on it,\
    It sticks her in the..." +
    luluChorus +
    "Lulu has a bicycle,\
    The seat was made of glass,\
    And every time she sat on it,\
    You could see her..." +
    luluChorus +
    "Lulu had a boyfriend,\
    His name was Michael Hunt,\
    She like him above the rest,\
    Because he'd eat her..." +
    luluChorus +
    "Lulu had a turtle,\
    And Lulu had a duck.\
    She put them in the bathtub,\
    To see if they would..." +
    luluChorus +
    "Lulu had a job,\
    But then she had to quit,\
    'Cause every time she turned around,\
    The boss would grab her...\
    I took Lulu sailing,\
    I took her in a punt,\
    I took off her knickers,\
    Then took her in the..." +
    luluChorus +
    "<say-as interpret-as='interjection'>Bada Bing Bada Boom!</say-as>"
};

const bangBangLulu2 = {
    name: "Bang Bang Lulu (Version 2)",
    lyrics:
    "Now Lulu had a boyfriend,\
    His name is Tommy Tucker,\
    He took her down the alley,\
    To see if he could..." +
    luluChorus +
    "Now Lulu has a bicycle \
    The seat is very sharp\
    Every time she sits on it\
    It stick into her..." +
    luluChorus +
    "Now Lulu had two boyfriends\
    Both were very rich\
    One was the son of her banker\
    The other was a son of a..." +
    luluChorus +
    "Now Lulu had a boyfriend\
    His name was Michael Hunt\
    She like him the best\
    Because he kissed her on the" +
    luluChorus +
    "Oh, Lulu is a pretty girl\
    She has a lot of class\
    Mini-skirts she wears always\
    Because she show her " +
    luluChorus +
    "Oh, Lulu had a boyfriend\
    He is very fit\
    Working on the farm\
    His job was shoveling" +
    luluChorus +
    "Lulu had a boyfriend\
    A skinny little runt\
    When she let him have a bang\
    He vanish in her" +
    luluChorus +
    "Oh, Lulu had a bicycle\
    The seat was very blunt\
    Every time she jumped on it\
    It sticks into her" +
    luluChorus +
    "Now Lulu had a boyfriend\
    A puny little chap\
    When she let him have a little bit\
    He caught a douse of " +
    luluChorus +
    "<say-as interpret-as='interjection'>Bazinga!</say-as>"
};

const languageStrings = {
    "en": {
        "translation": {
            "RHYMES": [
                helloOperator,
                helloOperator2,
                helloOperator3,
                helloOperator4,
                wendysAuditionSong,
                shavingCream,
                polkaDot,
                bangBangLulu,
                bangBangLulu2
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
