import React from 'react';
import Location from './location/location.jsx';

import styles from '../../style/style.jsx';
const { BannerLocation, Ul, Li, ArrowGray, ArrowWhite, LiArrow, CenterContainer, Center } = styles;


class LocationBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastLocField: '',
    }
    this.objToArr = this.objToArr.bind(this);

  }

  objToArr(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push([key, obj[key]]);
    }
    this.state.lastLocField = arr[arr.length - 1];
    return arr;
  }


  render() {
    return (<BannerLocation>
      <Ul>
        {this.objToArr(this.props.currentLocation).map(location => <Location location={location} />)}
      </Ul>
    </BannerLocation>
    )
  }
}

export default LocationBanner;