import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { APP_NAME, APP_SUB_NAME } from "@/src/shared";
import { Github } from "lucide-react";

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
        <form
          action={async () => {
            "use server";
            await signIn("github", {
              redirectTo: "/generate",
            });
          }}
        >
          <Button className="w-full" size={"lg"} type="submit">
            <Github />
          </Button>
        </form>
      </div>
    </main>
  );
}
