import React from "react";

export default function Image(props) {
  const { img, imgRef, i, alt } = props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <img
        className={`thumb img-fluid img${i}`}
        alt={alt}
        src={img}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
        ref={isLoaded ? null : imgRef}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`full img-fluid img${i}`}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={img}
        ref={isLoaded ? imgRef : null}
      />
    </>
  );
}
