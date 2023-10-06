const projects = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This is the URL path to this project. It will be used to generate the URL for this project.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Project Description',
            type: 'text',
            description: 'This is the description of the project.',
            validation: (Rule) => Rule.required(),

        },
        
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
        },
        prepare({ title, slug }) {
            return {
                title: "Project: " + title,
                subtitle: "Link: " + slug.current,
            }
        }
    }
}

export default projects
