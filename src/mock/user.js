import Mock from 'mockjs'

Mock.mock('/starlist', {
  "starlist|10": [
    {
      "id|=1": 1,
      "name": "@cword(2,3)",
      "album": "@cword(2,10)"
    }
  ]
})