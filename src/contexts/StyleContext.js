import React from 'react';

const StyleContext = React.createContext();

export const StyleContextConsumer = StyleContext.Consumer;

export class StyleContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    

    render() {
        return (
            <StyleContext.Provider value={{
                styles: this.state
            }}>
                {this.props.children}
            </StyleContext.Provider>
        )
    }
}

export default StyleContext;