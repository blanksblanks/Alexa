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

const ifYoureHappyAndYouKnowIt = {
    name: 'If You\'re Happy and You Know It',
    lyrics:
    'If you\'re happy and you know it, clap your hands!\
    If you\'re happy and you know it, clap your hands!\
    If you\'re happy and you know it...\
    And you really want to show it...\
    If you\'re happy and you know it, clap your hands!'
};

const onePotatoTwoPotatoes = {
    name: 'One Potato, Two Potatoes',
    lyrics:
    'One potato, two potatoes, three potatoes - four.\
    Five potatoes, six potatoes, seven potatoes - more.\
    Eight potatoes, nine potatoes, ten potatoes - all.\
    \
    One, two, three, four, five, six, seven, eight, nine, ten.\
    \
    One potato, two potatoes, three potatoes - four.\
    Five potatoes, six potatoes, seven potatoes - more.\
    Eight potatoes, nine potatoes, ten potatoes - all.'
};

const patACake = {
    name: 'Pat A Cake',
    lyrics:
    'Pat a cake. Pat a cake. Baker\'s man.\
    Bake me a cake as fast as you can.\
    Pat it, and prick it, and mark it with Bee.\
    And bake it in the oven for baby and me.\
    \
    Patty cake. Patty cake. Baker\'s man.\
    Bake me a cake as fast as you can.\
    Pat it, and prick it, and mark it with Bee.\
    And bake it in the oven for baby and me.'
};

const theMuffinMan = {
    name: 'The Muffin Man',
    lyrics:
    'Do you know the muffin man?\
    The muffin man, the muffin man.\
    Do you know the muffin man?\
    Who lives in Drury Lane?\
    \
    Oh Yes, I know the muffin man!\
    The muffin man, the muffin man.\
    Yes, I know the muffin man!\
    Who lives in Drury Lane.'
};

const thisLittlePiggy = {
    name: 'This Little Piggy',
    lyrics:
    'This little piggy went to market.\
    This little piggy stayed at home.\
    This little piggy had roast beef.\
    This little piggy had none.\
    And this little piggy went <say-as interpret-as="interjection">"Wah Wah Wah"</say-as><break time="0.5s"/> all the way home!'
};

const oneTwoBuckleMyShoe = {
    name: 'One Two, Buckle My Shoe',
    lyrics:
    'One, two.\
    Buckle my shoe.\
    \
    Three, four.\
    Shut the door.\
    \
    Five, six.\
    Pick up sticks.\
    \
    Seven, eight.\
    Lay them straight.\
    \
    Nine, ten.\
    A big fat hen.\
    \
    You’re doing great!\
    Let’s go to twelve...<break time="1.5s"/>\
    \
    Eleven, twelve.\
    Be proud of yourself!\
    \
    Thirteen, fourteen.\
    Reach high for your dreams.\
    \
    Fifteen, sixteen.\
    Hands are for helping.\
    \
    Seventeen, eighteen.\
    Together we’re learning.\
    \
    Nineteen, twenty.\
    Be all you can be!'
};

const humptyDumpty = {
    name: 'Humpty Dumpty',
    lyrics:
    'Humpty Dumpty sat on a wall.\
    Humpty Dumpty had a great fall.\
    All the king’s horses and all the king’s men.\
    Couldn’t put Humpty together again.'
};

const ringAroundTheRosies = {
    name: 'Ring Around The Rosies',
    lyrics: 'Ring-a-Ring o\'Rosies.\
    A pocket full of Posies.\
    "<say-as interpret-as="interjection">Achoo! Achoo!</say-as>"\
    We all fall Down!\
    \
    Ring around the rosies.\
    A pocketful of posies.\
    "Ashes, Ashes".\
    We all fall down!'
};

const jackBeNimble = {
    name: 'Jack Be Nimble',
    lyrics:
    'Jack be nimble\
    Jack be quick\
    Jack jumped over\
    A candlestick.\
    Jump, jump, jump, Jack jump!\
    Get ready.\
    Get set.\
    Jump, jump, jump, Jack jump!'
};

const itsyBitsySpider = {
    name: 'Itsy Bitsy Spider',
    lyrics:
    'Itsy bitsy spider went up the water spout.\
    Down came the rain.\
    And washed the spider out.\
    Out came the sun and dried up all the rain.\
    And the itsy bitsy spider went up the spout again!'
};

const baaBaaBlackSheep = {
    name: 'Baa Baa Black Sheep',
    lyrics:
    'Baa, baa, black sheep.\
    Have you any wool?\
    Yes sir, yes sir.\
    Three bags full.\
    \
    One for my master.\
    One for my dame.\
    One for the little boy.\
    Who lives down the lane.\
    \
    Baa, baa, black sheep\
    Have you any wool?\
    Yes sir, yes sir.\
    Three bags full!'
};

