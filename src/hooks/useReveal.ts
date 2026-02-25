import { useEffect } from "react";

interface UseRevealOptions {
  threshold?: number;
  staggerDelay?: number;
  rootMargin?: string;
}

export function useReveal(options: UseRevealOptions = {}) {
  const {
    threshold = 0.15,
    staggerDelay = 80,
    rootMargin = "0px 0px -40px 0px",
  } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            // If the element has stagger children, animate them sequentially
            const staggerChildren = el.querySelectorAll(".reveal-stagger");

            if (staggerChildren.length > 0) {
              el.classList.add("active");
              staggerChildren.forEach((child, index) => {
                const childEl = child as HTMLElement;
                childEl.style.transitionDelay = `${index * staggerDelay}ms`;
                childEl.classList.add("active");
              });
            } else {
              el.classList.add("active");
            }

            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [threshold, staggerDelay, rootMargin]);
}
