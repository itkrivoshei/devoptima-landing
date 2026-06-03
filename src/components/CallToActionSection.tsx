const CallToActionSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/20 via-surface to-background p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Build, test, deploy, repeat
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The page uses a conventional static deployment flow: React source
            code, production build, GitHub Actions, and GitHub Pages hosting.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/itkrivoshei/devoptima-landing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
            >
              View source
            </a>
            <a
              href="#home"
              className="inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
