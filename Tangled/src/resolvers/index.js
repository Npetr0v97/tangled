import Resolver from '@forge/resolver';
import { commentResolvers } from "./comment/index.js"
import { issueResolvers } from './issue/index.js';
import { userResolvers } from './user/index.js';
import { issueSearchResolvers } from './issueSearch/index.js';

const resolver = new Resolver();



//RESOLVER COMBINER
Object.entries(commentResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});
Object.entries(issueResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});
Object.entries(userResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});
Object.entries(issueSearchResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});




export const handler = resolver.getDefinitions();
