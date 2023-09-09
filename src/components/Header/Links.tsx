import Link from "next/link";
import { LangForm } from "../SetLanguageForm";

export const Links = () => {
  return (
    <>
      <Link
        href="/"
        className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-violet-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Home
      </Link>

      <div className="m-5 inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>

      <Link
        href="/app-page-1"
        className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-violet-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        App router 1
      </Link>

      <Link
        href="/app-page-2"
        className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-violet-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        App router 2
      </Link>

      <div className="m-5 inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>

      <Link
        href="/page-1"
        className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-violet-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Page router 1
      </Link>

      <Link
        href="/page-2"
        className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-violet-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Page router 2
      </Link>

      <LangForm />
    </>
  );
};
