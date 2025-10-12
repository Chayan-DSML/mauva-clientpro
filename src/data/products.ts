export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[]; // Changed from imageUrl to images array (max 7)
  price: string;
  categories: string[]; // Product can belong to multiple categories
  whatsappLink: string;
}

// All products in one central location
export const allProducts: Product[] = [
  {
    id: '1',
    name: 'Mountain Explorer Bike',
    description: 'High-performance mountain bike perfect for trail adventures and challenging terrains.',
    images: [
      'https://lh3.googleusercontent.com/d/1vz4tZA1q2g_BbelqmLKGzbQu_oJ422vq',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYk',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYk'
    ],
    price: '₹2,499',
    categories: ['bikes'],
    whatsappLink: 'https://wa.me/p/7092688257499544/919986474527'
  },
  {
    id: '2',
    name: 'Sport Racing Bike',
    description: 'Professional racing bike designed for speed and agility on the track.',
    images: [
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl'
    ],
    price: '₹3,299',
    categories: ['bikes'],
    whatsappLink: '#'
  },
  {
    id: '3',
    name: 'Luxury Sedan',
    description: 'Premium luxury sedan with advanced features and exceptional comfort.',
    images: [
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl'
    ],
    price: '₹45,999',
    categories: ['cars'],
    whatsappLink: '#'
  },
  {
    id: '4',
    name: 'Electric SUV',
    description: 'Eco-friendly electric SUV with cutting-edge technology and spacious interior.',
    images: [
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl',
      'https://lh3.googleusercontent.com/d/1dfzEtO9-DbYSKVTbAi7b1hddt8d9kqYkl'
    ],
    price: '₹52,999',
    categories: ['cars'],
    whatsappLink: '#'
  },
  {
    id: '5',
    name: 'City Commuter Cycle',
    description: 'Perfect urban bicycle for daily commuting with comfort and style.',
    images: [
      'https://images.unsplash.com/photo-1659027790911-39a13c34068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMGJpa2V8ZW58MXx8fHwxNzU5ODI3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1659027790911-39a13c34068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMGJpa2V8ZW58MXx8fHwxNzU5ODI3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹399',
    categories: ['cycle'],
    whatsappLink: '#'
  },
  {
    id: '6',
    name: 'Vintage Classic Cycle',
    description: 'Timeless design meets modern functionality in this classic bicycle.',
    images: [
      'https://images.unsplash.com/photo-1659027790911-39a13c34068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMGJpa2V8ZW58MXx8fHwxNzU5ODI3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1659027790911-39a13c34068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMGJpa2V8ZW58MXx8fHwxNzU5ODI3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1659027790911-39a13c34068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMGJpa2V8ZW58MXx8fHwxNzU5ODI3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹499',
    categories: ['cycle'],
    whatsappLink: '#'
  },
  {
    id: '7',
    name: 'Heavy Duty Truck',
    description: 'Powerful commercial truck built for heavy-duty transportation and logistics.',
    images: [
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹89,999',
    categories: ['truck'],
    whatsappLink: '#'
  },
  {
    id: '8',
    name: 'Delivery Truck',
    description: 'Efficient delivery truck perfect for urban and suburban distribution needs.',
    images: [
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNvbW1lcmNpYWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹65,999',
    categories: ['truck'],
    whatsappLink: '#'
  },
  {
    id: '9',
    name: 'City Transit Bus',
    description: 'Modern public transportation bus with eco-friendly features and passenger comfort.',
    images: [
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹125,999',
    categories: ['buses'],
    whatsappLink: '#'
  },
  {
    id: '10',
    name: 'School Bus',
    description: 'Safe and reliable school bus designed for student transportation with enhanced safety features.',
    images: [
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1742069207625-00b749c8edb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwcHVibGljJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1OTgyNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹95,999',
    categories: ['buses'],
    whatsappLink: '#'
  },
  // Example: Product that appears in multiple categories
  {
    id: '11',
    name: 'Heavy Duty Commercial Tyres',
    description: 'Premium all-weather tyres suitable for trucks and buses. Enhanced durability and fuel efficiency.',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHR5cmVzfGVufDF8fHx8MTc1OTk0ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHR5cmVzfGVufDF8fHx8MTc1OTk0ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹899',
    categories: ['truck', 'buses'], // This product appears in both Trucks and Buses
    whatsappLink: '#'
  },
  {
    id: '12',
    name: 'Performance Brake Pads',
    description: 'High-performance brake pads for bikes and motorcycles. Superior stopping power and longevity.',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHR5cmVzfGVufDF8fHx8MTc1OTk0ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHR5cmVzfGVufDF8fHx8MTc1OTk0ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHR5cmVzfGVufDF8fHx8MTc1OTk0ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    price: '₹149',
    categories: ['bikes', 'cycle'], // This product appears in both Bikes and Cycles
    whatsappLink: '#'
  }
];

export const categoryNames: Record<string, string> = {
  bikes: 'Bikes',
  cars: 'Cars',
  cycle: 'Cycles',
  truck: 'Trucks',
  buses: 'Buses'
};

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter(product => product.categories.includes(categoryId));
}
