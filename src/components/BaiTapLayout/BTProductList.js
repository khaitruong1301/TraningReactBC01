import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMART PHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                </div>
          
            </div>
        )
    }
}
