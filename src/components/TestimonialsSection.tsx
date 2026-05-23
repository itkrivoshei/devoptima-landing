const workflowSteps = [
  {
    title: '01 · Plan',
    description: 'Define the deployment target, static assets, routing, and release path.',
  },
  {
    title: '02 · Build',
    description: 'Use typed React components, Tailwind utilities, and a reproducible production build.',
  },
  {
    title: '03 · Deploy',
    description: 'Publish the generated static bundle through GitHub Actions and GitHub Pages.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id='process' className='section-padding'>
      <div className='container'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong'>
              Process
            </p>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Simple static-site delivery flow
            </h2>
            <p className='mt-5 text-lg leading-8 text-slate-300'>
              The project stays intentionally small: clean UI components, static build output, and
              automated publishing.
            </p>
          </div>

          <div className='grid gap-4'>
            {workflowSteps.map((step) => (
              <article key={step.title} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
                <h3 className='text-lg font-semibold text-white'>{step.title}</h3>
                <p className='mt-2 leading-7 text-slate-400'>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
