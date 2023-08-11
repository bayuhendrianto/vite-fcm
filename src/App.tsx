import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { messaging } from "./firebase-config";

import { getToken, onMessage } from "firebase/messaging";

function App() {
  const [count, setCount] = useState(0);

  getToken(messaging, {
    vapidKey:
      "BCEc5-SkMSjzRsoOdIgl1tjSxVfUIwpVw1yypcECluf2fGT-gLIGoKfPBMl8O9vAGxJkc9DLvUiGZeqD_a5sqko",
  })
    .then((token: any) => {
      console.log("TOKEN :: ", token);
      // updateCompany(token)
    })
    .catch((error) => {
      console.log(error)
    });

  onMessage(messaging, (payload) => {
    console.log(payload);
    // dispatch({ type: "notif", company: payload });
    // ...
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
