<!-- ListBinding.vue -->
 <template>
  <div>
    <button v-on:click = "addData">+</button>
    <input type="number" v-model.lazy="no">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for = "(prod, index) in products" v-bind:key="prod.product_no"> <!-- 각 값의 고유 값을 생성 (키값 생성)-->
          <td>{{ prod.product_name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.category }}</td>
          <td>{{ prod.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

let data = [
  {
    product_no: 1,
    product_name : "기계식키보드",
    price : 25000,
    category: "노트북/태블릿",
    delivery_price : 5000,
  },
  {
    product_no: 2,
    product_name : "무선마우스",
    price : 12000,
    category: "노트북/태블릿",
    delivery_price : 5000,
  },
  {
    product_no: 3,
    product_name : "아이패드",
    price : 725000,
    category: "노트북/태블릿",
    delivery_price : 5000,
  },
];

export default { 
  data() {
    return {
      products : data,
      no : ''
    }
  },
  methods : {
    addData(event){
      let obj = {
        product_no : (this.products.length * 1000),
        product_name : "무선충전기",
        price : 25000,
        category: "노트북/태블릿",
        delivery_price : 3000,
      }
      // this.products.push(obj);
      this.products[this.products.length] = obj;
    },
    
  },
    watch : {
      no() {
        this.products.splice(this.no, 1);
      }
    }
}
</script>

<style>
table{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width : 100%
  }
  td, th{
    border : 10px solid red;
    text-align: left;
    padding: 8px;
  }
</style>