import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Input />
      </main>
    </div>
  );
}

export default App;
