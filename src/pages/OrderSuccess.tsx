import { CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
export default function OrderSuccess(){const {id}=useParams();return <section className="section top-space"><div className="container success-card"><CheckCircle2/><span>Payment submitted</span><h1>Your order is pending verification</h1><p>Order ID: <code>{id}</code></p><p>AG Cloud staff will verify your transaction. You can track the latest status in your dashboard.</p><Link className="primary-btn" to="/dashboard">Open Dashboard</Link></div></section>}
