/* Item container for Footer links when chaning footer titles in Menu
make sure to also edit the import for said names in here along with
the <Item Links= {Title name} title= "Title name"/> same as below*/

import Item from './Item'
import {PageLinks, dog, bird, wolf} from "./Menus"
const Itemcontainer = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
        <Item Links= {PageLinks} title= "PageLinks" />
        <Item Links= {dog} title= "dog"/>
        <Item Links= {bird} title= "bird"/>
        <Item Links= {wolf} title= "wolf"/>
    </div>
  )
}

export default Itemcontainer