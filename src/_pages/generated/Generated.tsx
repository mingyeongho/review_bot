"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputTags } from "@/components/ui/input-tags";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export function Generated() {
  const [] = useState();
  const [values, setValues] = useState<string[]>([]);
  const [count, setCount] = useState("100");

  return (
    <div className="max-w-screen-sm m-auto">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Review Generator
      </h3>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="keyword">키워드</Label>
            <InputTags
              id="keyword"
              value={values}
              onChange={setValues}
              placeholder="키워드를 입력하세요."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="count">글자 수</Label>
            <Input
              id="count"
              value={count}
              type="number"
              inputMode="numeric"
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
        </div>
        <Button>Generate Review</Button>
      </div>
    </div>
  );
}
