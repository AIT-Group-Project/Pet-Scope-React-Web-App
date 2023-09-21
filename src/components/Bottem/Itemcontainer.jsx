/* Item container for Footer links when chaning footer titles in Menu
make sure to also edit the import for said names in here along with
the <Item Links= {Title name} title= "Title name"/> same as below*/

import Item from './Item'
import {PageLinks, extras} from "./Menus"
const Itemcontainer = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 sm:px-8 px-5 py-16 items-center  '>
        <Item Links= {PageLinks} title= "PageLinks" />
        <Item Links= {extras} title= "dog"/>
    </div>
  )
}

export default Itemcontainer