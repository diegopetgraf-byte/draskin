import { Star } from 'lucide-react';

// Compact Google Logo SVG
const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

interface GoogleRatingTagProps {
  rating?: number;
  className?: string;
}

/**
 * Compact Google rating badge for use under product titles
 * Shows: [G | 5.0 ★★★★★]
 */
const GoogleRatingTag = ({ rating = 5.0, className = '' }: GoogleRatingTagProps) => {
  return (
    <a
      href="https://share.google/lylINbDcpQtCdbRsc"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 bg-background rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),2px_2px_6px_rgba(0,0,0,0.06),-1px_-1px_4px_rgba(255,255,255,0.8)] hover:[box-shadow:inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(0,0,0,0.05),4px_4px_10px_rgba(0,0,0,0.08),-2px_-2px_6px_rgba(255,255,255,0.9)] w-fit ${className}`}
    >
      <GoogleLogo className="w-[18px] h-[18px]" />
      <div className="w-px h-3.5 bg-border/50" />
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
        <div className="flex gap-px">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </a>
  );
};

export default GoogleRatingTag;

