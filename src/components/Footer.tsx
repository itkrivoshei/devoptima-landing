import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#0A0811] py-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='flex flex-col items-start mb-8 md:mb-0'>
          <a href='/' className='hover:opacity-75'>
            <img
              src={`${process.env.PUBLIC_URL}/images/logoDevOptima.svg`}
              alt='DevOptima Logo'
              className='h-10 w-36 mb-4'
              style={{ width: '144px', height: '40px' }}
            />
          </a>
        </div>
        <div className='flex flex-wrap justify-between items-start gap-12'>
          <div className='mx-4'>
            <h5 className='text-white text-sm font-semibold mb-2'>Resources</h5>
            <ul className='text-[#BDC4D1] text-sm space-y-1'>
              <li>
                <a href='/docs' className='hover:text-[#EFF1F6]'>
                  Docs
                </a>
              </li>
              <li>
                <a href='/release-notes' className='hover:text-[#EFF1F6]'>
                  Release notes
                </a>
              </li>
              <li>
                <a href='/security' className='hover:text-[#EFF1F6]'>
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className='mx-4'>
            <h5 className='text-white text-sm font-semibold mb-2'>Community</h5>
            <ul className='text-[#BDC4D1] text-sm space-y-1'>
              <li className='flex items-center'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/twitter-logo.svg`}
                  alt='Twitter'
                  className='h-4 w-4 mr-2 hover:text-[#EFF1F6]'
                />
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#EFF1F6]'
                >
                  Twitter
                </a>
              </li>
              <li className='flex items-center'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/linkedin-logo.svg`}
                  alt='LinkedIn'
                  className='h-4 w-4 mr-2 hover:text-[#EFF1F6]'
                />
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#EFF1F6]'
                >
                  LinkedIn
                </a>
              </li>
              <li className='flex items-center'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/github-logo.svg`}
                  alt='GitHub'
                  className='h-4 w-4 mr-2 hover:text-[#EFF1F6]'
                />
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#EFF1F6]'
                >
                  GitHub
                </a>
              </li>
              <li className='flex items-center'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/discourse-logo.svg`}
                  alt='Discourse'
                  className='h-4 w-4 mr-2 hover:text-[#EFF1F6]'
                />
                <a
                  href='https://discourse.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#EFF1F6]'
                >
                  Discourse
                </a>
              </li>
            </ul>
          </div>
          <div className='mx-4'>
            <h5 className='text-white text-sm font-semibold mb-2'>Legal</h5>
            <ul className='text-[#BDC4D1] text-sm space-y-1'>
              <li>
                <a href='/privacy-policy' className='hover:text-[#EFF1F6]'>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href='/terms-of-service' className='hover:text-[#EFF1F6]'>
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container mx-auto text-left text-[#BDC4D1] text-sm mt-8'>
        DevOptima 2023 © All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