const itsRainingItsPouring = {
    name: 'It\'s Raining, It\'s Pouring',
    lyrics:
    'It\'s raining, it\'s pouring.\
    The old man is snoring.\
    He went to bed and he\
    Bumped his head!\
    And he couldn\'t get up in the morning.\
    <break time="1s"/>\
    It\'s snowing, it\'s blowing.\
    The old man is growing.\
    He ate so much one day for lunch\
    Every part of him was showing.\
    \
    It\'s warm out and sunny.\
    The old man loves honey.\
    He tried to seize\
    A batch from the bees.\
    And they didn\'t find it funny.'
};

const jackAndJill = {
    name: 'Jack and Jill',
    lyrics: 'Jack and Jill went up the hill.\
    To fetch a pail of water.\
    Jack fell down and broke his crown.\
    And Jill came tumbling after.\
    \
    Up Jack got, and home did trot.\
    As fast as he could caper.\
    He went to bed and bound his head.\
    With vinegar and brown paper.'
};

const thisOldMan = {
    name: 'This Old Man',
    lyrics:
    'This old man, he played one.\
    He played knick-knack on my thumb.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played two.\
    He played knick-knack on my shoe.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played three.\
    He played knick-knack on my knee.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played four.\
    He played knick-knack on my door.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played five.\
    He played knick-knack on my hive.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played six.\
    He played knick-knack on my sticks.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played seven.\
    He played knick-knack up to heaven.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played eight.\
    He played knick-knack on my gate.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played nine.\
    He played knick-knack on my spine.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home.\
    \
    This old man, he played ten.\
    He played knick-knack once again.\
    With a knick-knack paddywhack, give a dog a bone.\
    This old man came rolling home!'
};

const cockADoodleDoo = {
    name: 'Cock A Doodle Doo',
    lyrics:
    '<say-as interpret-as="interjection">Cock a doodle do!</say-as>\
    My dame has lost her shoe,\
    My master lost his fiddling stick,\
    And doesn\'t know what to do,\
    And doesn\'t know what to do.'
};

const ifAllTheWorldWereApplePie = {
    name: 'If All The World Were Apple Pie',
    lyrics:
    'If all the world were apple pie\
    And all the sea were ink\
    And all the trees were bread and cheese\
    What would we have to drink?'
};

const popGoesTheWeasel = {
    name: 'Pop Goes The Weasel',
    lyrics:
    'Round and round the cobbler\'s bench\
    The monkey chased the weasel\
    The monkey thought it was all in fun\
    Pop! goes the weasel.\
    \
    A penny for a spool of thread\
    A penny for a needle\
    That\'s the way the money goes\
    Pop! goes the weasel.\
    \
    Every night when I get home\
    The monkey\'s on the table\
    Take a stick and knock it off\
    Pop! goes the weasel.'
};

const rosesAreRed = {
    name: 'Roses Are Red',
    lyrics: 'Roses are red,\
    Violets are blue,\
    Sugar is sweet,\
    And so are you.'
};

const maryMack = {
    name: 'Mary Mack',
    lyrics:
    'Miss Mary Mack, Mack, Mack,\
    All dressed in black, black, black,\
    With silver buttons, buttons, buttons,\
    All down her back, back, back.\
    \
    She asked her mother, mother, mother,\
    For fifty cents, cents, cents,\
    To see the hippos, hippos, hippos,\
    Jump the fence, fence, fence.\
    They jumped so high, high, high,\
    They reached the sky, sky, sky,\
    And didn\'t come back, back, back,\
    Till the 4th of July-ly-ly!\
    \
    (July can\'t walk, walk, walk,\
    July can\'t talk, talk, talk,\
    July can\'t eat, eat, eat,\
    With a knife and fork, fork, fork,\
    \
    She asked her mother, mother, mother,\
    For 5 cents more, more, more,\
    To see the hippos, hippos, hippos,\
    Jump over the door, door, door.\
    They jumped so low, low, low,\
    They stubbed their toe, toe, toe,\
    And that was the end, end, end,\
    Of the elephant show, show, show!'
};

const thereWasACrookedMan = {
    name: 'There Was A Crooked Man',
    lyrics:
    'There was a crooked man, and he walked a crooked mile.\
    He found a crooked sixpence upon a crooked stile.\
    He bought a crooked cat, which caught a crooked mouse,\
    And they all lived together in a little crooked house.'
};

