import SideNav from '@/app/ui/dashboard/sidenav';
import React from 'react';


export default function Layout({children}: {children: React.ReactNode}){
    return(
        <div className='flex border-2 border-green-600 h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className='w-full border-2 border-red-600 flex-none md:w-64'>
                <SideNav />
            </div>
            <div className='grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
        </div>
    )
}