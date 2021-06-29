// Milestone 1•Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse•Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


const app = new Vue ({

    el: "#app",

    data: {
        userSelect: 0,
        contacts: [
            {
                nome:"Michele",
                avatar: "img/avatar_1.jpg",
                lastAcc: "09:12",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Fabio",
                avatar: "img/avatar_2.jpg",
                lastAcc: "19:23",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Samuele",
                avatar: "img/avatar_3.jpg",
                lastAcc: "14:43",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Antonio",
                avatar: "img/avatar_4.jpg",
                lastAcc: "09:12",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Giovanni",
                avatar: "img/avatar_5.jpg",
                lastAcc: "23:06",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "08/03/2020 15:30:00",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "22/06/2020 18:23:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Paola",
                avatar: "img/avatar_6.jpg",
                lastAcc: "12:12",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "19/09/2020 10::12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Elisa",
                avatar: "img/avatar_7.jpg",
                lastAcc: "19:56",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            },
            {
                nome:"Marco",
                avatar: "img/avatar_8.jpg",
                lastAcc: "09:40",
                message: [
                    {
                        date: "10/01/2020 15:30:35",
                        text: "Sò chi sei veramente, mio caro SpiderMan!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:12",
                        text: "Ricordati che da piccoli poteri derivano grandi responsabilità",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "...Vallo a dire a zio BEN..",
                        status: "sent",
                    },
                ]
            }
            
        ]
    },
    methods: {
        changeUser(indice){
            this.userSelect = indice;
        }
    }
});