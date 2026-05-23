const solutions = [
  {
    title: 'CI/CD',
    text: 'Automated checks and deployment steps for predictable releases.',
    image: 'icon-ci-cd.svg',
  },
  {
    title: 'Cloud infrastructure',
    text: 'Scalable environments with cleaner infrastructure operations.',
    image: 'icon-cloud-solutions.svg',
  },
  {
    title: 'DevOps transformation',
    text: 'Workflow improvements across development and operations teams.',
    image: 'icon-devops-transformation.svg',
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#9DBBFF]">Solutions</p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Simple structure, clear value, no unnecessary noise.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Each section is kept focused so the page stays easy to scan on desktop and mobile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#3F57DA]/50">
              <img
                alt=""
                aria-hidden="true"
                src={`${import.meta.env.BASE_URL}images/${solution.image}`}
                className="mb-6 h-12 w-12"
              />
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{solution.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
