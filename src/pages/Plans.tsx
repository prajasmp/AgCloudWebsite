import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlanCard from '../components/PlanCard'
import { categoryLabels, plans } from '../data/plans'
import type { PlanCategory } from '../types'

export default function Plans(){
 const {category}=useParams(); const valid=(category && category in categoryLabels)?category as PlanCategory:'intel'
 const [active,setActive]=useState<PlanCategory>(valid); const [q,setQ]=useState('')
 const visible=useMemo(()=>plans.filter(p=>p.category===active && `${p.name} ${p.ram||''} ${p.cpu||''}`.toLowerCase().includes(q.toLowerCase())),[active,q])
 return <section className="section top-space"><div className="container"><div className="section-heading left"><span>Plans</span><h1>Find the right power for your project</h1><p>Switch categories, compare specifications and continue to secure checkout.</p></div>
 <div className="plan-toolbar"><div className="category-tabs">{Object.entries(categoryLabels).map(([k,v])=><button className={active===k?'active':''} onClick={()=>setActive(k as PlanCategory)} key={k}>{v}</button>)}</div><label className="search"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search plans"/></label></div>
 {active==='invite'&&<div className="notice">Invite rules: fake/alt invites reset progress, token/J4J is not allowed, left/rejoin counts as -1, and invited accounts must be at least 5 months old.</div>}
 {active==='boost'&&<div className="notice">If the required boost is removed, the server may be suspended.</div>}
 {active==='domains'&&<div className="notice">Need another extension? Create a ticket in the AG Cloud Discord server.</div>}
 <div className="plans-grid">{visible.map(p=><PlanCard plan={p} key={p.id}/>)}</div></div></section>
}
