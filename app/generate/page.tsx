import { InputTags } from "@/components/ui/input-tags";
import { APP_NAME } from "@/src/shared";
import { Generate } from "@/src/widgets/Generate/Generate";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-full">
      <header className="flex justify-center">
        <Link href="/">
          <h1 className="text-6xl sm:text-8xl mt-6 sm:mt-8 font-extrabold tracking-tight font-blackHanSans select-none">
            {APP_NAME}
          </h1>
        </Link>
      </header>
      <Generate />
    </div>
  );
};

export default page;
