import React from 'react';

import ThreeImages from './threeImages/threeImages.jsx';

import styles from '../../style/style.jsx';
const { Ul, BannerImages, Grid, ImageLast, SingleImage, GridSingles } = styles;


class ImagesBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triplesArr: []
    }
    this.triplet = this.triplet.bind(this);

  }

  componentDidMount() {

  }

  componentWillReceiveProps() {
    this.triplet();
    //console.log(this.state.triplesArr)

  }

  componentDidUpdate() {
    // this.triplet()

    //console.log(this.props)

  }

  triplet() {
    var images = this.props.images;
    let triplesArr = [];
    for (var i = 0; i < 9; i += 3) {
      let triples = [images[i], images[i + 1], images[i + 2]];
      console.log(triples)
      triplesArr.push(triples);
    }
    this.setState({ triplesArr });
  }



  render() {
    var images = this.props.images;
    if (images.length < 9 && images.length > 6) {
      images = images.slice(0, 5);
    }
    var triplet = (<Grid>
      {this.state.triplesArr.map(triplet => <ThreeImages triplet={triplet} ></ThreeImages>)}
      {this.props.images[9] ? <ImageLast src={this.props.images[9]} alt=".." /> : <React.Fragment></React.Fragment>}
    </Grid>);

    var single = (<GridSingles>
      {/* {this.props.images.map(image => <SingleImage src={image}></SingleImage>)} */}
      {/* <ImageLast src={this.props.images[0]} alt=".." /> */}

      {images.map(image => <SingleImage src={image} alt=".." />)}

    </GridSingles>);

    return (<BannerImages>
      {/* <Ul> */}

      {images.length >= 9 ? triplet : single}


      {/* </Ul> */}
    </BannerImages>)
  }
}

export default ImagesBanner;