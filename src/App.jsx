import { Heading } from "./components/Heading/Heading";
import { Form } from "./components/Form/Form";
import LOGO_FULL from "/images/logo-full.svg";
import SQUIGGLY_LINE_TOP from "/images/pattern-squiggly-line-top.svg";
import BOTTOM_LINE_ELEMENT from "/images/pattern-squiggly-line-bottom.svg";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <img className={style.logo} src={LOGO_FULL} alt="conference logo" />
      <img src={SQUIGGLY_LINE_TOP} alt="line-top" />
      <div className={style.bars}></div>
      <Heading mode={"initial"} email="" />
      <Form />
      {/* <Ticket /> */}
      <div
        className={style.botomLinesElement}
        style={{ backgroundImage: `url(${BOTTOM_LINE_ELEMENT})` }}
      ></div>
    </div>
  );
}

export default App;
