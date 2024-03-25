export interface SwitchProps {
  name: string
  isChecked?: boolean
  onChange?: () => void
  className?: string
  classNames?: {
    base?: string
    input?: string
    label?: string
    ball?: string
  }
}
