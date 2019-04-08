// @flow
import type { Schema, TableSchema } from '../types';
import { APP_NAMES } from '../constants';


export const getTableById = (
  schema: ?Schema,
  tableId?: string,
): TableSchema => schema && schema.find(({ id }) => id === tableId);

export const getTableByName = (
  schema: ?Schema,
  tableName: string,
  applicationName?: string = APP_NAMES.DEFAULT,
) => schema && schema
  .filter(({ application }) => application ? application.name === applicationName : !application && !applicationName)
  .find(({ name }) => name === tableName);
