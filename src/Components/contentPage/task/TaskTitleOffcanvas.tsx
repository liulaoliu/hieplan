import React, { useState } from "react";
import styles from "./TaskTitleOffcanvas.module.scss";

import { FcPlus } from "react-icons/fc";

type Props = {};

/**
 *
 * 直接调用 react-bootstrap offCanvas 艾玛,真香!
 * 是 taskTitle中点击显示右侧offcanvas的函数
 */
export default function TaskTitleOffcanvas() {
  // 这是 bootstrap offcanvas 的 开关状态
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //这是raido的状态
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { name: "一档", value: 0, variant: "danger", desc: "重要+紧急" },
    { name: "二档", value: 1, variant: "warning", desc: "重要+不紧急" },
    { name: "三档", value: 2, variant: "info", desc: "不重要+紧急" },
    { name: "四档", value: 3, variant: "success", desc: "不重要+不紧急" },
  ];
  // 这是 taskinput的类名 根据 radioValue变化
  const taskInputClassName = styles[`task_input_` + radios[radioValue].variant];

  // task_input_success
  return (
    <div>
      <FcPlus onClick={handleShow} size="30px" className={styles.plus}></FcPlus>

     
    </div>
  );
}
