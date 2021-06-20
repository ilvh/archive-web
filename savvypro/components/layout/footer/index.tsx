import TheCopyright from "./copyright";

import React, { Component } from "react";

import { TheFooterQuestions } from "./questions";
import { TheFooterNav } from "./nav";
class TheFooter extends Component {
  render() {
    return (
      <div>
        <TheFooterQuestions />

        <TheFooterNav />
        <TheCopyright />
      </div>
    );
  }
}

export default TheFooter;
