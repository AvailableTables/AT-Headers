import React from 'react';

import Option from './option/option.jsx';


import styles from '../../style/style.jsx';
const { BannerOptions, UlRight, Li, Center, CenterContainer, LiClick } = styles;



class OptionsBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [`For Restauranteurs`,
        `Mobile`,
        `Help`,
        `EN`],
    }
    //this.functionName = this.functionName.bind(this);

  }

  render() {
    return (<BannerOptions>
      <UlRight>
        {this.state.options.map(option => <Option option={option} />)}
      </UlRight>
    </BannerOptions>)
  }


}

export default OptionsBanner;

