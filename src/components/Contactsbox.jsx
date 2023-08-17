import React from 'react'

const Contactsbox = () => {
  return (
            
  <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6 bg-emerald-300 dark:bg-gray-600">
  <div className="mx-auto max-w-xl flex flex-col space-y-5">
    {/* ::Title Contact Us */}
    <h2 className="text-4xl font-oswald uppercase">Contact us</h2>
    {/* ::Text */}
    <p className="text-sm text-black dark:text-white">Our clinic, you’ll be fully supported with sound advice by leading Veterinarians and Nurses. We know that helping you starts with providing a clear understanding of health care issues and treatment options. With expert advice and professional recommendations, you’ll be well equipped to make the best health care decisions for your pet. </p>
    {/* ::Email contact */}
    <a href="#mail" className=" items-center text-sm text-blue-600 font-semibold hover:text-blue-700">
      <div className='items-center text-center text-semibold'>
      <ion-icon name="mail" size="small" className="mr-2 w-5 text-gray-400" ></ion-icon>
      mail-contact@fancycontact.com
      </div> 
    </a>
    {/* ::Address */}
    <p className="text-sm text-black dark:text-white leading-6">60 flinders Street, <br /> South Australia, Adelaide<br /> Australia</p>
  </div> 
</div>
  )
}

export default Contactsbox