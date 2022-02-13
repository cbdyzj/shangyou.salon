import { css } from '../modules.js'
import Shangyou from './Shangyou.js'
import Copyright from './Copyright.js'

const _Footer = css`
  box-sizing: border-box;
  margin: 0 var(--edge-desktop);
  padding: 48px 0 24px;

  > .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > .address {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 960px) {
    margin: 0 var(--edge-mobile);
  }
`

export default {
    template: `
      <footer class="${_Footer}">
      <div class="content">
        <Shangyou/>
        <div class="address">
          <strong>八佰伴</strong>
        </div>
      </div>
      <Copyright/>
      </footer>
    `,
    props: {},
    components: { Shangyou, Copyright },
}