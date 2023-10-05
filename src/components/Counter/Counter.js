import { useState } from "react";

function Counter() {
  // Mes variables
  const [variable, setVariable] = useState(0);

  // Mes fonctions
  const Bouton = () => {
    setVariable(variable + 1);
  };

  const Reset = () => {
    setVariable(0);
  };

  return (
    <div className="App">
      <p>Vous avez cliqué {variable} fois</p>
      <button onClick={Bouton}>Cliquez moi</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
