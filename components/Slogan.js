import { css } from '../modules.js'

const _Slogan = css`
  padding: 84px var(--edge-desktop);

  > .block {
    width: 65%;
    margin-left: 35%;

    > h1 {
      margin: 0;
      padding: 0;
      font-size: 52px;
      line-height: 1.25;
    }

    > p {
      margin: 20px 0 0;
      padding: 0;
      font-size: 21px;
      line-height: 1.4;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 36px var(--edge-mobile);

    > .block {
      width: 100%;
      margin-left: 0;

      > h1 {
        font-size: 44px;
      }

      > p {
        font-size: 18px;
      }
    }
  }
`

export default {
    template: `
      <div class="${_Slogan}">
      <div class="block">
        <h1>十指丹蔻，美丽连心</h1>
        <p>新年焕新从指尖开始</p>
      </div>
      </div>
    `,
    props: {},
}