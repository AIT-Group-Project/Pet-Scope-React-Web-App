
import { Map } from '../components'
import Images from '../components/Images'

const AboutUs = () => {
  return (
    <div className=' text-center font-semibold text-blue-700 dark:bg-slate-500 dark:text-white'> 
    Where to find us
      <Map />
      <div className='text-center p-40 mx-auto  '>
        content box
        <Images />
      </div>
    </div>

  )
}

export default AboutUs