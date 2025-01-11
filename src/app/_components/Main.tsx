import Image from 'next/image'
import Link from 'next/link'

import man_woman from '../../../public/man_woman.png'
import organization from '../../../public/organization.png'
import table_meeting from '../../../public/table_meeting.png'
import worshipHand from '../../../public/worshipHand.png'

import { CommonInfoSection, MissionGroupSection, RecommendVideo, SectionButtons } from '.'

import { Divider } from '@/components/divider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLayout } from '@/components/section-layout'

export const Main = () => {
  return (
    <main className="mb-[1.875rem] mt-[3.75rem] flex min-h-dvh flex-col items-center gap-10">
      <SectionButtons />

      <SectionLayout>
        <div id="organization" className="relative flex aspect-[327/526] justify-center">
          <Image src={organization} alt="organization image" fill />
        </div>

        <Card id="worship" className="w-full bg-gradient-to-b from-[#EFB29F] to-[#BB8282]">
          <CardHeader className="text-g-white">
            <CardTitle className="text-H2_26_Bold">청년부 예배</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-[0.4375rem]">
            <p className="text-B3_14_Regular text-g-200">
              주일 오후 2시50분에 청년 1,2부가 모여서 함께 예배를 드립니다. 유튜브 테바프리 계정에
              모든 예배 영상이 업로드 되어 지난 예배 영상도 볼 수 있습니다.
            </p>
            <Image src={worshipHand} alt="worship image" />
            <Button asChild variant={'outline-transparent'} size={'lg'}>
              <Link
                href="https://www.youtube.com/@TEBAHFREE"
                className="text-B1_18_Regular text-g-white">
                예배 영상 보러가기
              </Link>
            </Button>
          </CardContent>
        </Card>
      </SectionLayout>

      <SectionLayout type="video">
        <h3 className="px-6 text-H4_22_Bold">추천 영상</h3>
        <div className="overflow-x-scroll">
          <RecommendVideo />
        </div>
      </SectionLayout>

      <Divider />

      <SectionLayout type="info">
        <Card id="groups" className="bg-gradient-to-b from-[#9FB5EF] to-[#8292BB]">
          <CardHeader className="text-g-white">
            <CardTitle className="text-H2_26_Bold">순 모임</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-[0.4375rem]">
            <Image src={table_meeting} alt="worship image" />
            <p className="text-B3_14_Regular text-g-200">
              청년부 예배 이후 청년 1부, 2부로 나뉘어 말씀과 삶을 나누는 공동체 모임입니다. 4개의
              순(일반순3/ 새가족순1)으로 이루어져 있습니다.
            </p>
          </CardContent>
        </Card>

        <Card id="new" className="bg-gradient-to-b from-[#9FC9EF] to-[#829CBB]">
          <CardHeader className="text-g-white">
            <CardTitle className="text-H2_26_Bold">새가족순</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-[0.4375rem]">
            <Image src={man_woman} alt="worship image" />
            <p className="text-B3_14_Regular text-g-200">
              새가족 순은 새가족순장과 리더들로 이루어져 있습니다. 일반 순으로 등반하기 전 새가족
              교육을 통해 교리를 배우고, 담당 목사님과의 면담을 통해 일반 순으로 배정됩니다.
            </p>
          </CardContent>
        </Card>
      </SectionLayout>

      <MissionGroupSection id="mission-groups" />

      <Divider className="self-center" />

      <Divider className="self-center" />

      <CommonInfoSection id="info" />
    </main>
  )
}
