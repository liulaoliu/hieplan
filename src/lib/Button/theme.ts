// theme.js 可以取自己喜歡的名稱
export const ButtonType = {
  primary:
    "tw-inline-block tw-px-6 tw-py-2.5 tw-bg-blue-600 tw-text-white tw-font-medium  tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-bg-blue-700 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-blue-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out dark:tw-border-2 ",
  secondary:
    "tw-inline-block tw-px-6 tw-py-2.5 tw-bg-purple-600 tw-text-white tw-font-medium  tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-purple-700 hover:tw-shadow-lg focus:tw-bg-purple-700 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-purple-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out dark:tw-border-2",
  basic:
    "tw-inline-block tw-px-6 tw-py-2.5 tw-bg-green-500 tw-text-white tw-font-medium  tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-green-600 hover:tw-shadow-lg focus:tw-bg-green-600 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-green-700 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out dark:tw-border-2",
  delete:
    "tw-inline-block tw-px-6 tw-py-2.5 tw-bg-red-600 tw-text-white tw-font-medium  tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-red-700 hover:tw-shadow-lg focus:tw-bg-red-700 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-red-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out dark:tw-border-2",
};

export const ButtonSize = {
  sm: "tw-py-2 tw-px-4 tw-text-xs",
  lg: "tw-py-3 tw-px-6 tw-text-lg ",
};

export type buttonSize = keyof typeof ButtonSize;
export type buttonType = keyof typeof ButtonType;
// 看命名就知道，`ButtonType`：定義按鈕的樣式。`ButtonSizes`：定義按鈕的尺寸。
