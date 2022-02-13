import { css } from '../modules.js'

const _Copyright = css`
  text-align: center;
  font-size: 14px;
  color: var(--color-black);
  margin-top: var(--edge-desktop);

  @media screen and (max-width: 960px) {
    margin-top: var(--edge-mobile);
  }
`

export default {
    template: `
      <div class="${_Copyright}">Copyright © {{ year }} 上釉 美甲·美睫沙龙</div>
    `,
    setup(props) {
        return {
            year: new Date().getFullYear(),
        }
    },
}