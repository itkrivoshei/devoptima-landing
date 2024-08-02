import React from 'react';

const SolutionsSection: React.FC = () => {
  return (
    <section className='pt-20 py-20'>
      <div className='container mx-auto text-center max-w-section'>
        <div className='mx-auto max-w-text-block'>
          <h2 className='font-title text-4xl leading-tight pb-7 text-white'>
            Innovative solutions for operational excellence
          </h2>
          <p className='text-gray-400 text-lg leading-relaxed font-light tracking-tight pt-0 pb-9'>
            Tailored DevOps expertise driving your business momentum.
            Personalized solutions for growth and evolution.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div
            className='p-8 rounded-lg max-w-card mx-auto'
            style={{
              background:
                'linear-gradient(180deg, rgba(33, 66, 136, 0.25) 0%, rgba(8, 20, 43, 0.25) 100%)',
              border: '1px solid rgba(116, 159, 246, 0.3)',
            }}
          >
            <img
              alt='Continuous Integration & Deployment'
              src='/images/icon-ci-cd.svg'
              className='mx-auto mb-4'
            />
            <h3 className='text-white text-lg font-semibold'>
              Continuous Integration & Deployment
            </h3>
            <p className='text-gray-400 text-sm'>
              Streamline your development process with our advanced CI/CD
              solutions, ensuring faster and more reliable code deployment.
            </p>
          </div>
          <div
            className='p-8 rounded-lg max-w-card mx-auto'
            style={{
              background:
                'linear-gradient(180deg, rgba(33, 66, 136, 0.25) 0%, rgba(8, 20, 43, 0.25) 100%)',
              border: '1px solid rgba(116, 159, 246, 0.3)',
            }}
          >
            <img
              alt='Cloud Solutions & Infrastructure Management'
              src='/images/icon-cloud-solutions.svg'
              className='mx-auto mb-4'
            />
            <h3 className='text-white text-lg font-semibold'>
              Cloud Solutions & Infrastructure Management
            </h3>
            <p className='text-gray-400 text-sm'>
              Leverage the cloud for scalability and efficiency. We provide
              comprehensive cloud infrastructure management and optimization
              services.
            </p>
          </div>
          <div
            className='p-8 rounded-lg max-w-card mx-auto'
            style={{
              background:
                'linear-gradient(180deg, rgba(33, 66, 136, 0.25) 0%, rgba(8, 20, 43, 0.25) 100%)',
              border: '1px solid rgba(116, 159, 246, 0.3)',
            }}
          >
            <img
              alt='Automated Testing & Quality Assurance'
              src='/images/icon-automated-testing.svg'
              className='mx-auto mb-4'
            />
            <h3 className='text-white text-lg font-semibold'>
              Automated Testing & Quality Assurance
            </h3>
            <p className='text-gray-400 text-sm'>
              Enhance product quality with our automated testing services,
              designed to detect issues early and reduce time-to-market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
