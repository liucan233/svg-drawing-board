import "./index.css";
import React, { Fragment, useState } from "react";

function MoreSetting({ onChange, destroy }) {
  const [test, setTest] = useState();
  return (
    <Fragment>
      <div onClick={destroy} className={"more-tool-wrap"} />
      <div className={"more-tool"}>2333</div>
    </Fragment>
  );
}

export default MoreSetting;
