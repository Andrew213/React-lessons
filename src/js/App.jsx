import React, { useState } from 'react';


const App = (props) => {
  const [state, setState] = useState(false)

  return (
    <div className='app'>
      <button onClick={() => setState(!state)}>
        {state ? 'hide' : 'show'}
      </button>
      {state && <h3>Here i'm</h3>}
      <p>
        It replace code w8
      </p>
      <b>i edit code now</b>
    </div>
  );
}

export default App