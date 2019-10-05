import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import logo from '~/assets/logo-small.svg';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <S.Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/55/abott@adorable.png"
              alt="avatar"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}
