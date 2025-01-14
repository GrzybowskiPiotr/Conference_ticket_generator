import { useState } from "react";
import { formContext } from "./contexts/formContext";
import { Form } from "./components/Form/Form";
import { Heading } from "./components/Heading/Heading";
import LOGO_FULL from "/images/logo-full.svg";
import SQUIGGLY_LINE_TOP from "/images/pattern-squiggly-line-top.svg";
import BOTTOM_LINE_ELEMENT from "/images/pattern-squiggly-line-bottom.svg";

import style from "./App.module.css";
import { Ticket } from "./components/Ticket/Ticket";

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className={style.App}>
      <img className={style.logo} src={LOGO_FULL} alt="conference logo" />
      <img src={SQUIGGLY_LINE_TOP} alt="line-top" />
      <div className={style.bars}></div>
      <formContext.Provider value={[formData, setFormData]}>
        <Heading mode={"initial"} email="" />
        {formData ? <Ticket /> : <Form />}
      </formContext.Provider>
      <div
        className={style.botomLinesElement}
        style={{ backgroundImage: `url(${BOTTOM_LINE_ELEMENT})` }}
      ></div>
    </div>
  );
}

export default App;
