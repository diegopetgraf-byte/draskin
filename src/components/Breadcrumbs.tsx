import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs md:text-sm text-muted-foreground ${className}`}>
            <Link
                href="/"
                className="flex items-center hover:text-accent transition-colors text-xs md:text-sm font-medium"
            >
                Início
            </Link>

            {items.map((item, index) => (
                <div key={item.url} className="flex items-center space-x-2">
                    <ChevronRight className="w-3 md:w-3.5 h-3 md:h-3.5 opacity-50" />
                    {index === items.length - 1 ? (
                        <span className="font-medium text-foreground truncate max-w-[150px] md:max-w-none">
                            {item.name}
                        </span>
                    ) : (
                        <Link
                            href={item.url}
                            className="hover:text-accent transition-colors"
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
