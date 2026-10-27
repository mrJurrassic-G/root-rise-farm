
import type { ReactNode } from "react";
const photos = {
  hero: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85",
  coffee: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1000&q=85",
  bananas: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=85",
  landscape: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
};

function FarmLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Root and Rise Farm botanical logo"
        className="h-12 w-12 shrink-0"
      >
        <circle
          cx="32"
          cy="32"
          r="29"
          fill={light ? "#244A32" : "#123B2A"}
          stroke="#D8AD43"
          strokeWidth="1.5"
        />
        <g
          fill="none"
          stroke="#E9C45E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 49V17" />
          <path d="M32 34C22 32 17 25 17 19C26 20 31 26 32 34Z" />
          <path d="M32 28C41 25 46 19 46 14C37 15 32 21 32 28Z" />
          <path d="M32 43C23 42 19 36 18 31C26 32 31 37 32 43Z" />
          <path d="M32 39C40 37 45 32 46 26C38 28 33 33 32 39Z" />
          <path d="M25 51H39" />
        </g>
      </svg>
      <span className="leading-none">
        <span
          className={`block whitespace-nowrap font-serif text-xl tracking-tight ${
            light ? "text-[#F8F4E8]" : "text-[#173C2B]"
          }`}
        >
          ROOT &amp; RISE
        </span>
        <span className="mt-1 block text-center text-xs font-semibold tracking-[0.34em] text-[#B88925]">
          FARM
        </span>
      </span>
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="ml-2 inline-block">→</span>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B17D19]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5EA] text-[#173B2B]">
      {/* Navigation */}
      <header className="relative z-10 border-b border-[#E5E0D2] bg-[#F8F5EA]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 md:px-8 xl:px-12">
          <a href="#home" aria-label="Root and Rise Farm home">
            <FarmLogo />
          </a>

          <div className="hidden items-center gap-2 border-l border-[#D9D2C1] pl-5 text-[10px] leading-4 text-[#554F40] lg:flex">
            <span className="text-base text-[#B17D19]">⌖</span>
            <span>Bwelampindi, Kiwoko,<br />Uganda</span>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-[12px] font-medium text-[#292D24] xl:flex"
          >
            <a className="border-b-2 border-[#C89B37] pb-1" href="#home">Home</a>
            <a className="transition hover:text-[#B17D19]" href="#story">Our Story</a>
            <a className="transition hover:text-[#B17D19]" href="#crops">Our Crops</a>
            <a className="transition hover:text-[#B17D19]" href="#approach">Our Approach</a>
            <a className="transition hover:text-[#B17D19]" href="#partnerships">Partnerships</a>
            <a className="transition hover:text-[#B17D19]" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-[#123B2A] px-4 py-3 text-[11px] font-semibold text-white transition hover:bg-[#24543C] sm:px-5"
          >
            Connect with us <Arrow />
          </a>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex gap-5 overflow-x-auto border-t border-[#E5E0D2] px-5 py-3 text-xs font-medium xl:hidden"
        >
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#crops">Our Crops</a>
          <a href="#approach">Our Approach</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate min-h-[570px] bg-[#102F22] bg-cover bg-center text-white md:min-h-[560px]"
        style={{ backgroundImage: `url("${photos.hero}")` }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#103421]/75 to-[#102C20]/15" />
        <div className="mx-auto flex min-h-[570px] max-w-[1440px] items-center px-6 py-20 md:min-h-[560px] md:px-12">
          <div className="max-w-[650px]">
            <Eyebrow>Rooted in Uganda&nbsp; · &nbsp;Growing with purpose</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[76px]">
              Growing today.
              <span className="mt-1 block text-[#F3C65D]">
                Nurturing tomorrow.
              </span>
            </h1>
            <p className="mt-6 max-w-[520px] text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Welcome to Root &amp; Rise Farm in Bwelampindi, Kiwoko, Uganda.
              We are developing a coffee and banana farm with a long-term
              vision for productive agriculture, responsible land care,
              and transparent farm management.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#crops"
                className="rounded-full bg-[#F4C65D] px-6 py-3.5 text-sm font-semibold text-[#183B2A] transition hover:bg-[#FFDA7B]"
              >
                Explore our farm <Arrow />
              </a>
              <a
                href="#story"
                className="rounded-full border border-white/70 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Our story <Arrow />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/90 sm:gap-5">
              <span>◉ &nbsp;Coffee</span>
              <span className="h-5 border-l border-white/50" />
              <span>♧ &nbsp;Bananas</span>
              <span className="h-5 border-l border-white/50" />
              <span>♧ &nbsp;Responsible agriculture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="mx-auto grid max-w-[1320px] items-center gap-9 px-6 py-14 md:grid-cols-[0.95fr_1.15fr] md:px-10 md:py-16"
      >
        <div>
          <Eyebrow>The roots of our work</Eyebrow>
          <h2 className="mt-3 max-w-[480px] font-serif text-3xl leading-tight sm:text-4xl">
            Agriculture built with patience, purpose, and care.
          </h2>
          <p className="mt-4 max-w-[470px] text-sm leading-6 text-[#525D50]">
            Root &amp; Rise Farm is developing its coffee and banana operations
            with a focus on practical farm management and continuous improvement.
            We believe that lasting agricultural progress comes from caring
            for the land while understanding what happens on the farm every day.
          </p>
          <a
            href="#approach"
            className="mt-5 inline-flex rounded-full bg-[#123B2A] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#24543C]"
          >
            Learn more about our story <Arrow />
          </a>
        </div>

        <div className="grid items-center gap-4 sm:grid-cols-[1.35fr_0.85fr]">
          <img
            src={photos.coffee}
            alt="Coffee plants and coffee cherries"
            className="h-[280px] w-full rounded-md object-cover sm:h-[310px]"
          />
          <aside className="rounded-lg bg-[#E8E9D5] p-6 sm:px-5 sm:py-8">
            <svg viewBox="0 0 56 56" className="mb-3 h-12 w-12" fill="none" stroke="#234C34" strokeWidth="1.4">
              <path d="M28 49V13M28 34C14 31 10 22 11 15C22 17 27 24 28 34ZM28 27C39 25 45 17 44 10C34 13 29 19 28 27ZM28 43C17 42 12 35 12 28C22 30 27 36 28 43ZM28 39C38 37 44 30 44 23C34 26 29 32 28 39Z" />
            </svg>
            <h3 className="font-serif text-2xl leading-tight">
              Healthy soil.
              <br />Stronger crops.
              <br />Brighter futures.
            </h3>
            <div className="my-4 h-0.5 w-9 bg-[#B88B2B]" />
            <p className="text-sm leading-5 text-[#596353]">
              We’re building a farm that creates value for people, the land,
              and future generations.
            </p>
          </aside>
        </div>
      </section>

      {/* Crops */}
      <section id="crops" className="bg-[#ECECDD]">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-6 py-14 md:grid-cols-[0.9fr_1.7fr_0.7fr] md:items-center md:px-10 md:py-16">
          <div>
            <Eyebrow>What we grow</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Two crops. One long-term vision.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#596353]">
              We are building a considered approach to crop production and
              farm development, one season at a time.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-[#123B2A] px-6 py-3 text-xs font-semibold text-white hover:bg-[#24543C]"
            >
              Our crops <Arrow />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="overflow-hidden rounded-lg bg-[#F8F5EA]">
              <img
                src={photos.coffee}
                alt="Coffee cherries growing on a branch"
                className="h-40 w-full object-cover sm:h-44"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl">◐ &nbsp;Coffee</h3>
                <p className="mt-2 text-xs leading-5 text-[#596353]">
                  Quality beans. Healthy soil. Lasting value.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg bg-[#F8F5EA]">
              <img
                src={photos.bananas}
                alt="Green bananas growing on a banana plant"
                className="h-40 w-full object-cover sm:h-44"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl">♧ &nbsp;Bananas</h3>
                <p className="mt-2 text-xs leading-5 text-[#596353]">
                  Diverse crops. Greater resilience. More opportunity.
                </p>
              </div>
            </article>
          </div>

          <aside className="border-t border-[#C7CCB9] pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <span className="text-4xl text-[#AAB38B]">❧</span>
            <h3 className="mt-2 font-serif text-2xl">Responsible growth</h3>
            <div className="my-3 h-0.5 w-9 bg-[#B88B2B]" />
            <p className="text-sm leading-5 text-[#596353]">
              Working toward better farm records, thoughtful resource use,
              and measurable environmental and social impact.
            </p>
          </aside>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-[#123B2A] text-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-6 py-12 md:grid-cols-[1.25fr_2fr] md:items-center md:px-10 md:py-14">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
              Better farming starts with better understanding.
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-3">
            <article className="border-t border-white/30 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <span className="text-2xl">▤</span>
              <h3 className="mt-3 font-serif text-xl">Farm records</h3>
              <p className="mt-2 text-xs leading-5 text-white/75">
                A future foundation for tracking activities and inputs.
              </p>
            </article>
            <article className="border-t border-white/30 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <span className="text-2xl">♧</span>
              <h3 className="mt-3 font-serif text-xl">Land stewardship</h3>
              <p className="mt-2 text-xs leading-5 text-white/75">
                A focus on soil care and responsible crop management.
              </p>
            </article>
            <article className="border-t border-white/30 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <span className="text-2xl">♙</span>
              <h3 className="mt-3 font-serif text-xl">Smart agriculture</h3>
              <p className="mt-2 text-xs leading-5 text-white/75">
                Technology to be explored as the farm develops.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Partnerships and contact */}
      <section id="partnerships" className="mx-auto grid max-w-[1320px] gap-8 px-6 py-14 md:grid-cols-[1fr_0.95fr_1fr] md:items-center md:px-10 md:py-16">
        <div>
          <Eyebrow>Partnerships</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight">
            Growing together for greater impact.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#596353]">
            We welcome conversations with investors, agricultural organizations,
            and collaborators who share our commitment to sustainable agriculture
            and rural development.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full border border-[#234C34] px-5 py-3 text-xs font-semibold hover:bg-[#E8E9D5]"
          >
            Partner with us <Arrow />
          </a>
        </div>

        <img
          src={photos.landscape}
          alt="Green agricultural landscape"
          className="h-[220px] w-full rounded-md object-cover"
        />

        <div id="contact" className="border-t border-[#D5D1C4] pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <Eyebrow>Let’s connect</Eyebrow>
          <h2 className="mt-3 font-serif text-2xl leading-tight">
            Interested in our journey?
          </h2>
          <p className="mt-3 text-sm leading-5 text-[#596353]">
            We welcome conversations with agricultural partners, researchers,
            and organizations interested in our farm’s development.
          </p>
          <a
            href="mailto:hello@rootandrisefarm.com"
            className="mt-4 inline-flex rounded-full bg-[#123B2A] px-5 py-3 text-xs font-semibold text-white hover:bg-[#24543C]"
          >
            ✉ &nbsp; Contact Root &amp; Rise <Arrow />
          </a>
          <p className="mt-3 text-[11px] leading-4 text-[#786B54]">
            Replace this placeholder email with a verified farm contact
            before publishing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#392719] text-[#F8F5EA]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <a href="#home" aria-label="Root and Rise Farm home">
            <FarmLogo light />
          </a>
          <p className="text-xs text-white/85">
            ⌖ &nbsp; Bwelampindi, Kiwoko, Uganda
          </p>
          <p className="text-xs text-white/85">♧ &nbsp; Growing with purpose.</p>
        </div>
      </footer>
    </main>
  );
}
