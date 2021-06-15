import MyComponent from './../../../../slices/BushlifeHeader';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BushlifeHeader'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bushlife_header","items":[],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"menuItem":"leverage cross-media eyeballs","menuItemTwo":"productize robust relationships","menuItemThree":"maximize web-enabled users","menuItemFour":"utilize enterprise ROI","username":"streamline interactive models","avatar":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"iughiufd":"strategize turn-key channels","Tets":[{"type":"paragraph","text":"Deserunt consectetur ullamco ad nisi laboris aliquip qui veniam cupidatat laborum laborum pariatur cillum aliquip eu.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
