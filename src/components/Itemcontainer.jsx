/* Item container for Footer links when chaning footer titles in Menu
make sure to also edit the import for said names in here along with
the <Item Links= {Title name} title= "Title name"/> same as below*/

import Item from './Item'
import {Sample1, Sample2, Sample3, Sample4} from "./Menus"
const Itemcontainer = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
        <Item Links= {Sample1} title= "Sample1" />
        <Item Links= {Sample2} title= "Sample2"/>
        <Item Links= {Sample3} title= "Sample3"/>
        <Item Links= {Sample4} title= "Sample4"/>
    </div>
  )
}

export default Itemcontainer