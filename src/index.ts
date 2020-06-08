import GithubApiService from './GithubApiService';
let svc = new GithubApiService();

let username = process.argv[2];

if (!username) console.error("\n :( Pass the username as an argument!:\nExample: yarn start katendeglory\n");

else svc.getUserinfo(username)
  .then(user => console.log(user))
  .catch(e => console.log("\n" + e.message + "\n"));