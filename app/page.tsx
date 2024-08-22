import { Button } from "@/components/ui/button";
import { APP_NAME, APP_SUB_NAME } from "@/src/shared";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full min-h-full">
      <h1 className="text-8xl font-extrabold tracking-tight font-blackHanSans select-none">
        {APP_NAME}
      </h1>
      <span className="-translate-y-2 text-2xl font-bold select-none">
        {APP_SUB_NAME}
      </span>
      <div className="w-60 mt-6">
        <Link href="/start">
          <Button className="w-full text-1xl" size="lg">
            시작하기
          </Button>
        </Link>
      </div>
    </main>
  );
}
