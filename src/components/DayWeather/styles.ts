import styled from 'styled-components/native';

export const Container = styled.View`  
  /*flex-direction: row;
  align-items: center;
  justify-content: space-between;  
  background: #fff;
  margin: 15px; 
  padding: 10px;
  border-radius: 4px;*/
  
  align-self: stretch;
  background: #fff;
  margin: 20px;
  border-radius: 4px;
  padding: 20px;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;  
`
export const NameCity = styled.Text`
  text-align: right; 
  font-size: 22px;
  color: #333;
`;

export const TempDescription = styled.Text`
  font-size: 28px;
  margin-top: 10px;
  text-align: center;
  color: #333;
`;

export const Sensation = styled.Text`
  
`;

export const Humidity = styled.Text`
  
`;

export const Wind = styled.Text`
  
`;

export const Degree = styled.Text`
  
`;


