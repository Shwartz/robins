import ghpages from 'gh-pages';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.GITHUB_TOKEN) {
  console.log('No GITHUB_TOKEN found');
  process.exit(1)
}
console.log('Deploy Starts!')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    silent: false,
    repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/Shwartz/robins.git',
    user: {
      name: 'Andris Svarcs',
      email: 'svarcs.01@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!')
  }
)
