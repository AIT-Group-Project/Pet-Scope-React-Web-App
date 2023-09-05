import MyListbox from "./MyListbox"
import React from "react"

const ProfileInfoBox = () => {
    return (
              
<div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6 bg-emerald-300 dark:bg-gray-600">
  <div className="mx-auto max-w-xl flex flex-col space-y-5">
    {/* ::Title Contact Us */}
    <h2 className="text-4xl font-oswald uppercase">Profile Options</h2>
    {/* ::Text */}
    <MyListbox className="flex justify-center translate-x-4"> </MyListbox>
  </div> 
</div>
    )
}

export default ProfileInfoBox