import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 60049,
  label: 'Республика deploy Berkshire',
};

export const sampleWithPartialData: ILabel = {
  id: 75330,
  label: 'FTP',
};

export const sampleWithFullData: ILabel = {
  id: 80655,
  label: 'PCI Республика зеленовато-голубой',
};

export const sampleWithNewData: NewLabel = {
  label: 'AGP functionalities фиолетовый',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
