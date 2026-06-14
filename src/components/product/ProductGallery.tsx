import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ProductMediaItem = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  poster?: string; // For videos
  startTime?: number; // Start time in seconds for custom looping
  endTime?: number; // End time in seconds for custom looping
  playbackRate?: number; // Playback speed (e.g., 0.5)
  objectPosition?: string; // CSS object-position (e.g., 'center bottom')
  forceSquare?: boolean; // Force square aspect ratio behavior like video
};

interface ProductGalleryProps {
  media: ProductMediaItem[];
  productName: string;
}

interface VideoPlayerProps {
  item: ProductMediaItem;
  className?: string;
  style?: React.CSSProperties;
}

const VideoPlayer = ({ item, className, style }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted state first - critical for mobile autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Attempt to play
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {/* autoplay prevented */ });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={item.url}
      className={className}
      style={style}
      controls={false}
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true" // React might complain about this but it's needed for older iOS
      preload="metadata"
      poster={item.poster}
      // Ensure custom logic still works if needed
      onTimeUpdate={(e) => {
        if (item.endTime && e.currentTarget.currentTime >= item.endTime) {
          e.currentTarget.currentTime = item.startTime || 0;
          e.currentTarget.play();
        }
      }}
      onEnded={(e) => {
        // Fallback for loop if standard loop fails for some reason or if using ranges
        if (item.startTime && !item.endTime) {
          e.currentTarget.currentTime = item.startTime;
          e.currentTarget.play();
        }
      }}
      onLoadedMetadata={(e) => {
        if (item.startTime) {
          e.currentTarget.currentTime = item.startTime;
        }
        if (item.playbackRate) {
          e.currentTarget.playbackRate = item.playbackRate;
        }
      }}
      {...({ "webkit-playsinline": "true" } as any)} // Bypass React Typescript error for custom attribute
    />
  );
};

