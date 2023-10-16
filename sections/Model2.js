import React from 'react'

const Model2 = ({isVisible, onClose }) => {
    if(!isVisible) return null;
  return (

    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]'>
    <section >
        <div className='sm:w-[70vw] w-[80vw] flex flex-col'>
            <button className='text-white text-xl  place-self-end' onClick={() => onClose()}>

                X
            </button>
            <div className='bg-white sm:text-[20px] text-[18px] font-bold p-2 rounded'>
                    <p className='mx-[20px] py-[5px]'>PRIZES</p>
            </div>
            </div>
    </section>
</div>
    
  );
};

export default Model2;