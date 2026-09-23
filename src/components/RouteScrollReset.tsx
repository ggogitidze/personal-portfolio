"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));

    if (targetId) {
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start", behavior: "auto" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
