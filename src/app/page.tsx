
const highlights = [
  {
    number: "01",
    title: "Coffee",
    description:
      "Building a productive coffee farm with care for the soil, the plants, and the long-term health of the land.",
  },
  {
    number: "02",
    title: "Bananas",
    description:
      "Growing bananas alongside our farming activities to support a diverse and resilient farm.",
  },
  {
    number: "03",
    title: "Responsible growth",
    description:
      "Working toward better farm records, thoughtful resource use, and measurable environmental and social impact.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EA] text-[#243B2A]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#244A32] text-xl text-[#F1C75B]">
            R
          </span>
          <span>
            <span className="block text-lg font-bold tracking-wide">
              ROOT &amp; RISE
            </span>
            <span className="block text-xs uppercase tracking-[0.25em] text-[#786B54]">
              Farm · Uganda
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#story" className="hover:text-[#A77B25]">Our story</a>
          <a href="#crops" className="hover:text-[#A77B25]">Our crops</a>
          <a href="#impact" className="hover:text-[#A77B25]">Our approach</a>
          <a href="#contact" className="hover:text-[#A77B25]">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#244A32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#183522]"
        >
          Connect with us
        </a>
      </header>

      <section className="relative isolate overflow-hidden bg-[#244A32] text-[#F7F4EA]">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32 lg:px-10">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#F1C75B]">
              Rooted in Uganda · Growing with purpose
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
              Growing today.
              <span className="mt-2 block text-[#F1C75B]">
                Nurturing tomorrow.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Welcome to Root &amp; Rise Farm in Bwelampindi, Kiwoko, Uganda.
              We are developing a coffee and banana farm with a long-term
              vision for productive agriculture, responsible land care, and
              transparent farm management.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#crops"
                className="rounded-full bg-[#F1C75B] px-7 py-4 font-semibold text-[#243B2A] transition hover:bg-[#ffda78]"
              >
                Explore our farm
              </a>
              <a
                href="#story"
                className="rounded-full border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Discover our story
              </a>
            </div>
            <p className="mt-8 text-sm text-white/60">
              Coffee · Bananas · Responsible agriculture
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/5 p-4 shadow-2xl">
              <div className="flex min-h-[330px] flex-col justify-between rounded-[1.5rem] bg-[#DCE4CF] p-7 text-[#244A32] md:min-h-[420px] md:p-10">
                <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                  Our vision
                </span>
                <div>
                  <p className="max-w-sm text-4xl font-semibold leading-tight md:text-5xl">
                    A farm that grows with the land.
                  </p>
                  <div className="mt-8 h-1 w-16 rounded-full bg-[#C39B35]" />
                  <p className="mt-5 max-w-sm leading-7 text-[#425744]">
                    Strong crops. Better records. A thoughtful future for
                    farming and the communities around it.
                  </p>
                </div>
                <span className="text-sm text-[#526650]">
                  Bwelampindi · Kiwoko · Uganda
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-white/60">
              A growing vision for Ugandan agriculture
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#98752D]">
          The roots of our work
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Agriculture built with patience, purpose, and care.
          </h2>
          <div>
            <p className="text-lg leading-8 text-[#596454]">
              Root &amp; Rise Farm is developing its coffee and banana
              operations with a focus on practical farm management and
              continuous improvement. We believe that lasting agricultural
              progress comes from caring for the land while understanding
              what happens on the farm every day.
            </p>
            <p className="mt-5 leading-7 text-[#596454]">
              As the farm grows, we aim to strengthen our record keeping,
              document our farming practices, and build relationships with
              partners who share a commitment to responsible agriculture.
            </p>
          </div>
        </div>
      </section>

      <section id="crops" className="bg-[#EAE9D9] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#98752D]">
            What we grow
          </p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">
              Two crops. One long-term vision.
            </h2>
            <p className="max-w-md leading-7 text-[#596454]">
              We are building a considered approach to crop production and
              farm development, one season at a time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#D5D7C8] bg-[#F7F4EA] p-7 md:p-8"
              >
                <span className="text-sm font-semibold text-[#A77B25]">
                  {item.number}
                </span>
                <h3 className="mt-7 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#596454]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-[2rem] bg-[#244A32] p-8 text-white md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F1C75B]">
            Our direction
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Better farming starts with better understanding.
            </h2>
            <p className="leading-8 text-white/75">
              Our ambition is to build reliable farm records, understand
              resource use, document progress, and explore appropriate
              technology for future monitoring. These are development goals;
              our systems and impact measurements will be introduced and
              reported as they are implemented and verified.
            </p>
          </div>
          <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Farm records</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A future foundation for tracking activities and inputs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Land stewardship</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A focus on soil care and responsible crop management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Smart agriculture</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Technology to be explored as the farm develops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="rounded-[2rem] border border-[#D8D8C9] p-8 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#98752D]">
            Let’s connect
          </p>
          <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">
                Interested in our journey?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#596454]">
                We welcome conversations with agricultural partners,
                researchers, and organizations interested in our farm’s
                development.
              </p>
            </div>
            <a
              href="mailto:hello@rootandrisefarm.com"
              className="inline-flex w-fit rounded-full bg-[#244A32] px-7 py-4 font-semibold text-white transition hover:bg-[#183522]"
            >
              Contact Root &amp; Rise
            </a>
          </div>
          <p className="mt-5 text-sm text-[#786B54]">
            Note: the email address above is a placeholder. Replace it with
            a verified farm contact before publishing.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#D8D8C9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#786B54] md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-semibold text-[#243B2A]">ROOT &amp; RISE FARM</p>
          <p>Bwelampindi, Kiwoko, Uganda</p>
          <p>Growing with purpose.</p>
        </div>
      </footer>
    </main>
  );
}
