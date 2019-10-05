// Content.js

import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Codemi Home</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong></strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Luke Skywalker</h5>
                                                <span className="description-text">172/77</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">C-3PO</h5>
                                                <span className="description-text">167/75</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">R2-D2</h5>
                                                <span className="description-text">96/32</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Darth Vader</h5>
                                                <span className="description-text">202/136</span>
                                            </div>
                                        </div>    
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Leia Organa</h5>
                                                <span className="description-text">140/39</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Owen Lars</h5>
                                                <span className="description-text">178/130</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Beru Whitesun</h5>
                                                <span className="description-text">165/75</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <h5 className="description-header">Obi-Wan Kenobi</h5>
                                                <span className="description-text">182/77</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}