import React from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Mercados from '../pages/Mercados'
import About from '../pages/About'

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/mercados" component={Mercados} />
                <Route exact path="/about" component={About} />
            </Switch>
        </HashRouter>
    )
}

