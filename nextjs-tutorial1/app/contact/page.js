import React from 'react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>Contact Page</h1>
      <Link href='/' className='hover:underline'>Home Page
      </Link>
      <Link href='/about' className='hover:underline ml-3'>About Page
      </Link>
    </div>
  )
}

export default ContactPage