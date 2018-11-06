import React from 'react';
import DropdownList from './dropdownList/dropdownList.jsx';

import styles from '../../../../style/style.jsx';
const { Center, CenterContainer, LiClick, PopUpHide, PopUpShow, PopUpOverflowWrap } = styles;



class OptionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // this.hasDropdown = this.hasDropdown.bind(this);

  }

  // hasDropdown() {
  //   if (this.props.option === `Mobile`) {
  //     console.log('yup')
  //   } else if (this.props.option === `EN`) {
  //     console.log('yup2')
  //   }
  // }

  selectList() {
    return (<DropdownList option={this.props.option} />)
  }


  render() {
    let popUpShow = <PopUpShow>{this.selectList()}</PopUpShow>
    let popUpHide = <PopUpHide></PopUpHide>
    let popUp = this.props.visible ? popUpShow : popUpHide;
    return (
      <React.Fragment>
        {popUp}
      </React.Fragment>
    )
  }

}

export default OptionDropdown;