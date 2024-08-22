import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

export const MissionGroups = () => {
  const MissionGroups = [
    { name: '스포츠 선교 소모임', src: '/missionGroup/sportsMission.png' },
    { name: '지역봉사 선교 소모임', src: '/missionGroup/community.png' },
    { name: '미디어 콘텐츠 선교 소모임', src: '/missionGroup/media.png' },
    { name: '후원기획 선교 소모임', src: '/missionGroup/sponsor.png' },
    { name: '독서 선교 소모임', src: '/missionGroup/reading.png' },
    { name: '중보기도 선교 소모임', src: '/missionGroup/pray.png' },
    { name: 'it 선교 소모임', src: '/missionGroup/it.png' },
    { name: '찬양 작사작곡 선교 소모임', src: '/missionGroup/worship.png' },
  ]
  return (
    <ul>
      {MissionGroups.map(({ name, src }, index) => (
        <li
          key={index}
          className="relative h-[100px] w-[200px] overflow-hidden rounded-[10px] bg-red-500">
          <Badge className="absolute left-[10px] top-[10px] z-10">{name}</Badge>
          <Image
            src={src}
            width={200}
            height={100}
            alt="group image"
            className="overflow-hidden"
            style={{ width: 210, maxWidth: '110%', position: 'relative', left: -4 }}
          />
        </li>
      ))}
    </ul>
  )
}
