
//IMPORTACIONES QUE SE VA UTILIZAR
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//RUTA DONDE ESTA NUESTRO DIRECTORIO DE NUESTRO PROYECTO
import Ahorcado from './Componentes/Ahorcado/Ahorcado';

//PARA ARRANCAR EL PROYECTO VAMOS A TENER LA CLASE 
export default class App extends Component {
  render() {
    return (
      //COMPONENTE DEL AHORCADO
      <Ahorcado />
    );
  }
}

