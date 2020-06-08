import Repo from "./Repo";

class User {
  login: string;
  fullName: number;
  repoCount: number;
  followerCount: number;
  repos: Repo[];

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
    this.repos = [];
  }
}

export default User;