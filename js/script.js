var app = new Vue({
  el: '#root',
  data: {
    active_contact: 0,
    newMsg: '',
    searchText: '',
    user: {
      name: 'Alessandro',
      avatar: 'img/tiba.jpg'
    },
    contacts: [
      {
        name: 'Vito',
        avatar: '1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Arturo',
        avatar: '2',
        visible: true,
        messages: [
          {
            date: '12/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '12/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '12/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo programmare BoolzApp.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Giovanni',
        avatar: '3',
        visible: true,
        messages: [
          {
            date: '12/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '12/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '12/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Alessandro D.',
        avatar: '4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Evil Valerio',
        avatar: '6',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
          }
        ],
      },
      {
        name: 'Tiziana',
        avatar: '5',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Tiziana, hai novità?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
          },
        ],
      },
      {
        name: 'Mirko',
        avatar: '7',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Tiziana che è il suo compleanno!',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Danny',
        avatar: '8',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Tiba, andiamo a mangiare la pizza stasera?',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: 'sent'
          },
          {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
          }
        ],
      }
    ]
  },
  methods: {

    change_active_contact(contact_index) {
      this.active_contact = contact_index;
    },

    sendMsg () {
      // Se il messaggio è vuoto non viene inviato
      if(this.newMsg.length != 0) {
        // Creo un nuovo oggetto messaggio inviato
        let newMsgObj = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: this.newMsg,
          status: 'sent'
        };
        // Inserisco il messaggio nella chat aperta al momento
        let this_chat = this.contacts[this.active_contact].messages;
        this_chat.push(newMsgObj);
        // Ripulisco l'input
        this.newMsg='';

        // Funzione per risposta automatica con ritardo di 1 secondo
        setTimeout(function() {
          // Creo un nuovo oggetto messaggio ricevuto
          let newPcMsgObj = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: 'Ok!',
            status: 'received'
          };
          // Inserisco la risposta nell'array della conversazione attuale
          this_chat.push(newPcMsgObj);

        }, 1000);
      }
    },

    // Funzione con DayJS per trasformare la data in Ora e Minuti
    get_time(date_string) {
      return dayjs(date_string, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
    },

    searchFilter() {
      this.contacts.forEach((contact) => {
        let contact_name = contact.name.toLowerCase();
        let filtered_name = this.searchText.toLowerCase();
        if (contact_name.includes(filtered_name)) {
          contact.visible=true;

        } else {
          contact.visible=false;

        }
      })
    }
  }
});
