import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>About Page</h1>
      <Link href='/' className='hover:underline'>Home Page
      </Link>
      <Link href='/contact' className='hover:underline ml-3'>Contact Page</Link>
    </div>
  )
}

export default AboutPage