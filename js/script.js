var app = new Vue({
el: '#root',
data: {
    currentContactIndex: 0,
    searchInput: '',
    message: '',
    writtenMessage: '',
    contacts: [
  	{
  		name: 'Michele',
  		avatar: '_1',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Hai portato a spasso il cane?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Ricordati di dargli da mangiare',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 16:15:22',
  				text: 'Tutto fatto!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Fabio',
  		avatar: '_2',
  		visible: true,
  		messages: [
  			{
  				date: '20/03/2020 16:30:00',
  				text: 'Ciao come stai?',
  				status: 'sent'
  			},
  			{
  				date: '20/03/2020 16:30:55',
  				text: 'Bene grazie! Stasera ci vediamo?',
  				status: 'received'
  			},
  			{
  				date: '20/03/2020 16:35:00',
  				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
  				status: 'sent'
  			}
  		],
  	},
  	{
  		name: 'Samuele',
  		avatar: '_3',
  		visible: true,
  		messages: [
  			{
  				date: '28/03/2020 10:10:40',
  				text: 'La Marianna va in campagna',
  				status: 'received'
  			},
  			{
  				date: '28/03/2020 10:20:10',
  				text: 'Sicuro di non aver sbagliato chat?',
  				status: 'sent'
  			},
  			{
  				date: '28/03/2020 16:15:22',
  				text: 'Ah scusa!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Luisa',
  		avatar: '_4',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Lo sai che ha aperto una nuova pizzeria?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Si, ma preferirei andare al cinema',
  				status: 'received'
  			}
  		],
  	},
  ]
},
methods: {
  changeChat: function(index) {
    this.currentContactIndex = index;
    this.cleanInput()
  },
  currentDate: function() {
    let date = new Date().toLocaleString('en-GB');
    date = date.replace(',', '');
    return date;
  },
  sendMessage: function() {
    const newMessage = {date: this.currentDate(), text: this.message, status: 'sent'};
    this.contacts[this.currentContactIndex].messages.push(newMessage);
    // salvo il valore di message in una costante prima che venga cancellato
    writtenMessage = this.message;
    let that = this;
    setTimeout(function() {
      that.autoReply()
     }, 1000);
     this.message= '';
  },
  autoReply: function() {
    function autoText() {
      if (writtenMessage.includes('ciao')) {
        return 'ciao'
      } else if (writtenMessage.includes('?')) {
        return 'Non lo so'
      } else {
        return 'ok'
      }
    };
     const autoReply = {date: this.currentDate(), text: autoText(), status: 'received'};
     this.contacts[this.currentContactIndex].messages.push(autoReply);
  },
  lastAccess: function(index) {
    // messaggi del contatto attivo (currentContactIndex)
    const messages = this.contacts[index].messages;
    // ritorna la data dell'ultimo messaggio
    return messages[messages.length - 1].date;
  },
  changeFriendsList: function() {
      console.log(this.friendName)
  },
  searchFriend: function() {
    this.contacts.forEach((element, index) => {
      if (this.searchInput.toLowerCase() === element.name.toLowerCase()) {
        this.currentContactIndex = index;
      }
    });
    this.searchInput = '';
  },
  filterFriend: function() {
    // ciclo tutti i contatti. Se il nome di un contatto inizio con le lettere scritte nell'input allora ha visible=true, altrimenti ha visible=false
    this.contacts.forEach((element) => {
      if (element.name.toLowerCase().startsWith(this.searchInput.toLowerCase())) {
        element.visible = true;
      } else {
        element.visible = false;
      }
    });
  },
  cleanInput: function() {
    this.searchInput = '';
    this.contacts.forEach((element) => {
      element.visible = true;
    });

  }
}
});
Vue.config.devtools = true;
