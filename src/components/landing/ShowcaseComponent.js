import React, { Component } from 'react';

import { Card, CardHeader, CardContent, Avatar, CardMedia } from '@material-ui/core';

class ShowcaseComponent extends Component {

  createTexts() {
    return {
      app: 'EduApp',
      section: 'Seccion',
      icon: 'Ícono',
    }
  }

  createStyles() {
    return {
      container: {
        width: '250px',
        margin: '0 auto',
      },
      card: {
        maxWidth: 345,
        backgroundColor: '#EEE',
      },
      media: {
        height: 0,
        paddingTop: '56.25%',
      },
      image: {
        width: '25px',
        height: '25px',
      },
      avatar: {
        backgroundColor: '#ABC',
      },
      index: {
        color: '#222',
      }
    };
  }

  renderSections(texts, styles) {
    var index = 0;
    var sections = [];
    var elements = [];
    
    // eslint-disable-next-line
    for (const section of this.props.sections) {
      index ++;

      // eslint-disable-next-line
      elements = [];
      for (const element of section.Elements) {
        elements.push(
          <div key={element._id}>
            <img src={element.IconImgURL} alt={texts.icon} style={styles.image}/>
            {element.ElementTitle}
          </div>
        );
      }

      sections.push(
        <div style={styles.container} key={section._id}>
          <Card style={styles.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Section" style={styles.avatar}>
                  <div style={styles.index}>
                    {index}
                  </div>
                </Avatar>
              }
              title={section.Title}
              subheader={texts.app}
            />
            <CardMedia
              style={styles.media}
              image={section.BackgroundImgURL}
              title={texts.section}
            />
            <CardContent>
              {elements}
            </CardContent>
          </Card>
        </div>
        );
      }
    
    return sections;
  }
    
  render() {
    const texts = this.createTexts();
    const styles = this.createStyles();
    const sections = this.renderSections(texts, styles);
    
    return (
      <div>
        {sections}
      </div>
    );
  }
}
    
export default ShowcaseComponent;