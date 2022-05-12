import React from 'react'
import "./Input.css"

function Input({ create }) {
  return (
    <div id='input'>
        <input type="text" name="descricao" id="" placeholder='Descrição' />
        <input type="number" name="valor" id="" placeholder='Valor' />
        <input type="button" value="Cadastrar" />
    </div>
  )
}

export default Input