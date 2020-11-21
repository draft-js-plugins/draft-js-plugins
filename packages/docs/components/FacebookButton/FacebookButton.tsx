import React, { ReactElement } from 'react';

interface FacebookButtonProps {
  url: string;
}

export default function FacebookLikeButton({
  url,
}: FacebookButtonProps): ReactElement {
  // Note: the width was set to 290 to work well on mobile
  return (
    <>
      <div
        id="fbbutton"
        className="fb-like"
        data-href={url}
        data-layout="standard"
        data-action="like"
        data-show-faces="true"
        data-share="true"
        data-width="290"
      />
      <script
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5"
        onLoad={() => {
          setTimeout(() => {
            // @ts-ignore
            window.FB.XFBML.parse();
          }, 0);
        }}
      />
    </>
  );
}
