import React from 'react';

import styles from '../../../style/style.jsx';
const { BannerLocation, Ul, Li, ArrowGray, ArrowWhite, LiArrow, CenterContainer, CenterBold, CenterClickBlue } = styles;


class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    if (this.props.location[0] === 'country') {
      return (<React.Fragment>
        <LiArrow>
          <CenterContainer>
            <CenterBold>
              {this.props.location[1]}
            </CenterBold>
          </CenterContainer>
        </LiArrow>
        <LiArrow>
          <ArrowGray></ArrowGray>
        </LiArrow>
        <LiArrow>
          <ArrowWhite></ArrowWhite>
        </LiArrow>
      </React.Fragment>
      );
    } else if (this.props.location[0] !== 'community') {
      return (<React.Fragment>
        <LiArrow>
          <CenterContainer>
            <CenterClickBlue>
              {this.props.location[1]}
            </CenterClickBlue>
          </CenterContainer>
        </LiArrow>
        <LiArrow>
          <ArrowGray></ArrowGray>
        </LiArrow>
        <LiArrow>
          <ArrowWhite></ArrowWhite>
        </LiArrow>
      </React.Fragment>
      );
    } else {
      return (<React.Fragment>
        <LiArrow>
          <CenterContainer>
            <CenterBold>
              {this.props.location[1]}
            </CenterBold>
          </CenterContainer>
        </LiArrow>
      </React.Fragment>
      );
    }
  }
}

export default Location;