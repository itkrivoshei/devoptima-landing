import { getAssetPath } from '../utils/assets';

const deploymentStages = ['Build', 'Test', 'Deploy'];

const HeroSection = () => {
  return (
    <section id='home' className='section-padding pt-32'>
      <div className='container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]'>
        <div>
          <p className='mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-strong'>
            Cloud automation · CI/CD · delivery workflows
          </p>

          <h1 className='max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl'>
            Modern DevOps delivery for faster product teams
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            A clean landing page concept for a DevOps services company, focused on automation,
            deployment pipelines, cloud infrastructure, and operational reliability.
          </p>

          <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#services'
              className='inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-strong'
            >
              View services
            </a>
            <a
              href='#process'
              className='inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:bg-white/10'
            >
              See workflow
            </a>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 rounded-[2rem] bg-accent/20 blur-3xl' aria-hidden='true' />
          <div className='relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-soft'>
            <img
              alt='Code and deployment dashboard illustration'
              src={getAssetPath('images/code-image.svg')}
              className='h-auto w-full'
            />
            <ol className='mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3' aria-label='Deployment stages'>
              {deploymentStages.map((stage) => (
                <li key={stage} className='rounded-2xl border border-accent/20 bg-background/70 px-4 py-3 text-center'>
                  {stage}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;