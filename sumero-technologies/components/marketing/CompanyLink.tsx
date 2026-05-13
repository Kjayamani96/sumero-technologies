import type { ReactNode } from "react";
import { COMPANY_SITE_URL } from "@/lib/company";

type CompanyLinkProps = {
  /** Visible label (default: full company name) */
  children?: ReactNode;
  className?: string;
};

/**
 * Inline link to the Sumero Technologies (company) website.
 * Opens in a new tab so HealthOS product flows stay in this app.
 */
export function CompanyLink({
  children = "Sumero Technologies",
  className,
}: CompanyLinkProps) {
  return (
    <a
      href={COMPANY_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
