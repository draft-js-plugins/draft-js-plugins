import React, { ReactElement } from 'react';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import ContainerBox from '../components/ContainerBox/ContainerBox';
import GithubButton from '../components/GithubButton/GithubButton';
import Pen from '../components/Pen/Pen';
import ExternalLink from '../components/Link/Link';
import Separator from '../components/Separator/Separator';
import AlternateContainer from '../components/AlternateContainer/AlternateContainer';
import Heading from '../components/Heading/Heading';
import Container from '../components/Container/Container';
import SocialBar from '../components/SocialBar/SocialBar';
import UnicornEditor from '../components/UnicornEditor/UnicornEditor';

export default function Home(): ReactElement {
  return (
    <div>
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
      <Container>
        <div className={styles.demoWrapper}>
          <Heading level={2}>Gif Demo</Heading>
          <br />
          <br />
          <img
            src="/images/demo.gif"
            role="presentation"
            width="175"
            height="250"
            className={styles.demo}
          />
        </div>
      </Container>
      <AlternateContainer>
        <Heading level={2}>Help spread the word …</Heading>
        <SocialBar />
      </AlternateContainer>
      <Container>
        <Heading level={2}>Try it yourself</Heading>
        <UnicornEditor />
        <Heading level={3}>Plugins used in this Editor</Heading>
        <div className={styles.flexCenteredDisplay}>
          <ul>
            <li>Stickers</li>
            <li>Hashtags</li>
            <li>Linkify (automatically turns links into a-tags)</li>
            <li>Mentions</li>
            <li>Emojis</li>
            <li>Image</li>
            <li>Focus</li>
            <li>Alignment</li>
            <li>
              Drag{"'"}n{"'"}Drop
            </li>
            <li>Inline Toolbar</li>
            <li>Side Toolbar</li>
          </ul>
        </div>
        <Heading level={3}>Why a UnicornEditor?</Heading>
        <p className={styles.center}>
          Because Unicorns are cooler than cats 😜
        </p>
      </Container>
      <AlternateContainer>
        <Heading level={2}>Team</Heading>
        <div className={styles.teamSection}>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/jyopur"
            >
              <img
                className={styles.teamImage}
                src="https://avatars0.githubusercontent.com/u/2182307?v=3&s=200"
                role="presentation"
              />
              <div>Jyoti Puri</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/juliandoesstuff"
            >
              <img
                className={styles.teamImage}
                src="https://avatars2.githubusercontent.com/u/1188186?v=3&s=200"
                role="presentation"
              />
              <div>Julian Krispel-Samsel</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/mrussell247"
            >
              <img
                className={styles.teamImage}
                src="https://pbs.twimg.com/profile_images/517863945/mattsailing_200x200.jpg"
                role="presentation"
              />
              <div>Matthew Russell</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/psbrandt"
            >
              <img
                className={styles.teamImage}
                src="https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_200x200.png"
                role="presentation"
              />
              <div>Pascal Brandt</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/nikgraf"
            >
              <img
                className={styles.teamImage}
                src="https://avatars0.githubusercontent.com/u/223045?v=3&s=200"
                role="presentation"
              />
              <div>Nik Graf</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/mxstbr"
            >
              <img
                className={styles.teamImage}
                src="https://avatars0.githubusercontent.com/u/7525670?s=200&v=4"
                role="presentation"
              />
              <div>Max Stoiber</div>
            </ExternalLink>
          </div>
          <div className={styles.teamMember}>
            <ExternalLink
              className={styles.teamTwitterLink}
              href="https://twitter.com/adrianmcli"
            >
              <img
                className={styles.teamImage}
                src="https://avatars0.githubusercontent.com/u/943555?s=200&v=4"
                role="presentation"
              />
              <div>Adrian Li</div>
            </ExternalLink>
          </div>
        </div>
        <p className={styles.specialThanks}>
          Special thanks to all the people from Stripe for their invaluable
          feedback and funding Nik&apos;s efforts during the&nbsp;
          <ExternalLink href="https://stripe.com/blog/open-source-retreat-2016-grantees">
            Stripe Open Source Retreat
          </ExternalLink>
          .
        </p>
      </AlternateContainer>
      <Container>
        <Heading level={2}>Discussion and Support</Heading>
        <p className={styles.center}>
          Join the <b>#draft-js-plugins</b> channel after signing up to the{' '}
          <ExternalLink href="https://draftjs.herokuapp.com">
            DraftJS Slack organization
          </ExternalLink>
          &nbsp;or check out or collection of frequently asked questions
          here:&nbsp;
          <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/FAQ.md">
            FAQ
          </ExternalLink>
          .
        </p>
        <Heading level={2}>Stay Informed</Heading>
        <p className={styles.center}>by signing up to our newsletter</p>
      </Container>
      <Footer />
    </div>
  );
}
