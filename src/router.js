import React from 'react'
import * as dvaRouter from 'dva/router'
import { Route, Switch, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/App'

const { ConnectedRouter } = routerRedux

// import IndexPage from './routes/IndexPage'
// import Users from './routes/Users'

console.log(dvaRouter)
function RouterConfig({ history, app }) {
	
    const MainLayout = dynamic({
        app,
         models: () => [import('./models/users')],
        component: () => import('./routes/MainLayout')
    })
     const IndexPage = dynamic({
        app,
        component: () => import('./routes/IndexPage')
    }) 
    const Home = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/Home')
    })
    const User = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/User')
    })
    const GameApplyList = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/GameApplyList')
    })
    const SetGifts = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/SetGifts')
    })
    const BussnissList = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/BussnissList')
    })
    const MCLunbo = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/MCLunbo')
    })
    
    return (
        <ConnectedRouter history={history}>
        {/*Layout以外是登录、404等其他页面的所有路由*/}
          <Switch>
          <Route path="/" exact component={IndexPage} />
          {/*Layout以内是APP的所有路由*/}
                <App>
                    <Switch>
                    <Route path="/layout" exact component={MainLayout} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/user" exact component={User} />
                    <Route path="/gameapplylist" exact component={GameApplyList} />
                    <Route path="/setgifts" exact component={SetGifts} />
                    <Route path="/bussnisslist" exact component={BussnissList} />
                    <Route path="/mclunbo" exact component={MCLunbo} />
                    
                    {/* </Route> */}
                    </Switch>
                </App>
          </Switch>
        </ConnectedRouter>
    )
}

export default RouterConfig
