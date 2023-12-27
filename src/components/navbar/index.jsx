import { signOut } from "next-auth/react";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center">
            <ClipboardDocumentCheckIcon
              className="h-10 w-10"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => signOut()}
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <ArrowRightEndOnRectangleIcon
                className="-ml-0.5 h-5 w-5"
                aria-hidden="true"
              />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
