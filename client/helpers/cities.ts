import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export const getCaption = (country: string, subcountry?: string) => (
  subcountry ? `${subcountry} - ${country}` : country
);

export const getMatchParts = (inputMatch: string, text?: string): { text: string; highlight: boolean }[] => {
  if (!text) return [];

  const matches = match(text, inputMatch, { insideWords: true });
  const parts = parse(text, matches);

  return parts;
}