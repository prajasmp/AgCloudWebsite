import { collection, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { db } from '../lib/firebase'

export default function Admin(){const {isAdmin,loading}=useAuth(); const [orders,setOrders]=useState<any[]>([])
 useEffect(()=>{if(!isAdmin)return; return onSnapshot(query(collection(db,'orders'),orderBy('createdAt','desc')),s=>setOrders(s.docs.map(d=>({id:d.id,...d.data()}))))},[isAdmin])
 if(loading)return <div className="page-loader">Loading...</div>; if(!isAdmin)return <Navigate to="/"/>
 async function setStatus(id:string,status:'accepted'|'denied'){await updateDoc(doc(db,'orders',id),{status,reviewedAt:new Date()}); const api=import.meta.env.VITE_ORDER_API_URL;if(api)fetch(`${api}/status`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({orderId:id,status})}).catch(()=>{})}
 return <section className="section top-space"><div className="container"><div className="section-heading left"><span>Founder Console</span><h1>Order verification</h1></div><div className="admin-list">{orders.map(o=><article className="admin-order" key={o.id}><div><h3>{o.planName} — ₹{o.amount}</h3><p>{o.userName} · {o.userEmail}</p><p>Transaction: <strong>{o.transactionId}</strong> · Payer: {o.payerName}</p><p>Server: {o.serverName} · Ticket: {o.discordTicket||'Not provided'}</p></div><div className="admin-actions"><span className={`status ${o.status}`}>{o.status}</span><button onClick={()=>setStatus(o.id,'accepted')} className="accept-btn">Accept</button><button onClick={()=>setStatus(o.id,'denied')} className="deny-btn">Deny</button></div></article>)}</div></div></section>}
