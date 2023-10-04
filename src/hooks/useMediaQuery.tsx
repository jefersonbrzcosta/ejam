import { useMemo, useState } from "react";

export const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth);

  new window.ResizeObserver(() => setScreenWidth(window.innerWidth)).observe(
    document.getElementsByTagName("body")[0]
  );

  const isPhone = useMemo(() => screenWidth < 721, [screenWidth]);

  return { screenWidth, isPhone };
};
