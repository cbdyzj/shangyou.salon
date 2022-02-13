import { css } from '../modules.js'

const _SY = css`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  user-select: none;
  cursor: pointer;
  transition: color .2s;
  text-decoration: none;

  :hover {
    color: var(--color-black);
  }
`

export default {
    template: `
      <a class="${_SY}" href="/">Sy</a>
    `,
    props: {},
}