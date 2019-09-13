import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Title, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleChange = e => {
    this.setState({
      newRepo: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;

    return (
      <Container>
        <Title>
          <FaGithubAlt />
          Repositórios
        </Title>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleChange}
          />

          <SubmitButton loading={loading}>
            {!loading ? <FaPlus color="#FFF" size="14px" /> : <FaSpinner />}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
