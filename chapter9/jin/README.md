앤트의 스터디입니다. 
(개미의 앤트가 아니고 호빗에 나오는 그 앤트입니다)

## 고려사항

- CSS 파일 분리 가이드, 파일 위치
- CSS 클래스, 아이디 이름 규칙 (카멜 표기법이 권장인가?)
- 인터페이스만 선언하고 싶을 때 권장 방법
- 프리젠테이션 컴포넌트와 컨테이너 컴포넌트의 네이밍 규칙?
-- menu/view, menu/container 처럼 나누나?
-- component/MenuView, component/MenuContainer 처럼 Suffix 로 맞추나?
- 컴포넌트에서 사용하는 데이타 리소스 파일의 경우 어디에 위치시키나?
- defaultProps 로 지정한 배열이 있을 때 stage 로 배열을 변경시키면 merge 가 되는데 이걸 리셋하는 방법?
-- clear 후 addAll 하는 식의 방법 말고 (즉, 두번 연산하지 않고)

## 참고사항

- lint 써본다고 욕심내서 eslink, jslink, tslink 모두 설치하지 말자
-- 이유는 모르겠지만(아마도 우선 적용되는 순서가 의도와 다르거나 충돌 문제) es6, react 관련된 문법 오류가 많이 뜬다

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

