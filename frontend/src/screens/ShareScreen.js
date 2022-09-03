// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.conversations.v1.conversations
//                        .create({friendlyName: 'My First Conversation'})
//                        .then(conversation => console.log(conversation.sid));


// client.conversations.v1.conversations('CH90e7b5df77704e28b338205139d745d6')
//       .fetch()
//       .then(conversation => console.log(conversation.chatServiceSid));


// client.conversations.v1.conversations('CH90e7b5df77704e28b338205139d745d6')
//   .participants
//   .create({
//      'messagingBinding.address': '+14129339151',
//      'messagingBinding.proxyAddress': '+18336917240'
//    })
//   .then(participant => console.log(participant.sid));

const { Client } = require('@twilio/conversations');
const client = new Client(token);
// Before you use the client, subscribe to the `'stateChanged'` event and wait 
// for the `'initialized'` state to be reported.
client.on('stateChanged', (state) => {
  if (state === 'initialized') {
    // Use the client
  }
}