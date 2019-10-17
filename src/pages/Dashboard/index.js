import React, { useState, useMemo } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { format, subDays, addDays } from 'date-fns/esm';
import { pt } from 'date-fns/esm/locale';

import * as S from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <S.Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <S.Time past>
          <strong>08:00</strong>
          <span>Naelio Freires</span>
        </S.Time>
        <S.Time>
          <strong>09:00</strong>
          <span>Narciso Freires</span>
        </S.Time>
        <S.Time available>
          <strong>10:00</strong>
          <span>Em aberto</span>
        </S.Time>
      </ul>
    </S.Container>
  );
}
