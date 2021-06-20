import { Component } from "react";
export interface TemplateInfoCardProps {
  title: string;
  topBody: string[] | string;

  times: { end: Date; dates: Date[] }[];
}

export class TemplateInfoCard extends Component<TemplateInfoCardProps> {
  render() {
    return <div>Test</div>;
  }
}
