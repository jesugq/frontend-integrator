import React, { Component } from 'react';

class ShowcaseComponent extends Component {
  createStyles() {
    return {
      card: {
        maxWidth: 345
      }
    };
  }
  
  constructor(props) {
    super(props);
    this.state = {
      topics: {
      },
    };
    
    this.setStateTopics = this.setStateTopics.bind(this);
  }
  
  setStateTopics(topics){
    this.setState({topics});
  }
  
  componentDidMount() {
    fetchTopics(this.setStateTopics);
  }
  
  render() {
    const topicIds = this.props.topicIds;
    
    return (
      <div>
      { topicIds }
      </div>
      );
    }
  }
  
  export default ShowcaseComponent;