import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App1Component from "./components/App1Component";

const App = () => {
  function useQueryParams() {
    const params = new URLSearchParams(
      window ? window.location.search : {}
    );

    return new Proxy(params, {
        get(target, prop) {
            return target.get(prop)
        },
    });
}

  useEffect(()=>{
    const { username } = useQueryParams();
    console.log(username);
  },[]);
  return(
  <div>
    <App1Component></App1Component>
  </div>
)};


ReactDOM.render(<App />, document.getElementById("app"));
