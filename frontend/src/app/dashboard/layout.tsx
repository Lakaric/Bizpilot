import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import DashboardMain from '@/components/dashboard/DashboardMain'
import { SidebarProvider } from '@/contexts/SidebarContext'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <div className='flex'>
                <Sidebar />
                <DashboardMain>{children}</DashboardMain>
            </div>
        </SidebarProvider>
    )
}

export default layout