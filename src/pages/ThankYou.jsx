// src/pages/ThankYou.jsx
import { ArrowLeft, CheckCircle2, Calendar, Clock, Mail, Video } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function formatDateTime(value) {
  if (!value) return "";
  // If it's already a readable string, show it.
  // If it looks like an ISO date, Date() will handle.
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ThankYou() {
  const location = useLocation();
  const details = location?.state?.details;

  const hasDetails =
    details &&
    (details.name || details.email || details.startTime || details.meetingLink || details.calendarName);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-[900px] px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-200">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-sm font-semibold text-slate-600">Booking confirmed</p>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Thank you! Your call is booked.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            You’ll receive an email confirmation with the meeting details. If you don’t see it within a few minutes,
            check your <span className="font-semibold">spam or junk folder</span>.
          </p>

          {hasDetails && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Booking details</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {details.calendarName ? (
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <Calendar className="mt-0.5 h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Calendar</p>
                      <p className="text-sm text-slate-600">{details.calendarName}</p>
                    </div>
                  </div>
                ) : null}

                {details.startTime ? (
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <Clock className="mt-0.5 h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Start time</p>
                      <p className="text-sm text-slate-600">{formatDateTime(details.startTime)}</p>
                      {details.timezone ? (
                        <p className="mt-0.5 text-xs text-slate-400">{details.timezone}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {details.email ? (
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <Mail className="mt-0.5 h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">{details.email}</p>
                    </div>
                  </div>
                ) : null}

                {details.meetingLink ? (
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <Video className="mt-0.5 h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Meeting link</p>
                      <a
                        href={details.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-[#289efd] hover:underline"
                      >
                        Open meeting link
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">What happens next?</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                We’ll review your goals and recommend the right VA setup.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                You’ll get clear next steps for onboarding and kickoff.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                We’ll confirm details and timeline after the call.
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700 sm:w-auto"
            >
              Back to Home
            </Link>

            <Link
              to="/schedule"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Book another time
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Need help? Email{" "}
            <a
              href="mailto:support@eminencevasolutions.com"
              className="font-semibold text-[#289efd] hover:underline"
            >
              support@eminencevasolutions.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}