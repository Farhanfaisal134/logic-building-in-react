//Lazy Loading?
import { lazy, Suspense } from 'react';
const Lazy = lazy(() => import("./componets/Lazy"));
import Demo from './componets/Demo';

const App = () => {
return (

<div>
<h1>Hallo World</h1>
<Suspense fallback="Loading....">
<Lazy />
</Suspense>
<Demo />
</div>
)
};

export default App;
//createPortal?
import { createPortal } from "react-dom"
imdex.html ma modal ka name sa id reg karwani han
const App = () => {
return createPortal(

<div>
<h1>Hallo World</h1>
</div>, document.getElementById("modal")
)
};

export default App;
//useCallback&&React.memo()?
import React, { useState, useCallback } from 'react'
import Demo from './componets/Demo'
import Lazy from './componets/Lazy'

const App = () => {
const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])
const addTodos = useCallback(() => {
setTodos((prev) => [...prev, { text: `item${prev.length + 1}` }])
}, [todos])
return (

<div>
<button onClick={() => setCount(count + 1)}>Add</button>
<h2>{count}</h2>
<button onClick={addTodos}>Add Todo</button>
<Demo />
<Lazy todos={todos} />
</div>
)
}

export default App
import React from 'react'

const Demo = ({ name = "Farhan" }) => {
console.log("Demo Rerander");

return (

<div>
<h1>{name}</h1>
</div>
)
}

export default React.memo(Demo);
import React from 'react'

const Lazy = ({ todos }) => {
console.log("Lazy Rerander");

return (

<div>
{
todos && todos.length > 0 ? todos.map((item) => <h1>{item.text}</h1>) : null
}
</div>
)
}

export default React.memo(Lazy)

//useMemo()?
import React, { useMemo, useState } from 'react'

const App = () => {
const [input, setInput] = useState('')
const [count, setCount] = useState(0)
const multiplayNum = (num) => {
console.log("call");
return Number(num) \* 2
};

const retVal = useMemo(() => multiplayNum(input), [input]);

return (

<div>
<input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
<h1>{retVal}</h1>
<h2>count:{count}</h2>
<button onClick={() => setCount(count + 1)}>Add</button>
</div>
)
}

export default App;
//useRef?
import React, { useRef, useState } from 'react'

const App = () => {
const ref = useRef(0)
const [count, setCount] = useState(0)

function addFun() {
setCount(count + 1)
ref.current += 1
};

return (

<div>
<button onClick={addFun}>Add</button>
<h1>{ref.current}</h1>
<h1>{count}</h1>
</div>
)
}

export default App;
