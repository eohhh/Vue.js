<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <component v-bind:is="selected"></component> <!-- component에 selected는 PropsCom으로 정의 되어 있기 때문에 componet의 디폴트 값은 PropsCom. -->
  </div>
</template>
<script>
import PropsCom from './components/PropsComponent.vue';
import TextModal from './views/TextModal.vue';

export default {
  data() {
    return {
      selected : 'PropsCom' // components에 초기값을 'PropsCom' 으로 설정.
    };
  },
  components: {  
    PropsCom,         // 'PropsCom' : PropsCom 
    TextModal,
  },
  created() {         // created() 실행순서 : 맨처음 App.vue가 실행됨 -> App.vue의 자식요소 실행 -> 실행된 자식요소에 자식요소가 있으면 실행
    console.log('App.vue Created');
  },
  mounted() {                       // mounted() : 자식요소가 먼저 실행..(역순!) 
    console.log('App.vue Mounted'); // 자식 컴포넌트가 완성이 되야지 실행되기 때문에 역순이다 (Vue가 만들어내는게 화면(html)이라서 자식 컴포넌트가 먼저 화면을 만들어 내야돼서 역순..)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
