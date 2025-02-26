import { useEmbeds } from '../../hooks/useEmbeds';
import { markdownToHtml } from '../../public/utils/markdownToHtml';
import { memo } from 'react';

type Props = {
  contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });

  return (
    <div
      className='hashnode-content-style mx-auto w-full md:max-w-screen-md dark:text-orange-50'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
