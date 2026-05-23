const HeroSection = () => {
  return (
    <section id="top" className="relative px-0 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#3F57DA]/40 bg-white/5 px-4 py-2 text-sm text-[#9DBBFF]">
            DevOps landing concept
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Ship cleaner systems with better delivery flow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            A focused landing page for a DevOps service: clear messaging, responsive layout and a static production build.
          </p>

          <form className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 sm:flex-row" noValidate>
            <label htmlFor="email" className="sr-only">
              Business email
            </label>
            <input
              id="email"
              className="min-h-12 flex-1 rounded-xl border border-transparent bg-transparent px-4 text-white outline-none placeholder:text-slate-500 focus:border-[#3F57DA]/60"
              placeholder="Business email"
              type="email"
              name="email"
            />
            <button className="min-h-12 rounded-xl bg-[#243BB9] px-6 font-semibold text-white transition hover:bg-[#3F57DA]">
              Request access
            </button>
          </form>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-blue-950/30">
          <img
            alt="Code editor illustration"
            src={`${import.meta.env.BASE_URL}images/code-image.svg`}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
