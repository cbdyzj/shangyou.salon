import Header from '../components/Header.js'
import Slogan from '../components/Slogan.js'
import NailCover from '../components/NailCover.js'
import Footer from '../components/Footer.js'

export default {
    template: `
      <div>
      <Header/>
      <Slogan/>
      <NailCover/>
      <Footer/>
      </div>
    `,
    setup(props) {

    },
    components: {
        Header,
        Slogan,
        NailCover,
        Footer,
    },
}