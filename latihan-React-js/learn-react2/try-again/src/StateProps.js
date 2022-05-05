import React, {Component} from 'react'
import Operan from './operan'


 class StateProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan : 'bakso'
        }
    }
    gantiMakanan = (makananN) => {
        this.setState({
            makanan: makananN
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("soto")}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}

// STATE AKAN JADI PROP KETIKA JADI OPERAN COMPONENT LAIN


export default StateProps;