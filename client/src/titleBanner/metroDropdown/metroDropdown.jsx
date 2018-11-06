import React from 'react';

import MetroList from './metroList/metroList.jsx';
import RegionList from './regionList/regionList.jsx';


class MetroDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<div>
      <MetroList all={this.state} />
      <RegionList all={this.state} />
    </div>)
  }
}

export default MetroDropdown;