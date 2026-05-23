const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Source', href: 'https://github.com/itkrivoshei/devoptima-landing' },
];

const Footer = () => {
  return (
    <footer className='border-t border-white/10 py-10'>
      <div className='container flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
        <a href='#home' className='inline-flex items-center' aria-label='DevOptima home'>
          <img
            src={`${import.meta.env.BASE_URL}images/logoDevOptima.svg`}
            alt='DevOptima logo'
            className='h-9 w-auto'
          />
        </a>

        <nav aria-label='Footer navigation'>
          <ul className='flex flex-wrap gap-5 text-sm text-slate-400'>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='transition hover:text-white'
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
