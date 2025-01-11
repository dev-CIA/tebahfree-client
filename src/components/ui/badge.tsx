import clsx from 'clsx'
import { ReactNode } from 'react'

type BadgeProps = {
  className?: string
  variant?: string
  children: ReactNode
}

export const Badge = ({ className, variant = 'default', children }: BadgeProps) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-B4_12_Regular text-t-100',
        {
          ['bg-b-navy']: variant === 'default',
        },
        className,
      )}>
      {children}
    </div>
  )
}
