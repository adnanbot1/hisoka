let handler = async (m, { conn, args }) => {
  try {
    let id = args?.[0]?.match(/\d+\-\d+@g.us/) || m.chat;

    const uniqueOnline = Object.values(conn.chats[id]?.messages || {}).map(item => item.key.participant).filter((value, index, self) => self.indexOf(value) === index);

    const sortedOnline = uniqueOnline.sort((a, b) => a.split('@')[0].localeCompare(b.split('@')[0]));

    const onlineList = sortedOnline.map((k, i) => `*${i + 1}.* @${k.split('@')[0]}`).join('\n') || '*🐦 الناس نيام محدش منهم فاتح نت + روح نام انت/ي كمان*';

    await conn.reply(m.chat, `*🗿 شوف يا عزيزي الادمن ذول اللي مشغلين النت في الجروب*\n*🗿تراقبون بصمت ادري فيكم:*\n*المتصلين:*\n\n${onlineList}`, m, {
      contextInfo: { mentionedJid: sortedOnline }
    });
  } catch (e) {
    console.error(e);
  }
};

handler.help = ['listonline'];
handler.tags = ['group'];
handler.command = /^(المتصلين)$/i;
handler.group = true;
handler.admin = true;

export default handler;
