import { Cake, Heart, PartyPopper, ChevronDown } from "lucide-react";

const birthdayCards = [
  {
    style: "style-birthday-1",
    amount: "25",
    caption: "Happy birthday",
    label: "Birthday — candles",
  },
  {
    style: "style-birthday-2",
    amount: "50",
    caption: "Happy birthday",
    label: "Birthday — confetti",
  },
  {
    style: "style-birthday-3",
    amount: "100",
    caption: "Happy birthday",
    label: "Birthday — minimal",
  },
];

const thankYouCards = [
  {
    style: "style-thanks-1",
    amount: "30",
    caption: "Thank you",
    label: "Thank you — sage",
  },
  {
    style: "style-thanks-2",
    amount: "30",
    caption: "Thank you",
    label: "Thank you — botanical",
  },
];

const faqs = [
  {
    question: "How do I redeem a gift card?",
    answer:
      "Just show the card code at the counter or enter it at checkout online. Balances never expire, and you can use a card across multiple visits until it's empty.",
  },
  {
    question: "Can I send a gift card by email?",
    answer:
      "Yes! Digital gift cards arrive by email within minutes, and you can schedule delivery for a special date like a birthday or holiday.",
  },
  {
    question: "Can I reload or check my balance?",
    answer:
      "Absolutely — reload any card in store or online, and check your balance anytime with the card number on the back or in your email receipt.",
  },
];

function GiftCard({ style, amount, caption, label }) {
  return (
    <div className="giftcard-cell">
      <div className={`giftcard ${style}`}>
        <div className="giftcard-top">
          <span className="giftcard-brand">Copper Kettle</span>
          <svg
            className="giftcard-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 9h13a3 3 0 0 1 0 6h-1" />
            <path d="M4 9v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
          </svg>
        </div>
        <div>
          <div className="giftcard-amount">${amount}</div>
          <div className="giftcard-caption">{caption}</div>
        </div>
      </div>
      <div className="giftcard-buy">{label}</div>
    </div>
  );
}

export default function GiftCards() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Gift cards
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Give the gift of a good cup.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Pick a design, choose an amount, and we'll deliver it by email — or
          grab a physical card in store.
        </p>

        <section className="mt-14 giftcard-group">
          <div className="giftcard-group-head">
            <h3 className="flex items-center gap-2 text-2xl font-semibold">
              <Cake className="size-6 text-primary" />
              Birthday
            </h3>
            <span>Choose a design, then set the amount</span>
          </div>
          <div className="giftcard-row">
            {birthdayCards.map((card) => (
              <GiftCard key={card.style} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16 giftcard-group">
          <div className="giftcard-group-head">
            <h3 className="flex items-center gap-2 text-2xl font-semibold">
              <Heart className="size-6 text-primary" /> Thank You
            </h3>
            <span>Choose a design, then set the amount</span>
          </div>
          <div className="giftcard-row two-up">
            {thankYouCards.map((card) => (
              <GiftCard key={card.style} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-espresso p-8 text-primary-foreground md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary">
                <PartyPopper className="size-5" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold">National Coffee Day</h2>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  September 29 — send a limited-edition card and we'll add a
                  free drink of the week to every one gifted that day.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get the Coffee Day Card
            </button>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold">Questions about gift cards</h2>
          <div className="mt-6 divide-y divide-border border-b border-border">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left text-base font-semibold hover:underline">
                  {question}
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-4 text-sm text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
