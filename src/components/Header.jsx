import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Coffee, Menu } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Coffee className="size-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Copper Kettle
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/gift-cards"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Gift Cards
          </NavLink>
          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Rewards
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </NavLink>
        </nav>

        <button
          id="menu-toggle"
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={` flex flex-col gap-1 border-t border-border px-5 pb-4 md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `rounded-md px-2 py-2 text-sm font-medium text-foreground ${
              isActive ? "bg-muted" : ""
            }`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-md px-2 py-2 text-sm font-medium text-foreground ${
              isActive ? "bg-muted" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/gift-cards"
          className={({ isActive }) =>
            `rounded-md px-2 py-2 text-sm font-medium text-foreground ${
              isActive ? "bg-muted" : ""
            }`
          }
        >
          Gift Cards
        </NavLink>
        <NavLink
          to="/rewards"
          className={({ isActive }) =>
            `rounded-md px-2 py-2 text-sm font-medium text-foreground ${
              isActive ? "bg-muted" : ""
            }`
          }
        >
          Rewards
        </NavLink>
        <NavLink
          to="/contact"
          className="mt-1 rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
