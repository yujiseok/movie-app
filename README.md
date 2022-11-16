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
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
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

## 💭 어려웠던 점

## 1. Home 컴포넌트가 계속 렌더링 되는 오류

- Home으로 라우팅을 처리할 때 계속 main에 appendChild를 함 그 결과 Home 컴포넌트가 계속 렌더링됨
- 해결 : section 태그를 만들지 않고 템플릿으로 만듦, 그 후 main에 innerHTML을 사용해 렌더링

<br>

## 2. 좋아요 기능

### 1. 로컬스토리지 아이템 초기화

- likeBtnHandler 함수가 renderMovieLists 가 호출 될 때 마다 호출 됨 -> 그 안의 변수들도 전부 초기화됨
- 그 결과 로컬스토리지 movies의 value들 역시 새 값으로 초기화 됨

- 해결 : `let movies = JSON.parse(localStorage.getItem("movies")) || [];` 을 이용, 배열을 항상 초기화 하는 것이 아니라 로컬스토리지에 저장된 아이템이 있다면 그걸 가져옴 없을시 초기화

### 2. 좋아요 취소시 리렌더링

- 좋아요를 취소해도 카드가 리렌더링이 되지 않아 카드가 그대로 남아있음

- 해결 : `cancelLikeBtnHandler` 함수를 만들어서 좋아요된 버튼 클릭하면 필터를 이용해 스토리지에서 제거 -> like 컴포넌트를 리렌더

### 3. 디테일 페이지 좋아요

- 로컬스토리지에 있는 imdbID와 파라미터로 들어온 id 가 같으면 fa-solid(색칠된 하트) 가 렌더되게 로직을 짬
- 디테일 좋아요도 무비리스트와 동일하게 로직을 구현함 대신 버튼이 1개씩 있어서 `querySelectorAll` 과 `[ ... ]` 를 사용하지 않았음

### 4. 로컬스토리지에 아무것도 없을때

- 로컬스토리지에 아무것도 저장되어 있지 않을 시 에러를 발생
- 해결 : 초기값을 지정해 줌

<br>

## 3. 로직 분리하기

- 로직들을 어떻게 분리하면 좋을지

<br>

## 4. 새로고침

### 1. 새로고침시 cannot get

- /detail, /likes, /profile, /을 제외한 라우터에서 새로고침시 렌더링이 안됨

- 해결책 : webpack.config.js 에 `historyApiFallback: true` 값을 추가

### 2. 디테일에서 새로고침시 렌더링 x

- 어떻게 해결할지

<br>

## 💭 느낀 점

초기에 프로젝트를 설정하면서 시간을 너무 많이 들인 것 같다. 특히 **웹팩**을 설정하면서 오류를 많이 접했는데, 대부분 오타에서 발생한 오류였다.

스타일링에 **tailwind**를 사용했는데 유틸리티 클래스를 사용하는 것이 얼마나 편한지 느끼게 되었다. 클래스명을 안정해도 되어서 너무 좋았다.
좀 더 익숙해지면 더 빠르게 스타일링을 할 수 있을 것 같다.
`tailwind.config.js` 를 통해 사용자가 정의한 스타일링을 만들 수 있지만, 자유도가 확실히 떨어지는 느낌을 받았다.

좋아요, 라우팅 등의 기능을 구현해 보면서 어려운 점도 많았는데, 많이 배운 것 같다.

코드를 좀 더 효율적으로 작성하고 싶었는데, 그게 안된 거 같아서 아쉽다.
다음에는 리액트로 마이그레이션 해보고 싶다.

<br/>

## ✔ 피드백 받고 싶은 부분

- innerHTML을 사용해 초기화를 시키고 검색 결과를 렌더링을 하였는데, 검색 결과를 초기화 시키지 않고 추가적인 데이터를 가져오려면 어떻게 해야 하는지 알고 싶다.
