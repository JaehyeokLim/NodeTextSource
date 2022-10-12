const axios = require('axios');
(async () => {
  try {
    const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
    console.log(result);
    console.log(result.data); // {}
    console.log("=================================================")
    console.log(decodeURIComponent('%EB%85%B8%EB%93%9C'));
  } catch (error) {
    console.error(error);
  }
})();