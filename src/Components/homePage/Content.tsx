import React, { ReactElement, useState } from "react";

import Logo from "./Logo";

export default function Content(): ReactElement {
  // 不在此处使用，提升到顶层
  // const [barStatus, setbarStatus] = useState(true);

  // watchAltAndEnter(barStatus, setbarStatus);

  return (
    <div className="tw-flex tw-justify-center">
      <Logo></Logo>
    </div>
  );
}
