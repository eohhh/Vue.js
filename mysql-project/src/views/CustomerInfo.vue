<!-- CustomerInfo.vue -->
<template>
  <div class ="container text-center">
    <!-- content 영역 필드명대로 작성, 임의로 작성 X -->
     <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ customer.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ customer.name }}</div>
      </div>
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ customer.email }}</div>
      </div>
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{ customer.phone }}</div>
      </div>
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{ customer.address }}</div>
      </div>
      </div>
      <!-- button 영역-->
      <div class="row">
        <button class="col btn btn-info" v-on:click="goToUpdateForm()">
          수정
        </button>
        <button class="col btn btn-light" v-on:click="goToCustomerList()">
          목록
        </button>
        <button class="col btn btn-danger" v-on:click="delInfo()">
          삭제
        </button>
      </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      customer : {},
    }
  },
  created(){
    const selectId = this.$route.query.id; // query : { id : custId } customerList에서 query로 넘겼으므로 여기서도 query로 써야한다.
    this.getCustomerInfo(selectId);
  },

  methods : {
    
    async getCustomerInfo(id){ // http://localhost:3000/customers/1
      let ajaxRes = await axios.get(`/api/customers/${id}`)// /api/customers
                                .catch(err => console.log(err));
      this.customer = ajaxRes.data;
    },
    async delInfo(){
        let ajaxRes = await axios.delete(`/api/customers/${this.customer.id}`) // /api/customers
                                  .catch(err => console.log(err));
                                  let sqlRes = ajaxRes.data;
                                  let result = sqlRes.affectedRows;
                                  if(result > 0) {
                                    alert('정상적으로 삭제되었습니다.');
                                    this.$router.push({ name : 'custList'});
                                  } else {
                                    alert('삭제되지 않았습니다.')
                                  }
    },
    goToUpdateForm(){ // 수정페이지 호출 함수.
      this.$router.push({ name:'custUpdate', params : { custId : this.customer.id }});  // custId => index.js에서 path에 정의한 custId로 해야함 
                                                                                        // (예를들어 index.js에서'/:custId'로 했으면 custId로 '/:id'로 했으면 id로..)

    },
    goToCustomerinfo(){
      this.$router.push('/customerList')
    },
  }
}
</script>