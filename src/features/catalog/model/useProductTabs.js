import { useState } from 'react';

export const useProductTabs = () => {
  const [tabs, setTabs] = useState({
    description: true,
    charis: false,
    video: false,
  });

  const toggleTab = (name) => {
    setTabs({ [name]: !tabs[name] });
  };

  return { tabs, toggleTab };
};
