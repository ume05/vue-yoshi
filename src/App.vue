<template>
  <div>
    <Home></Home>
    <LikeHeader>
      <h2>はじめまして</h2>
    </LikeHeader>
    <LikeNumber v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" test-props="テストです" v-on:my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent='Home'">Home</button>
    <button @click="currentComponent='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>

      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <pre>{{eventData.title}}</pre>
      <label for="number">最大人数</label>
      <input id="number" type="number" v-model.number="eventData.maxNumber">
      <pre>{{typeof eventData.maxNumber}}</pre>
      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{eventData.host}}</pre>

      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{eventData.detail}}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{eventData.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>{{eventData.price}}</p>

      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>

      <div class="main">
        <button @click="myAnimation = 'slide'">Slide</button>
        <button @click="myAnimation = 'fade'">Fade</button>
        <button @click="show = !show">切り替え</button>
        <transition enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__shakeX" appear>
          <p v-show="show">hello</p>
        </transition>
        <transition :name="myAnimation" appear>
          <p v-show="show">bye</p>
        </transition>
        <transition name="fade" mode="out-in">
          <p v-if="show" key="hello">こんにちは</p>
          <p v-else key="bye">さよなら</p>
        </transition>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @afterenter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @afterleave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div class="circle" v-show="show"></div>
        </transition>
        <button @click="myComponent = 'transitionA'">TransitionA</button>
        <button @click="myComponent = 'transitionB'">TransitionB</button>
        <transition name="fade" mode="out-in">
          <component :is="myComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeNumber from './components/LikeNumber.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import transitionA from './components/TransitionA.vue'
import transitionB from './components/TransitionB.vue'
export default {
  data(){
    return {
      number: 20,
      currentComponent: 'Home',
      locations: ['東京','大阪','福岡'],
      show: true,
      myAnimation: "slide",
      myComponent: "transitionA",
      eventData: {
        title: 'タイトル',
        maxNumber: 0,
        host:'ホスト',
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: ''
      }
    }
  },
  components: {
    LikeHeader,
    LikeNumber,
    About,
    Home,
    transitionA,
    transitionB
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    },
    beforeEnter(){},
    enter(){},
    afterEnter(){},
    enterCancelled(){},
    beforeLeave(){},
    leave(){},
    afterLeave(){},
    leaveCancelled(){}
  }
}
</script>

<style scoped>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 1s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 1s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
}
.slide-enter-active{
  animation: slide-in 1s;
  transition: opacity 1s;
}
.slide-leave-active{
  animation: slide-in 1s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  margin-top: 5rem;
}

.circle {
  width: 200px;
  height: 200px;
  background-color: pink;
  border-radius: 50%;
}
</style>