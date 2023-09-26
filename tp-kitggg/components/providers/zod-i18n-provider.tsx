"use client";

import { ZodErrorMap, z } from "zod";
import i18next from "i18next";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/fr/zod.json";
import { FC, ReactNode, createContext, useContext, useEffect } from "react";

const ZodI18nContext = createContext<ZodErrorMap | null>(null);

export const ZodI18nProvider: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    i18next.init({
      lng: "fr",
      resources: {
        fr: { zod: translation },
      },
    });
  });

  return (
    <ZodI18nContext.Provider value={zodI18nMap}>{children}</ZodI18nContext.Provider>
  );
};

export function useZodI18n(zod: typeof z): void {
  const errorMap = useContext(ZodI18nContext);

  useEffect(() => {
    if (!errorMap) {
      console.error(
        "You must use ZodProvider to be able to use `useZodI18n()` hook."
      );
      return;
    }

    zod.setErrorMap(errorMap);
  }, [zod, errorMap]);
}
