import Layout from "../components/layout"
import Arts from "../components/arts";

export default function Graphics() {
  let age = sessionStorage.getItem('age');
  return (
    <div>
      <Layout>
        <Arts type="graphics" age={age}/>
      </Layout>
    </div>
  );
}
