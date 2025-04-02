// index.js
const axios = require('axios');


// fetch
fetch('http://localhost:3000/customers')
.then(res => res.json())
.then(result => {
  console.log('fetch, GET');
  console.log(`\t`, result);
})
.catch(err => console.log(err));

// axios (데이터를 json형식으로 쉽게 주고 받을 수 있게 해주는 역할 axios, API와 비슷한 개념.)
fetch('http://localhost:3000/customers')
.then(result => {                   // axios는 기본적으로 json을 기반으로 하기 때문에 .then이 하나만 나온다.
  console.log('fetch, GET');
  console.log(`\t`, result.data);
})
.catch(err => console.log(err));

// 단건조회 (axios)
axios.get('http://localhost:3000/customers/1')
.then(result => {
  console.log('axios, 단건조회');
  console.log(`\t`, result.data);
})
.catch(err => console.log(err));
// 등록
let insertInfo = {
  name : 'Ja',
  email : 'eoh@gmail.com',
  phone : '010-0000-0000',
  address : null
};

// 1) fetch를 이용해서 데이터 보내기
fetch('http://localhost:3000/customers',
  { headers :{ 
    "Content-type" : "application/json"
  },
  body : JSON.stringify(insertInfo), // 객체를 JOSN으로..
  method: "POST",
  }
)
.then(res => res.json())
.then(result =>  {
  console.log('fetch, POST');
  console.log(`\t`, result);
})
.catch(err => console.log(err));

// 2) axios
axios.post('http://localhost:3000/customers', insertInfo)
.then(result => {
  console.log('axios, 등록');
  console.log(`\t`, result.data);
})
.catch(err => console.log(err));