import { ErrorBoundary } from "react-error-boundary";
import { createPortal } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useIsLoadingContext } from "../contexts/IsLoadingContext";
import Loading from "../features/general/Loading";
import GenericError from "../features/errors/GenericError";

function Layout({ children }) {
  const { isLoading } = useIsLoadingContext();
  /*Not necessary but want to try out createPortal which allows us
  to move content around the dom*/
  const loadingContainer = document.getElementById("loading-container");
  return (
    <div>
      {isLoading && createPortal(<Loading />, loadingContainer)}
      <Header />
      <main>{children}</main>c
      <Footer />
    </div>
  );
}

export default Layout;
