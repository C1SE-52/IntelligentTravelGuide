import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

var options = {
  damping: 0.05,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};

export default SmoothScroll;
