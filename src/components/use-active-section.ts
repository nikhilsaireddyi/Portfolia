import { useEffect, useState } from "react";
import { nav } from "@/lib/portfolio";

export function useActiveSection() {
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const ids = nav.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target.id) setActive(top.target.id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
}
