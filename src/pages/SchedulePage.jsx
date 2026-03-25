// src/pages/SchedulePage.jsx
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { Calendar, CheckCircle2, Clock, Video } from "lucide-react";

const CALENDAR_IFRAME_SRC =
  "https://api.leadconnectorhq.com/widget/booking/ICnHRj459jDEQDNFZUEq";

const GHL_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Try to normalize/parse message payloads defensively
function normalizeMessageData(data) {
  // Sometimes it's already an object
  if (data && typeof data === "object") return data;

  // Sometimes it's a JSON string
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === "object") return parsed;
    } catch {
      // ignore
    }
    return { raw: data };
  }

  return { raw: String(data) };
}

// Heuristic: detect booking completion signal
function isBookingSuccessMessage(msg) {
  const str = JSON.stringify(msg).toLowerCase();

  // common keywords seen in embeds
  const hasBookingIntent =
    str.includes("booking") ||
    str.includes("appointment") ||
    str.includes("calendar");

  const hasSuccessSignal =
    str.includes("confirmed") ||
    str.includes("completed") ||
    str.includes("success") ||
    str.includes("booked") ||
    str.includes("scheduled") ||
    str.includes("created");

  return hasBookingIntent && hasSuccessSignal;
}

// Extract any useful details if present
function extractBookingDetails(msg) {
  // Different accounts/widgets send different shapes.
  // We'll try a few common paths.
  const contact =
    msg?.contact ||
    msg?.payload?.contact ||
    msg?.data?.contact ||
    msg?.meta?.contact;

  const appointment =
    msg?.appointment ||
    msg?.payload?.appointment ||
    msg?.data?.appointment ||
    msg?.meta?.appointment;

  const startTime =
    appointment?.startTime ||
    appointment?.start_time ||
    msg?.startTime ||
    msg?.start_time ||
    msg?.payload?.startTime ||
    msg?.payload?.start_time;

  const endTime =
    appointment?.endTime ||
    appointment?.end_time ||
    msg?.endTime ||
    msg?.end_time ||
    msg?.payload?.endTime ||
    msg?.payload?.end_time;

  const timezone =
    appointment?.timezone ||
    msg?.timezone ||
    msg?.payload?.timezone;

  const meetingLink =
    appointment?.meetingLink ||
    appointment?.meeting_link ||
    msg?.meetingLink ||
    msg?.meeting_link;

  const calendarName =
    appointment?.calendarName ||
    appointment?.calendar_name ||
    msg?.calendarName ||
    msg?.calendar_name;

  const name =
    contact?.name ||
    `${contact?.firstName || ""} ${contact?.lastName || ""}`.trim() ||
    msg?.name;

  const email = contact?.email || msg?.email;

  return {
    name: name || "",
    email: email || "",
    calendarName: calendarName || "",
    startTime: startTime || "",
    endTime: endTime || "",
    timezone: timezone || "",
    meetingLink: meetingLink || "",
    // Keep raw around for debugging if needed
    raw: msg,
  };
}

const benefits = [
  {
    icon: Clock,
    title: "30-Minute Call",
    description: "Quick, focused session to understand your needs",
  },
  {
    icon: Video,
    title: "No Pressure",
    description: "Casual conversation about your business goals",
  },
  {
    icon: CheckCircle2,
    title: "Custom Plan",
    description: "Walk away with clear next steps",
  },
];

export default function SchedulePage() {
  const navigate = useNavigate();

  const allowedOrigins = useMemo(
    () => new Set(["https://api.leadconnectorhq.com", "https://link.msgsndr.com"]),
    []
  );

  useEffect(() => {
    loadScriptOnce(GHL_SCRIPT).catch((err) =>
      console.error("Failed to load GHL script:", err)
    );
  }, []);

  useEffect(() => {
    const onMessage = (event) => {
      // Optional origin check (recommended), but some setups may post from different subdomains.
      // If your redirect never fires, temporarily console.log(event.origin) and add it.
      if (event?.origin && !allowedOrigins.has(event.origin)) {
        // You can loosen this if needed:
        // return;
      }

      const msg = normalizeMessageData(event.data);

      // For debugging:
      // console.log("GHL message:", event.origin, msg);

      if (!isBookingSuccessMessage(msg)) return;

      const details = extractBookingDetails(msg);

      navigate("/thank-you", {
        replace: true,
        state: {
          source: "booking",
          details,
        },
      });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate, allowedOrigins]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(40, 158, 253, 0.05) 0%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]">
              <Calendar className="h-3.5 w-3.5" />
              Free Consultation
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Book Your Free{" "}
              <span className="bg-gradient-to-r from-[#289efd] to-[#1e7dd8] bg-clip-text text-transparent">
                Strategy Call
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Choose a time that works for you. Once booked, you'll receive
              instant confirmation and meeting details.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                    <Icon className="h-6 w-6 text-[#289efd]" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#289efd] shadow-lg shadow-[#289efd]/30">
                  <Calendar className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Select Your Preferred Time
                  </h2>
                  <p className="text-xs text-slate-500">
                    All times displayed in your local timezone
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <iframe
                src={CALENDAR_IFRAME_SRC}
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "750px",
                }}
                scrolling="no"
                id="ICnHRj459jDEQDNFZUEq"
                title="Eminence VA Strategy Call Booking"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-6 py-5 text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <CheckCircle2
                  className="h-5 w-5 text-emerald-500"
                  strokeWidth={2.5}
                />
                <p className="text-sm font-semibold text-slate-900">
                  Trusted by 5,000+ businesses this year
                </p>
              </div>
              <p className="text-xs text-slate-600">
                No credit card required • Cancel anytime • Instant confirmation
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl text-center">
            <p className="text-xs text-slate-400">
              Questions? Email us at{" "}
              <a
                href="mailto:support@eminencevasolutions.com"
                className="font-semibold text-[#289efd] transition-colors hover:text-[#1e7dd8]"
              >
                support@eminencevasolutions.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}