import { Cpu, Database, HardDrive, MapPin, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Plan } from '../types'

export default function PlanCard({plan}:{plan:Plan}){
 return <article className={`plan-card ${plan.badge?'featured':''}`}>
  {plan.badge&&<span className="badge">{plan.badge}</span>}
  <h3>{plan.name}</h3>
  <div className="price">{plan.price!=null?<>₹{plan.price.toLocaleString('en-IN')}<small>/{plan.period}</small></>:<span className="free-label">Reward Plan</span>}</div>
  <div className="specs">
   {plan.ram&&<div><Database size={18}/><span>{plan.ram}</span></div>}
   {plan.cpu&&<div><Cpu size={18}/><span>{plan.cpu}</span></div>}
   {plan.storage&&<div><HardDrive size={18}/><span>{plan.storage}</span></div>}
   {plan.location&&<div><MapPin size={18}/><span>{plan.location}</span></div>}
   {plan.features?.map(x=><div key={x}><Zap size={18}/><span>{x}</span></div>)}
  </div>
  {plan.unavailable?<button className="disabled-btn" disabled>Coming Soon</button>:<Link className="primary-btn full" to={`/checkout/${plan.id}`}>Buy Now</Link>}
 </article>
}
