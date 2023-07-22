import { FILTER_ACTION_TYPE, filterReducer } from '../reducers/filterReducer';

describe('testing filter search', () => {
  it('should get data', () => {
    const intState = {
      columns: [],
      data: [],
      selectedOptions: {},
      selectedValues: [],
      filteredData: [],
    };
    const action = {
      type: FILTER_ACTION_TYPE.GET_DATA,
      payload: {
        columns: [
          {
            name: 'number',
          },
          {
            name: 'mod3',
          },
          {
            name: 'mod4',
          },
          {
            name: 'mod5',
          },
          {
            name: 'mod6',
          },
        ],
        data: [
          {
            id: 1,
            number: '34',
            mod3: '1',
            mod4: '2',
            mod5: '4',
            mod6: '0',
          },
          {
            id: 2,
            number: '12',
            mod3: '0',
            mod4: '0',
            mod5: '2',
            mod6: '0',
          },
          {
            id: 3,
            number: '24',
            mod3: '0',
            mod4: '0',
            mod5: '4',
            mod6: '0',
          },
          {
            id: 4,
            number: '36',
            mod3: '0',
            mod4: '0',
            mod5: '1',
            mod6: '0',
          },
          {
            id: 5,
            number: '48',
            mod3: '0',
            mod4: '0',
            mod5: '3',
            mod6: '0',
          },
        ],
      },
    };
    const updatedState = filterReducer(intState, action);

    expect(updatedState).toEqual({
      columns: [
        {
          name: 'number',
        },
        {
          name: 'mod3',
        },
        {
          name: 'mod4',
        },
        {
          name: 'mod5',
        },
        {
          name: 'mod6',
        },
      ],
      data: [
        {
          id: 1,
          number: '34',
          mod3: '1',
          mod4: '2',
          mod5: '4',
          mod6: '0',
        },
        {
          id: 2,
          number: '12',
          mod3: '0',
          mod4: '0',
          mod5: '2',
          mod6: '0',
        },
        {
          id: 3,
          number: '24',
          mod3: '0',
          mod4: '0',
          mod5: '4',
          mod6: '0',
        },
        {
          id: 4,
          number: '36',
          mod3: '0',
          mod4: '0',
          mod5: '1',
          mod6: '0',
        },
        {
          id: 5,
          number: '48',
          mod3: '0',
          mod4: '0',
          mod5: '3',
          mod6: '0',
        },
      ],
      filteredData: [
        {
          id: 1,
          number: '34',
          mod3: '1',
          mod4: '2',
          mod5: '4',
          mod6: '0',
        },
        {
          id: 2,
          number: '12',
          mod3: '0',
          mod4: '0',
          mod5: '2',
          mod6: '0',
        },
        {
          id: 3,
          number: '24',
          mod3: '0',
          mod4: '0',
          mod5: '4',
          mod6: '0',
        },
        {
          id: 4,
          number: '36',
          mod3: '0',
          mod4: '0',
          mod5: '1',
          mod6: '0',
        },
        {
          id: 5,
          number: '48',
          mod3: '0',
          mod4: '0',
          mod5: '3',
          mod6: '0',
        },
      ],
      selectedOptions: {},
      selectedValues: [],
    });
  });
});
