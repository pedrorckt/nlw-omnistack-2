import React from 'react';

import './teacher-card.css';

import whatsappIcon from  '../../assets/images/icons/whatsapp.svg';

interface TeacherCardProps {
  name: string;
}

const TeacherCard: React.FC<TeacherCardProps> = (props) => {
  return (
    <article className="teacher-card">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/9113164?s=120&v=4" alt=""/>
        <div>
          <strong>{props.name}</strong>
          <span>Física</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi recusandae nulla neque consectetur, aliquam facilis aut delectus praesentium minima ratione quae amet, esse numquam inventore cumque molestiae est.</p>
      <p> Voluptate quasi facere quia enim dolorum doloremque quod! At culpa error incidunt quas praesentium sunt, quae nobis soluta. Ipsa repudiandae, porro assumenda.</p>

      <footer>
        <p>Preço/hora <strong className="price">R$ 90,00</strong></p>
        <button className="btn-contact" type="button"><img src={ whatsappIcon } alt="Whatsapp"/> Entrar em contato</button>
      </footer>

    </article>
  )
}

export default TeacherCard;
