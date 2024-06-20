const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'citrussmp.aternos.me',   
  port: 45330,         
  username: 'admin',
  offline: true
})

client.on('text', (packet) => { 
  if (packet.source_name != client.username) {
    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
      message: `${packet.source_name} said: ${packet.message} on ${new Date().toLocaleString()}`
    })
  }
})