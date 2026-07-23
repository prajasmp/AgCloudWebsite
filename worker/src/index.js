function cors(origin) { return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'authorization, content-type', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Content-Type': 'application/json' } }
async function verifyFirebaseToken(token, apiKey) {
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({idToken:token}) })
  if (!r.ok) return null
  const data = await r.json(); return data.users?.[0] || null
}
export default { async fetch(request, env) {
  const headers = cors(env.ALLOWED_ORIGIN || '*')
  if (request.method === 'OPTIONS') return new Response(null,{headers})
  const url = new URL(request.url)
  if (request.method !== 'POST') return new Response(JSON.stringify({ok:false}),{status:405,headers})
  if (url.pathname === '/order') {
    const token = request.headers.get('authorization')?.replace('Bearer ','')
    const user = token ? await verifyFirebaseToken(token, env.FIREBASE_API_KEY) : null
    if (!user) return new Response(JSON.stringify({error:'Unauthorized'}),{status:401,headers})
    const o = await request.json()
    const embed = { title:'🛒 New AG Cloud Order', color:0x1689ff, description:`<@&${env.FOUNDER_ROLE_ID}> A new payment needs verification.`, fields:[
      {name:'Order ID',value:String(o.orderId),inline:true},{name:'Customer',value:`${o.userName}\n${o.userEmail}`,inline:true},{name:'Plan',value:`${o.category} / ${o.planName}`,inline:true},{name:'Amount',value:`₹${o.amount}`,inline:true},{name:'Payer',value:String(o.payerName),inline:true},{name:'Transaction ID',value:String(o.transactionId),inline:true},{name:'Server Name',value:String(o.serverName),inline:true},{name:'Ticket',value:String(o.discordTicket||'Not provided'),inline:true},{name:'Admin action',value:`Open ${env.ADMIN_URL || 'https://www.agcloud.fun/admin'} to Accept or Deny.`}
    ], timestamp:new Date().toISOString(), footer:{text:'AG Cloud Order System'} }
    const wr = await fetch(env.DISCORD_WEBHOOK_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({content:`<@&${env.FOUNDER_ROLE_ID}>`,embeds:[embed],allowed_mentions:{roles:[env.FOUNDER_ROLE_ID]}})})
    return new Response(JSON.stringify({ok:wr.ok}),{status:wr.ok?200:502,headers})
  }
  if (url.pathname === '/status') {
    const body = await request.json()
    if (!env.STATUS_WEBHOOK_URL) return new Response(JSON.stringify({ok:true,skipped:true}),{headers})
    const wr = await fetch(env.STATUS_WEBHOOK_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({embeds:[{title:`Order ${body.status}`,description:`Order ${body.orderId} was marked **${body.status}** in the founder dashboard.`,color:body.status==='accepted'?0x2ecc71:0xe74c3c,timestamp:new Date().toISOString()}]})})
    return new Response(JSON.stringify({ok:wr.ok}),{status:wr.ok?200:502,headers})
  }
  return new Response(JSON.stringify({error:'Not found'}),{status:404,headers})
}}
