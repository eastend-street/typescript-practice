import React from "react";
import { test, getHero } from "./functions/test";

const App: React.FC = () => {
  test("Ayako");
  console.log(getHero("Mystery"));
  return <div>typescript</div>;
};

export default App;
