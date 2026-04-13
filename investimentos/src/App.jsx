import CapturaDados from './CapturaDados'
import { useState } from 'react'

const App = () => {

  const [valorInicial, setValorInicial] = useState(null)
  const [aporteMensal, setAporteMensal] = useState(null)
  const [taxaJuros, setTaxaJuros] = useState(null)
  const [periodoMeses, setPeriodo] = useState(null)

  const calcularValor = () => {

    const valor = Number(valorInicial)
    const aporte = Number(aporteMensal)
    const juros = Number(taxaJuros)
    const periodo = Number(periodoMeses)

    if(valor && aporte && juros && periodo)
    {
      if(valor < 0 || aporte < 0 || juros < 0 || periodo < 0)
      {
        alert("Todos os valores devem ser positivos!")
      }
      else
      {

      }
    }
    else
    {
      alert("Todos os campos precisam estar preenchidos com valores numéricos! Para números decimais, utilize ponto e não vírgula")
    }
  }


  return ( 
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1>
            Hello, Investimentos
          </h1>
        </div>

        <CapturaDados
          setValorInicial={setValorInicial}
          setAporteMensal={setAporteMensal}
          setTaxaJuros={setTaxaJuros}
          setPeriodo={setPeriodo}
          calcularValor={calcularValor}
        />
        
      </div>
    </div>
  )
}

export default App