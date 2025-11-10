import { useState } from "react"

function Count() {
    const [Count, setCount] = useState(0)


  return (
    <>
      <div>
        <p>Your count is {Count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {Count}
        </button>
      </div>
    </>
  )
}

export default Count