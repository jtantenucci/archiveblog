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
            <div className="container things">
                <div className="row things">                             
                    <div className="viewerbox col-12 col-lg-9">
                        <TransformWrapper
                            defaultScale={1}
                            defaultPositionX={200}
                            defaultPositionY={100}
                        >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <React.Fragment>
                                    <ButtonGroup className="toolbar">
                                        <Button outline color="secondary" onClick={zoomIn}>zoom in</Button>
                                        <Button outline color="secondary" onClick={zoomOut}>zoom out</Button>
                                        <Button outline color="secondary" onClick={resetTransform}>reset</Button> 
                                    </ButtonGroup>
                                    <TransformComponent>
                                        <img src="gun.jpg" className="gunpic" alt="test" />
                                    </TransformComponent>
                                </React.Fragment>
                            )}
                        </TransformWrapper>
                    </div>
                    <div className="viewerbox col col-lg-3">
                        <ListGroup flush>
                            <ListGroupItemHeading className="title">related content</ListGroupItemHeading>  
                                <ListGroupItem className="addpin1">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin">source</ListGroupItem>
                                <ListGroupItem className="addpin" onClick={this.setActive} active={this.state.isActive} tag="a" href="#" action>add pin</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example