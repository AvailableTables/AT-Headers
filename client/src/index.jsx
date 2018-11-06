import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ImagesBanner from './imagesBanner/imagesBanner.jsx';
import LocationBanner from './locationBanner/locationBanner.jsx';
import OptionsBanner from './optionsBanner/optionsBanner.jsx';
import TitleBanner from './titleBanner/titleBanner.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentLocation: {},
      metros: {},
      regions: {}
    }
    //this.functionName = this.functionName.bind(this);

  }

  componentDidMount() {
    let url = window.location.href.split('/');
    var id = url[url.length - 1];
    console.log(id);
    axios.post('/header', { id })
      .then((res) => {
        this.setState({ images: res.data.images })
        this.setState({ currentLocation: res.data.currentLocation })
      })
    axios.get('/header')
      .then((res) => {
        this.setState({ metros: res.data.metros })
        this.setState({ regions: res.data.regions })
      })
  }


  render() {
    return (<div>
      <OptionsBanner id="optionsBanner" all={this.state} />
      <TitleBanner currentLocation={this.state.currentLocation} metros={this.state.metros} regions={this.state.regions} />
      <LocationBanner currentLocation={this.state.currentLocation} />
      <ImagesBanner images={this.state.images} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




