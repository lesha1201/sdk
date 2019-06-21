export { WORKSPACE_WITH_RELATIONS } from './workspace-with-relations';
export { WORKSPACE_WITH_RELATIONS_2 } from './workspace-with-relations-2';
export { WORKSPACE_WITHOUT_RELATIONS } from './workspace-without-relations';
export { WORKSPACE_WITH_FILES } from './workspace-with-files';

export const SYSTEM_TABLE = {
  id: 'usersTableId',
  name: 'Users',
  displayName: 'Users',
  isSystem: true,
  fields: [
    {
      id: '5bd9b58e7bc6e85182df1886',
      name: 'client',
      displayName: 'Client',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: {
        refFieldName: 'user',
        refFieldDisplayName: 'User',
        relationTableName: 'y16z0t27',
        relationFieldName: 'aid',
        refTable: {
          id: 'clientsTableId',
          name: 'clients',
        },
        refFieldIsList: false,
        refFieldIsRequired: false,
      },
    },
  ],
};

export const FILES_TABLE = {
  id: 'filesTableId',
  name: 'Files',
  displayName: 'Files',
  fields: [
    {
      id: '5ceff89443243c401d48f25a',
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      isSystem: true,
      isList: false,
      isMeta: true,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c7cf448f25b',
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      isSystem: true,
      isList: false,
      isMeta: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c0a3048f25e',
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      isSystem: true,
      isList: false,
      isMeta: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243cf78f48f264',
      name: 'createdBy',
      displayName: 'Created By',
      description: null,
      fieldType: 'RELATION',
      isSystem: true,
      isList: false,
      isMeta: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: {
        relationTableName: 'Users',
        relationFieldName: null,
        refFieldName: null,
        refFieldDisplayName: null,
        refFieldIsList: null,
        refFieldIsRequired: null,
        refTable: {
          id: 'usersTableId',
          name: 'Users',
        },
      },
    },
    {
      id: '5ceff89443243c3fa748f266',
      name: 'fileId',
      displayName: 'File ID',
      description: null,
      fieldType: 'UUID',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c07e848f268',
      name: 'downloadUrl',
      displayName: 'Download Url',
      description: null,
      fieldType: 'TEXT',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c0d7448f26b',
      name: 'shareUrl',
      displayName: 'Share Url',
      description: null,
      fieldType: 'TEXT',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c14ca48f26e',
      name: 'provider',
      displayName: 'Provider',
      description: null,
      fieldType: 'TEXT',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c9b9e48f271',
      name: 'public',
      displayName: 'Public',
      description: null,
      fieldType: 'SWITCH',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: true,
      isUnique: false,
      defaultValue: 'false',
      relation: null,
    },
    {
      id: '5ceff89443243c27ed48f274',
      name: 'uploaded',
      displayName: 'Uploaded',
      description: null,
      fieldType: 'SWITCH',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: true,
      isUnique: false,
      defaultValue: 'false',
      relation: null,
    },
    {
      id: '5ceff89443243c377c48f277',
      name: 'filename',
      displayName: 'File Name',
      description: null,
      fieldType: 'TEXT',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243cbcf048f27a',
      name: 'uploadUrl',
      displayName: 'Upload Url',
      description: null,
      fieldType: 'TEXT',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c573c48f27d',
      name: 'fields',
      displayName: 'Fields',
      description: null,
      fieldType: 'JSON',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243c412448f27e',
      name: 'meta',
      displayName: 'Meta',
      description: null,
      fieldType: 'JSON',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      id: '5ceff89443243cdd6c48f27f',
      name: 'mods',
      displayName: 'Mods',
      description: null,
      fieldType: 'JSON',
      isSystem: true,
      isList: false,
      isMeta: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
  ],
};

export const CLIENTS_TABLE = {
  id: 'clientsTableId',
  name: 'clients',
  displayName: 'Clients',
  isSystem: false,
  fields: [
    {
      id: 'clientsIdFieldId',
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: 'clientsUserFieldId',
      name: 'user',
      displayName: 'User',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: {
        refFieldName: 'client',
        refFieldDisplayName: 'Client',
        relationTableName: 'y16z0t27',
        relationFieldName: 'aid',
        refTable: {
          id: 'usersTableId',
          name: 'Users',
        },
        refFieldIsList: true,
        refFieldIsRequired: false,
      },
    },
    {
      id: 'clientsFullNameFieldId',
      name: 'fullName',
      displayName: 'Full Name',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 500,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: 'clientsUserFieldId',
      name: 'orders',
      displayName: 'Orders',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: {
        refFieldName: 'client',
        refFieldDisplayName: 'Client',
        relationTableName: 'y16z0t27',
        relationFieldName: 'aid',
        refTable: {
          id: 'ordersTableId',
          name: 'orders',
        },
        refFieldIsList: false,
        refFieldIsRequired: false,
      },
    },
  ],
};

export const ORDERS_TABLE = {
  id: 'ordersTableId',
  name: 'orders',
  displayName: 'Orders',
  isSystem: false,
  fields: [
    {
      id: 'ordersIdFieldId',
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: 'clientsUserFieldId',
      name: 'client',
      displayName: 'Clients',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: {
        refFieldName: 'order',
        refFieldDisplayName: 'Order',
        relationTableName: 'y16z0t27',
        relationFieldName: 'aid',
        refTable: {
          id: 'clientsTableId',
          name: 'clients',
        },
        refFieldIsList: true,
        refFieldIsRequired: false,
      },
    },
  ],
};

export const DATA = {
  clients: [
    {
      $id: 'client-1',
      fullName: 'Jacalyn Mccarrel',
      user: {
        $id: '$currentUserId',
      },
      orders: [
        {
          $id: 'order-1',
        },
        {
          $id: 'order-2',
        },
      ],
    },
  ],
  orders: [
    {
      $id: 'order-1',
      client: {
        $id: 'client-1',
      },
    },
    {
      $id: 'order-2',
      client: {
        $id: 'client-1',
      },
    },
  ],
};

export const SYSTEM_DATA = {
  users: [
    {
      $id: 'user-1',
      client: {
        $id: 'client-1',
      },
    },
  ],
};

export const USER_TABLES = [CLIENTS_TABLE, ORDERS_TABLE];
export const TABLES = [SYSTEM_TABLE, FILES_TABLE, ...USER_TABLES];