const maryHadALittleLamb = {
    name: 'Mary Had A Little Lamb',
    lyrics:
    'Mary had a little lamb,\
    little lamb, little lamb.\
    Mary had a little lamb,\
    it\'s fleece was white as snow.\
    And everywhere that Mary went,\
    Mary went, Mary went,\
    and everywhere that Mary went\
    - the lamb was sure to go.\
    \
    It followed her to school one day\
    school one day, school one day.\
    It followed her to school one day,\
    which was against the rules.\
    It made the children laugh and play,\
    laugh and play, laugh and play,\
    it made the children laugh and play\
    - to see a lamb in school.\
    \
    And so the teacher turned it out,\
    turned it out, turned it out.\
    And so the teacher turned it out,\
    but still it lingered near,\
    And waited patiently about,\
    patiently about, patiently about,\
    And waited patiently about\
    - till Mary did appear.\
    \
    "Why does the lamb love Mary so?"\
    Love Mary so? Love Mary so?\
    "Why does the lamb love Mary so,"\
    the eager children cry.\
    "Why, Mary loves the lamb, you know."\
    The lamb, you know, the lamb, you know,\
    "Why, Mary loves the lamb, you know,"\
    the teacher did reply.'
};

const rowRowRowYourBoat = {
    name: 'Row Row Row Your Boat',
    lyrics:
    'Row, row, row your boat,\
    Gently down the stream.\
    Merrily, merrily, merrily, merrily\
    - Life is but a dream.\
    \
    Row, row, row your boat,\
    Gently down the stream.\
    If you see a crocodile\
    - Don\'t forget to scream!'
};

const thereWasAnOldWomanWhoSwallowedAFly = {
    name: 'There Was An Old Woman Who Swallowed A Fly',
    lyrics: 
    'There was an old lady who swallowed a fly;\
    I don\'t know why she swallowed a fly - perhaps she\'ll die!\
    \
    There was an old lady who swallowed a spider;\
    That wriggled and wiggled and tickled inside her!\
    \
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady who swallowed a bird;\
    How absurd to swallow a bird!\
    \
    She swallowed the bird to catch the spider,\
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady who swallowed a cat;\
    Fancy that to swallow a cat!\
    \
    She swallowed the cat to catch the bird,\
    She swallowed the bird to catch the spider,\
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady that swallowed a dog;\
    What a hog, to swallow a dog!\
    \
    She swallowed the dog to catch the cat,\
    She swallowed the cat to catch the bird,\
    She swallowed the bird to catch the spider,\
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady who swallowed a goat;\
    She just opened her throat and swallowed a goat!\
    \
    She swallowed the goat to catch the dog,\
    She swallowed the dog to catch the cat,\
    She swallowed the cat to catch the bird,\
    She swallowed the bird to catch the spider,\
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady who swallowed a cow;\
    I don\'t know how she swallowed a cow!\
    \
    She swallowed the cow to catch the goat,\
    She swallowed the goat to catch the dog,\
    She swallowed the dog to catch the cat,\
    She swallowed the cat to catch the bird,\
    She swallowed the bird to catch the spider,\
    She swallowed the spider to catch the fly;\
    I don\'t know why she swallowed a fly - Perhaps she\'ll die!\
    \
    There was an old lady who swallowed a horse...\
    She died, of course, she swallowed a horse!'
};

const missLucyHadABaby = {
    name: 'Miss Lucy Had A Baby',
    lyrics: 'Miss Lucy had a baby,\
    she called him Tiny Tim!\
    She put him in the bathtub\
    to see if he could swim.\
    He drank up all the water,\
    he ate up all the soap.\
    He tried to eat the bathtub\
    but it wouldn\'t go down his throat.\
    Miss Lucy called the doctor,\
    Miss Lucy called the nurse.\
    Miss Lucy called the lady\
    with the alligator purse.\
    In came the doctor,\
    in came the nurse.\
    In came the lady\
    with the alligator purse.\
    "Mumps" - said the doctor.\
    "Measles"- said the nurse.\
    "Nothing" - said the lady\
    with the alligator purse.\
    Miss Lucy hit the doctor\
    Miss Lucy slapped the nurse\
    Miss Lucy paid the lady\
    with the alligator purse\
    Out went the water.\
    Out went the soap,\
    Out went the bathtub,\
    that wouldn\'t go down his throat.\
    Out went the doctor,\
    Out went the nurse.\
    Out went the lady\
    with the alligator purse.'
};

const languageStrings = {
    'en': {
        'translation': {
            'RHYMES': [
                baaBaaBlackSheep,
                cockADoodleDoo,
                fiveLittleMonkeys,
                ifYoureHappyAndYouKnowIt,
                humptyDumpty,
                itsRainingItsPouring,
                itsyBitsySpider,
                jackAndJill,
                jackBeNimble,
                littleTeapot,
                maryHadALittleLamb,
                maryMack,
                onePotatoTwoPotatoes,
                oneTwoBuckleMyShoe,
                patACake,
                popGoesTheWeasel,
                ringAroundTheRosies,
                rosesAreRed,
                rowRowRowYourBoat,
                sailorWentToSea,
                theMuffinMan,
                thereWasACrookedMan,
                thereWasAnOldWomanWhoSwallowedAFly,
                thisLittlePiggy,
                thisOldMan,
                missLucyHadABaby
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
