var jsonp = require('jsonp')

var HOST = 'https://viacep.com.br/ws/';

var mapService = {
  getInfoByCode: function (zipcode, cb) {
    return jsonp(`${HOST}/${zipcode}/json`, null, cb)
  },
  getGeometry: function (location, cb) {
    return jsonp(`https://maps.googleapis.com/maps/api/geocode/jsonp?address=${location.street}-${location.neighbourhood}-${location.city}`, null, cb) //Google does not support this, change to axios
  }
}

module.exports = mapService
