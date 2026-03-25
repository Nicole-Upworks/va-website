import { useState } from "react";
import { MessageCircle, X, Send, Minus } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">

      {/* Chat window */}
      {open && !minimized && (
        <div className="w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 transition-all duration-300">

          {/* Header */}
          <div className="relative bg-slate-900 px-5 py-4">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-600/30 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    YB
                  </div>
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">YourBrand Support</p>
                  <p className="text-xs text-emerald-400">Online · Replies instantly</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setMinimized(true)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-700 hover:text-white"
                  aria-label="Minimize"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-700 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3 bg-slate-50 p-4 h-56 overflow-y-auto">
            {/* Bot message */}
            <div className="flex items-end gap-2">
              <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                YB
              </div>
              <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm border border-slate-100 text-sm text-slate-700 max-w-[85%]">
                👋 Hi there! Ready to find your perfect virtual assistant? Ask us anything.
              </div>
            </div>

            {/* Second message */}
            <div className="flex items-end gap-2">
              <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                YB
              </div>
              <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm border border-slate-100 text-sm text-slate-700 max-w-[85%]">
                You can also{" "}
                <a href="#contact" onClick={() => setOpen(false)} className="font-semibold text-blue-600 underline underline-offset-2">
                  book a free consultation
                </a>{" "}
                anytime. 🗓️
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-slate-100 bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setMessage("")}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
              />
              <button
                onClick={() => setMessage("")}
                className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-300">Powered by YourBrand · Response in &lt;1 min</p>
          </div>
        </div>
      )}

      {/* Minimized bar */}
      {open && minimized && (
        <div
          onClick={() => setMinimized(false)}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl transition hover:-translate-y-0.5"
        >
          <div className="relative">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              YB
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">YourBrand Support</p>
            <p className="text-[10px] text-emerald-500">Online · Click to open</p>
          </div>
          <X
            className="ml-1 h-3.5 w-3.5 text-slate-300 hover:text-slate-600"
            onClick={(e) => { e.stopPropagation(); setOpen(false); setMinimized(false); }}
          />
        </div>
      )}

      {/* Floating trigger button */}
      {!open && (
        <div className="relative">
          {/* Ping animation */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-blue-600" />
          </span>

          <button
            onClick={() => { setOpen(true); setMinimized(false); }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl shadow-slate-400/40 transition hover:-translate-y-1 hover:bg-slate-700 hover:shadow-2xl"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}