ig.module(
    'game.components.i18n.i18n-es'
)
.requires(
    'plusplus.core.config'
)
.defines(function() {

    "use strict";

    var _c = ig.CONFIG;

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
            \xb7
   
     */

    /**
     * Provides an interface to get localized text and image paths
     *
     *
     * @class
     * @extends ig.Class
     * @memeberof ig
     */
    ig.i18nEs = ig.Class.extend({

        messages : {

            'introText': 'Año 2014.\n La gran cita se acerca, todos los preparativos están en marcha. Los invidatos están al caer, pero falta alguien por confirmar...'+
                        'Encarnas a Ajar Nordic I, que, perdido en un momento de amnesia, ha olvidado por completo todos los detalles de la boda de Joan y Ricard.' +
                        'Tu misión es clara, tienes que buscar todos los datos necesarios para poder llegar a la boda a tiempo.' +
                        '\nSerás capaz de encontrar todas las piezas del rompecabezas?',


            //BLACKBOARD
            'lookBlackboard1':'Es el problema que hay que resolver para la boda',
            'lookBlackboard2':'Si sabemos que hay más de 100 invitados, entonces o 15 se conocen todos entre todos,',
            'lookBlackboard3':'o 3 no se conocen entre s\xED.',
            'giveBlackboard1':'No se a quien más asignar el problema... a Marta?',
            'useBlackboard1':'Amanda ha estado trabajando duramente! Seguro que ya sabe la solución!',
            'pickupBlackboard1':'Al intentar cogerlo he visto que al lado hay unas letras: "/sec".',
            'pushBlackboard1':'Cosas de matemáticos...',
            'pullBlackboard1':'Cosas de matemáticos...',
            'openBlackboard1':'Hace tiempo que no abro la pizarra en público.',
            'closeBlackboard1':'Cosas de matemáticos...',
            'talkBlackboard1':'Pizarra pizarrita, quién es el profesor más motivado?',
            'talkBlackboard2':'Mmmm... Creo que he escuchado algo',
            'talkBlackboard3': 'Creo que ha dicho que las más motivadas son Laura Morera y Tresa Marimon con su Explorium!',
            'defaulBlackboard1':'Cosas de matemáticos...',

            //inventory MAP
            'lookInventoryMap1':'En el mapa dice que se casan en Sant Cugat, en Mercantic',
            'lookInventoryMap2':'Avenida de Rius i Taulet, 120, 08173 Sant Cugat del Vallès, Barcelona',
            'giveInventoryMap1':'A quien se lo doy?',
            'useInventoryMap1':'Cuando me dirija hacia allí ya lo usaré',
            'pickupInventoryMap1':'Ya lo tengo.',
            'pushInventoryMap1':'Si lo muevo un poco veo unas letras escritas por detrás: "oom".',
            'pullInventoryMap1':'Ni idea de qué tengo que hacer.',
            'openInventoryMap1':'Antes era una bola de papel, ahora es un mapa.',
            'closeInventoryMap1':'Prefiero el mapa que la bola de papel.',
            'talkInventoryMap1':'No creo que hablar con objetos inanimados sea la solución',
            'talkInventoryMap2':'Mierda! Ya estoy hablando solo de nuevo!',
            'defaultInventoryMap1':'No se qué tengo que hacer.',

            //inventory PAPERBALL
            'lookInventoryPaperball1':'Parece que este papel arrugado es importante.',
            'giveInventoryPaperball1':'Tiene informaión demasiado importante como para regalarlo.',
            'useInventoryPaperball1':'Así en forma de bola no veo cómo usarlo.',
            'pickupInventoryPaperball1':'Ya lo tengo en mi inventario.',
            'pushInventoryPaperball1':'No parece que vaya a funcionar!',
            'pullInventoryPaperball1':'No parece que vaya a funcionar!',
            'openInventoryPaperball1':'Mira, si es un mapa!',
            'closeInventoryPaperball1':'Ya está cerrada.',
            'talkInventoryPaperball1':'Hola? Hola? No contesta!',
            'defaultInventoryPaperball1':'Ein?',

            //PAPERS
            'lookPapers1':'Un montón de papeles. Entre otros tengo el guión de mi película: "A sporadic Injurer".',
            'lookPapers2':'Me recuerda al montón de papeles que tiene Joan en su mesa. Dice que es hereditario.',
            'lookPapers3':'Un papel dice que el orden correcto es: tiza, hielo, esfera.',
            'givePapers1':'Hay un Internal Assessment que Taixés tiene que corregir. Lo cogeré para dárselo en la boda!',
            'usePapers1':'No hay nada importante.',
            'pickupPapers1':'Se que tenía el mapa por aquí, pero ahora no lo veo.',
            'pickupPapers2':'El mapa estaba con el resto de papeles, pero se ha caído.',
            'pushPapers1':'Al apartar los papeles he visto un plano de las obras del piso. Suerte que Jordi y Núria me ayudarán a entenderlo!',
            'pullPapers1':'No ensucies!',
            'openPapers1':'Entre toda esta montaña de papeles he visto un ensayo sobre la realidad democrática con dibujos de Magritte firmado por M.R.',
            'closePapers1':'No me voy a poner a hacer bolas de papel...',
            'talkPapers1':'No es un discurso.',
            'defaultPapers1':'Ein.',

            
            //WINDOW (B1, B2, R)
            'lookWindow1': 'Uy, creo que ése que corre es Dani, que llega tarde a la boda.',
            'useWindow1':'No, Pau no me dejaría usar otra cosa que no sea Linux.',
            'openWindow1': 'Hace frío y no la quiero abrir. Además, creo que la amiga de Jacobo me observa.',
            'closeWindow1': 'Ya está cerrada. No quiero bajar la persiana no vaya a ser que pase como en la casa de Collblanc de Micky que después no la podíamos subir!',
            'talkWindow1': 'HELLO WORLD!',
            'talkWindow2': 'HELLO CLOUD!',
            'talkWindow3': 'HELLO PUCK!',
            'defaultWindow1': 'No, simplemente no',

            //PAPERBALL
            'lookPaperball1':'Tiene algo escrito dentro. Dice: "oom", no se que será.',
            'givePaperball1':'Es mi bola de papel.',
            'usePaperball1':'Si tubiera una canasta, la podría usar.',
            'pickupPaperball1':'Genial! Ahora ya tengo la bola de papel.',
            'pushPaperball1':'No, en casa no se puede jugar a la pelota!',
            'pullPaperball1':'No, en casa no se puede jugar a la pelota!',
            'openPaperball1':'Hasta que no la coja no la podré abrir',
            'closePaperball1':'Ya está cerrada!',
            'talkPaperball1':'Hola bola de papel! Dime todos tus secretos...',
            'defaultPaperball1':'Ein?',

            //BED
            'lookBed1':'Es mi cama. Las sábanas me las regalaron Júlia i Doron!',
            'giveBed1':'Aunque muchos amigos, como Marc, se han quedado a dormir. La cama es mía!',
            'useBed1':'No es hora de ir a dormir.',
            'pickupBed1':'No, eso no funciona.',
            'pushBed1':'No, eso no funciona.',
            'pullBed1':'No, eso no funciona.',
            'openBed1':'La cama está hecha, no la quiero deshacer',
            'closeBed1':'Ya está hecha!',
            'talkBed1':'La cama no puede hablar, y seguramente será mejor que sea así',
            'defaultBed1':'No, eso no funciona.',


            //BOOKS
            'lookBooks1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parece un ritual para invocar a Nyarlathotep ',
            'giveBooks1':'Están bien en la librería',
            'useBooks1':'Mlkshk tousled authentic lomo DIY, flexitarian tattooed asymmetrical Wes Anderson normcore gentrify drinking vinegar PBR&B Pitchfork. Tote bag VHS forage banh mi pour-over, viral hoodie vinyl you probably haven\'t heard of them typewriter Shoreditch jean shorts four loko mumblecore.',
            'pickupBooks1':'Son libros de hipster. Ah, aquí hay un Álbum de Menorca donde salgo con Trish.',
            'pushBooks1':'No hay puertas secretas en casa. Y para códigos secretos más vale hablar con Chris.',
            'pullBooks1':'No funciona...',
            'openBooks1':'Ahora no me voy a poner a leer. Aunque veo que tengo una copia de  Brave New World y Cals me lo recomendó.',
            'openBooks2':'Lo cogeré por si la boda es muy aburrida.',
            'closeBooks1':'Están cerrados.',
            'talkBooks1':'No tengo nada que decirles.',
            'defaultBooks1':'Ein?',

            //CABINET
            'lookCabinet1':'Hay un tablero de Go con sus piedras dentro, pero no llego.',
            'giveCabinet1':'No llego.',
            'useCabinet1':'Me encantaria jugar a Baduk con César, pero tengo prisa.',
            'pickupCabinet1':'El tablero plegable de Óscar está arriba, pero no lo alcanzo.',
            'pushCabinet1':'No alcanzo. Y si aviso a Pablo?',
            'pullCabinet1':'No alcanzo.',
            'openCabinet1':'Ya me dijo Zuriñe que era mala idea ponerlo tan arriba.',
            'closeCabinet1':'No alcanzo.',
            'talkCabinet1':'Ahora me acuerdo que tengo que quedar con Laura para jugar al Go.',
            'defaultCabinet1':'No alcanzo.',

            //CACTUS
            'lookCactus1':'Es un cactus. Se llama Chuck.',
            'giveCactus1':'No lo quiero regalar.',
            'useCactus1':'Mmmm no funciona.',
            'pickupCactus1':'Si me lo pongo en el bolsillo me pincharé!',
            'pushCactus1':'No lo quiero romper!',
            'pullCactus1':'Me voy a hacer daño.',
            'openCactus1':'No tengo el equipo médico necesario.',
            'closeCactus1':'No se si entiendo qué quieres hacer.',
            'talkCactus1':'Hola Chuck! Magda me ha regalado una regadora nueva, no se porqué tiene tantas en casa!',
            'defaultCactus1':'Es un cactus. Desea no ser molestado.',         

            //CLOCK
            'lookClock1' : 'Mmm... El día era el 29 de novembre... y...',
            'lookClock2' : 'Ya me acuerdo de la hora!',
            'lookClock3' : 'La ceremonia empieza a la 13:00! Tengo que darme prisa!',
            'useClock1' : 'Ya funciona.',
            'pickupClock1' : 'Me gusta donde está. Además, quiero llegar antes que Eduard, aunque va a ser difícil, es muy responsable.',
            'talkClock1' : 'Relojito relojito mágico, ay no.',
            'defaultClock1' : 'No, eso no funciona.',

            //CLOSET
            'lookCloset1':'Platos, vasos, etc.',
            'giveCloset1':'Lo what?',
            'useCloset1':'Ya hace tiempo que salimos del armario.',
            'pickupCloset1':'En la parte de debajo hay unas bolsas de reciclaje según el tipo de plástico como me enseñó Edu, pero anora no voy a tirarlas.',
            'pushCloset1':'Ein?',
            'pullCloset1':'Ein?',
            'openCloset1':'No hay nada interesante dentro. Aunque hay unas figuritas que me regaló Tina! Ésa si fue una gran boda!',
            'closeCloset1':'Están cerrados.',
            'talkCloset1':'Objecto inanimado incapaz de conversar.',
            'defaultCloset1':'Es un armario! No puedo!',


            //CLOTHES
            'lookClothes1':'Hay un vestido de Leia, otro de Han Solo...',
            'lookClothes2':'Aja! Aquí tengo mi camisa y mi corbata!',
            'lookClothes3':'Me dijeron que podía venir de Cosplay o formal, no casual',
            'giveClothes1':'No! Ahora que las acabo de encontrar!',
            'useClothes1':'Me vestiré cuando lo tenga todo listo justo antes de salir por la puerta. Cogeré una pajarita extra para Darko.',
            'pickupClothes1':'Esperaré hasta el último momento.',
            'pushClothes1':'Estoy de acuerdo que me falta espacio para poner las camisetas que me ha regalado Gemma. Es que se vació el armario.',
            'pullClothes1':'Ein?',
            'openClothes1':'Aquí hay una pieza única de Brunihilda Beast, de la colección de la Plage de St Tropez.',
            'closeClothes1':'Ein?',
            'talkClothes1':'Me pongo el vestido de emperador?',
            'defaultClothes1':'Ein?',           

            //DRAWER
            'lookDrawer1':'Dentro tengo mi teléfono.',
            'lookDrawer2':'Antes estaba mi teléfono. Ahora sólo queda la moneda de dos euros que le prometí a Jacobo.',
            'giveDrawer1':'Está atascado.',
            'useDrawer1':'O lo abro o lo cierro.',
            'pickupDrawer1':'Uooo ya tengo mi teléfono.',
            'pickupDrawer2':'Cerrado imposible.',
            'pickupDrawer3':'No hay nada más.',
            'pushDrawer1':'No tiene sentido empujarlo.',
            'pullDrawer1':'No saldrá.',
            'openDrawer1':'Ya está abierto.',
            'openDrawer2':'Está atascado, pero entreabierto. Puedo intentar coger lo que haya dentro.',
            'closeDrawer1':'Acabo de cerrarlo.',
            'closeDrawer2':'Ya está cerrado.',
            'talkDrawer1':'Ein?',
            'defaultDrawer1':'Ein?',
            
            //EXIT
            'lookExit1':'Es la puerta de salida.',
            'lookExit2':'Cuando estré preparado saldré de casa!',
            'giveExit1':'Ein?',
            'useExit1':'No me puedo ir todavía, no estoy listo!',
            'useExit2':'Lo tengo todo! Allá voy!!',
            'pickupExit1':'Ein?',
            'pushExit1':'La puerta está cerrada. Hacer una salida triunfal ahora se le llama hacer un Corominas.',
            'pullExit1':'Ein?',
            'openExit1':'No me puedo ir todavía, no estoy listo!',
            'closeExit1':'Ein?',
            'talkExit1':'Quien es? Ay, si no ha llamado nadie!',
            'defaultExit1':'Ein?',

            //FRIDGE
            'lookFridge1':'La tercera nevera que comrpo. Tenía una colección de imanes como los de Olga, pero los he quitado.',
            'giveFridge1':'Me costó demasiado como para regalarla.',
            'useFridge1':'Ya comeré en la boda! Espero que se acuerden de mi alergia a los piñones',
            'pickupFridge1':'Abulta un poco, no crees?',
            'pushFridge1':'Ngggggggg no puedo.',
            'pullFridge1':'Ngggggggg no puedo.',
            'openFridge1':'Abir la nevera si no quiero nada es un desperdicio de luz. Además, Noé se dejó una botella de orchata y no quiero que se le caliente',
            'closeFridge1':'Está cerrada.',
            'talkFridge1':'Ein?',
            'defaultFridge1':'Ein?',

            //FREEZER
            'lookFreezer1':'El congelador.',
            'giveFreezer1':'Va con la nevera.',
            'useFreezer1':'Está lleno, pero creo que sólo hay unas trufas de chocolate. En la caja pone: "rets/l"',
            'pickupFreezer1':'Va a ser que no.',
            'pushFreezer1':'Un poco bestia, no?',
            'pullFreezer1':'Un poco bestia, no?',
            'openFreezer1':'No que tengo frío.',
            'closeFreezer1':'Está cerrado.',
            'talkFreezer1':'Tu segunda transformación dejaba mucho que desear.',
            'defaultFreezer1':'Ein?',

            //GUITAR
            'lookGuitar1':'Han contratado a DJ Galeote para pinchar en la boda.',
            'giveGuitar1':'No! Que cuesta mucha pasta!',
            'useGuitar1':'A ver que tal suena...',
            'useGuitar2':'Hay un tema de Throwing Muses que me sale genial, pero ahora no estoy muy inspirado.',
            'pickupGuitar1':'Ahora no. Tocaré alguna cosa de David Bowie después.',
            'pushGuitar1':'No hombre que se va a caer! Aquí Oriol tendría colgada una bici en vez de una guitarra.',
            'pullGuitar1':'No hombre que se va a caer!',
            'openGuitar1':'Que estoy en primero! No tengo ni idea!',
            'closeGuitar1':'Lo what?',
            'talkGuitar1':'No hemos llegado a ese punto.',
            'defaultGuitar1':'Tun tun tan tan tinc tiiin',

            //PICTUREB (loom)
            'lookPictureB1':'Uno de mis juegos favoritos: Loom, creado en 1990.',
            'lookPictureB2':'También es uno de los juegos favoritos de Nas.',
            'givePictureB1':'Tiene un valor sentimental.',
            'usePictureB1':'Puedo jugar si lo descargo de Steam. Creo que escribí el código en algún lado.',
            'pickupPictureB1':'Aunque siempre lo llevo conmigo. Hoy haré una excepción.',
            'pushPictureB1':'No, aquí tampoco hay caja fuerte.',
            'pullPictureB1':'No, aquí tampoco hay caja fuerte.',
            'openPictureB1':'Lo romperé si lo hago!',
            'closePictureB1':'No se puede cerrar.',
            'talkPictureB1':'Hola, me llamo Bobbin Threadbare, eres mi madre?',
            'defaultPictureB1':'Ein?',

            //PICTUREK
            'lookPictureK1':'Julio hizo esta foto de Ignatius hace mucho tiempo.',
            'givePictureK1':'No pienso regalar mi foto de Ignatius!',
            'usePictureK1':'Quizá le podemos hacer una foto al nuevo gatete de Natalia. O todavía no lo tiene?',
            'pickupPictureK1':'Qué mono. Achís La alergia de Karde es tan fuerte que hasta con la foto le coje!',
            'pushPictureK1':'Es muy mono.',
            'pullPictureK1':'Uaaaaaa.',
            'openPictureK1':'Uuuu.',
            'closePictureK1':'Kitty, kitty, kitty.',
            'talkPictureK1':'Miau! Tres tristes gatos gataban trigo, tres tristes gatos en un gatal. Qué gato gataba más? Jin, Anakin o Curry?',
            'defaultPictureK1':'No puedo parar de hacer click en la foto de lo bonito que es!',

            //PRESENT
            'lookPresent1':'En la tarjeta pone: para Joan y Ricard, de Ajar Nordic I. ',
            'lookPresent2':'Es una estatua!',
            'lookPresent3':'Ahora recuerdo que me dijeron que la opción más comoda era hacer un ingreso.',
            'givePresent1':'Lo tendría que coger primero.',
            'givePresent2':'Pesa demasaido. Si va a ser un problema, puedo hacer una transferencia.',
            'givePresent3':'Creo que el número era: mec mec meeec censurado meeeeeec',
            'usePresent1':'Es una estatua inútil. Y Natalia les ha regalado ya una lámpara fantástica.',
            'pickupPresent1':'Pesa demasaido, no la puedo mover.',
            'pushPresent1':'No lo puedo mover. No creo que ni un vasco pueda.',
            'pullPresent1':'No lo puedo mover.',
            'openPresent1':'No es para mi.',
            'closePresent1':'Ya está cerrado..',
            'talkPresent1':'Si le hablo y me contesta me dará miedo!',
            'defaultPresent1':'Ein?',

            //SOFA
            'lookSofa1':'Es un sofá de IKEA que Danferino me ayudó a traer.',
            'giveSofa1':'No saldrá de esta casa.',
            'useSofa1':'Aunque estoy algo cansado, no es el momento.',
            'useSofa2':'Además, Raimon me vigila con su app de fitness!',
            'pickupSofa1':'Pesa demasiado.',
            'pushSofa1':'Me gusta donde está.',
            'pullSofa1':'No me pondré a ordenar la habitación y a cambiar los muebles de sitio.',
            'openSofa1':'No es un sofá cama! Y me preocupa porque cuando lo montamos con Carlos sobraron muchas piezas.',
            'closeSofa1':'No se puede hacer!',
            'talkSofa1':'No quiero hablar con el sofá.',
            'defaultSofa1':'Ein?',

            //TPHONE
            'lookInventoryTPhone1':'Es mi teléfono. Con él juego a \'Ingress con Darko.',
            'giveInventoryTPhone1':'No, es mío.',
            'useInventoryTPhone1':'Llamaré a Joan y Ricard para confirmar.',
            'useInventoryTPhone2':'Ahora ya puedo hablar!',
            'useInventoryTPhone3':'Ya está encendido!',
            'useInventoryTPhone4':'Creo que haré una partida rápida al Spooklins!',
            'useInventoryTPhone5':'Ya estoy! Pero no he superado el récord de Quele!',
            'pickupInventoryTPhone1':'Ya lo tengo.',
            'pushInventoryTPhone1':'Ein?',
            'pullInventoryTPhone1':'Ein?',
            'openInventoryTPhone1':'Hace mucho que los teléfonos no se abren.',
            'closeInventoryTPhone1':'No se cierra.',
            'talkInventoryTPhone1':'Hola?',
            'talkInventoryTPhone2':'Ya sé que confirmar el mismo día está feo,',
            'talkInventoryTPhone3':'que tendría que haber confirmado antes del 15 de noviembre,',
            'talkInventoryTPhone4':'pero hice el vídeo que pedísteis en la invitación y la web clásica!',
            'talkInventoryTPhone5':'Bueno, que nos vemos ahora!',
            'talkInventoryTPhone6':'...',
            'talkInventoryTPhone7':'Tendría que haberles preguntado todo lo que todavía no se!',
            'talkInventoryTPhone8':'No les quiero molestar más!',        
            'talkInventoryTPhone9':'Primero tendría que llamar...',      
            'defaultInventoryTPhone1':'Ein?',


            'ending' : 'Felicidades!\nHas llegado al final de esta aventura. Ahora tienes toda la información' +
            ' necesaria para venir al evento. Esperamos que hayas disfrutado de este pequeño juego y' +
            ' que próximamente puedas disfrutar con nosotros el día de nuestra boda. ' +
            'Si todavía tienes alguna duda, puedes contactar con nosotros en contacto@superjoaniricard.com, o por twitter a @superjoanricard' +
            '\n' + '\n'+
            
            'CRÉDITOS:'+
            'Guión, Programación, Arte y Música:\n'+
            'Joan Alemany y Ricard Cabrera\n'+
            'Testing: Daniel Ferreira\n'+

            'AGRADECIMIENTOS: Patrick Niekerken' +
            '\n' +
            '\n'





        },

        items : {
            //Bedroom
            'windowB1': 'ventana',
            'windowB2': 'ventana',
            'clothes': 'vestidor',
            'pictureB': 'cuadro de loom',
            'guitar': 'guitarra',   
            'bed' : 'cama',

            //Study
            'paperball' : 'bola de papel',
            'tphone': 'teléfono',
            'blackboard' : 'pizarra',
            'clock': 'reloj',
            'drawer': 'cajón',
            'window': 'ventana',
            'papers': 'papeles',

            //Kitchen
            'closet': 'armarios',
            'fridge': 'nevera',
            'freezer': 'congelador',
            'pictureK': 'cuadro de gat',

            //Sitting Room
            'cabinet' : 'estantería',
            'cactus': 'cactus',
            'carpet': 'alfombra',
            'door': 'puerta',
            'exit': 'salida',
            'sofa': 'sofá',
            'books': 'libros',
            'present': 'regalo'

        },

        commands : {
            'Give' : 'Dar',
            'Use' : 'Usar',
            'Pick up' : 'Coger',
            'Open' : 'Abrir',
            'Close' : 'Cerrar',
            'Talk' : 'Hablar',
            'Look' : 'Mirar',
            'Push' : 'Empujar',
            'Pull' : 'Estirar',
            'Walk' : 'Ir a'
        },

        levels : {
            'kitchen' : 'cocina',
            'bedroom' : 'dormitorio',
            'sitting-room' : 'salita',
            'study' : 'estudio',
            'titlescreen' : 'titlescreen'
        },

        commandImages : {
            'give' : 'ui/ui_button_give.gif',
            'open' : 'ui/ui_button_open.gif',
            'look' : 'ui/mirar.gif',
            'use' : 'ui/ui_button_use.gif',
            'close' : 'ui/ui_button_close.gif',
            'push' : 'ui/ui_button_press.gif',
            'pickup' : 'ui/ui_button_pickup.gif',
            'talk' : 'ui/ui_button_talk.gif',
            'pull' : 'ui/ui_button_pull.gif',
            'walk' : 'ui/ui_button_walk.gif'
        },

        commandXs : {
            'give' : 44/2,
            'open' : 68/2,
            'look' : 70/2,
            'use' : 60/2,
            'close' : 92/2,
            'push' : 110/2,
            'pickup' : 76/2,
            'talk' : 86/2,
            'pull' : 68/2,
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
            'walk' : 10
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
                  return 'es';
            }

            return null;
        }

    });

});