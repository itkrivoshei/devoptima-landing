import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className='pt-20 py-20'>
      <div className='container mx-auto grid grid-cols-2 gap-10 items-center'>
        <div className='relative'>
          <img
            alt='dashboard'
            src={`${process.env.PUBLIC_URL}/images/dashboard-metrics.svg`}
            className='relative z-20'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className='max-w-[630px]'>
          <h2 className='font-title text-[48px] leading-[112.5%] pb-7 text-white tracking-tight'>
            What is DevOptima?
          </h2>
          <p className='text-gray-400 text-[20px] leading-[30px] font-light tracking-[-0.02em] pt-0 pb-9'>
            At DevOptima, we are a team of passionate DevOps experts committed
            to transforming the way businesses approach software development and
            operations.
          </p>
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col items-start text-left'>
              <img
                alt='DevOps transformation'
                src={`${process.env.PUBLIC_URL}/images/icon-devops-transformation.svg`}
                style={{ marginBottom: '-1.2rem', marginLeft: '-2rem' }}
              />
              <h3 className='text-white text-[20px] font-semibold leading-[25px] tracking-[-0.02em]'>
                DevOps transformation
              </h3>
              <p className='text-gray-400 text-[16px] leading-[22px] font-light tracking-[-0.02em]'>
                Reshaping businesses with DevOps expertise.
              </p>
            </div>
            <div className='flex flex-col items-start text-left'>
              <img
                alt='Efficient operations'
                src={`${process.env.PUBLIC_URL}/images/icon-efficient-operations.svg`}
                style={{ marginBottom: '-1.2rem', marginLeft: '-2rem' }}
              />
              <h3 className='text-white text-[20px] font-semibold leading-[25px] tracking-[-0.02em]'>
                Efficient operations
              </h3>
              <p className='text-gray-400 text-[16px] leading-[22px] font-light tracking-[-0.02em]'>
                Streamline processes for productivity gains.
              </p>
            </div>
            <div className='flex flex-col items-start text-left'>
              <img
                alt='CI/CD implementation'
                src={`${process.env.PUBLIC_URL}/images/icon-cicd-implementation.svg`}
                style={{ marginBottom: '-1.2rem', marginLeft: '-2rem' }}
              />
              <h3 className='text-white text-[20px] font-semibold leading-[25px] tracking-[-0.02em]'>
                CI/CD implementation
              </h3>
              <p className='text-gray-400 text-[16px] leading-[22px] font-light tracking-[-0.02em]'>
                Seamless software delivery pipeline.
              </p>
            </div>
            <div className='flex flex-col items-start text-left'>
              <img
                alt='Automation mastery'
                src={`${process.env.PUBLIC_URL}/images/icon-automation-mastery.svg`}
                style={{
                  marginBottom: '-1.2rem',
                  marginLeft: '-2rem',
                  padding: '9px',
                }}
              />
              <h3 className='text-white text-[20px] font-semibold leading-[25px] tracking-[-0.02em]'>
                Automation mastery
              </h3>
              <p className='text-gray-400 text-[16px] leading-[22px] font-light tracking-[-0.02em]'>
                Unlock full automation potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
