import ExibeHistorico from './ExibeHistorico'
import ExibeDados from './ExibeDados'
import CapturaDados from './CapturaDados'
import { useState } from 'react'

const App = () => {

  const [valorInicial, setValorInicial] = useState(null)
  const [aporteMensal, setAporteMensal] = useState(null)
  const [taxaJuros, setTaxaJuros] = useState(null)
  const [periodoMeses, setPeriodo] = useState(0)
  const [valorFinal, setValorFinal] = useState(0)
  const [totalInvestido, setTotalInvestido] = useState(0)
  const [totalJuros, setTotalJuros] = useState(0)
  const [rentabilidade, setRentabilidade] = useState(0)
  const [contador, setContador] = useState(0)
  const [historico, setHistorico] = useState([
    {data: null, valor: null},
    {data: null, valor: null},
    {data: null, valor: null},
    {data: null, valor: null},
    {data: null, valor: null},
    {data: null, valor: null}
  ])

  const calcularValor = () => {

    const valor = Number(valorInicial)
    const aporte = Number(aporteMensal)
    const taxa = Number(taxaJuros)/100
    const periodo = Number(periodoMeses)

    if(valor && aporte && taxa && periodo)
    {
      if(valor < 0 || aporte < 0 || taxa < 0 || periodo < 0)
      {
        alert("Todos os valores devem ser positivos!")
      }
      else
      {
        const dataAtual = new Date().toLocaleString()
        const final = (valor*((1+taxa)**periodo))+(aporte*((((1+taxa)**periodo)-1)/taxa))
        setValorFinal(final)
        const investido = valor + (aporte*periodo)
        setTotalInvestido(investido)
        const juros = final - investido
        setTotalJuros(juros)
        const lucro = (juros/investido)*100
        setRentabilidade(lucro)
        for(let i = 5; i > 0; i--)
        {
          historico[i] = historico[i-1]
        }
        historico[0] = {data: dataAtual, valor: final}
        setHistorico(historico)
        setContador(contador+1)
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
        <ExibeDados
          valorFinal={valorFinal}
          totalInvestido={totalInvestido}
          totalJuros={totalJuros}
          numeroAportes={periodoMeses}
          rentabilidade={rentabilidade}
        />
        <ExibeHistorico
          contador={contador}
          historico={historico}
        />
      </div>
    </div>
  )
}

export default App