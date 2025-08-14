import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../contexts/ThemeContext";

function Layout({ children }) {
  const { darkMode } = useTheme();
  return (
    <div>
      {darkMode ? "true" : "false"}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;


