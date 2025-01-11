import Image from 'next/image'

import { SectionLayout } from '@/components/section-layout'
import { SectionProps } from '@/types/section'

export const UnendingWorshipSection = ({ id }: SectionProps) => {
  return (
    <SectionLayout id={id} className="items-center gap-0">
      <h2 className="mb-[6px] text-H1_30_Bold text-g-black">Unending Worship</h2>
      <p className="mb-[31px] text-B3_14_Regular text-t-400">은혜광성교회 청년부 예배팀</p>

      <p className="mb-8 w-[206px] whitespace-break-spaces text-center text-B3_14_Regular text-t-500">
        내가 드러나는 것이 아닌,{'\n'}하나님만을 드러내고 찬양하기 위해 모인 공동체입니다.
      </p>
      <Image src="/unending/cloud_music.png" width={105} height={64} alt="연주하는 남자 이미지" />
      <p className="mb-8 mt-[26px] w-[220px] whitespace-break-spaces text-B4_12_Regular text-t-500">
        삶에서도 예배자로, 산 제물로 자신을 올려드리기 위한 연습과 나눔을 함께 진행하고 있습니다.
      </p>
      <Image
        src="/unending/man_plays_guitar.png"
        width={104}
        height={84}
        alt="연주하는 남자 이미지"
      />
      <p className="mt-[9px] w-[220px] whitespace-break-spaces text-B4_12_Regular text-t-500">
        인도자와 싱어팀, 악기팀, 미디어 팀으로 구성되어 매주 예배의 시작을 찬양으로 열어갑니다.
      </p>
    </SectionLayout>
  )
}
