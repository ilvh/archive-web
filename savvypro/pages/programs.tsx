import React, { Component } from "react";

import Layout from "../components/layout";
import { TemplateBanner } from "../components/template/banner";
import Head from "../components/head";
import { ProgramMain } from "../screens/programs/main";
class Programs extends React.Component<{ id: string }> {
  render() {
    return (
      <div className="">
        <Head
          title="Savvypro Programs"
          description="Savvypro is a learning platform"
        />
        <Layout>
          <TemplateBanner />
          <ProgramMain />
        </Layout>
      </div>
    );
  }
}

export default Programs;
