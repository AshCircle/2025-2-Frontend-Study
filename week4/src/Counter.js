import { useState } from 'react';
import CountNumber from './CounterNumber';
import CountButton from './CounterButton';

function Counter() {
    const [count, setCount] = useState(0);
    
    function changeCount(delta) {
        setCount(count + delta);
    }

    function resetCount() {
        setCount(0);
    }
    
    return (
        <div>
            <CountNumber count={count} />
            <CountButton delta={-10} onEvent={changeCount}/>
            <CountButton delta={-1} onEvent={changeCount}/>
            <CountButton isReset onEvent={resetCount}/>
            <CountButton delta={+1} onEvent={changeCount}/>
            <CountButton delta={+10} onEvent={changeCount}/>
        </div>
    )
}

export default Counter;