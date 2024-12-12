import Wedding from '../assets/wedding.jpg'
import Ecommerce from '../assets/ecommerce.png'

const data = [
  {
    id: '1',
    title: 'Destination Wedding',
    description:
      'Choose your best Wedding destination',
    image: {
      src: Wedding,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    link: {
      site: 'https://www.wedmegood.com/vendors/goa/planners/?utm_source=google&utm_medium=cpc&utm_campaign=Goa-Wedding+Planners-Tier-3&campaignid=6491590503&adgroupid=95271106512&adid=621592045863&gad_source=1&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox2B73ScsA5CkfN46aAVJBSVU3nzr04gYQ_HSQP1iXiFj-otQ5lSh1gaAtZrEALw_wcB',
    },
    technologies: [
      '#typescript',
      '#expo',
      '#react-native',
      '#react-navigation',
      '#react-native-reanimated',
      '#payments',
      '#lottie',
      '#valtio',
      '#i18next',
      '#firebase',
    ],
  },
  {
    id: '2',
    title: 'Ecommerce',
    description:
      'The Best festival sell is here',
    image: {
      src: Ecommerce,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    link: {
      site: 'https://www.shopwaale.online/',
    },
    technologies: [
      '#typescript',
      '#expo',
      '#react-native',
      '#react-navigation',
      '#react-native-reanimated',
      '#payments',
      '#lottie',
      '#valtio',
      '#i18next',
      '#firebase',
    ],
  }
];

export default data;
