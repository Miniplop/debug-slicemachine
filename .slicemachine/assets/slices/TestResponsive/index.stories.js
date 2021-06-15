import MyComponent from './../../../../slices/TestResponsive';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TestResponsive'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"test_responsive","items":[],"primary":{"title":[{"type":"heading1","text":"Seize magnetic deliverables","spans":[]}],"description":[{"type":"paragraph","text":"Elit in voluptate ullamco aliqua elit aliquip quis consequat qui.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
