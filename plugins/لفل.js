import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
 let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/moyt.jpg')
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
      let lvl = `┓━━━━【 *الـتصـنـيف* 】━━━━┏
┇ *☎️ الاسم* : ${name} ღ
┇ *🚒 الفل :* *${user.level}*
┇ *♟️ مصنف :* ${role}
┇ *♨️ نقاط الخبرة :* *${user.exp - min}/${xp}*
┛━━━⊰ *SUKUNA BOT* ⊱━━━┗

*تحتاج ${max - user.exp} من نقاط الخبرة للوصول الي مستوي جديد*`
conn.sendFile(m.chat, pp, 'levelup.jpg', lvl, m)
    }

    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `عاش يحب! ${conn.getName(m.sender)} المستوي: ${user.level}`
        let str = `┓━━━━【 *الـتصـنـيف* 】━━━━┏
┇♨️ *المستوي السابق :* *${before}*
┇🎉 *المستوي الحالي :* *${user.level}*
┇♟️ *التصنيف :* ${role} 
┛━━━⊰ *SUKUNA BOT* ⊱━━━┗`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, pp, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
await delay(5 * 5000)  
}
handler.help = ['levelup']
handler.tags = ['xp']
handler.command = ['مستواي', 'lvl', 'رانك', 'لفل'] 

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
