/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'mainLogo',
    title: 'Website Logo',
    type: 'document',
    fields: [
      {
        name: 'logoType',
        title: 'Logo Type',
        type: 'string',
        options: {
          list: ['text', 'image'],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'textLogo',
        title: 'Text Logo',
        type: 'string',

        description: 'Enter the text for the logo (if using text logo), also follow this link to use custom font for your text https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css',
        hidden: ({ parent }) => parent && parent.logoType !== 'text',
      },
     
      {
        name: 'imageLogo',
        title: 'Image Logo',
        type: 'image',
        description: 'Upload the image for the logo (if using image logo)',
        hidden: ({ parent }) => parent && parent.logoType !== 'image',
      },
      {
        name: 'altText',
        title: 'Image Logo Alt Text',
        type: 'string',
        description: ' Enter the alt text for the image logo (if using image logo)',
        hidden: ({ parent }) => parent && parent.logoType !== 'image',
      },
    ],
  };
  