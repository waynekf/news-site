import Layout from "../../layouts/Layout";
import { FaBeer } from "react-icons/fa";

function HomePage() {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <Layout>
      <h1>
        <FaBeer />
      </h1>
    </Layout>
  );
}

export default HomePage;
