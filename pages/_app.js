import { ResetStyle, GlobalStyle } from "../styles/globalStyles";
import zhTW from 'antd/lib/locale/zh_TW';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      {/* 中文化配置 */}
      <ConfigProvider locale={zhTW}>
        {/* ResetStyle 要放在 GlobalStyle 之前 */}
        <ResetStyle />
        <GlobalStyle /> 
        <Component {...pageProps} />
      </ConfigProvider>
    </div>
  );
}

export default MyApp;
