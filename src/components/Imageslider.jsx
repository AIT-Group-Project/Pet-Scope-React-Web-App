import React, { useState, useContext } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import UserContext from '../contexts/UserProvider';
function Imageslider() {

    const { userData, setUserData } = useContext(UserContext);
    const [prevDogCat, setPrevDogCat] = useState(userData?.dog_cat);
    let slides = [];

    //Sets all images in selected folders to an array that can then be displayed
    const imageContextCat = require.context('../Images/Cat', false, /\.jpg$/);
    const catImages = imageContextCat.keys().map(imageContextCat);
    const imageContextDog = require.context('../Images/Dog', false, /\.jpg$/);
    const dogImages = imageContextDog.keys().map(imageContextDog);
    const imageContextVet = require.context('../Images/Vet', false, /\.jpg$/);
    const vetImages = imageContextVet.keys().map(imageContextVet);
    const imageContextVince = require.context('../Images/Vince', false, /\.jpg$/);
    const vinceImages = imageContextVince.keys().map(imageContextVince);


    //console.log(userData.dog_cat)
    //changes homepage images depending on preference
    if ((userData?.dog_cat === undefined) || (userData?.dog_cat === null)) {
      slides = slides = vetImages;

    } else if (userData?.dog_cat === 'cat') {

      slides = catImages;

    } else if (userData?.dog_cat === 'dog') {

      slides = dogImages;

    } else if (userData?.dog_cat === 'vince') {

      slides = vinceImages;

    }

    //image slider preferences setting length and starting point
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    const styles = useState('hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ');

    const handleButtonClick = () => {
      if (userData?.dog_cat !== 'vince') {
          setPrevDogCat(userData?.dog_cat); // Update the previous value before changing to 'vince'
          setUserData(prevState => ({
              ...prevState,
              dog_cat: 'vince'
          }));
      } else {
          setUserData(prevState => ({
              ...prevState,
              dog_cat: prevDogCat // Revert back to the previous value
          }));
      }
  }

  return (
    <div className='max-w-[1750px] h-[1000px] w-full m-auto pb-16 pt-3 px-4 relative group dark:bg-slate-500'>
        <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        {/* Left Arrow */}
        <div className={`${styles} left-5`}>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className={`${styles} right-5`}>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2 '>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer dark:text-white'>
                    <RxDotFilled />
                </div>
            ))}
        </div>
        <button className= 'dark:text-slate-500 text-white font-bold' onClick={handleButtonClick}>Vince Mode</button>
    </div>
  );
}

export default Imageslider