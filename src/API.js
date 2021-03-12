import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlocoGeral from './Components/BlocoGeral';
import BlocoItem from './Components/BlocoItem';

const API = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const response = await axios.get('https://api.publicapis.org/entries');
      setApi(response.data);
    }
    pegarDados();
  }, []);

  if (api === null) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <h1 className="bg-dark text-white text-center">Lista de APIs</h1>        
      {api.entries.map((api) => (
        <BlocoGeral key={api.Link}>
          <BlocoItem>
            <b>API:</b> {api.API}
          </BlocoItem>

          <BlocoItem>
            <b>Description:</b> {api.Description}
          </BlocoItem>

          <BlocoItem>
            <b> Link: </b> {api.Link}
          </BlocoItem>

          <BlocoItem>
            <b> Category: </b> {api.Category}
          </BlocoItem>
        </BlocoGeral>
      ))}
    </div>
  );
};

export default API;
