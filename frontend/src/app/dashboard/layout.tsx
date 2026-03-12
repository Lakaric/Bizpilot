import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='flex-1'>
                {children}
            </main>
        </div>
    )
}

export default layout