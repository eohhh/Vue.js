<!-- OnEvent.vue -->
<template>
  <div>
    <input v-model="msg" v-on:keyup.alt.enter="clear();">
    <p>{{ msg }}</p>
  </div>
  <form v-on:click.self="message('form')"> <!-- self 수식어는 form(자기자신)을 클릭하지 않으면 alert이 안뜸. -->
    Form
    <div v-on:click.once="message('div')"> <!-- once 수식어는 딱 한번만 동작한다. (한번 핸들러가 동작하면 다시 동작하지 않음.)-->
      Div
      <p @click.stop ="message('p')"> <!-- stop 수식어는 버블링 자체를 원천적으로 막음. (버블링의 전파를 막음, alert에 p까지만 띄우고 그 뒤로는 막음.) -->
        P
        <a @click.prevent="message('a')" href="http://www.naver.com">네이버</a> <!-- prevent(일시정지)를 쓰면 페이지가 바뀌지 않음. (즉, naver.com으로 이동하지 않음.)-->
      </p>
    </div>
  </form>
  <hr>
  <button @click="increaseCounter">Add 1</button>
  <br>
  <button @click="setCount(num, $event)">Add {{ num }}</button>
  <p>The Counter is : {{ counter }}</p>
</template>

<script>
export default {
  data() {
    return{ // 데이터(CRUD) => 프로퍼티
    msg : "",
    num : 7,
    counter : 0,
    }
  },
  methods : {
    clear() {
      this.msg = '';
    },
    message(tag) {
      alert(`${tag}, 선택`);
    },
    increaseCounter(event) {
      console.log('increase', event);
      this.counter++;
    },
    setCount(value, event) {
      console.log('setCount', event);
      this.counter += value;
    },
  }
}
</script>
<style>
form, form * {
  margin: 10px;
  border : 5px solid yellowgreen;
}
</style>