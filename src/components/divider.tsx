import { cn } from '@/lib/utils'

type DividerProps = {
  className?: string
}

export const Divider = ({ className }: DividerProps) => {
  return <hr className={cn('w-[17.5rem] border border-g-400', className)} />
}
