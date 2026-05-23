const feedback = [
  {
    quote: 'The layout keeps the service message direct and easy to scan.',
    name: 'John Smith',
    role: 'IT Director',
    image: 'john-smith.png',
  },
  {
    quote: 'The page is lightweight, responsive and clear enough for a landing task.',
    name: 'Jane Doe',
    role: 'Tech Lead',
    image: 'jane-doe.png',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="feedback" className="py-20">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#9DBBFF]">Feedback</p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Clean presentation with reusable cards.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {feedback.map((item) => (
            <figure key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7">
              <blockquote className="text-lg leading-8 text-text-secondary">“{item.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  alt={item.name}
                  src={`${import.meta.env.BASE_URL}images/${item.image}`}
                  className="h-12 w-12 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-text-secondary">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
