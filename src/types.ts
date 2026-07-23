export type PlanCategory = 'boost' | 'invite' | 'intel' | 'amd' | 'ryzen' | 'intel-vps' | 'amd-vps' | 'ryzen-vps' | 'domains' | 'bot-hosting'

export interface Plan {
  id: string
  category: PlanCategory
  name: string
  price?: number
  period?: string
  ram?: string
  cpu?: string
  storage?: string
  location?: string
  badge?: string
  unavailable?: boolean
  features?: string[]
}

export interface OrderFormData {
  planId: string
  category: PlanCategory
  planName: string
  amount: number
  payerName: string
  transactionId: string
  serverName: string
  deliveryEmail: string
  discordTicket?: string
}
