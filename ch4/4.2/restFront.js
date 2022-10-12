async function getUser() { // 로딩 시 사용자 가져오는 함수
  try {
    const res = await axios.get('/users');
    const users = res.data;
    const list = document.getElementById('list');
    list.innerHTML = '';
    // Object.keys() 메소드는 주어진 객체의 속성 이름들을 
    // 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
    // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
    Object.keys(users).map(function (key) {
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = users[key];
      const edit = document.createElement('button');
      edit.textContent = '수정';
      edit.addEventListener('click', async () => { // 수정 버튼 클릭
        const name = prompt('바꿀 이름을 입력하세요');
        if (!name) {
          return alert('이름을 반드시 입력하셔야 합니다');
        }
        try {
          await axios.put('/user/' + key, { name });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      const remove = document.createElement('button');
      remove.textContent = '삭제';
      remove.addEventListener('click', async () => { // 삭제 버튼 클릭
        try {
          await axios.delete('/user/' + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);  // 웹브라우저에 표시
      console.log("res.data in restFrint.js : ", res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

window.onload = getUser; // 화면 로딩 시 getUser 호출
// 폼 제출(submit) 시 실행
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault(); //preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
              // 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
  const name = e.target.username.value;
  if (!name) {
    return alert('이름을 입력하세요');
  }
  try {
    await axios.post('/user', { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = '';
});
