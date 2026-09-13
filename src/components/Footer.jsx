import { Link } from "react-router";
import { Coffee } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-border bg-espresso text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Coffee className="size-4" />
            </span>
            <span className="font-display text-xl font-semibold">
              Copper Kettle
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Small-batch coffee, roasted with care and poured with love.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <Link
            to="/menu"
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            About
          </Link>
          <Link
            to="/gift-cards"
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            Gift Cards
          </Link>
          <Link
            to="/rewards"
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            Rewards
          </Link>
          <Link
            to="/contact"
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            Contact Us
          </Link>
        </nav>

        <div className="text-sm text-primary-foreground/60">
          <p>© 2026 Copper Kettle Coffee Co.</p>
          <div className="mt-2 flex gap-4">
            <Link to="#" className="hover:text-primary-foreground">
              Sitemap
            </Link>
            <Link to="#" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
