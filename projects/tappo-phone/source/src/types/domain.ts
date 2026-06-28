export type Role = 'owner' | 'staff'

export type OrderMode = 'dine-in' | 'takeaway'

export type PaymentStatus = 'idle' | 'pending' | 'failed' | 'paid'

export type NavItem = {
  label: string
  route: string
  key: string
  disabled?: boolean
}

export type OwnerMetric = {
  label: string
  value: string
  delta: string
  tone: 'orange' | 'green' | 'blue'
}

export type StaffApp = {
  id: string
  name: string
  description: string
  route: string
  tone: 'orange' | 'green' | 'blue' | 'purple'
  enabled: boolean
}

export type MenuCategory = {
  id: string
  name: string
  icon: string
}

export type MenuItem = {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  image: string
  tags: string[]
  soldOut?: boolean
}

export type CartLine = {
  item: MenuItem
  quantity: number
}
