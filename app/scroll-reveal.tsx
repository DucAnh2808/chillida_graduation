"use client";

import { useEffect, type ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => {
        item.dataset.visible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.toggleAttribute("data-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return children;
}
