function SetAttribute() {
  const dest = 'https://ja.react.dev';
  const attrs = {
    href: dest,
    target: '_blank',
  };
  return (
    <p>
      <ul>
        <li><a href={`${dest}/learn`}>React</a></li>
        {/* Props spreading is forbidden
        https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md */}
        <li><a {...attrs}>React</a></li>
      </ul>
    </p>
  );
}

export default SetAttribute;
