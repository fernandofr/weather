import api from './api';

import convertUnixToDayAndMonth from '../Utils/convertUnixToDayAndMonth';
import env from '../config/app.env';

import {
  ILocationProps,
  IWeatherDaysProps,
  IDaysProps,
  IWeatherItemDaysProps,
} from '../Utils/IUtilsConsts';

async function getSevenDayWeather({
  latitude,
  longitude,
}: ILocationProps): Promise<IDaysProps[]> {
  const { data } = await api.get<IWeatherDaysProps>('onecall', {
    params: {
      lat: latitude,
      lon: longitude,
      appid: env.AppId,
      units: 'metric',
      lang: 'pt_br',
      exclude: 'current, minutely, hourly',
    },
  });

  const weatherDays = data.daily.map((item: IWeatherItemDaysProps) => {
    return {
      id: Math.random() * 100 + 1,
      day: convertUnixToDayAndMonth({ unixDate: item.dt }),
      temperature: parseInt(item.temp.day, 10),
      description: item.weather[0].description,
    };
  });

  return weatherDays;
}

export default getSevenDayWeather;
