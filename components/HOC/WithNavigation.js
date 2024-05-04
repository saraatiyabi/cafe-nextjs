import React from 'react'
import Navbar from '../modules/Navbar/Navbar'

const WithNavigation = (BaseComponent) => {
    return class LayoutWrapped extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (
                <>
                    <Navbar data={this.props.data.navbarItems} />
                    <BaseComponent {...this.props} />
                </>
            )
        }
    }
}


export default WithNavigation