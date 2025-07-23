import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between w-[80vw] top-10 fixed right-[10vw] rounded-full p-3 px-7">
        <div className='logo flex gap-20 items-center'>
          <svg className='h-8' width="128" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11 17.9C8.71776 17.4367 7 15.419 7 13V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V13C17 15.419 15.2822 17.4367 13 17.9V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.9ZM12 4C13.6569 4 15 5.34315 15 7V13C15 14.3062 14.1652 15.4175 13 15.8293V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V15.8293C9.83481 15.4175 9 14.3062 9 13V7C9 5.34315 10.3431 4 12 4Z" fill="#000000"></path>
</svg>
        
         <ul className='flex gap-10'>
             <li>Products</li>
             <li>Templates</li>
             <li>Marketplace</li>
             <li>Learn</li>
             <li>Pricing</li> 
         </ul>
        </div>

        <div className='flex gap-2'>
          <button className="login bg-gray-200 p-4 rounded-lg font-bold">Log in</button>
          <button className="signup bg-gray-900 text-white font-bold p-4 rounded-full">Signup for Free</button>
        </div>
    </nav>
  )
}

export default Navbar