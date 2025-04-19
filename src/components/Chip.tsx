import { useState } from 'react'

export const Chip = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-3 border rounded-lg">
      <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p className='bg-primary text-white p-3 mt-3'>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

