import { css } from '../modules.js'

const _Menu = css`
  font-size: 18px;

  > a {
    color: var(--color-black);
    cursor: pointer;
    transition: color .2s;
    margin-left: 24px;
    text-decoration: none;

    :hover {
      color: var(--main-color);
    }
  }
`

export default {
    template: `
      <nav class="${_Menu}">
      <a>美丽时刻</a>
      <a>指甲</a>
      <a>睫毛</a>
      <a>关于</a>
      </nav>
    `,
    props: {},
}