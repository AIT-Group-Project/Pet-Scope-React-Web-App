import React from 'react';

const PDSubmitButton = ({extraStyles, innerText, customFunc}) => {
    const styles = 'px-10 py-2 mx-1 dark:bg-slate-200 transform motion-safe:hover:scale-110';
    return (
        <>
            <button className={`${styles} ${extraStyles}`} onClick={() => customFunc()}>
                {innerText}
            </button>
        </>
    )
};

export default PDSubmitButton;