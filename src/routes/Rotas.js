import React from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Mercados from '../pages/Mercados'

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/mercados" component={Mercados} />
            </Switch>
        </HashRouter>
    )
}

