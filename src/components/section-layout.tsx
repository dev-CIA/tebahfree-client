import { cva, type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const layoutVariants = cva('px-6 flex w-full flex-col', {
  variants: {
    type: {
      default: 'gap-10',
      info: 'gap-6',
      video: 'px-0 gap-6',
    },
  },
  defaultVariants: {
    type: 'default',
  },
})

interface SectionLayoutProps extends PropsWithChildren, VariantProps<typeof layoutVariants> {
  id?: string
  type?: 'default' | 'info' | 'video'
  className?: string
}

export const SectionLayout = ({ id, type, className, children }: SectionLayoutProps) => {
  return (
    <div id={id} className={cn(layoutVariants({ type, className }))}>
      {children}
    </div>
  )
}
