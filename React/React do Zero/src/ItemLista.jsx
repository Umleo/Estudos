//rafce
import React from "react";

const ItemLista = ({ ItemMercado, indice, listaMercado, setListaMercado }) => {
  const removerItemDaLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter((__, index) => index !== indice);
    setListaMercado(novaListaFiltrada);
  };

  return (
    <div>
      <li className="">
        <p>{ItemMercado}</p>
        <button className="rounded-md bg-red-800 text-white px-2 cursor-pointer hover:bg-red-600 transition" onClick={() => removerItemDaLista()}>Remover</button>
      </li>
    </div>
  );
};

export default ItemLista;
