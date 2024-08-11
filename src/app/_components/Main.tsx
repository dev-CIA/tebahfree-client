import Image from 'next/image'
import Link from 'next/link'

import organization from '../../../public/organization.png'
import worshipHand from '../../../public/worshipHand.png'

import { SectionButtons } from '.'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Main = () => {
  return (
    <main className="mt-[3.75rem] flex min-h-screen flex-col items-center gap-10 px-6">
      <SectionButtons />
      <Image src={organization} alt="organization image" />
      <Card className="bg-gradient-to-b from-[#EFB29F] to-[#BB8282]">
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
    </main>
  )
}
