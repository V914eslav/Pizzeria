import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="282" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="317" rx="6" ry="6" width="280" height="84" />
      <rect x="140" y="416" rx="20" ry="20" width="140" height="40" />
      <circle cx="135" cy="145" r="115" />
      <rect x="3" y="419" rx="6" ry="6" width="100" height="35" />
    </ContentLoader>
  );
}
export default LoadingBlock;
