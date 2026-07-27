import { IconArchive, IconTimeline } from "@tabler/icons-react";
import { NavLink, Outlet } from "react-router-dom";
import { portfolio } from "../data/portfolio";

const ArchiveLayout = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-white">
    <header className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-[#0a0a0a]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <p className="heading-font text-sm font-bold">{portfolio.name}</p>
        <nav className="flex items-center gap-2" aria-label="Archive navigation">
          <NavLink
            to="/archive/projects"
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-[#2563eb]/20 bg-[#2563eb]/10 text-[#7ab2ff]"
                  : "border-transparent text-[#71717a] hover:text-white"
              }`
            }
          >
            <IconArchive size={15} />
            Projects
          </NavLink>
          <NavLink
            to="/archive/achievements"
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-[#2563eb]/20 bg-[#2563eb]/10 text-[#7ab2ff]"
                  : "border-transparent text-[#71717a] hover:text-white"
              }`
            }
          >
            <IconTimeline size={15} />
            Timeline
          </NavLink>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-6 pb-12">
      <Outlet />
    </main>
    <footer className="border-t border-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs text-[#5c5c66]">
          © {new Date().getFullYear()} {portfolio.name}
        </p>
      </div>
    </footer>
  </div>
);

export default ArchiveLayout;
