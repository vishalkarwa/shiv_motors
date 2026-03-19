import { useEffect } from 'react';

export default function useScrollReveal(scopeRef, options = {}) {
  const {
    selector = '.reveal',
    threshold = 0.16,
    rootMargin = '0px 0px -8% 0px',
    visibleClass = 'visible',
  } = options;

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const nodes = scope.querySelectorAll(selector);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [scopeRef, rootMargin, selector, threshold, visibleClass]);
}
