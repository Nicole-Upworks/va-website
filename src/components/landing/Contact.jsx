import { useEffect, useRef } from "react";
import { ShieldCheck, Clock, MapPin } from "lucide-react";

const GHL_FORM_ID = "T45vz0d2Gf47HpTOk6Jf";
const GHL_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const IFRAME_ID = `inline-${GHL_FORM_ID}`;
const IFRAME_SRC = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export default function Contact({
  bookingDate = "",
  bookingTime = "",
  timezone = "",
}) {
  const iframeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await loadScriptOnce(GHL_EMBED_SCRIPT);
        if (cancelled) return;

        // Force reflow so GHL recalculates container width
        setTimeout(() => {
          const iframe = iframeRef.current;
          if (!iframe) return;

          iframe.style.visibility = "hidden";
          // eslint-disable-next-line no-unused-expressions
          iframe.offsetHeight;
          iframe.style.visibility = "visible";
        }, 300);
      } catch (err) {
        console.error("Failed to load GHL embed script:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const showBooking = Boolean(bookingDate && bookingTime);

  return (
    <section id="contact" className="relative bg-white py-20">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[980px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Get Matched With a VA
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Request a Free Consultation
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Fill out the form and we’ll get back to you shortly with the best VA
            match based on your workflow, volume, and goals.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-10 min-w-0 w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          {showBooking && (
            <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Preferred time
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {bookingDate} — {bookingTime} ({timezone})
              </p>
              <p className="mt-1 text-xs text-slate-500">
                This is a preferred time request. Our team will confirm
                availability.
              </p>
            </div>
          )}

          <div className="min-w-0 w-full">
            <iframe
              ref={iframeRef}
              src={IFRAME_SRC}
              id={IFRAME_ID}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Consult Form"
              data-layout-iframe-id={IFRAME_ID}
              data-form-id={GHL_FORM_ID}
              title="Consult Form"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "100%",
                height: "560px",
                border: "none",
                overflow: "visible",
              }}
            />
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">
            By submitting, you agree to be contacted by Eminence VA Solutions.
          </p>
        </div>

        {/* Details BELOW (single column) */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Confidentiality-first
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    NDA support available upon request.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Fast matching
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    We respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    US & Canada
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Serving businesses across North America.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Extra note */}
          <p className="mt-6 text-center text-sm text-slate-600">
            Not sure what to select? Choose the closest option and list your
            tasks—our team will recommend the best VA profile for your needs.
          </p>
        </div>
      </div>
    </section>
  );
}