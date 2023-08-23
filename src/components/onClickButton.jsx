import React from 'react';

const onClickButton = ({extraStyles, innerText, customFunc}) => {
    const styles = 'p-1 m-1 dark:bg-slate-500 transform motion-safe:hover:scale-110';
  return (
    <>
        <button className={`${styles} ${extraStyles}`} onClick={() => customFunc()}>
            {innerText}
        </button>
    </>
  )
};

export default onClickButton;