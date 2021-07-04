import Providers from '../src/Providers'

export const decorators = [
  (Story) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Providers >
        <Story />
      </Providers>
    </div>
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
  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Dark',
        value: '#111122',
      },
      {
        name: 'Light',
        value: '#FAFAFA',
      },
    ],
  },
}