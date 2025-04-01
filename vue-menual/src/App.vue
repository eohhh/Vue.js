<!-- 데이터가 없을 경우 <script>를 생략 -->
<template>
  <nav> <!-- router--->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">dataBind</router-link> |
    <router-link :to= "{ name : 'listBind'}">ListBind</router-link> | <!-- :to => to 앞에 : 는 v-bind의 약어 -->
    <router-link :to="{ name : 'ifBinding'}">IfBinding</router-link> |
    <router-link :to ="{ name : 'onEvent' }">Onevent</router-link> |
    <router-link :to="{ name : 'computedWatch' }">ComputedWatch</router-link> |
    <!-- "{ name : 'listBind'}" => name으로 썼기 때문에 path가 아니라 name에 있는 listBind를 써야 한다.-->
  </nav>
  <router-view/>
  <!--<hr>
  <DataBinding/> --><!-- 각각이 독립적으로 움직인다. 라우터가 바뀌는거와 상관없이 footer처럼 고정되어있다.-->
  <!-- <DataBinding/> --> 
</template>

<script>
// 컴포넌트 추가 방식 1) 자식 컴포넌트로 등록 => 특정 페이지의 조각을 구성할때 사용
import DataBinding from './views/DataBinding.vue';

export default {
  components : { // 자식 컴포넌트 정의 (컴포넌트 구성.) 한 페이지를 구성하는 컴포넌트들이 여기로 들어옴.
    DataBinding
  }
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
