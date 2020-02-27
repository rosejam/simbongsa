import React from "react";
import { Menu, Responsive } from "semantic-ui-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "redux/modules/auth";
import * as pageActions from 'redux/modules/page';
import * as volActions from "redux/modules/vol";
import * as userActions from "redux/modules/user";
// import "assets/mycss";
import './Footer.css'
interface Props { }

// export default function Header({ }: Props): ReactElement {
class Footer extends React.Component<any, any>{
  state = { activeItem: "" }

  handleItemClick = (e: any, { name }: any) => {
    this.setState({ activeItem: name })
    const { history, PageActions, VolActions, UserActions } = this.props
    PageActions.setCurrentTab(0);
    if (name === 'HOME') {
      UserActions.resetFeedList();
      history.push('/mainpage')
    } else if (name === 'FEED') {
      VolActions.resetVolunteerForList();
      history.push('/feed');
    } else if (name === 'MY') {
      UserActions.resetFeedList();
      VolActions.resetVolunteerForList();
      history.push('/mypage')
    }
  }

  render() {
    const { activeItem } = this.state
    const { loginCheck } = this.props;
    return (
      <div>
        {/* 작은 화면에서 보여줌 */}
        {loginCheck &&
          <Responsive
            {...Responsive.onlyMobile}
          >
            <Menu
              borderless widths={3} fixed="bottom"
            >
              <Menu.Item name="HOME" active={activeItem === 'HOME'} onClick={this.handleItemClick}>
                HOME</Menu.Item>
              <Menu.Item name="FEED" active={activeItem === 'FEED'} onClick={this.handleItemClick} >FEED</Menu.Item>
              <Menu.Item name="MY" active={activeItem === 'MY'} onClick={this.handleItemClick} >MY</Menu.Item>
            </Menu>
          </Responsive>}
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    loginCheck: state.auth.get("loginCheck")
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    PageActions: bindActionCreators(pageActions, dispatch),
    VolActions: bindActionCreators(volActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(Footer);