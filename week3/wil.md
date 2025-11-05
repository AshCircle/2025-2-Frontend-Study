# Weekly I Learned 3

### React

- `npx create-react-app 프로젝트명`

    npm을 통해서 react 프로젝트의 기초가 되는 파일들을 받아온다.

    npx라는 명령어는 npm 패키지를 임시로 다운로드 (여기서는 create-react-app) 해서 해당 패키지 안의 실행 파일을 실행하는 것이다. 임시로 다운로드된 이 패키지는, 명령어 실행이 끝나면 삭제된다.

- `npm start`

    package.json에 정의된 start 라는 이름의 스크립트를 실행한다.

    위의 명령어를 통해 생성된 react 프로젝트 내부에서 실행하면, `react-scripts start`와 동일한 명령이 실행되며, 이는 react 개발 서버를 실행하는 것과 같다.

- **라이브러리와 프레임워크**

    React는 라이브러리이다. 따라서 정해진 형식이 없다. 실제로 여러 react 프로젝트 레퍼런스를 둘러보면, 프로젝트별로 전부 구조가 다르다고 한다.

    백엔드의 Spring과는 차이가 있는데, Spring은 프레임워크이다. 따라서 대부분의 프로젝트를 보면 일정한 형식을 따른다. 컨트롤러 레이어, 서비스 레이어, 레포지토리 레이어 등..

    프론트엔드도 프레임워크가 존재한다. 라이브러리인 React를 기반으로 만들어진 Next.js이다. 프레임워크이기에 React와 달리 정해진 패턴이 있다.


### JavaScript

- **Array**

    JS에서 Array는 다른 언어의 배열과는 다른 특이한 특징들을 몇가지 가진다. 다음 예시를 보자.

    ```javascript
    let arr = [1, "hello", true, null];
    arr.push(42); // OK
    arr[10] = "test"; // 인덱스 5~9는 undefined로 자동으로 채워짐
    console.log(arr.length); // 11
    ```

    python과 비슷하게, array에 서로 다른 타입의 원소들이 들어가도 문제가 없다.

    조금 특이한 점은, 인덱스가 연속되지 않아도 배열로 취급한다는 것인데, 선언되지 않은 인덱스를 건너뛰고 임의의 인덱스에 값을 채우면, 앞의 인덱스는 자동으로 채워진다.

- **map**

    python의 map 함수와 비슷하게, 주어진 시퀀스의 원소 각각을 특정한 방법으로 매핑하는 함수이다. 
    
    다만 python의 경우에는 이것이 함수로 제공되며 iterable한 객체라면 사용 가능하지만, js의 경우에는 배열 전용 메서드로 선언되어 있기 때문에 다른 iterable 객체에서는 사용이 불가능하다.

    예를 들어 다음의 python 코드를 보자.

    ```python
    nums = [1, 2, 3, 4, 5]
    result = map(lambda x: x * 2, nums)
    print(list(result))
    ```
    
    이 python 코드는 다음의 js 코드와 동일하다.

    ```javascript
    const nums = [1, 2, 3, 4, 5];
    const result = nums.map(x => x * 2);
    console.log(result);
    ```

    위 예시에서는 둘다 무명 함수를 map 함수의 인자로 전달했으나, 실제로는 이름이 붙여진 다른 함수를 인자로 전달해도 문제없다.
