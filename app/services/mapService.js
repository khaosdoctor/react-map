var jsonp = require('jsonp')
var axios = require('axios')

var HOST = 'https://viacep.com.br/ws/';

var mapService = {
  getInfoByCode: function (zipcode, cb) {
    return jsonp(`${HOST}/${zipcode}/json`, null, cb)
  },
  getGeometry: function (location) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.street}-${location.neighbourhood}-${location.city}`)
  }
}

module.exports = mapService
