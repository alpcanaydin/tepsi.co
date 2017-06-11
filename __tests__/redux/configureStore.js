import configureStore from '../../src/redux/configureStore';

it('creates store successfully', () => {
  const store = configureStore(undefined);

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
