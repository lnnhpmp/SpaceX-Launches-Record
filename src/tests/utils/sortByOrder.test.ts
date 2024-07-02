import { describe, it } from '@jest/globals'
import { sortByOrder } from '../../utils/sortByOrder'
import { dummyLaunchesData } from '../testHelper'

describe('sortByOrder', () => {
  describe('sort by name', () => {
    it('should be able to sort in ascending order', () => {
      expect(sortByOrder(dummyLaunchesData, 'asc', 'name'))
        .toMatchInlineSnapshot(`
Array [
  Object {
    "id": 1,
    "imgUrl": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
    "launchDetails": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "localDate": "2007-03-21T13:10:00+12:00",
    "name": "DemoSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
  },
  Object {
    "id": 0,
    "imgUrl": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
    "launchDetails": "Engine failure at 33 seconds and loss of vehicle",
    "localDate": "2006-03-25T10:30:00+12:00",
    "name": "FalconSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
  },
  Object {
    "id": 3,
    "imgUrl": "https://images2.imgbox.com/95/39/sRqN7rsv_o.png",
    "launchDetails": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "localDate": "2008-09-28T11:15:00+12:00",
    "name": "RatSat",
    "success": true,
    "youtubeLink": "",
  },
  Object {
    "id": 4,
    "imgUrl": "https://images2.imgbox.com/ab/5a/Pequxd5d_o.png",
    "launchDetails": "",
    "localDate": "2009-07-13T15:35:00+12:00",
    "name": "RazakSat",
    "success": true,
    "youtubeLink": "https://www.youtube.com/watch?v=yTaIDooc8Og",
  },
  Object {
    "id": 2,
    "imgUrl": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png",
    "launchDetails": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "localDate": "2008-08-03T15:34:00+12:00",
    "name": "Trailblazer",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=v0w9p3U8860",
  },
]
`)
    })
    it('should be able to sort in descending order', () => {
      expect(sortByOrder(dummyLaunchesData, 'desc', 'name'))
        .toMatchInlineSnapshot(`
Array [
  Object {
    "id": 2,
    "imgUrl": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png",
    "launchDetails": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "localDate": "2008-08-03T15:34:00+12:00",
    "name": "Trailblazer",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=v0w9p3U8860",
  },
  Object {
    "id": 4,
    "imgUrl": "https://images2.imgbox.com/ab/5a/Pequxd5d_o.png",
    "launchDetails": "",
    "localDate": "2009-07-13T15:35:00+12:00",
    "name": "RazakSat",
    "success": true,
    "youtubeLink": "https://www.youtube.com/watch?v=yTaIDooc8Og",
  },
  Object {
    "id": 3,
    "imgUrl": "https://images2.imgbox.com/95/39/sRqN7rsv_o.png",
    "launchDetails": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "localDate": "2008-09-28T11:15:00+12:00",
    "name": "RatSat",
    "success": true,
    "youtubeLink": "",
  },
  Object {
    "id": 0,
    "imgUrl": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
    "launchDetails": "Engine failure at 33 seconds and loss of vehicle",
    "localDate": "2006-03-25T10:30:00+12:00",
    "name": "FalconSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
  },
  Object {
    "id": 1,
    "imgUrl": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
    "launchDetails": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "localDate": "2007-03-21T13:10:00+12:00",
    "name": "DemoSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
  },
]
`)
    })
  })

  describe('sort by date', () => {
    it('should be able to sort in ascending order', () => {
      expect(
  sortByOrder(dummyLaunchesData, 'asc', 'localDate')
).toMatchInlineSnapshot(`
Array [
  Object {
    "id": 0,
    "imgUrl": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
    "launchDetails": "Engine failure at 33 seconds and loss of vehicle",
    "localDate": "2006-03-25T10:30:00+12:00",
    "name": "FalconSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
  },
  Object {
    "id": 1,
    "imgUrl": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
    "launchDetails": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "localDate": "2007-03-21T13:10:00+12:00",
    "name": "DemoSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
  },
  Object {
    "id": 2,
    "imgUrl": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png",
    "launchDetails": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "localDate": "2008-08-03T15:34:00+12:00",
    "name": "Trailblazer",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=v0w9p3U8860",
  },
  Object {
    "id": 3,
    "imgUrl": "https://images2.imgbox.com/95/39/sRqN7rsv_o.png",
    "launchDetails": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "localDate": "2008-09-28T11:15:00+12:00",
    "name": "RatSat",
    "success": true,
    "youtubeLink": "",
  },
  Object {
    "id": 4,
    "imgUrl": "https://images2.imgbox.com/ab/5a/Pequxd5d_o.png",
    "launchDetails": "",
    "localDate": "2009-07-13T15:35:00+12:00",
    "name": "RazakSat",
    "success": true,
    "youtubeLink": "https://www.youtube.com/watch?v=yTaIDooc8Og",
  },
]
`)
    })
    it('should be able to sort in descending order', () => {
      expect(
  sortByOrder(dummyLaunchesData, 'desc', 'localDate')
).toMatchInlineSnapshot(`
Array [
  Object {
    "id": 4,
    "imgUrl": "https://images2.imgbox.com/ab/5a/Pequxd5d_o.png",
    "launchDetails": "",
    "localDate": "2009-07-13T15:35:00+12:00",
    "name": "RazakSat",
    "success": true,
    "youtubeLink": "https://www.youtube.com/watch?v=yTaIDooc8Og",
  },
  Object {
    "id": 3,
    "imgUrl": "https://images2.imgbox.com/95/39/sRqN7rsv_o.png",
    "launchDetails": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "localDate": "2008-09-28T11:15:00+12:00",
    "name": "RatSat",
    "success": true,
    "youtubeLink": "",
  },
  Object {
    "id": 2,
    "imgUrl": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png",
    "launchDetails": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "localDate": "2008-08-03T15:34:00+12:00",
    "name": "Trailblazer",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=v0w9p3U8860",
  },
  Object {
    "id": 1,
    "imgUrl": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
    "launchDetails": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "localDate": "2007-03-21T13:10:00+12:00",
    "name": "DemoSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
  },
  Object {
    "id": 0,
    "imgUrl": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
    "launchDetails": "Engine failure at 33 seconds and loss of vehicle",
    "localDate": "2006-03-25T10:30:00+12:00",
    "name": "FalconSat",
    "success": false,
    "youtubeLink": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
  },
]
`)
    })
  })
})
