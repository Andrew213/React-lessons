import React, { useState } from 'react';
import styles from '../scss/style.scss'

const App = (props) => {
  const [state, setState] = useState(false)

  return (
    <div className={styles.app}>
      <button onClick={() => setState(!state)}>
        {state ? 'hide' : 'show'}
      </button>
      {state && <h3>Hello React</h3>}
      <p>
        It replace code w8
      </p>
      <b className={styles.ref}>i edit code now</b>
    </div>
  );
}

export default App