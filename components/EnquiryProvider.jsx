"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const EnquiryContext = createContext({ open: false, openEnquiry: function () {}, closeEnquiry: function () {} });

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openEnquiry = useCallback(function () {
    setOpen(true);
  }, []);
  const closeEnquiry = useCallback(function () {
    setOpen(false);
  }, []);
  const value = useMemo(function () {
    return { open: open, openEnquiry: openEnquiry, closeEnquiry: closeEnquiry };
  }, [open, openEnquiry, closeEnquiry]);

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  return useContext(EnquiryContext);
}
