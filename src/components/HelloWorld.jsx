import React, { Component, Fragment} from "react";

export class HelloWorld extends Component {

    render() {
        return(
            <Fragment>
                <h1>Hola Mundo Webpack desde {this.props.name}</h1>
                <img className="icon" src={this.props.logo} alt={this.props.name} />
                <nav className="menu">
                    {
                        this.props.menu.map(el => <a href={el[1]} key={el[0]}>{el[0]}</a>)
                    }
                </nav>
            </Fragment>
        )
    }
}