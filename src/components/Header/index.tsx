"use client";

import { CloseSVG } from "../Input/close";
import { Img, Heading, Input } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center px-2.5 py-3 bg-gray-50 shadow-xs`}>
      <div className="mx-auto flex w-full max-w-[1420px] justify-between gap-5 md:flex-col">
        <div className="flex">
          <div className="flex items-center gap-2">
            <Link href="#">
              <Img src="img_hamburger_button.svg" width={24} height={24} alt="Hamburger" className="h-[24px]" />
            </Link>
            <Img
              src="img_header_logo.png"
              width={94}
              height={38}
              alt="Headerlogo"
              className="h-[38px] w-[94px] object-contain"
            />
          </div>
        </div>
        <div className="flex w-[34%] justify-center gap-9 md:w-full sm:flex-col">
          <div className="flex flex-1 justify-between gap-5 sm:self-stretch">
            <Input
              size="sm"
              shape="round"
              name="search"
              placeholder={`Search`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#94a3b8ff" />
                ) : (
                  <Img
                    src="img_search.svg"
                    width={24}
                    height={24}
                    alt="Search"
                    className="h-[24px] w-[24px] object-contain"
                  />
                )
              }
              className="w-[78%] gap-4 rounded-[20px] border border-solid border-blue_gray-100 px-2.5 text-slate-400"
            />
            <div className="relative h-[40px] w-[8%]">
              <div className="absolute right-px top-0 m-auto flex h-[24px] w-[24px] flex-col items-center justify-center rounded-[12px] bg-red-600 md:h-auto">
                <Heading size="headingxs" as="p" className="text-[14px] font-bold !text-white-a700">
                  3
                </Heading>
              </div>
              <Link href="#">
                <Img
                  src="img_bell.svg"
                  width={24}
                  height={24}
                  alt="Bell"
                  className="absolute bottom-0 left-0 m-auto h-[24px]"
                />
              </Link>
            </div>
          </div>
          <Link href="#">
            <Img
              src="img_profile_avatar.png"
              width={40}
              height={40}
              alt="Profileavatar"
              className="h-[40px] rounded-[20px] object-cover sm:w-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
