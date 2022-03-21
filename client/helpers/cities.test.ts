import { getCaption } from './cities';

describe('Helpers: Cities', () => {
  it('Get a caption without subcountry', () => {
    const caption = getCaption('Netherlands');
    expect(caption).toBe('Netherlands');
  });

  it('Get a caption with a subcountry', () => {
    const caption = getCaption('Netherlands', 'North Brabant');
    expect(caption).toBe('North Brabant - Netherlands');
  });
});
