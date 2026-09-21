import { Link } from "react-router";
import heroImage from "../assets/hero.webp";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Roasted daily in-house
          </p>
          <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
            Good mornings start with a great pour.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Small-batch beans, slow mornings, and pastries baked before sunrise.
            Pull up a chair — the kettle's already on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              See the Menu
            </Link>
            <Link
              to="/rewards"
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Join Rewards
            </Link>
          </div>
        </div>
        <img
          src={heroImage}
          alt="A freshly brewed cup of coffee on a cream linen table"
          width="1600"
          height="1000"
          fetchPriority="high"
          className="aspect-8/5 w-full rounded-2xl object-cover shadow-soft"
        />
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-xl font-semibold">Explore the menu</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Espresso, pour-overs, seasonal lattes, and bakery favorites.
            </p>
            <Link
              to="/menu"
              className="mt-5 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Browse menu →
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-xl font-semibold">Send a gift card</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The perfect little pick-me-up for birthdays and thank-yous.
            </p>
            <Link
              to="/gift-cards"
              className="mt-5 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Shop gift cards →
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-xl font-semibold">Earn every sip</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join rewards and turn your daily cup into free drinks.
            </p>
            <Link
              to="/rewards"
              className="mt-5 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              How rewards work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
