import expect from 'expect';
import {
  config,
  fileUtil,
  parser,
  dippers
} from './index.js';

describe('honey-core root', () => {

  it('should export a config object', () => {
    expect(config).toExist();
    expect(typeof config).toBe('object');
  });

  it('should export a fileUtil object', () => {
    expect(fileUtil).toExist();
    expect(typeof fileUtil).toBe('object');
  });

  it('should export a parser object', () => {
    expect(parser).toExist();
    expect(typeof parser).toBe('object');
  });

});
