import type { SVGProps } from "react";

function strokeIcon(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconReception(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M4 6h16M4 12h10M4 18h6" />
      <path d="M16 14v4M14 16h4" />
    </svg>
  );
}

export function IconClinical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function IconPharmacy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconMoney(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h.01M18 12h.01" />
      <path d="M12 16v-4" />
    </svg>
  );
}

export function IconBuilding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M6 12h4v4H6zM14 8h4v8h-4zM10 18h4v4h-4z" />
    </svg>
  );
}

export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconArrowPath(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

export function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...strokeIcon(props)}>
      <path d="M3 3v18h18" />
      <path d="M7 16V9M12 16v-5M17 16V6" />
    </svg>
  );
}
