
import { Map, Contactsbox } from '../components'


const AboutUs = () => {
  return (
    <div className=' text-center font-semibold text-blue-700 dark:bg-slate-500 dark:text-white'> 
    Where to find us
      <Map />
      <div className='text-center p-40 mx-auto  '>
        <Contactsbox />
      </div>
    </div>

  )
}

export default AboutUs