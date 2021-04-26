import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './PathError.css';

function PathError () {

  return(
    <section className='layout' data-cy='layout'>
      <Header />
      <article className='error-layout' data-cy='error-layout'>
        <div className='styling'>
          <>
            <p className='how' data-cy='how'>Opp How did we end up here?</p>
          </>
          <>
            <Link className='head-back' data-cy='head-back' to={'/'}>Head Back</Link>
          </>
        </div>
      </article>
    </section>
  )

}

export default PathError
