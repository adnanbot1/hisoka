// V E N O M 🐍✨

import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*🏷️يرجى إدخال إسم المانجا  الذي تريد البحث عنه وأيضاً باللغة الإنجليزية !*

📌 مثال: *مانغا dragon ball*`
conn.reply(m.chat, 'يرجى الانتظار.....', m)
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { chapters, url, type, score, scored, scored_by, rank, popularity, members, background, status, volumes, synopsis, favorites } = json.data[0]
// let author = json.data[0].authors[0].name
// let authormynimelist = json.data[0].authors[0].url
let judul = json.data[0].titles.map(jud => `${jud.title} [${jud.type}]`).join('\n');
let xnuvers007 = json.data[0].authors.map(Xnuvers007 => `${Xnuvers007.name} (${Xnuvers007.url})`).join('\n');
let genrenya = json.data[0].genres.map(xnvrs007 => `${xnvrs007.name}`).join('\n');

let animeingfo = `📚 الـعـنوان: ${judul}
📑 الفصل: ${chapters}
✉️ البريد: ${type}
🗂 الحالات: ${status}
🔖 النوع: ${genrenya}
🗃 الحجم: ${volumes}
🌟 مفضل: ${favorites}
🧮 إحراز الأهداف: ${score}
🧮 الاهداف: ${scored}
🧮 الأهداف المديه: ${scored_by}
🌟 الرتبه: ${rank}
🤩 الشعبية: ${popularity}
👥 الاعضاء: ${members}
⛓️ الرابط: ${url}
👨‍🔬 المؤلف: ${xnuvers007}
📝 الغلاف: ${background}
💬 ملخص: ${synopsis}
`
  conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'manga.jpg', `*مــعـــلـــومـــات الــــمـــانـــــغــــــــا*\n` + animeingfo, m)
}
handler.help = ['mangainfo <manga>', 'manga <namaManga>', 'infomanga <NamaManga/Anime>']
handler.tags = ['anime']
handler.command = /^(mangainfo|manga|مانغا|مانجا)$/i

export default handler
