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
    <nav className='flex items-center justify-between p-3 opacity-70 lg:sticky md:top-0 bg-black z-50'>
      <div className='mr-auto max-lg:mx-auto'>
        <h1 className="lg:text-3xl md:text-xl font-marcellus font-extrabold ">Best Outcomes Youth Solace</h1>
      </div>
      <div className='text-xl max-lg:hidden'>
        {navlinks.map((link, index) => (
            <a href={link.url} key={index} className='mx-5'>{link.title}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
