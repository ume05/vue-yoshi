<template>
  <div>
    <p>いいね({{halfNumber}})</p>
    <p>{{testProps}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    },
    testProps: {
      type: String,
      default: 'デフォルトだよ'
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>
