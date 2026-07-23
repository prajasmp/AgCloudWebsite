import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { db } from '../lib/firebase'

export default function Dashboard(){const {user,loading}=useAuth(); const [orders,setOrders]=useState<any[]>([])
 useEffect(()=>{if(!user)return; return onSnapshot(query(collection(db,'orders'),where('userId','==',user.uid),orderBy('createdAt','desc')),s=>setOrders(s.docs.map(d=>({id:d.id,...d.data()}))))},[user])
 if(loading)return <div className="page-loader">Loading...</div>; if(!user)return <Navigate to="/"/>
 return <section className="section top-space"><div className="container"><div className="profile-card"><img src={user.photoURL||''}/><div><span>Client account</span><h1>{user.displayName}</h1><p>{user.email}</p></div></div><div className="dashboard-head"><h2>Purchase history</h2><Link className="primary-btn small" to="/plans">Buy a plan</Link></div><div className="order-list">{orders.length===0?<div className="empty">No orders yet.</div>:orders.map(o=><article className="order-row" key={o.id}><div><strong>{o.planName}</strong><span>Order #{o.id.slice(0,8)}</span></div><div><span>₹{o.amount}</span><span className={`status ${o.status}`}>{o.status}</span></div></article>)}</div></div></section>}
