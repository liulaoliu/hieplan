import useNavigateLoginCmd from "../useNavigateLoginCmd";
import useNavigateHomeCmd from "../useNavigateHomeCmd";
import useNavigateMainCmd from "../useNavigateMainCmd";
import useChangeColorModeCmd from "../useChangeColorModeCmd";
import useChangeColorModePreferOsCmd from "../useChangeColorModePreferOsCmd";
import funnybarHook from "../funnybarHook";

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
