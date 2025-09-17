
'use client';

import { Lightbulb, Mail, Sparkles, User as UserIcon, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { Skeleton } from '../ui/skeleton';

export function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="p-4 sm:p-6 flex items-center justify-between border-b bg-background shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold font-headline text-foreground tracking-tight">BizIdeaSpark</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost">
            <Link href="/saved">
                <Bookmark className="mr-2" />
                Saved
            </Link>
        </Button>
        <Button asChild>
            <Link href="/pro">
                <Sparkles className="mr-2" />
                Go Pro
            </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">
            <Mail className="mr-2" />
            Contact
          </Link>
        </Button>
        
        {loading ? (
          <Skeleton className="h-9 w-24 rounded-md" />
        ) : user ? (
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UserIcon className="h-4 w-4" />
                <span>Guest</span>
             </div>
          </div>
        ) : null}

      </div>
    </header>
  );
}
