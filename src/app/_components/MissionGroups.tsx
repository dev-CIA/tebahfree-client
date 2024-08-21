import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

export const MissionGroups = () => {
  const MissionGroups = [{ name: '스포츠 선교 소모임', src: '/missionGroup/sports.png' }]
  return (
    <ul>
      {MissionGroups.map(({ name, src }, index) => (
        <li key={index} className="relative">
          <Badge className="absolute left-[18px] top-[14px] z-10">{name}</Badge>
          <Image
            src={src}
            width={200}
            height={100}
            alt="group image"
            className="rounded-[10px]"
            style={{ width: 200, height: 100 }}
          />
        </li>
      ))}
    </ul>
  )
}
