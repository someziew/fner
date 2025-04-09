import { Heading, Text, Button, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  descriptionText?: React.ReactNode;
  zipcodeText?: React.ReactNode;
}

export default function UserProfileSummary({ descriptionText = "Emplois", zipcodeText = "1000", ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-[32%] md:w-full gap-6 p-6 md:px-5 sm:p-5 bg-gradient1 rounded-lg`}
    >
      <Button shape="circle" color="teal_300_33_orange_400_33" className="w-[64px] rounded-[32px] px-5">
        <Img src="img_icon_briefcase.svg" width={24} height={24} />
      </Button>
      <div className="flex flex-1 flex-col items-start gap-2.5">
        <Text size="body_body" as="p" className="text-[14px] font-normal">
          {descriptionText}
        </Text>
        <Heading size="body_body_bold_xxxl" as="h5" className="text-[22px] font-bold !text-gray-200">
          {zipcodeText}
        </Heading>
      </div>
    </div>
  );
}
