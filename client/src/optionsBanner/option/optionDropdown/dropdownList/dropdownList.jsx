import React from 'react';
import axios from 'axios';

import styles from '../../../../../style/style.jsx';
const { PopUpItem, Center, CenterContainer, LiClick, PopUpHide, PopUpShow, PopUpOverflowWrap } = styles;



class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    // this.hasDropdown = this.hasDropdown.bind(this);

  }

  componentDidMount() {
    var option = this.props.option;
    console.log(option)
    axios.post('/options', { option })
      .then((res) => {
        // console.log(res.data)
        this.setState({ list: res.data })
      })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.list.map((listItem) => <PopUpItem>{listItem}</PopUpItem>)}
      </React.Fragment>

    )
  }

}

export default DropdownList;