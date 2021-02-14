## LHhome.
- 프로젝트 명: LH집
- 개요: Open API에 있는 LH 임대 주택 정보 데이터를 활용해서 웹페이지로 조회 할 수 있도록 만든 사이트 입니다.


## 구현내용.
- 임대 주택 분양이 많은 지역 (Top 5)
- 경쟁률이 많은 지역(Top 5)
- 순서: 원하는 지역 선택(버튼 or 검색) -> 도시 검색 -> 해당 도시에 조회된 임대 주택 단지별로 리스트 나열-> 리스트에 눌러서 상세정보 조회
- 공고 상태에 대한 값 조회해서 리스트에 추가


## Template.
- 템플릿 출처: [react-material-admin](https://github.com/flatlogic/react-material-admin)


## Quick Start.

#### 1. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

#### 2. Run `yarn start`

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

#### 3. Run `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
