<!-- CommonComponent.vue -->
 <!-- 여러곳에서 공동으로 사용할때, 각기 다른 곳에서 몇번 사용해야 할 경우.-->
 <template>
  <!-- Component가 가지는 HTML-->
   <p>{{ year }}년 {{ month }}월 {{ day }}일</p>
   <p>다음해 {{ afterYear }}</p>
 </template>

 <script>
  // component를 관리하는 Vue 객체 정의 : DATA 포함
  export default { 
    data(){ // 데이터 (CRUD) => 프로퍼티
      let today = new Date();
      return {
        year : today.getFullYear(),
        month : today.getMonth() + 1,
        day : today.getDate(),
      }
    },
    computed : { // 기존 데이터를 기반으로 연산한 결과값(Read Only)
                 // => 프로퍼티
      afterYear() { // afterYear : function(){}
        return this.year + 1;
      },
    },
    methods : {}, // Vue가 사용하는 모든 종류의 함수. Ajax 담당. (methods에 등록되지 않는 함수는 사용하지 못함. 기본함수들 조차도..)
    watch : { // 데이터 변경에 따른 추가 작업 정의 (감시자 역할)
      month() {  // watch는 기존에 있는 프로퍼티를 불러와야 한다.// //
        if ((this.month.toString()).length == 1 && this.month < 10) { 
          this.month = '0' + this.month;
        }
      }
    }
  }
 </script>

 <style scoped>
  /* Component가 가지는 Style */
</style>