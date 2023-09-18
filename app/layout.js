import "./globals.scss";
import LayoutView from "./LayoutView";
// import localFont from "next/font/local";

// const myFont = localFont({
//   src: './fonts/PretendardVariable.woff2',
//   fallback: [
//     'Pretendard',
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'system-ui',
//     'Roboto',
//     'Helvetica Neue',
//     'Segoe UI',
//     'Apple SD Gothic Neo',
//     'Noto Sans KR',
//     'Malgun Gothic',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//     'sans-serif',
//   ],
// })

export const metadata = {
  description: '2023년 권준희 포트폴리오',
  openGraph : {
    title: '안녕하세요. 권준희입니다.',
    description: '2023년 권준희 포트폴리오',
    images: '/sub/my_img01.jpg',
  }
};

export default function RootLayout({ children }) {
    // 즉시 실행함수로 감싸서 페이지가 렌더링될때 바로 실행되도록함
    const themeInitializerScript = `(function() {
      ${setInitialColorMode.toString()}
      setInitialColorMode();
    })()
    `;
  
    // 초기 테마를 설정하는 함수
    function setInitialColorMode() {
      function getInitialColorMode() {
        // 로컬스토리지에서 'theme' 값 가져오기
        const persistedPreferenceMode = window.localStorage.getItem("theme");
        const hasPersistedPreference =
          typeof persistedPreferenceMode === "string";
  
        if (hasPersistedPreference) {
          return persistedPreferenceMode;
        }
  
        const preference = window.matchMedia("(prefers-color-scheme: dark)");
        const hasMediaQueryPreference = typeof preference.matches === "boolean";
  
        if (hasMediaQueryPreference) {
          return preference.matches ? "dark" : "light";
        }
  
        return "light";
      }
  
      //현재 테마 모드
      const currentColorMode = getInitialColorMode();
      const element = document.body;
      element.style.setProperty("--initial-color-mode", currentColorMode);
  
      // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
      if (currentColorMode === "dark")
        document.body.setAttribute("data-theme", "dark");
    }
  
  return (
    <html lang="ko-KR" /*className={myFont.className} */>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <LayoutView>
        {children}
        </LayoutView>
      </body>
    </html>
  );
}
