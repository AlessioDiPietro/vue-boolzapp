// Milestone 1•Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse•Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


const app = new Vue ({

    el: "#app",

    data: {
        contacts: [
            {
                nome:"Michele",
                avatar: "img/avatar_1.jpg",
            },
            {
                nome:"Fabio",
                avatar: "img/avatar_2.jpg",
            },
            {
                nome:"Samuele",
                avatar: "img/avatar_3.jpg",
            },
            {
                nome:"Antonio",
                avatar: "img/avatar_4.jpg",
            },
            {
                nome:"Giovanni",
                avatar: "img/avatar_5.jpg",
            },
            {
                nome:"Paola",
                avatar: "img/avatar_6.jpg",
            },
            {
                nome:"Elisa",
                avatar: "img/avatar_7.jpg",
            },
            {
                nome:"Marco",
                avatar: "img/avatar_8.jpg",
            }
            
        ]
    }
});