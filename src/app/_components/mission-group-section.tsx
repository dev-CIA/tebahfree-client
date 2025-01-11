import { SectionLayout } from '@/components/section-layout'
import { type SectionProps } from '@/types/section'
import { MissionGroups } from './mission-groups'

export const MissionGroupSection = ({ id }: SectionProps) => {
  return (
    <SectionLayout id={id} type="info">
      <h2 className="text-H2_26_Bold">선교 소모임</h2>
      <div>
        <p className="mb-6 text-B3_14_Regular text-t-500">
          선교소모임은 8개의 팀으로 구성되어 교회공동체를 벗어나 지역사회와 열방을 향해 나아갈
          선교적 소명을 가진 공동체입니다. 각자의 소명과 재능을 발휘할 수 있는 팀에 소속되어 매달
          네번째 주 예배 후에 선교소모임을 진행합니다.
        </p>

        <MissionGroups />
      </div>
    </SectionLayout>
  )
}
