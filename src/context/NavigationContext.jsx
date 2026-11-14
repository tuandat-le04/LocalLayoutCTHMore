import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function NavigationProvider({ children }) {
  // Normalize initial path (strip trailing slash)
  const getNormalizedPath = () => {
    const p = window.location.pathname.replace(/\/$/, '') || '/';
    return p;
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    const target = path.replace(/\/$/, '') || '/';
    if (target !== currentPath) {
      window.history.pushState(null, '', target);
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}

