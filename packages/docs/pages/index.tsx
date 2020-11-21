import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu/Menu';
import { ReactElement } from 'react';
import Footer from '../components/Footer/Footer';
import ContainerBox from '../components/ContainerBox/ContainerBox';
import GithubButton from '../components/GithubButton/GithubButton';
import Pen from '../components/Pen/Pen';
import ExternalLink from '../components/Link/Link';
import Separator from '../components/Separator/Seperator';
import AlternateContainer from '../components/AlternateContainer/AlternateContainer';
import Heading from '../components/Heading/Heading';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <ContainerBox>
          <Pen />
          <div className={styles.logoText}>DraftJS Plugins</div>
          <p className={styles.tagline}>High quality plugins with great UX</p>
          <GithubButton
            user="draft-js-plugins"
            repo="draft-js-plugins"
            size="large"
          />
        </ContainerBox>
      </div>
      <Menu />
      <Separator />
      <AlternateContainer>
        <p className={styles.whatText}>
          Slack-like emoji autocompletion, Facebook-like stickers & mentions,
          and many more features out of the box to enhance your web application.
        </p>
        <Heading level={2}>Wait, but why?</Heading>
        <p className={styles.whyText}>
          Facebook&apos;s rich-text editor framework
          <ExternalLink href="https://facebook.github.io/draft-js/">
            &nbsp;DraftJS&nbsp;
          </ExternalLink>
          built on top of
          <ExternalLink href="https://facebook.github.io/react/">
            &nbsp;React&nbsp;
          </ExternalLink>
          allows you to create powerful editors. We&apos;re building a plugin
          architecture on top of it that aims to provide you with plug & play
          extensions. It comes with a set of plugins with great UX serving
          mobile & desktop as well as screen-readers. You can combine them in
          any way you want or build your own.
        </p>
      </AlternateContainer>
      <Footer />
    </div>
  );
}
