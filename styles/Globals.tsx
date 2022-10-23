import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globals = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  main {
    margin-left: 120px;
  }
`;

export default Globals;
