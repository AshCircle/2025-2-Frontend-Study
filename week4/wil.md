# Weekly I Learned 4

### 실습 코드로 알아보는 React

```javaScript
import { useState } from 'react';
import CountNumber from './CounterNumber';
import CountButton from './CounterButton';

function Counter() {
    const [count, setCount] = useState(0); // 3번
    
    function changeCount(delta) {
        setCount(count + delta); // 2번
    }

    function resetCount() {
        setCount(0);
    }
    
    return (
        <div>
            <CountNumber count={count} /> <!--4번-->
            <CountButton delta={-10} onEvent={changeCount}/>
            <CountButton delta={-1} onEvent={changeCount}/>
            <CountButton isReset onEvent={resetCount}/>
            <CountButton delta={+1} onEvent={changeCount}/> <!--1번-->
            <CountButton delta={+10} onEvent={changeCount}/>
        </div>
    )
}

export default Counter;
```

- **1번: 사용자가 버튼을 클릭한다**

    사용자가 `count`를 1 더해주는 코드를 실행한다면, 내부의 `onClick`과 연결된 `onEvent`에 의해 `Counter` 컴포넌트 내부의 `changeCount(1)` 이 실행된다.

    ps. React에서 컴포넌트를 만들 때는 반드시 첫 문자를 대문자로 해야 한다. 그래야 React가 해당 함수를 컴포넌트로 인식할 수 있다.

- **2번: changeCount(1) 실행**

    `changeCount(1)`이 실행되며, 내부의 `setCount`에 인자로 기존 `count`에 `delta`를 더한 값이 전달된다.

- **3번: Hook**

    `count`는 `Counter` 컴포넌트의 state이며, `setCount`는 이 state를 변경할 때 호출하여 React가 state이 변경되는지 탐지할 수 있도록 만드는 **Hook**이다.

    따라서 2번에 의해 `setCount`가 호출되어 React는 `Counter` 컴포넌트의 state인 `count` 값이 변경되었음을 알 수 있다.

    ps. React에서 이러한 state와 hook 함수는 `useState`를 통해 정의할 수 있다. 또한 각 컴포넌트마다 설정 가능하다.

- **4번: DOM 변경**

    state가 변경되었으므로, React는 `Counter` 컴포넌트를 다시 실행시켜서 JSX 구조를 다시 계산한다. 여기서 DOM을 직접 조작을 하기에는 브라우저가 감당하기에 너무 무겁기 때문에, React는 Virtual DOM 트리를 만들어 이전 Virtual DOM과 비교한다.

    `<CountNumber count={count} />` 에서, state가 변경되었으므로 `count` 값이 변경되었다. React는 이 변경사항을 상기한 Virtual DOM 비교를 통해 인식하고, 이 변경사항만 실제 DOM에 반영한다. 이를 통해 DOM을 직접 조작하는 리소스 낭비를 줄이고 최적화를 달성한다.
