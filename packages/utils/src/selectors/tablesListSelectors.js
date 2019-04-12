// @flow
import type { Schema, TableSchema } from '../types';
import * as R from 'ramda';
import { createSelector } from 'reselect';
import { FIELD_TYPE } from '../constants';
import type { FieldSchema } from '../types';

export const getTableList = (tables?: TableSchema[]) => tables || [];


export const getTableById = createSelector(
  getTableList,
  (_, tableId) => tableId,
  (tables, tableId) => tables && tables.find(({ id }) => id === tableId),
);

export const getTableByName = createSelector(
  getTableList,
  (_, tableName) => tableName,
  (_, applicationName) => applicationName,
  (tables, tableName, applicationName) => tables && tables
    .filter(({ application }) => application ? application.name === applicationName : !application && !applicationName)
    .find(({ name }) => name === tableName),
);

export const getTableApplication = createSelector(
  getTableById,
  R.prop('application'),
);

export const getTableApplicationName = createSelector(
  getTableApplication,
  R.propOr('', 'name'),
);
