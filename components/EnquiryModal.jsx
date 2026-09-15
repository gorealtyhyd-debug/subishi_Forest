"use client";

import { useEffect, useState } from "react";
import { useEnquiry } from "./EnquiryProvider";

export default function EnquiryModal() {
  const { open, closeEnquiry } = useEnquiry();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(function () {
    function onKey(e) {
      if (e.key === "Escape") closeEnquiry();
    }
    window.addEventListener("keydown", onKey);
    return function () {
      window.removeEventListener("keydown", onKey);
    };
  }, [closeEnquiry]);

  useEffect(function () {
    if (open) setSent(false);
  }, [open]);

  if (!open) return null;

  async function onSubmit(e) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    setBusy(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      // Fall through: the lead is still acknowledged locally.
    }
    setBusy(false);
    setSent(true);
  }

  return (
    <div className="fixed inset-0 z-[95] flex animate-fade items-center justify-center p-[4vw]">
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={closeEnquiry}
        className="absolute inset-0 cursor-default bg-forest/75 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Forest Edge enquiry"
        className="relative max-h-[88vh] w-full max-w-xl animate-pop overflow-y-auto border-t-[3px] border-forest bg-cream p-[clamp(26px,3.4vw,42px)]"
      >
        <button
          type="button"
          onClick={closeEnquiry}
          aria-label="Close"
          className="absolute right-4 top-4 h-9 w-9 rounded-full border border-forest/25 text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          ✕
        </button>

        {sent ? (
          <div className="py-7">
            <p className="mb-3 font-display text-3xl">Thank you.</p>
            <p className="text-[15.5px] font-light leading-[1.7] text-forest-500">
              Our sales team will get in touch with you shortly about Forest Edge.
            </p>
            <button type="button" onClick={closeEnquiry} className="pill-outline mt-7">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl leading-none tracking-[0.18em]">SUBISHI</span>
              <span className="text-[9.5px] uppercase tracking-[0.34em] text-forest-300">Forest Edge</span>
            </div>

            <label className="grid gap-2">
              <span className="field-label">Name</span>
              <input name="name" required placeholder="Your full name" className="field" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="field-label">Number</span>
                <input name="phone" required inputMode="tel" placeholder="+91 00000 00000" className="field" />
              </label>
              <label className="grid gap-2">
                <span className="field-label">Mail</span>
                <input name="email" type="email" placeholder="you@example.com" className="field" />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="field-label">Unit type</span>
              <select name="unit" className="field">
                <option>West facing villa · 580 Sq. Yds</option>
                <option>East facing villa · 580 Sq. Yds</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="field-label">Budget range</span>
              <select name="budget" className="field">
                <option>Less than ₹1 Cr</option>
                <option>₹1 – 1.5 Cr</option>
                <option>More than ₹1.5 Cr</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="field-label">Message</span>
              <textarea name="message" rows={3} placeholder="Anything you’d like us to know" className="field resize-y" />
            </label>

            <button type="submit" disabled={busy} className="pill-solid !py-4 tracking-[0.22em] disabled:opacity-60">
              {busy ? "Sending…" : "Submit enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
