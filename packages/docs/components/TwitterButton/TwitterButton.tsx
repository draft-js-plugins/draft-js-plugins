import React, { ReactElement, useRef } from 'react';

interface TwitterButtonProps {
  url: string;
  text?: string;
  size?: string;
}

export default function TwitterButton({
  url,
  size = 'default',
  text = '',
}: TwitterButtonProps): ReactElement {
  const ref = useRef(null);
  return (
    <>
      <span ref={ref} />
      <script
        src="//platform.twitter.com/widgets.js"
        onLoad={() => {
          // @ts-ignore
          window.twttr.widgets.createShareButton(url, ref.current, {
            text,
            size,
          });
        }}
      />
    </>
  );
}
