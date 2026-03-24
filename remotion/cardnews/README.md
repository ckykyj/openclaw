# Remotion Instagram 카드뉴스 영상

요청하신 4장 카드뉴스 이미지를 **그대로** 사용해 세로 영상(1080x1350)으로 만드는 Remotion 템플릿입니다.

## 1) 이미지 넣기

아래 경로에 카드 이미지를 순서대로 넣어주세요.

- `remotion/cardnews/assets/01.png`
- `remotion/cardnews/assets/02.png`
- `remotion/cardnews/assets/03.png`
- `remotion/cardnews/assets/04.png`

> 권장 비율: 4:5 (1080x1350)

## 2) 미리보기

```bash
bunx remotion@4.0.340 studio remotion/cardnews/index.ts
```

## 3) 바로 렌더링

```bash
bunx remotion@4.0.340 render remotion/cardnews/index.ts DentalCardNews out/dental-cardnews.mp4
```

## 구성

- `slides.ts`: 이미지 파일 경로와 헤드라인 데이터
- `CardNewsVideo.tsx`: 이미지 시퀀스 + 줌 인/아웃 + 페이드
- `Root.tsx`: Composition 설정
- `index.ts`: Remotion 루트 등록
