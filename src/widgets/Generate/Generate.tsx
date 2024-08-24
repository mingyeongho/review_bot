"use client";

import { Button } from "@/components/ui/button";
import { InputTags } from "@/components/ui/input-tags";
import { useState } from "react";

export function Generate() {
  const [keywords, setKeywords] = useState<string[]>([]);

  const onGenerate = () => {};

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4 w-full">
      <InputTags
        value={keywords}
        onChange={setKeywords}
        className="border-slate-400 w-full"
      />
      <Button size="lg" onClick={onGenerate} disabled={keywords.length === 0}>
        만들기
      </Button>
    </div>
  );
}