export const ProductGallery = ({ media, productName }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomState, setZoomState] = useState<{ index: number; x: number; y: number } | null>(null);
  const [mobileZoom, setMobileZoom] = useState<{ index: number; originX: number; originY: number } | null>(null);

  // Helper to render media content
  const renderMediaContent = (
    item: ProductMediaItem,
    index: number,
    isLightbox = false,
    additionalClasses = ""
  ) => {
    // Use item-specific forceSquare or video type to determine aspect ratio
    const forceSquare = item.type === 'video' || item.forceSquare;

    if (item.type === 'video') {
      return (
        <div className={cn(
          "relative flex items-center justify-center bg-black/5",
          isLightbox ? "w-full h-full bg-black/0" : (forceSquare ? "w-full aspect-square" : "w-full h-auto")
        )}>
          <VideoPlayer
            item={item}
            className={cn(
              isLightbox
                ? "w-full h-full object-cover rounded-2xl shadow-2xl"
                : (forceSquare ? "w-full h-full object-cover" : "w-full h-auto"),
              additionalClasses
            )}
            style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          />
        </div>
      );
    }
    return (
      <div className={cn(
        "relative overflow-hidden",
        isLightbox ? "w-auto h-auto" : (forceSquare ? "w-full aspect-square bg-black/5" : "w-full bg-black/5")
      )}>
        <img
          src={item.url}
          alt={item.alt || `${productName} - Mídia ${index + 1}`}
          width={800}
          height={800}
          className={cn(
            isLightbox
              ? "w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              : (forceSquare ? "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" : "w-full h-auto block transition-transform duration-500 group-hover:scale-105"),
            additionalClasses
          )}
          style={{
            ...(item.objectPosition ? { objectPosition: item.objectPosition } : {}),
            WebkitTouchCallout: 'none', // Disable long-press context menu on iOS
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      </div>
    );
  };

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [media]);

  // Force update on resize to recalculate constraints
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* ===== MOBILE GALLERY (< 768px) — stacked like desktop, px-4 aligned with title ===== */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-4">
          {media.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden relative group"
              onPointerDown={item.type === 'image' ? (e) => {
                if (e.pointerType !== 'touch' && e.pointerType !== 'mouse') return;
                e.currentTarget.setPointerCapture(e.pointerId);
                const rect = e.currentTarget.getBoundingClientRect();
                setMobileZoom({ index, originX: ((e.clientX - rect.left) / rect.width) * 100, originY: ((e.clientY - rect.top) / rect.height) * 100 });
              } : undefined}
              onPointerMove={item.type === 'image' ? (e) => {
                if (mobileZoom?.index !== index) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setMobileZoom({ index, originX: Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)), originY: Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)) });
              } : undefined}
              onPointerUp={item.type === 'image' ? (e) => { e.currentTarget.releasePointerCapture(e.pointerId); setMobileZoom(null); } : undefined}
              onPointerCancel={item.type === 'image' ? (e) => { e.currentTarget.releasePointerCapture(e.pointerId); setMobileZoom(null); } : undefined}
              onTouchStart={item.type === 'image' ? (e) => { if (e.touches.length > 1) e.preventDefault(); } : undefined}
              style={{
                boxShadow: `inset 3px 3px 8px rgba(255,255,255,0.95), inset -2px -2px 6px rgba(0,0,0,0.04), 0 8px 32px -8px rgba(0,0,0,0.15), 0 4px 12px -4px rgba(0,0,0,0.10), 0 20px 40px -12px rgba(0,0,0,0.12)`,
                background: 'linear-gradient(145deg, hsl(var(--secondary) / 0.4), hsl(var(--card)))',
                cursor: item.type === 'image' ? 'zoom-in' : 'default',
                touchAction: item.type === 'image' ? 'none' : 'auto',
              }}
            >
              <div style={item.type === 'image' ? {
                transformOrigin: mobileZoom?.index === index ? `${mobileZoom.originX}% ${mobileZoom.originY}%` : 'center',
                transform: mobileZoom?.index === index ? 'scale(3.5)' : 'scale(1)',
                transition: mobileZoom?.index === index ? 'transform 0s' : 'transform 0.3s ease-out',
              } : undefined}>
                {renderMediaContent(item, index)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ===== TABLET + DESKTOP GALLERY - ZOOM ON HOVER (>= 768px) ===== */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-4">
          {media.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: `
                  inset 3px 3px 8px rgba(255, 255, 255, 0.95),
                  inset -2px -2px 6px rgba(0, 0, 0, 0.04),
                  0 8px 32px -8px rgba(0, 0, 0, 0.15),
                  0 4px 12px -4px rgba(0, 0, 0, 0.1),
                  0 20px 40px -12px rgba(0, 0, 0, 0.12)
                `,
                background: 'linear-gradient(145deg, hsl(var(--secondary) / 0.4), hsl(var(--card)))',
                cursor: item.type === 'image' ? 'zoom-in' : 'default',
              }}
              onMouseMove={item.type === 'image' ? (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomState({ index, x, y });
              } : undefined}
              onMouseLeave={item.type === 'image' ? () => setZoomState(null) : undefined}
              onPointerDown={item.type === 'image' ? (e) => {
                if (e.pointerType !== 'touch') return;
                e.currentTarget.setPointerCapture(e.pointerId);
                const rect = e.currentTarget.getBoundingClientRect();
                setMobileZoom({ index, originX: ((e.clientX - rect.left) / rect.width) * 100, originY: ((e.clientY - rect.top) / rect.height) * 100 });
              } : undefined}
              onPointerMove={item.type === 'image' ? (e) => {
                if (e.pointerType !== 'touch' || mobileZoom?.index !== index) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setMobileZoom({ index, originX: Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)), originY: Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)) });
              } : undefined}
              onPointerUp={item.type === 'image' ? (e) => { if (e.pointerType !== 'touch') return; e.currentTarget.releasePointerCapture(e.pointerId); setMobileZoom(null); } : undefined}
              onPointerCancel={item.type === 'image' ? (e) => { if (e.pointerType !== 'touch') return; e.currentTarget.releasePointerCapture(e.pointerId); setMobileZoom(null); } : undefined}
              onTouchStart={item.type === 'image' ? (e) => { if (e.touches.length > 1) e.preventDefault(); } : undefined}
            >
              <div
                style={item.type === 'image' ? {
                  transformOrigin: zoomState?.index === index
                    ? `${zoomState.x}% ${zoomState.y}%`
                    : 'center',
                  transform: zoomState?.index === index ? 'scale(3.5)' : 'scale(1)',
                  transition: zoomState?.index === index
                    ? 'transform 0.12s ease-out'
                    : 'transform 0.35s ease-out',
                } : undefined}
              >
                {renderMediaContent(item, index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
