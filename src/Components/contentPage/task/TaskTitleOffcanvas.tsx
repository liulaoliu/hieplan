import React, { useState } from "react";
import styles from "./TaskTitleOffcanvas.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FcPlus } from "react-icons/fc";
type Props = {};

// export default function TaskTitleOffcanvas({}: Props) {
//   return (
//     <div className={styles.container}>TaskTitleOffcanvas</div>
//   )
// }
/**
 *
 * 直接调用 react-bootstrap offCanvas 艾玛,真香!
 * 是 taskTitle中点击显示右侧offcanvas的函数
 */
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FcPlus onClick={handleShow} size="30px" className={styles.plus}></FcPlus>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className={styles.header}>
          <Offcanvas.Title className={styles.title}>新增任务</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.body}>
          <div>someone like you</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
