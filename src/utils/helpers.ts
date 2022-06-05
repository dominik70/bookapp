import { Resource, Agent } from '../types';

export const getCover = (resources: Resource[]) => {
  return resources.find((resource) => resource.uri.includes('cover.medium'))
    ?.uri;
};

export const getAuthor = (agents: Agent[]) => {
  return agents.find((agent) => agent.type === 'Author')?.person;
};

export const findBookUri = (resources: Resource[]) => {
  return (
    resources.find(({ uri }) => uri.includes('.htm')) ||
    resources.find(({ uri }) => uri.includes('.txt'))
  )?.uri;
};
