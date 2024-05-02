import protectedTagLabel from './protectedTagLabel';
import sortTags from 'flarum/tags/common/utils/sortTags';
import classList from 'flarum/common/utils/classList';

export default function protectedTagsLabel(tags, attrs = {},  isProtectedDisplayed = true, isNonProtectedDisplayed = true) {
  const children = [];
  const { link, ...otherAttrs } = attrs;

  otherAttrs.className = classList('TagsLabel', otherAttrs.className);

  if (tags) {
    sortTags(tags).forEach((tag) => {
      if (tag || tags.length === 1) {
        children.push(protectedTagLabel(tag, { link }, isProtectedDisplayed, isNonProtectedDisplayed));
      }
    });
  } else {
    children.push(protectedTagLabel());
  }

  return <span {...otherAttrs}>{children}</span>;
}