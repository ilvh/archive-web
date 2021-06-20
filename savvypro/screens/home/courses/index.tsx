import { Component } from "react";
import HomeData from "../data";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import Image, { ImageProps } from "../../../components/elements/image";
const CoursesData = HomeData.Courses;
import { HomeCoursesCarousel } from "./carousel";
import { HomeCoursesCard, HomeCoursesCardProps } from "./card";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { BottomLines } from "./bottomLines";
import { TopLine } from "./topLine";
import { clips } from "./clips";
import { Parallax } from "react-scroll-parallax";
import { courses } from "../../../data/courses";
export interface HomeCoursesData {
  title: string;
  description: string;
  partTitle: string;
  courses: {
    starts: string;
    image: ImageProps;
    name: string;
    pastPrice: string;
    newPrice: string;
    types: string[];
  }[];
  threeInOne: [
    HomeCoursesCardProps,
    HomeCoursesCardProps,
    HomeCoursesCardProps
  ];
  description222: string;
}



export class HomeCourses extends Component {

  galleryItems() {
    return CoursesData.courses1.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems2() {
    return CoursesData.courses2.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems3() {
    return CoursesData.courses3.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems4() {
    return CoursesData.courses4.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems5() {
    return CoursesData.courses5.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems6() {
    return CoursesData.courses6.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: "110px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems7() {
    return CoursesData.courses7.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>

            
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute" }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px" }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: value.pastPrice ?  "110px" : "70px", color: "#ff7676", fontSize: "80" }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems8() {
    return CoursesData.cmsCourses3.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-black text-sm mb-4 font-medium">
            {value.title}</p>
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", marginTop: -10 }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px", marginTop: -10, marginRight: 3 }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: value.pastPrice ?  "110px" : "70px", color: "#ff7676", fontSize: "80", marginTop: -10 }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems9() {
    return CoursesData.cmsCourses2.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-black text-sm mb-4 font-medium">
            {value.title}</p>
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", marginTop: -10 }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px", marginTop: -10, marginRight: 3 }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: value.pastPrice ?  "110px" : "70px", color: "#ff7676", fontSize: "80", marginTop: -10 }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  galleryItems10() {
    return CoursesData.cmsCourses.map((value, i) => (
      <div key={`HomeCourses${i}`} className=" p-3 w-full">
        <div className={`rounded-lg shadow-lg overflow-hidden ${!value.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => { value.link ? window.location.href = value.link : '' }}>
          <div style={{ height: "130px", width: "auto" }} className="relative">
            <Image
              {...value.image}
              className="object-cover w-full object-center h-full"
            />
            <div
              className="absolute text-xs text-white py-2 px-3 shadow-md"
              style={{ top: "117px", right: "0px", backgroundColor: "#e8bab5" }}>
              {value.starts}
              <span className="text-white">开课</span>
            </div>
          </div>
          <div style={{ height: "100px" }} className="p-5">
            <p className="text-black text-sm mb-4 font-medium">
            {value.title}</p>
            <p className="text-gray-600 text-xs mb-4 font-medium">
            {value.name}</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", marginTop: -10 }}>
            价格：</p>
            <p className="text-black text-xs mb-4 font-medium"
            style={{ position: "absolute", textDecoration: 'line-through', left: "70px", marginTop: -10, marginRight: 3 }}>
            {value.pastPrice}</p>
            <p className="text-black mb-4 font-medium"
            style={{ position: "absolute", left: value.pastPrice ?  "110px" : "70px", color: "#ff7676", fontSize: "80", marginTop: -10 }}>
            {value.newPrice}</p>
            <div className="flex font-medium"
            style={{ position: "absolute", top: "180px", right: "20px" }}>
              {value.types.map((type, i) => (
                <div
                  key={`HomeCoursesType${i}`}
                  className={`text-xs rounded-full ${!value.link ? "bg-gray-400 text-white" : "border-green-500 text-green-500"} border-1 px-4 py-2 ${
                    i + 1 !== value.types.length ? "mr-4" : ""
                  }`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const productsItems = [];
    const products = this.props.products;
    const groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    const grouped = groupBy(products, 'title');
    
    for (const key in grouped) {
      const deepGrouped = groupBy(grouped[key], 'subtitle');
      
      for (const subtitle in deepGrouped) {
        productsItems.push({
          title: key,
          subtitle: subtitle,
          courses: deepGrouped[subtitle]
        })
      }
    }

    for (const item of productsItems) {
      let month;
      let day;
      let location;
      let price;
      let promotionPrice;
      let isOnline;
      let link = './courses/SAS-Base-1';

      item.courses = item.courses.filter(el => el.is_enable);

      if (item.courses.length > 0 && item.courses.length < 3) {
        for (let i = 0; i < 2; i++) {
          if (item.courses.length >= 3) break;
  
          item.courses.push(item.courses[0]);
        }
      }

      if (item.title === '证书专场') {
        for (const course of item.courses) {
          if (course.program) {
            const date = new Date(course.program.start_at.replace(/ /g, 'T'));
            month = date.getMonth() + 1;
            day = date.getDate();
            location = course.program.location;
            price = course.program.price;
            promotionPrice = course.program.promotion_price;
            link = `./programs/${course.program.name}`;
          } else if (course.course) {
            const date = new Date(course.course.start_at.replace(/ /g, 'T'));
            month = date.getMonth() + 1;
            day = date.getDate();
            location = course.course.location;
            price = course.course.price;
            promotionPrice = course.course.promotion_price;
            link = `./courses/${course.course.name}`;
          }
    
          if (course.is_online) {
            isOnline = ["查看详情"]
          } else {
            isOnline = ["即将上线"]
          }
          course.is_enable && CoursesData.cmsCourses3.push({
            starts: `${month}月${day}日`,
            name: location,
            title: course.name,
            pastPrice: `$${price}`,
            newPrice: `$${promotionPrice}`,
            types: isOnline,
            link: link,
            image: {
              jpeg: {
                1: `${course.image_url}?resize&size=360`,
                2: `${course.image_url}?resize&size=560`
              },
              webp: {
                1: `${course.image_url}?webp`,
                2: `${course.image_url}?webp`
              }
            }
          })
        }
      } else if (item.title === '实战专场') {
        if (item.subtitle === '软件实战') {
          for (const course of item.courses) {
            if (course.program) {
              const date = new Date(course.program.start_at.replace(/ /g, 'T'));
              month = date.getMonth() + 1;
              day = date.getDate();
              location = course.program.location;
              price = course.program.price;
              promotionPrice = course.program.promotion_price;
              link = `./programs/${course.program.name}`;
            } else if (course.course) {
              const date = new Date(course.course.start_at.replace(/ /g, 'T'));
              month = date.getMonth() + 1;
              day = date.getDate();
              location = course.course.location;
              price = course.course.price;
              promotionPrice = course.course.promotion_price;
              link = `./courses/${course.course.name}`;
            }
      
            if (course.is_online) {
              isOnline = ["查看详情"]
            } else {
              isOnline = ["即将上线"]
            }
            course.is_enable && CoursesData.cmsCourses.push({
              starts: `${month}月${day}日`,
              name: location,
              pastPrice: `$${price}`,
              newPrice: `$${promotionPrice}`,
              types: isOnline,
              title: course.name,
              link: link,
              image: {
                jpeg: {
                  1: `${course.image_url}?resize&size=360`,
                  2: `${course.image_url}?resize&size=560`
                },
                webp: {
                  1: `${course.image_url}?webp`,
                  2: `${course.image_url}?webp`
                }
              }
            })
          }
        } else {
          for (const course of item.courses) {
            if (course.program) {
              const date = new Date(course.program.start_at.replace(/ /g, 'T'));
              month = date.getMonth() + 1;
              day = date.getDate();
              location = course.program.location;
              price = course.program.price;
              promotionPrice = course.program.promotion_price;
              link = `./programs/${course.program.name}`;
            } else if (course.course) {
              const date = new Date(course.course.start_at.replace(/ /g, 'T'));
              month = date.getMonth() + 1;
              day = date.getDate();
              location = course.course.location;
              price = course.course.price;
              promotionPrice = course.course.promotion_price;
              link = `./courses/${course.course.name}`;
            }
      
            if (course.is_online) {
              isOnline = ["查看详情"]
            } else {
              isOnline = ["即将上线"]
            }
            course.is_enable && CoursesData.cmsCourses2.push({
              starts: `${month}月${day}日`,
              name: location,
              pastPrice: `$${price}`,
              newPrice: `$${promotionPrice}`,
              types: isOnline,
              title: course.name,
              link: link,
              image: {
                jpeg: {
                  1: `${course.image_url}?resize&size=360`,
                  2: `${course.image_url}?resize&size=560`
                },
                webp: {
                  1: `${course.image_url}?webp`,
                  2: `${course.image_url}?webp`
                }
              }
            })
          }
        }
      }
    }

    const Cards = CoursesData.threeInOne;
    return (
      <div className="relative">
        <Container className="py-36 relative z-10">
          {/* 课程列表 */}

          {/* 第一行 */}
          {
            CoursesData.cmsCourses3 && CoursesData.cmsCourses3.length > 0 ? (
              <div>
                <SectionTitle
                  title={CoursesData.cmsTitle3}
                  partTitle={CoursesData.cmsSubtitle3}
                  className="flex flex-col items-center text-center"
                  // descriptionClass="text-2xl"
                  partTitleClass="text-xl items-left text-left text-blue-500"
                  type="second"
                  titleColor="#4775df"
                />
                <HomeCoursesCarousel galleryItems={this.galleryItems8} />
                <br/><br/>
              </div>
            ) : null
          }

          {
            CoursesData.cmsCourses && CoursesData.cmsCourses.length > 0 ? (
              <div>
               <SectionTitle
                  title={CoursesData.cmsTitle}
                  partTitle={CoursesData.cmsSubtitle}
                  className="flex flex-col items-center text-center"
                  partTitleClass="text-xl items-left text-left text-blue-500"
                  type="second"
                  titleColor="#4775df"
                />
                <HomeCoursesCarousel galleryItems={this.galleryItems10} />
                <br/><br/>
              </div>
            ) : null
          }

          {
            CoursesData.cmsCourses2 && CoursesData.cmsCourses2.length > 0 ? (
              <div>
                <SectionTitle
                  // title={CoursesData.cmsTitle2}
                  partTitle={CoursesData.cmsSubtitle2}
                  className="flex flex-col items-center text-center"
                  // descriptionClass="text-2xl"
                  partTitleClass="text-xl items-left text-left text-blue-500"
                  type="second"
                  titleColor="#4775df"
                />
                <HomeCoursesCarousel galleryItems={this.galleryItems9} />
                <br/><br/>
              </div>
            ) : null
          }

          {/* 第二行
          <SectionTitle
            title={CoursesData.title2}
            separator={false}
            partTitle={CoursesData.description2}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-blue-500"
            type="second"
            titleColor="#4775df"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems2} />
          <br/><br/> */}

          {/* 第三行 */}
          {/* <SectionTitle
            separator={false}
            partTitle={CoursesData.description3}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-blue-500"
            type="third"
            titleColor="#4775df"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems3} />
          <br/><br/> */}

          {/* 第四行 */}
          {/* <SectionTitle
            title={CoursesData.title4}
            separator={false}
            partTitle={CoursesData.description4}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-red-500"
            type="forth"
            titleColor="#e67184"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems4} />
          <br/><br/> */}

          {/* 第五行 */}
          {/* <SectionTitle
            separator={false}            
            partTitle={CoursesData.description5}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-red-500"
            type="fifth"
            titleColor="#e67184"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems5} />
          <br/><br/> */}

          {/* 第六行 */}
          {/* <SectionTitle
            separator={false}          
            partTitle={CoursesData.description6}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-red-500"
            type="sixth"
            titleColor="#e67184"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems6} />
          <br/><br/> */}

          {/* 第七行 */}
          {/* <SectionTitle
            separator={false}         
            partTitle={CoursesData.description7}
            className="flex flex-col items-center text-center"
            partTitleClass="text-xl items-left text-left text-red-500"
            type="seventh"
            titleColor="#e67184"
          />
          <HomeCoursesCarousel galleryItems={this.galleryItems7} />
          <br/><br/> */}

          <SectionTitle
            separator={false}
            description={CoursesData.description222}
            className="flex flex-col items-center text-center"
            descriptionClass="text-2xl"
          />
          <div>
            <svg className="opacity-0 h-0 w-0 m-0 p-0">
              <linearGradient
                id="HomeCoursesCardGradient"
                x1="0"
                x2="0"
                y1="0"
                y2="1">
                <stop offset="0%" stopColor="#96E8C9" />
                <stop offset="50%" stopColor="green" stopOpacity="5" />
                <stop offset="100%" stopColor="#54B78A" />
              </linearGradient>
            </svg>
            <div className="flex justify-center mb-5 md:pb-24 md:mb-0 relative z-10">
              <HomeCoursesCard {...Cards[0]} />
            </div>
            <div className="md:flex">
              {Cards.slice(1, 3).map((value, i) => (
                <div
                  key={`HomeCoursesThreeCards${i}`}
                  className="mb-5  flex justify-center md:w-1/2 md:mb-0 relative">
                  <TopLine side={i === 0 ? "left" : "right"} />
                  <div className="flex-1 relative hidden md:block">
                    {i === 1 ? <BottomLines side="right" /> : undefined}
                  </div>
                  <HomeCoursesCard {...value} />
                  <div className="flex-1 relative hidden md:block">
                    {i === 0 ? <BottomLines side="left" /> : undefined}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Parallax
          y={[-70, 70]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ left: "0", top: "13%" }}>
          <Image {...clips[1]} />
        </Parallax>
        <Parallax
          y={[-40, 40]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ right: "0", bottom: "8%" }}>
          <Image {...clips[2]} />
        </Parallax>
        <Parallax
          y={[-70, 70]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ right: "6%", top: "22%" }}>
          <Image {...clips[3]} />
        </Parallax>
        <Parallax
          y={[-40, 40]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ left: "12%", top: "57%" }}>
          <Image
            {...clips[4]}
            style={{ transform: "rotate(80deg) scale(2.5)" }}
          />
        </Parallax>
      </div>
    );
  }
}
