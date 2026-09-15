"use client";

import { useEnquiry } from "./EnquiryProvider";

export default function EnquiryButton({ className, children, label }) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" onClick={openEnquiry} className={className} aria-haspopup="dialog" aria-label={label}>
      {children}
    </button>
  );
}
