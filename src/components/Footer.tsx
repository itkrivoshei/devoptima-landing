const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col gap-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <a href="#top" className="inline-flex items-center transition-opacity hover:opacity-80">
          <img
            src={`${import.meta.env.BASE_URL}images/logoDevOptima.svg`}
            alt="DevOptima"
            className="h-9 w-auto"
          />
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-5">
            <li><a className="hover:text-white" href="#services">Services</a></li>
            <li><a className="hover:text-white" href="#solutions">Solutions</a></li>
            <li><a className="hover:text-white" href="#feedback">Feedback</a></li>
          </ul>
        </nav>

        <p>© 2026 DevOptima</p>
      </div>
    </footer>
  );
};

export default Footer;
