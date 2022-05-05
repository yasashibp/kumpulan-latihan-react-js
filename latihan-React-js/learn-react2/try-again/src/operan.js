import React, {Component} from "react";

class Operan extends Component {
    // gantiMakanan(makananN) {
    //     this.setState({
    //         makanan: makananN
    //     })
    // }
    render(){
        return(
            <div>
                <h2>Operan State yang menjadi Props: {this.props.makanan}</h2>
                <button onClick={() => this.porps.gantiMakanan("soto")}>Ganti Makanan</button>
            </div>
        )
    }
}


export default Operan;