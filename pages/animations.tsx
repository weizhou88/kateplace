import Layout from "../components/layout"
import Arts from "../components/arts";

export default function Animations() {
  let age = sessionStorage.getItem('age');
  return (
    <div>
      <Layout>
        <Arts type="animations" age={age}/>
      </Layout>
    </div>
  );
}
