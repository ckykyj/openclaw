export type CardSlide = {
  image: string;
  headline: string;
};

// 원본 카드뉴스 이미지를 01~04로 저장해서 사용합니다.
// 예: remotion/cardnews/assets/01.png
export const slides: CardSlide[] = [
  {image: 'assets/01.png', headline: '신경치료 후 크라운, 꼭 해야 할까요?'},
  {image: 'assets/02.png', headline: '아프지 않아도 치아는 약해져 있습니다.'},
  {image: 'assets/03.png', headline: '크라운, 치아를 보호하는 튼튼한 갑옷'},
  {image: 'assets/04.png', headline: "핵심은 '남은 치아의 양'과 '안전'입니다."},
];
