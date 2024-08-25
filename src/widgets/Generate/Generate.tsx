"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { InputTags } from "@/components/ui/input-tags";
import { Label } from "@/components/ui/label";
import { Copy, EllipsisIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Generate() {
  const { register, getValues } = useForm<{
    count: number;
  }>({
    defaultValues: {
      count: 100,
    },
  });
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const onGenerate = async () => {
    const count = getValues("count");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          keywords,
          count,
        }),
      }).then((res) => res.json());

      console.log(res);
    } catch (err: any) {
      const { ok, status, code } = err;

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4 w-full">
      <InputTags
        value={keywords}
        onChange={setKeywords}
        className="border-slate-400 w-full"
        placeholder="키워드를 입력해 주세요. Enter, 콤마, 스페이스로 구분됩니다."
      />
      <Input
        {...register("count")}
        placeholder="글자 수를 입력해 주세요."
        type="number"
        inputMode="numeric"
        className="border-slate-400 w-full"
        // TODO 최대 입력 수 제한 해야됨.
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            onClick={onGenerate}
            disabled={keywords.length === 0}
          >
            {loading ? <EllipsisIcon /> : "만들기"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
