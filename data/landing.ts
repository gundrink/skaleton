/**
 * Direction: quiet, precise, dark. Aurora hero, Syne + Manrope, accent from
 * site.accent. `farm-build` replaces this comment and the copy below from the
 * spec, and keeps the comment so the next session holds the same direction.
 */

export const landing = {
  eyebrow: "Solana devnet",
  headline: "Say the one thing it does.",
  subcopy:
    "Two sentences at most. Who it is for, and what they can do the moment they connect a wallet.",
  primaryCta: { label: "Open app", href: "/app" },
  secondaryCta: { label: "How it works", href: "#how" },
  highlights: [
    "Built on Solana",
    "Devnet only",
    "Wallet is the account",
    "No sign up",
    "On chain",
    "Non custodial",
  ],
  steps: [
    {
      title: "Connect",
      body: "A wallet on Solana devnet is the only account there is.",
    },
    {
      title: "Do the thing",
      body: "One action. The rule behind it is written on the button.",
    },
    {
      title: "See it settle",
      body: "The result shows the moment the transaction confirms.",
    },
  ],
  faqs: [
    {
      question: "Which network does this run on?",
      answer: "Solana devnet. The wallet has to be on devnet too.",
    },
    {
      question: "Do I need an account?",
      answer: "No. The wallet is the account. There is no email and no sign up.",
    },
    {
      question: "Are the tokens real?",
      answer: "No. Anything this app moves is a devnet test asset with no price.",
    },
    {
      question: "Where is the code?",
      answer: "The program address sits in the header. Click it to copy.",
    },
  ],
};

/**
 * Placeholder for the on-chain read the live panel shows. A project replaces
 * this with a hook in `hooks/` that calls getAccountInfo. It returns null
 * until then, and the panel renders its empty state.
 */
export const liveStats: { label: string; value: number }[] | null = null;
