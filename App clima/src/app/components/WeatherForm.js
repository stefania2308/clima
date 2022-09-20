import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Ingrese el nombre de la ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Ingrese el nombre del pais" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                consultar
            </button>
        </form>
    </div>
);

export default WeatherForm;