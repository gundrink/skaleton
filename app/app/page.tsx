"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WalletGuard } from "@/components/wallet/wallet-guard";
import { site } from "@/lib/site";

export default function AppPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-6 py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-display text-2xl">{site.name}</CardTitle>
          <CardDescription>{site.tagline}</CardDescription>
        </CardHeader>
        <CardContent>
          <WalletGuard>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-sm">
                The action for this project goes here. It sends one transaction
                and then shows the result.
              </p>
              <Button
                onClick={() =>
                  toast("Nothing is wired up yet. This is the template.")
                }
              >
                Do the thing
              </Button>
            </div>
          </WalletGuard>
        </CardContent>
      </Card>
    </section>
  );
}
