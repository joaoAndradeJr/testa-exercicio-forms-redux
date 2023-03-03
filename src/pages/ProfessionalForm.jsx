import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { saveProfessionalDataInGlobalState } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      resume: '',
      role: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  professionalData = () => {
    const { history, dispatch } = this.props;
    dispatch(saveProfessionalDataInGlobalState(this.state));
    history.push('/form-display');
  };

  render() {
    const { resume, role, description } = this.state;
    return (
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          console.log('Ao clicar, envie a informação do formulário');
        } }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ resume }
          name="resume"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="role"
          type="text"
          value={ role }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
          onClick={ this.professionalData }
        />
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ProfessionalForm);
