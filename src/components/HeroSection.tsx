import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className='pt-20 py-20'>
      <div className='container mx-auto flex items-center justify-between pt-20'>
        <div className='pt-12'>
          <h2 className='font-title text-7xl leading-tight pb-7 bg-clip-text text-transparent bg-gradient-to-r from-[#6D9CF6] to-white'>
            Revolutionize <br /> your DevOps journey <br /> with DevOptima
          </h2>
          <p className='text-gray-200 text-xl leading-relaxed font-light tracking-tight pt-0 pb-9'>
            Empower teams to innovate faster through streamlined development,
            efficient automated workflows, and reliable scaling.
          </p>
          <div className='flex flex-col h-24'>
            <div className='rounded-full p-px max-h-14 max-w-lg overflow-hidden border border-[#3A4C91] transition-transform transform hover:scale-105 active:scale-95'>
              <form
                className='bg-gradient-to-r from-[#18264A] to-[#0F1631] flex rounded-full items-center justify-between max-h-[54px] overflow-hidden'
                noValidate
              >
                <input
                  className='outline-none bg-transparent flex-1 text-sm pl-6 py-4 text-white placeholder-gray-500 font-light'
                  placeholder='Your business email...'
                  type='email'
                  name='email'
                />
                <div className='overflow-hidden pe-1 rounded-full'>
                  <button className='flex items-center rounded-full leading-4 text-base font-semibold px-9 h-11 bg-[#243BB9] hover:bg-[#3F57DA] border border-transparent text-white transition-colors duration-200'>
                    Free trial
                  </button>
                </div>
              </form>
            </div>
            <p className='text-red-500 pl-6 pt-3 font-medium leading-5 tracking-tight'></p>
          </div>
        </div>
        <div className='relative hover:opacity-90 transition-opacity duration-200'>
          <img
            alt='hero'
            src={`${process.env.PUBLIC_URL}/images/code-image.svg`}
            className='relative z-20'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
