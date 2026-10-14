function required(name: string, value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) {
    throw new Error(`${name} is not set`);
  }
  return trimmed;
}

function optional(value: string | undefined): string {
  return value?.trim() ?? "";
}

/**
 * Reads public env with safe fallbacks so `next build` passes on a fresh
 * clone. The Reown project id is the one value that must be real before the
 * wallet button can open.
 */
export const publicEnv = {
  reownProjectId: optional(process.env.NEXT_PUBLIC_REOWN_PROJECT_ID),
  appUrl: optional(process.env.NEXT_PUBLIC_APP_URL) || "http://localhost:3000",
  cluster: optional(process.env.NEXT_PUBLIC_SOLANA_CLUSTER) || "devnet",
  rpcUrl:
    optional(process.env.NEXT_PUBLIC_SOLANA_RPC_URL) ||
    "https://api.devnet.solana.com",
  programId: optional(process.env.NEXT_PUBLIC_PROGRAM_ID),
  xUrl: optional(process.env.NEXT_PUBLIC_X_URL),
  ca: optional(process.env.NEXT_PUBLIC_CA),
};

export function assertReownProjectId(): string {
  return required(
    "NEXT_PUBLIC_REOWN_PROJECT_ID",
    process.env.NEXT_PUBLIC_REOWN_PROJECT_ID
  );
}
