import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
    render() {
        return (
          <div className='view-frame'>
            <header className='view-frame'>
              <h1 className='header-text'>
                Hello {this.props.name}
              </h1>
            </header>
            <section id='about' className='light container-fluid'>
              <div className='row'>
                <h2 className='col-sm-2'>About</h2>
                <p className='col-sm-10'>Things about me <a href='#'>A link somewhere</a></p>
              </div>
            </section>
            <section id='work' className='dark container-fluid'>
              <div className='row'>
                <h2 className='col-sm-2'>Work</h2>
                <p className='col-sm-10'>Things about me</p>
              </div>
            </section>
            <section id='hobbies' className='light container-fluid'>
              <div className='row'>
                <h2 className='col-sm-2'>Hobbies</h2>
                <p className='col-sm-10'>Things about me</p>
              </div>
            </section>
            <footer className='dark container-fluid'>
              <div className='row'>
                <h2 className='col-sm-2'>Footer</h2>
                <p className='col-sm-10'>Things about me</p>
              </div>
            </footer>
          </div>
        );
    }
}

ReactDOM.render(
  <Application name="Nick"/>,
  document.getElementById('root')
);
