import Sy from './Sy.js'
import { css } from '../modules.js'
import Menu from './Menu.js'

const _Header = css`
  box-sizing: border-box;
  padding: var(--edge-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    padding: var(--edge-mobile);
  }
`

export default {
    template: `
      <header class="${_Header}">
      <Sy/>
      <Menu/>
      </header>
    `,
    props: {},
    components: {
        Sy,
        Menu,
    },
}