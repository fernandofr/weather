## Sobre

Projeto desenvolvido para exibir a previsão do tempo e também sendo possivel armazenar os dados de 7 dias para consulta em casos do dispositivo estar sem conexão com a internet.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:
 - Expo
 - Styled Components
 - Axios
 - Async Storage
 - Eslint
 - Prettier

 ## Como usar

 - ### **Pré-requisitos**

    - É **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

 1. Clone o projeto utilizando o comando abaixo:

```sh
  $ git clone https://github.com/fernandofr/weather
```

 2. Após clonar o projeto navegue para dentro da pasta clonada e rode o comando, para baixar e instalar todas dependências.

```sh
  $ yarn
```

3. Crie sua variável ​​de ambiente com base nos exemplo de ```app.env.example``` que está em ```src/config```.

```sh
  cp app.env.example app.env
```

- Para pesquisar a API, você precisará de uma chave de acesso, que pode ser gerada seguindo as etapas:
  - Acesse **[esse](https://openweathermap.org/)** site e crie uma conta com seu e-mail.
  - Após criar uma conta, gere uma chave de acesso e copie esta chave.
  - Acesse a pasta **`src/config`** e no arquivo **`app.env.ts`** insira a chabe na variável`AppId`.

4. Rodando o App
  - É possivel rodar o app executando o comando ```yarn start```. Na guia que for aberta no navegador, escolha a opção de visualizar o aplicativo.
  **Obeservação**: Também é possivel já rodar direto na plataforma informando ```yarn android``` ou ```yarn ios```.
  - **Vizualizar no dispositivo físico:**Instale o aplicativo Expo (ou Expo CLI no Android) e digitalize o QR Code com sua câmera.
  - Lembre-se de que ambos os dispositivos (servidor e dispositivo físico) devem estar na mesma rede.







