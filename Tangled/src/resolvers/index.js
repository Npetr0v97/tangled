import Resolver from '@forge/resolver';
import { commentResolvers } from "./comment/index.js"
import { issueResolvers } from './issues/index.js';

const resolver = new Resolver();



//RESOLVER COMBINER
Object.entries(commentResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});
Object.entries(issueResolvers).forEach(([name, handler]) => {
  resolver.define(name, handler);
});




export const handler = resolver.getDefinitions();
