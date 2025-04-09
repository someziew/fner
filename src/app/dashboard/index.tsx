import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UserProfileSummary from "../../components/UserProfileSummary";
import React, { Suspense } from "react";

const dashboardOverview = [
  { descriptionText: "Emplois", zipcodeText: "1000" },
  { descriptionText: "Formations", zipcodeText: "1000" },
  { descriptionText: "Stages", zipcodeText: "1000" },
];

export default function DashboardPage() {
  return (
    <div className="w-full bg-gray-50_01">
      <div>
        <Header />
        <div className="mr-[52px] flex items-start justify-between gap-5 md:mr-0">
          <Sidebar1 />
          <div className="ml-[70px] mt-[86px] flex w-[80%] gap-32 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {dashboardOverview.map((d, index) => (
                <UserProfileSummary {...d} key={"dashboard" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
