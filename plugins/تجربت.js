let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*البــنــك*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "⛪",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/b162a495bb046bc12d809.png', 'STORE.jpg' , message, m);
};

handler.customPrefix = /^(بنك)$/i;
handler.command = new RegExp;

export default handler;
