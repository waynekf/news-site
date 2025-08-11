import Header from "../static/Header";
import Navigation from "../static/Navigation";
import Footer from "../static/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
