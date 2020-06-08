import User from './User';
import axios from 'axios';
import Repo from './Repo';
import _ from 'lodash';


class GithubApiService {

  async getUserinfo(username: string): Promise<User> {
    let options = { headers: { "User-Agent": "request" }, json: true }
    let res = await axios.get(`https://api.github.com/users/${username}`, options);
    let user = new User(res.data);

    user.repos = await this.getRepos(username);
    user.repos = _.orderBy(user.repos, ['created'], ['desc']);

    return user;
  }

  async getRepos(username: string): Promise<Repo[]> {
    let options = { headers: { "User-Agent": "request" }, json: true }
    let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5`, options);

    let repos: Repo[] = [];

    res.data.forEach(item => repos.push(new Repo(item)));

    return repos;
  }
}


export default GithubApiService;