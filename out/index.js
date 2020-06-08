"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = __importDefault(require("./GithubApiService"));
var svc = new GithubApiService_1.default();
var username = process.argv[2];
if (!username)
    console.error("\n :( Pass the username as an argument!:\nExample: yarn start katendeglory\n");
else
    svc.getUserinfo(username)
        .then(function (user) { return console.log(user); })
        .catch(function (e) { return console.log("\n" + e.message + "\n"); });
