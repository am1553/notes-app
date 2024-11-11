import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotePage() {
  return (
    <section className="bg-white h-full py-5 px-4 md:px-8 md:py-6 rounded-t-lg flex flex-col gap-3">
      <header className="text-preset-4 flex justify-between lg:hidden">
        <Link href={"/app"} className="flex items-center">
          <Image
            src={"/icon-arrow-left.svg"}
            height={18}
            width={18}
            alt="right arrow"
          />
          <span>Go Back</span>
        </Link>

        <div className="flex items-center gap-4">
          <button type="button">
            <Image
              src={"/icon-delete.svg"}
              height={18}
              width={18}
              alt="right arrow"
            />
          </button>
          <button type="button">
            <Image
              src={"/icon-archive.svg"}
              height={18}
              width={18}
              alt="right arrow"
            />
          </button>
          <button>Cancel</button>
          <button>Save Note</button>
        </div>
      </header>
      <hr className="lg:hidden" />
      <h1 className="text-preset-1 font-bold">
        React Performance Optimization
      </h1>
      <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 text-preset-6 md:text-preset-4">
        <label className="flex items-center gap-1.5">
          <Image src={"/icon-tag.svg"} width={12} height={12} alt="tag" />
          Tag
        </label>
        <div className="inline">
          <label>Dev, React</label>
        </div>
        <label className="flex items-center gap-1.5">
          <Image src={"/icon-clock.svg"} width={12} height={12} alt="tag" />
          Last Edited
        </label>
        <div className="inline">
          <label>29 Oct 2024</label>
        </div>
      </div>
      <hr />
      <textarea
        className="flex-1 outline-none"
        name=""
        id=""
        defaultValue={`Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks`}
      ></textarea>

      <hr className="max-lg:hidden" />
      <div className="flex gap-4">
        <Button>
          <span>Save</span>
        </Button>
        <Button variant={"secondary"}>
          <span>Cancel</span>
        </Button>
      </div>
    </section>
  );
}

export default NotePage;
