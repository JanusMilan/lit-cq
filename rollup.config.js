import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';


const config = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false
});
 
export default merge(config, {
  input: './index.html',
});