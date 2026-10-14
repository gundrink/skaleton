"use client";

import { solanaDevnet } from "@reown/appkit/networks";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";

import { ConnectButton } from "@/components/wallet/connect-button";

/**
 * Renders children only when a wallet is connected on devnet.
 * The action itself always lives in the child, never here.
 */
export function WalletGuard({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm">
          Connect a wallet on Solana devnet to continue.
        </p>
        <ConnectButton />
      </div>
    );
  }

  if (chainId !== solanaDevnet.id) {
    return (
      <p className="text-destructive text-sm">
        This app runs on Solana devnet. Switch the wallet network and reload.
      </p>
    );
  }

  return children;
}
