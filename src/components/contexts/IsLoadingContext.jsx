import { createContext, useContext, useState } from "react";

const IsLoadingContext = createContext();

export const useIsLoadingContext = () => {
  return useContext(IsLoadingContext);
};

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <IsLoadingContext.Provider
      value={{ toggleIsLoading, showLoading, hideLoading, isLoading }}
    >
      {children}
    </IsLoadingContext.Provider>
  );
};
