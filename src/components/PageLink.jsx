// eslint-disable-next-line react/prop-types
const PageLink = ({ link: { href, text }, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
