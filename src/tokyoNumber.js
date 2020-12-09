export const tokyoNumber = {
  data() {
    return {
      title: "Come to Tokyo"
    }
  },
  computed: {
    upperCaseTitle(){
      return this.title.toUpperCase()
    }
  },
  created() {
    console.log('created in Mixin')
  }
}