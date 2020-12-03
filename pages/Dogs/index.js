import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxLista from '../../components/FlexBoxLista';
import FlexBoxItem from '../../components/FlexBoxItem';
const Dogs = () => {

    const [dogs, setDogs] = useState(null);

    useEffect(() => {

        axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then((resposta) => {
            setDogs(resposta.data);
        });

    },[]);

    if(dogs === null){

        return <p>Carregando ...</p>

    }
    return (
        <>

        <div className='nome-dog'>
         Tipo: {dogs.message}
        </div>

        <FlexBoxLista titulo='Subtipos'>
            {dogs.message.map(item =>(
                <FlexBoxItem>{item.message.australian}</FlexBoxItem>
                ))}
        </FlexBoxLista>
        </>

    );

};



export default Dogs;