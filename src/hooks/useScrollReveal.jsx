import React, { useEffect } from 'react'

const useScrollReveal = () => {

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observe = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observe.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    els.forEach((el) => observe.observe(el));
    return () => observe.disconnect();
  }, []);
}

export default useScrollReveal