import { css, onMounted, ref } from '../modules.js'

const _NailCover = css`
  box-sizing: border-box;
  padding: 24px var(--edge-desktop);

  > .background-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    padding-bottom: 50%;
    opacity: 0;
    transition: opacity .5s;
    max-width: 1280px;
  }

  > .cover {
    background-image: url("/images/nail-cover.jpg");
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    padding: 24px 0;
  }
`

export default {
    template: `
      <div class="${_NailCover}">
      <div :class="cover ? 'background-image cover' : 'background-image'"></div>
      </div>
    `,
    setup(props) {
        const cover = ref()
        onMounted(async () => {
            await fetch('/images/nail-cover.jpg')
            cover.value = true
        })

        return {
            cover
        }
    }
}