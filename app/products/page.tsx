import React, { lazy } from 'react'

const Dashboard = lazy(() => import('../dashboard/page'))

const Products:React.FC = () => {
  return (
    <Dashboard>
      Products
    </Dashboard>
  )
}

export default Products
