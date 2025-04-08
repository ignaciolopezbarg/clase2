import React from "react";
import Boton from "./Boton.jsx";

const articulos = [
  "verduleria",
  "carniceria",
  "panaderia",
  "ferreteria",
  "indumentaria",
];

export const ofertas = [
  {
    id: 1,
    entidad: "ML",
    descuento: 25,
    tope: 8000,
    dia: "lunes",
    articulo: "Verduleria",
  },
  {
    id: 2,
    entidad: "Cuenta Dni",
    descuento: 35,
    tope: 6000,
    dia: "lunes",
    articulo: "Panaderia",
  },
  {
    id: 3,
    entidad: "BNA",
    descuento: 15,
    tope: 15000,
    dia: "sabado",
    articulo: "Carniceria",
  },
  {
    id: 4,
    entidad: "Modo",
    descuento: 20,
    tope: 5000,
    dia: "jueves",
    articulo: "Ferreteria",
  },
  {
    id: 5,
    entidad: "Galicia",
    descuento: 30,
    tope: 10000,
    dia: "martes",
    articulo: "Indumentaria ",
  },
];

function Tarjeta() {
  return (
    <div className="bg-slate-200 container max-w-fit py-4 mx-auto">
      <p className=" p-2 h-20 bg-slate-300 text-2xl text-blue-500 flex justify-center ">
        Saludos desde la Tarjeta de Descuentos
      </p>
      <p className="flex justify-center text-2xl text-orange-300">Items</p>
      <ul className=" w-50 flex flex-col items-center justify-center">
        {articulos.map((articulo, index) => (
          <li key={index}>{articulo}</li>
        ))}
      </ul>

      <h3 className="flex justify-center text-2xl text-orange-300">
        Ofertas disponibles:
      </h3>

      <ul className=" w-50 flex flex-col items-center justify-center">
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            {oferta.entidad}: {oferta.descuento}%- Hasta: ${oferta.tope} - Día:{" "}
            {""}
            {oferta.dia}- {oferta.articulo}
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center p-2">
        <Boton />
      </div>
    </div>
  );
}

export default Tarjeta;
