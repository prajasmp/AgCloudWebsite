import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import OrderSuccess from './pages/OrderSuccess'
import Plans from './pages/Plans'
import { Contact, Privacy, Refund, Terms } from './pages/StaticPages'

export default function App(){return <Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/plans" element={<Plans/>}/><Route path="/plans/:category" element={<Plans/>}/><Route path="/checkout/:planId" element={<Checkout/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="/admin" element={<Admin/>}/><Route path="/order-success/:id" element={<OrderSuccess/>}/><Route path="/terms" element={<Terms/>}/><Route path="/refund-policy" element={<Refund/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/contact" element={<Contact/>}/></Route></Routes>}
