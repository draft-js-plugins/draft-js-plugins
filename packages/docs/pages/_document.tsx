import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import React, { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="draft-js-plugins - High quality plugins for DraftJS with great UX"
          />
          <meta
            property="og:description"
            content="Facebook's rich-text editor framework DraftJS built on top of React allows you to create powerful editors. We built a plugin architecture on top of it that aims to provide you with plug &amp; play extensions. It comes with a set of plugins with great UX serving mobile &amp; desktop as well as screen-readers. You can combine them in any way you want to or build your own."
          />
          <meta property="og:url" content="https://www.draft-js-plugins.com" />
          <meta property="og:site_name" content="draft-js-plugins" />
          <meta
            property="og:image"
            content="https://www.draft-js-plugins.com/images/draft-js-plugins.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
