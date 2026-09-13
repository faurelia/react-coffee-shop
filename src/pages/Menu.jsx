import { Link } from "react-router";

function Menu() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Our menu
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Poured fresh, all day.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Everything is roasted and baked in-house. Prices are for a regular
          size — make it a large for a dollar more.
        </p>

        <div className="mt-12 space-y-14">
          <section>
            <h2 className="border-b border-border pb-3 text-2xl font-semibold">
              Espresso Bar
            </h2>
            <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Espresso</h3>
                  <p className="text-sm text-muted-foreground">
                    Double shot, rich crema
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $3.25
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Cappuccino</h3>
                  <p className="text-sm text-muted-foreground">
                    Velvety foam, classNameic ratio
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.50
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Caramel Latte</h3>
                  <p className="text-sm text-muted-foreground">
                    House caramel, steamed milk
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $5.25
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Flat White</h3>
                  <p className="text-sm text-muted-foreground">
                    Smooth, double ristretto
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.75
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-border pb-3 text-2xl font-semibold">
              Brew Bar
            </h2>
            <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Drip of the Day</h3>
                  <p className="text-sm text-muted-foreground">
                    Rotating single origin
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $3.00
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Pour Over</h3>
                  <p className="text-sm text-muted-foreground">
                    Slow-brewed, your choice of bean
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.50
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Cold Brew</h3>
                  <p className="text-sm text-muted-foreground">
                    18-hour steep, chocolatey
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.25
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Café au Lait</h3>
                  <p className="text-sm text-muted-foreground">
                    Half brew, half steamed milk
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $3.75
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-border pb-3 text-2xl font-semibold">
              Bakery
            </h2>
            <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Butter Croissant</h3>
                  <p className="text-sm text-muted-foreground">
                    Flaky, baked daily
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $3.50
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Cardamom Bun</h3>
                  <p className="text-sm text-muted-foreground">
                    Warm spice, pearl sugar
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.00
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Banana Bread</h3>
                  <p className="text-sm text-muted-foreground">
                    Toasted, salted butter
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $3.25
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Seasonal Galette</h3>
                  <p className="text-sm text-muted-foreground">
                    Ask about today's fruit
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  $4.75
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Menu;
