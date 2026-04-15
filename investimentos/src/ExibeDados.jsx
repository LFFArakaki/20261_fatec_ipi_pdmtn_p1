import React from 'react'

const ExibeDados = (props) => {
    return (
        <div className="container bg-light rounded mt-5">
            <div className="row mt-3">
                <div className="col-12">
                    <p>Valor final acumulado</p>
                    <h1 className="text-success">R$ {props.valorFinal}</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 col-sm-12">
                    <p>Total investido</p>
                    <h3>R$ {props.totalInvestido}</h3>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p>Juros acumulados</p>
                    <h3>R$ {props.totalJuros}</h3>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p>N de aportes</p>
                    <h3>{props.numeroAportes}</h3>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p>Rentabilidade</p>
                    <h3 className="text-success">+{props.rentabilidade}%</h3>
                </div>
            </div>
        </div>
    )
}

export default ExibeDados