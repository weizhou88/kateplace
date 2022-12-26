import Layout from "../components/layout"
import Arts from "../components/arts";

export default function Paintings() {
  return (
    <div>
      <Layout>
        <Arts type="paintings" age="8" />
      </Layout>
    </div>
  );
}
