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

export interface Game {
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
