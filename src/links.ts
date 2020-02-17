export interface LinkItem {
  title: string
  url: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
}

export interface LinkGroup {
  name: string
  items: LinkItem[]
}

export interface Links {
  items: LinkGroup[]
}

export const links: Links = {
  items: [
    {
      name: 'Code & Packages',
      items: [
        { title: 'GitHub', url: 'https://github.com', icon: 'github', color: '#181717' },
        { title: 'GitLab', url: 'https://gitlab.com/explore', icon: 'gitlab', color: '#fca121' },
        { title: 'npm', url: 'https://npmjs.com', icon: 'npm', color: '#cb3837' },
        { title: '30 seconds of code', url: 'https://30secondsofcode.org' },
        { title: 'BundlePhobia', url: 'https://bundlephobia.com' }
      ]
    },
    {
      name: 'Find help and discuss',
      items: [
        { title: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'stackoverflow', color: '#fe7a16' },
        { title: 'Reddit', url: 'https://reddit.com', icon: 'reddit', color: '#ff4500' },
        { title: 'Twitter', url: 'https://twitter.com', icon: 'twitter', color: '#1da1f2' },
        { title: 'WhatsApp Web', url: 'https://web.whatsapp.com', icon: 'whatsapp', color: '#25d366' },
        { title: 'Telegram Web', url: 'https://evgeny-nadymov.github.io/telegram-react/', icon: 'telegram', color: '#2ca5e0' },
        { title: 'Slack', url: 'https://slack.com', icon: 'slack', color: '#4A154B' }
      ]
    },
    {
      name: 'Read the docs',
      items: [
        { title: 'DevDocs', url: 'https://devdocs.io' },
        { title: 'MDN', url: 'https://developer.mozilla.org', icon: 'mdnwebdocs', color: '#000000' },
        { title: 'Interactive Git Cheat Sheet', url: 'https://ndpsoftware.com/git-cheatsheet.html', icon: 'git', color: '#f05032' },
        { title: 'Emmet Cheat Sheet', url: 'https://docs.emmet.io/cheat-sheet' }
      ]
    },
    {
      name: 'Best practices & conventions',
      items: [
        { title: 'OWASP Cheat Sheet Series Project', url: 'https://cheatsheetseries.owasp.org' },
        { title: 'Keep a Changelog', url: 'https://keepachangelog.com/en/1.1.0' },
        { title: 'Gitmoji', url: 'https://gitmoji.carloscuesta.me' }
      ]
    },
    {
      name: 'Fiddling around',
      items: [
        { title: 'CodePen', url: 'https://codepen.io', icon: 'codepen', color: '#000000' },
        { title: 'CodeSandbox', url: 'https://codesandbox.io', icon: 'codesandbox', color: '#000000' },
        { title: 'JSFiddle', url: 'https://jsfiddle.net', icon: 'jsfiddle', color: '#0084ff' },
        { title: 'JS Bin', url: 'https://jsbin.com' }
      ]
    },
    {
      name: 'Discover & Compare',
      items: [
        { title: 'AlternativeTo', url: 'https://alternativeto.net' },
        { title: 'StackShare', url: 'https://stackshare.io', icon: 'stackshare', color: '#0690fa' }
      ]
    },
    {
      name: 'Build some UI',
      items: [
        { title: 'React', url: 'https://reactjs.org', icon: 'react', color: '#61DAFB' },
        { title: 'Gatsby', url: 'https://gatsbyjs.org', icon: 'gatsby', color: '#663399' },
        { title: 'Next.js', url: 'https://nextjs.org', icon: 'next-dot-js', color: '#000000' },
        { title: 'Vue', url: 'https://vuejs.org', icon: 'vue-dot-js', color: '#4FC08D' },
        { title: 'Svelte', url: 'https://svelte.dev/', icon: 'svelte', color: '#FF3E00' },
        { title: 'Angular', url: 'https://angular.io', icon: 'angular', color: '#DD0031' }
      ]
    },
    {
      name: 'Code safe and secure',
      items: [
        { title: 'ESLint', url: 'https://eslint.org/', icon: 'eslint', color: '#4B32C3' },
        { title: 'Jest', url: 'https://jestjs.io/', icon: 'jest', color: '#C21325' },
        { title: 'Mocha', url: 'https://mochajs.org/', icon: 'mocha', color: '#8D6748' }
      ]
    },
    {
      name: 'Languages & Runtimes',
      items: [
        { title: 'Sass', url: 'https://sass-lang.com', icon: 'sass', color: '#cc6699' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'typescript', color: '#007acc' },
        { title: 'Babel', url: 'https://babeljs.io', icon: 'babel', color: '#F9DC3E' },
        { title: 'Node.js', url: 'https://nodejs.org/en', icon: 'node-dot-js', color: '#339933' },
        { title: 'Deno', url: 'https://deno.land', icon: 'deno', color: '#000000' },
        { title: 'Dart', url: 'https://dart.dev', icon: 'dart', color: '#0175c2' }
      ]
    },
    {
      name: 'Browser status',
      items: [
        { title: 'Google Chrome', url: 'https://www.chromestatus.com', icon: 'googlechrome', color: '#4285f4' },
        { title: 'Microsoft IE/Edge', url: 'https://developer.microsoft.com/en-us/microsoft-edge/platform/status', icon: 'microsoftedge', color: '#0078d7' },
        { title: 'Mozilla Firefox', url: 'https://platform-status.mozilla.org', icon: 'mozillafirefox', color: '#ff9400' },
        { title: 'WebKit', url: 'https://webkit.org/status', icon: 'safari', color: '#000000' },
        { title: 'Timeline of Web Browsers', url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Timeline_of_web_browsers.svg' }
      ]
    },
    {
      name: 'Standards & Proposals',
      items: [
        { title: 'W3C', url: 'https://www.w3.org/', icon: 'w3c', color: '#005A9C' },
        { title: 'ECMAScript Proposals', url: 'https://github.com/tc39/proposals' },
        { title: 'Caniuse...', url: 'https://caniuse.com' },
        { title: 'ECMAScript Compatibility Table', url: 'https://kangax.github.io/compat-table/es6' },
        { title: 'Node Green', url: 'https://node.green' },
        { title: 'Is Houdini ready yet?', url: 'https://ishoudinireadyyet.com' }
      ]
    },
    {
      name: 'Software',
      items: [
        { title: 'Git', url: 'https://git-scm.com', icon: 'git', color: '#f05032' },
        { title: 'Visual Studio Code', url: 'https://code.visualstudio.com', icon: 'visualstudiocode', color: '#007acc' },
        { title: 'Atom', url: 'https://atom.io/', icon: 'atom', color: '#66595C' },
        { title: 'JetBrains', url: 'https://www.jetbrains.com', icon: 'jetbrains', color: '#000000' },
        { title: 'Adobe', url: 'https://www.adobe.com', icon: 'adobe', color: '#ff0000' },
        { title: 'Affinity', url: 'https://affinity.serif.com', icon: 'affinity', color: '#222324' }
      ]
    },
    {
      name: 'Stay focused',
      items: [
        { title: 'YouTube', url: 'https://youtube.com', icon: 'youtube', color: '#ff0000' },
        { title: 'YouTube Music', url: 'https://music.youtube.com' },
        { title: 'Spotify', url: 'https://spotify.com', icon: 'spotify', color: '#1ED760' },
        { title: 'Deezer', url: 'https://www.deezer.com/', icon: 'deezer', color: '#FEAA2D' },
        { title: 'SoundCloud', url: 'https://soundcloud.com', icon: 'soundcloud', color: '#FF3300' },
        { title: 'Mixcloud', url: 'https://mixcloud.com', icon: 'mixcloud', color: '#314359' },
        { title: 'DI.FM', url: 'https://di.fm' }
      ]
    },
    {
      name: 'State of...',
      items: [
        { title: 'State of CSS', url: 'https://stateofcss.com/' },
        { title: 'State of JavaScript', url: 'https://stateofjs.com/' }
      ]
    },
    {
      name: 'Stay in the loop',
      items: [
        { title: 'Frontend Focus', url: 'https://frontendfoc.us', icon: 'html5', color: '#e34f26' },
        { title: 'JavaScript Weekly', url: 'https://javascriptweekly.com', icon: 'javascript', color: '#f7df1e' },
        { title: 'ES.next News', url: 'http://esnextnews.com' },
        { title: 'TypeScript Weekly', url: 'https://www.typescript-weekly.com', icon: 'typescript', color: '#007acc' },
        { title: 'Node Weekly', url: 'https://nodeweekly.com', icon: 'node-dot-js', color: '#339933' },
        { title: 'Vue.js News', url: 'https://news.vuejs.org', icon: 'vue-dot-js', color: '#4fc08d' },
        { title: 'React.js Newsletter', url: 'http://reactjsnewsletter.com', icon: 'react', color: '#61dafb' },
        { title: 'Svelte Status', url: 'https://www.sveltestatus.dev', icon: 'svelte', color: '#ff3e00' },
        { title: 'Codrops Collective', url: 'https://tympanus.net/codrops/collective' }
      ]
    }
  ]
}

export function getAllLinks (): LinkItem[] {
  return links.items.flatMap(group => group.items)
}