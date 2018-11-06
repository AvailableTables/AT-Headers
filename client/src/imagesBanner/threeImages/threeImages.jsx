import React from 'react';

import styles from '../../../style/style.jsx';
const { Li, Img, GridTriple, GridPair, Image3, Image2, Image1 } = styles;


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    console.log('test')
    return (
      // <Li>
      //   <Img src={this.props.url} />
      <GridTriple>
        <Image3 src={this.props.triplet[0]} alt=".." />
        <GridPair>
          <Image1 src={this.props.triplet[1]} alt=".." />
          <Image2 src={this.props.triplet[2]} alt=".." />
        </GridPair>
      </GridTriple>
      // </Li >
    )
  }
}

export default Image;