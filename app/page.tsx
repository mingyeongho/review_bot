import { Button } from "@/components/ui/button";
import { LOGO } from "@/src/shared";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full min-h-full">
      <h1 className="text-8xl font-extrabold tracking-tight font-blackHanSans select-none">
        {LOGO}
      </h1>
      <span className="-translate-y-2 text-2xl font-bold">
        키워드로 완성하는 리뷰
      </span>
      <div className="w-60 mt-6">
        <Link href="/start">
          <Button className="w-full" size="lg">
            시작하기
          </Button>
        </Link>
      </div>
    </main>
  );
}
