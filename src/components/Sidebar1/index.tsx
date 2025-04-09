"use client";

import { Img, Heading } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="248px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 28 } }}
      className={`${props.className} flex flex-col self-center h-screen pt-[22px] gap-7 top-0 px-2.5 sm:pt-5 bg-teal-600 !sticky overflow-auto`}
    >
      <div className="flex flex-col gap-7 self-stretch">
        <div className="flex flex-col items-start gap-3.5">
          <Img
            src="img_profile_avatar_50x50.png"
            width={50}
            height={50}
            alt="Profileavatar"
            className="h-[50px] rounded-[24px] object-cover"
          />
          <div className="flex flex-col items-start justify-center gap-4 self-stretch py-1.5">
            <Heading size="headings" as="h6" className="text-[16px] font-bold !text-white-a700">
              David Kuukpier
            </Heading>
            <Heading size="headings" as="h6" className="text-[16px] font-bold !text-white-a700">
              kdavis@live.fr
            </Heading>
          </div>
        </div>
        <div className="h-px bg-white-a700" />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px",
            gap: "8px",
            backgroundColor: "#196c64",
            color: "#e6e8e9",
            fontWeight: 400,
            fontSize: "14px",
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "14px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="img_icon_dashboard.svg"
              width={24}
              height={24}
              alt="Icondashboard"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Tableau de board
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_icon_briefcase.svg"
              width={24}
              height={24}
              alt="Iconbriefcase"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Emplois
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_icon_learning.svg" width={24} height={24} alt="Iconlearning" className="h-[24px] w-[24px]" />
          }
        >
          Formations
        </MenuItem>
        <MenuItem
          icon={<Img src="img_icon_certificate.svg" width={24} height={24} alt="Icon" className="h-[24px] w-[24px]" />}
        >
          Stages
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_icon_building.svg" width={24} height={24} alt="Iconbuilding" className="h-[24px] w-[24px]" />
          }
        >
          Employeurs
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_icon_arrowsleftright.svg" width={24} height={24} alt="Icon" className="h-[24px] w-[24px]" />
          }
        >
          Agences
        </MenuItem>
        <MenuItem
          icon={<Img src="img_icon_users.svg" width={24} height={24} alt="Iconusers" className="h-[24px] w-[24px]" />}
        >
          Utilisateurs
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
