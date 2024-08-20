import Image from 'next/image'

import { PlayListItems } from '@/interfaces'
import { fetchYoutube } from '@/lib/fetchYoutube'

export const RecommendVideo = async () => {
  const { items: videoList } = await fetchYoutube()

  return (
    <ul className="flex w-full flex-grow gap-3">
      {videoList.map(({ snippet: { thumbnails, resourceId }, id }: PlayListItems) => (
        <li key={id} className="min-w-fit">
          <a href={`https://www.youtube.com/watch?v=${resourceId?.videoId}`}>
            <Image
              src={thumbnails.medium.url}
              alt="thumbnails"
              width={220}
              height={122}
              className="rounded-md"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
