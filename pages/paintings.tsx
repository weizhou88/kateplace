import Layout from "../components/layout"
import Arts from "../components/arts";

export default function Paintings() {
  let age=sessionStorage.getItem('age');
  return (
    <div>
      <Layout>
        <Arts type="paintings" age={age} />
      </Layout>
    </div>
  );
}
