import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className='pt-20 py-20 text-center'>
      <div className='container mx-auto'>
        <h2 className='font-title text-4xl leading-tight pb-7 text-white'>
          Ready to elevate your DevOps strategy?
        </h2>
        <p className='text-gray-400 text-lg leading-relaxed font-light tracking-tight pt-0 pb-9'>
          Join the multitude of companies benefiting from optimized DevOps
          practices. Contact us to discover how DevOptima can help your
          business.
        </p>
        <div className='flex justify-center space-x-4'>
          <button className='flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#243BB933] border border-[#243BB9] text-white hover:bg-[#243BB980] hover:border-[#3F57DA]'>
            Contact us
          </button>
          <button className='flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#243BB9] hover:bg-[#3F57DA] border border-transparent text-white'>
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
