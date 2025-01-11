import Image from 'next/image'
import Link from 'next/link'

import { SectionLayout } from '@/components/section-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type SectionProps } from '@/types/section'

export const CommonInfoSection = ({ id }: SectionProps) => {
  return (
    <SectionLayout id={id} type="info">
      <h3 className="text-H2_26_Bold text-g-black">자주 찾는 정보</h3>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <a href="https://gkwangsung.com/www.contents.asp?id=sub01_08_new">
            <Card variant="mini">
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
            <Card variant="mini">
              <CardHeader className="mb-2 px-0 py-0 text-b-navy">
                <CardTitle className="text-H6_18_Bold">예배시간 안내</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="whitespace-pre text-B4_12_Regular text-t-400">
                  5부 청년예배{'\n'}오후 2시 50분
                </p>
              </CardContent>
              <Image
                src="/bottomInfo/time.png"
                width={35}
                height={35}
                alt="시계 이미지"
                className="absolute bottom-5"
              />
            </Card>
          </a>
        </div>

        <Card variant="plane" className="relative h-[156px] w-full">
          <CardHeader className="mb-2 px-0 py-0 text-b-navy">
            <CardTitle className="text-H6_18_Bold">교회 소개</CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <p className="whitespace-pre text-B4_12_Regular text-t-400">
              예배가 살아있는 교회,{'\n'}은혜광성교회를 소개합니다!
            </p>
            <Button variant="third" size="xs" className="mt-5">
              <Link href="https://gkwangsung.com" className="text-b-orange">
                교회 홈페이지 보기
              </Link>
            </Button>
          </CardContent>
          <Image
            src="/bottomInfo/church.png"
            width={80}
            height={60}
            alt="오시는 길 이미지"
            className="absolute bottom-5 right-3"
          />
        </Card>
      </div>
    </SectionLayout>
  )
}
