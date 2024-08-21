import { ModeToggle } from "../ModeToggle";

export function Header() {
  return (
    <header className="flex justify-between items-center h-12 px-6">
      <div className="empty" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl blackHanSans">
        ㄹㅂㅂ
      </h1>
      <ModeToggle />
    </header>
  );
}
