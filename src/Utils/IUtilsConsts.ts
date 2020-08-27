interface ILocationProps {
  latitude: number;
  longitude: number;
}

interface IWeatherOptions {
  description: string;
  value: number;
  metric: string;
}

interface IWeatherProps {
  locale: string;
  temperature: number;
  description: string;
  icon: string;
  linkIcon: string;
  options: IWeatherOptions[];
}

interface IDaysProps {
  id: number;
  temperature: number;
  description: string;
  day: string;
}

interface ITemp {
  day: number;
  min: number;
  max: number;
}

interface IWeatherDay {
  main: string;
  description: string;
  icon: string;
  id: number;
}

interface IWeatherItemDaysProps {
  dt: number;
  temp: ITemp;
  weather: IWeatherDay[];
}

interface IWeatherDaysProps {
  daily: IWeatherItemDaysProps[];
}

export {
  ILocationProps,
  IWeatherProps,
  IDaysProps,
  IWeatherDaysProps,
  IWeatherItemDaysProps,
};
