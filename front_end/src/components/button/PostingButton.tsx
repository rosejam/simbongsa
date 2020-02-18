import React, { ReactElement, Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

// import "assets/mycss";

interface IProps {
  v_id: string;
}

class PostingButton extends Component<IProps, {}> {
  state = {};

  render() {
    return (
      <Link
        to={{
          pathname: `write`,
          state: this.props.v_id
        }}
      >
        <Button>모집글 쓰러 가기</Button>
      </Link>
    );
  }
}

export default PostingButton;
