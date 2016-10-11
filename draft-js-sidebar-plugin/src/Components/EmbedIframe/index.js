import React from 'react';
import { Entity } from 'draft-js';
import Iframe from '../Iframe';

class EmbedIframe extends React.Component {

  constructor(props) {
    super(props);
    const { block } = props;
    const data = Entity.get(block.getEntityAt(0)).getData();
    this.state = {
      data,
    };
  }

  render = () => {
    return (
      <Iframe html={this.state.data.html} />
    );
  }
};

export default EmbedIframe;