<!-- RefComponent.vue -->
 <template>
  <div>
    <input type="number" v-model="content">
    <p>{{ content }}</p>
    <button ref="btn" @click="plusCount">더하기</button> <!-- Ref 속성 : 고유값을 가짐 (html에 사용하는 속성) -->
  </div>
 </template>

 <script>
export default {
  data() {
    return {
      content : '',
    }
  },
  mounted() {
    console.log(this.$refs.btn);
    this.$refs.btn.click(); // ref : 특정 event를 강제로 발생시켜야 하는 경우

  },
  methods : {
    plusCount() {
      // alert('버튼을 클릭했습니다.');
      if((typeof this.content) == 'number') {
        let sum = this.content + 100;
        this.content = sum;
      }
      else {
        alert('데이터 타입이 숫자가 아닙니다.');
      }
    },
  }
}
</script>