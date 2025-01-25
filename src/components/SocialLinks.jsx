const SocialLinks = (props) => {
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
