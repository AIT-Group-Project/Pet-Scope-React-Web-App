import React from 'react'

const homepage = () => {
  return (
    <section className="w-full flex-center flex-col">

      <h1 className="head_text text-center">
        Looking after your pet like they're our own is our promise.
        <br className="max-md:hidden"/>
        <span className=' text-center'>
        Our veterinary clinic provides modern, professional and affordable health care for your pets.
        We aim to make your pet feel at ease in our clinic with a caring approach to consultations and treatment. 
        </span>
      </h1>

      <p className="desc text-center">
        Our clinic, you’ll be fully supported with sound advice by leading Veterinarians and Nurses. 
        We know that helping you starts with providing a clear understanding of health care issues and treatment options.
        With expert advice and professional recommendations, you’ll be well equipped to make the best health care decisions for your pet.
      </p>
      

    </section>
  )
}

export default homepage