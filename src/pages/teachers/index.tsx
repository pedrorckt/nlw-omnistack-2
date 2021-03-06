import React from 'react';
import Header from '../../components/header';
import TeacherCard from '../../components/teacher-card';

import './teachers.css';

function Teachers() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </Header>

      <main>
        <TeacherCard name="Pedro Guglielmo" />
        <TeacherCard name="Henrique Silva" />
        <TeacherCard name="João Almeida" />
      </main>

    </div>
  )
}

export default Teachers;
