const { default: axios } = require('axios');
const { getCoordinateByCity } = require('../services/coordinateByCity');
jest.mock('axios');
const mockedAxios = axios

describe('Axios call to get Coordinates',()=>{
    test('getCoordinates',()=>{
        const result = {"coord":{"lon":78.4744,"lat":17.3753},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":298.38,"feels_like":298.45,"temp_min":297.88,"temp_max":298.38,"pressure":1017,"humidity":57},"visibility":5000,"wind":{"speed":3.09,"deg":120},"clouds":{"all":20},"dt":1672836154,"sys":{"type":1,"id":9214,"country":"IN","sunrise":1672795019,"sunset":1672835052},"timezone":19800,"id":1269843,"name":"Hyderabad","cod":200}
        const resp = {data: result};
        mockedAxios.get.mockResolvedValue(resp);
        return getCoordinateByCity("Hyderbad").then((res)=>{
            expect(res.data.coord.lon).toEqual(78.4744)
        })
    })
})


