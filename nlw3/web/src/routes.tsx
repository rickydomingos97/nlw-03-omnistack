import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanegesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
        {/* O Switch faz com que somente uma Route seja selecionada por vez */}
        <Switch>
        {/* o exact faz uma comparação entre as routes */}
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanegesMap} />

            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>        
        </BrowserRouter>
    );
}

export default Routes;