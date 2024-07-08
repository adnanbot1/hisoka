let axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let res = await axios.get('https://telegra.ph/file/ea03bbc1d2dbd77af8a57.jpg', { responseType: 'arraybuffer' })
    if (!res.data) throw 'Failed to fetch data'
    let sticker = await conn.sticker(res.data, false, { packname: 'Sticker Pack', author: '@example' })
    await conn.sendMessage(m.chat, sticker, MessageType.sticker, { quoted: m })
}
handler.help = ['name']
handler.tag = ['tools']
handler.command = /^(يوهان)$/i
module.exports = handler
