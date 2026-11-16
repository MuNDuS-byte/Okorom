import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useHeaderPanels = () => {
  const [panels, setPanels] = useState({ shopCart: false });
  const { pathname } = useLocation();

  useEffect(() => {
    setPanels({ shopCart: false });
  }, [pathname]);

  const toggleCart = useCallback(() => {
    setPanels((prev) => ({ shopCart: !prev.shopCart }));
  }, []);

  return { panels, toggleCart };
};

export default useHeaderPanels;
