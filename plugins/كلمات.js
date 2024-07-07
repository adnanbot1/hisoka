import fetch from 'node-fetch'
// تعريف الرسائل النصية للانتظار والانتهاء
const errorMessage = '❌ لم يتم العثور';
const doneMessage = '✅ تم التحميل بنجاح!';

let handler = async (m, {conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
   if (!teks) throw `اكتب اسم الاغنيه للحصول على كلماتها`
   try {
  let res = await fetch(global.API('https://some-random-api.com', '/lyrics', { title: teks }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, null, `
▢ *${json.title}*
*${json.author}*\n
${json.lyrics}`, m)
  // إرسال رسالة الانتظار
  await conn.reply(m.chat, doneMessage, m);
} await conn.reply(m.chat, errorMessage, m);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ حصل خطاء في التحميل يرجى المحاوله لاحقا.');
}
handler.help = ['lyrics']
handler.tags = ['tools']
handler.command = ['letra', 'كلمات', 'letras'] 

export default handler
