function Loc(Component) {
    return function WrappedComponent(props) {
        return (
            <Component course="c++" {...props} />
        );
    };
}

export default Loc; 