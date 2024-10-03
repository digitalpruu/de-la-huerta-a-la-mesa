const title = "De la huerta a la mesa";
const email = "cuellarana138@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en los productos innovadores de hongos (orellanas) de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573114788858"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En 'De la huerta a la mesa' transformamos hongos (orellanas) en productos innovadores, ofreciendo la mejor proteína en su forma más pura. Nos apasiona proporcionar alimentos de alta calidad que beneficien tu salud y bienestar.",
        description2: "Nuestra misión es brindarte productos únicos elaborados con esmero, aprovechando la riqueza de la naturaleza para ofrecerte opciones nutritivas y deliciosas. Descubre cómo nuestros productos pueden mejorar tu dieta y contribuir a una vida más saludable."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Orellanas la mejor proteína",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566409781356&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/anasilveria",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
