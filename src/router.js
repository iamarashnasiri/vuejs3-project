import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import Links from './components/pages/links/Links.vue'
import Tasks from './components/pages/tasks/Tasks.vue'
import Posts from './components/pages/links/posts/Posts.vue'
import PostCreate from './components/pages/links/posts/PostCreate.vue'
import PostSingle from './components/pages/links/posts/PostSingle.vue'
import PostEdit from './components/pages/links/posts/PostEdit.vue'
import Users from './components/pages/links/users/Users.vue'
import Products from './components/pages/shop/Products.vue'
import Cart from './components/pages/shop/Cart.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/links', name: 'Links', component: Links, children: [
            {
                path: 'posts', name: 'Posts', component: Posts
            },
            {
                path: 'posts/create', name: 'PostCreate', component: PostCreate
            },
            {
                path: 'posts/:id', name: 'PostSingle', component: PostSingle
            },
            {
                path: 'posts/:id/edit', name: 'PostEdit', component: PostEdit
            },
            {
                path: 'users', name: 'Users', component: Users
            }
        ]
    },
    {
        path: '/tasks', name: 'Tasks', component: Tasks
    },   
    {
        path: '/products', name: 'Products', component: Products
    },   
    {
        path: '/cart', name: 'Cart', component: Cart
    },   
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;