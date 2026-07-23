import type { Plan, PlanCategory } from '../types'

export const categoryLabels: Record<PlanCategory, string> = {
  boost: 'Boost Plans', invite: 'Invite Plans', intel: 'Intel Plans', amd: 'AMD Plans', ryzen: 'Ryzen Plans',
  'intel-vps': 'Intel VPS', 'amd-vps': 'AMD VPS', 'ryzen-vps': 'Ryzen VPS', domains: 'Domains', 'bot-hosting': 'Bot Hosting'
}

export const plans: Plan[] = [
  { id:'boost-1', category:'boost', name:'1 Boost', ram:'2 GB RAM', features:['Server remains active while the boost is maintained'] },
  { id:'boost-2', category:'boost', name:'2 Boosts', ram:'4 GB RAM', features:['Server remains active while both boosts are maintained'], badge:'Best Value' },

  { id:'invite-5', category:'invite', name:'5 Invites', ram:'2 GB RAM', storage:'4 GB Storage', cpu:'100% CPU' },
  { id:'invite-8', category:'invite', name:'8 Invites', ram:'4 GB RAM', storage:'6 GB Storage', cpu:'100% CPU' },
  { id:'invite-12', category:'invite', name:'12 Invites', ram:'6 GB RAM', storage:'8 GB Storage', cpu:'100% CPU' },
  { id:'invite-16', category:'invite', name:'16 Invites', ram:'8 GB RAM', storage:'10 GB Storage', cpu:'100% CPU' },
  { id:'invite-20', category:'invite', name:'20 Invites', ram:'12 GB RAM', storage:'16 GB Storage', cpu:'100% CPU' },
  { id:'invite-28', category:'invite', name:'28 Invites', ram:'16 GB RAM', storage:'20 GB Storage', cpu:'100% CPU', badge:'Maximum' },

  { id:'intel-dirt', category:'intel', name:'Dirt Plan', ram:'2 GB RAM', storage:'4 GB Disk', cpu:'100% CPU', price:35, period:'month' },
  { id:'intel-wood', category:'intel', name:'Wood Plan', ram:'4 GB RAM', storage:'8 GB Disk', cpu:'100% CPU', price:65, period:'month' },
  { id:'intel-stone', category:'intel', name:'Stone Plan', ram:'6 GB RAM', storage:'10 GB Disk', cpu:'100% CPU', price:99, period:'month', badge:'Popular' },
  { id:'intel-copper', category:'intel', name:'Copper Plan', ram:'8 GB RAM', storage:'15 GB Disk', cpu:'150% CPU', price:210, period:'month' },

  { id:'amd-lapis', category:'amd', name:'Lapis Plan', ram:'6 GiB DDR4 3200 MHz', cpu:'1.5 vCore · 150% CPU', storage:'20 GiB NVMe Gen-4', price:210, period:'month', location:'India / Singapore' },
  { id:'amd-redstone', category:'amd', name:'Redstone Plan', ram:'8 GiB DDR4 3200 MHz', cpu:'2 vCore · 200% CPU', storage:'25 GiB NVMe Gen-4', price:370, period:'month', location:'India / Singapore' },
  { id:'amd-diamond', category:'amd', name:'Diamond Plan', ram:'10 GiB DDR4 3200 MHz', cpu:'2.5 vCore · 250% CPU', storage:'30 GiB NVMe Gen-4', price:490, period:'month', location:'India / Singapore', badge:'Recommended' },
  { id:'amd-emerald', category:'amd', name:'Emerald Plan', ram:'16 GiB DDR4 3200 MHz', cpu:'3.5 vCore · 350% CPU', storage:'50 GiB NVMe Gen-4', price:800, period:'month', location:'India / Singapore' },
  { id:'amd-netherite', category:'amd', name:'Netherite Plan', ram:'24 GiB DDR4 3200 MHz', cpu:'4 vCore · 400% CPU', storage:'70 GiB NVMe Gen-4', price:1120, period:'month', location:'India / Singapore' },
  { id:'amd-bedrock', category:'amd', name:'Bedrock Plan', ram:'32 GiB DDR4 3200 MHz', cpu:'5 vCore · 500% CPU', storage:'100 GiB NVMe Gen-4', price:1800, period:'month', location:'India / Singapore', badge:'Ultimate' },

  ...[
    ['2 GB','50% CPU Ryzen','4 GB NVMe SSD',290],['4 GB','100% CPU (1 vCore)','8 GB NVMe SSD',530],['8 GB','200% CPU (2 vCore)','16 GB NVMe SSD',1010],
    ['12 GB','300% CPU (3 vCore)','24 GB NVMe SSD',1490],['16 GB','400% CPU (4 vCore)','32 GB NVMe SSD',1970],['24 GB','600% CPU (6 vCore)','48 GB NVMe SSD',2930],['32 GB','800% CPU (8 vCore)','64 GB NVMe SSD',3590]
  ].map((p,i):Plan=>({id:`ryzen-${i+1}`,category:'ryzen',name:`Ryzen ${p[0]} Plan`,ram:String(p[0]),cpu:String(p[1]),storage:String(p[2]),price:Number(p[3]),period:'month',location:'Mumbai, India',badge:i===2?'Popular':undefined,features:['Premium Anti-DDoS','99.9% uptime','Premium game panel','Plugin installer']})),

  { id:'intel-vps-1', category:'intel-vps', name:'Platinum 1', ram:'8 GB DDR4', cpu:'2 vCores', storage:'50 GB NVMe SSD', price:549, period:'month', location:'India' },
  { id:'intel-vps-2', category:'intel-vps', name:'Platinum 2', ram:'16 GB DDR4', cpu:'4 vCores', storage:'80 GB NVMe SSD', price:999, period:'month', location:'India', badge:'Popular' },
  { id:'intel-vps-3', category:'intel-vps', name:'Platinum 3', ram:'32 GB DDR4', cpu:'8 vCores', storage:'120 GB NVMe SSD', price:1859, period:'month', location:'India' },
  { id:'intel-vps-4', category:'intel-vps', name:'Platinum 4', ram:'48 GB DDR4', cpu:'10 vCores', storage:'150 GB NVMe SSD', price:2259, period:'month', location:'India' },
  { id:'intel-vps-5', category:'intel-vps', name:'Platinum 5', ram:'64 GB DDR4', cpu:'12 vCores', storage:'200 GB NVMe SSD', price:2959, period:'month', location:'India', badge:'Maximum' },

  { id:'amd-vps-1', category:'amd-vps', name:'AMD VPS Core', ram:'8 GB DDR4', cpu:'2 AMD EPYC vCores', storage:'60 GB NVMe SSD', price:699, period:'month', unavailable:true, badge:'Coming Soon' },
  { id:'amd-vps-2', category:'amd-vps', name:'AMD VPS Pro', ram:'16 GB DDR4', cpu:'4 AMD EPYC vCores', storage:'120 GB NVMe SSD', price:1299, period:'month', unavailable:true, badge:'Coming Soon' },
  { id:'amd-vps-3', category:'amd-vps', name:'AMD VPS Ultra', ram:'32 GB DDR4', cpu:'8 AMD EPYC vCores', storage:'240 GB NVMe SSD', price:2399, period:'month', unavailable:true, badge:'Coming Soon' },

  ...[
    ['2 GB','1 vCore Ryzen 9','10 GB NVMe SSD',399],['4 GB','2 vCore Ryzen 9','20 GB NVMe SSD',659],['6 GB','3 vCore Ryzen 9','30 GB NVMe SSD',949],['8 GB','4 vCore Ryzen 9','40 GB NVMe SSD',1099],['12 GB','6 vCore Ryzen 9','60 GB NVMe SSD',1599],['16 GB','8 vCore Ryzen 9','80 GB NVMe SSD',2259],['24 GB','10 vCore Ryzen 9','120 GB NVMe SSD',3259],['32 GB','14 vCore Ryzen 9','160 GB NVMe SSD',4259]
  ].map((p,i):Plan=>({id:`ryzen-vps-${i+1}`,category:'ryzen-vps',name:`Ryzen 9 VPS ${p[0]}`,ram:String(p[0]),cpu:String(p[1]),storage:String(p[2]),price:Number(p[3]),period:'month',location:'Mumbai, India',badge:i===3?'Recommended':undefined,features:['OVH Enterprise Anti-DDoS','1 Gbps port','Full root access','Instant setup']})),

  ...['.fun','.net','.com','.in','.xyz','.io','.online','.blog','.shop','.org','.info','.tech'].map((d,i):Plan=>({id:`domain-${d.slice(1)}`,category:'domains',name:d,price:[99,899,999,699,199,3199,299,399,399,899,499,799][i],period:'year',features:['Domain registration','DNS management','Support included']})),

  { id:'bot-starter', category:'bot-hosting', name:'Starter Plan', ram:'1 GB RAM', cpu:'0.5 vCore', storage:'5 GB Disk', price:69, period:'month' },
  { id:'bot-ai', category:'bot-hosting', name:'AI+ Plan', ram:'2 GB RAM', cpu:'1 vCore', storage:'10 GB Disk', price:99, period:'month', badge:'Popular' },
  { id:'bot-max', category:'bot-hosting', name:'Max Plan', ram:'4 GB RAM', cpu:'1.5 vCore', storage:'20 GB Disk', price:149, period:'month' },
  { id:'bot-advanced', category:'bot-hosting', name:'Advanced Plan', ram:'6 GB RAM', cpu:'2 vCore', storage:'25 GB Disk', price:249, period:'month' }
]

export const planById = (id: string) => plans.find(p => p.id === id)
