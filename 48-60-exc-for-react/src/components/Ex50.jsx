import React from 'react'
import { useState } from 'react'

const Ex50 = () => {
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
    <div style={{
        background: settings.darkMode ? '#323232' : '#f5f5f5',
        height: '100vh',
        padding: 20,
        color: settings.darkMode ? 'white' : 'black'
    }}>
        <div className='flex flex-col'>
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

        {
            settings.notifications &&
            <div className='bg-blue-500 p-6 rounded-lg fixed top-12 right-12 text-white'>
                <h1>Info : We are getting back soon in future</h1>
            </div>
        }
    </div>
  )
}

export default Ex50