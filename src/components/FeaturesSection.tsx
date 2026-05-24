import { getAssetPath } from '../utils/assets';

const features = [
  {
    title: 'DevOps transformation',
    description: 'Practical improvements for delivery, environments, and release flow.',
    icon: 'icon-devops-transformation.svg',
  },
  {
    title: 'Efficient operations',
    description: 'Cleaner workflows for repeatable infrastructure and support tasks.',
    icon: 'icon-efficient-operations.svg',
  },
  {
    title: 'CI/CD implementation',
    description: 'Build, test, and deployment pipelines for static and application workloads.',
    icon: 'icon-cicd-implementation.svg',
  },
  {
    title: 'Automation',
    description: 'Small automation layers that reduce manual release and maintenance work.',
    icon: 'icon-automation-mastery.svg',
  },
];

const FeaturesSection = () => {
  return (
    <section id='about' className='section-padding'>
      <div className='container grid items-center gap-12 lg:grid-cols-2'>
        <div className='rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-soft'>
          <img
            alt='Metrics dashboard illustration'
            src={getAssetPath('images/dashboard-metrics.svg')}
            className='h-auto w-full'
          />
        </div>

        <div>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong'>
            Overview
          </p>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Landing page for a DevOps service concept
          </h2>
          <p className='mt-5 text-lg leading-8 text-slate-300'>
            The page presents the core areas of a modern delivery service: automation,
            deployment, cloud infrastructure, and operating discipline.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {features.map((feature) => (
              <article key={feature.title} className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                <img
                  alt=''
                  src={getAssetPath(`images/${feature.icon}`)}
                  className='mb-3 h-12 w-12'
                  aria-hidden='true'
                />
                <h3 className='font-semibold text-white'>{feature.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-400'>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;