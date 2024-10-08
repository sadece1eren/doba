﻿const Discord = require("discord.js")    
const client = new Discord.Client();      
const config = require("./config.js")   
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { //serend,a
  if (err) console.error(err);               //serendia
  console.log(`${files.length} komut yüklenecek.`); //serend,a
  files.forEach(f => {                       //serendia
    let props = require(`./commands/${f}`);   //serendia
    console.log(`${props.config.name} komutu yüklendi.`);  //serendia
    console.log(`jhrox ON`)     //serendia
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.login(config.token)
