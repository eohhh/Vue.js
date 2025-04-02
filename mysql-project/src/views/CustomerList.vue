<!-- CustomerList.vue -->
<template>
  <div class ="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
        <tr v-for="(info, idx) in customerList" v-bind:key="info.id" v-on:click="goToCustomerinfo(info.id)">
          <td>{{ idx + 1 }}</td>
          <td>{{ info.id }}</td>
          <td>{{ info.name }}</td>
          <td>{{ info.phone }}</td>
        </tr>
        </template>
        <tr v-else>
          <td colspan="4">
            현재 데이터가 존재하지 않습니다.
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios' // => AJAX, axios는 따로 import가 필요함.

export default {
  data() {
    return {
      customerList : [],
    }
  },
  computed : {
    count() {
      return this.customerList.length;
    }
  },
  created() { 
    // 컴포넌트가 초기화할 데이터 호출.
    this.getCustomerList();
     
  },
  methods : {
    async getCustomerList() { // http://localhost:3000/customers
      let ajaxRes = await axios.get(`/api/customers`) // vue.config.js에서 proxy를 /api로 설정했기 때문에 /api를 기반으로 한다.
                                                         // (`/api/customerList`) : 요청이 자동으로 백엔드 서버(serverOrigin)로 전달
                                .catch(err => console.log(err));
      this.customerList = ajaxRes.data; // (`http://localhost:8081/customerList`) get으로 조회한 정보들을 ajaxRes에 담는다.
    },
    goToCustomerinfo(custId){                     // %주의% 값을 보낼때는 router (CustomerList), 받을때는 route (customerInfo)
      this.$router.push({ name : 'custInfo' , query : { id : custId }});    // $router : 라우터에 등록되어있는 컴포넌트들을 부름. // push() : 일을 시키려고 부른다.(:to-link와 비슷.)
      // 라우터를 이용해 데이터를 넘기는 방식 (query, params)
      // (1) query : { key : value } => ?key=value 위에서 key = id, value = custId

      // (2) params
      // 1) route의 path속성 : '/target/:uId'
      // 2) params : { uId : value } => /target/value
    }
  }
}

</script>

<style>
</style>