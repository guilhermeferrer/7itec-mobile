# Desafio 7iTec Mobile

The app was developed using redux to manage state, redux requests to isolate api calls in a redux layer, axios for handling HTTP requests, styled-components for writing styles with css and make code  more readably, and it uses reanimated and gesture handler for providing an incridible user experiencie.

Checkout using the following command to start playing with the app:

```bash
https://github.com/guilhermeferrer/7itec-mobile
```

Don't forget to install dependencies:
```bash
cd 7itec-mobile && yarn
```
or
```bash
cd 7itec-mobile && npm install
```

If you want to install app on the iOS simulator:
```bash
npx pod-install
```

To start the app use:
```bash
yarn android or yarn ios
```
or
```bash
npm run android or npm run ios
```

# Important
In order to successfully execute the server, you will need to rename `.env.example` to `.env` at root directory and edit it as showed bellow:

| KEY | VALUE |
| ------ | ------ |
| API_URL | Port location where the server is running |
