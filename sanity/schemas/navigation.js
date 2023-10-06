/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "navigation",
  title: "Navigation Menu",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the navigation menu",
    },
    {
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
                allowRelative: true
              })
            },
            {
              name: "subItems",
              title: "Sub Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "link",
                      title: "Link",
                      type: "url",
                      validation: Rule => Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                        allowRelative: true
                      })
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    title: "Main Navigation",
  },
};
