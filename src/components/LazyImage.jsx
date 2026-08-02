import { useState } from "react";
import { motion } from "framer-motion";

/**
 * LazyImage - Image component with skeleton loading animation
 * Shows a pulsing placeholder until the image loads
 */
export const LazyImage = ({ src, alt, className = "", skeletonClassName = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${skeletonClassName}`}>
      {/* Skeleton placeholder */}
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-300 dark:text-neutral-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
          <span className="text-gray-400 dark:text-neutral-500 text-sm">Error loading image</span>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
