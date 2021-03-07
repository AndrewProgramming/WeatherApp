const request = require('request')

const getWeatherInfo = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4133bb3cf54af394399c9323dd58baca&query=' + address + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to connect to find location', undefined)
        } else {
            //const data = JSON.parse(response.body)
            const data = body
            callback(undefined, data.location.name + ' weather is:' +
                data.current.weather_descriptions[0] + ' temperature is: ' + data.current.temperature + "f")
        }
    })
}

module.exports = getWeatherInfo