import Index from './pages/Index.js'

export default {
    template: `
      <Index/>
    `,
    props: {
        resources: Object,
    },
    components: {
        Index,
    },
}