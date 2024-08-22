import { Button } from "@/components/ui/button";
import { Funnel, FunnelStep, FunnelAction } from "@/src/features";
import { APP_NAME } from "@/src/shared";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex justify-center h-full min-h-full">
      <Link href="/" className="fixed top-0">
        <h1 className="text-6xl sm:text-8xl mt-6 sm:mt-8 font-extrabold tracking-tight font-blackHanSans select-none">
          {APP_NAME}
        </h1>
      </Link>
      <Funnel className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="h-40">
          <FunnelStep>
            <div>asd</div>
          </FunnelStep>
          <FunnelStep>
            <div>asd</div>
          </FunnelStep>
          <FunnelStep>
            <div>asd</div>
          </FunnelStep>
        </div>
        <FunnelAction>
          <div className="flex justify-between gap-32">
            <Button>
              <ChevronLeftIcon />
            </Button>
            <Button>
              <ChevronRightIcon />
            </Button>
          </div>
        </FunnelAction>
      </Funnel>
    </main>
  );
};

export default page;
