/// <reference path="crud.d.ts" />

import { RowElement, RowID } from './interface';
import * as crud from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
const newRowID: RowID = crud.insertRow(row);
const updateRow: RowElement = {
  ...row,
  age: 23,
};
crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);
