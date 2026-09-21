import { Link } from "react-router";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-espresso py-20 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">Say hello.</h1>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/75">
          Questions, catering, wholesale beans, or just a compliment for the
          barista — we'd love to hear it.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-2">
        <div className="order-last md:order-0">
          <h2 className="text-2xl font-semibold">Find us</h2>
          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-primary" />
              12 Maple Lane, Old Town
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-primary" />
              hello@copperkettle.coffee
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              to="#"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <span>
                <svg
                  className="size-4 fill-current"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.087 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.703.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.039.853.174 1.434.372 1.943.205.526.478.973.923 1.417.444.445.891.718 1.417.923.509.198 1.09.333 1.943.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.853-.039 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.198-.509.333-1.09.372-1.943C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.039-.853-.174-1.434-.372-1.943a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.444.01 10.171 0 8 0m0 1.441c2.136 0 2.389.008 3.233.046.78.036 1.204.166 1.486.276.373.137.69.3.994.604.304.304.467.621.604.994.11.282.24.706.276 1.486.038.844.046 1.097.046 3.233s-.008 2.389-.046 3.233c-.036.78-.166 1.204-.276 1.486a2.5 2.5 0 0 1-.604.994 2.5 2.5 0 0 1-.994.604c-.282.11-.706.24-1.486.276-.844.038-1.097.046-3.233.046s-2.389-.008-3.233-.046c-.78-.036-1.204-.166-1.486-.276a2.5 2.5 0 0 1-.994-.604 2.5 2.5 0 0 1-.604-.994c-.11-.282-.24-.706-.276-1.486C1.449 10.389 1.441 10.136 1.441 8s.008-2.389.046-3.233c.036-.78.166-1.204.276-1.486.137-.373.3-.69.604-.994a2.5 2.5 0 0 1 .994-.604c.282-.11.706-.24 1.486-.276C5.611 1.449 5.864 1.441 8 1.441" />
                  <path d="M8 4.054a3.946 3.946 0 1 0 0 7.892 3.946 3.946 0 0 0 0-7.892m0 6.451a2.505 2.505 0 1 1 0-5.01 2.505 2.505 0 0 1 0 5.01m5.012-6.613a.922.922 0 1 1-1.844 0 .922.922 0 0 1 1.844 0" />
                </svg>
              </span>
            </Link>
            <Link
              to="#"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <span>
                <svg
                  className="size-4 fill-current"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.72V8.05h2.03V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </span>
            </Link>
            <Link
              to="#"
              aria-label="Twitter"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <span>
                <svg
                  className="size-4 fill-current"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M12.6.75h2.454l-5.36 6.13L16 15.25h-4.937l-3.867-5.055-4.33 5.055H.41l5.733-6.56L0 .75h5.063l3.495 4.633zM11.74 13.5h1.36L4.323 2.4H2.865z" />
                </svg>
              </span>
            </Link>
          </div>

          <h2 className="mt-12 text-2xl font-semibold">Visit Us</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <iframe
              title="Map showing the Copper Kettle Coffee location"
              src="https://www.google.com/maps?q=40.7128,-74.0060&z=15&output=embed"
              className="h-48 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="order-first rounded-2xl border border-border bg-card p-8 shadow-soft md:order-0">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <form className="mt-6 space-y-4" action="#" method="post">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="What's on your mind?"
                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
