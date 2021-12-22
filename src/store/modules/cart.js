const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        allCart(state) {
            return state.cart
        },
        totalAmount(state) {
            let sum = 0
            state.cart.forEach(item => {
                sum += item.quantity * item.price;
            });
            return sum
        },
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        increment(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (item) {
                item.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        decrement(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeItem(state, product) {
            state.cart = state.cart.filter( cart => cart.id != product.id)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeAll(state){
           state.cart = []
           localStorage.setItem('cart', JSON.stringify(state.cart))
        }

    },
    actions: {
        addCart({ commit }, product) {
            commit('add', product)
        },
        increment({ commit }, product) {
            commit('increment', product)
        },
        decrement({ commit }, product) {
            commit('decrement', product)
        },
        removeItem({ commit }, product) {
            commit('removeItem', product)
        },
        removeAll({ commit }) {
            commit('removeAll')
        },
    }
}
export default cart;