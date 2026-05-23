const features = [
  {
    title: 'Pipeline automation',
    text: 'Build, test and release changes with less manual work.',
  },
  {
    title: 'Infrastructure clarity',
    text: 'Keep environments easier to understand, repeat and maintain.',
  },
  {
    title: 'Operational visibility',
    text: 'Surface key metrics before small issues become expensive problems.',
  },
  {
    title: 'Reliable delivery',
    text: 'Improve release confidence with consistent engineering routines.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
          <img
            alt="Dashboard metrics illustration"
            src={`${import.meta.env.BASE_URL}images/dashboard-metrics.svg`}
            className="w-full rounded-3xl"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#9DBBFF]">Services</p>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Practical DevOps work for faster software delivery.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">
            The page presents common DevOps service areas in a simple, readable structure.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
