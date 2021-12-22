const product = {
    namespaced : true,
    state:{
        products : [
            {
                id : 1,
                name : 'samsung galaxy s21',
                url : require('@/assets/galaxy.jpg'),
                price : 900
            },
            {
                id : 2,
                name : 'iphone 13 pro',
                url : require('@/assets/iphone.jpg'),
                price : 1000
            },
            {
                id : 3,
                name : 'google pixel 6 pro',
                url : require('@/assets/pixel.jpg'),
                price : 800
            },
            {
                id : 4,
                name : 'Xiaomi 11T Pro',
                url : require('@/assets/mi.jpg'),
                price : 700
            },
        ]
    },
    getters:{
        allProducts(state){
            return state.products
        },
    },
}
export default product;