export async function POST(req , res){

  const { email } = req.body;

  const test = await JSON.parse.req.body
  console.log('email: ', test)

  return new Response('hello world')
}

