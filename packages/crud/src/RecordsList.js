// @flow
import React, { Component } from 'react';
import * as R from 'ramda';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { TableMeta } from './TableMeta';
import { createTableFilterGraphqlTag } from './queryTableGenerator';

type RecordsListProps = {
  tableName?: string,
  tableId?: string,
  children: (recordsListResult: Object) => React$Node,
}


/**
 * Component for fetching the table content
 *
 * @prop {string} tableName - Name of the table
 * @prop {string} tableId - Id of the table
 * @prop {(recordsListResult: Object) => React$Node} children - Render prop with result of the query
 */
export class RecordsList extends Component<RecordsListProps> {
  isFetchingNewTable: boolean;
  isFetchingNewTable = false;

  componentDidUpdate(prevProps: RecordsListProps) {
    if (
      this.props.tableName !== prevProps.tableName ||
      this.props.tableId !== prevProps.tableId
    ) {
      this.startFetchingNewTable();
    }
  }

  startFetchingNewTable() {
    this.isFetchingNewTable = true;
  }

  stopFetchingNewTable() {
    this.isFetchingNewTable = false;
  }

  /** this dirty hack needs to avoid passing the old table data after changing the table */
  getRecordsListData = (recordsListResult: Object) => {
    const recordsListData = this.isFetchingNewTable && recordsListResult.loading
      ? []
      : R.path(['data', 'tableContent'], recordsListResult);

    if (this.isFetchingNewTable && !recordsListResult.loading) {
      this.stopFetchingNewTable();
    }

    return recordsListData;
  }

  render() {
    const { tableName, tableId, children, ...rest } = this.props;
    return (
      <TableMeta
        tableName={ tableName }
        tableId={ tableId }
      >
        { (tableMetaResult) => (
          <Query
            { ...rest }
            query={ gql(createTableFilterGraphqlTag(tableMetaResult.data)) }
          >
            { (recordsListResult) => children({
              ...recordsListResult,
              data: this.getRecordsListData(recordsListResult),
            }) }
          </Query>
        ) }
      </TableMeta>
    );
  }
}