import React, { Component } from 'react';
import Button from '../components/Button';

class Home extends Component {
  render() {
    return (
      <section>
        <Button
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="submit"
        />
      </section>
    );
  }
}

export default Home;
