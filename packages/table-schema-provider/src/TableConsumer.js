// @flow
import React from 'react';
import type { Schema, TableSchema } from '@8base/utils';
import { tablesListSelectors } from '@8base/utils';

import { TableSchemaContext } from './TableSchemaContext';

type TableConsumerProps = {
  id?: string,
  name?: string,
  app?: string,
  children: (tableSchema: ?TableSchema) => React$Node,
};

class TableConsumer extends React.Component<TableConsumerProps> {
  renderWithSchemaResponse = (schema: ?Schema) => {
    const { id, name, app, children } = this.props;

    let tableSchema = null;

    if (id) {
      tableSchema = tablesListSelectors.getTableById(schema, id);
    } else if (name) {
      /*  if (!app) {
        throw new Error('To get table by name you should specify application name');
      } */
      tableSchema = tablesListSelectors.getTableByName(schema, name, app);
    }

    return children(tableSchema);
  }

  render() {
    return (
      <TableSchemaContext.Consumer>
        { this.renderWithSchemaResponse }
      </TableSchemaContext.Consumer>
    );
  }
}


export { TableConsumer };
