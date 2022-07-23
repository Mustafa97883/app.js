const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args) => {

   if (message.author.id !== "846736343593779230") return message.channel.send(":no_entry: Bu komutu bot sahibine özeldir.");
		const menu = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Strom")
		.setDescription(`
		Bot Ekletme Başvurusu İçin Aşağıdaki Butona Basınız.`)

		const row = new MessageActionRow()
		.addComponents(
		new MessageButton()
		.setCustomId('bot-başvuru')
		.setLabel('Bot Ekletmek İçin Tıkla')
		.setEmoji("🤖")
		.setStyle('SECONDARY'),
		
		);
		message.channel.send({
			embeds: [menu], components: [row]
		});


},

name: "botlist",
description: "",
aliases: [],
kategori: "",
usage: "",
}