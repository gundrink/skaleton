"use client";

import { useState } from "react";

import { shortenAddress } from "@/lib/utils";

export function HeaderMarks({ xUrl, ca }: { xUrl: string; ca: string }) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    if (!ca) return;
    await navigator.clipboard.writeText(ca);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <span className="flex items-center gap-2">
      {xUrl ? (
        <a
          className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg border border-border"
          href={xUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          <XIcon />
        </a>
      ) : null}
      {ca ? (
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground h-9 rounded-lg border border-border px-3 font-mono text-xs"
          onClick={copyAddress}
          aria-label={copied ? "Contract address copied" : "Copy contract address"}
        >
          {copied ? "Copied" : `CA : ${shortenAddress(ca)}`}
        </button>
      ) : null}
    </span>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}
