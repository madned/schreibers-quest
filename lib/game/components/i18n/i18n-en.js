ig.module(
    'game.components.i18n.i18n-en'
)
.requires(
    'plusplus.core.config'
)
.defines(function() {

    "use strict";

    var _c = ig.CONFIG;

    /**
     * Provides an interface to get localized text and image paths
     *
     *
     * @class
     * @extends ig.Class
     * @memeberof ig
     */
    ig.i18nEn = ig.Class.extend({

        messages : {

            'introText':'Year 2014.\n The big day is fast approaching, all the preparations have started. The guests are arriving, but one still needs to confirm... '+ 
                        'You are Ajar Nordic, who lost in amnesia has completely forgotten all the details for Joan and Ricard\'s wedding. '+
                        'Your mission is crystal clear: you have to look for and write down all the necessary information in order to get to the wedding on time.'+
                        '\nWill you be able to find all the pieces to the puzzle?',


            //BLACKBOARD
            'lookBlackboard1':'This is the problem that needs to be resolved for the wedding.',
            'lookBlackboard2':'If we know that there are more than a 100 guests, then either 15 they all know each other,',
            'lookBlackboard3':'or 3 do not know each other.',
            'giveBlackboard1':'I don\'t know who else to assign this problem... to Marta?',
            'useBlackboard1':'Amanda has been working on it really hard! For sure she already knows the solution!',
            'pickupBlackboard1':'When trying to get it, I saw that on one side there are the following letters "/sec".',
            'pushBlackboard1':'Mathematics stuff...',
            'pullBlackboard1':'Mathematics stuff...',
            'openBlackboard1':'It\'s been a while since I have opened the blackboard to the public.',
            'closeBlackboard1':'Mathematics stuff...',
            'talkBlackboard1':'Blackboard, blackboard, who is the most motivated professor?',
            'talkBlackboard2':'Mmmm... Wait, I just heard something...',
            'talkBlackboard3': 'I think I heard Laura Morera and Tresa Marimon with her Explorium!',
            'defaulBlackboard1':'Mahematics stuff...',

            //inventory MAP
            'lookInventoryMap1':'In the map it says they are getting married in Sant Cugat, at Mercantic',
            'lookInventoryMap2':'Avinguda de Rius i Taulet, 120, 08173 Sant Cugat del Vallès, Barcelona',
            'giveInventoryMap1':'I don\'t have anyone to give this to.',
            'useInventoryMap1':'I will use it when going there.',
            'pickupInventoryMap1':'I already have the map.',
            'pushInventoryMap1':'Moving it a little bit, I can read the last letters: "oom".',
            'pullInventoryMap1':'I don\'t know what to do.',
            'openInventoryMap1':'Before it was a ball of paper, now it\'s a map.',
            'closeInventoryMap1':'I prefer the map to the paper ball.',
            'talkInventoryMap1':'I do not think that speaking to inanimate objects is the solution... ',
            'talkInventoryMap2':'Shit! I\'m talking to myself again! ',
            'defaultInventoryMap1':'I don\'t know what to do.',

            //inventory PAPERBALL
            'lookInventoryPaperball1':'It seems like this crumbled paper is important.',
            'giveInventoryPaperball1':'It contains information that is too important to give it away.',
            'useInventoryPaperball1':'In this ball shape, I can\'t really use it.',
            'pickupInventoryPaperball1':'I already have it in the inventory.',
            'pushInventoryPaperball1':'It doesn\'t seem to work!',
            'pullInventoryPaperball1':'It doesn\'t seem to work!',
            'openInventoryPaperball1':'Look at this, there is a map!',
            'closeInventoryPaperball1':'It\'s closed.',
            'talkInventoryPaperball1':'Hello? Hello? There is no answer!',
            'defaultInventoryPaperball1':'Ein',

            //PAPERS
            'lookPapers1':'Lots of papers and among them the screen play for my movie "A sporadic Injurer".',
            'lookPapers2':'It reminds me to the pile of papres that Joan has on his table. He says its hereditary.',
            'lookPapers3':'A paper says that the order is chalk, sphere, and ice l.',
            'givePapers1':'There is also an Internal Assessment that Taixés needs to review. I\'ll take it so I can give it to him at the wedding!',
            'usePapers1':'There is nothing that important.',
            'pickupPapers1':'I know the map was around here but I cant see it now.',
            'pickupPapers2':'The map was among that pile of papers but it fell.',
            'pushPapers1':'In moving those papers, I found a plan to renovate the appartment, Luckily Jordi and Nuria will help me understand it!',
            'pullPapers1':'don\'t be dirty!',
            'openPapers1':'In that pile, I have also seen an essay about the democratic reality with drawings from Magritte signed by M.R.',
            'closePapers1':'I\'m not going to start making paper balls...',
            'talkPapers1':'Its not a speech.',
            'defaultPapers1':'Ein.',

            
            //WINDOW (B1, B2, R)
            'lookWindow1': 'Oof I think that is Dani who is running because he is late to the wedding.',
            'useWindow1':'Pau wold not let me use anything but Linux.',
            'openWindow1': 'Its cold and I don\'t want to open it. And I feel like I am being watched by Jacobo\'s friend...',
            'closeWindow1': 'Its already closed. I don\'t want to bring the curtains down, in case the same happens as what happened in Micky\'s house in Collblanc when they couldn\'t bring it up again!',
            'talkWindow1': 'HELLO WORLD!',
            'talkWindow2': 'HELLO CLOUD!',
            'talkWindow3': 'HELLO PUCK!',
            'defaultWindow1': 'No, simply no',

            //PAPERBALL
            'lookPaperball1':'There is something written inside. Outside it reads "oom", Not sure what it is.',
            'givePaperball1':'It is my paper ball.',
            'usePaperball1':'If I had a basket I could use it.',
            'pickupPaperball1':'Great! Now I already have a paper ball.',
            'pushPaperball1':'No, you should not play ball at home!',
            'pullPaperball1':'No, you should not play ball at home!',
            'openPaperball1':'Until I can get it, I will not be able to open it',
            'closePaperball1':'Its closed!',
            'talkPaperball1':'Hello paper ball, tell me all your secrets...',
            'defaultPaperball1':'Ein',

            //BED
            'lookBed1':'Its my bed. Julia and Doron gave me these sheets!',
            'giveBed1':'Although many friends have slept over like Marc, this is my bed!',
            'useBed1':'Its not time to sleep.',
            'pickupBed1':'No, this is not working.',
            'pushBed1':'No, this is not working',
            'pullBed1':'No, this is not working',
            'openBed1':'The bed is made and I don\'t want to mess it up.',
            'closeBed1':'The bed is made!',
            'talkBed1':'The bed cant speak. Its probably better this way.',
            'defaultBed1':'No, this doesn\'t work',


            //BOOKS
            'lookBooks1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This seems like a ritual to invoque Nyarlathotep ',
            'giveBooks1':'They are okay in the bookcase.',
            'useBooks1':'Mlkshk tousled authentic lomo DIY, flexitarian tattooed asymmetrical Wes Anderson normcore gentrify drinking vinegar PBR&B Pitchfork. Tote bag VHS forage banh mi pour-over, viral hoodie vinyl you probably haven\'t heard of them typewriter Shoreditch jean shorts four loko mumblecore.',
            'pickupBooks1':'They are Hipster books. Oh and here is an album from Menorca where Trish is in it.',
            'pushBooks1':'I don\'t have secret doors at home. And for secret codes I would have to consult with.',
            'pullBooks1':'Not working...',
            'openBooks1':'I\'m not going to read now, although I see a copy of Brave New World and Cals recommended it to me.',
            'openBooks2':'I\'ll take it in case the wedding is boring.',
            'closeBooks1':'They are closed.',
            'talkBooks1':'I don\'t have anything to tell them.',
            'defaultBooks1':'Ein',

            //CABINET
            'lookCabinet1':'There are some Go pieces and a board insode, but I cant reach it.',
            'giveCabinet1':'I cant reach it.',
            'useCabinet1':'I would love to play a game of Baduk with César, but I better hurry up.',
            'pickupCabinet1':'It\'s a foldable Go board, I used to play with Oscar with it. Now it\'s so high, I can\'t reach it',
            'pushCabinet1':'Can\'t reach it. Maybe I should ask Pablo for some help.',
            'pullCabinet1':'Can\'t reach it',
            'openCabinet1':'Zurine told me that was a bad idea to put it so high.',
            'closeCabinet1':'Can\'t reach it',
            'talkCabinet1':'I remember now that I have to met Laura to play Go!',
            'defaultCabinet1':'Can\'t reach it',

            //CACTUS
            'lookCactus1':'It\'s a cactus. It\'s name is Chuck.',
            'giveCactus1':'I don\'t want to give it away!',
            'useCactus1':'Mmmm... Doesn\'t work.',
            'pickupCactus1':'If I put it in my pocket I\'ll get hurt!',
            'pushCactus1':'I don\'t want to break it!',
            'pullCactus1':'I will get hurt.',
            'openCactus1':'I don\'t have the necessary medical equipment.',
            'closeCactus1':'I don\'t think I understand what you want to do.',
            'talkCactus1':'Hi Cuck! Magda gave me this brand new watering can. I dunno why she has so many watering cans at home!',
            'defaultCactus1':'It\'s a cactus. Doesn\'t want to be bothered.',         

            //CLOCK
            'lookClock1' : 'Mmm... The day was the 29th of November... and...',
            'lookClock2' : 'I\'ve just remembered the time!',
            'lookClock3' : 'The ceremony starts at 01:00PM! I have hurry up!',
            'useClock1' : 'It\'s working already',
            'pickupClock1' : 'I like where it is. Also, I want to get there before Eduard, it might be difficult, he is such a responsible guy.',
            'talkClock1' : 'My little little tiny clock, who is the.... ooops, not now.',
            'defaultClock1' : 'Sorry, this doesen\'t work.',

            //CLOSET
            'lookCloset1':'Dishes, glasses, etc.',
            'giveCloset1':'WHAT?',
            'useCloset1':'I\'m out of the closet now.',
            'pickupCloset1':'I see some recicable bins. Edu taught me how to use them depending on the plastic type, but I don\'t have anything to throw away now.',
            'pushCloset1':'Sure?',
            'pullCloset1':'Sure?',
            'openCloset1':'There\'s nothing inside. Well.... I\'ve found the little figurines that Tina gave us! That wedding was a blast!',
            'closeCloset1':'They are closed!',
            'talkCloset1':'Nonliving object, uncapable to answer any question.',
            'defaultCloset1':'It\'s just a closet!! I cannot!!',


            //CLOTHES
            'lookClothes1':'There are some costumes here. This one is a Leia costume, and a Hand Solo costume...',
            'lookClothes2':'Here there are! My shirt and tie!',
            'lookClothes3':'They told me to go to the wedding in a costume, or with some kind of suit.',
            'giveClothes1':'No! Just found them!',
            'useClothes1':'I\'ll get dress when I\'ll have everything ready. I\'ll get an extra bow tie for Darko.',
            'pickupClothes1':'I\'ll wait until I\'ll have everything ready.',
            'pushClothes1':'I agree with you that I need more space to put all those tshirts that Gemma gave me. She emptied her closet!',
            'pullClothes1':'WHAT?',
            'openClothes1':'Here we have a unique piece of Brunihilda Beast designer, La Plage de St Tropez collection.',
            'closeClothes1':'WHAT?',
            'talkClothes1':'Should I put on the emperor\'s suit?',
            'defaultClothes1':'WHAT?',           

            //DRAWER
            'lookDrawer1':'My cellphone is inside.',
            'lookDrawer2':'My cellphone was inside. Now there\'s just this 2 euro coin I promised to give to Jacobo.',
            'giveDrawer1':'It\'s stuck!',
            'useDrawer1':'Either I open it, or close it.',
            'pickupDrawer1':'Yes!!! I have my phone now.',
            'pickupDrawer2':'If it\'s closed I can\'t do anything.',
            'pickupDrawer3':'There is nothing else inside.',
            'pushDrawer1':'It doesn\'t make any sense to do that.',
            'pullDrawer1':'I can\'t.',
            'openDrawer1':'It\'s open already.',
            'openDrawer2':'It\'s stuck, but slightly opened. I can try to pick up whatever it\'s inside.',
            'closeDrawer1':'I\'ve just close it!',
            'closeDrawer2':'It\' closed.',
            'talkDrawer1':'WHAT?',
            'defaultDrawer1':'WHAT?',
            
            //EXIT
            'lookExit1':'This door is the exit.',
            'lookExit2':'I\'ll leave when I\'ll have everything ready!',
            'giveExit1':'WHAT?',
            'useExit1':'I can\'t! I\'m not ready yet!',
            'useExit2':'I have everything now. Here I go!',
            'pickupExit1':'WHAT?',
            'pushExit1':'The door is closed. Nowadays, to do a triumphal exit is "to do a Corominas".',
            'pullExit1':'WHAT?',
            'openExit1':'But I\'m not ready yet!',
            'closeExit1':'WHAT?',
            'talkExit1':'Who is this? Oops, nobody knocked!',
            'defaultExit1':'WHAT?',

            //FRIDGE
            'lookFridge1':'This is the third fridge that I\'ve bought. It used to have a lot of magnets, like Olga has, but I\'ve removed them all.',
            'giveFridge1':'It\'s too expensive to give it away.',
            'useFridge1':'I\'ll eat later on the wedding. I hope they remember I have an alergy to peanuts.',
            'pickupFridge1':'A little bit bulky, don\t you think?',
            'pushFridge1':'Ngggggggg can\'t.',
            'pullFridge1':'Ngggggggg can\'t.',
            'openFridge1':'It\'s useless to open the fridge if I don\'t need anything. Besides, Noé left there a bottle of horchata I need to keep it cold.',
            'closeFridge1':'It\'s already closed.',
            'talkFridge1':'WHAT?',
            'defaultFridge1':'WHAT?',

            //FREEZER
            'lookFreezer1':'The freezer.',
            'giveFreezer1':'It\'s tighted to the fridge.',
            'useFreezer1':'It\'s full now, but I think there are only some chocolate truffles. In the box I can read: "rets/l"',
            'pickupFreezer1':'Don\' think so, sorry.',
            'pushFreezer1':'I think it\'s to heavy.',
            'pullFreezer1':'I think it\'s to heavy.',
            'openFreezer1':'No, I\'m cold.',
            'closeFreezer1':'It\'s closed.',
            'talkFreezer1':'Your second transformation was quite dissapointing.',
            'defaultFreezer1':'WHAT?',

            //GUITAR
            'lookGuitar1':'They\'ve hired DJ Galeote to play on the wedding.',
            'giveGuitar1':'No! It\'s super expensive!',
            'useGuitar1':'Let me see how it sounds...',
            'useGuitar2':'There\'s a song from Throwing Muses that I know how to play really well, but I don\'t feel like playing right now.',
            'pickupGuitar1':'Not now. I\'ll play some David Bowie songs later.',
            'pushGuitar1':'It will fall if I do that! Here Oriol will have a bicicle instead.',
            'pullGuitar1':'It will fall if I do that!',
            'openGuitar1':'I\'m still learning! I don\'t know how to do this!',
            'closeGuitar1':'WHAT?',
            'talkGuitar1':'We haven\'t get tot that point yet.',
            'defaultGuitar1':'Tun tun tan tan tinc tiiin',

            //PICTUREB (loom)
            'lookPictureB1':'One of my favourite games: Loom, released in 1990.',
            'lookPictureB2':'It\'s also one of Nas\' favourite games.',
            'givePictureB1':'It has a sentimental value.',
            'usePictureB1':'I cant play it if I download it from Steam. I think I wrote the code somewhere.',
            'pickupPictureB1':'I normally take it with me everywhere. But today I\'ll make an exception.',
            'pushPictureB1':'No, there is no security box in here.',
            'pullPictureB1':'No, there is no security box in here.',
            'openPictureB1':'I don\'t want to break it!',
            'closePictureB1':'Can\'t be closed.',
            'talkPictureB1':'Hi, my name is Bobbin Threadbare, are you my mother?',
            'defaultPictureB1':'WHAT?',

            //PICTUREK
            'lookPictureK1':'Julio took this picture of Ignatius long time ago.',
            'givePictureK1':'I don\'t want to give my picture away!',
            'usePictureK1':'Maybe we can take a picture of Natalia\'s new kitten. Or she haven\'t got it yet?',
            'pickupPictureK1':'How cute!. But I don\'t have any alergy like Karde has.',
            'pushPictureK1':'It\'s so freaking cute.',
            'pullPictureK1':'Uaaaaaa.',
            'openPictureK1':'Uuuu.',
            'closePictureK1':'Kitty, kitty, kitty.',
            'talkPictureK1':'Mew! Who are those kitten? Jin, Anakin or Curry?',
            'defaultPictureK1':'Can\'t stop clicking in the picture. It\'s so cute!',

            //PRESENT
            'lookPresent1':'In the card it says: for Joan & Ricard, from Ajar Nordic I. ',
            'lookPresent2':'It\'s a statue!',
            'lookPresent3':'Now I remember they told me that the easiest option was to make a transfer.',
            'givePresent1':'I\'ll have to take it first.',
            'givePresent2':'No way, it\'s too heavy. If this is gonna be a problem, I can make a transfer.',
            'givePresent3':'It turns out that I remember the number by heart: bip bip bip bip censored bippppp',
            'usePresent1':'This is just a silly statue. Natalia gave them a really cool lamp already.',
            'pickupPresent1':'Too heavy, not possible to be moved.',
            'pushPresent1':'Too heavy!',
            'pullPresent1':'Too heavy!.',
            'openPresent1':'It\'s not for me!.',
            'closePresent1':'It\'s closed.',
            'talkPresent1':'If I talk to it and it answers it would be scary!',
            'defaultPresent1':'WHAT?',

            //SOFA
            'lookSofa1':'An IKEA sofa, Danferino help me with it.',
            'giveSofa1':'No way, this is going nowhere.',
            'useSofa1':'I\'m a little bit tired, but it\'s not time to rest.',
            'useSofa2':'Besides, Raimon is watching me with his fitness app!',
            'pickupSofa1':'Too heavy.',
            'pushSofa1':'I like it where it is.',
            'pullSofa1':'I don\'t think it\'s time to tidy up the house.',
            'openSofa1':'It\'s not a bed! And I\' worried because when we build it with Carlos some screws didn\'t worked well.',
            'closeSofa1':'Simply, cannot be done.',
            'talkSofa1':'Don\'t feel like talking.',
            'defaultSofa1':'WHAT?',

            //TPHONE
            'lookInventoryTPhone1':'My cellphone. I\'m playing Ingress with Darko.',
            'giveInventoryTPhone1':'No, this is mine..',
            'useInventoryTPhone1':'I think I\'ll call Joan and Ricard to confirm I\'m attending the wedding.',
            'useInventoryTPhone2':'Now I can talk with them!',
            'useInventoryTPhone3':'It\'s on already!',
            'useInventoryTPhone4':'I think I have time to play a quick game to Spooklins!',
            'useInventoryTPhone5':'Done! But I haven\'t beat Quele\'s highscore!',
            'pickupInventoryTPhone1':'I already have it.',
            'pushInventoryTPhone1':'WHAT?',
            'pullInventoryTPhone1':'WHAT?',
            'openInventoryTPhone1':'Since long time ago, no cellphone can be opened.',
            'closeInventoryTPhone1':'Cant be closed.',
            'talkInventoryTPhone1':'Hello?',
            'talkInventoryTPhone2':'I know it\'s not polite to confirm that I will attend the same day of the wedding,',
            'talkInventoryTPhone3':'I should have done it before November 15th,',
            'talkInventoryTPhone4':'but I recorded that video answering a question (contact us to know more)!',
            'talkInventoryTPhone5':'Well... See you in a bit. Cheers!',
            'talkInventoryTPhone6':'...',
            'talkInventoryTPhone7':'Crap. I should have asked all the things that I don\'t know yet!',
            'talkInventoryTPhone8':'I don\'t want to bother them again!',        
            'talkInventoryTPhone9':'I would have to call them first...',      
            'defaultInventoryTPhone1':'WHAT?',


            'ending' : 'Congratulations!\nYou have completed this graphic adventure. Now you have all the necessary information' +
            ' to attend the wedding. We hope you have enjoyed this little game and that' +
            ' we can see you soon and enjoy with you in the day of our wedding. ' +
            'If you still have some doubt, do not hesitate to contact us by email: contacto@superjoaniricard.com, or twitter: @superjoanricard' +
            '\n' + '\n'+
            
            'CREDITS:'+
            'Script, Coding, Art & Music:\n'+
            'Joan Alemany & Ricard Cabrera\n'+
            'Testing: Daniel Ferreira\n'+
            'Translator: Julia Alemany' +

            'Special thanks to: Patrick Niekerken' +
            '\n' +
            '\n'





        },

        items : {
            //Bedroom
            'windowB1': 'window',
            'windowB2': 'window',
            'clothes': 'clothes',
            'pictureB': 'Loom picture',
            'guitar': 'guitar',   
            'bed' : 'bed',

            //Study
            'paperball' : 'paperball',
            'tphone': 'cell phone',
            'blackboard' : 'blackboard',
            'clock': 'clock',
            'drawer': 'drawer',
            'window': 'window',
            'papers': 'papers',

            //Kitchen
            'closet': 'closet',
            'fridge': 'fridge',
            'freezer': 'freezer',
            'pictureK': 'cat picture',

            //Sitting Room
            'cabinet' : 'cabinet',
            'cactus': 'cactus',
            'carpet': 'carpet',
            'door': 'door',
            'exit': 'exit',
            'sofa': 'sofa',
            'books': 'books',
            'present': 'present'

        },

        levels : {
            'kitchen' : 'kitchen',
            'bedroom' : 'bedroom',
            'sitting-room' : 'sitting room',
            'study' : 'study',
            'titlescreen' : 'titlescreen'
        },

        commands : {
            'Give' : 'Give',
            'Use' : 'Use',
            'Pick up' : 'Pick up',
            'Open' : 'Open',
            'Close' : 'Close',
            'Talk' : 'Talk',
            'Look' : 'Look',
            'Push' : 'Push',
            'Pull' : 'Pull',
            'Walk' : 'Walk to'
        },

        commandImages : {
            'give' : 'ui/give.gif',
            'open' : 'ui/open.gif',
            'look' : 'ui/look.gif',
            'use' : 'ui/use.gif',
            'close' : 'ui/close.gif',
            'push' : 'ui/push.gif',
            'pickup' : 'ui/pickup.gif',
            'talk' : 'ui/talk.gif',
            'pull' : 'ui/pull.gif',
            'walk' : 'ui/walk.gif'
        },

        commandXs : {
            'give' : 52/2,
            'open' : 60/2,
            'look' : 60/2,
            'use' : 44/2,
            'close' : 70/2,
            'push' : 60/2,
            'pickup' : 92/2,
            'talk' : 54/2,
            'pull' : 48/2,
            'walk' : 0
        },

        commandYs : {
            'give' : 10,
            'open' : 10,
            'look' : 10,
            'use' : 10,
            'close' : 10,
            'push' : 10,
            'pickup' : 10,
            'talk' : 10,
            'pull' : 10,
            'walk' : 0
        },


        getMessage : function(messageCode) {

            return this.messages[messageCode];
        },

        getItemName : function(itemCode) {
            return this.items[itemCode];
        },

        getCommandName : function(commandCode) {
            return this.commands[commandCode];
        },

        getLevelName : function(levelName) {
            return levelName;
        },

        getCommandImage : function(key) {
            return this.commandImages[key];
        },

        getCommandX : function(key) {
            return this.commandXs[key];
        },

        getCommandY : function(key) {
            return this.commandYs[key];
        },

        getLocalizedImagePath: function(imageCode) {

            if(imageCode === "map") {
                  return 'en';
            }

            return null;
        }

    });

});