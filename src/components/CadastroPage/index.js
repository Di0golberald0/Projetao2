import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button';
import Input from '../Input';
import { Container, StyledLink } from './style';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    image: '',
    password: ''
  });


  function handleSignUp(e) {
    e.preventDefault();

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
      ...formData
    });

    promise.then(response => console.log(response));
    promise.catch(error => console.log(error.response));
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <Input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          placeholder="e-mail"
        />
        <Input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          placeholder="senha"
        />        
        <Input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          placeholder="nome"
        />
        <Input
          type="text"
          value={formData.image}
          onChange={handleInputChange}
          name="image"
          placeholder="foto"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}