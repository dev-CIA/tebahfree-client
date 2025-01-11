import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CommonInfoSection = () => {
  return (
    <div className="mb-6 flex w-full flex-col gap-6">
      <h3 className="text-H2_26_Bold text-g-black">자주 찾는 정보</h3>
      <div className="grid grid-cols-2 gap-4">
        <a href="https://gkwangsung.com/www.contents.asp?id=sub01_08_new">
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
        </a>
        <a href="https://gkwangsung.com/www.contents.asp?id=sub01_04_new">
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
        </a>
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
        <a href="https://gkwangsung.com/index.asp">
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
        </a>
      </div>
    </div>
  )
}
