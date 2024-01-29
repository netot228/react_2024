import React from 'react';
// import React, { useState, useEffect } from 'react';

export default function Hooks(props) {


    const [counter, setCounter] = React.useState(0);

    React.useEffect((e)=>{

        // debugger;

        document.title = `You push the Button ${counter} times`;

    })

    return (
        <div style={{margin: '40px'}}>
            <h1 style={{margin: '40px 0'}}>hello</h1>
            {counter > 0 ? <p>you pushed {counter} times</p> : <p>&nbsp;</p>}
            <button onClick={()=>setCounter(counter + 1)}>push me</button>
        </div>

    )
}


// import React, { useState, useEffect } from 'react';

// export default function Hooks() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Вы нажали ${count} раз`;
//   });

//   return (
//     <div>
//       <p>Вы нажали {count} раз</p>
//       <button onClick={() => setCount(count + 1)}>
//         Нажми на меня
//       </button>
//     </div>
//   );
// }