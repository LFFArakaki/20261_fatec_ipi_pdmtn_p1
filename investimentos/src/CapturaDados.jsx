import React from 'react'

const CapturaDados = (props) => {

    return (
        <div className='container'>

            <div className="row justify-content-center">

                <div className="col-md-6 col-sm-12">
                    <h5>Valor inicial (R$)</h5>
                    <input 
                        type="text"
                        placeholder="Ex: 1000.00" 
                        style={{width: "100%", height: 50, marginBottom: 10, borderRadius: 10, paddingBottom: 3, paddingLeft: 7}}
                        onChange={(e) => {props.setValorInicial(e.target.value)}}
                    />    
                </div>

                <div className="col-md-6 col-sm-12">
                    <h5>Aporte mensal (R$)</h5>
                    <input 
                        type="text"
                        placeholder="Ex: 300.00" 
                        style={{width: "100%", height: 50, marginBottom: 10, borderRadius: 10, paddingBottom: 3, paddingLeft: 7}}
                        onChange={(e) => {props.setAporteMensal(e.target.value)}}
                    />
                </div>

                <div className="col-md-6 col-sm-12">
                    <h5>Taxa de juros (% ao mês)</h5>
                    <input 
                        type="text"
                        placeholder="Ex: 0.85" 
                        style={{width: "100%", height: 50, marginBottom: 10, borderRadius: 10, paddingBottom: 3, paddingLeft: 7}}
                        onChange={(e) => {props.setTaxaJuros(e.target.value)}}
                    />
                </div>

                <div className="col-md-6 col-sm-12">
                    <h5>Período (meses)</h5>
                    <input 
                        type="text"
                        placeholder="Ex: 24" 
                        style={{width: "100%", height: 50, marginBottom: 10, borderRadius: 10, paddingBottom: 3, paddingLeft: 7}}
                        onChange={(e) => {props.setPeriodo(e.target.value)}}
                    />
                </div>

            </div>

            <div className="row mt-2">

                <div className="col-lg-9 col-md-6 col-sm-12 mb-2">
                    <button 
                        className="btn btn-primary w-100 h-100 mt-3"
                        onClick={props.calcularValor}
                    >
                        Calcular
                    </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                    <button 
                        className="btn btn-danger w-100 h-100 mt-3">
                        Limpar
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CapturaDados