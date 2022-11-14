# Assigned Task

### ❗ 필수

- [x] 영화 제목으로 검색 가능하고 검색된 결과의 영화 목록이 출력돼야 합니다.
- [x] jQuery, React, Vue 등 JS 라이브러리와 프레임워크는 사용하지 않아야 합니다.
- [x] 스타일(CSS) 라이브러리나 프레임워크 사용은 자유입니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [ ] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있도록 만들어보세요.
- [ ] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 영화 상세정보 포스터를 고해상도로 출력해보세요.(실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 영화와 관련된 기타 기능도 고려해보세요.

# 영화 검색 앱

---

## 🌏 실제 사이트 & 배포 사이트

<h3><a href="https://beautiful-macaron-5341e5.netlify.app/">https://beautiful-macaron-5341e5.netlify.app/</a></h3>

<br/>

## 🔧 기술 스택

<div>
  
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  
</div>

<br/>

## 💭 생각해볼 점 & 느낀 점

1.

<br/>

## 💭 어려웠던 점

## 1. Home 컴포넌트가 계속 렌더링 되는 오류

- Home으로 라우팅을 처리할 때 계속 main에 appendChild를 함 그 결과 Home 컴포넌트가 계속 렌더링됨
- 해결책 : section 태그를 만들지 않고 템플릿으로 만듦, 그 후 main에 innerHTML을 사용해 렌더링

<br>

## 2. 좋아요 기능

### 1. 로컬스토리지 아이템 초기화

- likeBtnHandler 함수가 renderMovieLists 가 호출 될 때 마다 호출 됨 -> 그 안의 변수들도 전부 초기화됨
- 그 결과 로컬스토리지 movies의 value들 역시 새 값으로 초기화 됨

- -> 어떻게 해결할 것인지?
- 해결책 : `let movies = JSON.parse(localStorage.getItem("movies")) || [];` 을 이용, 배열을 항상 초기화 하는 것이 아니라 로컬스토리지에 저장된 아이템이 있다면 그걸 가져옴 없을시 초기화

### 2. 좋아요 취소시 리렌더링

- 좋아요를 취소해도 카드가 그대로 남아있음 어떻게 하지?
- 새로고침? 라우터를 새로?

- 해결 : `cancelLikeBtnHandler` 함수를 만들어서 좋아요된 버튼 클릭하면 필터를 이용해 스토리지에서 제거 -> like 컴포넌트를 리렌더

### 3. 디테일 페이지 좋아요

- 로컬스토리지에 있는 imdbID와 파라미터로 들어온 id 가 같으면 fa-solid(색칠된 하트) 가 렌더되게 로직을 짬
- 디테일 좋아요도 무비리스트와 동일하게 로직을 구현함 대신 버튼이 1개씩 있어서 `querySelectorAll` 과 `[ ... ]` 를 사용하지 않았음

### 4. 로컬스토리지에 아무것도 없을때

- 로컬스토리지에 아무것도 저장되어 있지 않을 시, 에러를 발생 초기값을 set해줌

<br>

## 3. 로직 뽑아내기

- fetch 결과를 리턴하고 리턴 값을 변수에 담아줌 -> 그 변수를 보간을 이용
- 지금 완전 스파게티 코드 🍝

<br>

## 4. 새로고침

### 1. 새로고침시 cannot get

- /detail
- /likes
- /profile
- /을 제외한 라우터에서 새로고침시 가져오지 못함

- 해결책 : webpack.config.js 에 `historyApiFallback: true` 값을 추가

### 2. 디테일에서 새로고침시 빈페이지

- 어떻게 해결하지?

<br>

## 5. handleClickRoute

- 이해필요

<br>
