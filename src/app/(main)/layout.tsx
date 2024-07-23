import React from 'react'
import Sidebar from '@/components/Sidebar'
import DashboardPage from './dashboard/page'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />

     <DashboardPage/>

    </div>
  )
}

export default Layout
