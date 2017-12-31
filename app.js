const Discord = require('discord.js')
var fs = require('fs')
const bot = new Discord.Client()

var content = JSON.parse(fs.readFileSync("conf.json"))

var token = content.token
var prefix = content.prefix.toLowerCase()
var servers = content.servers
var users = content.whitelist
var dms = content.allowInDm
var cartChannel = content.cartChannel.toLowerCase()
var cartBot = content.cartBot.toLowerCase()

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var R = [];
        for (var i=0; i<this.length; i+=chunkSize)
            R.push(this.slice(i,i+chunkSize));
        return R;
    }
});

function clear (messages) {
  for (let i = 0; i < messages.length; i++) {
    messages[i].delete()
  }
}

bot.on('message', message => {
  if (message.channel.name.toLowerCase() === cartChannel && message.author.tag.toLowerCase() === cartBot) {
    message.delete(600000).catch((error) => {
      //do nothing
    })
  }
  allow = false
  if (users.indexOf(message.author.tag) !== -1) {
    if (message.guild !== null) {
      if (servers.indexOf(message.guild.name) !== -1) {
        allow = true
      }
    }
    else if (dms === true) {
      allow = true
    }
  }
  if(allow) {
    let msg = message.content.toLowerCase()
    let sender = message.author;
    if(msg === prefix+'clear') {
      message.channel.fetchMessages().then(messages => {
        array = messages.array().chunk(5)
        for(let i = 0; i < array.length; i++) {
          clear(array[i])
        }
      })
    }
    else if (msg === prefix+'refresh') {
      message.delete()
      content = JSON.parse(fs.readFileSync("conf.json"))
      token = content.token
      prefix = content.prefix
      servers = content.servers
      users = content.whitelist
      dms = content.allowInDm
    }
  }
});
bot.login(token)
