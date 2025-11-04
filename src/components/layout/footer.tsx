import Link from "next/link";
import { Instagram } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pavillion_art. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
           <p className="text-sm text-muted-foreground">
            Follow @{INSTAGRAM_HANDLE}
          </p>
        </div>
      </div>
    </footer>
  );
}
