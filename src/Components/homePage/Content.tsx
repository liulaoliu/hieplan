import React, { ReactElement, useState } from "react";

import Logo from "./Logo";
import FunnyBar from "./FunnyBar";

export default function Content(): ReactElement {
  // 不在此处使用，提升到顶层
  // const [barStatus, setbarStatus] = useState(true);

  // watchAltAndEnter(barStatus, setbarStatus);

  return (
    <div
      style={{
        marginTop: "2rem",
        minWidth: "300px",
      }}
    >
      <Logo></Logo>
      {/* <Box>
            <FunnyBar visible={barStatus}></FunnyBar>
          </Box> */}
    </div>
  );
}
