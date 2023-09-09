import { Links } from ".";

export const Header = () => {
  return (
    <nav
      className="z-0 relative"
      x-data="{open:false,menu:false, lokasi:false}"
    >
      <div className="relative z-10 bg-grey-300 shadow">
        <div className="mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="hidden lg:block lg:ml-2">
                <div className="flex items-center justify-center">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div x-show="menu" className="block md:hidden">
        <div className="px-2 pt-2 pb-3">
          <Links />
        </div>
      </div>
    </nav>
  );
};
