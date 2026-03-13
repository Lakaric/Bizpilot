import React from 'react'
import Header from '@/components/dashboard/Header'
import DashboardOverview from '@/components/dashboard/DashboardOverview'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc]">
      <Header />
      <div className="flex-1 overflow-auto">
        <DashboardOverview />
      </div>
    </div>
  )
}

export default page