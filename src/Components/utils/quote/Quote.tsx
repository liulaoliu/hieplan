import React, { ReactElement } from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import someSayings from "./someSayings";
import {
  cleanLastAtSymbol,
  isEnd,
  isMid,
  isStart,
  getRandomIdx,
  isSpecial,
  reportSpecialComment,
} from "./utils";

interface Props {
  returnString?: boolean;
}

/**

 * @returns
 * 渲染一句有深意 或者是 幽默的 话。
 * renders a meaningful or meaningless sentence.
 */

export default function Quote({ returnString }: Props): ReactElement {
  /**
   * tooltip library stuff
   */
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  /** 为了 能连续地显示 someSayings 中 @start,@mid直到@end 而维护的状态*/
  const [active, setactive] = React.useState(false);

  /**  就是 getRandomIdx的结果*/
  const [quoteIdx, setQuote] = React.useState(getRandomIdx(someSayings.length));
  /** 把随机的一条saying 给清理一下 (去掉/)和多余的@修饰符。
   * sentences in someSayings are stored like this :'knowledge is power/Francis Bacon@start'.
   * compound returns {saying:knowledge is power,sourcE:Francis Bacon}
   */
  const compound = React.useMemo(() => {
    const saying = someSayings[quoteIdx].split("/")[0];
    const sourcE = cleanLastAtSymbol(someSayings[quoteIdx].split("/")[1]);
    const containsAspecSymbol = isSpecial(someSayings[quoteIdx].split("/")[1]);

    return { saying, sourcE, containsAspecSymbol };
  }, [quoteIdx]);

  return (
    <div
      className="tw-select-none tw-cursor-pointer tw-font-bold  tw-min-w-min tw-whitespace-nowrap tw-relative "
      ref={setTriggerRef}
      onClick={() => {
        if (isStart(someSayings[quoteIdx])) {
          // 激活
          // only activated when a random sentence coincidently has a "@start symbol"
          setactive(true);
          setQuote(quoteIdx + 1);
        } else if (isEnd(someSayings[quoteIdx])) {
          // 停用
          // deactivate when a sentence has a '@end symbol'
          setactive(false);
          setQuote(getRandomIdx(someSayings.length));
        } else if (isMid(someSayings[quoteIdx])) {
          if (active) {
            //激活则保持 ，停用则随机
            // judge how does the quoteIdx change.
            setQuote(quoteIdx + 1);
          } else {
            setQuote(getRandomIdx(someSayings.length));
          }
        } else {
          setQuote(getRandomIdx(someSayings.length));
        }
      }}
    >
      <div className="saying">{compound.saying}</div>
      <div className="sourcE">{"---" + compound.sourcE}</div>
      {visible && compound.containsAspecSymbol && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          {reportSpecialComment(someSayings[quoteIdx].split("/")[1])}
        </div>
      )}
    </div>
  );
}

interface Props {}
interface State {}
