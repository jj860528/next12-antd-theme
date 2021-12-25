import Head from 'next/head'
import {useEffect} from 'react'

import {Button} from 'antd'
import darkVars from '../theme/dark.json';
import lightVars from '../theme/light.json';
import themeVars from '../theme/theme.json';

export default function Home() {

  useEffect(() => {
    const config = {name:'light'}

    window['less'] = {
      async: true,
      env: 'production'
    };

    
    const script = document.createElement('script');

    // 等到less加载完成后执行，免得报错
    script.addEventListener('load', () => {
      window['less']
        .modifyVars(
          themeVars
          // config.name === 'light' ? lightVars : darkVars
        )
        .catch((error) => {
          console.error("error",error);
        });
    });

    // 重点，高于2.7.3版本的less在浏览器端运行会抛错，可以自己踩踩看
    // script.src = "api/less.min.js"
    // script.src = 'https://cdn.bootcdn.net/ajax/libs/less.js/2.7.3/less.min.js';
    document.body.appendChild(script);

    // window.less.modifyVars(lightVars);
    
    // 加入 link
    const css = document.createElement('link');
    css.href = '/color.less';
    css.rel = 'stylesheet/less';
    css.type = 'text/css';
    document.body.appendChild(css);

  }, []);


  return (
    <div>
      <Head>
        <script type="text/javascript" src="../static/less.min.js"></script>
      </Head>

      <main>
        <Button>antd</Button>
      </main>

      <footer>
      </footer>
    </div>
  )
}
