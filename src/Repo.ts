class Repo {
  name: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;
  created: string;

  constructor(repoResponse: any) {
    this.name = repoResponse.name;
    this.description = repoResponse.description;
    this.url = repoResponse.html_url;
    this.size = repoResponse.size;
    this.forkCount = repoResponse.forks_count;
    this.created = repoResponse.created_at;
  }

}

export default Repo;