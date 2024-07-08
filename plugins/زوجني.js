const dir = [
'https://telegra.ph/file/bbc544d1f98fdb2811148.jpg',
'https://telegra.ph/file/3d5112e73516bcb80ceac.jpg',
'https://telegra.ph/file/7e4931909f9c0d45c698a.jpg',
'https://telegra.ph/file/27d1c2c3746f71f52faac.jpg',
'https://telegra.ph/file/51e932008073d767ba412.jpg',
'https://telegra.ph/file/866f3495a83a382a754e4.jpg',
'https://telegra.ph/file/bbc544d1f98fdb2811148.jpg',
'https://telegra.ph/file/b6058ca93a4dc07dd9a0a.jpg',
'https://telegra.ph/file/ab98d3d96bbb0a9737f29.jpg',
'https://telegra.ph/file/548c83435eaf8ad1a126e.jpg',
'https://telegra.ph/file/de4d1d132e43646264d07.jpg',
'https://telegra.ph/file/58769a718ba0f9f21b8fe.jpg',
'https://telegra.ph/file/3b617dbd6faebf7da9a68.jpg',
'https://telegra.ph/file/04911813b06113e00f9b5.jpg',
'https://telegra.ph/file/fd936416334d746afb6a1.jpg',
'https://telegra.ph/file/afd01d3cc55e92fecdc75.jpg',
'https://telegra.ph/file/631aaaa664d057ab45613.jpg',
'https://telegra.ph/file/276157f9e622d7315f809.jpg',
'https://telegra.ph/file/c49c9693942f42e909530.jpg',
'https://telegra.ph/file/dbd8a55cb78584eb86e30.jpg',
'https://telegra.ph/file/bf23e132ab365a48aaaee.jpg',
'https://telegra.ph/file/addee20647cbe105fc31b.jpg',
'https://telegra.ph/file/3b5a39c93386f89e80602.jpg',
'https://telegra.ph/file/0225278e77162981cb899.jpg',
'https://telegra.ph/file/f7c70837619b6527054f5.jpg',
'https://telegra.ph/file/ede254df0b03a8e8c274b.jpg',
'https://telegra.ph/file/588b08011308aeb839462.jpg',
'https://telegra.ph/file/60f177fecc3c3e59e31b7.jpg',
'https://telegra.ph/file/11139c8ef0003ff896915.jpg',
'https://telegra.ph/file/7712adf403bb26895b41c.jpg',
'https://telegra.ph/file/d7275813ea5b2ebf0c549.jpg',
'https://telegra.ph/file/9711f0a9ed5a94e76c971.jpg',
'https://telegra.ph/file/8717927971172a1968fdf.jpg',
'https://telegra.ph/file/970ef3402da4475288706.jpg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', 'تم يا حبيب/ه ابوك شوف صوره زوجتك/زوجك 🌚♥️🎀', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['زوجني'] 
handler.limite = true 
export default handler
