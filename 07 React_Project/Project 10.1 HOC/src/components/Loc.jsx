import React from 'react';

export default function Loc(Component) {
    return function WrappedComponent(props) {
        return (
            <Component course="c++" {...props} />
        );
    };
}
