"use client";

import { ComponentPropsWithoutRef } from "react";

export function Funnel({
  children,
  ...props
}: { children: React.ReactNode } & ComponentPropsWithoutRef<"div">) {
  return <div {...props}>{children}</div>;
}

export function FunnelStep({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function FunnelAction({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
