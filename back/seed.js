const Products = require('./models/Products');
const Users = require('./models/Users')
const Review = require('./models/Reviews')

Review.create({
    valoracion: 4,
    comentario: 'esto es un review de prueba broder'
})

Products.bulkCreate([
    {
        titulo: "aspiradoras samsung vc20cc azul",
        descripcion: "Acabar con la suciedad, el pelo de las mascotas y también con las bolsas. Las aspiradoras con bolsas no atrapan el polvo como las aspiradoras sin. Incluso las bolsas pueden tener que ser reemplazadas antes de que siquiera esté medio llena.",
        precio: 7400,
        stock: 10,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hb2/h61/10023505035294/00035055-172634-01.png",
        valoracion: 5,
        categorias: "aspiradora"
    },
    {
        titulo: "microondas atma md1720n",
        descripcion: "Digital. Capacidad 20L. Potencia 700W. 8 Menues programables. Descongelado automático. Reloj. Timer. Traba de seguridad para niños. Bandeja giratoria.",
        precio: 7099,
        stock: 5,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hb3/h25/10023646756894/00064056-173161-01.png",
        valoracion: 4.3,
        categorias: "microondas"
    },
    {
        titulo: "heladeras patrick con freezer",
        descripcion: "Capacidad bruta 364L/neta 359L. Estantes tipo rejilla removibles. Luz interior Led. Anaqueles en contrapuerta regulables en altura. Control de temperatura interior a perilla. Criper doble p/frutas y verduras. Sistema de refrigeración Cíclico. EE:A",
        precio: 23599,
        stock: 25,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h9b/h6f/10023774584862/00133004-135733-01.jpg",
        valoracion: 1.6,
        categorias: "heladeras"
    },
    {
        titulo: "televisores noblex smart tv 32",
        descripcion: "TV LED 32 HD (1366x768). Formato 16. Brillo 210cd/m². Contraste 2000:1. Tasa de refresco 60Hz. Tiempo de respuesta 6.5ms. HDMIx2. USBx2. Bluetooth Pot.de audio 6W RMSx2. Salida para auriculares. A/V.",
        precio: 12999,
        stock: 8,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h86/h29/10027280367646/00189018-174267-01.png",
        valoracion: 5,
        categorias: "televisores"
    },
    {
        titulo: "notebook exo cloud e15 intel atom",
        descripcion: "Proc.Intel Atom x5-Z8300 Quad Core. Memoria 2Gb. Almacenamiento 32Gb SSD. Pant.14.1 HD. Cámara frontal de 2Mp. Wi-Fi. Bluetooth. USB 2.0x2. HDMIx1. Salida de auricualres y/o micrófono 3.5mm. Lector de tarjetas. Bateria de 10000mAh. SO Windows 10 Home.",
        precio: 10999,
        stock: 2,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h16/hda/10007422173214/00014330-133442-01.jpg",
        valoracion: 3,
        categorias: "notebook"
    },
    {
        titulo: "notebook acer aspire 3 intel celeron",
        descripcion: "Proc.Intel Celeron N-3350. Memoria RAM 4Gb DDR4. Disco duro 1Tb. Pant.15.6 HD. Gráficos Integ. Webcam 0.3Mp. Parlantes y micrófono integ. Wi-Fi. SO Windows 10.",
        precio: 19999,
        stock: 6,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h0f/h73/10024042954782/00181176-136244-01.jpg",
        valoracion: 2.6,
        categorias: "notebook"
    },
    {
        titulo: "tablets exo tablet wave i007 kids",
        descripcion: "Pantalla IPS 7'. Resolución 1024x600p. Procesador Cortex-A7 - Quad-core de hasta 1.2GHz. SO Android 8.1. Memoria int.16Gb, RAM 1Gb DDR3. Slot p/Micro SD h/32Gb. Camara posterior de 2Mp y frontal de 0.3MP. Wi-Fi. Bluetooth 4.0.",
        precio: 2999,
        stock: 8,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/he8/h7c/10023997145118/00181076-136140-01.jpg",
        valoracion: 4.5,
        categorias: "tablets"
    },
    {
        titulo: "motorola celular moto e5 xt19443 gris",
        descripcion: "El Motorola Moto E5 cuenta con una pantalla HD+ de 5.7 pulgadas procesador quad-core 2GB de RAM 16GB de almacenamiento interno cámaras de 13 MP y 5 MP ambas con flash LED batería de 4000 mAh le        ",
        precio: 8549,
        stock: 12,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h78/hd9/10023764721694/00125055-173962-01.png",
        valoracion: 3,
        categorias: "celulares"
    },
    {
        titulo: "motorola celular moto e5 xt19443 gold",
        descripcion: "El Motorola Moto E5 cuenta con una pantalla HD+ de 5.7 pulgadas procesador quad-core 2GB de RAM 16GB de almacenamiento interno cámaras de 13 MP y 5 MP ambas con flash LED batería de 4000 mAh le",
        precio: 9499,
        stock: 10,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h7a/hc5/10023785398302/00125061-173968-01.png",
        valoracion: 3,
        categorias: "celulares"
    },
    {
        titulo: "motorola celular moto c black negro",
        descripcion: "4G LTE. Pant.TN 5. Resol 854x480. Proc.Quad Core 1.1Ghz. SO Android 7.0. Cámaras de 5Mp y 2Mp c/Flash. Graba video en 720p Memoria int.8Gb/RAM 1Gb. Slot p/micro SD h/32Gb. Bluetooth 4.2. Wi-Fi. A-GPS. Micro USB 2.0. Bateria de 2350mAh.",
        precio: 6999,
        stock: 8,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h2f/hb2/10023660027934/00076065-174122-01.png",
        valoracion: 3,
        categorias: "celulares"
    },
    {
        titulo: "motorola celular moto e5 plus xt19245",
        descripcion: "4G LTE. Pant.IPS 6.0HD+. Proc.Quad Core 1.4Ghz. SO Android 8.0. Cámara post.12Mp c/enfoque láser, frontal 5Mp. Video en 1080p. Radio FM. Memoria int.16Gb/RAM 2Gb. Bluetooth 4.2. Wi-Fi. A-GPS. Bateria Li-Ion 5000mAh (h/40hs). Lector de huella dactilar.",
        precio: 9999,
        stock: 6,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h4d/h1b/10023783923742/00140003-174041-01.png",
        valoracion: 3,
        categorias: "celulares"
    },
    {
        titulo: "motorola celular   moto g7 play xt19522",
        descripcion: "El Motorola Moto G7 PLAY tiene una pantalla de 5.7 pulgadas a resolución HD+ un procesador Snapdragon 632 acompañado de 2GB de RAM y 32GB de almacenamiento una cámara de 13 MP cámara frontal de 8",
        precio: 12999,
        stock: 7,
        img1: "https://d34zlyc2cp9zm7.cloudfront.net/products/ef90325950ff4994cc6e6f49bb9a7403abbec25027292b6116fe867a2f414098.webp_350",
        valoracion: 3.8,
        categorias: "celulares"
    },
    {
        titulo: "notebook exo smart e13x n3350",
        descripcion: "La nueva NOTEBOOK EXO SMART E13X esta diseñada para vivir conectada como vos. Diseñada con materiales ultra-livianos. Elegante por donde la mires. Fascinante por donde la mires. Con su pantalla FUL",
        precio: 15999,
        stock: 4,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h85/hb8/10027260510238/00181171-174465-01.png",
        valoracion: 3,
        categorias: "notebook"
    },
    {
        titulo: "notebooks 2 en 1 exo notebook",
        descripcion: "2 En 1 desmontable. Proc.Intel Atom X5-Z8300 Quad Core 1.44Ghz. SO Windows 10 Home. Memoria int.32Gb/RAM 2Gb. Pant.IPS 10.1 multitouch (1280x800). Wi-Fi. Bluetooth. Cámara dual de 2Mp. Micro HDMI/Micro USB/USB 2.0/DC-Jack/Auricular 3.5mm. Bateria 6000mAh",
        precio: 10999,
        stock: 6,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h94/h1b/10031495872542/00182535-172110-01.png",
        valoracion: 3,
        categorias: "notebook"
    },
    {
        titulo: "notebook exo smart e17 intel celron",
        descripcion: "Proc.Intel Celeron N3450 QC 1.10Ghz. Memoria RAM 4Gb. Capacidad 32Gb eMMC. Pant.IPS 13.3 FHD. Lector de tarjetas. Video Intel HD Graphics 500. Webcam HD 2.0Mp. Wi-Fi. Bluetooth 4.0. USB 3.0x2. USB tipo Cx1. Micro HDMI. SO Windows 10 Pro. Bateria 5000mAh.",
        precio: 15999,
        stock: 10,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h52/ha2/10033231134750/00182915-173042-01.png",
        valoracion: 5,
        categorias: "notebook"
    },
    {
        titulo: "notebook hp 14ax032la intel celeron",
        descripcion: "Proc.Intel Celeron N3060. Dual Core 1.6Ghz. Memoria RAM 4Gb DDR3lL. Almacenamiento 32 Gb eMMC. Pant.LED 14 HD. Wi-Fi. Bluetooth. Gráficos Intel HD. Webcam VGA micrófono digital integrado. HDMI. SO Windows 10 Home. Bateria de h/10hs.",
        precio: 17399,
        stock: 1,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h0c/h32/10023899070494/00128001-173987-01.png",
        valoracion: 1.5,
        categorias: "notebook"
    },
    {
        titulo: "notebook hdc cloudbook cy141ih celeron",
        descripcion: "Proc.Intel Celeron N-3350. Memoria 3Gb LPDDR3. Almacenamiento 32Gb eMMC. Socalo p/Disco Duro 2.5 Sata h/1TB.Pantalla 14IPS Full HD. Wi-Fi. Bluetooth 4.2. Mini HDMI. Slot p/micro SD h/128gb. SO Windows 10.",
        precio: 9299,
        stock: 10,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h0f/h8b/10011075411998/00159005-135909-01.jpg",
        valoracion: 3,
        categorias: "notebook"
    },
    {
        titulo: "televisores samsung smart tv 32 hd",
        descripcion: "TV 32 SMART BASIC UN32J4300AG.",
        precio: 15999,
        stock: 2,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h71/h95/10023470399518/00151151-130512-01.jpg",
        valoracion: 3,
        categorias: "televisores"
    },
    {
        titulo: "televisores philips smart tv  32 hd",
        descripcion: "Pantalla: LED HD Ready. Resolución: 1366x768p. Relación de aspecto: 4:3 / 16:9. Potencia de salida (RMS): 10W. HDMI x2. USB x2. Conexiones: Antena tipo F. Entrada I/D de audio. Salida de audio digita",
        precio: 13769,
        stock: 3,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h1b/h64/10030729265182/00188135-174495-01.png",
        valoracion: 3.9,
        categorias: "televisores"
    },
    {
        titulo: "televisores philips smart tv  32 hd",
        descripcion: "El Smart TV 32 pulgadas Philips 32PHG5813/77 cuenta con una pantalla de visualización LED de formato widescreen (16:9) y resolución HD 1366 x 768 píxeles que brinda una gran calidad de imagen y contr",
        precio: 13299,
        stock: 5,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hc5/h2d/10023956742174/00169593-174264-01.png",
        valoracion: 3,
        categorias: "televisores"
    },
    {
        titulo: "televisores tcl smart tv 40 hd android",
        descripcion: "Smart TV de 40. Full HD. Android.Conexión HDMI. Puerto USB. Bluetooth. Wi Fi . Sintonizador TDA. Google assistant: control por voz integrado. Netflix. Youtube.",
        precio: 17999,
        stock: 6,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hb3/hb6/10037237022750/00185016-136304-01.jpg",
        valoracion: 3,
        categorias: "televisores"
    },
    {
        titulo: "televisores samsung smart tv 40",
        descripcion: "Smart TV LED 40 Full HD (1920x1080). Sintonizador digital. Wide Color Enhancer. Motion Rate 60Hz. Sonido Virtual Surround. Potencia de audio 20W RMS. Modo Futbol. Connect Share Movie. Wi-Fi. HDMIx2. USBx1",
        precio: 18999,
        stock: 3,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h44/h27/10023666909214/00151229-134888-01.jpg",
        valoracion: 3,
        categorias: "televisores"
    },
    {
        titulo: "televisores samsung smart tv 43 4k",
        descripcion: "Viví una experiencia natural con los colores de PurColour. Sumergite en tu entretenimiento y admirá los colores de la naturaleza con detalles precisos.",
        precio: 28499,
        stock: 1,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h97/h5e/10023735033886/00118000-135530-01.jpg",
        valoracion: 3,
        categorias: "televisores"
    }
])


Users.bulkCreate([
    {
        username: "Lucas",
        email: "lucas@aguirre.com",
        password: "1234",
        salt: "lala",
        isAdmin: false
    },
    {
        username: "Nico",
        email: "carello@martino.com",
        password: "1234",
        salt: "lala",
        isAdmin: false
    },
    {
        username: "Seba",
        email: "seba@necochea.com",
        password: "1234",
        salt: "lala",
        isAdmin: false
    },
    {
        username: "Kenyi",
        email: "kenyi@lewis.com",
        password: "1234",
        salt: "lala",
        isAdmin: false
    },
    {
        username: "Santi",
        email: "santi@curu.com",
        password: "1234",
        salt: "lala",
        isAdmin: false
    }
  ])
    
   
    .then(console.log("Esta todo piola"))





