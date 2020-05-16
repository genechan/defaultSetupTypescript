import React from "react";
import { HELLO_WORLD } from "./redux/actions";
import { HelloWorld } from "./components";
import { State } from "./interfaces";

import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const helloWorld = useSelector((state: State) => state.helloWorld);
  React.useEffect(() => {
    dispatch({
      type: HELLO_WORLD,
      payload: "hello world",
    });
  }, []);

  return (
    <div>
      {helloWorld}
      <HelloWorld />
    </div>
  );
};
export default App;
