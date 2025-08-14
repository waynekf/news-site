import { createContext, useContext, useState } from "react";

export const IsLoadingContext = createContext({ isLoading: false });

export const useIsLoadingContext = () => {
  const context = useContext(IsLoadingContext);

  return context;
};

export default IsLoadingContext;

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};
