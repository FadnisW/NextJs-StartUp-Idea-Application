import { defineQuery } from 'next-sanity';

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  _createdAt,
  views,
  description,
  image,
  category,
  title,
  votes,
  author -> {_id, name, slug, image, bio},
}`);

