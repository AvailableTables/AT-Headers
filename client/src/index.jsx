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
      images: this.props.images || [],
      currentLocation: {
        country: 'United States',
        metro: 'New York / Tri-State Area',
        region: 'Manhattan',
        community: 'Theater District / Times Square'
      },
      metros: { 0: `New York / Tri-State Area`, 1: `Orange County`, 2: `Philadeplhia Area` },
      regions: {
        0: [`Manhattan`, `New Jersey - North`, `New Jersey - Central`],
        1: [`All Orange County`, `North Orange County`, `South Orange County`],
        2: [`Philadelphia`, `Western Suburbs`, `New Jersey Suburbs`]
      }
    }
    //this.functionName = this.functionName.bind(this);

  }

  // componentDidMount() {
  //   let url = window.location.href.split('/');
  //   var id = url[url.length - 1];
  //   console.log(id);
  //   axios.get('/api/header/' + id)
  //     .then(({data}) => {
  //       console.log(data);
  //       this.setState({ images: data.images })
  //       this.setState({ currentLocation: data.currentLocation })
  //     })
  //   axios.get('/header')
  //     .then((res) => {
  //       this.setState({ metros: res.data.metros })
  //       this.setState({ regions: res.data.regions })
  //     })
  // }

  render() {
    return(
      <div>
        <OptionsBanner id="optionsBanner" all={this.state} />
        <TitleBanner currentLocation={this.state.currentLocation} metros={this.state.metros} regions={this.state.regions} />
        <LocationBanner currentLocation={this.state.currentLocation} />
        <ImagesBanner images={this.state.images} />
      </div>)
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;




