import React from 'react';

import OptionDropdown from './optionDropdown/optionDropdown.jsx';

import styles from '../../../style/style.jsx';
const { Center, CenterContainer, LiClick, PopUpContainer } = styles;



class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.clickOption = this.clickOption.bind(this);
    this.hasDropdown = this.hasDropdown.bind(this);

  }

  clickOption() {
    if (this.props.option === `Mobile` || this.props.option === `EN`) {
      var bool = this.state.visible;
      this.setState({ visible: !bool })
    }

  }

  hasDropdown() {
    if (this.props.option === `Mobile`) {
      return `Mobile`
    } else if (this.props.option === `EN`) {
      return `EN`
    }
  }

  render() {
    return (
      <React.Fragment>
        <LiClick>
          <CenterContainer>
            <Center onClick={this.clickOption}>
              {this.props.option}
              <PopUpContainer>
                <OptionDropdown visible={this.state.visible} option={this.hasDropdown()} />
              </PopUpContainer>
            </Center>
          </CenterContainer>
        </LiClick>
      </React.Fragment >

    )
  }

}

export default Option;

