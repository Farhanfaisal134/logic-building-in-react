import React from 'react'
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className='max-w-4xl mx-auto flex flex-col gap-4 items-center mt-10'>
      <h1 className='text-2xl font-bold'>Tooltip</h1>
      <Tooltip
        delay={500}
        text="Tooltip Content"
        children={<p>Hover Me</p>}
      />
    </div>
  )
};

export default App;