import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Locale = styled.View`
  max-width: 80%;
`;

export const City = styled.Text`
  font-size: 28px;
  color: #222222;
  line-height: 32px;
`;

export const Date = styled.Text`
  font-size: 18px;
  color: #b5b5b5;
  margin-top: 8px;
`;

export const Refresh = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const ContainerTemperature = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Temperature = styled.Text`
  font-size: 80px;
  color: #222;
  margin-left: 28px;
`;

export const Image = styled.Image``;

export const WeatherDescription = styled.Text`
  color: #b5b5b5;
  font-size: 24px;
  text-transform: capitalize;
  text-align: center;
`;

export const ListWeather = styled(FlatList).attrs({
  contentContainerStyle: {},
})`
  margin-top: 15px;
`;

export const WeatherDay = styled.View`
  align-items: center;
  justify-content: space-between;
  background-color: #6699c3;
  border-width: 0.5px;
  border-color: #ddd;
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 20px;
`;

export const WeatherDayTemperature = styled.View`
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const TemperatureDay = styled.Text`
  color: #fff;
  font-size: 30px;
`;

export const DayDescription = styled.Text`
  color: #fff;
  font-size: 24px;
  text-transform: capitalize;
`;

export const DayWeather = styled.Text`
  color: #fff;
  font-size: 24px;
  text-transform: capitalize;
`;

export const ForecastForNextDays = styled.Text`
  font-size: 22px;
  color: #b5b5b5;
  line-height: 32px;
  text-align: center;
  margin-bottom: 10px;
`;

export const WrapperConnection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoConnection = styled.Text`
  font-size: 18px;
  color: #b5b5b5;
  text-align: center;
`;
