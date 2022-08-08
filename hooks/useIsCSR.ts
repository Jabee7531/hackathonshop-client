import { useEffect, useState } from "react";

export default function useIsCSR() {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  return { isCSR };
}
