//queryKey: ['Zaloby', 'detail', paramsRoute.id, 'poznamky'],

/*example
// export const zalobyKeys = {
  //   all: ['Zaloby'] as const,
  //   list: () => [...zalobyKeys.all, 'list'] as const,
  //   //list: (filters: string) => [...zalobyKeys.lists(), { filters }] as const,
  //   details: () => [...zalobyKeys.all, 'detail'] as const,
  //   detail: (id: string | undefined) => [...zalobyKeys.details(), id] as const,
  //   napadeneRozhodnuti: (id: string | undefined) =>
  //     [...zalobyKeys.detail(id), 'napadeneRozhodnuti'] as const,
  //   meritorniVyjadreni: (id: string | undefined) =>
  //     [...zalobyKeys.detail(id), 'meritorniVyjadreni'] as const,
  //   soudPredani: (id: string | undefined) =>
  //     [...zalobyKeys.detail(id), 'soudPredani'] as const,
  //   poznamky: (id: string | undefined) =>
  //     [...zalobyKeys.detail(id), 'poznamky'] as const,
  // };
*/

export const menuKeys = {
  all: ['menu'] as const,
  profil: () => [...menuKeys.all, 'profil'] as const,
};

export const appInitKeys = {
  all: ['appInit'] as const,
};
