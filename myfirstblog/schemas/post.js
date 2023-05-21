import {defineField, defineType} from 'sanity'

const textEditorStyles = [
  {title: 'Normal', value: 'normal'},
  {title: 'Heading 1', value: 'h1'},
  {title: 'Heading 2', value: 'h2'},
  {title: 'Heading 3', value: 'h3'},
  {title: 'Quote', value: 'blockquote'},
]

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    defineField({
      name: 'meta_title',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighLighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      group: 'content',
      of: [
        {
          type: 'block',
          styles: textEditorStyles,
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
