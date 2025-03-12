"use client"

import type React from "react"

import { useState } from "react"

interface ColorPickerProps {
  defaultValue?: string
  onChange?: (value: string) => void
}

export function ColorPicker({ defaultValue = "#000000", onChange }: ColorPickerProps) {
  const [color, setColor] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="h-10 w-10 rounded-md border border-input" style={{ backgroundColor: color }} />
      <input type="color" value={color} onChange={handleChange} className="sr-only" id="color-picker" />
      <label
        htmlFor="color-picker"
        className="flex-1 flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm cursor-pointer"
      >
        {color}
        <span className="text-muted-foreground">Change</span>
      </label>
    </div>
  )
}

