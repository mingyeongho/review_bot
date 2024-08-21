"use client";

import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

function Funnel({ children }: { children: ReactNode }) {
  const [step, setStep] = useState();

  return (
    <section>
      {children}
      <Button>다음</Button>
    </section>
  );
}

function Step({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export { Funnel, Step as FunnelStep };
