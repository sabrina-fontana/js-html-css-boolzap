var app = new Vue({
el: '#root',
data: {
    currentContactIndex: 0,
    friendName: '',
    message: '',
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
  },
  sendMessage: function() {
    let date = new Date().toLocaleString('en-GB', { timeZone:'UTC'});
    const newMessage = {date: date, text: this.message, status: 'sent'};
    this.contacts[this.currentContactIndex].messages.push(newMessage);
    this.message= '';
    const contacts = this.contacts;
    const currentIndex = this.currentContactIndex;
    setTimeout(function() {
      // riassegno a date il valore aggiornato (altrimenti resta indietro di 1000ms)
      date = new Date().toLocaleString('en-GB', { timeZone:'UTC'});
       const responseMessage = {date: date, text: 'ok', status: 'received'};
       contacts[currentIndex].messages.push(responseMessage);
     }, 1000);
  },
  lastAccess: function(index) {
    // messaggi del contatto attivo (currentContactIndex)
    const messages = this.contacts[index].messages;
    // ritorna la data dell'ultimo messaggio
    return messages[messages.length - 1].date;
  }
}
});
Vue.config.devtools = true;
