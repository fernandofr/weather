import api from './api';
import { ILocationProps, IWeatherProps } from '../Utils/IUtilsConsts';
import convertUnixToHours from '../Utils/convertUnixToHours';
import convertMetersToQuilometers from '../Utils/convertMetersToQuilometers';

import env from '../config/app.env';

async function getCurrentWeather({
  latitude,
  longitude,
}: ILocationProps): Promise<IWeatherProps> {
  const { data } = await api.get('weather', {
    params: {
      lat: latitude,
      lon: longitude,
      appid: env.AppId,
      units: 'metric',
      lang: 'pt_br',
    },
  });

  const currentWeather = {
    locale: data.name,
    temperature: parseInt(data.main.temp, 10),
    description: `${data.weather[0].description}`,
    icon: data.weather[0].icon,
    linkIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    options: [
      {
        description: 'Sensação Térmica',
        value: parseInt(data.main.feels_like, 10),
        metric: 'ºC',
      },
      {
        description: 'Nascer do Sol',
        value: convertUnixToHours({
          unixTime: data.sys.sunrise,
          unixTimezone: data.timezone,
        }),
        metric: '',
      },
      {
        description: 'Pôr do Sol',
        value: convertUnixToHours({
          unixTime: data.sys.sunset,
          unixTimezone: data.timezone,
        }),
        metric: '',
      },
      { description: 'Umidade', value: data.main.humidity, metric: '%' },
      {
        description: 'Visibilidade',
        value: convertMetersToQuilometers(data.visibility),
        metric: 'km',
      },
      { description: 'Pressão', value: data.main.pressure, metric: 'hPa' },
    ],
  } as IWeatherProps;

  return currentWeather;
}

export default getCurrentWeather;
