export const COMMON_TABLE_SCHEMA = {
  name: 'commons',
  fields: [
    { name: 'field1', id: '1', isMeta: false, isSystem: false },
    { name: 'field2', id: '2', isMeta: false, isSystem: false },
    { name: 'field3', id: '3', isMeta: false, isSystem: false },
  ],
};

export const TABLE_SCHEMA_WITH_RELATION = {
  name: 'Relation',
  fields: [
    { name: 'field1', isMeta: false, isSystem: false, id: '1', fieldType: 'RELATION' },
    { name: 'field2', isMeta: false, isSystem: false, id: '2' },
    { name: 'field3', isMeta: false, isSystem: false, id: '3' },
    { name: 'field4', isMeta: false, isSystem: false, id: '4', fieldType: 'RELATION', isList: true },
  ],
};

export const TABLE_SCHEMA_WITH_FILES = {
  name: 'Files',
  fields: [
    {
      id: '1',
      name: 'file',
      displayName: 'File',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '2',
      name: 'fileList',
      displayName: 'File List',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
  ],
};

export const TABLE_SCHEMA_WITH_SMART_FIELDS = {
  name: 'SmartFields',
  fields: [
    {
      id: '5bac9e032cb41016073279c1',
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
      id: '5bac9e032cb410aaae3279c2',
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41071903279c3',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb4101d9e3279c4',
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41038203279c5',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb41050d33279c8',
      name: 'createdBy',
      displayName: 'Created By',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: {
        id: '5bac9e032cb410d7643279c9',
        refFieldName: null,
        refFieldDisplayName: null,
        relationTableName: 'Users',
        relationFieldName: null,
        refTable: {
          id: '5bac9daf2cb4100073327873',
          name: 'Users',
        },
        refFieldIsList: null,
        refFieldIsRequired: null,
      },
    },
    {
      id: '5bac9eaf2cb4101ef2327a37',
      name: 'phone',
      displayName: 'Phone',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        id: '5bac9eaf2cb4106c25327a38',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '5bac9eb02cb4107af8327a4e',
      name: 'address',
      displayName: 'Address',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        id: '5bac9eb02cb41046bd327a4f',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '5bac1eaf2cb4101ef2327a37',
      name: 'phoneList',
      displayName: 'Phone List',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        id: '5bac9eaf2cb4106c25327a38',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
  ],
};

export const TABLE_SCHEMA_WITHOUT_USER_FIELDS = {
  name: 'TableWithoutUserFields',
  fields: [
    {
      id: '5bac9e032cb41016073279c1',
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
      id: '5bac9e032cb410aaae3279c2',
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41071903279c3',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb4101d9e3279c4',
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41038203279c5',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb41050d33279c8',
      name: 'createdBy',
      displayName: 'Created By',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: {
        id: '5bac9e032cb410d7643279c9',
        refFieldName: null,
        refFieldDisplayName: null,
        relationTableName: 'Users',
        relationFieldName: null,
        refTable: {
          id: '5bac9daf2cb4100073327873',
          name: 'Users',
        },
        refFieldIsList: null,
        refFieldIsRequired: null,
      },
    },
  ],
};


export const SCHEMA = [{
  id: 'TABLE_SCHEMA_ID',
  name: 'tableSchema',
  displayName: 'Table Schema',
  isSystem: false,
  fields: [
    {
      name: 'numberanother',
      displayName: 'number',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        format: 'NUMBER',
        precision: 0,
        currency: null,
        minValue: null,
        maxValue: null,
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
      name: 'number',
      displayName: 'number',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        format: 'NUMBER',
        precision: 0,
        currency: null,
        minValue: null,
        maxValue: null,
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
      name: 'numberList',
      displayName: 'numberList',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        format: 'NUMBER',
        precision: 0,
        currency: null,
        minValue: null,
        maxValue: null,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'meta',
      displayName: 'meta',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isMeta: true,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'phone',
      displayName: 'Phone',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'PHONE',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'phones',
      displayName: 'Phones',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'PHONE',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'address',
      displayName: 'Address',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'ADDRESS',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'addresses',
      displayName: 'Addresses',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'ADDRESS',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'file',
      displayName: 'File',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'fileList',
      displayName: 'File List',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'relation',
      displayName: 'Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_1',
        relationTableName: 'RELATION_TABLE_NAME_1',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
          name: 'relationTableSchema',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'relationList',
      displayName: 'RelationList',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_2',
        relationTableName: 'RELATION_TABLE_NAME_2',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
          name: 'relationTableSchema',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'json',
      displayName: 'json',
      description: null,
      fieldType: 'JSON',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'jsonList',
      displayName: 'jsonList',
      description: null,
      fieldType: 'JSON',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'bigInt',
      displayName: 'bigInt',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        isBigInt: true,
        precision: 0,
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
      name: 'bigIntList',
      displayName: 'bigInt',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        isBigInt: true,
        precision: 0,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
  ],
}, {
  id: 'RELATION_TABLE_SCHEMA_ID',
  name: 'relationTableSchema',
  displayName: 'Relation Table Schema',
  isSystem: false,
  fields: [
    {
      id: '5cc0849dfe73ad48a46103b0',
      isSystem: true,
      name: 'id',
      displayName: 'ID',
      fieldType: 'ID',
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'relation',
      displayName: 'Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_3',
        relationTableName: 'RELATION_TABLE_NAME_1',
        relationFieldName: 'aid',
        refTable: {
          id: 'TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'relationList',
      displayName: 'RelationList',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_4',
        relationTableName: 'RELATION_TABLE_NAME_2',
        relationFieldName: 'aid',
        refTable: {
          id: 'TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelation',
      displayName: 'Nested Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_5',
        relationTableName: 'RELATION_TABLE_NAME_3',
        relationFieldName: 'aid',
        refTable: {
          id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelationList',
      displayName: 'Nested Relation List',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_6',
        relationTableName: 'RELATION_TABLE_NAME_4',
        relationFieldName: 'aid',
        refTable: {
          id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
  ],
}, {
  id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
  name: 'nestedRelationTableSchema',
  displayName: 'Other Relation Table Schema',
  isSystem: false,
  fields: [
    {
      id: '5cc0849dfe73ad48a46103b0',
      isSystem: true,
      name: 'id',
      displayName: 'ID',
      fieldType: 'ID',
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'nestedRelation',
      displayName: 'Nested Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_5',
        relationTableName: 'RELATION_TABLE_NAME_3',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelationList',
      displayName: 'Nested Relation List',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_6',
        relationTableName: 'RELATION_TABLE_NAME_4',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
  ],
},
{
  id: '5cc08473fe73ad3fb460fe2f',
  name: 'Files',
  displayName: 'Files',
  isSystem: true,
  fields: [
    {
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'fileId',
      displayName: 'File ID',
      description: null,
      fieldType: 'UUID',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: true,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'downloadUrl',
      displayName: 'Download Url',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'shareUrl',
      displayName: 'Share Url',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'provider',
      displayName: 'Provider',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'public',
      displayName: 'Public',
      description: null,
      fieldType: 'SWITCH',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: true,
      isUnique: false,
      defaultValue: 'false',
      relation: null,
    },
    {
      name: 'uploaded',
      displayName: 'Uploaded',
      description: null,
      fieldType: 'SWITCH',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: true,
      isUnique: false,
      defaultValue: 'false',
      relation: null,
    },
    {
      name: 'filename',
      displayName: 'File Name',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'uploadUrl',
      displayName: 'Upload Url',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {},
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'fields',
      displayName: 'Fields',
      description: null,
      fieldType: 'JSON',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'meta',
      displayName: 'Meta',
      description: null,
      fieldType: 'JSON',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'mods',
      displayName: 'Mods',
      description: null,
      fieldType: 'JSON',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
  ],
}];
