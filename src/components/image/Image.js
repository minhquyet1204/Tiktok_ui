import React, { useState, forwardRef } from "react";
import noImage from "../../assets/image/noimage.jpg";

function Image(
  { src, alt, fallBack: customFallBack = noImage, ...props },
  ref
) {
  const [fallBack, setFallBack] = useState("");
  const handleError = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      ref={ref}
      src={fallBack || src}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
