import { UserPlus, ShoppingBag, Star, Coffee } from "lucide-react";

const howItWorksSteps = [
  {
    icon: UserPlus,
    step: 1,
    title: "Sign up",
    description:
      "Create your free account in under a minute — no card required.",
  },
  {
    icon: ShoppingBag,
    step: 2,
    title: "Order",
    description:
      "Scan your app or give your name when you order, in store or online.",
  },
  {
    icon: Star,
    step: 3,
    title: "Earn",
    description:
      "Collect 2 points for every dollar you spend on drinks and bakery.",
  },
  {
    icon: Coffee,
    step: 4,
    title: "Redeem",
    description:
      "Cash in points for free drinks, pastries, and members-only treats.",
  },
];

const rewardLevels = [
  {
    level: "Bean",
    points: "0–199 pts",
    perks: "Birthday drink, early menu access",
  },
  {
    level: "Roast",
    points: "200–499 pts",
    perks: "Free size upgrades, double-point days",
  },
  {
    level: "Kettle",
    points: "500+ pts",
    perks: "Free drink monthly, first taste of new roasts",
  },
];

function HowItWorksCard({ icon: Icon, step, title, description }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="size-5" />
        </span>
        <span className="font-display text-3xl font-bold text-border">
          {step}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function RewardLevelCard({ level, points, perks }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
      <h3 className="font-display text-2xl font-semibold text-primary">
        {level}
      </h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {points}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{perks}</p>
    </div>
  );
}

export default function Rewards() {
  return (
    <>
      <section className="bg-espresso text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Copper Kettle Rewards
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Your daily cup, on us more often.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">
            Earn 2 points per dollar, get a free birthday drink, and unlock
            members-only perks as you sip.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-primary px-9 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Join Now
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">How it works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <HowItWorksCard key={step.step} {...step} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-3xl font-bold">Reward levels</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rewardLevels.map((reward) => (
              <RewardLevelCard key={reward.level} {...reward} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-xl font-semibold">Terms &amp; conditions</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Points are earned on qualifying purchases at participating Copper
          Kettle locations and online. Points have no cash value, cannot be
          transferred, and expire after 12 months of account inactivity. Reward
          items are subject to availability and may change without notice. Level
          status is reviewed quarterly. One account per person; we reserve the
          right to adjust or cancel accounts in cases of misuse. View the full
          program terms in store or on your account page.
        </p>
      </section>
    </>
  );
}
