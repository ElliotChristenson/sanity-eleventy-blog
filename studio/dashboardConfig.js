export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616e496238c32eb3ca07201f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-knz3mizz',
                  apiId: '4ec06efc-fe9f-4860-95f4-a0671ff35579'
                },
                {
                  buildHookId: '616e4962b6e8d8b5a47d6383',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jpmy1m2u',
                  apiId: '092ac055-26cd-44f3-9e92-0fae6ed9b0e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ElliotChristenson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jpmy1m2u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
