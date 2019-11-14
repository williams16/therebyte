import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const SkillsItems = ({ topicos }) => {
  const listTopicos = topicos.map((topico, i) => {
    return (
      <section key={i} className="mt-3">
          <div
            className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{topico.nombre}</h5>
            <small>{topico.nivel}</small>
          </div>
          <ProgressBar key={i} variant="success" now={topico.progressBar} />
      </section>
    )
  });

  return (listTopicos);
}

export default SkillsItems;