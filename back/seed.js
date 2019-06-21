const Products = require('./models/Products');
const Users = require('./models/Users')

Products.bulkCreate([
    {
        titulo: "Aspiradoras Samsung Aspiradora Vc20cc Azul",
        descripcion: "Acabar con la suciedad, el pelo de las mascotas y también con las bolsas. Las aspiradoras con bolsas no atrapan el polvo como las aspiradoras sin. Incluso las bolsas pueden tener que ser reemplazadas antes de que siquiera esté medio llena.",
        precio: 7400,
        stock: 10,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hb2/h61/10023505035294/00035055-172634-01.png",
        valoracion: 5,
        categorias: "aspiradora"
    },
    {
        titulo: "MICROONDA ATMA MD1720N",
        descripcion: "Digital. Capacidad 20L. Potencia 700W. 8 Menues programables. Descongelado automático. Reloj. Timer. Traba de seguridad para niños. Bandeja giratoria.",
        precio: 7099,
        stock: 5,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/hb3/h25/10023646756894/00064056-173161-01.png",
        valoracion: 4.3,
        categorias: "microondas"
    },
    {
        titulo: "Heladeras Patrick Heladera Con Freezer",
        descripcion: "Capacidad bruta 364L/neta 359L. Estantes tipo rejilla removibles. Luz interior Led. Anaqueles en contrapuerta regulables en altura. Control de temperatura interior a perilla. Criper doble p/frutas y verduras. Sistema de refrigeración Cíclico. EE:A",
        precio: 23599,
        stock: 25,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h9b/h6f/10023774584862/00133004-135733-01.jpg",
        valoracion: 1.6,
        categorias: "heladeras"
    },
    {
        titulo: "Televisores Noblex Smart Tv 32 Hd 32x5000",
        descripcion: "TV LED 32 HD (1366x768). Formato 16. Brillo 210cd/m². Contraste 2000:1. Tasa de refresco 60Hz. Tiempo de respuesta 6.5ms. HDMIx2. USBx2. Bluetooth Pot.de audio 6W RMSx2. Salida para auriculares. A/V.",
        precio: 12999,
        stock: 8,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h86/h29/10027280367646/00189018-174267-01.png",
        valoracion: 5,
        categorias: "televisores"
    },
    {
        titulo: "Notebook Exo Cloud E15 Intel Atom",
        descripcion: "Proc.Intel Atom x5-Z8300 Quad Core. Memoria 2Gb. Almacenamiento 32Gb SSD. Pant.14.1 HD. Cámara frontal de 2Mp. Wi-Fi. Bluetooth. USB 2.0x2. HDMIx1. Salida de auricualres y/o micrófono 3.5mm. Lector de tarjetas. Bateria de 10000mAh. SO Windows 10 Home.",
        precio: 10999,
        stock: 2,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h16/hda/10007422173214/00014330-133442-01.jpg",
        valoracion: 3,
        categorias: "notebook"
    },
    {
        titulo: "NOTEBOOK ACER ASPIRE 3 INTEL CELERON",
        descripcion: "Proc.Intel Celeron N-3350. Memoria RAM 4Gb DDR4. Disco duro 1Tb. Pant.15.6 HD. Gráficos Integ. Webcam 0.3Mp. Parlantes y micrófono integ. Wi-Fi. SO Windows 10.",
        precio: 19999,
        stock: 6,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h0f/h73/10024042954782/00181176-136244-01.jpg",
        valoracion: 2.6,
        categorias: "notebook"
    },
    {
        titulo: "Tablets Exo Tablet Wave I007 Kids",
        descripcion: "Pantalla IPS 7'. Resolución 1024x600p. Procesador Cortex-A7 - Quad-core de hasta 1.2GHz. SO Android 8.1. Memoria int.16Gb, RAM 1Gb DDR3. Slot p/Micro SD h/32Gb. Camara posterior de 2Mp y frontal de 0.3MP. Wi-Fi. Bluetooth 4.0.",
        precio: 2999,
        stock: 8,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/he8/h7c/10023997145118/00181076-136140-01.jpg",
        valoracion: 4.5,
        categorias: "tablets"
    },
    {
        titulo: "Motorola Celular Moto E5 Xt19443 Gris",
        descripcion: "El Motorola Moto E5 cuenta con una pantalla HD+ de 5.7 pulgadas procesador quad-core 2GB de RAM 16GB de almacenamiento interno cámaras de 13 MP y 5 MP ambas con flash LED batería de 4000 mAh le        ",
        precio: 8549,
        stock: 12,
        img1: "https://medias.musimundo.com/medias/sys_master/images/images/h78/hd9/10023764721694/00125055-173962-01.png",
        valoracion: 3,
        categorias: "celulares"
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





