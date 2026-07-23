import { Cloud, LogIn, LogOut, Menu, UserCircle2, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout(){
 const [open,setOpen]=useState(false); const {user,login,logout,isAdmin}=useAuth()
 const links=[['Home','/'],['Plans','/plans'],['Terms','/terms'],['Refunds','/refund-policy'],['Contact','/contact']]
 return <div className="app-shell">
  <header className="nav-wrap"><nav className="nav container">
   <Link className="brand" to="/"><img src="/assets/agcloud-logo.png"/><span>AG CLOUD</span></Link>
   <button className="mobile-toggle" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <div className={`nav-links ${open?'open':''}`}>{links.map(([n,p])=><NavLink key={p} to={p} onClick={()=>setOpen(false)}>{n}</NavLink>)}{user&&<NavLink to="/dashboard">Dashboard</NavLink>}{isAdmin&&<NavLink to="/admin">Admin</NavLink>}</div>
   <div className="auth-box">{user?<><img className="avatar" src={user.photoURL||''}/><button className="ghost-btn" onClick={logout}><LogOut size={16}/> Logout</button></>:<button className="primary-btn small" onClick={login}><LogIn size={16}/> Sign in with Google</button>}</div>
  </nav></header>
  <main><Outlet/></main>
  <footer className="footer"><div className="container footer-grid"><div><div className="brand"><Cloud/><span>AG CLOUD</span></div><p>Premium hosting, built for speed, reliability and serious communities.</p></div><div><h4>Company</h4><Link to="/terms">Terms</Link><Link to="/refund-policy">Refund Policy</Link><Link to="/privacy">Privacy</Link></div><div><h4>Support</h4><a href={import.meta.env.VITE_DISCORD_INVITE_URL||'#'} target="_blank">Discord</a><a href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL||'support@agcloud.fun'}`}>Email Support</a></div></div><div className="copyright">© {new Date().getFullYear()} AG Cloud Hosting. All rights reserved.</div></footer>
 </div>
}
