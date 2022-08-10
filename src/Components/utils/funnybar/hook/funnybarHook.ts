export default funnybarHook;
/**
 * the funnybarHook must return an obj which has three properties.
 * 1. judge ,a function that can tell whether the hook should be used(if return true)
 * 2. execTheCmd, a function do the actual dirty job ,like kill someone, hhhh.
 * 3. an array that stores some strs,you put each of them into judge fn,judge fn would return true
 */
type funnybarHook = (inputValue: string) => {
  judge: () => boolean;
  execTheCmd: () => void;
  possibility: string[];
};
