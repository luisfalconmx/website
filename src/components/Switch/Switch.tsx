import { useState, useEffect } from 'react'
import cn from '@/utils/cn'
import styles from './Switch.module.css'
import type { SwitchProps } from './Switch.d'

const Switch = ({
  name,
  isChecked = false,
  onChange,
  className = '',
  classNames = {
    base: '',
    input: '',
    label: '',
    ball: ''
  }
}: SwitchProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = () => {
    setChecked(!checked)

    if (onChange) {
      onChange()
    }
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <div className={cn(styles['Switch'], classNames.base, className)}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
        className={cn(styles['Switch__input'], classNames.input)}
      />
      <label
        htmlFor={name}
        className={cn(styles['Switch__label'], classNames.label)}
      >
        <span className={cn(styles['Switch__ball'], classNames.ball)} />
      </label>
    </div>
  )
}

export default Switch
