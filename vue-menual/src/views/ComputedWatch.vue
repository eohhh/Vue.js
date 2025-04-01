<!-- ComputedWatch.vue -->
 <template>
  <div>
    <input type="number" v-model="price">원
    <br>
    <input type="number" v-model="count">개
    <p> 과세 금액 : {{ amount }} </p>
    <p> 부가세 10% : {{ tax }} </p>
    <p> 결제 금액 : {{ total }} </p>
    <p :class="{'warning' : isShow}"> 결제 금액이 5만원을 초과했습니다. </p>
  </div>
 </template>

 <script>
export default {
  data() {
    return {
      price : 0,
      count : 0,
      isShow : true,
    }
  },
  computed : { 
    amount() {
      return this.price * this.count;
    },
    tax() { 
      return this.amount * 0.1; // computed 안에 같이 정의된 것도 사용이 가능하다 (amount)
    },
    total() {
      return this.amount + this.tax;
    },
  },
  watch : { // watch => 임시 저장기능 
    total() {
      if(this.total > 50000) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
}

</script>

<style>
  .warning {
    display: none; /* display(화면)가 none이기 때문에 {'warning' : isShow}에서 isShow가 true이면 화면에 안보이고 false이면 화면에 나타낸다. */
  }
</style>