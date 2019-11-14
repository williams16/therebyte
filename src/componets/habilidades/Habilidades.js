import React from 'react'
import {Tab, Tabs, Container } from 'react-bootstrap'
import SkillsItems from './SkillsItems'

const Habilidades = () => {
  const skills = [
    {
      categoria: "Fronted",
      topico: [
        {
          nombre: "HTML",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "CSS",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "Bootstrap",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "javascript",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "jQuery",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "ionic",
          nivel: "Avanzado",
          progressBar:100
        }
      ]
    },
    {
      categoria: "Backend",
      topico: [
        {
          nombre: "PHP",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "Oracle",
          nivel: "Intermedio",
          progressBar:70
        },
        {
          nombre: "Laravel",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "Codeigniter",
          nivel: "Avanzado",
          progressBar:100
        },
        {
          nombre: "PostgresSQL",
          nivel: "Intermedio",
          progressBar:80
        },
        {
          nombre: "MySql",
          nivel: "Avanzado",
          progressBar:100
        }
      ]

    },
    {
      categoria: "Gerencia",
      topico: [
        {
          nombre: "Líder Técnico",
          nivel: "",
          progressBar:100
        },
        {
          nombre: "Planificación Agil",
          nivel: "",
          progressBar:100
        }
      ]

    },
    {
      categoria: "CMS",
      topico: [
        {
          nombre: "wordpress",
          nivel: "Intermedio",
          progressBar:80
        }
      ]

    }

  ];

  const skillsTab= skills.map((skill, i) => {
    return (
      <Tab 
        key={i}
        eventKey={skill.categoria}
        title={skill.categoria}>
      <Container>
      <SkillsItems topicos = { skill.topico}/>
      </Container>
         
      </Tab>
      
    );

  });
 
  return (
    <Tabs 
        defaultActiveKey={skills[0].categoria} 
        transition={false} >
        {skillsTab}
      </Tabs>
  );
}

export default Habilidades;