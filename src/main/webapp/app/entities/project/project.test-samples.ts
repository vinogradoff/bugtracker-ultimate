import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 55962,
  name: 'ADP dedicated специалист',
};

export const sampleWithPartialData: IProject = {
  id: 65513,
  name: '(не',
};

export const sampleWithFullData: IProject = {
  id: 77433,
  name: 'перезагрузить ХЗ',
};

export const sampleWithNewData: NewProject = {
  name: 'dot-com',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
