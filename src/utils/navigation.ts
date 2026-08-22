export function mapLinks(query: string) {
  const encoded = encodeURIComponent(query)
  return {
    naver: `https://map.naver.com/p/search/${encoded}`,
    kakao: `https://map.kakao.com/link/search/${encoded}`,
  }
}
