import { useState } from "react";

function useAnimation() {
  const [animateFirst, setAnimateFirst] = useState(true);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [isFadeAnimation, setIsFadeAnimation] = useState(false);

  const handleFirstAnimationEnd = () => {
    setAnimateFirst(false);
    setAnimateSecond(true);
  };
  return {
    animateFirst,
    animateSecond,
    isFadeAnimation,
    handleFirstAnimationEnd,
    setIsFadeAnimation,
  };
}
export default useAnimation;
