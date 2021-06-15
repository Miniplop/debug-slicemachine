import MyComponent from './../../../../slices/Header';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Header'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"header","items":[{"test":[{"type":"paragraph","text":"Laborum mollit in laboris sint ullamco irure nostrud Lorem fugiat veniam dolor Lorem eu id velit. Non amet sit aute Lorem ipsum consequat eiusmod laboris ad consectetur nisi commodo aliquip occaecat nostrud. Ipsum est adipisicing aute voluptate esse eiusmod ut reprehenderit aliquip ad sunt eiusmod cillum.","spans":[]}]},{"test":[{"type":"paragraph","text":"Exercitation cillum labore sunt deserunt magna voluptate sit veniam commodo eu aliquip.","spans":[]}]},{"test":[{"type":"paragraph","text":"Consequat cillum est elit aliqua ut ullamco aute minim tempor fugiat. Do incididunt dolor id consequat excepteur consectetur consectetur.","spans":[]}]},{"test":[{"type":"paragraph","text":"Duis eu anim irure in nisi eiusmod excepteur commodo sit exercitation velit elit eiusmod do Lorem. Officia pariatur excepteur consequat ullamco est ea dolore.","spans":[]}]},{"test":[{"type":"paragraph","text":"Quis ullamco duis aliqua voluptate pariatur esse.","spans":[]}]},{"test":[{"type":"paragraph","text":"Nisi ex labore cupidatat eu proident duis consequat fugiat aute excepteur id aute velit. Voluptate velit amet deserunt officia in do.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"menuItem":"leverage dot-com metrics","menuItemTwo":"integrate distributed e-commerce","menuItemThree":"incentivize innovative networks","menuItemFour":"revolutionize B2B models","username":"transform bleeding-edge architectures","avatar":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
