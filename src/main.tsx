import ReactDOM from 'react-dom/client';
import {
  RecoilRoot
} from 'recoil';

import App from './App';

import { GlobalStyle } from './style/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>,
)
