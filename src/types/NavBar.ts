import { MutableRefObject } from "react";

export type NavBarType = {
  heroRef: MutableRefObject<HTMLDivElement | null>;
  projRef: MutableRefObject<HTMLDivElement | null>;
  skillRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  changeLanguageFunc: (language: string) => void;
};
