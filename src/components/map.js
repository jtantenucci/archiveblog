import React, { Component } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class Example extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            isActive: false,
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive () {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        return (
            <TransformWrapper
                defaultScale={1}
                defaultPositionX={200}
                defaultPositionY={100}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                    <div className="container things">
                        <div className="row stuff">
                            <ButtonGroup className="toolbar">
                                <Button outline color="secondary" onClick={zoomIn}>zoom in</Button>
                                <Button outline color="secondary" onClick={zoomOut}>zoom out</Button>
                                <Button outline color="secondary" onClick={resetTransform}>reset</Button>
                            </ButtonGroup>
                            <ListGroupItemHeading className="title">related content</ListGroupItemHeading>
                        </div>
                        <div className="row things">
                            <div className="viewerbox col-12 col-lg-9">
                                <TransformComponent>
                                    <img src="gun.jpg" className="gunpic" alt="test" />
                                </TransformComponent>
                            </div>
                            <div className="viewerbox col-12 col-lg-3 pt-sm-3 pt-lg-0">
                            <ListGroup flush>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin pt-xl-2">source</ListGroupItem>
                                <ListGroupItem className="addpin mb-sm-2 mt-sm-2 pt-sm-2 mb-xl-3 mt-xl-4 pt-xl-4 pb-xl-4" onClick={this.setActive} active={this.state.isActive} tag="a" href="#" action>add pin</ListGroupItem>
                            </ListGroup>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                )}
            </TransformWrapper>
        );
    }
}

export default Example