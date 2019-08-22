import React from 'react';

export default class CopyRight extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>Copyright &copy; 2019 Jaylers 2019 All right Reserved.</div>
        );
    }
}