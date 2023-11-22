export default function Home({ ip }) {
  return (
    <div>
      <h1>Your IP Address is:</h1>
      <p>{ip}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // リクエストからIPアドレスを取得
  const ip =
    context.req.headers["x-forwarded-for"] || context.req.socket.remoteAddress;

  console.log(context.req.socket.remoteAddress);
  // IPアドレスをページのプロップとして渡す
  return { props: { ip } };
}
