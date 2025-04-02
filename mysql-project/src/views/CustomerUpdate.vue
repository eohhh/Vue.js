<!-- CustomerUpdate.vue -->
<template> <!-- CustomerAdd 복붙. -->
  <div class="container">
    <div class="row">
      <label>아이디</label>
      <input type="text" v-model="info.id" readonly>
    </div>
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name">
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email">
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone">
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address">
    </div>
    <div class="row">
      <button class="btn btn-info" v-on:click="updateCustomer"> <!-- 버튼 클릭시 이벤트 발생. -->
        수정
      </button>
    </div>
  </div>
</template>

<script> // CustomerAdd 복붙..
import axios from 'axios'

export default {
  data() {
    return {
      info : {
        name: null,
        email : null,
        phone : null,
        address : null,
      }
    }
  },
  created(){
    // 1) 수정 1) 사용자가 선택한 대상의 원래 데이터 조회.
    // => 단건조회
    const selectId = this.$route.params.custId; // 보내는곳과 같은값을 입력. (custId) // index.js에서 path에 정의한 custId로 해야함 / (예를들어 '/:custId'로 했으면 custId로 /:id로 했으면 id로..)
    this.getCustomerInfo(selectId);
  },
  methods : {                   // (CustomerInfo에서 복붙.)
    async getCustomerInfo(id){  // http://localhost:3000/customers/1
      let ajaxRes = await axios.get(`/api/customers/${id}`)// /api/customers
                                .catch(err => console.log(err));
      this.info = ajaxRes.data;  // this.info로 수정. (수정하려면 전체 데이터 값을 가져와야 함.)
    },
    async updateCustomer() {     // updateCustomer로 수정.
      // 수정 2) 사용자가 버튼을 클릭했을 때 정보가 수정되게 서버에 전송.
      // => 등록
    let updateDta = {         // 내가 보내고 싶은 정보들만 담아서 업데이트.( 불필요한것들은 걸러내고 필요한것만 업데이트)
      name : this.info.name,
      email : this.info.email,
      phone : this.info.phone,
      address : this.info.address,
    }
    let ajaxRes =  await axios.put(`/api/customers/${this.info.id}`, updateDta)   // post => put로 변경.. 
                  .catch(err =>console.log(err));
                  let sqlRes = ajaxRes.data;
                  let result = sqlRes.affectedRows; // affectedRows : 실제로 업데이트,인서트가 된 행의 갯수를 반환.(정수값을 가지고 있는 필드.) + 절대로 음수가 되지 않는다.
                  if(result > 0 ){ 
                    alert('정상적으로 등록되었습니다.');
                  } else {
                    alert('정상적으로 등록되지 않았습니다.')
                  }
    }
  }
}
</script>