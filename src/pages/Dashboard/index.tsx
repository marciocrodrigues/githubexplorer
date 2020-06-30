import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars2.githubusercontent.com/u/40520700?s=460&v=4"
            alt=""
          />
          <div>
            <strong>marciocrodrigues</strong>
            <p>Test Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars2.githubusercontent.com/u/40520700?s=460&v=4"
            alt=""
          />
          <div>
            <strong>marciocrodrigues</strong>
            <p>Test Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars2.githubusercontent.com/u/40520700?s=460&v=4"
            alt=""
          />
          <div>
            <strong>marciocrodrigues</strong>
            <p>Test Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
