import useNavigateLoginCmd from "../useNavigateLoginCmd";
import useNavigateHomeCmd from "../useNavigateHomeCmd";
import useNavigateMainCmd from "../useNavigateMainCmd";
import useChangeColorModeCmd from "../useChangeColorModeCmd";
import useChangeColorModePreferOsCmd from "../useChangeColorModePreferOsCmd";
import funnybarHook from "../funnybarHook";
/**
 * add any new hook here,those hooks are the different strategies that
 * can be used in different conditions.
 * when adding new hooks(fns/strategies),write your hook,and just change here, add a new one,and it's done.
 */
export const funnybarHooks = [
  useNavigateLoginCmd,
  useNavigateHomeCmd,
  useNavigateMainCmd,
  useChangeColorModeCmd,
  useChangeColorModePreferOsCmd,
];

export function activeFunnybarHooks(
  customHookArray: funnybarHook[],
  input: string
) {
  return customHookArray.map((hook) => {
    return hook(input);
  });
}

export function reportPossibleStrs(customHookArray: funnybarHook[]) {
  return customHookArray
    .map((hook) => {
      return hook("").possibility;
    })
    .flat(1);
}
