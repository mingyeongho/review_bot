import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/src/shared";
import { Generate } from "@/src/widgets";
import { LogOut } from "lucide-react";
import Link from "next/link";

const page = async () => {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-full">
      <header className="flex justify-center">
        <Link href="/">
          <h1 className="text-6xl sm:text-8xl mt-6 sm:mt-8 font-extrabold tracking-tight font-blackHanSans select-none">
            {APP_NAME}
          </h1>
        </Link>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button>
            <LogOut />
          </Button>
        </form>
      </header>
      <Generate />
    </div>
  );
};

export default page;
