import { useState } from "react";
import { formContext } from "./contexts/formContext";
import { Form } from "./components/Form/Form";
import { Heading } from "./components/Heading/Heading";
import { Ticket } from "./components/Ticket/Ticket";
import LOGO_FULL from "/images/logo-full.svg";
import SQUIGGLY_LINE_TOP from "/images/pattern-squiggly-line-top.svg";
import BOTTOM_LINE_ELEMENT from "/images/pattern-squiggly-line-bottom.svg";
import CIRCLE from "/images/pattern-circle.svg";
import style from "./App.module.css";

function App() {
  const [formData, setFormData] = useState(null);
  const email = formData ? formData["email"] : "";
  const name = formData ? formData["FullName"] : "";
  return (
    <div className={style.App}>
      <img className={style.logo} src={LOGO_FULL} alt="conference logo" />
      <img src={SQUIGGLY_LINE_TOP} alt="line-top" />
      <img
        src={CIRCLE}
        alt="circle decoration"
        className={`${style.circle} ${style.circle__top}`}
      />
      <img
        src={CIRCLE}
        alt="circle decoration"
        className={`${style.circle} ${style.circle__middle}`}
      />
      <div className={style.bars}></div>
      <formContext.Provider value={[formData, setFormData]}>
        <Heading mode={formData && "submited"} email={email} name={name} />
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
