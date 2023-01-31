import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";

import {
  orderableDocumentListDeskItem,
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineConfig({
  name: "default",
  title: "Terris & Company",

  projectId: "wd0p9tvc",
  dataset: "production",

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({ type: "team", S, context }),
            orderableDocumentListDeskItem({type: 'projects', S, context}),
            orderableDocumentListDeskItem({type: 'contact', S, context}),
          ]);
      },
    }),
    visionTool(),
  ],

  schema: {
    /* It's importing the schemaTypes from the src/schemas.js file. */
    types: schemaTypes,
    types: (previousTypes) => {
      return [
        ...previousTypes,
        // team 
        {
          name: "team",
          title: "Team",
          type: "document",
          // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
          // https://www.sanity.io/docs/sort-orders
          orderings: [orderRankOrdering],
          fields: [
            orderRankField({ type: "team", hidden: false }),
            {
              title: 'Categories',
              name: 'categories',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Senior Project Management',
                    value: 'Senior Project Management',
                  },
                  { title: 'Junior Site Management', value: 'Junior Site Management' },
                  { title: 'Carpentry', value: 'Carpentry' },
                  { title: 'Office', value: 'Office' },
                ], // <-- predefined values
                layout: 'radio', // <-- defaults to 'dropdown'
              },
            },
            {
              title: 'Feature Image',
              name: 'featureimage',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true, // <-- make this field easily accessible
                  },
                },
              ],
            },
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
        
            {
              name: 'portableText',
              type: 'array',
              title: 'Bio',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],


        },
        // projects 
        {
          name: "projects",
          title: "Projects",
          type: "document",
          // orderings: [orderRankOrdering],
          fields: [
            orderRankField({ type: "projects", hidden: false }),
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
              },
            },
        
            {
              title: 'Feature Image',
              name: 'featureimage',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true, // <-- make this field easily accessible
                  },
                },
              ],
            },
            {
              name: 'write_up',
              type: 'text',
              title: 'Write Up',
            },
            {
              name: 'tag',
              type: 'string',
              title: 'Tag',
            },
            {
              name: 'type',
              type: 'string',
              title: 'Type',
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
                          name: 'size',
                          title: 'Size',
                          description: 'Choose a Size',
                          type: 'string',
                          options: {
                            layout: 'radio',
                            list: [
                              { title: 'Full', value: 'full' },
                              { title: 'Half', value: 'half' },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                  options: {
                    layout: 'grid',
                  },
                },
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
              name: 'video',
              type: 'string',
              title: 'Video ID',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location',
            },
            {
              name: 'year',
              type: 'number',
              title: 'Year',
            },
            {
              name: 'area',
              type: 'string',
              title: 'Area',
            },
            {
              title: 'Project Highlights',
              name: 'project_highlights',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'featured_in',
              title: 'Featured In',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'hading',
                      title: 'Heading',
                      type: 'string',
                    },
                    {
                      name: 'link',
                      title: 'Link',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Collaborators',
              name: 'Collaborators',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              title: 'Related Projects',
              name: 'related_project',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'projects' }],
                },
              ],
            },
          ],

        },
        // contactus
        {
          name: "contact",
          title: "Contact",
          type: "document",
          orderings: [orderRankOrdering],
          fields: [
            orderRankField({ type: "contact", hidden: false }),
            {
              name: 'clientportal',
              title: 'Client Portal',
              type: 'string',
            },
            {
              name: 'onboard',
              title: 'Onboarding Keynote',
              type: 'file',
            },
          ],
          preview: {
            select: {
              title: 'Page Elements',
            },
            prepare: (selection) => {
              return {
                ...selection,
              };
            },
          },
        }
      ];

    },


  },
});
