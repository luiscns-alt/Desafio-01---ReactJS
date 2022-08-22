import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { ListTasks } from "./components/ListTasks/ListTasks";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Input />
        <ListTasks />
      </main>
    </div>
  );
}

export default App;
