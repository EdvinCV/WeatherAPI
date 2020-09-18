import React from 'react';
// Material UI
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//CSS
import './App.css';
// Components
import LocationList from './components/LocationList';
import ForectasExtended from './components/ForecastExtended';
// React Flexbox Grid
import { Grid, Row, Col } from 'react-flexbox-grid';


const cities = [
  'Quetzaltenango,GT',
  'Ciudad de Guatemala,GT',
  'Medellín,CO',
  'Guadalajara,MX'
]

function App() {

  const handleSelectionLocation = city => {
    console.log("City: ", city);
  }
  
  return (
    <Grid>
      <Row>
        Titulo
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList 
            cities={cities}
            onSelectedLocation={handleSelectionLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="detail">
            <ForectasExtended
              city={"Quetgo"}
            />
          </div>
        </Col> 
      </Row>
    </Grid>
  );
}

export default App;
