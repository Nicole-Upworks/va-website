export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About YourBrand
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help founders, startups, and growing businesses delegate smarter,
            operate faster, and scale without hiring full-time overhead.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          
          {/* Left Content */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Our Mission
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission is simple — give businesses access to reliable,
              highly-trained assistants who integrate seamlessly into their
              workflow. We remove operational bottlenecks so you can focus
              on growth.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Why We Exist
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Hiring, training, and managing staff takes time and capital.
              We provide a flexible alternative that delivers professional
              support without long-term commitments.
            </p>
          </div>

          {/* Right Visual Block */}
          <div className="rounded-2xl bg-slate-100 p-8">
            <div className="aspect-video w-full rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}