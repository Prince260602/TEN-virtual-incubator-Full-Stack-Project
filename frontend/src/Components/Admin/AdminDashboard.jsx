import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import CourseForm from './CoursesForm'


function AdminDashboard() {
  return (
    <>
    <div className='h-screen w-screen '>
      
    <AdminHeader />
       <div className='flex flex-col md:flex-row gap-2'>
         <Sidebar />
         <CourseForm />
       </div>
    </div>
    </>
  )
}

export default AdminDashboard
