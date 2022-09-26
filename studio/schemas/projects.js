export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },

        {
            title: 'Feature Image',
            name: 'featureimage',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                }
            ]
        },
        {
            name: 'tag',
            type: 'string',
            title: 'Tag'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type'
        },
        {
            name: 'gallery',
            type: 'object',
            title: 'Gallery',
            fields: [
              {
                name: 'images',
                type: 'array',
                title: 'Images',
                of: [
                  {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                      hotspot: true,
                    },
                    fields: [
                      {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative2 text',
                      },
                      {
                        name: "size",
                        title: "Size",
                        description: "Choose a Size",
                        type: "string",
                        options: {
                          layout: "radio",
                          list: [
                            { title: "Full", value: "full" },
                            { title: "Half", value: "half" },
                          ],
                        },
                      },
                    ],
                  },
                ],
                options: {
                  layout: 'grid',
                },
              }
            ],
            preview: {
              select: {
                images: 'images',
                image: 'images.0',
              },
              prepare(selection) {
                const { images, image } = selection;
      
                return {
                  title: `Gallery block of ${Object.keys(images).length} images`,
                  subtitle: `Alt text: ${image.alt}`,
                  media: image,
                };
              },
            },
          },
          {
            name: 'location',
            type: 'string',
            title: 'Location'
          },
          {
            name: 'year',
            type: 'number',
            title: 'Year'
          },
          {
            name: 'area',
            type: 'string',
            title: 'Area'
          },
          {
            title: 'Project highlights',
            name: 'project_highlights',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: "featured_in",
            title: "Featured In",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "hading",
                    title: "Heading",
                    type: "string",
                  },
                  {
                    name: "link",
                    title: "Link",
                    type: "url",
                  },
                ]
              }
            ]
          },
          {
            title: 'collaborators',
            name: 'Collaborators',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            title: 'Related Project',
            name: 'related_project',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  { type: 'projects' }
                ]
              }
            ]
          },
    ]
}