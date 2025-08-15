import Header from "./Header";
import Footer from "./Footer";
import { useIsLoadingContext } from "../contexts/IsLoadingContext";
import Loading from "../features/general/Loading";

function Layout({ children }) {
  const { isLoading } = useIsLoadingContext();
  return (
    <div>
      {isLoading && <Loading />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
