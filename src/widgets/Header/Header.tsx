import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

export function Header() {
  return (
    <header className="w-full max-w-screen-lg m-auto flex justify-between items-center h-16 px-6 py-2 border-b border-slate-400">
      <div className="empty" />
      <Link href="/">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-blackHanSans">
          ㄹㅂㅂ
        </h1>
      </Link>
      <ModeToggle />
    </header>
  );
}
