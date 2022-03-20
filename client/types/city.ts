type GeonameID = number;

export interface City {
  geonameid: GeonameID;
  name: string;
  country: string;
  subcountry?: string;
}

export interface Cities {
  data: City[];
  total: number;
  links: {
    first: string;
    next?: string;
    prev?: string;
    last: string;
  };
  filter?: string;
}

export interface PreferredCities {
  data: GeonameID[]; // geonameid array
  total: number;
  links: {
    first: string;
    next?: string;
    prev?: string;
    last: string;
  };
};