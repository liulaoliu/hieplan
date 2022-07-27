import { Styles } from "react-modal";

/** 三方库 Modal 的样式配置 */
const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "-1rem",
    overflow: "visible",
  },
  overlay: {
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(12px)",
  },
};
export default customStyles;
