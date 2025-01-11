'use client'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { MISSION_GROUPS } from '@/constants/mission-groups'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const MissionGroups = () => {
  const [groupCnt, setGroupCnt] = useState<number>(3)

  const groups = MISSION_GROUPS.slice(0, groupCnt)

  return (
    <div className="flex flex-col justify-center gap-4">
      <ul className="flex flex-col gap-4">
        {groups.map(({ name, src, content }, index) => (
          <li
            key={`${index}-${name}`}
            className="flex w-full gap-3 overflow-hidden rounded-[15px] bg-g-200 px-3 py-4">
            <div className="flex items-center justify-center">
              <Badge className="relative flex h-[31px] w-[31px] items-center justify-center self-center rounded-full bg-b-navy p-7">
                <div className="relative flex h-[17px] w-[20px] items-center justify-center">
                  <Image src={src} fill alt="group image" className="overflow-hidden" />
                </div>
              </Badge>
            </div>
            <div className="flex flex-col justify-between gap-[5px]">
              <div className="text-B3_14_Regular font-bold text-g-black">{name}</div>
              <p className="text-B4_12_Regular text-t-400">{content}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="flex items-center justify-center gap-[6px] self-center rounded-full px-[3.3rem] py-2"
        onClick={() => {
          setGroupCnt(groupCnt => (groupCnt === 3 ? MISSION_GROUPS.length : 3))
        }}>
        <p className="text-B3_14_Regular text-g-800">{groupCnt === 3 ? '더보기' : '접기'}</p>
        <Image
          src={`${groupCnt === 3 ? '/arrow-down.svg' : '/arrow-up.svg'}`}
          alt={''}
          width={20}
          height={20}
        />
      </Button>
    </div>
  )
}
