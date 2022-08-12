import React, { ReactElement } from "react";

interface Props {
  meta?: any;
  someErrorMessage?: string;
}

export default function ErrorMessage({
  meta,
  someErrorMessage,
}: Props): ReactElement {
  return (
    <div className="tw-w-full tw-text-white tw-bg-red-500 tw-opacity-75 tw-select-none">
      <div className="tw-container tw-flex tw-items-center tw-justify-between tw-px-6 tw-py-4 tw-mx-auto">
        <div className="tw-flex">
          <svg viewBox="0 0 40 40" className="tw-w-6 tw-h-6 tw-fill-current">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
          </svg>
          {meta ? <p className="tw-mx-3">{meta.error}</p> : null}
          {someErrorMessage ? (
            <p className="tw-mx-3">{someErrorMessage}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
