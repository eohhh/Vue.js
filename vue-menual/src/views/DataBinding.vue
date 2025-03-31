<!-- DataBinding.vue -->
<template>
  <!-- HTML(화면에 나타내줌) -->
   <div>
    <!-- 이중괄호 -->
     <h1>{{ title }}</h1>
    <!-- directive : Vue의 명령 수행, 'v' 접두어 사용 (v를 사용하면 Vue꺼다.)-->
     <h2 v-text = "title" id = "home"></h2>
     <p v-html="tagList"></p> <!-- innerHTML의 속성을 건드는것 -->
     <p v-text="tagList" v-bind:name="tagName"></p> <!-- text전용 directive (Text만 건드는것.)-->
     <!-- v-bind 디렉티브 : 단방향 바인딩(value 속성을 제외한 모든것) -->
      <!-- v-model 디렉티브 : 양방향 바인딩 -->
      <!-- 단방향(v-bind) : 사용자가 수정을 못한다.  vue 객체가 화면으로 보내는것(우리는 vue에서 수정할 수 있음) -->
      <!-- 양방향(v-model) : 사용자 수정 가능.  -->
       <input type="text" v-model="valueModel">
       <p>{{ valueModel + 1000}}, {{ typeof valueModel }}</p> <!-- type of와 같이 가벼운 연산도 가능 -->
       <input type="number" v-model.lazy="numberModel"> <!-- .lazy를 하면 즉각 반응이 일어나지 않고 enter를 쳐야 반응이 일어남. -->
      <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>
      <select v-model="selectModel">
        <option value = "summer">여름</option>
        <option value = "winter">겨울</option>
      </select>
      <p>{{ selectModel }}</p>
      <textarea v-model="textModel"></textarea>
      <hr>
      <input type="checkbox" v-model="chData"
              true-value="여" false-value="부">
      <p>{{ chData }}</p>
      <div>
    <input type="checkbox" value ="Seoul" v-model="city">서울
    <input type="checkbox" value ="Daegu" v-model="city">대구
    <p>{{ city }}</p>
  </div>
  <div>
    <input type="radio" value="Reading" v-model="hobby">독서
    <input type="radio" value="Moving" v-model="hobby">영화
    <input type="radio" value="Sports" v-model="hobby">운동
    <p>{{ hobby }}</p>
  </div>
  <img v-bind:style="styleData" v-bind:src="imgUrl">
  <div class = "container" v-bind:class="myClass">Class Binding Second</div>
  <div class = "container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div>  <!-- isActive : false, hasError : true-->
  <!-- isActive를 쓰면 클릭시 true, 클릭취소시 false값으로 받아올 수 있다. (유용) -->
</div>
</template>

<script>
 // Vue 객체의 데이터, 기능
 export default {
  data(){  // 데이터 바인딩에 사용하는 데이터들(CRUD)
    return {
      title : "Hello, Vue.js",
      tagList : '<strong>Today is .. </strong>',
      tagName : 'bindTest',
      valueModel : 'korea',
      numberModel : '0', // 문자값('0')이 들어가도 vue가 알아서 숫자로 인식(parsing). => type = "number" 일 경우만. 
      selectModel : 'winter',
      textModel : '백견불여일타',
      chData : '',
      city : [],
      hobby : '',
      styleData : {
        backgroundColor : 'skyblue',
        with : '200px',
      },
      backSetting : 'background-color : skyblue; width:200px',
      imgUrl : 'https://kr.vuejs.org/images/logo.png',
      isActive : false,
      // hasError : !this.isActive,
      myClass : 'active'
    }
  },
  computed : { // 이미 존재하는 데이터 기반으로 계산한 결과값(Read On)
    hasError : function() {
      return ! this.isActive;
    }
  },
 }

</script>

<style>
 /* CSS */
 .text-red {
  color : red;
 }
 .container {
  width: 100%;
  height: 200px;
 }
 .active {
  background-color: aquamarine;
  font-weight : bold;
 }
</style>