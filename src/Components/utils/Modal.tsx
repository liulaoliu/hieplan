import React, { ReactElement } from "react";
interface Props {}
/**
 * zIndex:10
 * @param param0
 * @returns
 */
export default function Modal({}: Props): ReactElement {
  return (
    <div
      className="tw-fixed tw-inset-0  tw-bg-black tw-bg-opacity-30 tw-backdrop-blur-sm"
      onClick={() => {
        console.log("clickasdjakldjalkjdhj");
      }}
    >
      <div className="tw-flex-col tw-justify-center tw-bg-orange-600 tw-py-12 tw-px-24 tw-border-8 tw-border-green- tw-rounded-3xl ">
        <div className="tw-flex tw-text-6xl tw-mb-10 tw-w-40">
          <h1>HI</h1>
        </div>
        <div className="tw-flex tw-justify-around tw-w-full ">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}
