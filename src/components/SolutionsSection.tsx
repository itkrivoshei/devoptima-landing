import { getAssetPath } from '../utils/assets';

const services = [
  {
    title: 'CI/CD pipelines',
    description: 'Build, test, and deploy changes with a predictable release path.',
    icon: 'icon-ci-cd.svg',
  },
  {
    title: 'Cloud infrastructure',
    description: 'Structure cloud resources for maintainability, observability, and scale.',
    icon: 'icon-cloud-solutions.svg',
  },
  {
    title: 'Quality automation',
    description: 'Add automated checks to detect broken changes before production.',
    icon: 'icon-automated-testing.svg',
  },
];

const SolutionsSection = () => {
  return (
    <section id='services' className='section-padding'>
      <div className='container'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong'>
            Services
          </p>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Core delivery and infrastructure workflows
          </h2>
          <p className='mt-5 text-lg leading-8 text-slate-300'>
            Three focused areas that keep the landing page clear and easy to scan.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-3'>
          {services.map((service) => (
            <article
              key={service.title}
              className='rounded-[1.5rem] border border-white/10 bg-surface/70 p-7 shadow-soft transition hover:-translate-y-1 hover:border-accent/40'
            >
              <img
                alt=''
                src={getAssetPath(`images/${service.icon}`)}
                className='mb-5 h-14 w-14'
                aria-hidden='true'
              />
              <h3 className='text-xl font-semibold text-white'>{service.title}</h3>
              <p className='mt-3 text-sm leading-6 text-slate-400'>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;