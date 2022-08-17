import dayjs from 'dayjs/esm';

import { Severity } from 'app/entities/enumerations/severity.model';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 65582,
  title: 'Невероятный Centralized Сабо',
  description: 'Кожанный deposit',
};

export const sampleWithPartialData: ITicket = {
  id: 87939,
  title: 'Lek',
  description: 'Меха',
  done: true,
  severity: Severity['MEDIUM'],
};

export const sampleWithFullData: ITicket = {
  id: 84212,
  title: 'интеграционный Optional',
  description: 'Натуральный',
  dueDate: dayjs('2022-08-16'),
  done: false,
  severity: Severity['MAJOR'],
};

export const sampleWithNewData: NewTicket = {
  title: 'кортеж Кабо-Верде Avon',
  description: 'оливковый',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
