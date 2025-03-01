import React from 'react'
import { useState } from 'react'

const Ex49 = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: true,
        autoDebit: true
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const checked = input.checked
        setSettings({
            ...settings,
            [key]: checked
        })
    }

  return (
    <div>
        <div className='flex flex-col m-24'>
            <div className='flex gap-3'>
                <input checked={settings.notifications} onChange={handleChange} type="checkbox" name="notifications" />
                <label>Notifications {settings.notifications.toString()}</label>
            </div>

            <div className='flex gap-3'>
                <input checked={settings.darkMode} onChange={handleChange} type="checkbox" name="darkMode" />
                <label>Dark mode {settings.darkMode.toString()}</label>
            </div>

            <div className='flex gap-3'>
                <input checked={settings.autoDebit} onChange={handleChange} type="checkbox" name="autoDebit" />
                <label>Auto Debit {settings.autoDebit.toString()} </label>
            </div>
        </div>
    </div>
  )
}

export default Ex49