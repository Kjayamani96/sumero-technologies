export const GUIDE_HUBS = { en: "/guides", ms: "/ms/panduan" } as const;
export const GUIDE_PATHS = {
  costs: {
    en: "/guides/clinic-software-cost-malaysia",
    ms: "/ms/panduan/kos-sistem-pengurusan-klinik",
  },
  migration: {
    en: "/guides/clinic-software-migration-checklist",
    ms: "/ms/panduan/senarai-semak-migrasi-sistem-klinik",
  },
  walkthrough: {
    en: "/guides/healthos-clinic-workflow",
    ms: "/ms/panduan/aliran-kerja-klinik-healthos",
  },
} as const;
export type GuideId = keyof typeof GUIDE_PATHS;
