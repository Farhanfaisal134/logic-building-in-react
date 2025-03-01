import React, { useState } from 'react'

const Ex40 = () => {
    const user1 = {
        image: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        name: 'er saurav',
        email: 'mail@mail.com',
        role: 'developer',
        state: 'user-1'
    }

    const user2 = {
        image: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        name: 'rahul kumar',
        email: 'mail@mail.com',
        role: 'developer',
        state: 'user-2'
    }

    const [user, setUser] = useState(user1)

    return (
    <div>
        <div className='w-6/12 grid grid-cols-2 gap-12 mx-auto mt-24'>
            <div className='bg-gray-100 h-[350px] rounded-xl flex items-center justify-center flex-col gap-2'>
                    <img 
                        className='w-[100px] h-[100px]'
                        src={user.image}
                    />
                    <h1 className='text-2xl font-semibold'>{user.name}</h1>
                    <p className='text-gray-500'>{user.email}</p>
                    <p className='text-gray-500 text-xs'>{user.role}</p>
            </div>
            <button className='bg-blue-600 text-white rounded-xl p-3' onClick={()=>setUser(user.state === 'user-1' ? user2 : user1)}>Toggle Profile</button>
        </div>
    </div>
  )
}

export default Ex40