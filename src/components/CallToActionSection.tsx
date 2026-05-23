const CallToActionSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="rounded-[2rem] border border-[#3F57DA]/40 bg-[#101333] px-6 py-12 text-center md:px-12">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to improve the delivery workflow?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
            Final section with a simple call to action and no fake complexity.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10" href="#services">
              View services
            </a>
            <a className="rounded-full bg-[#243BB9] px-6 py-3 font-semibold text-white transition hover:bg-[#3F57DA]" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
