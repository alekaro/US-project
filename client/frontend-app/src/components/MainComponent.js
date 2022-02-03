import { useCallback, useState, useEffect } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
  const [result, setResult] = useState("0");
  const [make, setMake] = useState("BMW");
  const [model, setModel] = useState("1 Series M");
  const [year, setYear] = useState("2011");
  const [engineFuelType, setEngineFuelType] = useState("premium unleaded (required)");
  const [engineHP, setEngineHP] = useState("300");
  const [engineCylinders, setEngineCylinders] = useState("6");
  const [transmissionType, setTransmissionType] = useState("MANUAL");
  const [drivenWheels, setDrivenWheels] = useState("rear wheel drive");
  const [numberOfDoors, setNumberOfDoors] = useState("2");
  // const [vehicleSize, setVehicleSize] = useState("Compact");
  const [vehicleStyle, setVehicleStyle] = useState("Convertible");
  const [highwayMPG, setHighwayMPG] = useState("28");
  const [cityMPG, setCityMPG] = useState("19");

  // const getAllNumbers = useCallback(async () => {
  //   // we will use nginx to redirect it to the proper URL
  //   const data = await axios.get("/api/values/all");
  //   setValues(data.data.rows.map(row => row.number));
  // }, []);

  const evaluate = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api/evaluate", {
        'Make': make,
        'Model': model,
        'Year': year,
        'Engine Fuel Type': engineFuelType,
        'Engine HP': engineHP,
        'Engine Cylinders': engineCylinders,
        'Transmission Type': transmissionType,
        'Driven_Wheels': drivenWheels,
        'Number of Doors': numberOfDoors,
        // 'Vehicle_Size': vehicleSize,
        'Vehicle_Style': vehicleStyle,
        'highway MPG': highwayMPG,
        'city mpg': cityMPG
      }).then((response) => {
        console.log(response);
        setResult(response.data.predicted_value);
      }).catch((error) => {
        console.log(error);
      });

      // setMake("");
      // setModel("");
      // setYear("");
      // setEngineFuelType("");
      // setEngineHP("");
      // setEngineCylinders("");
      // setTransmissionType("");
      // setDrivenWheels("");
      // setNumberOfDoors("");
      // // setVehicleSize("");
      // setVehicleStyle("");
      // setHighwayMPG("");
      // setCityMPG("");
      // getAllNumbers();
    },
    [make, model, year, engineFuelType, engineHP, engineCylinders, transmissionType, drivenWheels, numberOfDoors, vehicleStyle, highwayMPG, cityMPG]
  );

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // useEffect(() => {
  //   getAllNumbers();
  // }, []);

  return (
    <>
    <Form onSubmit={evaluate}>
      <Form.Label>Podaj wszystkie dane wejściowe dla modelu</Form.Label>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={make} 
          onChange={(e) => setMake(e.target.value)}
        >
          <option>Marka</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="FIAT">FIAT</option>
          <option value="Nissan">Nissan</option>
          <option value="Chrysler">Chrysler</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={model} 
          onChange={(e) => setModel(e.target.value)}
        >
          <option>Model</option>
          <option value="1 Series">1 Series</option>
          <option value="100">100</option>
          <option value="124 Spider">124 Spider</option>
          <option value="200">200</option>
          <option value="200SX">200SX</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-2">
        <FloatingLabel 
          controlId="floatingMake" 
          label="Rok">
          <Form.Control 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={engineFuelType} 
          onChange={(e) => setEngineFuelType(e.target.value)}
        >
          <option>Typ paliwa</option>
          <option value="premium unleaded (required)">premium unleaded (required)</option>
          <option value="regular unleaded">regular unleaded</option>
          <option value="diesel">diesel</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-2">
        <FloatingLabel 
          controlId="floatingMake" 
          label="Konie mechaniczne">
          <Form.Control 
            value={engineHP} 
            onChange={(e) => setEngineHP(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-2">
        <FloatingLabel 
          controlId="floatingMake" 
          label="Liczba cylindrów">
          <Form.Control 
            value={engineCylinders} 
            onChange={(e) => setEngineCylinders(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={transmissionType} 
          onChange={(e) => setTransmissionType(e.target.value)}
        >
          <option>Typ skrzyni biegów</option>
          <option value="MANUAL">MANUAL</option>
          <option value="AUTOMATIC">AUTOMATIC</option>
          <option value="AUTOMATED_MANUAL">AUTOMATED_MANUAL</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={drivenWheels} 
          onChange={(e) => setDrivenWheels(e.target.value)}
        >
          <option>Napęd</option>
          <option value="rear wheel drive">rear wheel drive</option>
          <option value="front wheel drive">front wheel drive</option>
          <option value="four wheel drive">four wheel drive</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={numberOfDoors} 
          onChange={(e) => setNumberOfDoors(e.target.value)}
        >
          <option>Liczba drzwi</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Select>
      </Form.Group>
      {/* <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={vehicleSize} 
          onChange={(e) => setVehicleSize(e.target.value)}
        >
          <option>Rozmiar</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group> */}
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example"
          value={vehicleStyle} 
          onChange={(e) => setVehicleStyle(e.target.value)}
        >
          <option>Styl</option>
          <option value="Coupe">Coupe</option>
          <option value="Convertible">Convertible</option>
          <option value="Sedan">Sedan</option>
          <option value="Wagon">Wagon</option>
          <option value="4dr Hatchback">4dr Hatchback</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-2">
        <FloatingLabel 
          controlId="floatingMake" 
          label="Spalanie w trasie">
          <Form.Control 
            value={highwayMPG} 
            onChange={(e) => setHighwayMPG(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-2">
        <FloatingLabel 
          controlId="floatingMake" 
          label="Spalanie w mieście">
          <Form.Control 
            value={cityMPG} 
            onChange={(e) => setCityMPG(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    <div className="Home">
      <div className="lander">
        <h1>{formatter.format(result)}</h1>
      </div>
    </div>
    </>
  );
};

export default MainComponent;
