import React from 'react';

import MetroDropdown from './metroDropdown/metroDropdown.jsx';
import Search from './search/search.jsx';
import SignIn from './signIn/signIn.jsx';
import SignUp from './signUp/signUp.jsx';

import styles from '../../style/style.jsx';
const { SignUpButton, BannerTitle, Ul, Li, Img, UlRight, Line, Center, CenterContainer } = styles;


class TitleBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<div>
      <MetroDropdown all={this.state} />
      <Search all={this.state} />
      <SignIn all={this.state} />
      <SignUp all={this.state} />
      <BannerTitle>
        <Ul>
          <Li><Img src="https://s3.amazonaws.com/tableopen/TableOpen.png" alt="..." /></Li>
          {/* <Li><Img src="http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png" alt="..." /></Li> */}
          <Li>
            <Line></Line>
          </Li>
          <Li>
            <CenterContainer>
              <Center>{this.props.currentLocation.region}</Center>
            </CenterContainer>
          </Li>
          <Li>
            <Line></Line>
          </Li>
        </Ul>
        <UlRight>
          <Li>
            <CenterContainer>
              <Center>
                <SignUpButton><Center>Sign up</Center></SignUpButton>
              </Center>
            </CenterContainer>
          </Li>
          <Li>
            <CenterContainer>
              <Center>
                sign in
              </Center>
            </CenterContainer>
          </Li>
          <Li>
            <CenterContainer>
              <Center>
                search
              </Center>
            </CenterContainer>
          </Li>
        </UlRight>
      </BannerTitle>
    </div >)
  }
}

export default TitleBanner;