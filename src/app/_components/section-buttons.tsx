'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const SectionButtons = () => {
  const [selectedBtn, setSelectedBtn] = useState('organization')

  return (
    <div className="w-100vw flex flex-wrap gap-[0.3125rem] px-[0.5625rem]">
      {[
        { value: 'organization', label: '청년부 조직도' },
        { value: 'worship', label: '청년부 예배' },
        { value: 'group', label: '순모임' },
        { value: 'new', label: '새가족순' },
        { value: 'missionGroup', label: '선교 소모임' },
        { value: 'unending', label: '언엔딩 워십' },
        { value: 'info', label: '자주찾는 정보' },
      ].map(({ value, label }, index) => (
        <Button
          key={`${value}-${index}`}
          variant={selectedBtn === value ? 'default' : 'secondary'}
          size={'chip'}
          onClick={() => {
            setSelectedBtn(value)
          }}>
          <Link href={`#${value}`}>{label}</Link>
        </Button>
      ))}
    </div>
  )
}
