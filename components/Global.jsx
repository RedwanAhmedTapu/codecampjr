import React from "react";
import Globe from "./Globe";
const Global = () => {
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["black", "gray", "blue", "green"][Math.round(Math.random() * 10)],
      ["black", "gray", "blue", "green"][Math.round(Math.random() * 10)],
    ],
  }));
  return (
    <>
      <Globe
        globeImageUrl="assets/images/earth.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
      />
    </>
  );
};

export default Global;
