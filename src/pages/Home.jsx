import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <section>
        <Button
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="button"
          onClick={ () => history.push('/personal-form') }
        />
      </section>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
