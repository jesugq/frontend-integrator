import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './Landing.css'

class QualitiesComponent extends Component {
  createItems() {
    return {
      header: 'Agenda una asesoría de manera rápida y sencilla.',
      first: {
        src: 'https://image.flaticon.com/icons/svg/149/149852.svg',
        alt: 'Explora',
        title: 'Explora',
        txt: '¡Descubre los profesores que tenemos para tí! Sólo contratamos a lo mejor de lo mejor.',
      },
      second: {
        src: 'https://image.flaticon.com/icons/svg/747/747310.svg',
        alt: 'Agenda',
        title: 'Agenda',
        txt: '¡Planea tu semana de aprendizaje con nuestro sistema innovador!',
      },
      third: {
        src: 'https://image.flaticon.com/icons/svg/10/10522.svg',
        alt: 'Aprende',
        title: 'Aprende',
        txt: '¡Disfruta de los temas que tenemos para tí! Programación, Matemáticas, Servidores, ¡Y muchos más!',
      }
    };
  }

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
  
  renderColumn(place, styles) {
    const src = place.src;
    const alt = place.alt;
    const title = place.title;
    const txt = place.txt;
    
    return (
      <div className="col-sm">
        <img src={src} alt={alt} width={styles.image.width} height={styles.image.height}/>
        <br /><br />
        <h6>{title}</h6>
        <p>{txt}</p>
      </div>
      );
    }
    
  render() {
    const items = this.createItems();
    const styles = this.createStyles();
    
    return (
      <div>
      <Jumbotron>
        <center>
          <h1 className="display-4" style={styles.header}>
            {items.header}
            <br /><br />
          </h1>
          <div className="row flexible-quarters">
            { this.renderColumn(items.first, styles) }
            { this.renderColumn(items.second, styles) }
            { this.renderColumn(items.third, styles) }
          </div>
        </center>
      </Jumbotron>
      </div>
    );
  }
}
    
export default QualitiesComponent;