import './Header.css';
import React from 'react';

function Header () {
  return (
    <section className='header' data-cy='header-box'>
      <article className='header-link' data-cy='landing-link' to='/'>
          <img id='amie-logo'className='amie-logo' data-cy='amie-log' src="https://i.postimg.cc/4N6fjwM2/Amie1.jpg" alt="black and tan dog"/>
      </article>
      <article className='header-container'>
        <>
          <h1 className='site-name' data-cy='site-name'>Inu-Am-I!</h1>
        </>
        <>
          <p className='tag-line' data-cy='tag-line'>A site dedicated helping Shiba owner know if they really own a cat.</p>
        </>
      </article>
      <article className='button-box'>
        <Link className='get-results' data-cy='get-results' to={'/'}>submit</Link>
      </article>
    </section>
  )
}
export default Header
