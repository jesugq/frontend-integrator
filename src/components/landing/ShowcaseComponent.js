/* eslint-disable */
import React, { Component } from 'react';

import { Grid, FormRow, Card, CardHeader, CardContent, Avatar, CardMedia } from '@material-ui/core';

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
        margin: '20px 10%',
      },
      root: {
        flexGrow: 1,
      },
      card: {
        width: '250px',
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
        backgroundColor: '#CDE',
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
        <Grid item key={topic._id}>
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
              <p>{topic.Name}</p>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    
    return topics;
  }
    
  render() {
    const texts = this.createTexts();
    const styles = this.createStyles();
    const topics = this.renderTopics(texts, styles);
    
    return (
      <div style={styles.container}>
        <Grid container style={styles.root} spacing={2} justify='center'>
          {topics}
        </Grid>
      </div>
    );
  }
}
    
export default ShowcaseComponent;