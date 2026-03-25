import promoVideo from "../../assets/prom-video.mp4";

export default function PromoVideo() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#289efd] to-[#0a3f82]">
      {/* subtle highlight like your card header */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft top highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
        {/* very subtle side glow */}
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            See How It Works
          </h2>

          <p className="mt-3 text-base leading-relaxed text-white/85 md:text-lg">
            A quick walkthrough of how we help teams save time and scale faster
            with dedicated virtual support.
          </p>
        </div>

        {/* video card */}
        <div className="mt-10 mx-auto max-w-5xl">
          <div className="relative rounded-[28px] border border-white/25 bg-white/10 p-4 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]">
            {/* gentle outer glow */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-[30px] bg-white/20 blur-[12px]" />

            <div className="relative overflow-hidden rounded-2xl bg-black/90 ring-1 ring-white/20">
              <video
                src={promoVideo}
                controls
                preload="metadata"
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between px-1">
              <p className="text-xs text-white/80">
                Trusted by founders, agencies, and growing teams worldwide.
              </p>
              <span className="text-xs text-white/65">HD • ~2 min</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex justify-center">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0a3f82] transition hover:opacity-95"
            >
              View Pricing
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="#contact"
              className="ml-3 inline-flex items-center justify-center rounded-xl border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}