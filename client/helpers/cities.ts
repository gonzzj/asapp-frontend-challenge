export const getCaption = (country: string, subcountry?: string) => (
  subcountry ? `${subcountry} - ${country}` : country
);