import imageLogo from "@/assets/images/logo-plug.webp";
import React, { forwardRef, memo, useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    return (
      <img
        ref={ref}
        src={hasError || !src ? imageLogo : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        data-is-loaded={isLoaded && !hasError}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export default memo(Image);
