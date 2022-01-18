const fs = require("fs/promises");

const componentName = process.argv[2];

if (componentName) {
  const promiseCssModule = fs.writeFile(
    `./${componentName}.module.css`,
    "/*\n这是自动生成的css module文件\n*/"
  );
  promiseCssModule.catch((err) => {
    console.log(
      "在建立css模块过程中可能发生了读写错误,以下是发生错误的原因\n " + err
    );
  });

  const promiseComponent = fs.writeFile(
    `./${componentName}.tsx`,
    `
import React, { ReactElement } from 'react'
import styles from "./${componentName}.module.css"
interface Props {
    
}

export default function ${componentName}({}: Props): ReactElement {
    return (
        <div>
            
        </div>
    )
}

    `
  );

  promiseComponent.catch((err) => {
    console.log(
      "在建立组件过程中可能发生了读写错误,以下是发生错误的原因\n " + err
    );
  });
} else {
  throw new Error("没有正确提供css模块名称，或调用方式错误");
}
