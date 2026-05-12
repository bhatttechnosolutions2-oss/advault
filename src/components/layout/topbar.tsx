import { Bell, Menu, Search } from "lucide-react"

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button type="button" className="-m-2.5 p-2.5 text-white/50 md:hidden hover:text-white transition-colors">
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* Search */}
        <form className="relative flex flex-1 items-center" action="#" method="GET">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-white/30" aria-hidden="true" />
          <input
            id="search-field"
            className="block h-10 w-full max-w-sm rounded-xl border border-white/[0.06] bg-white/[0.02] py-0 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/30 transition-colors"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>

        {/* Right Side */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button className="relative p-2 text-white/40 hover:text-white transition-colors">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
          </button>
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-white/[0.06]" />
          <div className="flex items-center gap-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center border border-orange-500/20">
              <span className="text-xs font-bold text-orange-400">JD</span>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-medium leading-tight">John Doe</p>
              <p className="text-[11px] text-white/40">john@agency.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
