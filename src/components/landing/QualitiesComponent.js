/* eslint-disable */
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './Landing.css'

class QualitiesComponent extends Component {
  createStyles() {
    return {
      header: {
        width: '75%',
        fontSize: '28px',
      },
      image: {
        width: '75px',
        height: '75px',
      }
    }
  }
  
  renderElements(section) {
    var elements = [];

    for (const element of section.Elements) {
      elements.push(
        <Col key={element._id}>
          <img src={element.IconImgURL} alt={element.IconImgURL} />
          <br/><br/>
          <h6>{element.ElementTitle}</h6>
        </Col>
      );
    }
    return elements;
  }

  renderSections(styles) {
    var sections = [];
    var elements = [];
    var background = null;

    for (const section of this.props.sections) {
      elements = this.renderElements(section);
      background = {
        backgroundImage: "url(" + section.backgroundImage + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }

      sections.push(
        <div key={section._id} style={background}>
          <Jumbotron>
            <Container>
              <center>
                <h1 className="display-4" style={styles.header}>{section.Title}</h1>
                <p>{section.Description}</p>
                <br/><br/>
                <Row className="flexible-quarters">
                    {elements}
                </Row>
              </center>
            </Container>
          </Jumbotron>
        </div>
      );
    }
    return sections;
  }
    
  render() {
    const styles = this.createStyles();
    const sections = this.renderSections(styles);
    
    return (
      <div>
        {sections}
      </div>
    );
  }
}
    
export default QualitiesComponent;