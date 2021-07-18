import { useState, useEffect } from "react";

type UseDelay = (
  delay: number
) => [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const useDelay: UseDelay = (delay) => {
  const [isValue, setIsValue] = useState(false);

  useEffect(() => {
    let timerId: number;

    if (isValue) {
      timerId = setTimeout(setIsValue, delay, false);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValue, delay]);

  return [isValue, setIsValue];
};
