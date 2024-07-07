import uploadtoimgur from '../lib/imgur.js';
import fs from 'fs';
import path from 'path';

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) {
    throw '* 🗿 رد على صوره او فيديو*';
  }
  let mediaBuffer = await q.download();

 
  if (mediaBuffer.length > 10 * 1024 * 1024) {
    throw '* 🗿 يولد الملف اكبر من 10 جيب غيره بس يكون اقل من 10 ميغا*.';
  }

  let currentModuleDirectory = path.dirname(new URL(import.meta.url).pathname);

  let tmpDir = path.join(currentModuleDirectory, '../tmp');
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  let mediaPath = path.join(tmpDir, `media_${Date.now()}.${mime.split('/')[1]}`);
  fs.writeFileSync(mediaPath, mediaBuffer);

  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);

  if (isTele) {
    let link = await uploadtoimgur(mediaPath);

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2);

    m.reply(`✅ *تم تحميل الوسائط بنجاح*\n *حجم الملف:* ${fileSizeMB} MB\n *الرابط:* ${link}`);
  } else {
    m.reply(` ${mediaBuffer.length} Byte(s) 
     (Unknown)`);
  }

  fs.unlinkSync(mediaPath);
};

handler.help = ['tourl'];
handler.tags = ['tools'];
handler.command = ['لرابط', 'tourl', 'راابط'];

export default handler;
