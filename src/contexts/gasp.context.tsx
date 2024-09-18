import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { createContext, useContext, useRef } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IGsapContext {
  root?: React.RefObject<HTMLDivElement>;
}

export const GsapContext = createContext<IGsapContext>({});

export const GsapProvider = ({ children }: IProps) => {
  const root = useRef<HTMLDivElement>(null);

  // Effect for icons
  useGSAP(
    () => {
      // Icon cursor
      const icons = gsap.utils.toArray(
        ".icon-button",
        root.current
      ) as HTMLHtmlElement[];
      const myClamp = gsap.utils.clamp(-10, 10);

      icons.forEach((i) => {
        i.addEventListener("mousemove", (e) => {
          const s = e.pageX - i.offsetLeft - i.offsetWidth / 2;
          const o = e.pageY - i.offsetTop - i.offsetWidth / 2;
          gsap.to(i, {
            duration: 1,
            x: myClamp(s),
            y: myClamp(o),
            ease: "power2.out",
          });
        });
        i.addEventListener("mouseleave", () => {
          gsap.killTweensOf(".icon-button");
          gsap.to(i, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: "power2.in",
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <GsapContext.Provider value={{ root }}>{children}</GsapContext.Provider>
  );
};

export const useGsapContext = () => useContext<IGsapContext>(GsapContext);

export default GsapProvider;
