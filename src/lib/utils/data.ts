export interface IImage {
	sm: string;
	lg: string;
}
export interface IPrice {
	actualPrice?: number;
	isFree?: boolean;
	discount?: number; //1 to 100
	discountedPrice?: number;
}
export interface IGame {
	name: string;
	description: string;
	href: string;
	img: IImage;
	price: IPrice;
}

const rocketLeague: IGame = {
	name: 'Rocket League',
	description: 'A vehicular soccer video game developed and published by Psyonix',
	href: '/store/p/rocket-league',
	img: {
		sm: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/5748aa76-eaff-451a-b5bb-3bff8a4f4fc2_1200x1600-f0107f8dec9b4659b77ef166f92b3637?h=854&resize=1&w=640',
		lg: 'https://cdn2.unrealengine.com/egs-rl-mustang-desktop-1280x702-1248x702-7c5043ecef80.png?h=1080&resize=1&w=1920'
	},
	price: {
		isFree: true
	}
};
const fortnite: IGame = {
	name: 'Fortnite',
	description: 'An online video game developed by Epic Games',
	href: '/store/p/fortnite',
	img: {
		sm: 'https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg',
		lg: 'https://cdn2.unrealengine.com/19br-keyart-egs-launcher-breaker-1920x1080-alt-1920x1080-6c7888b1de81.jpg?h=1080&resize=1&w=1920'
	},
	price: {
		isFree: true
	}
};
const rumbleverse: IGame = {
	name: 'Rumbleverse',
	description: 'An all-new, free-to-play, 40-person Brawler Royale where anyone can be a champion.',
	href: '/store/p/rumbleverse',
	img: {
		sm: 'https://cdn2.unrealengine.com/egs-rumbleverse-thumb-1200x1600-1200x1600-bee70ce217ad.jpg',
		lg: 'https://cdn2.unrealengine.com/egs-rumbleverse-desktop-1920x1080-1920x1080-8fd45dabf5db.jpg?h=1080&resize=1&w=1920'
	},
	price: {
		isFree: false,
		actualPrice: 500,
		discount: 10,
		discountedPrice: 450
	}
};
const finalFantasy: IGame = {
	name: 'Final fantasy VII',
	description: 'A 1997 role-playing video game developed by Square',
	href: '/store/p/final-fantasy-vii',
	img: {
		sm: 'https://cdn2.unrealengine.com/end-plus-portrait-offer-image-with-logo-1200x1600-1200x1600-6c375adec92d.jpg',
		lg: 'https://cdn2.unrealengine.com/egs-finalfantasyviiremakeintergrade-squareenix-s1-2560x1440-2560x1440-6f7b84c569fc.jpg?h=1080&resize=1&w=1920'
	},
	price: {
		isFree: false,
		actualPrice: 500,
		discount: 10,
		discountedPrice: 450
	}
};
const homeWorld3: IGame = {
	name: 'Homeworld 3',
	description: 'An upcoming real-time strategy video game currently being developed',
	href: '/store/p/homeworld-3',
	img: {
		sm: 'https://cdn2.unrealengine.com/egs-homeworld-3-epic-thumb-1200x1600-1200x1600-ac4f7a4b136c.jpg',
		lg: 'https://cdn2.unrealengine.com/egs-homeworld-3-desktop-1248x702-1248x702-5d38d90b7d90.jpg?h=1080&resize=1&w=1920'
	},
	price: {
		isFree: false,
		actualPrice: 900,
		discount: 0
	}
};
const witchyWood: IGame = {
	name: 'Witchy Wood',
	description:
		'A crafting adventure game set in an expressive land of gothic fables and fairytales',
	href: '/store/p/witchwood',
	img: {
		sm: 'https://cdn1.epicgames.com/offer/8bd7d123bc59474ebb2552793dc0fdbb/EGS_Wytchwood_Alientrap_S2_1200x1600-92eda3068cbfa6e1ed08479dbdb350bd?h=480&resize=1&w=360',
		lg: 'https://cdn2.unrealengine.com/egs-wytchwood-alientrap-g1a-01-1920x1080-d7b146362134.jpg'
	},
	price: {
		isFree: false,
		actualPrice: 500,
		discount: 10,
		discountedPrice: 450
	}
};
export const QUICK_LAUNCH_GAMES: IGame[] = [rocketLeague, fortnite, rumbleverse];
export const CAROUSEL_GAMES: IGame[] = [
	rocketLeague,
	fortnite,
	rumbleverse,
	finalFantasy,
	homeWorld3,
	witchyWood
];
export const ON_SALE_GAMES: IGame[] = [
	rocketLeague,
	rumbleverse,
	finalFantasy,
	homeWorld3,
	witchyWood
];
