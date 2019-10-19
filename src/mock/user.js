import Mock from 'mockjs'

Mock.mock('/userlist', {
  "userlist|10": [
    {
      "id|=1": 1,
      "name": "@cword(2,3)",
      "age": 20,
      "gender": "@integer(0,1)"
    }
  ]
})