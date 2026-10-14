# Security

This is a frontend. It holds no keys and no secrets.

- The wallet holds the keys. The app only ever asks the wallet to sign.
- The client talks to Solana devnet and nowhere else.
- `NEXT_PUBLIC_` variables are visible in the browser. Do not put anything sensitive in one.
- A transaction is never sent without the person confirming it first.
