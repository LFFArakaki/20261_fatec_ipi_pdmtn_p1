import React from 'react'

const ExibeHistorico = (props) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <h3>Histórico de simulações</h3>
                    <h3 className='text-muted'>{props.contador} simulações</h3>
                </div>
            </div>
            <div className="row border rounded mt-2">
                <div className="col-12 bg-secondary border-bottom justify-content-between">
                    <div className="d-flex justify-content-center mt-3 mb-2">
                        <h3>Últimas 5 simulações</h3>
                    </div>
                    <div className='border-bottom d-flex justify-content-between'>
                        <h5 className='text-muted'>Data</h5>
                        <h5 className='text-muted'>Valor Final</h5>
                    </div>
                </div>
                <div className="col-12 border-bottom d-flex justify-content-between h-20">
                    <p>{props.historico[0].data}</p>
                    <p>{props.historico[0].valor}</p>
                </div>
                <div className="col-12 border-bottom d-flex justify-content-between h-10">
                    <p>{props.historico[1].data}</p>
                    <p>{props.historico[1].valor}</p>
                </div>
                <div className="col-12 border-bottom d-flex justify-content-between h-10">
                    <p>{props.historico[2].data}</p>
                    <p>{props.historico[2].valor}</p>
                </div>
                <div className="col-12 border-bottom d-flex justify-content-between h-10">
                    <p>{props.historico[3].data}</p>
                    <p>{props.historico[3].valor}</p>
                </div>
                <div className="col-12 border-bottom d-flex justify-content-between h-10">
                    <p>{props.historico[4].data}</p>
                    <p>{props.historico[4].valor}</p>
                </div>
            </div>
        </div>
    )
}

export default ExibeHistorico