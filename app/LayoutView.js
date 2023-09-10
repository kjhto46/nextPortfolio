"use client";

import { usePathname } from "next/navigation";
import Header from "./common/inc/Header";
import Footer from "./common/inc/Footer";
import { useEffect, useState } from "react";

export default function LayoutView({ children }) {
  const pathname = usePathname();
  if (typeof window === undefined) {
    return;
  } else {
    useEffect(() => window.body?.scrollTo(0, 0), []);
  }
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  const pagesToHideHeaderFooter = [
    "/",
    "/about",
    "/skill",
    "/portfolio",
    "/portfolio/",
    "/contact",
  ];

  useEffect(() => {
    if (typeof window === undefined) {return;}
    window.scrollTo(0, 0);

    const shouldHide = pagesToHideHeaderFooter.includes(pathname);

    setShowHeaderFooter(!shouldHide);
  }, [pathname]);

  if (!showHeaderFooter) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <>{children}</>;
  }
}
