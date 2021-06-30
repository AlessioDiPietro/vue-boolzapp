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
                        status: "received",
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
                        date: "10/01/2020 08:20:12",
                        text: "Ti senti pronto per il viaggio Bilbo Baggins?",
                        status: "received",
                    },
                    {
                        date: "10/01/2020 9:01:21",
                        text: "Non lo so Gandalf..a me piace casa mia!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 23:10:30",
                        text: "Ah beh.. Non saprai cosa c'è fuori la contea così",
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
                        date: "23/05/2020 19:40:35",
                        text: "Hei, il carico è arrivato, dobbiamo andare!",
                        status: "sent",
                    },
                    {
                        date: "23/05/2020 20:00:02",
                        text: "..HEILA\'! STIAMO FACENDO TARDI! ",
                        status: "sent",
                    },
                    {
                        date: "23/05/2020 21:12:25",
                        text: "Hey amico, non sò questo accordo mi puzza..",
                        status: "received",
                    },
                ]
            },
            {
                nome:"Antonio",
                avatar: "img/avatar_4.jpg",
                lastAcc: "09:12",
                message: [
                    {
                        date: "29/07/2020 15:10:35",
                        text: "Porta con te la borsa col denaro..",
                        status: "received",
                    },
                    {
                        date: "29/07/2020 16:50:12",
                        text: "E mi raccomando! NIENTE SBIRRI!",
                        status: "received",
                    },
                    {
                        date: "29/07/2020 16:58:25",
                        text: "Ok! ma non fate male al mio pesce rosso!",
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
                        date: "08/03/2020 23:45:32",
                        text: "Obi-Wan non ti ha mai detto cosa accadde a tuo padre!",
                        status: "sent",
                    },
                    {
                        date: "08/03/2020 00:12:00",
                        text: "Mi ha detto abbastanza: che sei stato tu ad ucciderlo!",
                        status: "received",
                    },
                    {
                        date: "22/06/2020 18:23:25",
                        text: "No, io sono tuo padre!",
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
                        date: "19/09/2020 15:30:35",
                        text: "Stai parlando con me?",
                        status: "sent",
                    },
                    {
                        date: "20/09/2020 10:08:12",
                        text: "Che la Forza sia con te.",
                        status: "received",
                    },
                    {
                        date: "20/09/2020 16:12:25",
                        text: "Gli farò un’offerta che non potrà rifiutare.",
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
                        date: "30/11/2020 21:21:21",
                        text: "Il mio nome è Bond, James Bond.",
                        status: "received",
                    },
                    {
                        date: "30/11/2020 21:45:11",
                        text: "..e sono un playboy miliardario filantropo",
                        status: "received",
                    },
                    {
                        date: "30/11/2020 23:56:50",
                        text: "Ciaaaao.Io sono RICK.",
                        status: "",
                    },
                ]
            },
            {
                nome:"Marco",
                avatar: "img/avatar_8.jpg",
                lastAcc: "09:40",
                message: [
                    {
                        date: "31/12/2020 23:59:57",
                        text: ".. -3!",
                        status: "sent",
                    },
                    {
                        date: "31/12/2020 23:59:58",
                        text: ".. -2!",
                        status: "sent",
                    },
                    {
                        date: "31/12/2020 23:59:59",
                        text: ".. -1!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:12:25",
                        text: "Buon anno nuovo?",
                        status: "received",
                    },
                ]
            }
        ],
        newText: ""
        
    },
    methods: {
        changeUser(indice){
            this.userSelect = indice;
        },

        addMex(){
            this.contacts[this.userSelect].message.push({
                
                    text:this.newText,
                    status: "sent",
                    date: "10/01/2020 16:12:25"
                }
            );
            this.newText = "";
        }
    }
});