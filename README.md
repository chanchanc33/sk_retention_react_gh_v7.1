# SK Retention Dashboard (React + Vite + Tailwind)
- GH Pages 하얀 화면 방지 조치:
  - index.html의 스크립트 경로를 `./src/main.jsx` (상대경로)로 수정
  - 컴포넌트에서 로고는 `import.meta.env.BASE_URL` 기준으로 로드
- 배포: main/master 푸시 → gh-pages 자동 배포

## 로컬
npm i
npm run dev

## GitHub Pages
1) 푸시 후 Actions 성공 확인
2) Settings → Pages → Branch: gh-pages
URL: https://<id>.github.io/<repo>/
