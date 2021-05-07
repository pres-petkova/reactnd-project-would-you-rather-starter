import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    console.log("AHAHAHA");
    return (
      <div>
        <img src="https://d2hotjypbffaov.cloudfront.net/20180405114432/404_Error.jpg" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
