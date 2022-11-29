jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/LogBox/LogBox');
jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
