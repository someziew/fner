"use client";

import { Heading, Img, Text, Button, Input } from "../../components";
import React from "react";

export default function SigninPage() {
  return (
    <div className="flex w-full justify-center bg-gray-50_01 px-14 py-[212px] md:p-5">
      <div className="flex w-[62%] items-start justify-center rounded-[16px] border-[7px] border-solid border-white-a700 bg-gray-50_01 p-2 md:w-full md:flex-col">
        <div className="mt-[22px] flex w-full flex-col items-start gap-9">
          <Heading size="heading_h3" as="p" className="text-[26px] font-normal md:text-[24px] sm:text-[22px]">
            Se connecter
          </Heading>
          <div className="flex flex-col gap-[58px] self-stretch sm:gap-[29px]">
            <div className="flex flex-col items-start gap-4">
              <div className="flex w-[86%] flex-col items-end gap-2.5 md:w-full">
                <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                  <Heading size="texts" as="h1" className="text-[14px] font-medium !text-blue_gray-800">
                    E-mail
                  </Heading>
                  <Input shape="round" name="email" className="self-stretch rounded-[18px] px-3" />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                  <Heading size="texts" as="h2" className="text-[14px] font-medium !text-blue_gray-800">
                    Mot de passe
                  </Heading>
                  <Input shape="round" name="edittext" className="self-stretch rounded-[18px] px-3" />
                </div>
                <Text size="textxs" as="p" className="text-[12px] font-normal !text-black-900">
                  Changer de mot de passe
                </Text>
              </div>
              <Button size="xs" variant="fill" shape="round" className="min-w-[340px] rounded-[20px] px-[34px] sm:px-5">
                Créer un compte
              </Button>
            </div>
            <div className="mx-[58px] flex flex-wrap md:mx-0">
              <Text size="textxs" as="p" className="text-[12px] font-normal !text-black-900">
                Vous n’avez pas de compte?
              </Text>
              <Heading size="body_footer_bold" as="h3" className="text-[12px] font-bold !text-teal-900">
                S’inscrire
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 self-center rounded-[16px] bg-gradient2 py-[74px] md:p-5">
          <Img src="img_logo_1.png" width={390} height={156} alt="Logoone" className="h-[156px] object-cover" />
          <div className="mx-[22px] mb-1 flex flex-col items-start md:mx-0">
            <Heading as="h2" className="text-[48px] font-medium italic md:text-[44px] sm:text-[38px]">
              La plateforme{" "}
            </Heading>
            <Heading as="h3" className="ml-12 text-[48px] font-medium italic md:ml-0 md:text-[44px] sm:text-[38px]">
              Ivoirienne
            </Heading>
            <Heading
              as="h4"
              className="mr-[60px] mt-3 self-end text-[48px] font-medium italic md:mr-0 md:text-[44px] sm:text-[38px]"
            >
              de l’emploi
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
