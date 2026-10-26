import { useEffect } from 'react';

/**
 * Initializes IntersectionObserver to trigger sleek scroll-reveal animations
 * for any element with reveal classes across the application.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once animated, we can unobserve if single-shot or keep observing
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    const selector = '.reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale';
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => observer.observe(el));

    // Also observe dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll(selector);
      currentElements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

export default useScrollReveal;
