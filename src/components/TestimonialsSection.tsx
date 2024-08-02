import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className='pt-20 py-20'>
      <div className='container mx-auto text-center'>
        <div className='grid grid-cols-2 gap-10'>
          <div className='bg-gradient-to-b from-transparent to-[#1A1A2E] p-8 rounded-lg text-left'>
            <img
              alt='Client feedback'
              src={`${process.env.PUBLIC_URL}/images/icon-client-feedback1.svg`}
              style={{ marginBottom: '-2rem', marginLeft: '-3rem' }}
            />
            <p className='text-gray-200 text-lg leading-relaxed font-light tracking-tight pt-0 pb-9'>
              Thanks to DevOptima, our team can focus more on{' '}
              <span className='font-medium text-gray-100'>innovation</span> and
              less on operational challenges. Their cloud management solutions
              are top-notch.
            </p>
            <div className='flex items-center'>
              <img
                alt='John Smith'
                src={`${process.env.PUBLIC_URL}/images/john-smith.png`}
                className='w-12 h-12 rounded-full grayscale object-cover'
              />
              <div className='ml-4 text-left'>
                <h3 className='text-white text-lg font-medium'>John Smith</h3>
                <p className='text-gray-400 text-sm'>IT Director at Reflex</p>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-b from-transparent to-[#1A1A2E] p-8 rounded-lg text-left'>
            <img
              alt='Client feedback'
              src={`${process.env.PUBLIC_URL}/images/icon-client-feedback2.svg`}
              style={{ marginBottom: '-2rem', marginLeft: '-3rem' }}
            />
            <p className='text-gray-200 text-lg leading-relaxed font-light tracking-tight pt-0 pb-9'>
              DevOptima has been a game-changer for us. With their support,
              we've shifted our focus from operational hurdles to pushing
              boundaries in{' '}
              <span className='font-medium text-gray-100'>innovation</span>.
            </p>
            <div className='flex items-center'>
              <img
                alt='Jane Doe'
                src={`${process.env.PUBLIC_URL}/images/jane-doe.png`}
                className='w-12 h-12 rounded-full grayscale object-cover'
              />
              <div className='ml-4 text-left'>
                <h3 className='text-white text-lg font-medium'>Jane Doe</h3>
                <p className='text-gray-400 text-sm'>Tech Lead at Dribble</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
