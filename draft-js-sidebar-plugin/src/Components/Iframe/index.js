import React from 'react';

class EmbedIframe extends React.Component {

  resizeIframe = () => {
    const height = Math.max(this.props.minHeight, this.iframe.contentWindow.document.body.offsetHeight);
    this.iframe.height = `${height}px`;
  }

  componentDidMount = () => {
    const html = this.props.html;
    const page = `
      <html>
        <body style="margin:0;padding:0">
          ${this.props.html}
        </body>
      </html>
    `;

    this.iframe.addEventListener('load', () => {
      this.resizeIframe();

      const config = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      };
      const observer = new MutationObserver(this.resizeIframe);
      observer.observe(this.iframe.contentWindow.document.body, config);
    });

    this.iframe.contentWindow.document.open('text/html', 'replace');
    this.iframe.contentWindow.document.write(page);
    this.iframe.contentWindow.document.close();
  }

  render = () => (
    <iframe
      ref={(i) => { this.iframe = i; }}
      src="about:blank"
      width={this.props.width}
      height={`${this.props.minHeight}px`}
      scrolling="no"
      frameBorder="0"
    />
  );
}

EmbedIframe.propTypes = {
  width: React.PropTypes.string,
  minHeight: React.PropTypes.number,
  html: React.PropTypes.string.isRequired,
};

EmbedIframe.defaultProps = {
  minHeight: 50,
  width: '100%',
};

export default EmbedIframe;