import type { ReactNode } from "react";

export function Icon({ children }: { children: string }) { return <span className="material-symbols-outlined" aria-hidden="true">{children}</span>; }
export function Tag({ children }: { children: ReactNode }) { return <span className="tag">{children}</span>; }
export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="section-title"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>; }
