import * as Yup from "yup";
const formValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export const formSchema = Yup.object({
  email: Yup.string().email("错误的邮箱格式").required("必填项"),
  password: Yup.string()
    .min(6, "密码不能低于6个字符")
    .max(15, "密码不能超过10个字符")
    .matches(
      /^\w{6,10}$/,
      "密码至少包含1个大写字母,1个小写字母和1个数字,不能包含特殊字符（非数字字母）"
    )
    .required("必填项"),
  rememberMe: Yup.boolean(),
});

export default formValues;
