import { getAssetPath } from '../utils/assets';

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
];

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl'>
      <nav className='container flex h-16 items-center justify-between' aria-label='Main navigation'>
        <a href='#home' className='flex items-center gap-3' aria-label='DevOptima home'>
          <img
            alt=''
            aria-hidden='true'
            src={getAssetPath('images/logoDevOptima.svg')}
            className='h-9 w-auto'
          />
        </a>

        <ul className='hidden items-center gap-8 md:flex'>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className='text-sm font-medium text-slate-300 transition hover:text-white' href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href='#contact'
          className='rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/15'
        >
          Get started
        </a>
      </nav>
    </header>
  );
};

export default Header;