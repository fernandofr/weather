import React from 'react';

import * as Styled from './styles';

export default function DayWeather() {
  return (
    <Styled.Container>
      <Styled.NameCity>Restinga - SP</Styled.NameCity>
      <Styled.TempDescription>27°c Nuvens dispersas</Styled.TempDescription>
      <Styled.Content>
        <Styled.Degree>27°</Styled.Degree>
        <Styled.Degree>29°</Styled.Degree>
      </Styled.Content>
    </Styled.Container>
  );
}