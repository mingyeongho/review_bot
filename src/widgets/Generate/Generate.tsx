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
import { Check, Copy, EllipsisIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function Generate() {
  const { register, getValues } = useForm<{
    count: number;
  }>({
    defaultValues: {
      count: 100,
    },
  });
  const count = getValues("count");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const [generatedReview, setGeneratedReivew] = useState("");

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
      setGeneratedReivew(res.content);
      console.log(res);
    } catch (err: any) {
      const { ok, status, code } = err;

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
      return () => clearTimeout(timeout);
    }, 1000);
  }, [copied]);

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
            만들기
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>리뷰</DialogTitle>
            <DialogDescription className="text-lg">
              Q.{keywords.join(", ")}에 대한 리뷰를 {count}자 이내로 작성해줘.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full rounded-md border border-slate-400 w-full p-2 flex flex-col gap-2">
            <div>{loading ? <EllipsisIcon /> : generatedReview}</div>
            <Button
              type="button"
              className="w-full h-12"
              onClick={() => {
                setCopied(true);
                toast("리뷰가 복사되었습니다.");
              }}
            >
              <span className="sr-only">Copy</span>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
