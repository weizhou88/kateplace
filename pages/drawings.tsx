import Layout from "../components/layout"
import Arts from "../components/arts";
import AppContext from "../AppContext";
import { useContext } from "react";

export default function Drawings() {
  let age = sessionStorage.getItem('age');
  // let context = useContext(AppContext);
  // context?.setAgeSelected(age!);
  return (
    <div>
      <Layout>
        {/* <Arts type="drawings" age={context?.state.ageSelected}/> */}
        <Arts type="drawings" age={age}/>
      </Layout>
    </div>
  );
}
