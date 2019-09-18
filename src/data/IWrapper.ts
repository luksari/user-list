import { ReactElement } from 'react';

export interface IWrapper {
  readonly children: ReactElement | string | HTMLElement | ReactElement[];
}
