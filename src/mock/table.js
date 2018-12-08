import Mock from 'mockjs'

export default {
  tableData () {
    let n = 20
    let data = []
    for (let i = 0; i < n; i++) {
      data.push(Mock.mock({
        id: '@increment',
        date: Mock.Random.date(),
        name: '@cname',
        card: Mock.Random.id(),
        address: '@county(true)'
      }))
    }
    let list = {
      code: 200,
      n,
      start: 0,
      length: 10,
      data
    }
    // let list = {
    //   code: 200,
    //   data: [
    //     { date: '2018-12-01', name: 'Tyrande', card: '15888888888', address: '国家税务总局长沙市税务局' },
    //     { date: '2018-12-02', name: 'Teresa', card: '17888653333', address: '河北省张家口市蔚县杨庄窠乡' },
    //     { date: '2018-12-03', name: 'Mogget', card: '13712458734', address: '北京市海淀区西三环北路105号' },
    //     { date: '2018-12-04', name: 'Rushton', card: '13392836666', address: '夏雪路与景天路交叉口西150米' },
    //     { date: '2018-12-05', name: 'Tyrande', card: '15888888888', address: '国家税务总局长沙市税务局' },
    //     { date: '2018-12-06', name: 'Teresa', card: '17888653333', address: '河北省张家口市蔚县杨庄窠乡' },
    //     { date: '2018-12-07', name: 'Mogget', card: '13712458734', address: '北京市海淀区西三环北路105号' },
    //     { date: '2018-12-08', name: 'Rushton', card: '13392836666', address: '夏雪路与景天路交叉口西150米' },
    //     { date: '2018-12-09', name: 'Tyrande', card: '15888888888', address: '国家税务总局长沙市税务局' },
    //     { date: '2018-12-10', name: 'Teresa', card: '17888653333', address: '河北省张家口市蔚县杨庄窠乡' },
    //     { date: '2018-12-09', name: 'Tyrande', card: '15888888888', address: '国家税务总局长沙市税务局' },
    //     { date: '2018-12-10', name: 'Teresa', card: '17888653333', address: '河北省张家口市蔚县杨庄窠乡' }
    //   ]
    // }
    return list
  }
}
