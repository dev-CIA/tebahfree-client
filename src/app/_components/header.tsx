import Image from 'next/image'

import mainImg from '../../../public/mainImg.svg'
import tebahfreeLogo from '../../../public/tebahfreeLogo.svg'

export const Header = () => {
  return (
    <header className="flex flex-col items-center gap-5">
      <div className="h-[3.375rem] w-full px-6 py-5">
        <Image src={tebahfreeLogo} alt="tebahfree-logo" priority sizes="100vw" />
      </div>
      <div className="relative">
        <div className="absolute left-6 top-14 z-10">
          <div className="text-3xl font-light text-g-white">은헤광성교회</div>
          <div className="text-3xl font-bold text-g-white">청년부</div>
          <div className="mt-4 whitespace-pre-line text-sm font-light text-g-white">
            {`은혜광성교회 청년부는 진리를 통해 자유함을 누리는\n청년들의 공동체 입니다`}
          </div>
        </div>
        <div className="relative aspect-[375/436] w-dvw min-w-[360px] max-w-[600px]">
          <Image src={mainImg} alt="main-img" priority fill />
        </div>
      </div>
    </header>
  )
}
