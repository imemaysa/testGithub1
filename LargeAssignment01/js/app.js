new Vue ({
	el: '#app',
	data: {
		isShowingCart: false,
		filterListing: '',
		products: [
			{
				id:1,
				name: 'C15',
				description: 'Creator & Everyman',
				vote: 'by 13580251,13580242',
				inStock: 10,
				image: 'img/15_2.jpg',
				type:'laptop'
			},
			{
				id:2,
				name: 'C18',
				description: 'Creator & Jester',
				vote: 'by 13580222,13580244',
				inStock: 10,
				image: 'img/18_2.jpg',
				type:'mobile'
			},
			{
				id:3,
				name: 'C05',
				description: 'Explorer & Jeter',
				vote: 'by 13580200,13580217',
				inStock: 10,
				image: 'img/05_2.jpg',
				type:'mobile'
			},
			{
				id:4,
				name: 'C04',
				description: 'Creator & Regular Guy',
				vote: 'by 13580232,13580248',
				inStock: 10,
				image: 'img/04_2.jpg',
				type:'mobile'
			},

		],

		cart: {
			items: []
		}
	},

	methods: {
		
		
	},

	computed: {
		filterProducts() {
			return this.products.filter(product=> {
				return product.type.toLowerCase().indexOf(this.filterListing.toLowerCase()) > -1
			})
		},
		addProductToCart: function(product) {
			return  
			
		},

		
	},

	

})