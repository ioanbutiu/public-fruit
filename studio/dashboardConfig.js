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
                  buildHookId: '60942d400fb8fa00da43c689',
                  title: 'Sanity Studio',
                  name: 'public-fruit-studio',
                  apiId: '832c9b2f-3fb0-4d13-a9c8-80acc51f6ed7'
                },
                {
                  buildHookId: '60942d403d4ca400a68882a0',
                  title: 'Blog Website',
                  name: 'public-fruit',
                  apiId: 'ed7c3369-773e-4b24-8d47-505dc3dac9b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ioanbutiu/public-fruit',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://public-fruit.netlify.app', category: 'apps'}
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
