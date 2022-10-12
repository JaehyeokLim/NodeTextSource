// =========================================================예제1
const axios = require('axios');

  axios.get('https://www.zerocho.com/api/get')
    .then((result) => {
      console.log(result);
      console.log(result.data); // {}
    })
    .catch((error) => {
      console.error(error);
    });


//========================================== 예제2
// const axios = require('axios');

// const getBreeds = async () => {
//   try {
//     return await axios.get('https://dog.ceo/api/breeds/list/all');
//   } catch (error) {
//     console.error(error);
//   }
// };

// const countBreeds = async () => {
//   const breeds = await getBreeds();
  
//   if (breeds.data.message) {
//     console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
//   }
// };

// countBreeds();