//@ts-check

import createMdx from '@next/mdx';
import { composePlugins, withNx } from '@nx/next';
import remarkGfm from 'remark-gfm';

const withMdx = createMdx({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMdx,
];

export default composePlugins(...plugins)(nextConfig);
