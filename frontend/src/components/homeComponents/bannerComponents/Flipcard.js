import ReactCardFlip from 'react-card-flip';
import React from 'react';
import { OverlayTrigger, Tooltip} from 'react-bootstrap/'

class FlipCard extends React.Component {
  constructor(props) {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
    	
    		<OverlayTrigger	
					placement='top'
					overlay={
				<Tooltip id={`tooltip-top`}>
					CLICK ME!
				</Tooltip>
				}>
				<div>
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
	        <div>
				
					<div onClick={this.handleClick}>
						{this.props.front}								
					</div>
				
	        </div>
	 
	        <div>
	          		
					<div onClick={this.handleClick}>
						{this.props.back}
					</div>
				
	        </div>
	      </ReactCardFlip>
	      </div>
		</OverlayTrigger>
	    
    )
  }
}
export default FlipCard;