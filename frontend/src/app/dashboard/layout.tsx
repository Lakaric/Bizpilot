import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen'>
            <Sidebar />
            {/* 
              The Sidebar is fixed. When it is expanded it takes 256px,
              when collapsed it takes 72px. For now, since it defaults to expanded,
              we add a base padding. Ideally, this should be responsive to the 
              sidebar's state, but padding-left 256px matches the default state
              and prevents the dashboard from being hidden.
            */}
            <main className='flex-1 pl-[256px] transition-[padding] duration-200 ease-in-out'>
                {children}
            </main>
        </div>
    )
}

export default layout