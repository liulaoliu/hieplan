import * as Yup from "yup";
/**
 * 登录页面 表单数据
 */
const formValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export const formSchema = Yup.object({
  email: Yup.string().required("必填项"),
  password: Yup.string().required("必填项"),
  rememberMe: Yup.boolean(),
});

export default formValues;
