import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';

import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import getCurrentWeather from '../../services/getCurrentWeather';
import getSevenDayWeather from '../../services/getSevenDayWeather';

import { dateFormatOptions } from '../../Utils/dateFormatOptions';

import {
  IWeatherProps,
  ILocationProps,
  IDaysProps,
} from '../../Utils/IUtilsConsts';

import * as Styled from './styles';

const Main: React.FC = () => {
  const netInfo = useNetInfo();

  const [connectedInternet, setConnectedInternet] = useState(true);
  const [position, setPosition] = useState<ILocationProps>(
    {} as ILocationProps,
  );
  const [weather, setWeather] = useState<IWeatherProps>();
  const [weatherDays, setWeatherDays] = useState<IDaysProps[]>();
  const dateFormat = dateFormatOptions.format(new Date());

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Oooops..',
          'Precisamos de sua permissão para obter a sua localização !',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setPosition({ latitude, longitude });
    }

    loadPosition();
    setConnectedInternet(netInfo.isConnected);
  }, [netInfo.isConnected]);

  async function loadAsyncStorage() {
    const data = await AsyncStorage.getItem('@WeatherDays');

    if (data) {
      setWeatherDays(JSON.parse(data));
    }
  }

  useEffect(() => {
    async function loadWeather() {
      if (connectedInternet) {
        const currentWeather = await getCurrentWeather(position);
        const sevenDayWeather = await getSevenDayWeather(position);

        setWeather(currentWeather);
        setWeatherDays(sevenDayWeather);

        await AsyncStorage.setItem(
          '@WeatherDays',
          JSON.stringify(sevenDayWeather),
        );
      } else {
        loadAsyncStorage();
      }
    }

    loadWeather();
  }, [position, connectedInternet]);

  async function handleLoadWeather() {
    if (connectedInternet) {
      const currentWeather = await getCurrentWeather(position);
      const sevenDayWeather = await getSevenDayWeather(position);

      setWeather(currentWeather);
      setWeatherDays(sevenDayWeather);

      await AsyncStorage.setItem(
        '@WeatherDays',
        JSON.stringify(sevenDayWeather),
      );
    } else {
      loadAsyncStorage();
    }
  }

  if (!weather && !weatherDays) {
    return (
      <Styled.Container>
        <Styled.WrapperConnection>
          <Styled.NoConnection>
            Não foi possivel carregar a previsão do tempo no momento
          </Styled.NoConnection>
        </Styled.WrapperConnection>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.Content>
        {weather ? (
          <Styled.Wrapper>
            <Styled.Header>
              <Styled.Locale>
                <Styled.City>{weather?.locale}</Styled.City>
                <Styled.Date>{dateFormat}</Styled.Date>
              </Styled.Locale>
              <Styled.Refresh onPress={handleLoadWeather}>
                <MaterialIcons name="refresh" size={32} color="#222222" />
              </Styled.Refresh>
            </Styled.Header>

            <Styled.ContainerTemperature>
              <Styled.Temperature>{`${weather?.temperature}º`}</Styled.Temperature>
              <Styled.WeatherDescription>
                {weather?.description}
              </Styled.WeatherDescription>
            </Styled.ContainerTemperature>
          </Styled.Wrapper>
        ) : null}

        <Styled.ListWeather
          data={weatherDays}
          keyExtractor={item => String(item.id)}
          ListHeaderComponent={() => (
            <Styled.ForecastForNextDays>
              Previsão para os próximos dias
            </Styled.ForecastForNextDays>
          )}
          renderItem={({ item }: { item: IDaysProps }) => (
            <Styled.WeatherDay>
              <Styled.TemperatureDay>{`${item.temperature}º`}</Styled.TemperatureDay>
              <Styled.WeatherDayTemperature>
                <Styled.DayWeather>{item.day}</Styled.DayWeather>
                <Styled.DayDescription>
                  {item.description}
                </Styled.DayDescription>
              </Styled.WeatherDayTemperature>
            </Styled.WeatherDay>
          )}
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Main;
