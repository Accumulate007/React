import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import NoMatch from './pages/nomatch'
import Login from './pages/login'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Message from './pages/ui/messages'
import MyTabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
import BasicTable from './pages/table/basicTable'

import City from './pages/city/city'

class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" render={() => 
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/notification" component={Notice} />
                                    <Route path="/admin/ui/messages" component={Message} />
                                    <Route path="/admin/ui/tabs" component={MyTabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousels} />
                                    <Route path="/admin/form/login" component={FormLogin} />
                                    <Route path="/admin/form/reg" component={Register} />
                                    <Route path="/admin/table/basic" component={BasicTable} />
                                    <Route path="/admin/city" component={City} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                        <Route path="/order/detail" component={Login} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}



export default IRouter
