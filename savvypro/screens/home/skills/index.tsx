import { Component } from "react";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../data";
const SkillsData = HomeData.Skills;
import Image, { ImageProps } from "../../../components/elements/image";
export interface HomeSkillsData {
  title: string;
  skills: {
    image: ImageProps;
    text: string;
    url: string;
  }[];
}
export class HomeSkills extends Component {
  render() {
    return (
      <div className="section-background">
        <Container className="py-36 ">
          <SectionTitle
            className="text-center flex flex-col items-center"
            title={SkillsData.title}
          />
          <div className="flex flex-wrap -m-3 main-course-section">
            {SkillsData.skills.map((value, i) => (
              <div key={i} className="p-3 w-1/2  md:w-1/3 lg:w-1/4">
                <div
                  className="course-card shadow-md  p-8 bg-white text-center text-gray-700 rounded-lg flex flex-col items-center hover:shadow-lg transition"
                  key={`HomeSkills${i}`} style={{ height: '100%' }}>
                  <a href={value.url}>
                    <Image
                      {...value.image}
                      className=" mb-3"
                      style={{ maxHeight: "75px", maxWidth: "75px" }}
                    />
                    {value.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
