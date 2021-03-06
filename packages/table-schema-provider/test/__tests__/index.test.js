import React from 'react';
import renderer from 'react-test-renderer';
import { TableConsumer, TableSchemaContext, TableSchemaProvider } from '../../src';

const MOCK_TABLES_SCHEMA = {
  items: [
    {
      id: '1',
      name: 'tableName',
      displayName: 'tableName',
      isSystem: false,
      fields: [],
      __typename: 'Table',
    },
  ],
  count: 1,
};

jest.mock('react-apollo', () => ({
  Query: ({ children, skip }) => skip ?
    children({ data: undefined, loading: false }) :
    children({ data: { tablesList: MOCK_TABLES_SCHEMA }, loading: false }),
}));

const { Query } = require('react-apollo');

describe('TableSchemaProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testContentFn = jest.fn(() => <div />);
  const testConsumerFn = jest.fn(() => (
    <TableConsumer name="tableName">
      { testContentFn }
    </TableConsumer>
  ));

  it('As a developer, I can use TableSchemaProvider to get tableSchema', async () => {
    renderer.create(
      <TableSchemaProvider>
        { testConsumerFn }
      </TableSchemaProvider>,
    );

    expect(testConsumerFn).toHaveBeenCalledTimes(1);
    expect(testConsumerFn).toHaveBeenCalledWith({ loading: false });
    expect(testContentFn).toHaveBeenCalledTimes(1);
    expect(testContentFn).toHaveBeenCalledWith(MOCK_TABLES_SCHEMA.items[0]);
  });

  it('As a developer, I can skip TableSchemaProvider', () => {
    const testRenderer = renderer.create(
      <TableSchemaProvider skip >
        { testConsumerFn }
      </TableSchemaProvider>,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(Query).props.skip).toBe(true);
    expect(testConsumerFn).toHaveBeenCalledTimes(1);
    expect(testConsumerFn).toHaveBeenCalledWith({ loading: false });
    expect(testContentFn).toHaveBeenCalledTimes(1);
    expect(testContentFn).toHaveBeenCalledWith(undefined);
  });
});

describe('TableConsumer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testRenderFn = jest.fn(() => <div />);

  it('As a developer, I can get access to the table schema via TableConsumer by table name.', () => {
    renderer.create(
      <TableSchemaContext.Provider value={ MOCK_TABLES_SCHEMA.items }>
        <TableConsumer name="tableName">
          { testRenderFn }
        </TableConsumer>
      </TableSchemaContext.Provider>,
    );

    expect(testRenderFn).toHaveBeenCalledTimes(1);
    expect(testRenderFn).toHaveBeenCalledWith(MOCK_TABLES_SCHEMA.items[0]);
  });

  it('As a developer, I can get access to the table schema via TableConsumer by table id.', () => {
    renderer.create(
      <TableSchemaContext.Provider value={ MOCK_TABLES_SCHEMA.items }>
        <TableConsumer id="1">
          { testRenderFn }
        </TableConsumer>
      </TableSchemaContext.Provider>,
    );

    expect(testRenderFn).toHaveBeenCalledTimes(1);
    expect(testRenderFn).toHaveBeenCalledWith(MOCK_TABLES_SCHEMA.items[0]);
  });
});

