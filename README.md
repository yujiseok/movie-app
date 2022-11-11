# 문제

## 1. Home 컴포넌트가 계속 렌더링 되는 오류

- Home으로 라우팅을 처리할 때 계속 main에 appendChild를 함 그 결과 Home 컴포넌트가 계속 렌더링됨
- section 태그를 만들지 않고 템플릿으로 만든다 그 후 main에 innerHTML을 사용해 렌더링

<br>

## 2. 좋아요 기능

### 1. 로컬스토리지 아이템 초기화

- likeBtnHandler 함수가 renderMovieLists 가 호출 될 때 마다 호출 됨 -> 그 안의 변수들도 전부 초기화됨
- 그 결과 로컬스토리지 movies의 value들 역시 새 값으로 초기화 됨

- -> 어떻게 해결할 것인지?
- 해결책 : `let movies = JSON.parse(localStorage.getItem("movies")) || [];` 배열을 항상 초기화 하는 것이 아니라 로컬스토리지에 저장된 아이템이 있다면 그걸 가져옴 없을시 초기화

### 2. 좋아요 취소시 리렌더링

- 좋아요를 취소해도 카드가 그대로 남아있음 어떻게 하지?
- 새로고침? 라우터를 새로?

<br>

## 3. 로직 뽑아내기

- fetch 결과를 리턴하고 리턴 값을 변수에 담아줌 -> 그 변수를 보간을 이용
- 지금 완전 스파게티 코드 🍝

<br>

## 4. 새로고침시 cannot get

### 1.

- /detail
- /likes
- /profile
- /을 제외한 라우터에서 새로고침시 가져오지 못함

- 해결책 : webpack.config.js 에 `historyApiFallback: true` 값을 추가

### 2. 디테일에서 새로고침시 빈페이지

- 어떻게 해결하지?

<br>

## 5. 스타일링

- 스타일링 정리 + 반응형

<br>

## 6. handleClickRoute

- 이해필요
