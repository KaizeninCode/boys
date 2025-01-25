import React from 'react'

const Navbar = () => {
    const navlinks =[
        {
            url: '#home',
            title: 'Home',
        },
        {
            url: '#about',
            title: 'About Us',
        },
        {
            url: '#mission',
            title: 'Mission & Vision',
        },
        {
            url: '#contact',
            title: 'Contact Us',
        },
    ]
  return (
    <nav className='flex items-center justify-between p-3 text-black'>
      <div className='mr-auto'>
        <h1 className="text-3xl font-marcellus font-extrabold text-black">Best Outcomes Youth Solace</h1>
      </div>
      <div className='text-xl'>
        {navlinks.map((link, index) => (
            <a href={link.url} key={index} className='mx-5'>{link.title}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
