export async function POST(req, res){
  
  const b = req.body;
  console.log('request: ', JSON.stringify(req.body))
  console.log('responde: ', res.json)
  return new Response(req)
}





