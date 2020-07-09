import React, { Component } from 'react'
import {Row,Col,Button,Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from 'reactstrap';
import Media from 'react-media';
import './feedback.css';
const items = [
    {
      src: 'https://placeimg.com/350/250/arch',
      altText: 'Slide 1',
      caption: 'Slide 1',
      desc:"hello mayank"
    },
    {
      src: 'https://placeimg.com/350/250/animals',
      altText: 'Slide 2',
      caption: 'Slide 2',
      desc:"hello dilip"
    },
    {
      src: 'https://placeimg.com/350/250/any',
      
      altText: 'Slide 3',
      caption: 'Slide 3',
      desc:"hello deepak"
    }
  ];
  
export class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
  
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
          );
        });
        return (
          <Media query="(max-width:800px)">
      {matches =>
        matches ? (
          <div style={{margin:"0px "}}>
          <Row style={{margin:"0px"}}>
              <Col xs="12">
              <div>
                <h1 style={{fontSize:"2.5rem",padding:"15px"}}><b>Help us improve with your suggestions</b></h1>
                <Button color="success" style={{margin:"0px 15px",padding:"10px"}}>Give your feedback</Button>
              </div>
              </Col>
              </Row>
              <Row style={{margin:"0px"}}>
              <Col xs="10" style={{margin:"25px"}}>
              <Carousel
    activeIndex={activeIndex}
    next={this.next}
    previous={this.previous}
  >
    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
    {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
  </Carousel>
              </Col>
              </Row>  
        </div>
        ) : (
          <div style={{margin:"10% 10%"}}>
          <Row>
              <Col md="6">
              <div className="textFeedback">
                <h1 style={{fontSize:"4rem"}}><b>Help us improve with your suggestions</b></h1>
                <Button color="success" style={{margin:"25px 0px",padding:"10px",fontSize:"1.5rem"}}>Give your feedback</Button>
              </div>
              </Col>
              <Col md="6">
              <Carousel
    activeIndex={activeIndex}
    next={this.next}
    previous={this.previous}
  >
    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
    {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
  </Carousel>
              </Col>
              </Row>  
        </div>
        )
      }
      </Media>
           
        )
    }
}

export default Feedback