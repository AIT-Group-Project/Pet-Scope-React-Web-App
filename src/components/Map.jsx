import React from 'react';

const Map = () => {
  const mapStyles = {
    border: 0,
  };

  return (
    <div className= 'flex w-full items-center dark:bg-slate-500'>
    <div className='p-3 items-center bg-emerald-400 rounded-lg dark:bg-slate-700 mx-auto'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13084.925591950665!2d138.59043174043495!3d-34.925733170568876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c93b70926705%3A0x1c033657a35104f0!2sAdelaide%20SA%205000!5e0!3m2!1sen!2sau!4v1689296968733!5m2!1sen!2sau"
        width="600"
        height="450"
        style={mapStyles}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
}

export default Map;