const SocialLinks = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href, itemClass, icon } = props;
  console.log(props);
  return (
    <li>
      <a href={href} className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLinks;
