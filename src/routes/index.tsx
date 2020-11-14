import React from 'react';
import { useSelector } from 'react-redux';

import LoggedRoutes from './logged.routes';
import UnloggedRoutes from './unlogged.routes';

export default function Routes() {
    const token = useSelector(state => state.auth.token);

    return token ? <LoggedRoutes /> : <UnloggedRoutes />;
}