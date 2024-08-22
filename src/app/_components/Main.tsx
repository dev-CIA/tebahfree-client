import Image from 'next/image'
import Link from 'next/link'

import man_woman from '../../../public/man_woman.png'
import organization from '../../../public/organization.png'
import table_meeting from '../../../public/table_meeting.png'
import worshipHand from '../../../public/worshipHand.png'

import { RecommendVideo, SectionButtons } from '.'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Main = () => {
  return (
    <main className="mt-[3.75rem] flex min-h-screen flex-col items-center gap-10 px-6">
      <SectionButtons />

      <Image src={organization} alt="organization image" />

      <Card className="w-full bg-gradient-to-b from-[#EFB29F] to-[#BB8282]">
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

      <div className="flex w-full flex-col gap-6">
        <h3 className="text-H4_22_Bold">추천 영상</h3>
        <div className="overflow-x-scroll">
          <RecommendVideo />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6">
        <Card className="bg-gradient-to-b from-[#9FB5EF] to-[#8292BB]">
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

        <Card className="bg-gradient-to-b from-[#9FC9EF] to-[#829CBB]">
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

        <Card className="border-0">
          <CardHeader className="px-0 pb-4 text-g-black">
            <CardTitle className="text-H2_26_Bold">선교 소모임</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center px-0">
            <p className="text-B3_14_Regular text-t-500">
              선교소모임은 8개의 팀으로 구성되어 교회공동체를 벗어나 지역사회와 열방을 향해 나아갈
              선교적 소명을 가진 공동체입니다. 각자의 소명과 재능을 발휘할 수 있는 팀에 소속되어
              매달 네번째 주 예배 후에 선교소모임을 진행합니다.
            </p>
            {/* <hr className="my-6 h-[1px] w-full border-0 bg-g-400" /> */}
          </CardContent>
        </Card>

        <div className="mb-6 flex w-full flex-col gap-6">
          <h3 className="text-H2_26_Bold text-g-black">자주 찾는 정보</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="relative aspect-square border-g-300 bg-g-200 p-5">
              <CardHeader className="mb-2 px-0 py-0 text-b-navy">
                <CardTitle className="text-H6_18_Bold">오시는 길</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="whitespace-pre text-B4_12_Regular text-t-400">
                  서울 강동구 천중로{'\n'}18길 72
                </p>
              </CardContent>
              <Image
                src="/bottomInfo/map.png"
                width={59}
                height={35}
                alt="오시는 길 이미지"
                className="absolute bottom-5"
              />
            </Card>
            <Card className="relative aspect-square border-g-300 bg-g-200 p-5">
              <CardHeader className="mb-2 px-0 py-0 text-b-navy">
                <CardTitle className="text-H6_18_Bold">예배시간 안내</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-B4_12_Regular text-t-400">예배시간을 확인하세요.</p>
              </CardContent>
              <Image
                src="/bottomInfo/time.png"
                width={42}
                height={42}
                alt="오시는 길 이미지"
                className="absolute bottom-5"
              />
            </Card>
            <Card className="relative aspect-square border-g-300 bg-g-200 p-5">
              <CardHeader className="mb-2 px-0 py-0 text-b-navy">
                <CardTitle className="text-H6_18_Bold">새가족 안내</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-B4_12_Regular text-t-400">새가족을 환영합니다!</p>
              </CardContent>
              <Image
                src="/bottomInfo/computer.png"
                width={48}
                height={30}
                alt="오시는 길 이미지"
                className="absolute bottom-5"
              />
            </Card>
            <Card className="relative aspect-square border-g-300 bg-g-200 p-5">
              <CardHeader className="mb-2 px-0 py-0 text-b-navy">
                <CardTitle className="text-H6_18_Bold">교회 소개</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="whitespace-pre text-B4_12_Regular text-t-400">
                  은혜광성교회를{'\n'}소개합니다!
                </p>
              </CardContent>
              <Image
                src="/bottomInfo/church.png"
                width={68}
                height={51}
                alt="오시는 길 이미지"
                className="absolute bottom-5 left-[-0.075rem]"
              />
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
