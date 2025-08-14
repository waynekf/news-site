import Layout from "../../layouts/Layout";
import { FaBeer } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

function HomePage() {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <Layout>
      <h1>
        <FaBeer />
      </h1>
      qwerty <input type="checkbox" onChange={toggleTheme} checked={darkMode} />  {darkMode ? "true" : "false"}
    </Layout>
  );
}

export default HomePage;
