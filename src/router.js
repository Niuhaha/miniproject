import Vue from 'vue'
import Router from 'vue-router';
import Home from './components/home/Home'
import Source from './components/source/Source'
import Works from './components/works/Works'
import Mine from './components/mine/Mine'
import Myworks from './components/works/Myworks'
import Mycollect from './components/works/Mycollect'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            children:[]
        },
        {
            path: '/source',
            component: Source,
            name: 'source',
            children: []
        },
        {
            path: '/works',
            component: Works,
            name: 'works',
            children: [
                {
                    path: '/',
                    redirect: '/works/mycollect'
                },
                {
                    path: '/myworks',
                    component: Myworks,
                    name: 'myworks'
                },{
                    path: 'mycollect',
                    component: Mycollect,
                    name: 'mycollect'
                }
            ]
        },
        {
            path: '/mine',
            component: Mine,
            name: 'mine',
            children: []
        }
    ]
})