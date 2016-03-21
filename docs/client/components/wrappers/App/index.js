import React, { Component } from 'react';
import ExternalLink from '../../shared/Link';
import styles from './styles.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <footer className={ styles.footer }>
          Built with&nbsp;
          <span className={ styles.heart }>
            &#x2764;
          </span>
          &nbsp;on Planet Earth
          <br />
          with the support from
          <ExternalLink
            href="https://stripe.com/blog/open-source-retreat-2016-grantees"
          >
            <span className={ styles.stripe }></span>
            <span className={ styles.openSourceRetreat }>Stripe Open Source Retreat</span>
          </ExternalLink>
        </footer>
      </div>
    );
  }
}
