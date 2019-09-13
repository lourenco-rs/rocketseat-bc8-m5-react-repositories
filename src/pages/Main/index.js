import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Title, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Title>
        <FaGithubAlt />
        Repositórios
      </Title>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton disabled>
          <FaPlus color="#FFF" size="14px" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
