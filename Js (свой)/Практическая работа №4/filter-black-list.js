const emails = ['1@mail.ru', '3@mail.ru', '4@mail.ru', '6@mail.ru'];
const blackList = ['2@mail.ru', '5@mail.ru'];

function getWhiteList(emails, blackList) {
  const whiteList = [];
  for (let email of emails) {
    if (!blackList.includes(email)) {
      whiteList.push(email);
    }
  }
  return whiteList;
}

export default getWhiteList;
