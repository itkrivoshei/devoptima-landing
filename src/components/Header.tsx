const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Feedback', href: '#feedback' },
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0811]/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img
            alt="DevOptima"
            src={`${import.meta.env.BASE_URL}images/logoDevOptima.svg`}
            className="h-9 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-[#3F57DA]/60 bg-[#101333] px-5 py-2 text-sm font-semibold text-white transition hover:border-[#6D9CF6] hover:bg-[#243BB9]"
        >
          Get started
        </a>
      </nav>
    </header>
  );
};

export default Header;
