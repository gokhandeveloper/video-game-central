interface ParentPlatform {
  platform: {
    slug: string;
    name: string
  }
}

interface Rating {
  id: number;
  count: number;
  title: string
}

interface Genre {
  name: string;
}

export interface Game {
  metacritic_url: string;
  genres: Array<Genre>;
  released: string;
  metacritic: number;
  id: string;
  background_image:string;
  name: string;
  website: string;
  description: string;
  platforms: Array<ParentPlatform>
  ratings: Array<Rating>;
}

export interface APIResponse<T> {
  results : Array<T>;

}

export interface ApiCredential {
  rapidApiKey: string;
  rapidApiHost: string;
  rawGApiKey: string
}
