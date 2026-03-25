export default function TrustedBy() {
  const logos = [
    {
      name: "Harvard",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg",
    },
    {
      name: "DoorDash",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/DoorDash_Logo.svg",
    },
    {
      name: "Chick-fil-A",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      name: "UC Berkeley",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/82/University_of_California%2C_Berkeley_logo.svg",
    },
    {
      name: "Compass",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/CompassInc_Logo.svg",
    },
    {
      name: "Keller Williams",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Keller_Williams_Realty_logo.svg",
    },
    {
      name: "Google",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    // {
    //   name: "Shopify",
    //   url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Shopify_logo_2018.svg",
    // },
    // {
    //   name: "Stripe",
    //   url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Stripe_Logo%2C_revised_2016.png",
    // },
  ];

  // Duplicate for seamless infinite scroll
  const track = [...logos, ...logos];

  return (
    <section className="overflow-x-hidden border-y border-slate-100 bg-white py-12">
      <div className="mx-auto mb-8 max-w-[1350px] px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by thousands of companies around the world
        </p>
      </div>

      <div className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Marquee track */}
        <div
          className="flex w-max animate-marquee gap-16 px-6 items-center"
          style={{ animationDuration: "32s" }}
        >
          {track.map((company, i) => (
            <div
              key={i}
              className="flex flex-none items-center justify-center opacity-70 transition hover:opacity-100"
            >
              <img
                src={company.url}
                alt={company.name}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}