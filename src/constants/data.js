import images from './images';

const chef = [
  {
    title: 'Grilled Turkish bread',
    item: "Hors D'Oeuvre",
    tags: 'Chickpeas | Chilli Olive Oil ',
  },
  {
    title: 'Thai Pumpkin Soup',
    item: 'Appetizer',
    tags: 'Galangal | Lemongrass | Kaffir Lime Leave | Coconut Cream',
  },
  {
    title: 'Coral Coast Barramundi',
    item: 'Salad',
    tags: 'Hummus | Mint Yoghurt | Pomegranate | Herb Salad',
  },
  {
    title: 'Black Angus Beef Fillet',
    item: 'Main Course',
    tags: 'Mushroom Crust | Paris Mash | Fried Egg Yolk | Shiraz Essence',
  },
  {
    title: 'Nutella Panna Cotta',
    item: 'Dessert',
    tags: 'Torched Marshmallows | Raspberry Dressing | Banana Brûlée',
  },
];

const cocktails = [
  {
    title: 'Spicy Watermelon Mint Agua Fresca',
    price: '$20',
    tags: 'Watermelon | Lime | Mint Leaves | Jalapeño',
  },
  {
    title: "Citrus Fizz",
    price: '$16',
    tags: 'Seedlip Grove 42 | rganic marmalade cordial | Sparkling water',
  },
  {
    title: 'Dry Cranberry Spitzer',
    price: '$28',
    tags: 'Seedlip Grove 42 | Monlin cranberry | Lime juice | Orange bitters | Q Grapefruit soda',
  },
  {
    title: 'Virgin Cucumber Gimlet',
    price: '$18',
    tags: 'club soda | muddled cucumber | fresh lime juice | simple syrup',
  },
  {
    title: 'Vantage Point',
    price: '$26',
    tags: 'New London Light | coffee | agave syrup',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { chef, cocktails, awards };
