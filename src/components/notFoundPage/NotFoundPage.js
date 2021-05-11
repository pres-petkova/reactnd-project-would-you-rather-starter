import React,  {Component} from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        
      <div className="NotFoundContainer">
        <img alt="funny 404 message" src="https://d2hotjypbffaov.cloudfront.net/20180405114432/404_Error.jpg" />
        <p style={{ textAlign: "center" }}>
          <Link to="/login">Go to Login </Link>
        </p>
      </div>
      </div>
    );
  }
}
export default NotFoundPage;
