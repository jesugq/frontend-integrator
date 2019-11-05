/* eslint-disable */
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

  renderTopics(texts, styles) {
    var index = 0;
    var topics = [];
    
    for (const topic of this.props.topics) {
      index ++;

      topics.push(
        <div style={styles.container} key={topic._id}>
          <Card style={styles.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="section" style={styles.avatar}>
                  <div style={styles.index}>
                    {index}
                  </div>
                </Avatar>
              }
              title={topic.Field}
              subheader={texts.app}
            />
            <CardContent>
              <h4>{topic.Name}</h4>
            </CardContent>
          </Card>
        </div>
        );
      }
    
    return topics;
  }
    
  render() {
    const texts = this.createTexts();
    const styles = this.createStyles();
    const topics = this.renderTopics(texts, styles);
    
    return (
      <div>
        {topics}
      </div>
    );
  }
}
    
export default ShowcaseComponent;