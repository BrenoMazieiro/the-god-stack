import Providers from '../src/Providers'

export const decorators = [
  (Story) => (
    <Providers >
      <Story />
    </Providers>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },  
}