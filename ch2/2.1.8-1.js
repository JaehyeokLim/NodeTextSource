function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      console.log("1");
      return user.save();
    })
    .then((user) => {
      console.log("2");
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      console.log("3");
      // 생략
    })
    .catch(err => {
      console.log("4");
      console.error(err);
    });
}
