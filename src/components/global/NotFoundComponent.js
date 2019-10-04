import React, { Component } from 'react';

class NotFoundComponent extends Component {
  createTexts() {
    return({
      spanish: {
        notFound: 'Página no encontrada!'
      },
    });
  }

  createStyles() {
    return({
      single: {
        margin: '200px auto',
        width: '50%',
        color: 'rbga(255, 255, 255, 0.75',
        textAlign: 'center',
        fontSize: '64px',
      },
    });
  }
  
  
  render() {
    const text = this.createTexts().spanish;
    const styles = this.createStyles();
  
    return(
      <div style={styles.single}>
        {text.notFound}
      </div>
    );
  }
}

export default NotFoundComponent;