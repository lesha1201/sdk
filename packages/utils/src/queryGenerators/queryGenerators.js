// @flow
import * as R from 'ramda';
import { SchemaNameGenerator } from '@8base/schema-name-generator';
import { tablesListSelectors } from '../selectors';

import * as tableSelectors from '../selectors/tableSelectors';
import type { TableSchema, QueryGeneratorConfig, QueryGeneratorData } from '../types';
import { createQueryObject } from './createQueryObject';
import { transformQueryObjectToString } from './transformQueryObjectToString';

type QueryStringConfig = {
  prevSpaceCount?: number,
  spaceCount?: number,
  initSpaceCount?: number,
} & QueryGeneratorConfig

type QueryTableFilterConfig = {
  tableContentName?: string,
  appContentName?: string,
} & QueryGeneratorConfig

const upperFirst = (str: string) => R.toUpper(R.head(str)) + R.tail(str);

const createQueryString =
  (tablesList: TableSchema[], tableId: string, queryStringConfig?: QueryStringConfig = {}) => {
    const { prevSpaceCount, spaceCount, ...rest } = queryStringConfig;

    const gueryObject = createQueryObject(tablesList, tableId, {
      ...rest,
    });

    return transformQueryObjectToString(gueryObject, { prevSpaceCount, initSpaceCount: spaceCount, spaceCount });
  };

const wrapInAppName = (appName: 'system' | 'default' | string, appContentName?: string) => (queryString: string) => {

  if (appName === 'system' || appName === 'default') {
    return queryString;
  }

  return `
    ${appContentName ? `${appContentName}: ` : ''}${appName} {
      ${queryString}
    }
  `;
};


export const createTableFilterGraphqlTag = (tablesList: TableSchema[], tableId: string, config: QueryTableFilterConfig = {}) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);

  return `
  query ${upperFirst(table.name)}TableContent(
    $filter: ${SchemaNameGenerator.getFilterInputTypeName(table.name, table.appName)}
    $orderBy: [${SchemaNameGenerator.getOrderByInputTypeName(table.name, table.appName)}]
    $after: String
    $before: String
    $first: Int
    $last: Int
    $skip: Int
  ) {
    ${wrapInAppName(table.appName, config.appContentName)(`
      ${config.tableContentName ? `${config.tableContentName}: ` : ''}${SchemaNameGenerator.getTableListFieldName(table.name, table.appName)}(
        filter: $filter
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
        skip: $skip
      ) {
        items {
          id${createQueryString(tablesList, table.id, { ...config, prevSpaceCount: 6 })}
          _description
        }
        count
      }
    `)}
  }`;
};

export const createTableRowCreateTag = (tablesList: TableSchema[], tableId: string, config: QueryGeneratorConfig = {}) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);
  const hasNonMetaFields = tableSelectors.hasNonMetaFields(table);

  if (hasNonMetaFields) {
    return `

    mutation ${upperFirst(table.name)}Create($data: ${SchemaNameGenerator.getCreateInputName(table.name, table.appName)}!) {
      ${wrapInAppName(table.appName)(`
        ${SchemaNameGenerator.getCreateItemFieldName(table.name, table.appName)}(data: $data) {
          id${createQueryString(tablesList, tableId, { withMeta: false, ...config })}
        }
      `)}
    }`;
  }

  return `
  mutation ${upperFirst(table.name)}Create {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getCreateItemFieldName(table.name.table.appName)} {
        id${createQueryString(tablesList, tableId, { withMeta: false, ...config })}
      }
    `)}
  }`;
};

export const createTableRowCreateManyTag = (tablesList: TableSchema[], tableId: string) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);
  const hasNonMetaFields = tableSelectors.hasNonMetaFields(table);

  if (hasNonMetaFields) {
    return `
  mutation ${upperFirst(table.name)}CreateMany($data: [${SchemaNameGenerator.getCreateManyInputName(table.name, table.appName)}]!) {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getCreateManyItemFieldName(table.name, table.appName)}(data: $data) {
        count
      }
    `)}
  }`;
  }

  return `
  mutation ${upperFirst(table.name)}CreateMany {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getCreateManyItemFieldName(table.name, table.appName)} {
        count
      }
    `)}
  }`;
};

export const createTableRowUpdateTag = (tablesList: TableSchema[], tableId: string, config: QueryGeneratorConfig = {}) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);

  return `
  mutation ${upperFirst(table.name)}Update(
    $data: ${SchemaNameGenerator.getUpdateInputName(table.name, table.appName)}!, 
    $filter: ${SchemaNameGenerator.getKeyFilterInputTypeName(table.name, table.appName)}
  ) {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getUpdateItemFieldName(table.name, table.appName)}(data: $data, filter: $filter) {
        id${createQueryString(tablesList, tableId, { withMeta: false, ...config })}
      }
    `)}
  }`;
};

export const createTableRowQueryTag = (tablesList: TableSchema[], tableId: string, config: QueryGeneratorConfig = {}) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);

  return `
  query ${upperFirst(table.name)}Entity($id: ID!) {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getTableItemFieldName(table.name, table.appName)}(id: $id) {
        ${createQueryString(tablesList, tableId, { ...config })}
      }
    `)}
  }`;
};

export const createTableRowDeleteTag = (tablesList: TableSchema[], tableId: string) => {
  const table = tablesListSelectors.getTableById(tablesList, tableId);

  return `
  mutation ${upperFirst(table.name)}Delete($filter: ${SchemaNameGenerator.getKeyFilterInputTypeName(table.name, table.appName)}!, $force: Boolean) {
    ${wrapInAppName(table.appName)(`
      ${SchemaNameGenerator.getDeleteItemFieldName(table.name, table.appName)}(filter: $filter, force: $force) {
        success
      }
    `)}
  }`;
};
