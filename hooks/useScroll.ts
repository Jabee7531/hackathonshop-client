import { useEffect } from "react";

export const useScrollEvent = (cb: Function) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    cb();
    console.log(window.scrollY);
  };
};
