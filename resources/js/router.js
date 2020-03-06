import Login from './components/LoginForm.vue';
import PostList from './components/PostList.vue';
import PostCreate from './components/PostCreate.vue';
import PostDetail from './components/PostDetail.vue';
import PostEdit from './components/PostEdit.vue';


export default [
    {
        path: '/vue/login',
        name: 'login',
        component: Login
    },
    {
        path: '/vue/posts',
        name: 'posts',
        component: PostList,
    },
    {
        path: '/vue/post/create',
        name: 'create',
        component: PostCreate,
    },
    {
        path: '/vue/post/detail/:id',
        name: 'post_detail',
        component: PostDetail,
    },
    {
        path: '/vue/post/edit/:id',
        name: 'post_edit',
        component: PostEdit,
    },

]