import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está em" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-foreground/80">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
