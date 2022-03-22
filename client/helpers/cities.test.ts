import { getCaption, getMatchParts } from './cities';

describe('Helpers: Cities', () => {
  it('Get a caption without subcountry', () => {
    const caption = getCaption('Netherlands');
    expect(caption).toBe('Netherlands');
  });

  it('Get a caption with a subcountry', () => {
    const caption = getCaption('Netherlands', 'North Brabant');
    expect(caption).toBe('North Brabant - Netherlands');
  });

  it('Get match parts with Netherlands', () => {
    const parts = getMatchParts('the', 'Netherlands');
    expect(parts.length).toBe(3);
    expect(parts[1].highlight).toBeTruthy();
    expect(parts[0].highlight).toBeFalsy();
  });

  it('Get match parts with Manhattan', () => {
    const parts = getMatchParts('Man', 'Manhattan');
    expect(parts.length).toBe(2);
    expect(parts[1].text).toBe('hattan');
    expect(parts[1].highlight).toBeFalsy();
  });
});
