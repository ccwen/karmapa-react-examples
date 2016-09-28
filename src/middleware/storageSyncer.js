import storage from './../helpers/storage';

export default function storageSyncer({getState}) {
  return (next) => (action) => {
    const value = next(action);
    if ('react-example/spreadsheet/SET_DATA' === action.type) {
      const {spreadsheet: {data}} = getState();
      storage.set('spreadsheetData', data);
    }
    return value;
  }
}
