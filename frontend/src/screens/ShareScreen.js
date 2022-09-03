const accountSid = "AC01ec1efb8f777e0beff79ddad17bc85a";
const authToken = "ce19882a8eaf681571916cdbb75637ba";
const client = require('twilio')(accountSid, authToken);

client.conversations.v1.conversations
                       .create({friendlyName: 'My First Conversation'})
                       .then(conversation => console.log(conversation.sid));