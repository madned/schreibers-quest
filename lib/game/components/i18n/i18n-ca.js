ig.module(
    'game.components.i18n.i18n-ca'
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

     /*
            'lookXXX1':'',
            'giveXXX1':'',
            'useXXX1':'',
            'pickupXXX1':'',
            'pushXXX1':'',
            'pullXXX1':'',
            'openXXX1':'',
            'closeXXX1':'',
            'talkXXX1':'',
            'defaultXXX1':'',
     */

     /* ACCENTS:
            À \xC0
            à \xE0

            È
            è \xE8
            É \xC9
            é \xE9
            Í
            í \xED
            Ò
            ò \xF2
            Ó
            ó \xF3
            Ú
            ú \xFA
            ç \xE7
            · \xb7

     */

    ig.i18nCa = ig.Class.extend({

        messages : {

            'introText':'Any 2014.\n La gran cita s\'apropa, tots els preparatius estan en marxa. Els convidats van arribant, però en falta un per confirmar...'+ 
                        'Encarnes a Ajar Nordic I, que, perdut en un moment d\'amnèsia, ha oblidat per complet tots els detalls de la boda d\'en Joan i en Ricard. '+
                        'La teva missió és clara, has de buscar i apuntar totes les dades necessàries per tal d\'arribar a la boda a temps.'+
                        '\nSeràs capa\xe7 de trobar totes les peces del trencaclosques?',


            //BLACKBOARD
            'lookBlackboard1':'És el problema que cal resoldre per la boda.',
            'lookBlackboard2':'Si sabem que hi ha més de 100 convidats, llavors o 15 es coneixen tots amb tots,',
            'lookBlackboard3':'o 3 no es coneixen entre sí.',
            'giveBlackboard1':'No sé a qui més assignar el problema... a la Marta?',
            'useBlackboard1':'L\'Amanda hi ha estat treballant durament! Segur que ja sap la solució!',
            'pickupBlackboard1':'A l\'intentar agafar-lo he vist que a un costat hi ha les lletres "/sec".',
            'pushBlackboard1':'Coses de matemàtics...',
            'pullBlackboard1':'Coses de matemàtics...',
            'openBlackboard1':'Fa temps que no obro la pissarra al públic.',
            'closeBlackboard1':'Coses de matemàtics...',
            'talkBlackboard1':'Pissarra, pissarreta qui és el professor més motivat?',
            'talkBlackboard2':'Mmmm... Espera que acabo de sentir alguna cosa...',
            'talkBlackboard3': 'Crec que ha dit que la Laura Morera i la Tresa Marimon amb el seu Explorium!',
            'defaulBlackboard1':'Coses de matemàtics...',

            //inventory MAP
            'lookInventoryMap1':'Al mapa diu que es casen a Sant Cugat, al Mercantic',
            'lookInventoryMap2':'Avinguda de Rius i Taulet, 120, 08173 Sant Cugat del Vallès, Barcelona',
            'giveInventoryMap1':'No tinc a qui donar-li.',
            'useInventoryMap1':'Quan vagi cap allà l\'utilitzaré.',
            'pickupInventoryMap1':'Ja tinc el mapa.',
            'pushInventoryMap1':'Movent-lo una mica encara llegeixo les lletres de darrera: "oom".',
            'pullInventoryMap1':'No sé què he de fer.',
            'openInventoryMap1':'Abans era una bola de paper, ara és un mapa.',
            'closeInventoryMap1':'Prefereixo el mapa que la bola de paper.',
            'talkInventoryMap1':'No crec que parlar amb objectes inanimats sigui la solució...',
            'talkInventoryMap2':'Merda! Ja estic parlant sol un altre cop!',
            'defaultInventoryMap1':'No sé què he de fer.',

            //inventory PAPERBALL
            'lookInventoryPaperball1':'Sembla que aquest paper rebregat és important.',
            'giveInventoryPaperball1':'Té informació massa important com per regalar-lo.',
            'useInventoryPaperball1':'Així en forma de bola no el puc utilitzar.',
            'pickupInventoryPaperball1':'Ja la tinc a l\'inventari',
            'pushInventoryPaperball1':'No sembla funcionar!',
            'pullInventoryPaperball1':'No sembla funcionar!',
            'openInventoryPaperball1':'Mira, ves per on hi ha un mapa!',
            'closeInventoryPaperball1':'Ja està tancada.',
            'talkInventoryPaperball1':'Hola? Hola? No contesta!',
            'defaultInventoryPaperball1':'Ein',

            //PAPERS
            'lookPapers1':'Una pila de papers. Entre d\'altres hi ha el guió de la meva pel·lícula "A sporadic Injurer".',
            'lookPapers2':'Em recorda a la pila de papers que el Joan té a la taula. Ell diu que és hereditari.',
            'lookPapers3':'Un paper diu que l\'ordre és guix, gel, esfera.',
            'givePapers1':'Hi ha també un Internal Assessment que ha de corregir el Taixés. L\'agafaré per donar-li a la boda!',
            'usePapers1':'No hi ha res gaire important.',
            'pickupPapers1':'Sé que tenia el mapa per aquí, però ara no el veig.',
            'pickupPapers2':'El mapa estava a la pila de papers però havia caigut.',
            'pushPapers1':'A l\'apartar els papers he vist un plànol per renovar el pis. Per sort el Jordi i la Núria m\'ajudaran a entendre-ho!',
            'pullPapers1':'No siguis brut!',
            'openPapers1':'Entre tota la muntanya també he vist un assaig sobre la realitat democràtica amb dibuixos de Magritte firmat per M.R.',
            'closePapers1':'No em posaré a fer boles de paper...',
            'talkPapers1':'No és cap discurs.',
            'defaultPapers1':'Ein.',

            
            //WINDOW (B1, B2, R)
            'lookWindow1': 'Ui crec que aquell és el Dani que està corrent que arriba tard a la boda.',
            'useWindow1':'El Pau no em deixaria utilitzar una altra cosa que no sigui Linux.',
            'openWindow1': 'Fa fred i no la vull obrir. A més em sento observat per l\'amiga del Jacobo...',
            'closeWindow1': 'Ja està tancada. No vull baixar la persiana no passi com a la casa de Collblanc del Micky que després no la podien pujar!',
            'talkWindow1': 'HELLO WORLD!',
            'talkWindow2': 'HELLO CLOUD!',
            'talkWindow3': 'HELLO PUCK!',
            'defaultWindow1': 'No, simplement no',

            //PAPERBALL
            'lookPaperball1':'Hi ha alguna cosa important escrita a la part de dins. A fora hi ha escrit "oom", no sé què serà.',
            'givePaperball1':'És la meva bola de paper.',
            'usePaperball1':'Si tingués una cistella, podria utilitzar-la.',
            'pickupPaperball1':'Molt bé! Ara ja tinc una bola de paper.',
            'pushPaperball1':'No, a casa no es juga a pilota!',
            'pullPaperball1':'No, a casa no es juga a pilota!',
            'openPaperball1':'Fins que no l\'agafi no la podré obrir',
            'closePaperball1':'Ja està tancada!',
            'talkPaperball1':'Hola bola de paper! Diga\'m tots els teus secrets...',
            'defaultPaperball1':'Ein',

            //BED
            'lookBed1':'És el meu llit. Aquests llençols me\'ls va regalar la Julia i el Doron!',
            'giveBed1':'Tot i que molts amics s\'han quedat a dormir, com ara el Marc, el llit és meu!',
            'useBed1':'Ara no toca dormir.',
            'pickupBed1':'No, això no funciona',
            'pushBed1':'No, això no funciona',
            'pullBed1':'No, això no funciona',
            'openBed1':'El llit està fet i no el vull desfer.',
            'closeBed1':'El llit ja està fet!',
            'talkBed1':'El llit no pot parlar... Segurament és millor així.',
            'defaultBed1':'No, això no funciona',


            //BOOKS
            'lookBooks1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sembla un ritual per convocar a Nyarlathotep ',
            'giveBooks1':'Estan bé a la llibreria.',
            'useBooks1':'Mlkshk tousled authentic lomo DIY, flexitarian tattooed asymmetrical Wes Anderson normcore gentrify drinking vinegar PBR&B Pitchfork. Tote bag VHS forage banh mi pour-over, viral hoodie vinyl you probably haven\'t heard of them typewriter Shoreditch jean shorts four loko mumblecore.',
            'pickupBooks1':'Són llibres de Hipster. Ah i aquí hi ha un Àlbum de Menorca on apareixo amb la Trish.',
            'pushBooks1':'No tinc portes secretes a casa. I per codis secrets ho hauria de consultar amb el Chris.',
            'pullBooks1':'No funciona...',
            'openBooks1':'Ara no em posaré a llegir. Tot i que veig una còpia de Brave New World i la Cals me l\'ha recomanat.',
            'openBooks2':'L\'agafaré per si la boda és molt aburrida.',
            'closeBooks1':'Estan tancats.',
            'talkBooks1':'No tinc res a dir-los-hi.',
            'defaultBooks1':'Ein',

            //CABINET
            'lookCabinet1':'Hi ha unes pedres de Go i un taulell a dins, però no hi arribo.',
            'giveCabinet1':'No hi arribo.',
            'useCabinet1':'M\'encantaria fer una partida de Baduk amb el César, però millor que m\'afanyi.',
            'pickupCabinet1':'El taulell plegable per jugar amb l\'Oscar està a dalt, però no hi arribo.',
            'pushCabinet1':'No hi arribo. Potser hauria d\'avisar al Pablo.',
            'pullCabinet1':'No hi arribo.',
            'openCabinet1':'Ja em va dir la Zuriñe que era mala idea posar-ho tan adalt.',
            'closeCabinet1':'No hi arribo.',
            'talkCabinet1':'Ara recordo que he de quedar amb la Laura per seguir practicant Go!',
            'defaultCabinet1':'No hi arribo.',

            //CACTUS
            'lookCactus1':'És un cactus. Es diu Chuck.',
            'giveCactus1':'No el vull donar.',
            'useCactus1':'Mmmm no funciona.',
            'pickupCactus1':'Si me\'l poso a la butxaca em punxaré!',
            'pushCactus1':'No el vull trencar!',
            'pullCactus1':'Em faré mal.',
            'openCactus1':'No tinc l\'equip mèdic necessari.',
            'closeCactus1':'No se si entenc què és el que vols fer.',
            'talkCactus1':'Hola Chuck! La Magda m\'ha regalat una regadora nova, no sé perquè en té tantes a casa!',
            'defaultCactus1':'És un cactus. No volen que el molestin.',         

            //CLOCK
            'lookClock1' : 'Mmm... El dia era el 29 de novembre... i...',
            'lookClock2' : 'Ja recordo l\'hora!',
            'lookClock3' : 'La cerimònia començarà a la 13:00! Més val que m\'afanyi!',
            'useClock1' : 'Ja està en marxa.',
            'pickupClock1' : 'M\'agrada on és. A més vull arribar abans que l\'Eduard, i això és difícil ja que és molt responsable.',
            'talkClock1' : 'Rellotjet rellotjet màgic..., ai no.',
            'defaultClock1' : 'No, aixó no funciona',

            //CLOSET
            'lookCloset1':'Plats, gots, etc.',
            'giveCloset1':'Lo what?',
            'useCloset1':'Fa tems que vam sortir dels armaris.',
            'pickupCloset1':'A la part de sota tinc totes les bosses de reciclatge segons el tipus de plàstic com em va ensenyar l\'Edu, però ara no ho puc tirar.',
            'pushCloset1':'Ein?',
            'pullCloset1':'Ein?',
            'openCloset1':'No hi ha res interessant dins. Tot i que hi ha unes figuretes que em va regalar la Tina! Aquella si que va ser una gran boda!',
            'closeCloset1':'Estan tancats.',
            'talkCloset1':'Objecte inanimat incapaç de conversar.',
            'defaultCloset1':'És un armari! No ho puc fer!',


            //CLOTHES
            'lookClothes1':'Un vestit de princesa Leia, un de Han Solo...',
            'lookClothes2':'Ah! I aquí tinc la meva camisa i corbata',
            'lookClothes3':'Em van dir que podia venir de Cosplay o be normal, però no de carrer.',
            'giveClothes1':'No! Just les acabo de trobar!',
            'useClothes1':'Em vestiré quan ho tingui tot i surti per la porta. Agafaré un llacet extra pel Darko.',
            'pickupClothes1':'Esperaré a l\'últim moment',
            'pushClothes1':'Estic d\'acord que em falta espai per posar totes les samarretes que m\'ha regalat la Gemma. És que es va buidar l\'armari.',
            'pullClothes1':'Ein?',
            'openClothes1':'Aquí he vist una peça única de Brunihilda Beast, de la col·lecció de la Plage de St Tropez.',
            'closeClothes1':'Ein?',
            'talkClothes1':'Em poso el vestit de l\'emparador?',
            'defaultClothes1':'Ein?',           

            //DRAWER
            'lookDrawer1':'A dins hi ha el meu telèfon.',
            'lookDrawer2':'A dins hi havia el meu telèfon. Ara només queda una moneda de dos euros que li vaig prometre al Jacobo.',
            'giveDrawer1':'Està encaixat a la taula.',
            'useDrawer1':'O l\'obro o el tanco.',
            'pickupDrawer1':'Uooo ja he agafat el telèfon.',
            'pickupDrawer2':'Tancat poca cosa farem.',
            'pickupDrawer3':'No hi ha res més.',
            'pushDrawer1':'No té cap sentit empènyer això',
            'pullDrawer1':'No sortirà.',
            'openDrawer1':'Ja està obert.',
            'openDrawer2':'Està encallat, però una mica entreobert. Puc intentar agafar el que hi ha a dins.',
            'closeDrawer1':'Acabo de tancar-lo.',
            'closeDrawer2':'Ja està tancat.',
            'talkDrawer1':'Ein?',
            'defaultDrawer1':'Ein?',
            
            //EXIT
            'lookExit1':'És la porta de sortida.',
            'lookExit2':'Quan estigui preparat sortiré de casa!',
            'giveExit1':'Ein?',
            'useExit1':'Encara no puc marxar, ja que no estic preparat!',
            'useExit2':'Ho tinc tot! Ja puc marxar!',
            'pickupExit1':'Ein?',
            'pushExit1':'La porta està tancada. Ara fer una sortida triumfant se\'n diu fer un Corominas.',
            'pullExit1':'Ein?',
            'openExit1':'Encara no puc marxar, ja que no estic preparat!',
            'closeExit1':'Ein?',
            'talkExit1':'Qui és? Ah si ningú ha trucat!',
            'defaultExit1':'Ein?',

            //FRIDGE
            'lookFridge1':'La 3a nevera que compro. Tenia una col·lecció d\'imants com l\'Olga, però els he tret tots.',
            'giveFridge1':'Em va costar molts diners com per regalar-la.',
            'useFridge1':'Ja menjaré a la boda. Espero que s\'enrecordin de la meva alergia al peix!',
            'pickupFridge1':'Una mica massa gran, no?',
            'pushFridge1':'Nyyyyyyyyy no puc.',
            'pullFridge1':'Nyyyyyyyyy no puc.',
            'openFridge1':'Obrir la nevera si no vull res és un desperdici de llum. A més el Noé es va deixar l\'ampolla d\'orxata i no vull que se li escalfi.',
            'closeFridge1':'Està tancada.',
            'talkFridge1':'Ein?',
            'defaultFridge1':'Ein?',

            //FREEZER
            'lookFreezer1':'És el congelador.',
            'giveFreezer1':'Està unit a la nevera.',
            'useFreezer1':'Està ple, crec que només hi ha trufes de xocolata. A la caixa hi ha les lletres "rets/l"',
            'pickupFreezer1':'Va a ser que no.',
            'pushFreezer1':'Una mica bèstia, no?',
            'pullFreezer1':'Una mica bèstia, no?',
            'openFreezer1':'No que fa fred.',
            'closeFreezer1':'Està tancat.',
            'talkFreezer1':'La teva segona transformació deixava molt que desitjar.',
            'defaultFreezer1':'Ein?',

            //GUITAR
            'lookGuitar1':'Han contractat a DJ Galeote per punxar a la boda.',
            'giveGuitar1':'No! Costa massa diners!',
            'useGuitar1':'A veure que tal sona...',
            'useGuitar2':'Hi ha un tema de Throwing Muses que em surt genial, pero no estic massa inspirat ara.',
            'pickupGuitar1':'Ara no. Tocaré alguna cosa de David Bowie després.',
            'pushGuitar1':'No home que caurà! Aquí l\'Oriol tindria penjada una bicicleta enlloc d\'una guitarra.',
            'pullGuitar1':'No home que caurà!',
            'openGuitar1':'Estic a primer curs! No en tinc ni idea!',
            'closeGuitar1':'Lo what?',
            'talkGuitar1':'No estem en aquest punt.',
            'defaultGuitar1':'Tun tun tan tan tinc tiiin',

            //PICTUREB (loom)
            'lookPictureB1':'Un dels meus jocs favortis: Loom, creat al 1990.',
            'lookPictureB2':'Tambè ès un dels jocs preferits del Nas.',
            'givePictureB1':'Tè un valor sentimental.',
            'usePictureB1':'Puc jugar al joc si el decarrego del steam. Recordo haver escrit el codi en algun lloc.',
            'pickupPictureB1':'Tot i que el porto sempre amb mi, avui farem una excepció.',
            'pushPictureB1':'No, aquí tampoc hi ha cap caixa forta.',
            'pullPictureB1':'No, aquí tampoc hi ha cap caixa forta.',
            'openPictureB1':'El trencarè si ho faig.',
            'closePictureB1':'No es pot tancar.',
            'talkPictureB1':'Hola, em dic Bobbin Threadbare, ets la meva mare?',
            'defaultPictureB1':'Ein?',

            //PICTUREK
            'lookPictureK1':'En Julio va fer aquesta foto a l\'Ignatius fa molt temps.',
            'givePictureK1':'No penso regalar la meva foto de l\'Ignatius',
            'usePictureK1':'Potser podrem fer-li una foto amb el nou gatet de la Natalia. O encara no el té?',
            'pickupPictureK1':'Què mono. Atxus l\'alèrgia del Karde ès tan forta que fins i tot amb la foto li agafa!',
            'pushPictureK1':'És molt maco.',
            'pullPictureK1':'Uaaaaaa',
            'openPictureK1':'Uuuu',
            'closePictureK1':'Kitty, kitty, kitty',
            'talkPictureK1':'Miau! Recordo quan el Jin va dir a l\'Anakin vols que la Misha et punxi amb un punxó? I el Curry va dir que no.',
            'defaultPictureK1':'No puc parar de clicar a la foto de lo maco que és!',

            //PRESENT
            'lookPresent1':'A la targeta posa: Per a en Joan i en Ricard, d\'Ajar Nordic I. ',
            'lookPresent2':'És una estatua!',
            'lookPresent3':'Ara recordo que em van dir que l\'opció més còmode era fer un ingrés.',
            'givePresent1':'L\'hauria d\'agafar primer.',
            'givePresent2':'Pesa massa. Si ha de ser un problema, els faré una transferència en lloc d\'un regal.',
            'givePresent3':'Recordo que el número era: mec mec meeeec censurat meeeec',
            'usePresent1':'És una estatua inútil. I la Natalia ja els ha regalat un llum fantàstic.',
            'pickupPresent1':'Pesa massa i no el puc moure.',
            'pushPresent1':'No el puc moure. No crec que ni un basc ho pugués fer.',
            'pullPresent1':'No el puc moure.',
            'openPresent1':'No és per a mi.',
            'closePresent1':'Ja està tancat.',
            'talkPresent1':'Si parlo i em contesta em farà por!',
            'defaultPresent1':'Ein?',

            //SOFA
            'lookSofa1':'És un sofà de l\'IKEA que en Danferino em va ajudar a portar.',
            'giveSofa1':'No sortirà d\'aquesta casa.',
            'useSofa1':'Tot i que estic cansat ara no és el moment de seure.',
            'useSofa2':'A més, en Raimon em vigila amb la seva app de fitness!',
            'pickupSofa1':'Pesa massa.',
            'pushSofa1':'M\'agrada a on està ara.',
            'pullSofa1':'No em posaré a ordenar l\'habitació i canviar els mobles de lloc',
            'openSofa1':'No és un sofà llit! I em preocupa que quan el vam muntar amb el Carlos ens va sobrar moltes peces.',
            'closeSofa1':'No es pot fer!',
            'talkSofa1':'No vull parlar amb el sofà.',
            'defaultSofa1':'Ein?',

            //TPHONE
            'lookInventoryTPhone1':'És el meu telefon. Amb ell jugo a l\'Ingress com el Darko.',
            'giveInventoryTPhone1':'No, és meu.',
            'useInventoryTPhone1':'Trucaré al Joan i al Ricard per confirmar.',
            'useInventoryTPhone2':'Ara ja puc parlar!',
            'useInventoryTPhone3':'Ja està encès!',
            'useInventoryTPhone4':'Crec que faré una partida ràpida a Spooklins!',
            'useInventoryTPhone5':'Ja estic, però no he superat el record del Quele!',
            'pickupInventoryTPhone1':'Ja el tinc.',
            'pushInventoryTPhone1':'Ein?',
            'pullInventoryTPhone1':'Ein?',
            'openInventoryTPhone1':'Fa molt temps que els telèfons ja no s\'obren',
            'closeInventoryTPhone1':'No es tanca.',
            'talkInventoryTPhone1':'Hola?',
            'talkInventoryTPhone2':'Ja sé que confirmar al mateix dia és lleig,',
            'talkInventoryTPhone3':'que hauria d\'haver confirmat abans del 15 de novembre,',
            'talkInventoryTPhone4':'però vaig fer el video com vau demanar a l\'invitació i vau posar a la web Clàssica!',
            'talkInventoryTPhone5':'Bé, ens veiem ara! Adéu!',
            'talkInventoryTPhone6':'...',
            'talkInventoryTPhone7':'Hauria d\'haver-los preguntat tot el què encara no sé!',
            'talkInventoryTPhone8':'No els vull molestar més!',        
            'talkInventoryTPhone9':'Primer hauria de trucar...',      
            'defaultInventoryTPhone1':'Ein?',


            'ending' : 'Felicitats!\nHas arribat al final d\'aquesta aventura. Ara tens tota la informació' +
            ' necessària per atendre l\'event. Esperem de tot cor que hagis disfrutat d\'aquest petit joc, i' +
            ' que pròximament puguis també difrutar amb nosaltres el dia de la notra boda. ' +
            'Si encara tens algun dubte, pots contactar-nos a contacte@superjoaniricard.com, o be per twitter a @superjoanricard' +
            '\n' + '\n'+
            
            'CREDITS:'+
            'Guió, Programació, Art i Música:\n'+
            'Joan Alemany i Ricard Cabrera\n'+
            'Testing: Daniel Ferreira\n'+

            'AGRA\xCFMENTS: Patrick Niekerken' +
            '\n' +
            '\n'





        },

        items : {
            //Bedroom
            'windowB1': 'finestra',
            'windowB2': 'finestra',
            'clothes': 'vestidor',
            'pictureB': 'quadre de loom',
            'guitar': 'guitarra',   
            'bed' : 'llit',

            //Study
            'paperball' : 'bola de paper',
            'tphone': 'telefon',
            'blackboard' : 'pissarra',
            'clock': 'rellotge',
            'drawer': 'calaix',
            'window': 'finestra',
            'papers': 'papers',

            //Kitchen
            'closet': 'armaris',
            'fridge': 'nevera',
            'freezer': 'congelador',
            'pictureK': 'quadre de gat',

            //Sitting Room
            'cabinet' : 'estanteria',
            'cactus': 'cactus',
            'carpet': 'catifa',
            'door': 'porta',
            'exit': 'sortida',
            'sofa': 'sofà',
            'books': 'llibres',
            'present': 'regal'

        },

        commands : {
            'Give' : 'Donar',
            'Use' : 'Usar',
            'Pick up' : 'Agafar',
            'Open' : 'Obrir',
            'Close' : 'Tancar',
            'Talk' : 'Parlar',
            'Look' : 'Mirar',
            'Push' : 'Empènyer',
            'Pull' : 'Estirar',
            'Walk' : 'Anar a'
        },

        levels : {
            'kitchen' : 'cuina',
            'bedroom' : 'dormitori',
            'sitting-room' : 'saleta',
            'study' : 'estudi',
            'titlescreen' : 'titlescreen'
        },

        commandImages : {
            'give' : 'ui/donar.gif',
            'open' : 'ui/obrir.gif',
            'look' : 'ui/mirar.gif',
            'use' : 'ui/usar.gif',
            'close' : 'ui/tancar.gif',
            'push' : 'ui/empenyer.gif',
            'pickup' : 'ui/agafar.gif',
            'talk' : 'ui/parlar.gif',
            'pull' : 'ui/estirar.gif',
            'walk' : 'ui/caminar.gif'
        },

        commandXs : {
            'give' : 76/2,
            'open' : 68/2,
            'look' : 70/2,
            'use' : 60/2,
            'close' : 92/2,
            'push' : 128/2,
            'pickup' : 90/2,
            'talk' : 86/2,
            'pull' : 98/2,
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
            return this.levels[levelName];
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
                  return 'idle';
            }

            return null;
        }

    });

});