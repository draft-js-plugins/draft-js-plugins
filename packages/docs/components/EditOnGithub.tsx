import React, { ReactElement } from 'react';

interface EditOnGithubProps {
  filePath: string;
}
export default function EditOnGithub({
  filePath,
}: EditOnGithubProps): ReactElement {
  const editUrl = `https://github.com/draft-js-plugins/draft-js-plugins/edit/master/${filePath}`;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={editUrl} target="_blank" rel="noopener noreferrer">
      Edit this page on GitHub
    </a>
  );
}
