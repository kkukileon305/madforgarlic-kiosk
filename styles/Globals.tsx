import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globals = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;

export default Globals;
