import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDisplay extends Component {
  render() {
    const { personal: { name, email, cpf, address, city, uf } } = this.props;
    const { professional: { resume, role, description } } = this.props;
    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          { `Nome: ${name}` }
        </div>
        <div>
          { `Email: ${email}` }
        </div>
        <div>
          { `CPF: ${cpf}` }
        </div>
        <div>
          { `Endereço: ${address}` }
        </div>
        <div>
          { `Cidade: ${city}` }
        </div>
        <div>
          { `Estado: ${uf}` }
        </div>
        <div>
          { `Currículo: ${resume}` }
        </div>
        <div>
          { `Cargo: ${role}` }
        </div>
        <div>
          { `Descrição do cargo: ${description}` }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  personal: state.personalData,
  professional: state.professionalData,
});

FormDisplay.propTypes = {
  personal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
  }).isRequired,
  professional: PropTypes.shape({
    description: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(FormDisplay);
