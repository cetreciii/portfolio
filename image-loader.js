export default function imageLoader({ src }) {
  if (src.startsWith('http') || src.startsWith('//')) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`;
}
