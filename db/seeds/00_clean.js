exports.seed = function(knex, Promise) {

  const tablesToClean = ['users','businesses','businesses_users', 'projects', 'businesses_users', 'users_projects', 'businesses_projects', 'project_permits']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
