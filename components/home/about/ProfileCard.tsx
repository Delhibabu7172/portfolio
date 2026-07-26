"use client";

import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AboutProfile } from "@/types/about";

type ProfileCardProps = {
  profile: AboutProfile;
  className?: string;
};

export function ProfileCard({ profile, className }: ProfileCardProps) {
  return (
    <div
      className={cn(
        "glass flex h-full flex-col justify-between gap-6 rounded-xl p-6 shadow-glow sm:p-7",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "grid size-16 place-items-center rounded-xl border border-primary/30",
            "bg-gradient-to-br from-primary/25 to-primary/5 font-display text-h2 font-bold text-foreground",
          )}
          aria-hidden="true"
        >
          {profile.initials}
        </div>
        <div>
          <p className="font-display text-h2 text-foreground">{profile.name}</p>
          <p className="text-small text-muted-foreground">{profile.role}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="inline-flex items-center gap-2 text-small text-muted-foreground">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {profile.location}
        </p>

        <p className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-small text-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.availability}
        </p>
      </div>
    </div>
  );
}
