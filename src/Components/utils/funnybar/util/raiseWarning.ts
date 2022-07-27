/**
   *raise a warning when :
   1.possibility doesn't have an item that equals input
   2.input is in possiblity,but doesn't pass any isXXX fn .
   */
export default function raiseWarning() {
  // 如果在调试模式下 报错
  //only works in dev mode
  if (process.env.NODE_ENV === "development") {
    console.log(`
  seems input value is not in the defined 'possibility' array.
  if this value intended not to trigger a function,then just walk away.
  if you wonder why your input doesn't work properly(like trigger a function).
  you may check:
  1. your value is not in possibility array
  2. your value is not checked adequately in your isXXX function, 
  and remeber to check this fn's parameter type (should be possibility instead of string)
  `);
  }
}
