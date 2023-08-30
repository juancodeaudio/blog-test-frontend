'use client'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/switch";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const changeTheme = () => {
    theme === 'dark' ?  setTheme('light'): setTheme('dark')
  }

  return (
    <>
      <Switch
        size="sm"
        isSelected={theme === 'dark'}
        onValueChange={changeTheme}/> 
    </>
  )
};