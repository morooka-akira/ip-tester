export default function handler(req, res) {
  // リクエストからIPアドレスを取得
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // ローカルホストのIPアドレスを適切に処理
  if (ip === '::1' || ip.startsWith('::ffff:')) {
    ip = '127.0.0.1';
  }
  console.log(`remote ${ip}`);

  // IPアドレスをJSON形式で返す
  res.status(200).json({ ip: ip });
}
