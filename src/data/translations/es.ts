import type { Translation } from "./types";

// Spanish. Edit freely; anything missing falls back to English.
const es: Translation = {
  works: {
    "wearing-the-city": {
      title: "Llevar la ciudad",
      summary: "Broches. Alpaca, latón, cobre, termoplástico de señalización vial, microesferas de vidrio.",
      text: [
        "Estos broches están hechos, entre otros materiales, con pintura termoplástica de señalización vial: la misma pintura que marca las calles de todo el mundo. Las flechas, líneas y colores que pisamos cada día, ahora llevados en el cuerpo.",
      ],
      pieces: [{ title: "Llevar la ciudad (2026)", lines: ["Broches", "Alpaca, latón, cobre, termoplástico de señalización vial, microesferas de vidrio"] }],
      photos: {
        collage: { alt: "Tres broches llevados bajo un paso elevado de Seúl: un disco negro y amarillo, un bloque rojo y blanco, y un aro abierto con agujas" },
        "street-1": { alt: "Un broche de disco negro y amarillo sobre una camisa roja bajo un paso elevado de Seúl" },
        "street-2": { alt: "Un broche rojo y blanco sobre una camisa gris" },
        "street-3": { alt: "Un broche de aro abierto con agujas y pintura vial amarilla, sobre una camisa roja" },
        "01": { alt: "Tres broches sobre una plancha de corte: una flecha azul, un remolino amarillo y naranja, y un aro naranja" },
        "03": { alt: "El reverso del broche de aro naranja, con su aguja" },
        "04": { alt: "Una calle de Seúl con marcas viales amarillas y blancas" },
      },
    },
    "untitled-rings": {
      title: "Sin título",
      summary: "Anillos. Plata de ley; alambre de oro de 18 quilates.",
      pieces: [
        { title: "Sin título (2025)", lines: ["Anillo", "Plata de ley", "35mm x 23mm x 23mm"] },
        { title: "Sin título (2025)", lines: ["Anillo", "Alambre de oro de 18 quilates", "35mm x 23mm x 23mm"] },
      ],
      photos: {
        "01": { alt: "Una mano con un anillo de alambre de plata y otro de oro" },
        "02": { alt: "Una mano extendida con los dos anillos de alambre" },
        "03": { alt: "Anillo de alambre de plata de ley sobre fondo negro" },
        "04": { alt: "Anillo de alambre de oro de 18 quilates sobre fondo negro" },
      },
    },
    "ready-made-clasp": {
      title: "Cierre ready-made",
      summary: "Collar. Corteza y albura de nogal recuperadas, plata de ley.",
      text: [
        "La madera de esta pieza se recuperó de un nogal talado en una obra de demolición en el sur de Londres.",
        "Al cortar la sección transversal en láminas, encontré un hermoso trozo de corteza que seguía unido a la albura, casi como un abrazo. Hice una estructura de plata para usarlo como un cierre natural, un “ready-made”.",
      ],
      pieces: [
        {
          title: "Cierre ready-made (2025)",
          lines: [
            "Collar",
            "Corteza y albura de nogal recuperadas, plata de ley, cordón de cuero español, pegamento epoxi",
            "110mm x 90mm x 30mm",
          ],
        },
      ],
      photos: {
        "01": { alt: "Colgante de corteza y albura de nogal con tubos de plata, frente" },
        "02": { alt: "Colgante de corteza y albura de nogal con tubos de plata, reverso" },
      },
    },
    "loom-rings": {
      title: "Anillos telar",
      summary: "Una serie de anillos que también son telares. Plata, alpaca, hilo de algodón.",
      text: [
        "Las mujeres mayas llevan mucho tiempo tejiendo en telares de cintura: telares portátiles atados al cuerpo, con un extremo sujeto a la cintura de la tejedora. La postura y el movimiento de la propia tejedora crean la tensión necesaria para tejer, lo que la convierte en parte activa de la máquina y no en una operaria separada de ella.",
        "Anillos telar extiende esta idea: objetos para llevar puestos que a su vez producen otros objetos para llevar puestos. El anillo telar funciona como un telar en miniatura que se lleva en el dedo y genera pequeños anillos de tela a la medida de quien los hizo.",
      ],
      pieces: [
        { title: "Anillo telar (2026)", lines: ["Anillo hueco", "Alpaca, hilo de algodón, pátina de bórax", "36mm x 66mm x 12mm"] },
        { title: "Anillo telar circular (2025)", lines: ["Anillo fundido", "Plata de ley, hilo de algodón rojo", "12mm x 30mm x 30mm"] },
        { title: "Anillo lanzadera (2026)", lines: ["Anillo", "Alpaca, pátina de bórax", "48mm x 43mm x 19mm"] },
      ],
      photos: {
        "01": { alt: "Anillo telar: anillo de alpaca con hilo rojo tejido", caption: "Anillo telar (2026)" },
        "02": { alt: "Anillo telar circular: aro de plata envuelto en hilo rojo", caption: "Anillo telar circular (2025)" },
        "03": { alt: "Una mujer con el Anillo lanzadera", caption: "Anillo lanzadera (2026)" },
        "04": { alt: "El Anillo lanzadera en un puño levantado", caption: "Anillo lanzadera (2026)" },
        "05": { alt: "El Anillo lanzadera en una mano, a la altura de la muñeca", caption: "Anillo lanzadera (2026)" },
        "06": { alt: "El Anillo lanzadera sobre el dorso de una mano", caption: "Anillo lanzadera (2026)" },
        "07": { alt: "El Anillo lanzadera en una mano apoyada sobre un brazo", caption: "Anillo lanzadera (2026)" },
        "ref-loom": { alt: "Una artista maya tejiendo en un telar de cintura", caption: "Artista maya tejiendo en un telar de cintura. Foto: pjhap.wordpress.com" },
      },
    },
    "engagement-rings": {
      title: "Anillos de compromiso",
      summary: "Una pareja a juego. Plata de ley, alambre de oro de 14 quilates remachado.",
      text: [
        "Le pedí matrimonio a mi ahora marido con este anillo. Está hecho de lámina de plata de ley soldada, con cinco alambres de oro sujetos en tensión por pequeños remaches en los extremos.",
        "Jugueteando con él, mi marido dobló las paredes del anillo hacia dentro, justo lo suficiente para que los alambres empezaran a moverse sueltos y a sonar. Le preocupaba haberlo roto, pero a mí me encantó el tacto de los alambres sueltos, el nuevo sonido, lo accidental de todo.",
        "Me di cuenta de que mi idea original, con los alambres fijos, era innecesariamente rígida; el tacto y el juego de los alambres sueltos lo hacían más interesante, más divertido.",
        "Cuando hice mi propio anillo a juego, hice las varillas 2 mm más largas a propósito, para que el mío también sonara. Lo llevo todos los días y me recuerda que, incluso cuando las cosas no salen como estaba previsto, estar abierto a las sorpresas puede traer la mayor alegría.",
      ],
      pieces: [
        {
          title: "El anillo de mi marido (2025)",
          lines: ["Anillo de compromiso con pátina natural por el uso diario", "Plata de ley, alambre de oro de 14 quilates remachado"],
        },
        { title: "Mi anillo (2025)", lines: ["Anillo de compromiso", "Plata de ley, alambre de oro de 14 quilates remachado"] },
      ],
      photos: {
        "01": { alt: "Anillo de plata con alambres de oro en una pared calada", caption: "El anillo de mi marido (2025)" },
        "02": { alt: "Aro de plata con alambres de oro remachados", caption: "Mi anillo (2025)" },
      },
    },
    "silver-and-pearl": {
      title: "Plata y perla",
      summary: "Broche y collar. Plata de ley, perla.",
      text: [
        "La plata es dura, fría, elemental. Toma la forma que le des y la mantiene. También es el mejor conductor: absorbe el calor con más facilidad que cualquier otro metal.",
        "Las perlas son lo opuesto: orgánicas, frágiles, formadas lenta e imperfectamente por un ser vivo. Mientras la plata conduce el calor, las perlas no lo toleran: incluso un poco de calor las arruina.",
        "Trabajar con ambas significa negociar constantemente entre control y entrega, precisión e irregularidad.",
      ],
      pieces: [
        { title: "Sin título (2026)", lines: ["Broche", "Plata de ley, perla", "63mm x 24mm x 12mm"] },
        { title: "Collar Pearl Links (2025)", lines: ["Collar, vendido bajo la marca MINILITH", "Plata de ley, perla", "Varias tallas"] },
      ],
      photos: {
        "01": { alt: "Un hombre con un broche de plata y perla sobre un jersey negro", caption: "Sin título (2026)" },
        "02": { alt: "Una mujer con un collar de eslabones de plata y perlas", caption: "Collar Pearl Links (2025)" },
      },
    },
    "inlay-sapwood-necklace": {
      title: "Collar de albura con incrustaciones",
      summary: "Collar. Albura de nogal, plata de ley, alambre de plata fina.",
      text: [
        "La madera de esta pieza se recuperó de un nogal talado en una obra de demolición en el sur de Londres.",
        "En este collar, el maleable alambre de plata fina baila juguetón con los patrones orgánicos del árbol talado, allí donde la albura se encuentra con el duramen o la corteza.",
        "Es uno de los tres collares que hice experimentando con los tres límites de la madera de nogal: duramen (núcleo), albura y corteza.",
      ],
      pieces: [
        { title: "Collar de albura con incrustaciones (2025)", lines: ["Collar", "Albura de nogal, plata de ley, alambre de plata fina, cordón de cuero"] },
        { title: "Prototipos de incrustación en plata (2025)", lines: ["Muestras de broche", "Albura de nogal, alambre de plata fina"] },
      ],
      photos: {
        "01": { alt: "Un hombre con un collar de bloques de nogal con incrustaciones de alambre de plata", caption: "Collar de albura con incrustaciones (2025)" },
        "02": { alt: "Tres muestras de nogal con incrustaciones onduladas de alambre de plata", caption: "Prototipos de incrustación en plata (2025)" },
      },
    },
    "bark-necklace": {
      title: "Collar de corteza",
      summary: "Collar. Corteza de nogal, plata de ley, cordón de cuero.",
      pieces: [{ title: "Collar de corteza (2025)", lines: ["Collar", "Corteza de nogal, plata de ley, cordón de cuero, epoxi"] }],
      photos: {
        "01": { alt: "Una mujer con un collar largo de trozos de corteza de nogal" },
        "02": { alt: "Collar de corteza de nogal extendido" },
      },
    },
    "seoul-french-embassy-ring": {
      title: "Anillo Embajada de Francia en Seúl",
      summary: "Anillo. Plata de ley.",
      text: [
        "Hecho durante mi primera estancia en Corea, este anillo está inspirado en el edificio de la Embajada de Francia en Seúl: una estructura de hormigón de 1962 del arquitecto coreano Kim Chung-up (김중업), discípulo de Le Corbusier. Su tejado se curva como los aleros de un tejado tradicional coreano y crea una silueta de hormigón visto que flota sobre columnas (pilotis).",
        "Corea avanza rápido y mira hacia adelante: edificios del siglo XX como este han sido en gran parte demolidos y reemplazados. Este se salvó, con una cuidadosa restauración en 2023 a cargo de Cho Min-suk (조민석), de Mass Studies, y Yoon Tae-hoon, de Sathy.",
        "El anillo refleja el rasgo más reconocible del edificio con una lámina curva de plata sostenida por cuatro columnas flotantes. Hoy el edificio está reconocido como parte del patrimonio arquitectónico moderno de Seúl.",
      ],
      pieces: [{ title: "Anillo Embajada de Francia en Seúl (2025)", lines: ["Anillo", "Plata de ley", "35mm x 23mm x 20mm"] }],
      photos: {
        "01": { alt: "Una mano sostiene un anillo de plata con un tejado curvo sobre cuatro columnas" },
        "02": { alt: "Dedos sosteniendo el Anillo Embajada de Francia en Seúl, con su tejado curvo de plata sobre cuatro columnas" },
        "ref-embassy": {
          alt: "Foto en blanco y negro de la Embajada de Francia en Seúl",
          caption: "La Embajada de Francia en Seúl, de Kim Chung-up (김중업), en hormigón armado. Foto: SPACE, 1966",
        },
        "ref-palace": {
          alt: "El salón Geunjeongjeon del Palacio Gyeongbokgung",
          caption: "El tejado de Geunjeongjeon (근정전), el salón principal del Palacio Gyeongbokgung (경복궁), Seúl. Foto: Ongchangwei / Dreamstime.com",
        },
      },
    },
    "preston-ring": {
      title: "Anillo Preston",
      summary: "Anillo. Plata de ley.",
      text: [
        "Este anillo está inspirado en la estación de autobuses de Preston: un hito brutalista de 1969 diseñado por Keith Ingham y Charles Wilson, cuyos característicos balcones curvos de hormigón la convirtieron en una de las mayores estaciones de autobuses de Europa.",
        "Amenazada de demolición en 2012, se salvó gracias a una campaña ciudadana y a un creciente aprecio por la arquitectura brutalista; fue declarada edificio protegido (Grado II) en 2013 y reabrió tras su restauración en 2018.",
      ],
      pieces: [{ title: "Anillo Preston (2023)", lines: ["Anillo", "Plata de ley", "20mm x 20mm x 9mm"] }],
      photos: {
        "01": { alt: "Anillo de plata con crestas curvas apiladas" },
        "02": { alt: "Anillo de plata con crestas curvas apiladas, otro ángulo" },
      },
    },
    "croydon-ring": {
      title: "Anillo Croydon",
      summary: "Anillo impreso en 3D, colección de lanzamiento de MINILITH. Plata de ley.",
      pieces: [{ title: "Anillo Croydon (2023)", lines: ["Anillo impreso en 3D", "Plata de ley", "Hecho para la colección de lanzamiento de MINILITH"] }],
      photos: {
        "01": { alt: "Una mano levantada con el Anillo Croydon frente a una torre" },
        "02": { alt: "Seis Anillos Croydon en fila sobre fondo negro" },
        "ref-croydon": { alt: "La torre No.1 Croydon, en blanco y negro", caption: "No.1 Croydon. Foto: Will Collin" },
      },
    },
    "stet-fortuna-domus": {
      title: "Stet fortuna domus",
      summary: "Medalla de arte para la British Art Medal Society. Bronce.",
      text: [
        "El núcleo de la crisis de la vivienda en Gran Bretaña está en la transformación del hogar, de necesidad básica a activo financiero. Los precios de la vivienda, hoy muy lejos del alcance del británico medio, se han convertido en una bomba de relojería de la que depende toda la economía británica. Para los inquilinos, el alquiler ha subido más rápido que nunca en la historia registrada, e incluso quienes tienen la suerte de pagar una hipoteca se enfrentan ahora a cuotas mensuales inasumibles por la subida de los tipos de interés.",
        "<em>Esta medalla de bronce ilustra el estado actual de la vivienda británica: un bien de lujo que, para muchos británicos, representa el mayor obstáculo para la estabilidad financiera y las oportunidades.</em>",
        "Adquirida para la colección permanente del British Museum, la Royal Mint, la Goldsmiths' Company y la American Numismatic Society de Nueva York, además de otras colecciones privadas en todo el mundo.",
        "Premio de Bronce en la categoría Smallworkers, Goldsmiths' Craft & Design Awards 2026. El diseño original recibió el Premio de Oro en la categoría de Diseño, Goldsmiths' Craft & Design Awards 2024.",
      ],
      pieces: [
        {
          title: "Stet fortuna domus (2025)",
          lines: ["Medalla de arte", "Bronce y pátina", "90mm", "Fundida por South London Foundry", "Encargo de la British Art Medal Society"],
        },
      ],
      photos: {
        "01": { alt: "Medalla de bronce, anverso: la puerta de una cámara acorazada", caption: "Foto: British Art Medal Society" },
        "02": { alt: "Medalla de bronce, reverso: una cerradura agrietada", caption: "Foto: British Art Medal Society" },
      },
    },
  },
  projects: {
    "wearing-the-city": { title: "Llevar la ciudad" },
    walnut: {
      title: "Nogal",
      text: [
        "La madera de estas piezas se recuperó de un nogal talado en una obra de demolición en el sur de Londres.",
        "Hice tres collares experimentando con los tres límites de la madera de nogal: duramen (núcleo), albura y corteza.",
      ],
    },
    "cocktail-rings": { title: "Anillos cóctel" },
    "loom-rings": { title: "Anillos telar" },
    "engagement-rings": { title: "Anillos de compromiso" },
    "silver-and-pearl": { title: "Plata y perla" },
    "architecture-rings": { title: "Anillos de arquitectura" },
    "stet-fortuna-domus": { title: "Stet fortuna domus" },
  },
  studio: {
    label: "Estudio",
    alts: {
      "01": "Anillos de compromiso en una mano",
      "02": "Enhebrando hilo de algodón rojo en un anillo telar",
      "03": "Sosteniendo un modelo de yeso de la medalla",
      "04": "Una sesión de fotos en el estudio",
      "05": "Muestras de materiales sobre papel",
      "06": "Un banco de trabajo con herramientas y lámina de plata",
      "07": "Probando un prototipo de anillo",
      "08": "Cámara montada sobre una sesión de fotos de joyería",
      "10": "Prototipos y moldes en el banco",
      "11": "Herramientas, madera y plata vistas desde arriba",
    },
  },
};

export default es;
