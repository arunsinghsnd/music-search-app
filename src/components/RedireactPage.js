import React, { Component } from "react";
import _ from "lodash";
import { getParamValues } from "../utils/funtions";
export default class RedireactPage extends Component {
  componentDidMount() {
    const { setExpiryTime, history, loaction } = this.props;
    try {
      if (_.isEmpty(loaction.hash)) {
        return history.push("/dashboard");
      }

      const access_token = getParamValues(loaction.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_in", expiryTime);
      history.push("/dashboard");
    } catch (error) {
      history.push("/");
    }
  }

  render() {
    return null;
  }
}
