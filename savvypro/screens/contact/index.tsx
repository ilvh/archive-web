import { Component } from "react";
import MapContainer from "../../components/elements/map";
import Container from "../../components/layout/container";
import { ContactData } from "./data";
import { SectionTitle } from "../../components/layout/section-title";
export class Contact extends Component {
  render() {
    return (
      <Container className="pt-24 pb-0">
        {/* <div className="relative h-80 rounded-lg shadow-custom2 overflow-hidden">
          <MapContainer markers={ContactData.locations} />
        </div> */}
        <SectionTitle
          title={ContactData.title}
          className="relative flex items-center flex-col pt-24"
        />
        <div className="md:flex md:-mx-3">
          {ContactData.locations.map((value, i) => (
            <div key={i} className="md:w-1/2 md:px-3" style={{ marginTop: 20 }}>
              <div className="rounded-lg overflow-hidden shadow-custom2">
                <div className=" background-gradient text-white text-2xl text-center py-4">
                  {value.name}
                </div>
                <div className="text-sm text-gray-600 p-7 text-center">
                  {value.address && <div className="py-2">
                    <span className="text-green-500">地址：</span>
                    {value.address}
                  </div>}
                  <div className="py-2">
                    <span className="text-green-500">电话：</span>
                    {value.phoneNumber}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
