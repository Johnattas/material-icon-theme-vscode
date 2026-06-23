import type { FolderTheme } from '../models/icons/folders/folderTheme';
import { IconPack } from '../models/icons/iconPack';

/**
 * Defines folder icons
 */
export const folderIcons: FolderTheme[] = [
  {
    name: 'specific',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
    icons: [
      { name: 'folder-rust', folderNames: ['rust'] },
      {
        name: 'folder-robot',
        folderNames: [
          'bot',
          'bots',
          'robot',
          'robots',
          'agent',
          'agents',
          'ai',
          'Ai',
          'AI',
          'openai',
          'OpenAi',
          'OpenAI',
        ],
      },
      {
        name: 'folder-src',
        folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
      },
      {
        name: 'folder-dist',
        folderNames: [
          'dist',
          'out',
          'output',
          'outputs',
          'build',
          'builds',
          'release',
          'bin',
          'distribution',
          'built',
          'compiled',
        ],
      },
      {
        name: 'folder-css',
        folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles'],
      },
      { name: 'folder-sass', folderNames: ['sass', 'scss'] },
      { name: 'folder-television', folderNames: ['tv', 'television'] },
      { name: 'folder-desktop', folderNames: ['desktop', 'display'] },
      {
        name: 'folder-console',
        folderNames: [
          'console',
          'xbox',
          'ps4',
          'ps5',
          'switch',
          'game',
          'games',
        ],
      },
      {
        name: 'folder-images',
        folderNames: [
          'images',
          'image',
          'imgs',
          'img',
          'icons',
          'icon',
          'icos',
          'ico',
          'figures',
          'figure',
          'figs',
          'fig',
          'screenshot',
          'screenshots',
          'screengrab',
          'screengrabs',
          'pic',
          'pics',
          'picture',
          'pictures',
          'photo',
          'photos',
          'photograph',
          'photographs',
          'texture',
          'textures',
          'medialibrary',
          'MediaLibrary',
          'media-library',
          'instagram',
          'Instagram',
          'imagegenerators',
          'ImageGenerators',
        ],
      },
      {
        name: 'folder-scripts',
        folderNames: ['script', 'scripts', 'scripting'],
      },
      {
        name: 'folder-node',
        folderNames: [
          'node',
          'nodejs',
          'node_modules',
          '.adonisjs',
          'adonisjs',
          '.adonis',
          'adonis',
        ],
      },
      {
        name: 'folder-javascript',
        folderNames: ['js', 'javascript', 'javascripts', 'cjs', 'mjs'],
      },
      { name: 'folder-json', folderNames: ['json', 'jsons', 'jsonc', 'jsonl'] },
      {
        name: 'folder-font',
        folderNames: ['font', 'fonts', 'typeface', 'typefaces'],
      },
      { name: 'folder-bower', folderNames: ['bower_components'] },
      {
        name: 'folder-test',
        folderNames: [
          'test',
          'tests',
          'testing',
          'snapshots',
          'spec',
          'specs',
          'testfiles',
          'unit',
          'Unit',
          'functional',
          'Functional',
        ],
      },
      {
        name: 'folder-directive',
        folderNames: ['directive', 'directives'],
      },
      {
        name: 'folder-jinja',
        folderNames: ['jinja', 'jinja2', 'j2'],
        light: true,
      },
      { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
      { name: 'folder-pdm', folderNames: ['pdm-plugins', 'pdm-build'] },
      { name: 'folder-php', folderNames: ['php'] },
      { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
      { name: 'folder-sublime', folderNames: ['sublime'] },
      {
        name: 'folder-docs',
        folderNames: [
          'doc',
          'docs',
          'document',
          'documents',
          'documentation',
          'post',
          'posts',
          'article',
          'articles',
          'wiki',
          'news',
          'blog',
          'knowledge',
          'diary',
          'note',
          'notes',
          'files',
          'Files',
          'file',
          'File',
          'project',
          'Project',
          'projects',
          'Projects',
        ],
      },
      {
        name: 'folder-gh-workflows',
        folderNames: [
          'github/workflows',
          'global_workflows',
          'automations',
          'automation',
          'Automations',
          'Automation',
          'workflows',
          'Workflows',
        ],
      },
      {
        name: 'folder-git',
        folderNames: ['git', 'patches', 'githooks', 'submodules'],
      },
      { name: 'folder-github', folderNames: ['github'] },
      { name: 'folder-gitea', folderNames: ['gitea'] },
      { name: 'folder-gitlab', folderNames: ['gitlab'] },
      { name: 'folder-forgejo', folderNames: ['forgejo'] },
      { name: 'folder-vscode', folderNames: ['vscode', 'vscode-test'] },
      {
        name: 'folder-views',
        folderNames: [
          'view',
          'views',
          'screen',
          'screens',
          'page',
          'pages',
          'public_html',
          'html',
          'inertia',
          'Inertia',
          'inertiapages',
          'InertiaPages',
        ],
      },
      { name: 'folder-vue', folderNames: ['vue'] },
      { name: 'folder-vuepress', folderNames: ['vuepress'] },
      { name: 'folder-expo', folderNames: ['expo', 'expo-shared'] },
      {
        name: 'folder-config',
        folderNames: [
          'cfg',
          'cfgs',
          'conf',
          'confs',
          'config',
          'configs',
          'configuration',
          'configurations',
          'setting',
          'settings',
          'META-INF',
          'option',
          'options',
          'pref',
          'prefs',
          'preference',
          'preferences',
          'props',
          'properties',
        ],
      },
      {
        name: 'folder-i18n',
        folderNames: [
          'i18n',
          'internationalization',
          'lang',
          'langs',
          'language',
          'languages',
          'locale',
          'locales',
          'l10n',
          'localization',
          'translation',
          'translate',
          'translations',
          'tx',
        ],
      },
      {
        name: 'folder-components',
        folderNames: [
          'components',
          'component',
          'Component',
          'widget',
          'widgets',
          'fragments',
          'popovers',
          'Popovers',
        ],
      },
      {
        name: 'folder-verdaccio',
        folderNames: ['verdaccio'],
      },
      { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
      {
        name: 'folder-resource',
        folderNames: [
          'resource',
          'resources',
          'res',
          'asset',
          'assets',
          'static',
          'report',
          'reports',
        ],
      },
      {
        name: 'folder-lib',
        folderNames: [
          'lib',
          'libs',
          'library',
          'libraries',
          'vendor',
          'vendors',
          'third-party',
          'lib64',
        ],
      },
      {
        name: 'folder-theme',
        folderNames: [
          'themes',
          'theme',
          'color',
          'colors',
          'colour',
          'colours',
          'design',
          'designs',
          'palette',
          'palettes',
        ],
      },
      { name: 'folder-webpack', folderNames: ['webpack'] },
      { name: 'folder-global', folderNames: ['global'] },
      {
        name: 'folder-public',
        folderNames: [
          'public',
          'www',
          'wwwroot',
          'web',
          'website',
          'websites',
          'site',
          'browser',
          'browsers',
          'proxy',
          'socialmedia',
          'SocialMedia',
        ],
      },
      {
        name: 'folder-include',
        folderNames: [
          'inc',
          'include',
          'includes',
          'partial',
          'partials',
          'inc64',
          'traits',
          'trait',
          'Traits',
          'Trait',
        ],
      },
      {
        name: 'folder-docker',
        folderNames: ['docker', 'dockerfiles', 'dockerhub'],
      },
      { name: 'folder-nginx', folderNames: ['nginx'] },
      {
        name: 'folder-ngrx-store',
        folderNames: ['store'],
        enabledFor: [IconPack.Ngrx],
      },
      {
        name: 'folder-ngrx-effects',
        folderNames: ['effects'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'cyan-500',
        },
      },
      {
        name: 'folder-ngrx-state',
        folderNames: ['states', 'state'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'lime-800',
        },
      },
      {
        name: 'folder-ngrx-reducer',
        folderNames: ['reducers', 'reducer'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'red-400',
        },
      },
      {
        name: 'folder-ngrx-actions',
        folderNames: ['actions'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'purple-400',
        },
      },
      {
        name: 'folder-ngrx-entities',
        folderNames: ['entities'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'yellow-700',
        },
      },
      {
        name: 'folder-ngrx-selectors',
        folderNames: ['selectors'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'deep-orange-A200',
        },
      },
      {
        name: 'folder-redux-reducer',
        folderNames: ['reducers', 'reducer', 'redux-reducer', 'redux-reducers'],
        enabledFor: [IconPack.Redux],
      },
      {
        name: 'folder-redux-actions',
        folderNames: ['actions'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'purple-400',
        },
      },
      {
        name: 'folder-redux-toolkit',
        folderNames: ['redux', 'redux-toolkit'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'purple-300',
        },
      },
      {
        name: 'folder-redux-selector',
        folderNames: ['selectors', 'selector'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'deep-orange-A200',
        },
      },
      {
        name: 'folder-redux-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'light-green-500',
        },
      },
      {
        name: 'folder-react-components',
        folderNames: [
          'components',
          'react',
          'jsx',
          'reactjs',
          'react-components',
        ],
        enabledFor: [IconPack.React, IconPack.Redux],
      },
      {
        name: 'folder-astro',
        folderNames: ['astro'],
      },
      {
        name: 'folder-database',
        folderNames: [
          'db',
          'data',
          'database',
          'databases',
          'sql',
          'factories',
          'Factories',
        ],
      },
      { name: 'folder-migrations', folderNames: ['migrations', 'migration'] },
      { name: 'folder-log', folderNames: ['log', 'logs', 'logging'] },
      { name: 'folder-target', folderNames: ['target'] },
      {
        name: 'folder-temp',
        folderNames: ['temp', 'tmp', 'cached', 'cache'],
      },
      { name: 'folder-aws', folderNames: ['aws', 'azure', 'gcp'] },
      {
        name: 'folder-audio',
        folderNames: [
          'aud',
          'auds',
          'audio',
          'audios',
          'music',
          'song',
          'songs',
          'sound',
          'sounds',
          'voice',
          'voices',
          'recordings',
          'playlist',
          'playlists',
        ],
      },
      {
        name: 'folder-video',
        folderNames: [
          'vid',
          'vids',
          'video',
          'videos',
          'movie',
          'movies',
          'media',
          'live',
          'Live',
        ],
      },
      {
        name: 'folder-kubernetes',
        folderNames: ['kubernetes', 'k8s'],
      },
      {
        name: 'folder-import',
        folderNames: ['import', 'imports', 'imported'],
      },
      {
        name: 'folder-export',
        folderNames: ['export', 'exports', 'exported'],
      },
      { name: 'folder-wakatime', folderNames: ['wakatime'] },
      { name: 'folder-circleci', folderNames: ['circleci'] },
      {
        name: 'folder-wordpress',
        folderNames: ['wordpress-org', 'wp-content'],
      },
      { name: 'folder-gradle', folderNames: ['gradle'] },
      {
        name: 'folder-coverage',
        folderNames: [
          'coverage',
          'nyc-output',
          'nyc_output',
          'e2e',
          'it',
          'integration-test',
          'integration-tests',
        ],
      },
      {
        name: 'folder-class',
        folderNames: [
          'class',
          'classes',
          'model',
          'models',
          'schemas',
          'schema',
        ],
      },
      {
        name: 'folder-other',
        folderNames: [
          'other',
          'others',
          'misc',
          'miscellaneous',
          'extra',
          'extras',
          'etc',
        ],
      },
      { name: 'folder-lua', folderNames: ['lua'] },
      { name: 'folder-turborepo', folderNames: ['turbo'] },
      {
        name: 'folder-typescript',
        folderNames: [
          'typescript',
          'ts',
          'typings',
          '@types',
          'types',
          'cts',
          'mts',
        ],
      },
      { name: 'folder-graphql', folderNames: ['graphql', 'gql'] },
      {
        name: 'folder-routes',
        folderNames: [
          'routes',
          'router',
          'routers',
          'navigation',
          'navigations',
          'routing',
        ],
      },
      { name: 'folder-ci', folderNames: ['ci'] },
      {
        name: 'folder-eslint',
        folderNames: [
          'eslint',
          'eslint-plugin',
          'eslint-plugins',
          'eslint-config',
          'eslint-configs',
        ],
      },
      {
        name: 'folder-benchmark',
        folderNames: [
          'benchmark',
          'benchmarks',
          'bench',
          'benches',
          'performance',
          'perf',
          'profiling',
          'measure',
          'measures',
          'measurement',
        ],
      },
      {
        name: 'folder-messages',
        folderNames: [
          'messages',
          'messaging',
          'forum',
          'chat',
          'chats',
          'conversation',
          'conversations',
          'dialog',
          'dialogs',
          'whatsapp',
          'Whatsapp',
          'supportchat',
          'SupportChat',
          'whapicloud',
          'WhapiCloud',
          'whapi',
          'Whapi',
          'supportmessage',
          'SupportMessage',
          'Messages',
        ],
      },
      { name: 'folder-less', folderNames: ['less'] },
      {
        name: 'folder-gulp',
        folderNames: [
          'gulp',
          'gulp-tasks',
          'gulpfile.js',
          'gulpfile.mjs',
          'gulpfile.ts',
          'gulpfile.babel.js',
          'gulpfiles',
        ],
      },
      {
        name: 'folder-python',
        folderNames: ['python', 'pycache', 'pytest_cache'],
      },
      {
        name: 'folder-r',
        folderNames: ['r'],
      },
      {
        name: 'folder-sandbox',
        folderNames: ['sandbox', 'sandboxes', 'playground', 'playgrounds'],
      },
      {
        name: 'folder-scons',
        folderNames: ['scons', 'sconf_temp', 'scons_cache'],
      },
      {
        name: 'folder-mojo',
        folderNames: ['mojo'],
      },
      { name: 'folder-moon', folderNames: ['moon'] },
      {
        name: 'folder-debug',
        folderNames: ['debug', 'debugger', 'debugging'],
      },
      { name: 'folder-fastlane', folderNames: ['fastlane'] },
      {
        name: 'folder-plugin',
        folderNames: [
          'plugin',
          'plugins',
          'mod',
          'mods',
          'modding',
          'extension',
          'extensions',
          'addon',
          'addons',
          'addin',
          'addins',
          'module',
          'modules',
        ],
      },
      {
        name: 'folder-middleware',
        folderNames: ['middleware', 'middlewares'],
      },
      {
        name: 'folder-controller',
        folderNames: [
          'controller',
          'controllers',
          'controls',
          'service',
          'services',
          'provider',
          'providers',
          'handler',
          'handlers',
        ],
      },
      { name: 'folder-ansible', folderNames: ['ansible'] },
      {
        name: 'folder-server',
        folderNames: [
          'server',
          'servers',
          'backend',
          'backends',
          'inventory',
          'inventories',
          'infrastructure',
          'infra',
          'station',
          'Station',
        ],
      },
      {
        name: 'folder-client',
        folderNames: [
          'client',
          'clients',
          'frontend',
          'frontends',
          'pwa',
          'spa',
        ],
      },
      {
        name: 'folder-tasks',
        folderNames: ['tasks', 'tickets', 'lists', 'Lists', 'list', 'List'],
      },
      { name: 'folder-android', folderNames: ['android'] },
      { name: 'folder-ios', folderNames: ['ios'] },
      {
        name: 'folder-ui',
        folderNames: ['presentation', 'gui', 'ui', 'ux'],
      },
      { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
      {
        name: 'folder-download',
        folderNames: ['downloads', 'download', 'downloader', 'downloaders'],
      },
      {
        name: 'folder-tools',
        folderNames: [
          'tools',
          'toolkit',
          'toolkits',
          'toolbox',
          'toolboxes',
          'tooling',
          'devtools',
          'kit',
          'kits',
          'electrical',
          'Electrical',
          'equipment',
          'Equipment',
          'equipments',
          'Equipments',
        ],
      },
      {
        name: 'folder-helper',
        folderNames: ['helpers', 'helper', 'support', 'Support'],
      },
      { name: 'folder-serverless', folderNames: ['serverless'] },
      {
        name: 'folder-api',
        folderNames: [
          'api',
          'apis',
          'restapi',
          'http',
          'Http',
          'protocol',
          'Protocol',
          'webhook',
          'Webhook',
          'requests',
          'Requests',
          'webhooks',
          'Webhooks',
        ],
      },
      {
        name: 'folder-app',
        folderNames: ['app', 'apps', 'application', 'applications'],
      },
      {
        name: 'folder-apollo',
        folderNames: [
          'apollo',
          'apollo-client',
          'apollo-cache',
          'apollo-config',
        ],
      },
      {
        name: 'folder-archive',
        folderNames: ['arc', 'arcs', 'archive', 'archives', 'archival'],
      },
      {
        name: 'folder-backup',
        folderNames: [
          'bkp',
          'bkps',
          'bak',
          'baks',
          'backup',
          'backups',
          'back-up',
          'back-ups',
          'history',
          'histories',
        ],
      },
      { name: 'folder-batch', folderNames: ['batch', 'batchs', 'batches'] },
      { name: 'folder-buildkite', folderNames: ['buildkite'] },
      { name: 'folder-cluster', folderNames: ['cluster', 'clusters'] },
      {
        name: 'folder-command',
        folderNames: [
          'command',
          'commands',
          'commandline',
          'cmd',
          'cli',
          'clis',
        ],
      },
      {
        name: 'folder-constant',
        folderNames: ['constant', 'constants', 'const', 'consts'],
      },
      {
        name: 'folder-container',
        folderNames: ['container', 'containers', 'devcontainer'],
      },
      { name: 'folder-content', folderNames: ['content', 'contents'] },
      { name: 'folder-context', folderNames: ['context', 'contexts'] },
      { name: 'folder-core', folderNames: ['core'] },
      { name: 'folder-delta', folderNames: ['delta', 'deltas', 'changes'] },
      { name: 'folder-dump', folderNames: ['dump', 'dumps'] },
      {
        name: 'folder-examples',
        folderNames: [
          'demo',
          'demos',
          'example',
          'examples',
          'sample',
          'samples',
          'sample-data',
        ],
      },
      {
        name: 'folder-environment',
        folderNames: ['env', 'envs', 'environment', 'environments', 'venv'],
      },
      {
        name: 'folder-functions',
        folderNames: [
          'func',
          'funcs',
          'function',
          'functions',
          'lambda',
          'lambdas',
          'logic',
          'math',
          'maths',
          'calc',
          'calcs',
          'calculation',
          'calculations',
          'composable',
          'composables',
        ],
      },
      {
        name: 'folder-generator',
        folderNames: [
          'generator',
          'generators',
          'generated',
          'cfn-gen',
          'gen',
          'gens',
          'auto',
        ],
      },
      {
        name: 'folder-hook',
        folderNames: ['hook', 'hooks'],
      },
      {
        name: 'folder-trigger',
        folderNames: ['trigger', 'triggers'],
      },
      { name: 'folder-job', folderNames: ['job', 'jobs'] },
      {
        name: 'folder-keys',
        folderNames: [
          'key',
          'keys',
          'token',
          'tokens',
          'jwt',
          'secret',
          'secrets',
        ],
      },
      {
        name: 'folder-layout',
        folderNames: [
          'layout',
          'layouts',
          'menu',
          'Menu',
          'sections',
          'Sections',
          'structure',
          'Structure',
          'loadscreen',
          'LoadScreen',
          'pagelayout',
          'PageLayout',
        ],
      },
      {
        name: 'folder-mail',
        folderNames: ['mail', 'mails', 'email', 'emails', 'smtp', 'mailers'],
      },
      {
        name: 'folder-mappings',
        folderNames: [
          'mappings',
          'mapping',
          'location',
          'Location',
          'address',
          'Address',
        ],
      },
      { name: 'folder-meta', folderNames: ['meta', 'metadata'] },
      {
        name: 'folder-changesets',
        folderNames: ['changesets', 'changeset'],
      },
      {
        name: 'folder-packages',
        folderNames: [
          'package',
          'packages',
          'pkg',
          'pkgs',
          'serverpackages',
          'devpackages',
          'dependencies',
        ],
      },
      { name: 'folder-shared', folderNames: ['shared', 'common'] },
      {
        name: 'folder-shader',
        folderNames: ['glsl', 'hlsl', 'shader', 'shaders'],
      },
      { name: 'folder-stack', folderNames: ['stack', 'stacks'] },
      {
        name: 'folder-template',
        folderNames: [
          'template',
          'templates',
          'github/ISSUE_TEMPLATE',
          'github/PULL_REQUEST_TEMPLATE',
          'stubs',
          'stub',
          'Stubs',
          'Stub',
        ],
      },
      {
        name: 'folder-utils',
        folderNames: ['util', 'utils', 'utility', 'utilities'],
      },
      { name: 'folder-supabase', folderNames: ['supabase'] },
      { name: 'folder-private', folderNames: ['private'] },
      {
        name: 'folder-linux',
        folderNames: [
          'linux',
          'linuxbsd',
          'unix',
          'wsl',
          'ubuntu',
          'deb',
          'debian',
          'deepin',
          'centos',
          'popos',
          'mint',
        ],
      },
      {
        name: 'folder-windows',
        folderNames: [
          'windows',
          'win',
          'win32',
          'windows11',
          'windows10',
          'windowsxp',
          'windowsnt',
          'win11',
          'win10',
          'winxp',
          'winnt',
        ],
      },
      {
        name: 'folder-macos',
        folderNames: [
          'macos',
          'mac',
          'osx',
          'DS_Store',
          'iPhone',
          'iPad',
          'iPod',
          'macbook',
          'macbook-air',
          'macosx',
          'apple',
        ],
      },
      {
        name: 'folder-error',
        folderNames: ['error', 'errors', 'err', 'errs', 'crash', 'crashes'],
      },
      {
        name: 'folder-event',
        folderNames: [
          'event',
          'events',
          'observers',
          'observer',
          'Observers',
          'Observer',
          'calendar',
          'Calendar',
          'planner',
          'Planner',
        ],
      },
      {
        name: 'folder-secure',
        folderNames: [
          'auth',
          'authentication',
          'secure',
          'security',
          'cert',
          'certs',
          'certificate',
          'certificates',
          'ssl',
          'cipher',
          'cypher',
          'tls',
          'anticaptcha',
          'Anticaptcha',
        ],
      },
      { name: 'folder-custom', folderNames: ['custom', 'customs'] },
      {
        name: 'folder-mock',
        folderNames: [
          'draft',
          'drafts',
          'mock',
          'mocks',
          'fixture',
          'fixtures',
          'concept',
          'concepts',
          'sketch',
          'sketches',
        ],
      },
      {
        name: 'folder-syntax',
        folderNames: ['syntax', 'syntaxes', 'spellcheck', 'spellcheckers'],
      },
      { name: 'folder-vm', folderNames: ['vm', 'vms'] },
      { name: 'folder-stylus', folderNames: ['stylus'] },
      { name: 'folder-flow', folderNames: ['flow-typed'] },
      {
        name: 'folder-rules',
        folderNames: [
          'rule',
          'rules',
          'validation',
          'validations',
          'validator',
          'validators',
        ],
      },
      {
        name: 'folder-review',
        folderNames: [
          'review',
          'reviews',
          'revisal',
          'revisals',
          'reviewed',
          'preview',
          'previews',
        ],
      },
      {
        name: 'folder-animation',
        folderNames: [
          'anim',
          'anims',
          'animation',
          'animations',
          'animated',
          'motion',
          'motions',
          'transition',
          'transitions',
          'easing',
          'easings',
        ],
      },
      { name: 'folder-guard', folderNames: ['guard', 'guards'] },
      { name: 'folder-prisma', folderNames: ['prisma', 'prisma/schema'] },
      {
        name: 'folder-pipe',
        folderNames: ['pipe', 'pipes', 'pipeline', 'pipelines'],
      },
      {
        name: 'folder-interceptor',
        folderNames: ['interceptor', 'interceptors'],
      },
      { name: 'folder-svg', folderNames: ['svg', 'svgs', 'vector', 'vectors'] },
      {
        name: 'folder-vuex-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Vuex],
      },
      {
        name: 'folder-nuxt',
        folderNames: ['nuxt'],
      },
      {
        name: 'folder-vue-directives',
        folderNames: ['directives'],
        enabledFor: [IconPack.Vuex, IconPack.Vue],
      },
      {
        name: 'folder-vue',
        folderNames: ['components'],
        enabledFor: [IconPack.Vuex, IconPack.Vue],
      },
      { name: 'folder-terraform', folderNames: ['terraform'] },
      {
        name: 'folder-mobile',
        folderNames: [
          'mobile',
          'mobiles',
          'portable',
          'portability',
          'phone',
          'phones',
        ],
      },
      { name: 'folder-stencil', folderNames: ['stencil'] },
      { name: 'folder-firebase', folderNames: ['firebase'] },
      {
        name: 'folder-firestore',
        folderNames: ['firestore', 'cloud-firestore', 'firebase-firestore'],
      },
      {
        name: 'folder-cloud-functions',
        folderNames: [
          'cloud-functions',
          'cloudfunctions',
          'firebase-cloud-functions',
          'firebase-cloudfunctions',
        ],
      },
      { name: 'folder-svelte', folderNames: ['svelte', 'svelte-kit'] },
      {
        name: 'folder-update',
        folderNames: ['update', 'updates', 'upgrade', 'upgrades'],
      },
      { name: 'folder-intellij', folderNames: ['idea'], light: true },
      {
        name: 'folder-azure-pipelines',
        folderNames: ['azure-pipelines', 'azure-pipelines-ci'],
      },
      { name: 'folder-mjml', folderNames: ['mjml'] },
      {
        name: 'folder-admin',
        folderNames: [
          'admin',
          'admins',
          'manager',
          'managers',
          'moderator',
          'moderators',
          'concessionaire',
          'Concessionaire',
        ],
      },
      {
        name: 'folder-jupyter',
        folderNames: ['jupyter', 'notebook', 'notebooks', 'ipynb'],
      },
      { name: 'folder-scala', folderNames: ['scala'] },
      {
        name: 'folder-connection',
        folderNames: [
          'connection',
          'connections',
          'integration',
          'integrations',
          'remote',
          'remotes',
        ],
      },
      { name: 'folder-quasar', folderNames: ['quasar'] },
      { name: 'folder-next', folderNames: ['next'] },
      {
        name: 'folder-dal',
        folderNames: ['dal', 'data-access', 'data-access-layer'],
      },
      { name: 'folder-cobol', folderNames: ['cobol'] },
      { name: 'folder-yarn', folderNames: ['yarn'] },
      { name: 'folder-husky', folderNames: ['husky'] },
      {
        name: 'folder-storybook',
        folderNames: ['storybook', 'stories'],
      },
      { name: 'folder-base', folderNames: ['base', 'bases'] },
      {
        name: 'folder-cart',
        folderNames: ['cart', 'shopping-cart', 'shopping', 'shop'],
      },
      {
        name: 'folder-home',
        folderNames: ['home', 'start', 'main', 'landing'],
      },
      {
        name: 'folder-project',
        folderNames: ['project', 'projects', 'proj', 'projs'],
      },
      {
        name: 'folder-prompts',
        folderNames: ['prompt', 'prompts'],
      },
      {
        name: 'folder-interface',
        folderNames: ['interface', 'interfaces'],
      },
      { name: 'folder-netlify', folderNames: ['netlify'] },
      {
        name: 'folder-enum',
        folderNames: ['enum', 'enums'],
      },
      {
        name: 'folder-contract',
        folderNames: [
          'pact',
          'pacts',
          'contract',
          'contracts',
          'contract-testing',
          'contract-test',
          'contract-tests',
          'finance',
          'Finance',
          'price',
          'Price',
          'efi',
          'Efi',
          'inter',
          'Inter',
          'banks',
          'Banks',
          'promotion',
          'Promotion',
        ],
      },
      {
        name: 'folder-helm',
        folderNames: ['helm', 'helmchart', 'helmcharts'],
      },
      {
        name: 'folder-queue',
        folderNames: ['queue', 'queues', 'bull', 'mq'],
      },
      {
        name: 'folder-vercel',
        folderNames: ['vercel', 'now'],
      },
      {
        name: 'folder-cypress',
        folderNames: ['cypress'],
      },
      {
        name: 'folder-decorators',
        folderNames: ['decorator', 'decorators'],
      },
      {
        name: 'folder-java',
        folderNames: ['java'],
      },
      {
        name: 'folder-resolver',
        folderNames: ['resolver', 'resolvers'],
      },
      {
        name: 'folder-angular',
        folderNames: ['angular'],
      },
      {
        name: 'folder-unity',
        folderNames: ['unity'],
      },
      {
        name: 'folder-pdf',
        folderNames: ['pdf', 'pdfs'],
      },
      {
        name: 'folder-proto',
        folderNames: ['protobuf', 'protobufs', 'proto', 'protos'],
      },
      {
        name: 'folder-plastic',
        folderNames: ['plastic'],
      },
      {
        name: 'folder-gamemaker',
        folderNames: ['gamemaker', 'gamemaker2'],
      },
      {
        name: 'folder-mercurial',
        folderNames: ['hg', 'hghooks', 'hgext'],
      },
      {
        name: 'folder-godot',
        folderNames: ['godot', 'godot-cpp'],
      },
      {
        name: 'folder-lottie',
        folderNames: ['lottie', 'lotties', 'lottiefiles'],
      },
      {
        name: 'folder-taskfile',
        folderNames: ['taskfile', 'taskfiles'],
      },
      {
        name: 'folder-drizzle',
        folderNames: ['drizzle'],
      },
      {
        name: 'folder-cloudflare',
        folderNames: ['cloudflare'],
      },
      {
        name: 'folder-seeders',
        folderNames: ['seeds', 'seeders', 'seed', 'seeding'],
      },
      {
        name: 'folder-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Angular],
      },
      { name: 'folder-bicep', folderNames: ['bicep'] },
      { name: 'folder-snapcraft', folderNames: ['snap', 'snapcraft'] },
      {
        name: 'folder-development',
        folderNames: ['dev', 'development'],
        clone: {
          base: 'folder-src',
          color: 'light-blue-700',
        },
      },
      { name: 'folder-flutter', folderNames: ['flutter'] },
      { name: 'folder-snippet', folderNames: ['snippet', 'snippets'] },
      { name: 'folder-element', folderNames: ['element', 'elements'] },
      {
        name: 'folder-src-tauri',
        folderNames: ['src-tauri'],
      },
      {
        name: 'folder-favicon',
        folderNames: ['favicon', 'favicons'],
      },
      {
        name: 'folder-features',
        folderNames: ['feature', 'features', 'feat', 'feats'],
      },
      {
        name: 'folder-lefthook',
        folderNames: ['lefthook', 'lefthook-local'],
      },
      {
        name: 'folder-bloc',
        folderNames: ['bloc', 'cubit', 'blocs', 'cubits'],
      },
      {
        name: 'folder-powershell',
        folderNames: ['powershell', 'ps', 'ps1'],
      },
      {
        name: 'folder-repository',
        folderNames: ['repository', 'repositories', 'repo', 'repos'],
      },
      {
        name: 'folder-luau',
        folderNames: ['luau'],
      },
      { name: 'folder-obsidian', folderNames: ['obsidian'] },
      { name: 'folder-trash', folderNames: ['trash'] },
      { name: 'folder-cline', folderNames: ['cline_docs'] },
      { name: 'folder-liquibase', folderNames: ['liquibase'] },
      { name: 'folder-dart', folderNames: ['dart', 'dart_tool', 'dart_tools'] },
      { name: 'folder-zeabur', folderNames: ['zeabur'] },
      { name: 'folder-kusto', folderNames: ['kusto', 'kql'] },
      { name: 'folder-policy', folderNames: ['policy', 'policies'] },
      { name: 'folder-attachment', folderNames: ['attachment', 'attachments'] },
      {
        name: 'folder-bibliography',
        folderNames: ['bibliography', 'bibliographies', 'book', 'books'],
      },
      { name: 'folder-link', folderNames: ['link', 'links'] },
      { name: 'folder-pytorch', folderNames: ['pytorch', 'torch'] },
      {
        name: 'folder-blender',
        folderNames: [
          'blender',
          'blender-assets',
          'blender-files',
          'blender-project',
          'blender-models',
        ],
      },
      {
        name: 'folder-atom',
        folderNames: ['atoms', 'atom'],
      },
      {
        name: 'folder-molecule',
        folderNames: ['molecules', 'molecule'],
      },
      {
        name: 'folder-organism',
        folderNames: ['organisms', 'organism'],
      },
      {
        name: 'folder-claude',
        folderNames: ['.claude'],
      },
      {
        name: 'folder-cursor',
        folderNames: ['.cursor'],
        light: true,
      },
      {
        name: 'folder-gemini-ai',
        folderNames: ['.gemini', 'gemini', 'gemini-ai', 'geminiai'],
      },
      {
        name: 'folder-input',
        folderNames: ['input', 'inputs', 'io', 'in'],
      },
      {
        name: 'folder-salt',
        folderNames: ['salt', 'saltstack'],
      },
      {
        name: 'folder-simulations',
        folderNames: ['simulations', 'simulation', 'sim', 'sims'],
      },
      {
        name: 'folder-metro',
        folderNames: ['metro'],
      },
      {
        name: 'folder-filter',
        folderNames: ['filter', 'filters'],
      },
      {
        name: 'folder-toc',
        folderNames: ['toc', 'table-of-contents'],
      },
      {
        name: 'folder-cue',
        folderNames: ['cue', 'cues'],
      },
      {
        name: 'folder-license',
        folderNames: ['license', 'licenses'],
      },
      { name: 'folder-form', folderNames: ['form', 'forms'] },
      {
        name: 'folder-deprecated',
        folderNames: ['deprecated'],
        clone: {
          base: 'folder-archive',
          color: 'gray-700',
        },
      },
      {
        name: 'folder-scrap',
        folderNames: ['scrap'],
        clone: {
          base: 'folder-trash',
          color: 'gray-700',
        },
      },
      {
        name: 'folder-skills',
        folderNames: ['skill', 'skills'],
      },
      {
        name: 'folder-instructions',
        folderNames: ['instruction', 'instructions'],
        clone: {
          base: 'folder-meta',
          color: 'cyan-A700',
        },
      },

      {
        name: 'folder-acf-open',
        folderNames: ['acf-open'],
      },
      {
        name: 'folder-acf',
        folderNames: ['acf'],
      },
      {
        name: 'folder-acre-open',
        folderNames: ['acre-open'],
      },
      {
        name: 'folder-acre',
        folderNames: ['acre'],
      },
      {
        name: 'folder-active-open',
        folderNames: ['active-open'],
      },
      {
        name: 'folder-active',
        folderNames: ['active'],
      },
      {
        name: 'folder-activities-open',
        folderNames: ['activities-open'],
      },
      {
        name: 'folder-activities',
        folderNames: ['activities'],
      },
      {
        name: 'folder-adapter-open',
        folderNames: ['adapter-open'],
      },
      {
        name: 'folder-adapter',
        folderNames: ['adapter'],
      },
      {
        name: 'folder-add-open',
        folderNames: ['add-open'],
      },
      {
        name: 'folder-add',
        folderNames: ['add'],
      },
      {
        name: 'folder-admin-open-open',
        folderNames: ['admin-open-open'],
      },
      {
        name: 'folder-admin-open',
        folderNames: ['admin-open'],
      },
      {
        name: 'folder-adr-open',
        folderNames: ['adr-open'],
      },
      {
        name: 'folder-adr',
        folderNames: ['adr'],
      },
      {
        name: 'folder-adwaita-activities-open',
        folderNames: ['adwaita-activities-open'],
      },
      {
        name: 'folder-adwaita-activities',
        folderNames: ['adwaita-activities'],
      },
      {
        name: 'folder-adwaita-android-open',
        folderNames: ['adwaita-android-open'],
      },
      {
        name: 'folder-adwaita-android',
        folderNames: ['adwaita-android'],
      },
      {
        name: 'folder-adwaita-apple-open',
        folderNames: ['adwaita-apple-open'],
      },
      {
        name: 'folder-adwaita-apple',
        folderNames: ['adwaita-apple'],
      },
      {
        name: 'folder-adwaita-applications-open',
        folderNames: ['adwaita-applications-open'],
      },
      {
        name: 'folder-adwaita-applications',
        folderNames: ['adwaita-applications'],
      },
      {
        name: 'folder-adwaita-arduino-open',
        folderNames: ['adwaita-arduino-open'],
      },
      {
        name: 'folder-adwaita-arduino',
        folderNames: ['adwaita-arduino'],
      },
      {
        name: 'folder-adwaita-backup-open',
        folderNames: ['adwaita-backup-open'],
      },
      {
        name: 'folder-adwaita-backup',
        folderNames: ['adwaita-backup'],
      },
      {
        name: 'folder-adwaita-books-open',
        folderNames: ['adwaita-books-open'],
      },
      {
        name: 'folder-adwaita-books',
        folderNames: ['adwaita-books'],
      },
      {
        name: 'folder-adwaita-cd-open',
        folderNames: ['adwaita-cd-open'],
      },
      {
        name: 'folder-adwaita-cd',
        folderNames: ['adwaita-cd'],
      },
      {
        name: 'folder-adwaita-code-open',
        folderNames: ['adwaita-code-open'],
      },
      {
        name: 'folder-adwaita-code',
        folderNames: ['adwaita-code'],
      },
      {
        name: 'folder-adwaita-desktop-open',
        folderNames: ['adwaita-desktop-open'],
      },
      {
        name: 'folder-adwaita-desktop',
        folderNames: ['adwaita-desktop'],
      },
      {
        name: 'folder-adwaita-development-open',
        folderNames: ['adwaita-development-open'],
      },
      {
        name: 'folder-adwaita-development',
        folderNames: ['adwaita-development'],
      },
      {
        name: 'folder-adwaita-docker-open',
        folderNames: ['adwaita-docker-open'],
      },
      {
        name: 'folder-adwaita-docker',
        folderNames: ['adwaita-docker'],
      },
      {
        name: 'folder-adwaita-documents-open-open',
        folderNames: ['adwaita-documents-open-open'],
      },
      {
        name: 'folder-adwaita-documents-open',
        folderNames: ['adwaita-documents-open'],
      },
      {
        name: 'folder-adwaita-documents',
        folderNames: ['adwaita-documents'],
      },
      {
        name: 'folder-adwaita-download-open-open',
        folderNames: ['adwaita-download-open-open'],
      },
      {
        name: 'folder-adwaita-download-open',
        folderNames: ['adwaita-download-open'],
      },
      {
        name: 'folder-adwaita-download',
        folderNames: ['adwaita-download'],
      },
      {
        name: 'folder-adwaita-downloads-open',
        folderNames: ['adwaita-downloads-open'],
      },
      {
        name: 'folder-adwaita-downloads',
        folderNames: ['adwaita-downloads'],
      },
      {
        name: 'folder-adwaita-drag-accept-open',
        folderNames: ['adwaita-drag-accept-open'],
      },
      {
        name: 'folder-adwaita-drag-accept',
        folderNames: ['adwaita-drag-accept'],
      },
      {
        name: 'folder-adwaita-dropbox-open',
        folderNames: ['adwaita-dropbox-open'],
      },
      {
        name: 'folder-adwaita-dropbox',
        folderNames: ['adwaita-dropbox'],
      },
      {
        name: 'folder-adwaita-favorites-open',
        folderNames: ['adwaita-favorites-open'],
      },
      {
        name: 'folder-adwaita-favorites',
        folderNames: ['adwaita-favorites'],
      },
      {
        name: 'folder-adwaita-games-open',
        folderNames: ['adwaita-games-open'],
      },
      {
        name: 'folder-adwaita-games',
        folderNames: ['adwaita-games'],
      },
      {
        name: 'folder-adwaita-git-open',
        folderNames: ['adwaita-git-open'],
      },
      {
        name: 'folder-adwaita-git',
        folderNames: ['adwaita-git'],
      },
      {
        name: 'folder-adwaita-github-open',
        folderNames: ['adwaita-github-open'],
      },
      {
        name: 'folder-adwaita-github',
        folderNames: ['adwaita-github'],
      },
      {
        name: 'folder-adwaita-gitlab-open',
        folderNames: ['adwaita-gitlab-open'],
      },
      {
        name: 'folder-adwaita-gitlab',
        folderNames: ['adwaita-gitlab'],
      },
      {
        name: 'folder-adwaita-gnome-open',
        folderNames: ['adwaita-gnome-open'],
      },
      {
        name: 'folder-adwaita-gnome',
        folderNames: ['adwaita-gnome'],
      },
      {
        name: 'folder-adwaita-google-drive-open',
        folderNames: ['adwaita-google-drive-open'],
      },
      {
        name: 'folder-adwaita-google-drive',
        folderNames: ['adwaita-google-drive'],
      },
      {
        name: 'folder-adwaita-image-people-open',
        folderNames: ['adwaita-image-people-open'],
      },
      {
        name: 'folder-adwaita-image-people',
        folderNames: ['adwaita-image-people'],
      },
      {
        name: 'folder-adwaita-important-open',
        folderNames: ['adwaita-important-open'],
      },
      {
        name: 'folder-adwaita-important',
        folderNames: ['adwaita-important'],
      },
      {
        name: 'folder-adwaita-java-open',
        folderNames: ['adwaita-java-open'],
      },
      {
        name: 'folder-adwaita-java',
        folderNames: ['adwaita-java'],
      },
      {
        name: 'folder-adwaita-kde-open',
        folderNames: ['adwaita-kde-open'],
      },
      {
        name: 'folder-adwaita-kde',
        folderNames: ['adwaita-kde'],
      },
      {
        name: 'folder-adwaita-linux-open',
        folderNames: ['adwaita-linux-open'],
      },
      {
        name: 'folder-adwaita-linux',
        folderNames: ['adwaita-linux'],
      },
      {
        name: 'folder-adwaita-locked-open',
        folderNames: ['adwaita-locked-open'],
      },
      {
        name: 'folder-adwaita-locked',
        folderNames: ['adwaita-locked'],
      },
      {
        name: 'folder-adwaita-mail-cloud-open',
        folderNames: ['adwaita-mail-cloud-open'],
      },
      {
        name: 'folder-adwaita-mail-cloud',
        folderNames: ['adwaita-mail-cloud'],
      },
      {
        name: 'folder-adwaita-mail-open',
        folderNames: ['adwaita-mail-open'],
      },
      {
        name: 'folder-adwaita-mail',
        folderNames: ['adwaita-mail'],
      },
      {
        name: 'folder-adwaita-mega-open',
        folderNames: ['adwaita-mega-open'],
      },
      {
        name: 'folder-adwaita-mega',
        folderNames: ['adwaita-mega'],
      },
      {
        name: 'folder-adwaita-meocloud-open',
        folderNames: ['adwaita-meocloud-open'],
      },
      {
        name: 'folder-adwaita-meocloud',
        folderNames: ['adwaita-meocloud'],
      },
      {
        name: 'folder-adwaita-music-open-open',
        folderNames: ['adwaita-music-open-open'],
      },
      {
        name: 'folder-adwaita-music-open',
        folderNames: ['adwaita-music-open'],
      },
      {
        name: 'folder-adwaita-music',
        folderNames: ['adwaita-music'],
      },
      {
        name: 'folder-adwaita-network-open',
        folderNames: ['adwaita-network-open'],
      },
      {
        name: 'folder-adwaita-network',
        folderNames: ['adwaita-network'],
      },
      {
        name: 'folder-adwaita-nextcloud-open',
        folderNames: ['adwaita-nextcloud-open'],
      },
      {
        name: 'folder-adwaita-nextcloud',
        folderNames: ['adwaita-nextcloud'],
      },
      {
        name: 'folder-adwaita-notes-open',
        folderNames: ['adwaita-notes-open'],
      },
      {
        name: 'folder-adwaita-notes',
        folderNames: ['adwaita-notes'],
      },
      {
        name: 'folder-adwaita-obsidian-open',
        folderNames: ['adwaita-obsidian-open'],
      },
      {
        name: 'folder-adwaita-obsidian',
        folderNames: ['adwaita-obsidian'],
      },
      {
        name: 'folder-adwaita-onedrive-open',
        folderNames: ['adwaita-onedrive-open'],
      },
      {
        name: 'folder-adwaita-onedrive',
        folderNames: ['adwaita-onedrive'],
      },
      {
        name: 'folder-adwaita-open-open',
        folderNames: ['adwaita-open-open'],
      },
      {
        name: 'folder-adwaita-open',
        folderNames: ['adwaita-open'],
      },
      {
        name: 'folder-adwaita-owncloud-open',
        folderNames: ['adwaita-owncloud-open'],
      },
      {
        name: 'folder-adwaita-owncloud',
        folderNames: ['adwaita-owncloud'],
      },
      {
        name: 'folder-adwaita-pcloud-open',
        folderNames: ['adwaita-pcloud-open'],
      },
      {
        name: 'folder-adwaita-pcloud',
        folderNames: ['adwaita-pcloud'],
      },
      {
        name: 'folder-adwaita-photo-open',
        folderNames: ['adwaita-photo-open'],
      },
      {
        name: 'folder-adwaita-photo',
        folderNames: ['adwaita-photo'],
      },
      {
        name: 'folder-adwaita-pictures-open-open',
        folderNames: ['adwaita-pictures-open-open'],
      },
      {
        name: 'folder-adwaita-pictures-open',
        folderNames: ['adwaita-pictures-open'],
      },
      {
        name: 'folder-adwaita-pictures',
        folderNames: ['adwaita-pictures'],
      },
      {
        name: 'folder-adwaita-print-open',
        folderNames: ['adwaita-print-open'],
      },
      {
        name: 'folder-adwaita-print',
        folderNames: ['adwaita-print'],
      },
      {
        name: 'folder-adwaita-private-open',
        folderNames: ['adwaita-private-open'],
      },
      {
        name: 'folder-adwaita-private',
        folderNames: ['adwaita-private'],
      },
      {
        name: 'folder-adwaita-projects-open',
        folderNames: ['adwaita-projects-open'],
      },
      {
        name: 'folder-adwaita-projects',
        folderNames: ['adwaita-projects'],
      },
      {
        name: 'folder-adwaita-public-open',
        folderNames: ['adwaita-public-open'],
      },
      {
        name: 'folder-adwaita-public',
        folderNames: ['adwaita-public'],
      },
      {
        name: 'folder-adwaita-publicshare-open-open',
        folderNames: ['adwaita-publicshare-open-open'],
      },
      {
        name: 'folder-adwaita-publicshare-open',
        folderNames: ['adwaita-publicshare-open'],
      },
      {
        name: 'folder-adwaita-remote-open-open',
        folderNames: ['adwaita-remote-open-open'],
      },
      {
        name: 'folder-adwaita-remote-open',
        folderNames: ['adwaita-remote-open'],
      },
      {
        name: 'folder-adwaita-remote',
        folderNames: ['adwaita-remote'],
      },
      {
        name: 'folder-adwaita-script-open',
        folderNames: ['adwaita-script-open'],
      },
      {
        name: 'folder-adwaita-script',
        folderNames: ['adwaita-script'],
      },
      {
        name: 'folder-adwaita-snap-open',
        folderNames: ['adwaita-snap-open'],
      },
      {
        name: 'folder-adwaita-snap',
        folderNames: ['adwaita-snap'],
      },
      {
        name: 'folder-adwaita-steam-open',
        folderNames: ['adwaita-steam-open'],
      },
      {
        name: 'folder-adwaita-steam',
        folderNames: ['adwaita-steam'],
      },
      {
        name: 'folder-adwaita-sync-open',
        folderNames: ['adwaita-sync-open'],
      },
      {
        name: 'folder-adwaita-sync',
        folderNames: ['adwaita-sync'],
      },
      {
        name: 'folder-adwaita-syncthing-open',
        folderNames: ['adwaita-syncthing-open'],
      },
      {
        name: 'folder-adwaita-syncthing',
        folderNames: ['adwaita-syncthing'],
      },
      {
        name: 'folder-adwaita-systemd-open',
        folderNames: ['adwaita-systemd-open'],
      },
      {
        name: 'folder-adwaita-systemd',
        folderNames: ['adwaita-systemd'],
      },
      {
        name: 'folder-adwaita-tar-open',
        folderNames: ['adwaita-tar-open'],
      },
      {
        name: 'folder-adwaita-tar',
        folderNames: ['adwaita-tar'],
      },
      {
        name: 'folder-adwaita-templates-open-open',
        folderNames: ['adwaita-templates-open-open'],
      },
      {
        name: 'folder-adwaita-templates-open',
        folderNames: ['adwaita-templates-open'],
      },
      {
        name: 'folder-adwaita-templates',
        folderNames: ['adwaita-templates'],
      },
      {
        name: 'folder-adwaita-torrent-open',
        folderNames: ['adwaita-torrent-open'],
      },
      {
        name: 'folder-adwaita-torrent',
        folderNames: ['adwaita-torrent'],
      },
      {
        name: 'folder-adwaita-unlocked-open',
        folderNames: ['adwaita-unlocked-open'],
      },
      {
        name: 'folder-adwaita-unlocked',
        folderNames: ['adwaita-unlocked'],
      },
      {
        name: 'folder-adwaita-vbox-open',
        folderNames: ['adwaita-vbox-open'],
      },
      {
        name: 'folder-adwaita-vbox',
        folderNames: ['adwaita-vbox'],
      },
      {
        name: 'folder-adwaita-video-open',
        folderNames: ['adwaita-video-open'],
      },
      {
        name: 'folder-adwaita-video',
        folderNames: ['adwaita-video'],
      },
      {
        name: 'folder-adwaita-videos-open-open',
        folderNames: ['adwaita-videos-open-open'],
      },
      {
        name: 'folder-adwaita-videos-open',
        folderNames: ['adwaita-videos-open'],
      },
      {
        name: 'folder-adwaita-videos',
        folderNames: ['adwaita-videos'],
      },
      {
        name: 'folder-adwaita-visiting-open',
        folderNames: ['adwaita-visiting-open'],
      },
      {
        name: 'folder-adwaita-visiting',
        folderNames: ['adwaita-visiting'],
      },
      {
        name: 'folder-adwaita-wifi-open',
        folderNames: ['adwaita-wifi-open'],
      },
      {
        name: 'folder-adwaita-wifi',
        folderNames: ['adwaita-wifi'],
      },
      {
        name: 'folder-adwaita-wine-open',
        folderNames: ['adwaita-wine-open'],
      },
      {
        name: 'folder-adwaita-wine',
        folderNames: ['adwaita-wine'],
      },
      {
        name: 'folder-adwaita-yandex-disk-open',
        folderNames: ['adwaita-yandex-disk-open'],
      },
      {
        name: 'folder-adwaita-yandex-disk',
        folderNames: ['adwaita-yandex-disk'],
      },
      {
        name: 'folder-adwaita',
        folderNames: ['adwaita'],
      },
      {
        name: 'folder-agda-open',
        folderNames: ['agda-open'],
      },
      {
        name: 'folder-agda',
        folderNames: ['agda'],
      },
      {
        name: 'folder-alacritty-open',
        folderNames: ['alacritty-open'],
      },
      {
        name: 'folder-alacritty',
        folderNames: ['alacritty'],
      },
      {
        name: 'folder-amplication-open',
        folderNames: ['amplication-open'],
      },
      {
        name: 'folder-amplication',
        folderNames: ['amplication'],
      },
      {
        name: 'folder-android-open-open',
        folderNames: ['android-open-open'],
      },
      {
        name: 'folder-android-open',
        folderNames: ['android-open'],
      },
      {
        name: 'folder-angular-open-open',
        folderNames: ['angular-open-open'],
      },
      {
        name: 'folder-angular-open',
        folderNames: ['angular-open'],
      },
      {
        name: 'folder-animation-open-open',
        folderNames: ['animation-open-open'],
      },
      {
        name: 'folder-animation-open',
        folderNames: ['animation-open'],
      },
      {
        name: 'folder-ansible-open-open',
        folderNames: ['ansible-open-open'],
      },
      {
        name: 'folder-ansible-open',
        folderNames: ['ansible-open'],
      },
      {
        name: 'folder-api-open-open',
        folderNames: ['api-open-open'],
      },
      {
        name: 'folder-api-open',
        folderNames: ['api-open'],
      },
      {
        name: 'folder-apollo-open-open',
        folderNames: ['apollo-open-open'],
      },
      {
        name: 'folder-apollo-open',
        folderNames: ['apollo-open'],
      },
      {
        name: 'folder-app-open-open',
        folderNames: ['app-open-open'],
      },
      {
        name: 'folder-app-open',
        folderNames: ['app-open'],
      },
      {
        name: 'folder-appimage-open',
        folderNames: ['appimage-open'],
      },
      {
        name: 'folder-appimage',
        folderNames: ['appimage'],
      },
      {
        name: 'folder-applications-stack-open',
        folderNames: ['applications-stack-open'],
      },
      {
        name: 'folder-applications-stack',
        folderNames: ['applications-stack'],
      },
      {
        name: 'folder-appstore-open',
        folderNames: ['appstore-open'],
      },
      {
        name: 'folder-appstore',
        folderNames: ['appstore'],
      },
      {
        name: 'folder-archetype-open',
        folderNames: ['archetype-open'],
      },
      {
        name: 'folder-archetype',
        folderNames: ['archetype'],
      },
      {
        name: 'folder-archive-open-open',
        folderNames: ['archive-open-open'],
      },
      {
        name: 'folder-archive-open',
        folderNames: ['archive-open'],
      },
      {
        name: 'folder-arduino-open',
        folderNames: ['arduino-open'],
      },
      {
        name: 'folder-arduino',
        folderNames: ['arduino'],
      },
      {
        name: 'folder-arttext-open',
        folderNames: ['arttext-open'],
      },
      {
        name: 'folder-arttext',
        folderNames: ['arttext'],
      },
      {
        name: 'folder-astro-open-open',
        folderNames: ['astro-open-open'],
      },
      {
        name: 'folder-astro-open',
        folderNames: ['astro-open'],
      },
      {
        name: 'folder-atom-open-open',
        folderNames: ['atom-open-open'],
      },
      {
        name: 'folder-atom-open',
        folderNames: ['atom-open'],
      },
      {
        name: 'folder-attachment-open-open',
        folderNames: ['attachment-open-open'],
      },
      {
        name: 'folder-attachment-open',
        folderNames: ['attachment-open'],
      },
      {
        name: 'folder-audio-open-open',
        folderNames: ['audio-open-open'],
      },
      {
        name: 'folder-audio-open',
        folderNames: ['audio-open'],
      },
      {
        name: 'folder-aurelia-open-open',
        folderNames: ['aurelia-open-open'],
      },
      {
        name: 'folder-aurelia-open',
        folderNames: ['aurelia-open'],
      },
      {
        name: 'folder-automator-open',
        folderNames: ['automator-open'],
      },
      {
        name: 'folder-automator',
        folderNames: ['automator'],
      },
      {
        name: 'folder-aws-open-open',
        folderNames: ['aws-open-open'],
      },
      {
        name: 'folder-aws-open',
        folderNames: ['aws-open'],
      },
      {
        name: 'folder-azure-devops-open',
        folderNames: ['azure-devops-open'],
      },
      {
        name: 'folder-azure-devops',
        folderNames: ['azure-devops'],
      },
      {
        name: 'folder-azure-pipelines-open-open',
        folderNames: ['azure-pipelines-open-open'],
      },
      {
        name: 'folder-azure-pipelines-open',
        folderNames: ['azure-pipelines-open'],
      },
      {
        name: 'folder-backup-open-open',
        folderNames: ['backup-open-open'],
      },
      {
        name: 'folder-backup-open',
        folderNames: ['backup-open'],
      },
      {
        name: 'folder-base-open-open',
        folderNames: ['base-open-open'],
      },
      {
        name: 'folder-base-open',
        folderNames: ['base-open'],
      },
      {
        name: 'folder-batch-open-open',
        folderNames: ['batch-open-open'],
      },
      {
        name: 'folder-batch-open',
        folderNames: ['batch-open'],
      },
      {
        name: 'folder-bazaar-open',
        folderNames: ['bazaar-open'],
      },
      {
        name: 'folder-bazaar',
        folderNames: ['bazaar'],
      },
      {
        name: 'folder-benchmark-open-open',
        folderNames: ['benchmark-open-open'],
      },
      {
        name: 'folder-benchmark-open',
        folderNames: ['benchmark-open'],
      },
      {
        name: 'folder-bibliography-open-open',
        folderNames: ['bibliography-open-open'],
      },
      {
        name: 'folder-bibliography-open',
        folderNames: ['bibliography-open'],
      },
      {
        name: 'folder-bicep-open-open',
        folderNames: ['bicep-open-open'],
      },
      {
        name: 'folder-bicep-open',
        folderNames: ['bicep-open'],
      },
      {
        name: 'folder-bitcoin-open',
        folderNames: ['bitcoin-open'],
      },
      {
        name: 'folder-bitcoin',
        folderNames: ['bitcoin'],
      },
      {
        name: 'folder-black-activities-open',
        folderNames: ['black-activities-open'],
      },
      {
        name: 'folder-black-activities',
        folderNames: ['black-activities'],
      },
      {
        name: 'folder-black-android-open',
        folderNames: ['black-android-open'],
      },
      {
        name: 'folder-black-android',
        folderNames: ['black-android'],
      },
      {
        name: 'folder-black-apple-open',
        folderNames: ['black-apple-open'],
      },
      {
        name: 'folder-black-apple',
        folderNames: ['black-apple'],
      },
      {
        name: 'folder-black-applications-open',
        folderNames: ['black-applications-open'],
      },
      {
        name: 'folder-black-applications',
        folderNames: ['black-applications'],
      },
      {
        name: 'folder-black-arduino-open',
        folderNames: ['black-arduino-open'],
      },
      {
        name: 'folder-black-arduino',
        folderNames: ['black-arduino'],
      },
      {
        name: 'folder-black-backup-open',
        folderNames: ['black-backup-open'],
      },
      {
        name: 'folder-black-backup',
        folderNames: ['black-backup'],
      },
      {
        name: 'folder-black-books-open',
        folderNames: ['black-books-open'],
      },
      {
        name: 'folder-black-books',
        folderNames: ['black-books'],
      },
      {
        name: 'folder-black-cd-open',
        folderNames: ['black-cd-open'],
      },
      {
        name: 'folder-black-cd',
        folderNames: ['black-cd'],
      },
      {
        name: 'folder-black-code-open',
        folderNames: ['black-code-open'],
      },
      {
        name: 'folder-black-code',
        folderNames: ['black-code'],
      },
      {
        name: 'folder-black-desktop-open',
        folderNames: ['black-desktop-open'],
      },
      {
        name: 'folder-black-desktop',
        folderNames: ['black-desktop'],
      },
      {
        name: 'folder-black-development-open',
        folderNames: ['black-development-open'],
      },
      {
        name: 'folder-black-development',
        folderNames: ['black-development'],
      },
      {
        name: 'folder-black-docker-open',
        folderNames: ['black-docker-open'],
      },
      {
        name: 'folder-black-docker',
        folderNames: ['black-docker'],
      },
      {
        name: 'folder-black-documents-open-open',
        folderNames: ['black-documents-open-open'],
      },
      {
        name: 'folder-black-documents-open',
        folderNames: ['black-documents-open'],
      },
      {
        name: 'folder-black-documents',
        folderNames: ['black-documents'],
      },
      {
        name: 'folder-black-download-open-open',
        folderNames: ['black-download-open-open'],
      },
      {
        name: 'folder-black-download-open',
        folderNames: ['black-download-open'],
      },
      {
        name: 'folder-black-download',
        folderNames: ['black-download'],
      },
      {
        name: 'folder-black-downloads-open',
        folderNames: ['black-downloads-open'],
      },
      {
        name: 'folder-black-downloads',
        folderNames: ['black-downloads'],
      },
      {
        name: 'folder-black-drag-accept-open',
        folderNames: ['black-drag-accept-open'],
      },
      {
        name: 'folder-black-drag-accept',
        folderNames: ['black-drag-accept'],
      },
      {
        name: 'folder-black-dropbox-open',
        folderNames: ['black-dropbox-open'],
      },
      {
        name: 'folder-black-dropbox',
        folderNames: ['black-dropbox'],
      },
      {
        name: 'folder-black-favorites-open',
        folderNames: ['black-favorites-open'],
      },
      {
        name: 'folder-black-favorites',
        folderNames: ['black-favorites'],
      },
      {
        name: 'folder-black-games-open',
        folderNames: ['black-games-open'],
      },
      {
        name: 'folder-black-games',
        folderNames: ['black-games'],
      },
      {
        name: 'folder-black-git-open',
        folderNames: ['black-git-open'],
      },
      {
        name: 'folder-black-git',
        folderNames: ['black-git'],
      },
      {
        name: 'folder-black-github-open',
        folderNames: ['black-github-open'],
      },
      {
        name: 'folder-black-github',
        folderNames: ['black-github'],
      },
      {
        name: 'folder-black-gitlab-open',
        folderNames: ['black-gitlab-open'],
      },
      {
        name: 'folder-black-gitlab',
        folderNames: ['black-gitlab'],
      },
      {
        name: 'folder-black-gnome-open',
        folderNames: ['black-gnome-open'],
      },
      {
        name: 'folder-black-gnome',
        folderNames: ['black-gnome'],
      },
      {
        name: 'folder-black-google-drive-open',
        folderNames: ['black-google-drive-open'],
      },
      {
        name: 'folder-black-google-drive',
        folderNames: ['black-google-drive'],
      },
      {
        name: 'folder-black-image-people-open',
        folderNames: ['black-image-people-open'],
      },
      {
        name: 'folder-black-image-people',
        folderNames: ['black-image-people'],
      },
      {
        name: 'folder-black-important-open',
        folderNames: ['black-important-open'],
      },
      {
        name: 'folder-black-important',
        folderNames: ['black-important'],
      },
      {
        name: 'folder-black-java-open',
        folderNames: ['black-java-open'],
      },
      {
        name: 'folder-black-java',
        folderNames: ['black-java'],
      },
      {
        name: 'folder-black-kde-open',
        folderNames: ['black-kde-open'],
      },
      {
        name: 'folder-black-kde',
        folderNames: ['black-kde'],
      },
      {
        name: 'folder-black-linux-open',
        folderNames: ['black-linux-open'],
      },
      {
        name: 'folder-black-linux',
        folderNames: ['black-linux'],
      },
      {
        name: 'folder-black-locked-open',
        folderNames: ['black-locked-open'],
      },
      {
        name: 'folder-black-locked',
        folderNames: ['black-locked'],
      },
      {
        name: 'folder-black-mail-cloud-open',
        folderNames: ['black-mail-cloud-open'],
      },
      {
        name: 'folder-black-mail-cloud',
        folderNames: ['black-mail-cloud'],
      },
      {
        name: 'folder-black-mail-open',
        folderNames: ['black-mail-open'],
      },
      {
        name: 'folder-black-mail',
        folderNames: ['black-mail'],
      },
      {
        name: 'folder-black-mega-open',
        folderNames: ['black-mega-open'],
      },
      {
        name: 'folder-black-mega',
        folderNames: ['black-mega'],
      },
      {
        name: 'folder-black-meocloud-open',
        folderNames: ['black-meocloud-open'],
      },
      {
        name: 'folder-black-meocloud',
        folderNames: ['black-meocloud'],
      },
      {
        name: 'folder-black-music-open-open',
        folderNames: ['black-music-open-open'],
      },
      {
        name: 'folder-black-music-open',
        folderNames: ['black-music-open'],
      },
      {
        name: 'folder-black-music',
        folderNames: ['black-music'],
      },
      {
        name: 'folder-black-network-open',
        folderNames: ['black-network-open'],
      },
      {
        name: 'folder-black-network',
        folderNames: ['black-network'],
      },
      {
        name: 'folder-black-nextcloud-open',
        folderNames: ['black-nextcloud-open'],
      },
      {
        name: 'folder-black-nextcloud',
        folderNames: ['black-nextcloud'],
      },
      {
        name: 'folder-black-notes-open',
        folderNames: ['black-notes-open'],
      },
      {
        name: 'folder-black-notes',
        folderNames: ['black-notes'],
      },
      {
        name: 'folder-black-obsidian-open',
        folderNames: ['black-obsidian-open'],
      },
      {
        name: 'folder-black-obsidian',
        folderNames: ['black-obsidian'],
      },
      {
        name: 'folder-black-onedrive-open',
        folderNames: ['black-onedrive-open'],
      },
      {
        name: 'folder-black-onedrive',
        folderNames: ['black-onedrive'],
      },
      {
        name: 'folder-black-open-open',
        folderNames: ['black-open-open'],
      },
      {
        name: 'folder-black-open',
        folderNames: ['black-open'],
      },
      {
        name: 'folder-black-owncloud-open',
        folderNames: ['black-owncloud-open'],
      },
      {
        name: 'folder-black-owncloud',
        folderNames: ['black-owncloud'],
      },
      {
        name: 'folder-black-pcloud-open',
        folderNames: ['black-pcloud-open'],
      },
      {
        name: 'folder-black-pcloud',
        folderNames: ['black-pcloud'],
      },
      {
        name: 'folder-black-photo-open',
        folderNames: ['black-photo-open'],
      },
      {
        name: 'folder-black-photo',
        folderNames: ['black-photo'],
      },
      {
        name: 'folder-black-pictures-open-open',
        folderNames: ['black-pictures-open-open'],
      },
      {
        name: 'folder-black-pictures-open',
        folderNames: ['black-pictures-open'],
      },
      {
        name: 'folder-black-pictures',
        folderNames: ['black-pictures'],
      },
      {
        name: 'folder-black-print-open',
        folderNames: ['black-print-open'],
      },
      {
        name: 'folder-black-print',
        folderNames: ['black-print'],
      },
      {
        name: 'folder-black-private-open',
        folderNames: ['black-private-open'],
      },
      {
        name: 'folder-black-private',
        folderNames: ['black-private'],
      },
      {
        name: 'folder-black-projects-open',
        folderNames: ['black-projects-open'],
      },
      {
        name: 'folder-black-projects',
        folderNames: ['black-projects'],
      },
      {
        name: 'folder-black-public-open',
        folderNames: ['black-public-open'],
      },
      {
        name: 'folder-black-public',
        folderNames: ['black-public'],
      },
      {
        name: 'folder-black-publicshare-open-open',
        folderNames: ['black-publicshare-open-open'],
      },
      {
        name: 'folder-black-publicshare-open',
        folderNames: ['black-publicshare-open'],
      },
      {
        name: 'folder-black-remote-open-open',
        folderNames: ['black-remote-open-open'],
      },
      {
        name: 'folder-black-remote-open',
        folderNames: ['black-remote-open'],
      },
      {
        name: 'folder-black-remote',
        folderNames: ['black-remote'],
      },
      {
        name: 'folder-black-script-open',
        folderNames: ['black-script-open'],
      },
      {
        name: 'folder-black-script',
        folderNames: ['black-script'],
      },
      {
        name: 'folder-black-snap-open',
        folderNames: ['black-snap-open'],
      },
      {
        name: 'folder-black-snap',
        folderNames: ['black-snap'],
      },
      {
        name: 'folder-black-steam-open',
        folderNames: ['black-steam-open'],
      },
      {
        name: 'folder-black-steam',
        folderNames: ['black-steam'],
      },
      {
        name: 'folder-black-sync-open',
        folderNames: ['black-sync-open'],
      },
      {
        name: 'folder-black-sync',
        folderNames: ['black-sync'],
      },
      {
        name: 'folder-black-syncthing-open',
        folderNames: ['black-syncthing-open'],
      },
      {
        name: 'folder-black-syncthing',
        folderNames: ['black-syncthing'],
      },
      {
        name: 'folder-black-systemd-open',
        folderNames: ['black-systemd-open'],
      },
      {
        name: 'folder-black-systemd',
        folderNames: ['black-systemd'],
      },
      {
        name: 'folder-black-tar-open',
        folderNames: ['black-tar-open'],
      },
      {
        name: 'folder-black-tar',
        folderNames: ['black-tar'],
      },
      {
        name: 'folder-black-templates-open-open',
        folderNames: ['black-templates-open-open'],
      },
      {
        name: 'folder-black-templates-open',
        folderNames: ['black-templates-open'],
      },
      {
        name: 'folder-black-templates',
        folderNames: ['black-templates'],
      },
      {
        name: 'folder-black-torrent-open',
        folderNames: ['black-torrent-open'],
      },
      {
        name: 'folder-black-torrent',
        folderNames: ['black-torrent'],
      },
      {
        name: 'folder-black-unlocked-open',
        folderNames: ['black-unlocked-open'],
      },
      {
        name: 'folder-black-unlocked',
        folderNames: ['black-unlocked'],
      },
      {
        name: 'folder-black-vbox-open',
        folderNames: ['black-vbox-open'],
      },
      {
        name: 'folder-black-vbox',
        folderNames: ['black-vbox'],
      },
      {
        name: 'folder-black-video-open',
        folderNames: ['black-video-open'],
      },
      {
        name: 'folder-black-video',
        folderNames: ['black-video'],
      },
      {
        name: 'folder-black-videos-open-open',
        folderNames: ['black-videos-open-open'],
      },
      {
        name: 'folder-black-videos-open',
        folderNames: ['black-videos-open'],
      },
      {
        name: 'folder-black-videos',
        folderNames: ['black-videos'],
      },
      {
        name: 'folder-black-visiting-open',
        folderNames: ['black-visiting-open'],
      },
      {
        name: 'folder-black-visiting',
        folderNames: ['black-visiting'],
      },
      {
        name: 'folder-black-wifi-open',
        folderNames: ['black-wifi-open'],
      },
      {
        name: 'folder-black-wifi',
        folderNames: ['black-wifi'],
      },
      {
        name: 'folder-black-wine-open',
        folderNames: ['black-wine-open'],
      },
      {
        name: 'folder-black-wine',
        folderNames: ['black-wine'],
      },
      {
        name: 'folder-black-yandex-disk-open',
        folderNames: ['black-yandex-disk-open'],
      },
      {
        name: 'folder-black-yandex-disk',
        folderNames: ['black-yandex-disk'],
      },
      {
        name: 'folder-black',
        folderNames: ['black'],
      },
      {
        name: 'folder-blender-open-open',
        folderNames: ['blender-open-open'],
      },
      {
        name: 'folder-blender-open',
        folderNames: ['blender-open'],
      },
      {
        name: 'folder-bloc-open-open',
        folderNames: ['bloc-open-open'],
      },
      {
        name: 'folder-bloc-open',
        folderNames: ['bloc-open'],
      },
      {
        name: 'folder-blue-activities-open',
        folderNames: ['blue-activities-open'],
      },
      {
        name: 'folder-blue-activities',
        folderNames: ['blue-activities'],
      },
      {
        name: 'folder-blue-android-open',
        folderNames: ['blue-android-open'],
      },
      {
        name: 'folder-blue-android',
        folderNames: ['blue-android'],
      },
      {
        name: 'folder-blue-apple-open',
        folderNames: ['blue-apple-open'],
      },
      {
        name: 'folder-blue-apple',
        folderNames: ['blue-apple'],
      },
      {
        name: 'folder-blue-applications-open',
        folderNames: ['blue-applications-open'],
      },
      {
        name: 'folder-blue-applications',
        folderNames: ['blue-applications'],
      },
      {
        name: 'folder-blue-arduino-open',
        folderNames: ['blue-arduino-open'],
      },
      {
        name: 'folder-blue-arduino',
        folderNames: ['blue-arduino'],
      },
      {
        name: 'folder-blue-backup-open',
        folderNames: ['blue-backup-open'],
      },
      {
        name: 'folder-blue-backup',
        folderNames: ['blue-backup'],
      },
      {
        name: 'folder-blue-books-open',
        folderNames: ['blue-books-open'],
      },
      {
        name: 'folder-blue-books',
        folderNames: ['blue-books'],
      },
      {
        name: 'folder-blue-cd-open',
        folderNames: ['blue-cd-open'],
      },
      {
        name: 'folder-blue-cd',
        folderNames: ['blue-cd'],
      },
      {
        name: 'folder-blue-code-open',
        folderNames: ['blue-code-open'],
      },
      {
        name: 'folder-blue-code',
        folderNames: ['blue-code'],
      },
      {
        name: 'folder-blue-desktop-open',
        folderNames: ['blue-desktop-open'],
      },
      {
        name: 'folder-blue-desktop',
        folderNames: ['blue-desktop'],
      },
      {
        name: 'folder-blue-development-open',
        folderNames: ['blue-development-open'],
      },
      {
        name: 'folder-blue-development',
        folderNames: ['blue-development'],
      },
      {
        name: 'folder-blue-docker-open',
        folderNames: ['blue-docker-open'],
      },
      {
        name: 'folder-blue-docker',
        folderNames: ['blue-docker'],
      },
      {
        name: 'folder-blue-documents-open-open',
        folderNames: ['blue-documents-open-open'],
      },
      {
        name: 'folder-blue-documents-open',
        folderNames: ['blue-documents-open'],
      },
      {
        name: 'folder-blue-documents',
        folderNames: ['blue-documents'],
      },
      {
        name: 'folder-blue-download-open-open',
        folderNames: ['blue-download-open-open'],
      },
      {
        name: 'folder-blue-download-open',
        folderNames: ['blue-download-open'],
      },
      {
        name: 'folder-blue-download',
        folderNames: ['blue-download'],
      },
      {
        name: 'folder-blue-downloads-open',
        folderNames: ['blue-downloads-open'],
      },
      {
        name: 'folder-blue-downloads',
        folderNames: ['blue-downloads'],
      },
      {
        name: 'folder-blue-drag-accept-open',
        folderNames: ['blue-drag-accept-open'],
      },
      {
        name: 'folder-blue-drag-accept',
        folderNames: ['blue-drag-accept'],
      },
      {
        name: 'folder-blue-dropbox-open',
        folderNames: ['blue-dropbox-open'],
      },
      {
        name: 'folder-blue-dropbox',
        folderNames: ['blue-dropbox'],
      },
      {
        name: 'folder-blue-favorites-open',
        folderNames: ['blue-favorites-open'],
      },
      {
        name: 'folder-blue-favorites',
        folderNames: ['blue-favorites'],
      },
      {
        name: 'folder-blue-games-open',
        folderNames: ['blue-games-open'],
      },
      {
        name: 'folder-blue-games',
        folderNames: ['blue-games'],
      },
      {
        name: 'folder-blue-git-open',
        folderNames: ['blue-git-open'],
      },
      {
        name: 'folder-blue-git',
        folderNames: ['blue-git'],
      },
      {
        name: 'folder-blue-github-open',
        folderNames: ['blue-github-open'],
      },
      {
        name: 'folder-blue-github',
        folderNames: ['blue-github'],
      },
      {
        name: 'folder-blue-gitlab-open',
        folderNames: ['blue-gitlab-open'],
      },
      {
        name: 'folder-blue-gitlab',
        folderNames: ['blue-gitlab'],
      },
      {
        name: 'folder-blue-gnome-open',
        folderNames: ['blue-gnome-open'],
      },
      {
        name: 'folder-blue-gnome',
        folderNames: ['blue-gnome'],
      },
      {
        name: 'folder-blue-google-drive-open',
        folderNames: ['blue-google-drive-open'],
      },
      {
        name: 'folder-blue-google-drive',
        folderNames: ['blue-google-drive'],
      },
      {
        name: 'folder-blue-image-people-open',
        folderNames: ['blue-image-people-open'],
      },
      {
        name: 'folder-blue-image-people',
        folderNames: ['blue-image-people'],
      },
      {
        name: 'folder-blue-important-open',
        folderNames: ['blue-important-open'],
      },
      {
        name: 'folder-blue-important',
        folderNames: ['blue-important'],
      },
      {
        name: 'folder-blue-java-open',
        folderNames: ['blue-java-open'],
      },
      {
        name: 'folder-blue-java',
        folderNames: ['blue-java'],
      },
      {
        name: 'folder-blue-kde-open',
        folderNames: ['blue-kde-open'],
      },
      {
        name: 'folder-blue-kde',
        folderNames: ['blue-kde'],
      },
      {
        name: 'folder-blue-linux-open',
        folderNames: ['blue-linux-open'],
      },
      {
        name: 'folder-blue-linux',
        folderNames: ['blue-linux'],
      },
      {
        name: 'folder-blue-locked-open',
        folderNames: ['blue-locked-open'],
      },
      {
        name: 'folder-blue-locked',
        folderNames: ['blue-locked'],
      },
      {
        name: 'folder-blue-mail-cloud-open',
        folderNames: ['blue-mail-cloud-open'],
      },
      {
        name: 'folder-blue-mail-cloud',
        folderNames: ['blue-mail-cloud'],
      },
      {
        name: 'folder-blue-mail-open',
        folderNames: ['blue-mail-open'],
      },
      {
        name: 'folder-blue-mail',
        folderNames: ['blue-mail'],
      },
      {
        name: 'folder-blue-mega-open',
        folderNames: ['blue-mega-open'],
      },
      {
        name: 'folder-blue-mega',
        folderNames: ['blue-mega'],
      },
      {
        name: 'folder-blue-meocloud-open',
        folderNames: ['blue-meocloud-open'],
      },
      {
        name: 'folder-blue-meocloud',
        folderNames: ['blue-meocloud'],
      },
      {
        name: 'folder-blue-music-open-open',
        folderNames: ['blue-music-open-open'],
      },
      {
        name: 'folder-blue-music-open',
        folderNames: ['blue-music-open'],
      },
      {
        name: 'folder-blue-music',
        folderNames: ['blue-music'],
      },
      {
        name: 'folder-blue-network-open',
        folderNames: ['blue-network-open'],
      },
      {
        name: 'folder-blue-network',
        folderNames: ['blue-network'],
      },
      {
        name: 'folder-blue-nextcloud-open',
        folderNames: ['blue-nextcloud-open'],
      },
      {
        name: 'folder-blue-nextcloud',
        folderNames: ['blue-nextcloud'],
      },
      {
        name: 'folder-blue-notes-open',
        folderNames: ['blue-notes-open'],
      },
      {
        name: 'folder-blue-notes',
        folderNames: ['blue-notes'],
      },
      {
        name: 'folder-blue-obsidian-open',
        folderNames: ['blue-obsidian-open'],
      },
      {
        name: 'folder-blue-obsidian',
        folderNames: ['blue-obsidian'],
      },
      {
        name: 'folder-blue-onedrive-open',
        folderNames: ['blue-onedrive-open'],
      },
      {
        name: 'folder-blue-onedrive',
        folderNames: ['blue-onedrive'],
      },
      {
        name: 'folder-blue-open-open',
        folderNames: ['blue-open-open'],
      },
      {
        name: 'folder-blue-open',
        folderNames: ['blue-open'],
      },
      {
        name: 'folder-blue-owncloud-open',
        folderNames: ['blue-owncloud-open'],
      },
      {
        name: 'folder-blue-owncloud',
        folderNames: ['blue-owncloud'],
      },
      {
        name: 'folder-blue-pcloud-open',
        folderNames: ['blue-pcloud-open'],
      },
      {
        name: 'folder-blue-pcloud',
        folderNames: ['blue-pcloud'],
      },
      {
        name: 'folder-blue-photo-open',
        folderNames: ['blue-photo-open'],
      },
      {
        name: 'folder-blue-photo',
        folderNames: ['blue-photo'],
      },
      {
        name: 'folder-blue-pictures-open-open',
        folderNames: ['blue-pictures-open-open'],
      },
      {
        name: 'folder-blue-pictures-open',
        folderNames: ['blue-pictures-open'],
      },
      {
        name: 'folder-blue-pictures',
        folderNames: ['blue-pictures'],
      },
      {
        name: 'folder-blue-print-open',
        folderNames: ['blue-print-open'],
      },
      {
        name: 'folder-blue-print',
        folderNames: ['blue-print'],
      },
      {
        name: 'folder-blue-private-open',
        folderNames: ['blue-private-open'],
      },
      {
        name: 'folder-blue-private',
        folderNames: ['blue-private'],
      },
      {
        name: 'folder-blue-projects-open',
        folderNames: ['blue-projects-open'],
      },
      {
        name: 'folder-blue-projects',
        folderNames: ['blue-projects'],
      },
      {
        name: 'folder-blue-public-open',
        folderNames: ['blue-public-open'],
      },
      {
        name: 'folder-blue-public',
        folderNames: ['blue-public'],
      },
      {
        name: 'folder-blue-publicshare-open-open',
        folderNames: ['blue-publicshare-open-open'],
      },
      {
        name: 'folder-blue-publicshare-open',
        folderNames: ['blue-publicshare-open'],
      },
      {
        name: 'folder-blue-remote-open-open',
        folderNames: ['blue-remote-open-open'],
      },
      {
        name: 'folder-blue-remote-open',
        folderNames: ['blue-remote-open'],
      },
      {
        name: 'folder-blue-remote',
        folderNames: ['blue-remote'],
      },
      {
        name: 'folder-blue-script-open',
        folderNames: ['blue-script-open'],
      },
      {
        name: 'folder-blue-script',
        folderNames: ['blue-script'],
      },
      {
        name: 'folder-blue-snap-open',
        folderNames: ['blue-snap-open'],
      },
      {
        name: 'folder-blue-snap',
        folderNames: ['blue-snap'],
      },
      {
        name: 'folder-blue-steam-open',
        folderNames: ['blue-steam-open'],
      },
      {
        name: 'folder-blue-steam',
        folderNames: ['blue-steam'],
      },
      {
        name: 'folder-blue-sync-open',
        folderNames: ['blue-sync-open'],
      },
      {
        name: 'folder-blue-sync',
        folderNames: ['blue-sync'],
      },
      {
        name: 'folder-blue-syncthing-open',
        folderNames: ['blue-syncthing-open'],
      },
      {
        name: 'folder-blue-syncthing',
        folderNames: ['blue-syncthing'],
      },
      {
        name: 'folder-blue-systemd-open',
        folderNames: ['blue-systemd-open'],
      },
      {
        name: 'folder-blue-systemd',
        folderNames: ['blue-systemd'],
      },
      {
        name: 'folder-blue-tar-open',
        folderNames: ['blue-tar-open'],
      },
      {
        name: 'folder-blue-tar',
        folderNames: ['blue-tar'],
      },
      {
        name: 'folder-blue-templates-open-open',
        folderNames: ['blue-templates-open-open'],
      },
      {
        name: 'folder-blue-templates-open',
        folderNames: ['blue-templates-open'],
      },
      {
        name: 'folder-blue-templates',
        folderNames: ['blue-templates'],
      },
      {
        name: 'folder-blue-torrent-open',
        folderNames: ['blue-torrent-open'],
      },
      {
        name: 'folder-blue-torrent',
        folderNames: ['blue-torrent'],
      },
      {
        name: 'folder-blue-unlocked-open',
        folderNames: ['blue-unlocked-open'],
      },
      {
        name: 'folder-blue-unlocked',
        folderNames: ['blue-unlocked'],
      },
      {
        name: 'folder-blue-vbox-open',
        folderNames: ['blue-vbox-open'],
      },
      {
        name: 'folder-blue-vbox',
        folderNames: ['blue-vbox'],
      },
      {
        name: 'folder-blue-video-open',
        folderNames: ['blue-video-open'],
      },
      {
        name: 'folder-blue-video',
        folderNames: ['blue-video'],
      },
      {
        name: 'folder-blue-videos-open-open',
        folderNames: ['blue-videos-open-open'],
      },
      {
        name: 'folder-blue-videos-open',
        folderNames: ['blue-videos-open'],
      },
      {
        name: 'folder-blue-videos',
        folderNames: ['blue-videos'],
      },
      {
        name: 'folder-blue-visiting-open',
        folderNames: ['blue-visiting-open'],
      },
      {
        name: 'folder-blue-visiting',
        folderNames: ['blue-visiting'],
      },
      {
        name: 'folder-blue-wifi-open',
        folderNames: ['blue-wifi-open'],
      },
      {
        name: 'folder-blue-wifi',
        folderNames: ['blue-wifi'],
      },
      {
        name: 'folder-blue-wine-open',
        folderNames: ['blue-wine-open'],
      },
      {
        name: 'folder-blue-wine',
        folderNames: ['blue-wine'],
      },
      {
        name: 'folder-blue-yandex-disk-open',
        folderNames: ['blue-yandex-disk-open'],
      },
      {
        name: 'folder-blue-yandex-disk',
        folderNames: ['blue-yandex-disk'],
      },
      {
        name: 'folder-blue',
        folderNames: ['blue'],
      },
      {
        name: 'folder-bluegrey-activities-open',
        folderNames: ['bluegrey-activities-open'],
      },
      {
        name: 'folder-bluegrey-activities',
        folderNames: ['bluegrey-activities'],
      },
      {
        name: 'folder-bluegrey-android-open',
        folderNames: ['bluegrey-android-open'],
      },
      {
        name: 'folder-bluegrey-android',
        folderNames: ['bluegrey-android'],
      },
      {
        name: 'folder-bluegrey-apple-open',
        folderNames: ['bluegrey-apple-open'],
      },
      {
        name: 'folder-bluegrey-apple',
        folderNames: ['bluegrey-apple'],
      },
      {
        name: 'folder-bluegrey-applications-open',
        folderNames: ['bluegrey-applications-open'],
      },
      {
        name: 'folder-bluegrey-applications',
        folderNames: ['bluegrey-applications'],
      },
      {
        name: 'folder-bluegrey-arduino-open',
        folderNames: ['bluegrey-arduino-open'],
      },
      {
        name: 'folder-bluegrey-arduino',
        folderNames: ['bluegrey-arduino'],
      },
      {
        name: 'folder-bluegrey-backup-open',
        folderNames: ['bluegrey-backup-open'],
      },
      {
        name: 'folder-bluegrey-backup',
        folderNames: ['bluegrey-backup'],
      },
      {
        name: 'folder-bluegrey-books-open',
        folderNames: ['bluegrey-books-open'],
      },
      {
        name: 'folder-bluegrey-books',
        folderNames: ['bluegrey-books'],
      },
      {
        name: 'folder-bluegrey-cd-open',
        folderNames: ['bluegrey-cd-open'],
      },
      {
        name: 'folder-bluegrey-cd',
        folderNames: ['bluegrey-cd'],
      },
      {
        name: 'folder-bluegrey-code-open',
        folderNames: ['bluegrey-code-open'],
      },
      {
        name: 'folder-bluegrey-code',
        folderNames: ['bluegrey-code'],
      },
      {
        name: 'folder-bluegrey-desktop-open',
        folderNames: ['bluegrey-desktop-open'],
      },
      {
        name: 'folder-bluegrey-desktop',
        folderNames: ['bluegrey-desktop'],
      },
      {
        name: 'folder-bluegrey-development-open',
        folderNames: ['bluegrey-development-open'],
      },
      {
        name: 'folder-bluegrey-development',
        folderNames: ['bluegrey-development'],
      },
      {
        name: 'folder-bluegrey-docker-open',
        folderNames: ['bluegrey-docker-open'],
      },
      {
        name: 'folder-bluegrey-docker',
        folderNames: ['bluegrey-docker'],
      },
      {
        name: 'folder-bluegrey-documents-open-open',
        folderNames: ['bluegrey-documents-open-open'],
      },
      {
        name: 'folder-bluegrey-documents-open',
        folderNames: ['bluegrey-documents-open'],
      },
      {
        name: 'folder-bluegrey-documents',
        folderNames: ['bluegrey-documents'],
      },
      {
        name: 'folder-bluegrey-download-open-open',
        folderNames: ['bluegrey-download-open-open'],
      },
      {
        name: 'folder-bluegrey-download-open',
        folderNames: ['bluegrey-download-open'],
      },
      {
        name: 'folder-bluegrey-download',
        folderNames: ['bluegrey-download'],
      },
      {
        name: 'folder-bluegrey-downloads-open',
        folderNames: ['bluegrey-downloads-open'],
      },
      {
        name: 'folder-bluegrey-downloads',
        folderNames: ['bluegrey-downloads'],
      },
      {
        name: 'folder-bluegrey-drag-accept-open',
        folderNames: ['bluegrey-drag-accept-open'],
      },
      {
        name: 'folder-bluegrey-drag-accept',
        folderNames: ['bluegrey-drag-accept'],
      },
      {
        name: 'folder-bluegrey-dropbox-open',
        folderNames: ['bluegrey-dropbox-open'],
      },
      {
        name: 'folder-bluegrey-dropbox',
        folderNames: ['bluegrey-dropbox'],
      },
      {
        name: 'folder-bluegrey-favorites-open',
        folderNames: ['bluegrey-favorites-open'],
      },
      {
        name: 'folder-bluegrey-favorites',
        folderNames: ['bluegrey-favorites'],
      },
      {
        name: 'folder-bluegrey-games-open',
        folderNames: ['bluegrey-games-open'],
      },
      {
        name: 'folder-bluegrey-games',
        folderNames: ['bluegrey-games'],
      },
      {
        name: 'folder-bluegrey-git-open',
        folderNames: ['bluegrey-git-open'],
      },
      {
        name: 'folder-bluegrey-git',
        folderNames: ['bluegrey-git'],
      },
      {
        name: 'folder-bluegrey-github-open',
        folderNames: ['bluegrey-github-open'],
      },
      {
        name: 'folder-bluegrey-github',
        folderNames: ['bluegrey-github'],
      },
      {
        name: 'folder-bluegrey-gitlab-open',
        folderNames: ['bluegrey-gitlab-open'],
      },
      {
        name: 'folder-bluegrey-gitlab',
        folderNames: ['bluegrey-gitlab'],
      },
      {
        name: 'folder-bluegrey-gnome-open',
        folderNames: ['bluegrey-gnome-open'],
      },
      {
        name: 'folder-bluegrey-gnome',
        folderNames: ['bluegrey-gnome'],
      },
      {
        name: 'folder-bluegrey-google-drive-open',
        folderNames: ['bluegrey-google-drive-open'],
      },
      {
        name: 'folder-bluegrey-google-drive',
        folderNames: ['bluegrey-google-drive'],
      },
      {
        name: 'folder-bluegrey-image-people-open',
        folderNames: ['bluegrey-image-people-open'],
      },
      {
        name: 'folder-bluegrey-image-people',
        folderNames: ['bluegrey-image-people'],
      },
      {
        name: 'folder-bluegrey-important-open',
        folderNames: ['bluegrey-important-open'],
      },
      {
        name: 'folder-bluegrey-important',
        folderNames: ['bluegrey-important'],
      },
      {
        name: 'folder-bluegrey-java-open',
        folderNames: ['bluegrey-java-open'],
      },
      {
        name: 'folder-bluegrey-java',
        folderNames: ['bluegrey-java'],
      },
      {
        name: 'folder-bluegrey-kde-open',
        folderNames: ['bluegrey-kde-open'],
      },
      {
        name: 'folder-bluegrey-kde',
        folderNames: ['bluegrey-kde'],
      },
      {
        name: 'folder-bluegrey-linux-open',
        folderNames: ['bluegrey-linux-open'],
      },
      {
        name: 'folder-bluegrey-linux',
        folderNames: ['bluegrey-linux'],
      },
      {
        name: 'folder-bluegrey-locked-open',
        folderNames: ['bluegrey-locked-open'],
      },
      {
        name: 'folder-bluegrey-locked',
        folderNames: ['bluegrey-locked'],
      },
      {
        name: 'folder-bluegrey-mail-cloud-open',
        folderNames: ['bluegrey-mail-cloud-open'],
      },
      {
        name: 'folder-bluegrey-mail-cloud',
        folderNames: ['bluegrey-mail-cloud'],
      },
      {
        name: 'folder-bluegrey-mail-open',
        folderNames: ['bluegrey-mail-open'],
      },
      {
        name: 'folder-bluegrey-mail',
        folderNames: ['bluegrey-mail'],
      },
      {
        name: 'folder-bluegrey-mega-open',
        folderNames: ['bluegrey-mega-open'],
      },
      {
        name: 'folder-bluegrey-mega',
        folderNames: ['bluegrey-mega'],
      },
      {
        name: 'folder-bluegrey-meocloud-open',
        folderNames: ['bluegrey-meocloud-open'],
      },
      {
        name: 'folder-bluegrey-meocloud',
        folderNames: ['bluegrey-meocloud'],
      },
      {
        name: 'folder-bluegrey-music-open-open',
        folderNames: ['bluegrey-music-open-open'],
      },
      {
        name: 'folder-bluegrey-music-open',
        folderNames: ['bluegrey-music-open'],
      },
      {
        name: 'folder-bluegrey-music',
        folderNames: ['bluegrey-music'],
      },
      {
        name: 'folder-bluegrey-network-open',
        folderNames: ['bluegrey-network-open'],
      },
      {
        name: 'folder-bluegrey-network',
        folderNames: ['bluegrey-network'],
      },
      {
        name: 'folder-bluegrey-nextcloud-open',
        folderNames: ['bluegrey-nextcloud-open'],
      },
      {
        name: 'folder-bluegrey-nextcloud',
        folderNames: ['bluegrey-nextcloud'],
      },
      {
        name: 'folder-bluegrey-notes-open',
        folderNames: ['bluegrey-notes-open'],
      },
      {
        name: 'folder-bluegrey-notes',
        folderNames: ['bluegrey-notes'],
      },
      {
        name: 'folder-bluegrey-obsidian-open',
        folderNames: ['bluegrey-obsidian-open'],
      },
      {
        name: 'folder-bluegrey-obsidian',
        folderNames: ['bluegrey-obsidian'],
      },
      {
        name: 'folder-bluegrey-onedrive-open',
        folderNames: ['bluegrey-onedrive-open'],
      },
      {
        name: 'folder-bluegrey-onedrive',
        folderNames: ['bluegrey-onedrive'],
      },
      {
        name: 'folder-bluegrey-open-open',
        folderNames: ['bluegrey-open-open'],
      },
      {
        name: 'folder-bluegrey-open',
        folderNames: ['bluegrey-open'],
      },
      {
        name: 'folder-bluegrey-owncloud-open',
        folderNames: ['bluegrey-owncloud-open'],
      },
      {
        name: 'folder-bluegrey-owncloud',
        folderNames: ['bluegrey-owncloud'],
      },
      {
        name: 'folder-bluegrey-pcloud-open',
        folderNames: ['bluegrey-pcloud-open'],
      },
      {
        name: 'folder-bluegrey-pcloud',
        folderNames: ['bluegrey-pcloud'],
      },
      {
        name: 'folder-bluegrey-photo-open',
        folderNames: ['bluegrey-photo-open'],
      },
      {
        name: 'folder-bluegrey-photo',
        folderNames: ['bluegrey-photo'],
      },
      {
        name: 'folder-bluegrey-pictures-open-open',
        folderNames: ['bluegrey-pictures-open-open'],
      },
      {
        name: 'folder-bluegrey-pictures-open',
        folderNames: ['bluegrey-pictures-open'],
      },
      {
        name: 'folder-bluegrey-pictures',
        folderNames: ['bluegrey-pictures'],
      },
      {
        name: 'folder-bluegrey-print-open',
        folderNames: ['bluegrey-print-open'],
      },
      {
        name: 'folder-bluegrey-print',
        folderNames: ['bluegrey-print'],
      },
      {
        name: 'folder-bluegrey-private-open',
        folderNames: ['bluegrey-private-open'],
      },
      {
        name: 'folder-bluegrey-private',
        folderNames: ['bluegrey-private'],
      },
      {
        name: 'folder-bluegrey-projects-open',
        folderNames: ['bluegrey-projects-open'],
      },
      {
        name: 'folder-bluegrey-projects',
        folderNames: ['bluegrey-projects'],
      },
      {
        name: 'folder-bluegrey-public-open',
        folderNames: ['bluegrey-public-open'],
      },
      {
        name: 'folder-bluegrey-public',
        folderNames: ['bluegrey-public'],
      },
      {
        name: 'folder-bluegrey-publicshare-open-open',
        folderNames: ['bluegrey-publicshare-open-open'],
      },
      {
        name: 'folder-bluegrey-publicshare-open',
        folderNames: ['bluegrey-publicshare-open'],
      },
      {
        name: 'folder-bluegrey-remote-open-open',
        folderNames: ['bluegrey-remote-open-open'],
      },
      {
        name: 'folder-bluegrey-remote-open',
        folderNames: ['bluegrey-remote-open'],
      },
      {
        name: 'folder-bluegrey-remote',
        folderNames: ['bluegrey-remote'],
      },
      {
        name: 'folder-bluegrey-script-open',
        folderNames: ['bluegrey-script-open'],
      },
      {
        name: 'folder-bluegrey-script',
        folderNames: ['bluegrey-script'],
      },
      {
        name: 'folder-bluegrey-snap-open',
        folderNames: ['bluegrey-snap-open'],
      },
      {
        name: 'folder-bluegrey-snap',
        folderNames: ['bluegrey-snap'],
      },
      {
        name: 'folder-bluegrey-steam-open',
        folderNames: ['bluegrey-steam-open'],
      },
      {
        name: 'folder-bluegrey-steam',
        folderNames: ['bluegrey-steam'],
      },
      {
        name: 'folder-bluegrey-sync-open',
        folderNames: ['bluegrey-sync-open'],
      },
      {
        name: 'folder-bluegrey-sync',
        folderNames: ['bluegrey-sync'],
      },
      {
        name: 'folder-bluegrey-syncthing-open',
        folderNames: ['bluegrey-syncthing-open'],
      },
      {
        name: 'folder-bluegrey-syncthing',
        folderNames: ['bluegrey-syncthing'],
      },
      {
        name: 'folder-bluegrey-systemd-open',
        folderNames: ['bluegrey-systemd-open'],
      },
      {
        name: 'folder-bluegrey-systemd',
        folderNames: ['bluegrey-systemd'],
      },
      {
        name: 'folder-bluegrey-tar-open',
        folderNames: ['bluegrey-tar-open'],
      },
      {
        name: 'folder-bluegrey-tar',
        folderNames: ['bluegrey-tar'],
      },
      {
        name: 'folder-bluegrey-templates-open-open',
        folderNames: ['bluegrey-templates-open-open'],
      },
      {
        name: 'folder-bluegrey-templates-open',
        folderNames: ['bluegrey-templates-open'],
      },
      {
        name: 'folder-bluegrey-templates',
        folderNames: ['bluegrey-templates'],
      },
      {
        name: 'folder-bluegrey-torrent-open',
        folderNames: ['bluegrey-torrent-open'],
      },
      {
        name: 'folder-bluegrey-torrent',
        folderNames: ['bluegrey-torrent'],
      },
      {
        name: 'folder-bluegrey-unlocked-open',
        folderNames: ['bluegrey-unlocked-open'],
      },
      {
        name: 'folder-bluegrey-unlocked',
        folderNames: ['bluegrey-unlocked'],
      },
      {
        name: 'folder-bluegrey-vbox-open',
        folderNames: ['bluegrey-vbox-open'],
      },
      {
        name: 'folder-bluegrey-vbox',
        folderNames: ['bluegrey-vbox'],
      },
      {
        name: 'folder-bluegrey-video-open',
        folderNames: ['bluegrey-video-open'],
      },
      {
        name: 'folder-bluegrey-video',
        folderNames: ['bluegrey-video'],
      },
      {
        name: 'folder-bluegrey-videos-open-open',
        folderNames: ['bluegrey-videos-open-open'],
      },
      {
        name: 'folder-bluegrey-videos-open',
        folderNames: ['bluegrey-videos-open'],
      },
      {
        name: 'folder-bluegrey-videos',
        folderNames: ['bluegrey-videos'],
      },
      {
        name: 'folder-bluegrey-visiting-open',
        folderNames: ['bluegrey-visiting-open'],
      },
      {
        name: 'folder-bluegrey-visiting',
        folderNames: ['bluegrey-visiting'],
      },
      {
        name: 'folder-bluegrey-wifi-open',
        folderNames: ['bluegrey-wifi-open'],
      },
      {
        name: 'folder-bluegrey-wifi',
        folderNames: ['bluegrey-wifi'],
      },
      {
        name: 'folder-bluegrey-wine-open',
        folderNames: ['bluegrey-wine-open'],
      },
      {
        name: 'folder-bluegrey-wine',
        folderNames: ['bluegrey-wine'],
      },
      {
        name: 'folder-bluegrey-yandex-disk-open',
        folderNames: ['bluegrey-yandex-disk-open'],
      },
      {
        name: 'folder-bluegrey-yandex-disk',
        folderNames: ['bluegrey-yandex-disk'],
      },
      {
        name: 'folder-bluegrey',
        folderNames: ['bluegrey'],
      },
      {
        name: 'folder-blueprint-open',
        folderNames: ['blueprint-open'],
      },
      {
        name: 'folder-blueprint',
        folderNames: ['blueprint'],
      },
      {
        name: 'folder-bookmark-open',
        folderNames: ['bookmark-open'],
      },
      {
        name: 'folder-bookmark',
        folderNames: ['bookmark'],
      },
      {
        name: 'folder-bookmarks-open',
        folderNames: ['bookmarks-open'],
      },
      {
        name: 'folder-bookmarks',
        folderNames: ['bookmarks'],
      },
      {
        name: 'folder-bower-open-open',
        folderNames: ['bower-open-open'],
      },
      {
        name: 'folder-bower-open',
        folderNames: ['bower-open'],
      },
      {
        name: 'folder-breeze-activities-open',
        folderNames: ['breeze-activities-open'],
      },
      {
        name: 'folder-breeze-activities',
        folderNames: ['breeze-activities'],
      },
      {
        name: 'folder-breeze-android-open',
        folderNames: ['breeze-android-open'],
      },
      {
        name: 'folder-breeze-android',
        folderNames: ['breeze-android'],
      },
      {
        name: 'folder-breeze-apple-open',
        folderNames: ['breeze-apple-open'],
      },
      {
        name: 'folder-breeze-apple',
        folderNames: ['breeze-apple'],
      },
      {
        name: 'folder-breeze-applications-open',
        folderNames: ['breeze-applications-open'],
      },
      {
        name: 'folder-breeze-applications',
        folderNames: ['breeze-applications'],
      },
      {
        name: 'folder-breeze-arduino-open',
        folderNames: ['breeze-arduino-open'],
      },
      {
        name: 'folder-breeze-arduino',
        folderNames: ['breeze-arduino'],
      },
      {
        name: 'folder-breeze-backup-open',
        folderNames: ['breeze-backup-open'],
      },
      {
        name: 'folder-breeze-backup',
        folderNames: ['breeze-backup'],
      },
      {
        name: 'folder-breeze-books-open',
        folderNames: ['breeze-books-open'],
      },
      {
        name: 'folder-breeze-books',
        folderNames: ['breeze-books'],
      },
      {
        name: 'folder-breeze-cd-open',
        folderNames: ['breeze-cd-open'],
      },
      {
        name: 'folder-breeze-cd',
        folderNames: ['breeze-cd'],
      },
      {
        name: 'folder-breeze-code-open',
        folderNames: ['breeze-code-open'],
      },
      {
        name: 'folder-breeze-code',
        folderNames: ['breeze-code'],
      },
      {
        name: 'folder-breeze-desktop-open',
        folderNames: ['breeze-desktop-open'],
      },
      {
        name: 'folder-breeze-desktop',
        folderNames: ['breeze-desktop'],
      },
      {
        name: 'folder-breeze-development-open',
        folderNames: ['breeze-development-open'],
      },
      {
        name: 'folder-breeze-development',
        folderNames: ['breeze-development'],
      },
      {
        name: 'folder-breeze-docker-open',
        folderNames: ['breeze-docker-open'],
      },
      {
        name: 'folder-breeze-docker',
        folderNames: ['breeze-docker'],
      },
      {
        name: 'folder-breeze-documents-open-open',
        folderNames: ['breeze-documents-open-open'],
      },
      {
        name: 'folder-breeze-documents-open',
        folderNames: ['breeze-documents-open'],
      },
      {
        name: 'folder-breeze-documents',
        folderNames: ['breeze-documents'],
      },
      {
        name: 'folder-breeze-download-open-open',
        folderNames: ['breeze-download-open-open'],
      },
      {
        name: 'folder-breeze-download-open',
        folderNames: ['breeze-download-open'],
      },
      {
        name: 'folder-breeze-download',
        folderNames: ['breeze-download'],
      },
      {
        name: 'folder-breeze-downloads-open',
        folderNames: ['breeze-downloads-open'],
      },
      {
        name: 'folder-breeze-downloads',
        folderNames: ['breeze-downloads'],
      },
      {
        name: 'folder-breeze-drag-accept-open',
        folderNames: ['breeze-drag-accept-open'],
      },
      {
        name: 'folder-breeze-drag-accept',
        folderNames: ['breeze-drag-accept'],
      },
      {
        name: 'folder-breeze-dropbox-open',
        folderNames: ['breeze-dropbox-open'],
      },
      {
        name: 'folder-breeze-dropbox',
        folderNames: ['breeze-dropbox'],
      },
      {
        name: 'folder-breeze-favorites-open',
        folderNames: ['breeze-favorites-open'],
      },
      {
        name: 'folder-breeze-favorites',
        folderNames: ['breeze-favorites'],
      },
      {
        name: 'folder-breeze-games-open',
        folderNames: ['breeze-games-open'],
      },
      {
        name: 'folder-breeze-games',
        folderNames: ['breeze-games'],
      },
      {
        name: 'folder-breeze-git-open',
        folderNames: ['breeze-git-open'],
      },
      {
        name: 'folder-breeze-git',
        folderNames: ['breeze-git'],
      },
      {
        name: 'folder-breeze-github-open',
        folderNames: ['breeze-github-open'],
      },
      {
        name: 'folder-breeze-github',
        folderNames: ['breeze-github'],
      },
      {
        name: 'folder-breeze-gitlab-open',
        folderNames: ['breeze-gitlab-open'],
      },
      {
        name: 'folder-breeze-gitlab',
        folderNames: ['breeze-gitlab'],
      },
      {
        name: 'folder-breeze-gnome-open',
        folderNames: ['breeze-gnome-open'],
      },
      {
        name: 'folder-breeze-gnome',
        folderNames: ['breeze-gnome'],
      },
      {
        name: 'folder-breeze-google-drive-open',
        folderNames: ['breeze-google-drive-open'],
      },
      {
        name: 'folder-breeze-google-drive',
        folderNames: ['breeze-google-drive'],
      },
      {
        name: 'folder-breeze-image-people-open',
        folderNames: ['breeze-image-people-open'],
      },
      {
        name: 'folder-breeze-image-people',
        folderNames: ['breeze-image-people'],
      },
      {
        name: 'folder-breeze-important-open',
        folderNames: ['breeze-important-open'],
      },
      {
        name: 'folder-breeze-important',
        folderNames: ['breeze-important'],
      },
      {
        name: 'folder-breeze-java-open',
        folderNames: ['breeze-java-open'],
      },
      {
        name: 'folder-breeze-java',
        folderNames: ['breeze-java'],
      },
      {
        name: 'folder-breeze-kde-open',
        folderNames: ['breeze-kde-open'],
      },
      {
        name: 'folder-breeze-kde',
        folderNames: ['breeze-kde'],
      },
      {
        name: 'folder-breeze-linux-open',
        folderNames: ['breeze-linux-open'],
      },
      {
        name: 'folder-breeze-linux',
        folderNames: ['breeze-linux'],
      },
      {
        name: 'folder-breeze-locked-open',
        folderNames: ['breeze-locked-open'],
      },
      {
        name: 'folder-breeze-locked',
        folderNames: ['breeze-locked'],
      },
      {
        name: 'folder-breeze-mail-cloud-open',
        folderNames: ['breeze-mail-cloud-open'],
      },
      {
        name: 'folder-breeze-mail-cloud',
        folderNames: ['breeze-mail-cloud'],
      },
      {
        name: 'folder-breeze-mail-open',
        folderNames: ['breeze-mail-open'],
      },
      {
        name: 'folder-breeze-mail',
        folderNames: ['breeze-mail'],
      },
      {
        name: 'folder-breeze-mega-open',
        folderNames: ['breeze-mega-open'],
      },
      {
        name: 'folder-breeze-mega',
        folderNames: ['breeze-mega'],
      },
      {
        name: 'folder-breeze-meocloud-open',
        folderNames: ['breeze-meocloud-open'],
      },
      {
        name: 'folder-breeze-meocloud',
        folderNames: ['breeze-meocloud'],
      },
      {
        name: 'folder-breeze-music-open-open',
        folderNames: ['breeze-music-open-open'],
      },
      {
        name: 'folder-breeze-music-open',
        folderNames: ['breeze-music-open'],
      },
      {
        name: 'folder-breeze-music',
        folderNames: ['breeze-music'],
      },
      {
        name: 'folder-breeze-network-open',
        folderNames: ['breeze-network-open'],
      },
      {
        name: 'folder-breeze-network',
        folderNames: ['breeze-network'],
      },
      {
        name: 'folder-breeze-nextcloud-open',
        folderNames: ['breeze-nextcloud-open'],
      },
      {
        name: 'folder-breeze-nextcloud',
        folderNames: ['breeze-nextcloud'],
      },
      {
        name: 'folder-breeze-notes-open',
        folderNames: ['breeze-notes-open'],
      },
      {
        name: 'folder-breeze-notes',
        folderNames: ['breeze-notes'],
      },
      {
        name: 'folder-breeze-obsidian-open',
        folderNames: ['breeze-obsidian-open'],
      },
      {
        name: 'folder-breeze-obsidian',
        folderNames: ['breeze-obsidian'],
      },
      {
        name: 'folder-breeze-onedrive-open',
        folderNames: ['breeze-onedrive-open'],
      },
      {
        name: 'folder-breeze-onedrive',
        folderNames: ['breeze-onedrive'],
      },
      {
        name: 'folder-breeze-open-open',
        folderNames: ['breeze-open-open'],
      },
      {
        name: 'folder-breeze-open',
        folderNames: ['breeze-open'],
      },
      {
        name: 'folder-breeze-owncloud-open',
        folderNames: ['breeze-owncloud-open'],
      },
      {
        name: 'folder-breeze-owncloud',
        folderNames: ['breeze-owncloud'],
      },
      {
        name: 'folder-breeze-pcloud-open',
        folderNames: ['breeze-pcloud-open'],
      },
      {
        name: 'folder-breeze-pcloud',
        folderNames: ['breeze-pcloud'],
      },
      {
        name: 'folder-breeze-photo-open',
        folderNames: ['breeze-photo-open'],
      },
      {
        name: 'folder-breeze-photo',
        folderNames: ['breeze-photo'],
      },
      {
        name: 'folder-breeze-pictures-open-open',
        folderNames: ['breeze-pictures-open-open'],
      },
      {
        name: 'folder-breeze-pictures-open',
        folderNames: ['breeze-pictures-open'],
      },
      {
        name: 'folder-breeze-pictures',
        folderNames: ['breeze-pictures'],
      },
      {
        name: 'folder-breeze-print-open',
        folderNames: ['breeze-print-open'],
      },
      {
        name: 'folder-breeze-print',
        folderNames: ['breeze-print'],
      },
      {
        name: 'folder-breeze-private-open',
        folderNames: ['breeze-private-open'],
      },
      {
        name: 'folder-breeze-private',
        folderNames: ['breeze-private'],
      },
      {
        name: 'folder-breeze-projects-open',
        folderNames: ['breeze-projects-open'],
      },
      {
        name: 'folder-breeze-projects',
        folderNames: ['breeze-projects'],
      },
      {
        name: 'folder-breeze-public-open',
        folderNames: ['breeze-public-open'],
      },
      {
        name: 'folder-breeze-public',
        folderNames: ['breeze-public'],
      },
      {
        name: 'folder-breeze-publicshare-open-open',
        folderNames: ['breeze-publicshare-open-open'],
      },
      {
        name: 'folder-breeze-publicshare-open',
        folderNames: ['breeze-publicshare-open'],
      },
      {
        name: 'folder-breeze-remote-open-open',
        folderNames: ['breeze-remote-open-open'],
      },
      {
        name: 'folder-breeze-remote-open',
        folderNames: ['breeze-remote-open'],
      },
      {
        name: 'folder-breeze-remote',
        folderNames: ['breeze-remote'],
      },
      {
        name: 'folder-breeze-script-open',
        folderNames: ['breeze-script-open'],
      },
      {
        name: 'folder-breeze-script',
        folderNames: ['breeze-script'],
      },
      {
        name: 'folder-breeze-snap-open',
        folderNames: ['breeze-snap-open'],
      },
      {
        name: 'folder-breeze-snap',
        folderNames: ['breeze-snap'],
      },
      {
        name: 'folder-breeze-steam-open',
        folderNames: ['breeze-steam-open'],
      },
      {
        name: 'folder-breeze-steam',
        folderNames: ['breeze-steam'],
      },
      {
        name: 'folder-breeze-sync-open',
        folderNames: ['breeze-sync-open'],
      },
      {
        name: 'folder-breeze-sync',
        folderNames: ['breeze-sync'],
      },
      {
        name: 'folder-breeze-syncthing-open',
        folderNames: ['breeze-syncthing-open'],
      },
      {
        name: 'folder-breeze-syncthing',
        folderNames: ['breeze-syncthing'],
      },
      {
        name: 'folder-breeze-systemd-open',
        folderNames: ['breeze-systemd-open'],
      },
      {
        name: 'folder-breeze-systemd',
        folderNames: ['breeze-systemd'],
      },
      {
        name: 'folder-breeze-tar-open',
        folderNames: ['breeze-tar-open'],
      },
      {
        name: 'folder-breeze-tar',
        folderNames: ['breeze-tar'],
      },
      {
        name: 'folder-breeze-templates-open-open',
        folderNames: ['breeze-templates-open-open'],
      },
      {
        name: 'folder-breeze-templates-open',
        folderNames: ['breeze-templates-open'],
      },
      {
        name: 'folder-breeze-templates',
        folderNames: ['breeze-templates'],
      },
      {
        name: 'folder-breeze-torrent-open',
        folderNames: ['breeze-torrent-open'],
      },
      {
        name: 'folder-breeze-torrent',
        folderNames: ['breeze-torrent'],
      },
      {
        name: 'folder-breeze-unlocked-open',
        folderNames: ['breeze-unlocked-open'],
      },
      {
        name: 'folder-breeze-unlocked',
        folderNames: ['breeze-unlocked'],
      },
      {
        name: 'folder-breeze-vbox-open',
        folderNames: ['breeze-vbox-open'],
      },
      {
        name: 'folder-breeze-vbox',
        folderNames: ['breeze-vbox'],
      },
      {
        name: 'folder-breeze-video-open',
        folderNames: ['breeze-video-open'],
      },
      {
        name: 'folder-breeze-video',
        folderNames: ['breeze-video'],
      },
      {
        name: 'folder-breeze-videos-open-open',
        folderNames: ['breeze-videos-open-open'],
      },
      {
        name: 'folder-breeze-videos-open',
        folderNames: ['breeze-videos-open'],
      },
      {
        name: 'folder-breeze-videos',
        folderNames: ['breeze-videos'],
      },
      {
        name: 'folder-breeze-visiting-open',
        folderNames: ['breeze-visiting-open'],
      },
      {
        name: 'folder-breeze-visiting',
        folderNames: ['breeze-visiting'],
      },
      {
        name: 'folder-breeze-wifi-open',
        folderNames: ['breeze-wifi-open'],
      },
      {
        name: 'folder-breeze-wifi',
        folderNames: ['breeze-wifi'],
      },
      {
        name: 'folder-breeze-wine-open',
        folderNames: ['breeze-wine-open'],
      },
      {
        name: 'folder-breeze-wine',
        folderNames: ['breeze-wine'],
      },
      {
        name: 'folder-breeze-yandex-disk-open',
        folderNames: ['breeze-yandex-disk-open'],
      },
      {
        name: 'folder-breeze-yandex-disk',
        folderNames: ['breeze-yandex-disk'],
      },
      {
        name: 'folder-breeze',
        folderNames: ['breeze'],
      },
      {
        name: 'folder-brown-activities-open',
        folderNames: ['brown-activities-open'],
      },
      {
        name: 'folder-brown-activities',
        folderNames: ['brown-activities'],
      },
      {
        name: 'folder-brown-android-open',
        folderNames: ['brown-android-open'],
      },
      {
        name: 'folder-brown-android',
        folderNames: ['brown-android'],
      },
      {
        name: 'folder-brown-apple-open',
        folderNames: ['brown-apple-open'],
      },
      {
        name: 'folder-brown-apple',
        folderNames: ['brown-apple'],
      },
      {
        name: 'folder-brown-applications-open',
        folderNames: ['brown-applications-open'],
      },
      {
        name: 'folder-brown-applications',
        folderNames: ['brown-applications'],
      },
      {
        name: 'folder-brown-arduino-open',
        folderNames: ['brown-arduino-open'],
      },
      {
        name: 'folder-brown-arduino',
        folderNames: ['brown-arduino'],
      },
      {
        name: 'folder-brown-backup-open',
        folderNames: ['brown-backup-open'],
      },
      {
        name: 'folder-brown-backup',
        folderNames: ['brown-backup'],
      },
      {
        name: 'folder-brown-books-open',
        folderNames: ['brown-books-open'],
      },
      {
        name: 'folder-brown-books',
        folderNames: ['brown-books'],
      },
      {
        name: 'folder-brown-cd-open',
        folderNames: ['brown-cd-open'],
      },
      {
        name: 'folder-brown-cd',
        folderNames: ['brown-cd'],
      },
      {
        name: 'folder-brown-code-open',
        folderNames: ['brown-code-open'],
      },
      {
        name: 'folder-brown-code',
        folderNames: ['brown-code'],
      },
      {
        name: 'folder-brown-desktop-open',
        folderNames: ['brown-desktop-open'],
      },
      {
        name: 'folder-brown-desktop',
        folderNames: ['brown-desktop'],
      },
      {
        name: 'folder-brown-development-open',
        folderNames: ['brown-development-open'],
      },
      {
        name: 'folder-brown-development',
        folderNames: ['brown-development'],
      },
      {
        name: 'folder-brown-docker-open',
        folderNames: ['brown-docker-open'],
      },
      {
        name: 'folder-brown-docker',
        folderNames: ['brown-docker'],
      },
      {
        name: 'folder-brown-documents-open-open',
        folderNames: ['brown-documents-open-open'],
      },
      {
        name: 'folder-brown-documents-open',
        folderNames: ['brown-documents-open'],
      },
      {
        name: 'folder-brown-documents',
        folderNames: ['brown-documents'],
      },
      {
        name: 'folder-brown-download-open-open',
        folderNames: ['brown-download-open-open'],
      },
      {
        name: 'folder-brown-download-open',
        folderNames: ['brown-download-open'],
      },
      {
        name: 'folder-brown-download',
        folderNames: ['brown-download'],
      },
      {
        name: 'folder-brown-downloads-open',
        folderNames: ['brown-downloads-open'],
      },
      {
        name: 'folder-brown-downloads',
        folderNames: ['brown-downloads'],
      },
      {
        name: 'folder-brown-drag-accept-open',
        folderNames: ['brown-drag-accept-open'],
      },
      {
        name: 'folder-brown-drag-accept',
        folderNames: ['brown-drag-accept'],
      },
      {
        name: 'folder-brown-dropbox-open',
        folderNames: ['brown-dropbox-open'],
      },
      {
        name: 'folder-brown-dropbox',
        folderNames: ['brown-dropbox'],
      },
      {
        name: 'folder-brown-favorites-open',
        folderNames: ['brown-favorites-open'],
      },
      {
        name: 'folder-brown-favorites',
        folderNames: ['brown-favorites'],
      },
      {
        name: 'folder-brown-games-open',
        folderNames: ['brown-games-open'],
      },
      {
        name: 'folder-brown-games',
        folderNames: ['brown-games'],
      },
      {
        name: 'folder-brown-git-open',
        folderNames: ['brown-git-open'],
      },
      {
        name: 'folder-brown-git',
        folderNames: ['brown-git'],
      },
      {
        name: 'folder-brown-github-open',
        folderNames: ['brown-github-open'],
      },
      {
        name: 'folder-brown-github',
        folderNames: ['brown-github'],
      },
      {
        name: 'folder-brown-gitlab-open',
        folderNames: ['brown-gitlab-open'],
      },
      {
        name: 'folder-brown-gitlab',
        folderNames: ['brown-gitlab'],
      },
      {
        name: 'folder-brown-gnome-open',
        folderNames: ['brown-gnome-open'],
      },
      {
        name: 'folder-brown-gnome',
        folderNames: ['brown-gnome'],
      },
      {
        name: 'folder-brown-google-drive-open',
        folderNames: ['brown-google-drive-open'],
      },
      {
        name: 'folder-brown-google-drive',
        folderNames: ['brown-google-drive'],
      },
      {
        name: 'folder-brown-image-people-open',
        folderNames: ['brown-image-people-open'],
      },
      {
        name: 'folder-brown-image-people',
        folderNames: ['brown-image-people'],
      },
      {
        name: 'folder-brown-important-open',
        folderNames: ['brown-important-open'],
      },
      {
        name: 'folder-brown-important',
        folderNames: ['brown-important'],
      },
      {
        name: 'folder-brown-java-open',
        folderNames: ['brown-java-open'],
      },
      {
        name: 'folder-brown-java',
        folderNames: ['brown-java'],
      },
      {
        name: 'folder-brown-kde-open',
        folderNames: ['brown-kde-open'],
      },
      {
        name: 'folder-brown-kde',
        folderNames: ['brown-kde'],
      },
      {
        name: 'folder-brown-linux-open',
        folderNames: ['brown-linux-open'],
      },
      {
        name: 'folder-brown-linux',
        folderNames: ['brown-linux'],
      },
      {
        name: 'folder-brown-locked-open',
        folderNames: ['brown-locked-open'],
      },
      {
        name: 'folder-brown-locked',
        folderNames: ['brown-locked'],
      },
      {
        name: 'folder-brown-mail-cloud-open',
        folderNames: ['brown-mail-cloud-open'],
      },
      {
        name: 'folder-brown-mail-cloud',
        folderNames: ['brown-mail-cloud'],
      },
      {
        name: 'folder-brown-mail-open',
        folderNames: ['brown-mail-open'],
      },
      {
        name: 'folder-brown-mail',
        folderNames: ['brown-mail'],
      },
      {
        name: 'folder-brown-mega-open',
        folderNames: ['brown-mega-open'],
      },
      {
        name: 'folder-brown-mega',
        folderNames: ['brown-mega'],
      },
      {
        name: 'folder-brown-meocloud-open',
        folderNames: ['brown-meocloud-open'],
      },
      {
        name: 'folder-brown-meocloud',
        folderNames: ['brown-meocloud'],
      },
      {
        name: 'folder-brown-music-open-open',
        folderNames: ['brown-music-open-open'],
      },
      {
        name: 'folder-brown-music-open',
        folderNames: ['brown-music-open'],
      },
      {
        name: 'folder-brown-music',
        folderNames: ['brown-music'],
      },
      {
        name: 'folder-brown-network-open',
        folderNames: ['brown-network-open'],
      },
      {
        name: 'folder-brown-network',
        folderNames: ['brown-network'],
      },
      {
        name: 'folder-brown-nextcloud-open',
        folderNames: ['brown-nextcloud-open'],
      },
      {
        name: 'folder-brown-nextcloud',
        folderNames: ['brown-nextcloud'],
      },
      {
        name: 'folder-brown-notes-open',
        folderNames: ['brown-notes-open'],
      },
      {
        name: 'folder-brown-notes',
        folderNames: ['brown-notes'],
      },
      {
        name: 'folder-brown-obsidian-open',
        folderNames: ['brown-obsidian-open'],
      },
      {
        name: 'folder-brown-obsidian',
        folderNames: ['brown-obsidian'],
      },
      {
        name: 'folder-brown-onedrive-open',
        folderNames: ['brown-onedrive-open'],
      },
      {
        name: 'folder-brown-onedrive',
        folderNames: ['brown-onedrive'],
      },
      {
        name: 'folder-brown-open-open',
        folderNames: ['brown-open-open'],
      },
      {
        name: 'folder-brown-open',
        folderNames: ['brown-open'],
      },
      {
        name: 'folder-brown-owncloud-open',
        folderNames: ['brown-owncloud-open'],
      },
      {
        name: 'folder-brown-owncloud',
        folderNames: ['brown-owncloud'],
      },
      {
        name: 'folder-brown-pcloud-open',
        folderNames: ['brown-pcloud-open'],
      },
      {
        name: 'folder-brown-pcloud',
        folderNames: ['brown-pcloud'],
      },
      {
        name: 'folder-brown-photo-open',
        folderNames: ['brown-photo-open'],
      },
      {
        name: 'folder-brown-photo',
        folderNames: ['brown-photo'],
      },
      {
        name: 'folder-brown-pictures-open-open',
        folderNames: ['brown-pictures-open-open'],
      },
      {
        name: 'folder-brown-pictures-open',
        folderNames: ['brown-pictures-open'],
      },
      {
        name: 'folder-brown-pictures',
        folderNames: ['brown-pictures'],
      },
      {
        name: 'folder-brown-print-open',
        folderNames: ['brown-print-open'],
      },
      {
        name: 'folder-brown-print',
        folderNames: ['brown-print'],
      },
      {
        name: 'folder-brown-private-open',
        folderNames: ['brown-private-open'],
      },
      {
        name: 'folder-brown-private',
        folderNames: ['brown-private'],
      },
      {
        name: 'folder-brown-projects-open',
        folderNames: ['brown-projects-open'],
      },
      {
        name: 'folder-brown-projects',
        folderNames: ['brown-projects'],
      },
      {
        name: 'folder-brown-public-open',
        folderNames: ['brown-public-open'],
      },
      {
        name: 'folder-brown-public',
        folderNames: ['brown-public'],
      },
      {
        name: 'folder-brown-publicshare-open-open',
        folderNames: ['brown-publicshare-open-open'],
      },
      {
        name: 'folder-brown-publicshare-open',
        folderNames: ['brown-publicshare-open'],
      },
      {
        name: 'folder-brown-remote-open-open',
        folderNames: ['brown-remote-open-open'],
      },
      {
        name: 'folder-brown-remote-open',
        folderNames: ['brown-remote-open'],
      },
      {
        name: 'folder-brown-remote',
        folderNames: ['brown-remote'],
      },
      {
        name: 'folder-brown-script-open',
        folderNames: ['brown-script-open'],
      },
      {
        name: 'folder-brown-script',
        folderNames: ['brown-script'],
      },
      {
        name: 'folder-brown-snap-open',
        folderNames: ['brown-snap-open'],
      },
      {
        name: 'folder-brown-snap',
        folderNames: ['brown-snap'],
      },
      {
        name: 'folder-brown-steam-open',
        folderNames: ['brown-steam-open'],
      },
      {
        name: 'folder-brown-steam',
        folderNames: ['brown-steam'],
      },
      {
        name: 'folder-brown-sync-open',
        folderNames: ['brown-sync-open'],
      },
      {
        name: 'folder-brown-sync',
        folderNames: ['brown-sync'],
      },
      {
        name: 'folder-brown-syncthing-open',
        folderNames: ['brown-syncthing-open'],
      },
      {
        name: 'folder-brown-syncthing',
        folderNames: ['brown-syncthing'],
      },
      {
        name: 'folder-brown-systemd-open',
        folderNames: ['brown-systemd-open'],
      },
      {
        name: 'folder-brown-systemd',
        folderNames: ['brown-systemd'],
      },
      {
        name: 'folder-brown-tar-open',
        folderNames: ['brown-tar-open'],
      },
      {
        name: 'folder-brown-tar',
        folderNames: ['brown-tar'],
      },
      {
        name: 'folder-brown-templates-open-open',
        folderNames: ['brown-templates-open-open'],
      },
      {
        name: 'folder-brown-templates-open',
        folderNames: ['brown-templates-open'],
      },
      {
        name: 'folder-brown-templates',
        folderNames: ['brown-templates'],
      },
      {
        name: 'folder-brown-torrent-open',
        folderNames: ['brown-torrent-open'],
      },
      {
        name: 'folder-brown-torrent',
        folderNames: ['brown-torrent'],
      },
      {
        name: 'folder-brown-unlocked-open',
        folderNames: ['brown-unlocked-open'],
      },
      {
        name: 'folder-brown-unlocked',
        folderNames: ['brown-unlocked'],
      },
      {
        name: 'folder-brown-vbox-open',
        folderNames: ['brown-vbox-open'],
      },
      {
        name: 'folder-brown-vbox',
        folderNames: ['brown-vbox'],
      },
      {
        name: 'folder-brown-video-open',
        folderNames: ['brown-video-open'],
      },
      {
        name: 'folder-brown-video',
        folderNames: ['brown-video'],
      },
      {
        name: 'folder-brown-videos-open-open',
        folderNames: ['brown-videos-open-open'],
      },
      {
        name: 'folder-brown-videos-open',
        folderNames: ['brown-videos-open'],
      },
      {
        name: 'folder-brown-videos',
        folderNames: ['brown-videos'],
      },
      {
        name: 'folder-brown-visiting-open',
        folderNames: ['brown-visiting-open'],
      },
      {
        name: 'folder-brown-visiting',
        folderNames: ['brown-visiting'],
      },
      {
        name: 'folder-brown-wifi-open',
        folderNames: ['brown-wifi-open'],
      },
      {
        name: 'folder-brown-wifi',
        folderNames: ['brown-wifi'],
      },
      {
        name: 'folder-brown-wine-open',
        folderNames: ['brown-wine-open'],
      },
      {
        name: 'folder-brown-wine',
        folderNames: ['brown-wine'],
      },
      {
        name: 'folder-brown-yandex-disk-open',
        folderNames: ['brown-yandex-disk-open'],
      },
      {
        name: 'folder-brown-yandex-disk',
        folderNames: ['brown-yandex-disk'],
      },
      {
        name: 'folder-brown',
        folderNames: ['brown'],
      },
      {
        name: 'folder-buildkite-open-open',
        folderNames: ['buildkite-open-open'],
      },
      {
        name: 'folder-buildkite-open',
        folderNames: ['buildkite-open'],
      },
      {
        name: 'folder-cabal-open',
        folderNames: ['cabal-open'],
      },
      {
        name: 'folder-cabal',
        folderNames: ['cabal'],
      },
      {
        name: 'folder-cake-open',
        folderNames: ['cake-open'],
      },
      {
        name: 'folder-cake',
        folderNames: ['cake'],
      },
      {
        name: 'folder-calculate-open',
        folderNames: ['calculate-open'],
      },
      {
        name: 'folder-calculate',
        folderNames: ['calculate'],
      },
      {
        name: 'folder-camera-open',
        folderNames: ['camera-open'],
      },
      {
        name: 'folder-camera',
        folderNames: ['camera'],
      },
      {
        name: 'folder-carmine-activities-open',
        folderNames: ['carmine-activities-open'],
      },
      {
        name: 'folder-carmine-activities',
        folderNames: ['carmine-activities'],
      },
      {
        name: 'folder-carmine-android-open',
        folderNames: ['carmine-android-open'],
      },
      {
        name: 'folder-carmine-android',
        folderNames: ['carmine-android'],
      },
      {
        name: 'folder-carmine-apple-open',
        folderNames: ['carmine-apple-open'],
      },
      {
        name: 'folder-carmine-apple',
        folderNames: ['carmine-apple'],
      },
      {
        name: 'folder-carmine-applications-open',
        folderNames: ['carmine-applications-open'],
      },
      {
        name: 'folder-carmine-applications',
        folderNames: ['carmine-applications'],
      },
      {
        name: 'folder-carmine-arduino-open',
        folderNames: ['carmine-arduino-open'],
      },
      {
        name: 'folder-carmine-arduino',
        folderNames: ['carmine-arduino'],
      },
      {
        name: 'folder-carmine-backup-open',
        folderNames: ['carmine-backup-open'],
      },
      {
        name: 'folder-carmine-backup',
        folderNames: ['carmine-backup'],
      },
      {
        name: 'folder-carmine-books-open',
        folderNames: ['carmine-books-open'],
      },
      {
        name: 'folder-carmine-books',
        folderNames: ['carmine-books'],
      },
      {
        name: 'folder-carmine-cd-open',
        folderNames: ['carmine-cd-open'],
      },
      {
        name: 'folder-carmine-cd',
        folderNames: ['carmine-cd'],
      },
      {
        name: 'folder-carmine-code-open',
        folderNames: ['carmine-code-open'],
      },
      {
        name: 'folder-carmine-code',
        folderNames: ['carmine-code'],
      },
      {
        name: 'folder-carmine-desktop-open',
        folderNames: ['carmine-desktop-open'],
      },
      {
        name: 'folder-carmine-desktop',
        folderNames: ['carmine-desktop'],
      },
      {
        name: 'folder-carmine-development-open',
        folderNames: ['carmine-development-open'],
      },
      {
        name: 'folder-carmine-development',
        folderNames: ['carmine-development'],
      },
      {
        name: 'folder-carmine-docker-open',
        folderNames: ['carmine-docker-open'],
      },
      {
        name: 'folder-carmine-docker',
        folderNames: ['carmine-docker'],
      },
      {
        name: 'folder-carmine-documents-open-open',
        folderNames: ['carmine-documents-open-open'],
      },
      {
        name: 'folder-carmine-documents-open',
        folderNames: ['carmine-documents-open'],
      },
      {
        name: 'folder-carmine-documents',
        folderNames: ['carmine-documents'],
      },
      {
        name: 'folder-carmine-download-open-open',
        folderNames: ['carmine-download-open-open'],
      },
      {
        name: 'folder-carmine-download-open',
        folderNames: ['carmine-download-open'],
      },
      {
        name: 'folder-carmine-download',
        folderNames: ['carmine-download'],
      },
      {
        name: 'folder-carmine-downloads-open',
        folderNames: ['carmine-downloads-open'],
      },
      {
        name: 'folder-carmine-downloads',
        folderNames: ['carmine-downloads'],
      },
      {
        name: 'folder-carmine-drag-accept-open',
        folderNames: ['carmine-drag-accept-open'],
      },
      {
        name: 'folder-carmine-drag-accept',
        folderNames: ['carmine-drag-accept'],
      },
      {
        name: 'folder-carmine-dropbox-open',
        folderNames: ['carmine-dropbox-open'],
      },
      {
        name: 'folder-carmine-dropbox',
        folderNames: ['carmine-dropbox'],
      },
      {
        name: 'folder-carmine-favorites-open',
        folderNames: ['carmine-favorites-open'],
      },
      {
        name: 'folder-carmine-favorites',
        folderNames: ['carmine-favorites'],
      },
      {
        name: 'folder-carmine-games-open',
        folderNames: ['carmine-games-open'],
      },
      {
        name: 'folder-carmine-games',
        folderNames: ['carmine-games'],
      },
      {
        name: 'folder-carmine-git-open',
        folderNames: ['carmine-git-open'],
      },
      {
        name: 'folder-carmine-git',
        folderNames: ['carmine-git'],
      },
      {
        name: 'folder-carmine-github-open',
        folderNames: ['carmine-github-open'],
      },
      {
        name: 'folder-carmine-github',
        folderNames: ['carmine-github'],
      },
      {
        name: 'folder-carmine-gitlab-open',
        folderNames: ['carmine-gitlab-open'],
      },
      {
        name: 'folder-carmine-gitlab',
        folderNames: ['carmine-gitlab'],
      },
      {
        name: 'folder-carmine-gnome-open',
        folderNames: ['carmine-gnome-open'],
      },
      {
        name: 'folder-carmine-gnome',
        folderNames: ['carmine-gnome'],
      },
      {
        name: 'folder-carmine-google-drive-open',
        folderNames: ['carmine-google-drive-open'],
      },
      {
        name: 'folder-carmine-google-drive',
        folderNames: ['carmine-google-drive'],
      },
      {
        name: 'folder-carmine-image-people-open',
        folderNames: ['carmine-image-people-open'],
      },
      {
        name: 'folder-carmine-image-people',
        folderNames: ['carmine-image-people'],
      },
      {
        name: 'folder-carmine-important-open',
        folderNames: ['carmine-important-open'],
      },
      {
        name: 'folder-carmine-important',
        folderNames: ['carmine-important'],
      },
      {
        name: 'folder-carmine-java-open',
        folderNames: ['carmine-java-open'],
      },
      {
        name: 'folder-carmine-java',
        folderNames: ['carmine-java'],
      },
      {
        name: 'folder-carmine-kde-open',
        folderNames: ['carmine-kde-open'],
      },
      {
        name: 'folder-carmine-kde',
        folderNames: ['carmine-kde'],
      },
      {
        name: 'folder-carmine-linux-open',
        folderNames: ['carmine-linux-open'],
      },
      {
        name: 'folder-carmine-linux',
        folderNames: ['carmine-linux'],
      },
      {
        name: 'folder-carmine-locked-open',
        folderNames: ['carmine-locked-open'],
      },
      {
        name: 'folder-carmine-locked',
        folderNames: ['carmine-locked'],
      },
      {
        name: 'folder-carmine-mail-cloud-open',
        folderNames: ['carmine-mail-cloud-open'],
      },
      {
        name: 'folder-carmine-mail-cloud',
        folderNames: ['carmine-mail-cloud'],
      },
      {
        name: 'folder-carmine-mail-open',
        folderNames: ['carmine-mail-open'],
      },
      {
        name: 'folder-carmine-mail',
        folderNames: ['carmine-mail'],
      },
      {
        name: 'folder-carmine-mega-open',
        folderNames: ['carmine-mega-open'],
      },
      {
        name: 'folder-carmine-mega',
        folderNames: ['carmine-mega'],
      },
      {
        name: 'folder-carmine-meocloud-open',
        folderNames: ['carmine-meocloud-open'],
      },
      {
        name: 'folder-carmine-meocloud',
        folderNames: ['carmine-meocloud'],
      },
      {
        name: 'folder-carmine-music-open-open',
        folderNames: ['carmine-music-open-open'],
      },
      {
        name: 'folder-carmine-music-open',
        folderNames: ['carmine-music-open'],
      },
      {
        name: 'folder-carmine-music',
        folderNames: ['carmine-music'],
      },
      {
        name: 'folder-carmine-network-open',
        folderNames: ['carmine-network-open'],
      },
      {
        name: 'folder-carmine-network',
        folderNames: ['carmine-network'],
      },
      {
        name: 'folder-carmine-nextcloud-open',
        folderNames: ['carmine-nextcloud-open'],
      },
      {
        name: 'folder-carmine-nextcloud',
        folderNames: ['carmine-nextcloud'],
      },
      {
        name: 'folder-carmine-notes-open',
        folderNames: ['carmine-notes-open'],
      },
      {
        name: 'folder-carmine-notes',
        folderNames: ['carmine-notes'],
      },
      {
        name: 'folder-carmine-obsidian-open',
        folderNames: ['carmine-obsidian-open'],
      },
      {
        name: 'folder-carmine-obsidian',
        folderNames: ['carmine-obsidian'],
      },
      {
        name: 'folder-carmine-onedrive-open',
        folderNames: ['carmine-onedrive-open'],
      },
      {
        name: 'folder-carmine-onedrive',
        folderNames: ['carmine-onedrive'],
      },
      {
        name: 'folder-carmine-open-open',
        folderNames: ['carmine-open-open'],
      },
      {
        name: 'folder-carmine-open',
        folderNames: ['carmine-open'],
      },
      {
        name: 'folder-carmine-owncloud-open',
        folderNames: ['carmine-owncloud-open'],
      },
      {
        name: 'folder-carmine-owncloud',
        folderNames: ['carmine-owncloud'],
      },
      {
        name: 'folder-carmine-pcloud-open',
        folderNames: ['carmine-pcloud-open'],
      },
      {
        name: 'folder-carmine-pcloud',
        folderNames: ['carmine-pcloud'],
      },
      {
        name: 'folder-carmine-photo-open',
        folderNames: ['carmine-photo-open'],
      },
      {
        name: 'folder-carmine-photo',
        folderNames: ['carmine-photo'],
      },
      {
        name: 'folder-carmine-pictures-open-open',
        folderNames: ['carmine-pictures-open-open'],
      },
      {
        name: 'folder-carmine-pictures-open',
        folderNames: ['carmine-pictures-open'],
      },
      {
        name: 'folder-carmine-pictures',
        folderNames: ['carmine-pictures'],
      },
      {
        name: 'folder-carmine-print-open',
        folderNames: ['carmine-print-open'],
      },
      {
        name: 'folder-carmine-print',
        folderNames: ['carmine-print'],
      },
      {
        name: 'folder-carmine-private-open',
        folderNames: ['carmine-private-open'],
      },
      {
        name: 'folder-carmine-private',
        folderNames: ['carmine-private'],
      },
      {
        name: 'folder-carmine-projects-open',
        folderNames: ['carmine-projects-open'],
      },
      {
        name: 'folder-carmine-projects',
        folderNames: ['carmine-projects'],
      },
      {
        name: 'folder-carmine-public-open',
        folderNames: ['carmine-public-open'],
      },
      {
        name: 'folder-carmine-public',
        folderNames: ['carmine-public'],
      },
      {
        name: 'folder-carmine-publicshare-open-open',
        folderNames: ['carmine-publicshare-open-open'],
      },
      {
        name: 'folder-carmine-publicshare-open',
        folderNames: ['carmine-publicshare-open'],
      },
      {
        name: 'folder-carmine-remote-open-open',
        folderNames: ['carmine-remote-open-open'],
      },
      {
        name: 'folder-carmine-remote-open',
        folderNames: ['carmine-remote-open'],
      },
      {
        name: 'folder-carmine-remote',
        folderNames: ['carmine-remote'],
      },
      {
        name: 'folder-carmine-script-open',
        folderNames: ['carmine-script-open'],
      },
      {
        name: 'folder-carmine-script',
        folderNames: ['carmine-script'],
      },
      {
        name: 'folder-carmine-snap-open',
        folderNames: ['carmine-snap-open'],
      },
      {
        name: 'folder-carmine-snap',
        folderNames: ['carmine-snap'],
      },
      {
        name: 'folder-carmine-steam-open',
        folderNames: ['carmine-steam-open'],
      },
      {
        name: 'folder-carmine-steam',
        folderNames: ['carmine-steam'],
      },
      {
        name: 'folder-carmine-sync-open',
        folderNames: ['carmine-sync-open'],
      },
      {
        name: 'folder-carmine-sync',
        folderNames: ['carmine-sync'],
      },
      {
        name: 'folder-carmine-syncthing-open',
        folderNames: ['carmine-syncthing-open'],
      },
      {
        name: 'folder-carmine-syncthing',
        folderNames: ['carmine-syncthing'],
      },
      {
        name: 'folder-carmine-systemd-open',
        folderNames: ['carmine-systemd-open'],
      },
      {
        name: 'folder-carmine-systemd',
        folderNames: ['carmine-systemd'],
      },
      {
        name: 'folder-carmine-tar-open',
        folderNames: ['carmine-tar-open'],
      },
      {
        name: 'folder-carmine-tar',
        folderNames: ['carmine-tar'],
      },
      {
        name: 'folder-carmine-templates-open-open',
        folderNames: ['carmine-templates-open-open'],
      },
      {
        name: 'folder-carmine-templates-open',
        folderNames: ['carmine-templates-open'],
      },
      {
        name: 'folder-carmine-templates',
        folderNames: ['carmine-templates'],
      },
      {
        name: 'folder-carmine-torrent-open',
        folderNames: ['carmine-torrent-open'],
      },
      {
        name: 'folder-carmine-torrent',
        folderNames: ['carmine-torrent'],
      },
      {
        name: 'folder-carmine-unlocked-open',
        folderNames: ['carmine-unlocked-open'],
      },
      {
        name: 'folder-carmine-unlocked',
        folderNames: ['carmine-unlocked'],
      },
      {
        name: 'folder-carmine-vbox-open',
        folderNames: ['carmine-vbox-open'],
      },
      {
        name: 'folder-carmine-vbox',
        folderNames: ['carmine-vbox'],
      },
      {
        name: 'folder-carmine-video-open',
        folderNames: ['carmine-video-open'],
      },
      {
        name: 'folder-carmine-video',
        folderNames: ['carmine-video'],
      },
      {
        name: 'folder-carmine-videos-open-open',
        folderNames: ['carmine-videos-open-open'],
      },
      {
        name: 'folder-carmine-videos-open',
        folderNames: ['carmine-videos-open'],
      },
      {
        name: 'folder-carmine-videos',
        folderNames: ['carmine-videos'],
      },
      {
        name: 'folder-carmine-visiting-open',
        folderNames: ['carmine-visiting-open'],
      },
      {
        name: 'folder-carmine-visiting',
        folderNames: ['carmine-visiting'],
      },
      {
        name: 'folder-carmine-wifi-open',
        folderNames: ['carmine-wifi-open'],
      },
      {
        name: 'folder-carmine-wifi',
        folderNames: ['carmine-wifi'],
      },
      {
        name: 'folder-carmine-wine-open',
        folderNames: ['carmine-wine-open'],
      },
      {
        name: 'folder-carmine-wine',
        folderNames: ['carmine-wine'],
      },
      {
        name: 'folder-carmine-yandex-disk-open',
        folderNames: ['carmine-yandex-disk-open'],
      },
      {
        name: 'folder-carmine-yandex-disk',
        folderNames: ['carmine-yandex-disk'],
      },
      {
        name: 'folder-carmine',
        folderNames: ['carmine'],
      },
      {
        name: 'folder-cart-open-open',
        folderNames: ['cart-open-open'],
      },
      {
        name: 'folder-cart-open',
        folderNames: ['cart-open'],
      },
      {
        name: 'folder-cd-open',
        folderNames: ['cd-open'],
      },
      {
        name: 'folder-cd',
        folderNames: ['cd'],
      },
      {
        name: 'folder-changesets-open-open',
        folderNames: ['changesets-open-open'],
      },
      {
        name: 'folder-changesets-open',
        folderNames: ['changesets-open'],
      },
      {
        name: 'folder-channels-open',
        folderNames: ['channels-open'],
      },
      {
        name: 'folder-channels',
        folderNames: ['channels'],
      },
      {
        name: 'folder-chart-open',
        folderNames: ['chart-open'],
      },
      {
        name: 'folder-chart',
        folderNames: ['chart'],
      },
      {
        name: 'folder-charts-open',
        folderNames: ['charts-open'],
      },
      {
        name: 'folder-charts',
        folderNames: ['charts', 'statistics', 'Statistics', 'pulse', 'Pulse'],
      },
      {
        name: 'folder-chef-open',
        folderNames: ['chef-open'],
      },
      {
        name: 'folder-chef',
        folderNames: ['chef'],
      },
      {
        name: 'folder-ci-open-open',
        folderNames: ['ci-open-open'],
      },
      {
        name: 'folder-ci-open',
        folderNames: ['ci-open'],
      },
      {
        name: 'folder-circleci-open-open',
        folderNames: ['circleci-open-open'],
      },
      {
        name: 'folder-circleci-open',
        folderNames: ['circleci-open'],
      },
      {
        name: 'folder-class-open-open',
        folderNames: ['class-open-open'],
      },
      {
        name: 'folder-class-open',
        folderNames: ['class-open'],
      },
      {
        name: 'folder-claude-open-open',
        folderNames: ['claude-open-open'],
      },
      {
        name: 'folder-claude-open',
        folderNames: ['claude-open'],
      },
      {
        name: 'folder-client-open-open',
        folderNames: ['client-open-open'],
      },
      {
        name: 'folder-client-open',
        folderNames: ['client-open'],
      },
      {
        name: 'folder-cline-open-open',
        folderNames: ['cline-open-open'],
      },
      {
        name: 'folder-cline-open',
        folderNames: ['cline-open'],
      },
      {
        name: 'folder-cloud-functions-open-open',
        folderNames: ['cloud-functions-open-open'],
      },
      {
        name: 'folder-cloud-functions-open',
        folderNames: ['cloud-functions-open'],
      },
      {
        name: 'folder-cloud-open',
        folderNames: ['cloud-open'],
      },
      {
        name: 'folder-cloud',
        folderNames: ['cloud'],
      },
      {
        name: 'folder-cloudflare-open-open',
        folderNames: ['cloudflare-open-open'],
      },
      {
        name: 'folder-cloudflare-open',
        folderNames: ['cloudflare-open'],
      },
      {
        name: 'folder-cluster-open-open',
        folderNames: ['cluster-open-open'],
      },
      {
        name: 'folder-cluster-open',
        folderNames: ['cluster-open'],
      },
      {
        name: 'folder-cmake-open',
        folderNames: ['cmake-open'],
      },
      {
        name: 'folder-cmake',
        folderNames: ['cmake'],
      },
      {
        name: 'folder-cnab-open',
        folderNames: ['cnab-open'],
      },
      {
        name: 'folder-cnab',
        folderNames: ['cnab'],
      },
      {
        name: 'folder-cobol-open-open',
        folderNames: ['cobol-open-open'],
      },
      {
        name: 'folder-cobol-open',
        folderNames: ['cobol-open'],
      },
      {
        name: 'folder-codesandbox-open',
        folderNames: ['codesandbox-open'],
      },
      {
        name: 'folder-codesandbox',
        folderNames: ['codesandbox'],
      },
      {
        name: 'folder-comic-open',
        folderNames: ['comic-open'],
      },
      {
        name: 'folder-comic',
        folderNames: ['comic'],
      },
      {
        name: 'folder-command-open-open',
        folderNames: ['command-open-open'],
      },
      {
        name: 'folder-command-open',
        folderNames: ['command-open'],
      },
      {
        name: 'folder-components-open-open',
        folderNames: ['components-open-open'],
      },
      {
        name: 'folder-components-open',
        folderNames: ['components-open'],
      },
      {
        name: 'folder-composer-open',
        folderNames: ['composer-open'],
      },
      {
        name: 'folder-composer',
        folderNames: ['composer'],
      },
      {
        name: 'folder-conductor-open',
        folderNames: ['conductor-open'],
      },
      {
        name: 'folder-conductor',
        folderNames: ['conductor'],
      },
      {
        name: 'folder-config-open-open',
        folderNames: ['config-open-open'],
      },
      {
        name: 'folder-config-open',
        folderNames: ['config-open'],
      },
      {
        name: 'folder-connection-open-open',
        folderNames: ['connection-open-open'],
      },
      {
        name: 'folder-connection-open',
        folderNames: ['connection-open'],
      },
      {
        name: 'folder-console-open-open',
        folderNames: ['console-open-open'],
      },
      {
        name: 'folder-console-open',
        folderNames: ['console-open'],
      },
      {
        name: 'folder-constant-open-open',
        folderNames: ['constant-open-open'],
      },
      {
        name: 'folder-constant-open',
        folderNames: ['constant-open'],
      },
      {
        name: 'folder-container-open-open',
        folderNames: ['container-open-open'],
      },
      {
        name: 'folder-container-open',
        folderNames: ['container-open'],
      },
      {
        name: 'folder-content-open-open',
        folderNames: ['content-open-open'],
      },
      {
        name: 'folder-content-open',
        folderNames: ['content-open'],
      },
      {
        name: 'folder-context-open-open',
        folderNames: ['context-open-open'],
      },
      {
        name: 'folder-context-open',
        folderNames: ['context-open'],
      },
      {
        name: 'folder-contract-open-open',
        folderNames: ['contract-open-open'],
      },
      {
        name: 'folder-contract-open',
        folderNames: ['contract-open'],
      },
      {
        name: 'folder-controller-open-open',
        folderNames: ['controller-open-open'],
      },
      {
        name: 'folder-controller-open',
        folderNames: ['controller-open'],
      },
      {
        name: 'folder-copy-open',
        folderNames: ['copy-open'],
      },
      {
        name: 'folder-copy',
        folderNames: ['copy'],
      },
      {
        name: 'folder-core-open-open',
        folderNames: ['core-open-open'],
      },
      {
        name: 'folder-core-open',
        folderNames: ['core-open'],
      },
      {
        name: 'folder-coverage-open-open',
        folderNames: ['coverage-open-open'],
      },
      {
        name: 'folder-coverage-open',
        folderNames: ['coverage-open'],
      },
      {
        name: 'folder-crates-open',
        folderNames: ['crates-open'],
      },
      {
        name: 'folder-crates',
        folderNames: ['crates'],
      },
      {
        name: 'folder-cron-open',
        folderNames: ['cron-open'],
      },
      {
        name: 'folder-cron',
        folderNames: ['cron'],
      },
      {
        name: 'folder-css-open-open',
        folderNames: ['css-open-open'],
      },
      {
        name: 'folder-css-open',
        folderNames: ['css-open'],
      },
      {
        name: 'folder-cue-open-open',
        folderNames: ['cue-open-open'],
      },
      {
        name: 'folder-cue-open',
        folderNames: ['cue-open'],
      },
      {
        name: 'folder-cursor-open-open',
        folderNames: ['cursor-open-open'],
      },
      {
        name: 'folder-cursor-open',
        folderNames: ['cursor-open'],
      },
      {
        name: 'folder-cursor-open_light-open',
        folderNames: ['cursor-open_light-open'],
      },
      {
        name: 'folder-cursor-open_light',
        folderNames: ['cursor-open_light'],
      },
      {
        name: 'folder-cursor_light-open',
        folderNames: ['cursor_light-open'],
      },
      {
        name: 'folder-cursor_light',
        folderNames: ['cursor_light'],
      },
      {
        name: 'folder-custom-open-open',
        folderNames: ['custom-open-open'],
      },
      {
        name: 'folder-custom-open',
        folderNames: ['custom-open'],
      },
      {
        name: 'folder-cvs-open',
        folderNames: ['cvs-open'],
      },
      {
        name: 'folder-cvs',
        folderNames: ['cvs'],
      },
      {
        name: 'folder-cyan-activities-open',
        folderNames: ['cyan-activities-open'],
      },
      {
        name: 'folder-cyan-activities',
        folderNames: ['cyan-activities'],
      },
      {
        name: 'folder-cyan-android-open',
        folderNames: ['cyan-android-open'],
      },
      {
        name: 'folder-cyan-android',
        folderNames: ['cyan-android'],
      },
      {
        name: 'folder-cyan-apple-open',
        folderNames: ['cyan-apple-open'],
      },
      {
        name: 'folder-cyan-apple',
        folderNames: ['cyan-apple'],
      },
      {
        name: 'folder-cyan-applications-open',
        folderNames: ['cyan-applications-open'],
      },
      {
        name: 'folder-cyan-applications',
        folderNames: ['cyan-applications'],
      },
      {
        name: 'folder-cyan-arduino-open',
        folderNames: ['cyan-arduino-open'],
      },
      {
        name: 'folder-cyan-arduino',
        folderNames: ['cyan-arduino'],
      },
      {
        name: 'folder-cyan-backup-open',
        folderNames: ['cyan-backup-open'],
      },
      {
        name: 'folder-cyan-backup',
        folderNames: ['cyan-backup'],
      },
      {
        name: 'folder-cyan-books-open',
        folderNames: ['cyan-books-open'],
      },
      {
        name: 'folder-cyan-books',
        folderNames: ['cyan-books'],
      },
      {
        name: 'folder-cyan-cd-open',
        folderNames: ['cyan-cd-open'],
      },
      {
        name: 'folder-cyan-cd',
        folderNames: ['cyan-cd'],
      },
      {
        name: 'folder-cyan-code-open',
        folderNames: ['cyan-code-open'],
      },
      {
        name: 'folder-cyan-code',
        folderNames: ['cyan-code'],
      },
      {
        name: 'folder-cyan-desktop-open',
        folderNames: ['cyan-desktop-open'],
      },
      {
        name: 'folder-cyan-desktop',
        folderNames: ['cyan-desktop'],
      },
      {
        name: 'folder-cyan-development-open',
        folderNames: ['cyan-development-open'],
      },
      {
        name: 'folder-cyan-development',
        folderNames: ['cyan-development'],
      },
      {
        name: 'folder-cyan-docker-open',
        folderNames: ['cyan-docker-open'],
      },
      {
        name: 'folder-cyan-docker',
        folderNames: ['cyan-docker'],
      },
      {
        name: 'folder-cyan-documents-open-open',
        folderNames: ['cyan-documents-open-open'],
      },
      {
        name: 'folder-cyan-documents-open',
        folderNames: ['cyan-documents-open'],
      },
      {
        name: 'folder-cyan-documents',
        folderNames: ['cyan-documents'],
      },
      {
        name: 'folder-cyan-download-open-open',
        folderNames: ['cyan-download-open-open'],
      },
      {
        name: 'folder-cyan-download-open',
        folderNames: ['cyan-download-open'],
      },
      {
        name: 'folder-cyan-download',
        folderNames: ['cyan-download'],
      },
      {
        name: 'folder-cyan-downloads-open',
        folderNames: ['cyan-downloads-open'],
      },
      {
        name: 'folder-cyan-downloads',
        folderNames: ['cyan-downloads'],
      },
      {
        name: 'folder-cyan-drag-accept-open',
        folderNames: ['cyan-drag-accept-open'],
      },
      {
        name: 'folder-cyan-drag-accept',
        folderNames: ['cyan-drag-accept'],
      },
      {
        name: 'folder-cyan-dropbox-open',
        folderNames: ['cyan-dropbox-open'],
      },
      {
        name: 'folder-cyan-dropbox',
        folderNames: ['cyan-dropbox'],
      },
      {
        name: 'folder-cyan-favorites-open',
        folderNames: ['cyan-favorites-open'],
      },
      {
        name: 'folder-cyan-favorites',
        folderNames: ['cyan-favorites'],
      },
      {
        name: 'folder-cyan-games-open',
        folderNames: ['cyan-games-open'],
      },
      {
        name: 'folder-cyan-games',
        folderNames: ['cyan-games'],
      },
      {
        name: 'folder-cyan-git-open',
        folderNames: ['cyan-git-open'],
      },
      {
        name: 'folder-cyan-git',
        folderNames: ['cyan-git'],
      },
      {
        name: 'folder-cyan-github-open',
        folderNames: ['cyan-github-open'],
      },
      {
        name: 'folder-cyan-github',
        folderNames: ['cyan-github'],
      },
      {
        name: 'folder-cyan-gitlab-open',
        folderNames: ['cyan-gitlab-open'],
      },
      {
        name: 'folder-cyan-gitlab',
        folderNames: ['cyan-gitlab'],
      },
      {
        name: 'folder-cyan-gnome-open',
        folderNames: ['cyan-gnome-open'],
      },
      {
        name: 'folder-cyan-gnome',
        folderNames: ['cyan-gnome'],
      },
      {
        name: 'folder-cyan-google-drive-open',
        folderNames: ['cyan-google-drive-open'],
      },
      {
        name: 'folder-cyan-google-drive',
        folderNames: ['cyan-google-drive'],
      },
      {
        name: 'folder-cyan-image-people-open',
        folderNames: ['cyan-image-people-open'],
      },
      {
        name: 'folder-cyan-image-people',
        folderNames: ['cyan-image-people'],
      },
      {
        name: 'folder-cyan-important-open',
        folderNames: ['cyan-important-open'],
      },
      {
        name: 'folder-cyan-important',
        folderNames: ['cyan-important'],
      },
      {
        name: 'folder-cyan-java-open',
        folderNames: ['cyan-java-open'],
      },
      {
        name: 'folder-cyan-java',
        folderNames: ['cyan-java'],
      },
      {
        name: 'folder-cyan-kde-open',
        folderNames: ['cyan-kde-open'],
      },
      {
        name: 'folder-cyan-kde',
        folderNames: ['cyan-kde'],
      },
      {
        name: 'folder-cyan-linux-open',
        folderNames: ['cyan-linux-open'],
      },
      {
        name: 'folder-cyan-linux',
        folderNames: ['cyan-linux'],
      },
      {
        name: 'folder-cyan-locked-open',
        folderNames: ['cyan-locked-open'],
      },
      {
        name: 'folder-cyan-locked',
        folderNames: ['cyan-locked'],
      },
      {
        name: 'folder-cyan-mail-cloud-open',
        folderNames: ['cyan-mail-cloud-open'],
      },
      {
        name: 'folder-cyan-mail-cloud',
        folderNames: ['cyan-mail-cloud'],
      },
      {
        name: 'folder-cyan-mail-open',
        folderNames: ['cyan-mail-open'],
      },
      {
        name: 'folder-cyan-mail',
        folderNames: ['cyan-mail'],
      },
      {
        name: 'folder-cyan-mega-open',
        folderNames: ['cyan-mega-open'],
      },
      {
        name: 'folder-cyan-mega',
        folderNames: ['cyan-mega'],
      },
      {
        name: 'folder-cyan-meocloud-open',
        folderNames: ['cyan-meocloud-open'],
      },
      {
        name: 'folder-cyan-meocloud',
        folderNames: ['cyan-meocloud'],
      },
      {
        name: 'folder-cyan-music-open-open',
        folderNames: ['cyan-music-open-open'],
      },
      {
        name: 'folder-cyan-music-open',
        folderNames: ['cyan-music-open'],
      },
      {
        name: 'folder-cyan-music',
        folderNames: ['cyan-music'],
      },
      {
        name: 'folder-cyan-network-open',
        folderNames: ['cyan-network-open'],
      },
      {
        name: 'folder-cyan-network',
        folderNames: ['cyan-network'],
      },
      {
        name: 'folder-cyan-nextcloud-open',
        folderNames: ['cyan-nextcloud-open'],
      },
      {
        name: 'folder-cyan-nextcloud',
        folderNames: ['cyan-nextcloud'],
      },
      {
        name: 'folder-cyan-notes-open',
        folderNames: ['cyan-notes-open'],
      },
      {
        name: 'folder-cyan-notes',
        folderNames: ['cyan-notes'],
      },
      {
        name: 'folder-cyan-obsidian-open',
        folderNames: ['cyan-obsidian-open'],
      },
      {
        name: 'folder-cyan-obsidian',
        folderNames: ['cyan-obsidian'],
      },
      {
        name: 'folder-cyan-onedrive-open',
        folderNames: ['cyan-onedrive-open'],
      },
      {
        name: 'folder-cyan-onedrive',
        folderNames: ['cyan-onedrive'],
      },
      {
        name: 'folder-cyan-open-open',
        folderNames: ['cyan-open-open'],
      },
      {
        name: 'folder-cyan-open',
        folderNames: ['cyan-open'],
      },
      {
        name: 'folder-cyan-owncloud-open',
        folderNames: ['cyan-owncloud-open'],
      },
      {
        name: 'folder-cyan-owncloud',
        folderNames: ['cyan-owncloud'],
      },
      {
        name: 'folder-cyan-pcloud-open',
        folderNames: ['cyan-pcloud-open'],
      },
      {
        name: 'folder-cyan-pcloud',
        folderNames: ['cyan-pcloud'],
      },
      {
        name: 'folder-cyan-photo-open',
        folderNames: ['cyan-photo-open'],
      },
      {
        name: 'folder-cyan-photo',
        folderNames: ['cyan-photo'],
      },
      {
        name: 'folder-cyan-pictures-open-open',
        folderNames: ['cyan-pictures-open-open'],
      },
      {
        name: 'folder-cyan-pictures-open',
        folderNames: ['cyan-pictures-open'],
      },
      {
        name: 'folder-cyan-pictures',
        folderNames: ['cyan-pictures'],
      },
      {
        name: 'folder-cyan-print-open',
        folderNames: ['cyan-print-open'],
      },
      {
        name: 'folder-cyan-print',
        folderNames: ['cyan-print'],
      },
      {
        name: 'folder-cyan-private-open',
        folderNames: ['cyan-private-open'],
      },
      {
        name: 'folder-cyan-private',
        folderNames: ['cyan-private'],
      },
      {
        name: 'folder-cyan-projects-open',
        folderNames: ['cyan-projects-open'],
      },
      {
        name: 'folder-cyan-projects',
        folderNames: ['cyan-projects'],
      },
      {
        name: 'folder-cyan-public-open',
        folderNames: ['cyan-public-open'],
      },
      {
        name: 'folder-cyan-public',
        folderNames: ['cyan-public'],
      },
      {
        name: 'folder-cyan-publicshare-open-open',
        folderNames: ['cyan-publicshare-open-open'],
      },
      {
        name: 'folder-cyan-publicshare-open',
        folderNames: ['cyan-publicshare-open'],
      },
      {
        name: 'folder-cyan-remote-open-open',
        folderNames: ['cyan-remote-open-open'],
      },
      {
        name: 'folder-cyan-remote-open',
        folderNames: ['cyan-remote-open'],
      },
      {
        name: 'folder-cyan-remote',
        folderNames: ['cyan-remote'],
      },
      {
        name: 'folder-cyan-script-open',
        folderNames: ['cyan-script-open'],
      },
      {
        name: 'folder-cyan-script',
        folderNames: ['cyan-script'],
      },
      {
        name: 'folder-cyan-snap-open',
        folderNames: ['cyan-snap-open'],
      },
      {
        name: 'folder-cyan-snap',
        folderNames: ['cyan-snap'],
      },
      {
        name: 'folder-cyan-steam-open',
        folderNames: ['cyan-steam-open'],
      },
      {
        name: 'folder-cyan-steam',
        folderNames: ['cyan-steam'],
      },
      {
        name: 'folder-cyan-sync-open',
        folderNames: ['cyan-sync-open'],
      },
      {
        name: 'folder-cyan-sync',
        folderNames: ['cyan-sync'],
      },
      {
        name: 'folder-cyan-syncthing-open',
        folderNames: ['cyan-syncthing-open'],
      },
      {
        name: 'folder-cyan-syncthing',
        folderNames: ['cyan-syncthing'],
      },
      {
        name: 'folder-cyan-systemd-open',
        folderNames: ['cyan-systemd-open'],
      },
      {
        name: 'folder-cyan-systemd',
        folderNames: ['cyan-systemd'],
      },
      {
        name: 'folder-cyan-tar-open',
        folderNames: ['cyan-tar-open'],
      },
      {
        name: 'folder-cyan-tar',
        folderNames: ['cyan-tar'],
      },
      {
        name: 'folder-cyan-templates-open-open',
        folderNames: ['cyan-templates-open-open'],
      },
      {
        name: 'folder-cyan-templates-open',
        folderNames: ['cyan-templates-open'],
      },
      {
        name: 'folder-cyan-templates',
        folderNames: ['cyan-templates'],
      },
      {
        name: 'folder-cyan-torrent-open',
        folderNames: ['cyan-torrent-open'],
      },
      {
        name: 'folder-cyan-torrent',
        folderNames: ['cyan-torrent'],
      },
      {
        name: 'folder-cyan-unlocked-open',
        folderNames: ['cyan-unlocked-open'],
      },
      {
        name: 'folder-cyan-unlocked',
        folderNames: ['cyan-unlocked'],
      },
      {
        name: 'folder-cyan-vbox-open',
        folderNames: ['cyan-vbox-open'],
      },
      {
        name: 'folder-cyan-vbox',
        folderNames: ['cyan-vbox'],
      },
      {
        name: 'folder-cyan-video-open',
        folderNames: ['cyan-video-open'],
      },
      {
        name: 'folder-cyan-video',
        folderNames: ['cyan-video'],
      },
      {
        name: 'folder-cyan-videos-open-open',
        folderNames: ['cyan-videos-open-open'],
      },
      {
        name: 'folder-cyan-videos-open',
        folderNames: ['cyan-videos-open'],
      },
      {
        name: 'folder-cyan-videos',
        folderNames: ['cyan-videos'],
      },
      {
        name: 'folder-cyan-visiting-open',
        folderNames: ['cyan-visiting-open'],
      },
      {
        name: 'folder-cyan-visiting',
        folderNames: ['cyan-visiting'],
      },
      {
        name: 'folder-cyan-wifi-open',
        folderNames: ['cyan-wifi-open'],
      },
      {
        name: 'folder-cyan-wifi',
        folderNames: ['cyan-wifi'],
      },
      {
        name: 'folder-cyan-wine-open',
        folderNames: ['cyan-wine-open'],
      },
      {
        name: 'folder-cyan-wine',
        folderNames: ['cyan-wine'],
      },
      {
        name: 'folder-cyan-yandex-disk-open',
        folderNames: ['cyan-yandex-disk-open'],
      },
      {
        name: 'folder-cyan-yandex-disk',
        folderNames: ['cyan-yandex-disk'],
      },
      {
        name: 'folder-cyan',
        folderNames: ['cyan'],
      },
      {
        name: 'folder-cypress-open-open',
        folderNames: ['cypress-open-open'],
      },
      {
        name: 'folder-cypress-open',
        folderNames: ['cypress-open'],
      },
      {
        name: 'folder-dal-open-open',
        folderNames: ['dal-open-open'],
      },
      {
        name: 'folder-dal-open',
        folderNames: ['dal-open'],
      },
      {
        name: 'folder-dapr-open',
        folderNames: ['dapr-open'],
      },
      {
        name: 'folder-dapr',
        folderNames: ['dapr'],
      },
      {
        name: 'folder-darkcyan-activities-open',
        folderNames: ['darkcyan-activities-open'],
      },
      {
        name: 'folder-darkcyan-activities',
        folderNames: ['darkcyan-activities'],
      },
      {
        name: 'folder-darkcyan-android-open',
        folderNames: ['darkcyan-android-open'],
      },
      {
        name: 'folder-darkcyan-android',
        folderNames: ['darkcyan-android'],
      },
      {
        name: 'folder-darkcyan-apple-open',
        folderNames: ['darkcyan-apple-open'],
      },
      {
        name: 'folder-darkcyan-apple',
        folderNames: ['darkcyan-apple'],
      },
      {
        name: 'folder-darkcyan-applications-open',
        folderNames: ['darkcyan-applications-open'],
      },
      {
        name: 'folder-darkcyan-applications',
        folderNames: ['darkcyan-applications'],
      },
      {
        name: 'folder-darkcyan-arduino-open',
        folderNames: ['darkcyan-arduino-open'],
      },
      {
        name: 'folder-darkcyan-arduino',
        folderNames: ['darkcyan-arduino'],
      },
      {
        name: 'folder-darkcyan-backup-open',
        folderNames: ['darkcyan-backup-open'],
      },
      {
        name: 'folder-darkcyan-backup',
        folderNames: ['darkcyan-backup'],
      },
      {
        name: 'folder-darkcyan-books-open',
        folderNames: ['darkcyan-books-open'],
      },
      {
        name: 'folder-darkcyan-books',
        folderNames: ['darkcyan-books'],
      },
      {
        name: 'folder-darkcyan-cd-open',
        folderNames: ['darkcyan-cd-open'],
      },
      {
        name: 'folder-darkcyan-cd',
        folderNames: ['darkcyan-cd'],
      },
      {
        name: 'folder-darkcyan-code-open',
        folderNames: ['darkcyan-code-open'],
      },
      {
        name: 'folder-darkcyan-code',
        folderNames: ['darkcyan-code'],
      },
      {
        name: 'folder-darkcyan-desktop-open',
        folderNames: ['darkcyan-desktop-open'],
      },
      {
        name: 'folder-darkcyan-desktop',
        folderNames: ['darkcyan-desktop'],
      },
      {
        name: 'folder-darkcyan-development-open',
        folderNames: ['darkcyan-development-open'],
      },
      {
        name: 'folder-darkcyan-development',
        folderNames: ['darkcyan-development'],
      },
      {
        name: 'folder-darkcyan-docker-open',
        folderNames: ['darkcyan-docker-open'],
      },
      {
        name: 'folder-darkcyan-docker',
        folderNames: ['darkcyan-docker'],
      },
      {
        name: 'folder-darkcyan-documents-open-open',
        folderNames: ['darkcyan-documents-open-open'],
      },
      {
        name: 'folder-darkcyan-documents-open',
        folderNames: ['darkcyan-documents-open'],
      },
      {
        name: 'folder-darkcyan-documents',
        folderNames: ['darkcyan-documents'],
      },
      {
        name: 'folder-darkcyan-download-open-open',
        folderNames: ['darkcyan-download-open-open'],
      },
      {
        name: 'folder-darkcyan-download-open',
        folderNames: ['darkcyan-download-open'],
      },
      {
        name: 'folder-darkcyan-download',
        folderNames: ['darkcyan-download'],
      },
      {
        name: 'folder-darkcyan-downloads-open',
        folderNames: ['darkcyan-downloads-open'],
      },
      {
        name: 'folder-darkcyan-downloads',
        folderNames: ['darkcyan-downloads'],
      },
      {
        name: 'folder-darkcyan-drag-accept-open',
        folderNames: ['darkcyan-drag-accept-open'],
      },
      {
        name: 'folder-darkcyan-drag-accept',
        folderNames: ['darkcyan-drag-accept'],
      },
      {
        name: 'folder-darkcyan-dropbox-open',
        folderNames: ['darkcyan-dropbox-open'],
      },
      {
        name: 'folder-darkcyan-dropbox',
        folderNames: ['darkcyan-dropbox'],
      },
      {
        name: 'folder-darkcyan-favorites-open',
        folderNames: ['darkcyan-favorites-open'],
      },
      {
        name: 'folder-darkcyan-favorites',
        folderNames: ['darkcyan-favorites'],
      },
      {
        name: 'folder-darkcyan-games-open',
        folderNames: ['darkcyan-games-open'],
      },
      {
        name: 'folder-darkcyan-games',
        folderNames: ['darkcyan-games'],
      },
      {
        name: 'folder-darkcyan-git-open',
        folderNames: ['darkcyan-git-open'],
      },
      {
        name: 'folder-darkcyan-git',
        folderNames: ['darkcyan-git'],
      },
      {
        name: 'folder-darkcyan-github-open',
        folderNames: ['darkcyan-github-open'],
      },
      {
        name: 'folder-darkcyan-github',
        folderNames: ['darkcyan-github'],
      },
      {
        name: 'folder-darkcyan-gitlab-open',
        folderNames: ['darkcyan-gitlab-open'],
      },
      {
        name: 'folder-darkcyan-gitlab',
        folderNames: ['darkcyan-gitlab'],
      },
      {
        name: 'folder-darkcyan-gnome-open',
        folderNames: ['darkcyan-gnome-open'],
      },
      {
        name: 'folder-darkcyan-gnome',
        folderNames: ['darkcyan-gnome'],
      },
      {
        name: 'folder-darkcyan-google-drive-open',
        folderNames: ['darkcyan-google-drive-open'],
      },
      {
        name: 'folder-darkcyan-google-drive',
        folderNames: ['darkcyan-google-drive'],
      },
      {
        name: 'folder-darkcyan-image-people-open',
        folderNames: ['darkcyan-image-people-open'],
      },
      {
        name: 'folder-darkcyan-image-people',
        folderNames: ['darkcyan-image-people'],
      },
      {
        name: 'folder-darkcyan-important-open',
        folderNames: ['darkcyan-important-open'],
      },
      {
        name: 'folder-darkcyan-important',
        folderNames: ['darkcyan-important'],
      },
      {
        name: 'folder-darkcyan-java-open',
        folderNames: ['darkcyan-java-open'],
      },
      {
        name: 'folder-darkcyan-java',
        folderNames: ['darkcyan-java'],
      },
      {
        name: 'folder-darkcyan-kde-open',
        folderNames: ['darkcyan-kde-open'],
      },
      {
        name: 'folder-darkcyan-kde',
        folderNames: ['darkcyan-kde'],
      },
      {
        name: 'folder-darkcyan-linux-open',
        folderNames: ['darkcyan-linux-open'],
      },
      {
        name: 'folder-darkcyan-linux',
        folderNames: ['darkcyan-linux'],
      },
      {
        name: 'folder-darkcyan-locked-open',
        folderNames: ['darkcyan-locked-open'],
      },
      {
        name: 'folder-darkcyan-locked',
        folderNames: ['darkcyan-locked'],
      },
      {
        name: 'folder-darkcyan-mail-cloud-open',
        folderNames: ['darkcyan-mail-cloud-open'],
      },
      {
        name: 'folder-darkcyan-mail-cloud',
        folderNames: ['darkcyan-mail-cloud'],
      },
      {
        name: 'folder-darkcyan-mail-open',
        folderNames: ['darkcyan-mail-open'],
      },
      {
        name: 'folder-darkcyan-mail',
        folderNames: ['darkcyan-mail'],
      },
      {
        name: 'folder-darkcyan-mega-open',
        folderNames: ['darkcyan-mega-open'],
      },
      {
        name: 'folder-darkcyan-mega',
        folderNames: ['darkcyan-mega'],
      },
      {
        name: 'folder-darkcyan-meocloud-open',
        folderNames: ['darkcyan-meocloud-open'],
      },
      {
        name: 'folder-darkcyan-meocloud',
        folderNames: ['darkcyan-meocloud'],
      },
      {
        name: 'folder-darkcyan-music-open-open',
        folderNames: ['darkcyan-music-open-open'],
      },
      {
        name: 'folder-darkcyan-music-open',
        folderNames: ['darkcyan-music-open'],
      },
      {
        name: 'folder-darkcyan-music',
        folderNames: ['darkcyan-music'],
      },
      {
        name: 'folder-darkcyan-network-open',
        folderNames: ['darkcyan-network-open'],
      },
      {
        name: 'folder-darkcyan-network',
        folderNames: ['darkcyan-network'],
      },
      {
        name: 'folder-darkcyan-nextcloud-open',
        folderNames: ['darkcyan-nextcloud-open'],
      },
      {
        name: 'folder-darkcyan-nextcloud',
        folderNames: ['darkcyan-nextcloud'],
      },
      {
        name: 'folder-darkcyan-notes-open',
        folderNames: ['darkcyan-notes-open'],
      },
      {
        name: 'folder-darkcyan-notes',
        folderNames: ['darkcyan-notes'],
      },
      {
        name: 'folder-darkcyan-obsidian-open',
        folderNames: ['darkcyan-obsidian-open'],
      },
      {
        name: 'folder-darkcyan-obsidian',
        folderNames: ['darkcyan-obsidian'],
      },
      {
        name: 'folder-darkcyan-onedrive-open',
        folderNames: ['darkcyan-onedrive-open'],
      },
      {
        name: 'folder-darkcyan-onedrive',
        folderNames: ['darkcyan-onedrive'],
      },
      {
        name: 'folder-darkcyan-open-open',
        folderNames: ['darkcyan-open-open'],
      },
      {
        name: 'folder-darkcyan-open',
        folderNames: ['darkcyan-open'],
      },
      {
        name: 'folder-darkcyan-owncloud-open',
        folderNames: ['darkcyan-owncloud-open'],
      },
      {
        name: 'folder-darkcyan-owncloud',
        folderNames: ['darkcyan-owncloud'],
      },
      {
        name: 'folder-darkcyan-pcloud-open',
        folderNames: ['darkcyan-pcloud-open'],
      },
      {
        name: 'folder-darkcyan-pcloud',
        folderNames: ['darkcyan-pcloud'],
      },
      {
        name: 'folder-darkcyan-photo-open',
        folderNames: ['darkcyan-photo-open'],
      },
      {
        name: 'folder-darkcyan-photo',
        folderNames: ['darkcyan-photo'],
      },
      {
        name: 'folder-darkcyan-pictures-open-open',
        folderNames: ['darkcyan-pictures-open-open'],
      },
      {
        name: 'folder-darkcyan-pictures-open',
        folderNames: ['darkcyan-pictures-open'],
      },
      {
        name: 'folder-darkcyan-pictures',
        folderNames: ['darkcyan-pictures'],
      },
      {
        name: 'folder-darkcyan-print-open',
        folderNames: ['darkcyan-print-open'],
      },
      {
        name: 'folder-darkcyan-print',
        folderNames: ['darkcyan-print'],
      },
      {
        name: 'folder-darkcyan-private-open',
        folderNames: ['darkcyan-private-open'],
      },
      {
        name: 'folder-darkcyan-private',
        folderNames: ['darkcyan-private'],
      },
      {
        name: 'folder-darkcyan-projects-open',
        folderNames: ['darkcyan-projects-open'],
      },
      {
        name: 'folder-darkcyan-projects',
        folderNames: ['darkcyan-projects'],
      },
      {
        name: 'folder-darkcyan-public-open',
        folderNames: ['darkcyan-public-open'],
      },
      {
        name: 'folder-darkcyan-public',
        folderNames: ['darkcyan-public'],
      },
      {
        name: 'folder-darkcyan-publicshare-open-open',
        folderNames: ['darkcyan-publicshare-open-open'],
      },
      {
        name: 'folder-darkcyan-publicshare-open',
        folderNames: ['darkcyan-publicshare-open'],
      },
      {
        name: 'folder-darkcyan-remote-open-open',
        folderNames: ['darkcyan-remote-open-open'],
      },
      {
        name: 'folder-darkcyan-remote-open',
        folderNames: ['darkcyan-remote-open'],
      },
      {
        name: 'folder-darkcyan-remote',
        folderNames: ['darkcyan-remote'],
      },
      {
        name: 'folder-darkcyan-script-open',
        folderNames: ['darkcyan-script-open'],
      },
      {
        name: 'folder-darkcyan-script',
        folderNames: ['darkcyan-script'],
      },
      {
        name: 'folder-darkcyan-snap-open',
        folderNames: ['darkcyan-snap-open'],
      },
      {
        name: 'folder-darkcyan-snap',
        folderNames: ['darkcyan-snap'],
      },
      {
        name: 'folder-darkcyan-steam-open',
        folderNames: ['darkcyan-steam-open'],
      },
      {
        name: 'folder-darkcyan-steam',
        folderNames: ['darkcyan-steam'],
      },
      {
        name: 'folder-darkcyan-sync-open',
        folderNames: ['darkcyan-sync-open'],
      },
      {
        name: 'folder-darkcyan-sync',
        folderNames: ['darkcyan-sync'],
      },
      {
        name: 'folder-darkcyan-syncthing-open',
        folderNames: ['darkcyan-syncthing-open'],
      },
      {
        name: 'folder-darkcyan-syncthing',
        folderNames: ['darkcyan-syncthing'],
      },
      {
        name: 'folder-darkcyan-systemd-open',
        folderNames: ['darkcyan-systemd-open'],
      },
      {
        name: 'folder-darkcyan-systemd',
        folderNames: ['darkcyan-systemd'],
      },
      {
        name: 'folder-darkcyan-tar-open',
        folderNames: ['darkcyan-tar-open'],
      },
      {
        name: 'folder-darkcyan-tar',
        folderNames: ['darkcyan-tar'],
      },
      {
        name: 'folder-darkcyan-templates-open-open',
        folderNames: ['darkcyan-templates-open-open'],
      },
      {
        name: 'folder-darkcyan-templates-open',
        folderNames: ['darkcyan-templates-open'],
      },
      {
        name: 'folder-darkcyan-templates',
        folderNames: ['darkcyan-templates'],
      },
      {
        name: 'folder-darkcyan-torrent-open',
        folderNames: ['darkcyan-torrent-open'],
      },
      {
        name: 'folder-darkcyan-torrent',
        folderNames: ['darkcyan-torrent'],
      },
      {
        name: 'folder-darkcyan-unlocked-open',
        folderNames: ['darkcyan-unlocked-open'],
      },
      {
        name: 'folder-darkcyan-unlocked',
        folderNames: ['darkcyan-unlocked'],
      },
      {
        name: 'folder-darkcyan-vbox-open',
        folderNames: ['darkcyan-vbox-open'],
      },
      {
        name: 'folder-darkcyan-vbox',
        folderNames: ['darkcyan-vbox'],
      },
      {
        name: 'folder-darkcyan-video-open',
        folderNames: ['darkcyan-video-open'],
      },
      {
        name: 'folder-darkcyan-video',
        folderNames: ['darkcyan-video'],
      },
      {
        name: 'folder-darkcyan-videos-open-open',
        folderNames: ['darkcyan-videos-open-open'],
      },
      {
        name: 'folder-darkcyan-videos-open',
        folderNames: ['darkcyan-videos-open'],
      },
      {
        name: 'folder-darkcyan-videos',
        folderNames: ['darkcyan-videos'],
      },
      {
        name: 'folder-darkcyan-visiting-open',
        folderNames: ['darkcyan-visiting-open'],
      },
      {
        name: 'folder-darkcyan-visiting',
        folderNames: ['darkcyan-visiting'],
      },
      {
        name: 'folder-darkcyan-wifi-open',
        folderNames: ['darkcyan-wifi-open'],
      },
      {
        name: 'folder-darkcyan-wifi',
        folderNames: ['darkcyan-wifi'],
      },
      {
        name: 'folder-darkcyan-wine-open',
        folderNames: ['darkcyan-wine-open'],
      },
      {
        name: 'folder-darkcyan-wine',
        folderNames: ['darkcyan-wine'],
      },
      {
        name: 'folder-darkcyan-yandex-disk-open',
        folderNames: ['darkcyan-yandex-disk-open'],
      },
      {
        name: 'folder-darkcyan-yandex-disk',
        folderNames: ['darkcyan-yandex-disk'],
      },
      {
        name: 'folder-darkcyan',
        folderNames: ['darkcyan'],
      },
      {
        name: 'folder-dart-open-open',
        folderNames: ['dart-open-open'],
      },
      {
        name: 'folder-dart-open',
        folderNames: ['dart-open'],
      },
      {
        name: 'folder-database-open-open',
        folderNames: ['database-open-open'],
      },
      {
        name: 'folder-database-open',
        folderNames: ['database-open'],
      },
      {
        name: 'folder-debug-open-open',
        folderNames: ['debug-open-open'],
      },
      {
        name: 'folder-debug-open',
        folderNames: ['debug-open'],
      },
      {
        name: 'folder-decorators-open-open',
        folderNames: ['decorators-open-open'],
      },
      {
        name: 'folder-decorators-open',
        folderNames: ['decorators-open'],
      },
      {
        name: 'folder-decrypted-open',
        folderNames: ['decrypted-open'],
      },
      {
        name: 'folder-decrypted',
        folderNames: ['decrypted'],
      },
      {
        name: 'folder-deeporange-activities-open',
        folderNames: ['deeporange-activities-open'],
      },
      {
        name: 'folder-deeporange-activities',
        folderNames: ['deeporange-activities'],
      },
      {
        name: 'folder-deeporange-android-open',
        folderNames: ['deeporange-android-open'],
      },
      {
        name: 'folder-deeporange-android',
        folderNames: ['deeporange-android'],
      },
      {
        name: 'folder-deeporange-apple-open',
        folderNames: ['deeporange-apple-open'],
      },
      {
        name: 'folder-deeporange-apple',
        folderNames: ['deeporange-apple'],
      },
      {
        name: 'folder-deeporange-applications-open',
        folderNames: ['deeporange-applications-open'],
      },
      {
        name: 'folder-deeporange-applications',
        folderNames: ['deeporange-applications'],
      },
      {
        name: 'folder-deeporange-arduino-open',
        folderNames: ['deeporange-arduino-open'],
      },
      {
        name: 'folder-deeporange-arduino',
        folderNames: ['deeporange-arduino'],
      },
      {
        name: 'folder-deeporange-backup-open',
        folderNames: ['deeporange-backup-open'],
      },
      {
        name: 'folder-deeporange-backup',
        folderNames: ['deeporange-backup'],
      },
      {
        name: 'folder-deeporange-books-open',
        folderNames: ['deeporange-books-open'],
      },
      {
        name: 'folder-deeporange-books',
        folderNames: ['deeporange-books'],
      },
      {
        name: 'folder-deeporange-cd-open',
        folderNames: ['deeporange-cd-open'],
      },
      {
        name: 'folder-deeporange-cd',
        folderNames: ['deeporange-cd'],
      },
      {
        name: 'folder-deeporange-code-open',
        folderNames: ['deeporange-code-open'],
      },
      {
        name: 'folder-deeporange-code',
        folderNames: ['deeporange-code'],
      },
      {
        name: 'folder-deeporange-desktop-open',
        folderNames: ['deeporange-desktop-open'],
      },
      {
        name: 'folder-deeporange-desktop',
        folderNames: ['deeporange-desktop'],
      },
      {
        name: 'folder-deeporange-development-open',
        folderNames: ['deeporange-development-open'],
      },
      {
        name: 'folder-deeporange-development',
        folderNames: ['deeporange-development'],
      },
      {
        name: 'folder-deeporange-docker-open',
        folderNames: ['deeporange-docker-open'],
      },
      {
        name: 'folder-deeporange-docker',
        folderNames: ['deeporange-docker'],
      },
      {
        name: 'folder-deeporange-documents-open-open',
        folderNames: ['deeporange-documents-open-open'],
      },
      {
        name: 'folder-deeporange-documents-open',
        folderNames: ['deeporange-documents-open'],
      },
      {
        name: 'folder-deeporange-documents',
        folderNames: ['deeporange-documents'],
      },
      {
        name: 'folder-deeporange-download-open-open',
        folderNames: ['deeporange-download-open-open'],
      },
      {
        name: 'folder-deeporange-download-open',
        folderNames: ['deeporange-download-open'],
      },
      {
        name: 'folder-deeporange-download',
        folderNames: ['deeporange-download'],
      },
      {
        name: 'folder-deeporange-downloads-open',
        folderNames: ['deeporange-downloads-open'],
      },
      {
        name: 'folder-deeporange-downloads',
        folderNames: ['deeporange-downloads'],
      },
      {
        name: 'folder-deeporange-drag-accept-open',
        folderNames: ['deeporange-drag-accept-open'],
      },
      {
        name: 'folder-deeporange-drag-accept',
        folderNames: ['deeporange-drag-accept'],
      },
      {
        name: 'folder-deeporange-dropbox-open',
        folderNames: ['deeporange-dropbox-open'],
      },
      {
        name: 'folder-deeporange-dropbox',
        folderNames: ['deeporange-dropbox'],
      },
      {
        name: 'folder-deeporange-favorites-open',
        folderNames: ['deeporange-favorites-open'],
      },
      {
        name: 'folder-deeporange-favorites',
        folderNames: ['deeporange-favorites'],
      },
      {
        name: 'folder-deeporange-games-open',
        folderNames: ['deeporange-games-open'],
      },
      {
        name: 'folder-deeporange-games',
        folderNames: ['deeporange-games'],
      },
      {
        name: 'folder-deeporange-git-open',
        folderNames: ['deeporange-git-open'],
      },
      {
        name: 'folder-deeporange-git',
        folderNames: ['deeporange-git'],
      },
      {
        name: 'folder-deeporange-github-open',
        folderNames: ['deeporange-github-open'],
      },
      {
        name: 'folder-deeporange-github',
        folderNames: ['deeporange-github'],
      },
      {
        name: 'folder-deeporange-gitlab-open',
        folderNames: ['deeporange-gitlab-open'],
      },
      {
        name: 'folder-deeporange-gitlab',
        folderNames: ['deeporange-gitlab'],
      },
      {
        name: 'folder-deeporange-gnome-open',
        folderNames: ['deeporange-gnome-open'],
      },
      {
        name: 'folder-deeporange-gnome',
        folderNames: ['deeporange-gnome'],
      },
      {
        name: 'folder-deeporange-google-drive-open',
        folderNames: ['deeporange-google-drive-open'],
      },
      {
        name: 'folder-deeporange-google-drive',
        folderNames: ['deeporange-google-drive'],
      },
      {
        name: 'folder-deeporange-image-people-open',
        folderNames: ['deeporange-image-people-open'],
      },
      {
        name: 'folder-deeporange-image-people',
        folderNames: ['deeporange-image-people'],
      },
      {
        name: 'folder-deeporange-important-open',
        folderNames: ['deeporange-important-open'],
      },
      {
        name: 'folder-deeporange-important',
        folderNames: ['deeporange-important'],
      },
      {
        name: 'folder-deeporange-java-open',
        folderNames: ['deeporange-java-open'],
      },
      {
        name: 'folder-deeporange-java',
        folderNames: ['deeporange-java'],
      },
      {
        name: 'folder-deeporange-kde-open',
        folderNames: ['deeporange-kde-open'],
      },
      {
        name: 'folder-deeporange-kde',
        folderNames: ['deeporange-kde'],
      },
      {
        name: 'folder-deeporange-linux-open',
        folderNames: ['deeporange-linux-open'],
      },
      {
        name: 'folder-deeporange-linux',
        folderNames: ['deeporange-linux'],
      },
      {
        name: 'folder-deeporange-locked-open',
        folderNames: ['deeporange-locked-open'],
      },
      {
        name: 'folder-deeporange-locked',
        folderNames: ['deeporange-locked'],
      },
      {
        name: 'folder-deeporange-mail-cloud-open',
        folderNames: ['deeporange-mail-cloud-open'],
      },
      {
        name: 'folder-deeporange-mail-cloud',
        folderNames: ['deeporange-mail-cloud'],
      },
      {
        name: 'folder-deeporange-mail-open',
        folderNames: ['deeporange-mail-open'],
      },
      {
        name: 'folder-deeporange-mail',
        folderNames: ['deeporange-mail'],
      },
      {
        name: 'folder-deeporange-mega-open',
        folderNames: ['deeporange-mega-open'],
      },
      {
        name: 'folder-deeporange-mega',
        folderNames: ['deeporange-mega'],
      },
      {
        name: 'folder-deeporange-meocloud-open',
        folderNames: ['deeporange-meocloud-open'],
      },
      {
        name: 'folder-deeporange-meocloud',
        folderNames: ['deeporange-meocloud'],
      },
      {
        name: 'folder-deeporange-music-open-open',
        folderNames: ['deeporange-music-open-open'],
      },
      {
        name: 'folder-deeporange-music-open',
        folderNames: ['deeporange-music-open'],
      },
      {
        name: 'folder-deeporange-music',
        folderNames: ['deeporange-music'],
      },
      {
        name: 'folder-deeporange-network-open',
        folderNames: ['deeporange-network-open'],
      },
      {
        name: 'folder-deeporange-network',
        folderNames: ['deeporange-network'],
      },
      {
        name: 'folder-deeporange-nextcloud-open',
        folderNames: ['deeporange-nextcloud-open'],
      },
      {
        name: 'folder-deeporange-nextcloud',
        folderNames: ['deeporange-nextcloud'],
      },
      {
        name: 'folder-deeporange-notes-open',
        folderNames: ['deeporange-notes-open'],
      },
      {
        name: 'folder-deeporange-notes',
        folderNames: ['deeporange-notes'],
      },
      {
        name: 'folder-deeporange-obsidian-open',
        folderNames: ['deeporange-obsidian-open'],
      },
      {
        name: 'folder-deeporange-obsidian',
        folderNames: ['deeporange-obsidian'],
      },
      {
        name: 'folder-deeporange-onedrive-open',
        folderNames: ['deeporange-onedrive-open'],
      },
      {
        name: 'folder-deeporange-onedrive',
        folderNames: ['deeporange-onedrive'],
      },
      {
        name: 'folder-deeporange-open-open',
        folderNames: ['deeporange-open-open'],
      },
      {
        name: 'folder-deeporange-open',
        folderNames: ['deeporange-open'],
      },
      {
        name: 'folder-deeporange-owncloud-open',
        folderNames: ['deeporange-owncloud-open'],
      },
      {
        name: 'folder-deeporange-owncloud',
        folderNames: ['deeporange-owncloud'],
      },
      {
        name: 'folder-deeporange-pcloud-open',
        folderNames: ['deeporange-pcloud-open'],
      },
      {
        name: 'folder-deeporange-pcloud',
        folderNames: ['deeporange-pcloud'],
      },
      {
        name: 'folder-deeporange-photo-open',
        folderNames: ['deeporange-photo-open'],
      },
      {
        name: 'folder-deeporange-photo',
        folderNames: ['deeporange-photo'],
      },
      {
        name: 'folder-deeporange-pictures-open-open',
        folderNames: ['deeporange-pictures-open-open'],
      },
      {
        name: 'folder-deeporange-pictures-open',
        folderNames: ['deeporange-pictures-open'],
      },
      {
        name: 'folder-deeporange-pictures',
        folderNames: ['deeporange-pictures'],
      },
      {
        name: 'folder-deeporange-print-open',
        folderNames: ['deeporange-print-open'],
      },
      {
        name: 'folder-deeporange-print',
        folderNames: ['deeporange-print'],
      },
      {
        name: 'folder-deeporange-private-open',
        folderNames: ['deeporange-private-open'],
      },
      {
        name: 'folder-deeporange-private',
        folderNames: ['deeporange-private'],
      },
      {
        name: 'folder-deeporange-projects-open',
        folderNames: ['deeporange-projects-open'],
      },
      {
        name: 'folder-deeporange-projects',
        folderNames: ['deeporange-projects'],
      },
      {
        name: 'folder-deeporange-public-open',
        folderNames: ['deeporange-public-open'],
      },
      {
        name: 'folder-deeporange-public',
        folderNames: ['deeporange-public'],
      },
      {
        name: 'folder-deeporange-publicshare-open-open',
        folderNames: ['deeporange-publicshare-open-open'],
      },
      {
        name: 'folder-deeporange-publicshare-open',
        folderNames: ['deeporange-publicshare-open'],
      },
      {
        name: 'folder-deeporange-remote-open-open',
        folderNames: ['deeporange-remote-open-open'],
      },
      {
        name: 'folder-deeporange-remote-open',
        folderNames: ['deeporange-remote-open'],
      },
      {
        name: 'folder-deeporange-remote',
        folderNames: ['deeporange-remote'],
      },
      {
        name: 'folder-deeporange-script-open',
        folderNames: ['deeporange-script-open'],
      },
      {
        name: 'folder-deeporange-script',
        folderNames: ['deeporange-script'],
      },
      {
        name: 'folder-deeporange-snap-open',
        folderNames: ['deeporange-snap-open'],
      },
      {
        name: 'folder-deeporange-snap',
        folderNames: ['deeporange-snap'],
      },
      {
        name: 'folder-deeporange-steam-open',
        folderNames: ['deeporange-steam-open'],
      },
      {
        name: 'folder-deeporange-steam',
        folderNames: ['deeporange-steam'],
      },
      {
        name: 'folder-deeporange-sync-open',
        folderNames: ['deeporange-sync-open'],
      },
      {
        name: 'folder-deeporange-sync',
        folderNames: ['deeporange-sync'],
      },
      {
        name: 'folder-deeporange-syncthing-open',
        folderNames: ['deeporange-syncthing-open'],
      },
      {
        name: 'folder-deeporange-syncthing',
        folderNames: ['deeporange-syncthing'],
      },
      {
        name: 'folder-deeporange-systemd-open',
        folderNames: ['deeporange-systemd-open'],
      },
      {
        name: 'folder-deeporange-systemd',
        folderNames: ['deeporange-systemd'],
      },
      {
        name: 'folder-deeporange-tar-open',
        folderNames: ['deeporange-tar-open'],
      },
      {
        name: 'folder-deeporange-tar',
        folderNames: ['deeporange-tar'],
      },
      {
        name: 'folder-deeporange-templates-open-open',
        folderNames: ['deeporange-templates-open-open'],
      },
      {
        name: 'folder-deeporange-templates-open',
        folderNames: ['deeporange-templates-open'],
      },
      {
        name: 'folder-deeporange-templates',
        folderNames: ['deeporange-templates'],
      },
      {
        name: 'folder-deeporange-torrent-open',
        folderNames: ['deeporange-torrent-open'],
      },
      {
        name: 'folder-deeporange-torrent',
        folderNames: ['deeporange-torrent'],
      },
      {
        name: 'folder-deeporange-unlocked-open',
        folderNames: ['deeporange-unlocked-open'],
      },
      {
        name: 'folder-deeporange-unlocked',
        folderNames: ['deeporange-unlocked'],
      },
      {
        name: 'folder-deeporange-vbox-open',
        folderNames: ['deeporange-vbox-open'],
      },
      {
        name: 'folder-deeporange-vbox',
        folderNames: ['deeporange-vbox'],
      },
      {
        name: 'folder-deeporange-video-open',
        folderNames: ['deeporange-video-open'],
      },
      {
        name: 'folder-deeporange-video',
        folderNames: ['deeporange-video'],
      },
      {
        name: 'folder-deeporange-videos-open-open',
        folderNames: ['deeporange-videos-open-open'],
      },
      {
        name: 'folder-deeporange-videos-open',
        folderNames: ['deeporange-videos-open'],
      },
      {
        name: 'folder-deeporange-videos',
        folderNames: ['deeporange-videos'],
      },
      {
        name: 'folder-deeporange-visiting-open',
        folderNames: ['deeporange-visiting-open'],
      },
      {
        name: 'folder-deeporange-visiting',
        folderNames: ['deeporange-visiting'],
      },
      {
        name: 'folder-deeporange-wifi-open',
        folderNames: ['deeporange-wifi-open'],
      },
      {
        name: 'folder-deeporange-wifi',
        folderNames: ['deeporange-wifi'],
      },
      {
        name: 'folder-deeporange-wine-open',
        folderNames: ['deeporange-wine-open'],
      },
      {
        name: 'folder-deeporange-wine',
        folderNames: ['deeporange-wine'],
      },
      {
        name: 'folder-deeporange-yandex-disk-open',
        folderNames: ['deeporange-yandex-disk-open'],
      },
      {
        name: 'folder-deeporange-yandex-disk',
        folderNames: ['deeporange-yandex-disk'],
      },
      {
        name: 'folder-deeporange',
        folderNames: ['deeporange'],
      },
      {
        name: 'folder-default-open',
        folderNames: ['default-open'],
      },
      {
        name: 'folder-default',
        folderNames: ['default'],
      },
      {
        name: 'folder-delta-open-open',
        folderNames: ['delta-open-open'],
      },
      {
        name: 'folder-delta-open',
        folderNames: ['delta-open'],
      },
      {
        name: 'folder-deno-open',
        folderNames: ['deno-open'],
      },
      {
        name: 'folder-deno',
        folderNames: ['deno'],
      },
      {
        name: 'folder-dependabot-open',
        folderNames: ['dependabot-open'],
      },
      {
        name: 'folder-dependabot',
        folderNames: ['dependabot'],
      },
      {
        name: 'folder-deploy-open',
        folderNames: ['deploy-open'],
      },
      {
        name: 'folder-deploy',
        folderNames: ['deploy'],
      },
      {
        name: 'folder-deprecated-open.clone-open',
        folderNames: ['deprecated-open.clone-open'],
      },
      {
        name: 'folder-deprecated-open.clone',
        folderNames: ['deprecated-open.clone'],
      },
      {
        name: 'folder-deprecated.clone-open',
        folderNames: ['deprecated.clone-open'],
      },
      {
        name: 'folder-deprecated.clone',
        folderNames: ['deprecated.clone'],
      },
      {
        name: 'folder-desktop-open-open',
        folderNames: ['desktop-open-open'],
      },
      {
        name: 'folder-desktop-open',
        folderNames: ['desktop-open'],
      },
      {
        name: 'folder-development-open.clone-open',
        folderNames: ['development-open.clone-open'],
      },
      {
        name: 'folder-development-open.clone',
        folderNames: ['development-open.clone'],
      },
      {
        name: 'folder-development-open',
        folderNames: ['development-open'],
      },
      {
        name: 'folder-development.clone-open',
        folderNames: ['development.clone-open'],
      },
      {
        name: 'folder-development.clone',
        folderNames: ['development.clone'],
      },
      {
        name: 'folder-directive-open-open',
        folderNames: ['directive-open-open'],
      },
      {
        name: 'folder-directive-open',
        folderNames: ['directive-open'],
      },
      {
        name: 'folder-dist-open-open',
        folderNames: ['dist-open-open'],
      },
      {
        name: 'folder-dist-open',
        folderNames: ['dist-open'],
      },
      {
        name: 'folder-docker-open-open',
        folderNames: ['docker-open-open'],
      },
      {
        name: 'folder-docker-open',
        folderNames: ['docker-open'],
      },
      {
        name: 'folder-docs-open-open',
        folderNames: ['docs-open-open'],
      },
      {
        name: 'folder-docs-open',
        folderNames: ['docs-open'],
      },
      {
        name: 'folder-documents-open-open',
        folderNames: ['documents-open-open'],
      },
      {
        name: 'folder-documents-open',
        folderNames: ['documents-open'],
      },
      {
        name: 'folder-documents-stack-open',
        folderNames: ['documents-stack-open'],
      },
      {
        name: 'folder-documents-stack',
        folderNames: ['documents-stack'],
      },
      {
        name: 'folder-domain-open',
        folderNames: ['domain-open'],
      },
      {
        name: 'folder-domain',
        folderNames: ['domain'],
      },
      {
        name: 'folder-download-open-open',
        folderNames: ['download-open-open'],
      },
      {
        name: 'folder-download-open',
        folderNames: ['download-open'],
      },
      {
        name: 'folder-drag-accept-open',
        folderNames: ['drag-accept-open'],
      },
      {
        name: 'folder-drag-accept',
        folderNames: ['drag-accept'],
      },
      {
        name: 'folder-drawing-open',
        folderNames: ['drawing-open'],
      },
      {
        name: 'folder-drawing',
        folderNames: ['drawing'],
      },
      {
        name: 'folder-drizzle-open-open',
        folderNames: ['drizzle-open-open'],
      },
      {
        name: 'folder-drizzle-open',
        folderNames: ['drizzle-open'],
      },
      {
        name: 'folder-dropbox-open',
        folderNames: ['dropbox-open'],
      },
      {
        name: 'folder-dropbox',
        folderNames: ['dropbox'],
      },
      {
        name: 'folder-dub-open',
        folderNames: ['dub-open'],
      },
      {
        name: 'folder-dub',
        folderNames: ['dub'],
      },
      {
        name: 'folder-dump-open-open',
        folderNames: ['dump-open-open'],
      },
      {
        name: 'folder-dump-open',
        folderNames: ['dump-open'],
      },
      {
        name: 'folder-dvc-open',
        folderNames: ['dvc-open'],
      },
      {
        name: 'folder-dvc',
        folderNames: ['dvc'],
      },
      {
        name: 'folder-edit-sign-decrypted-open',
        folderNames: ['edit-sign-decrypted-open'],
      },
      {
        name: 'folder-edit-sign-decrypted',
        folderNames: ['edit-sign-decrypted'],
      },
      {
        name: 'folder-edit-sign-encrypt-open',
        folderNames: ['edit-sign-encrypt-open'],
      },
      {
        name: 'folder-edit-sign-encrypt',
        folderNames: ['edit-sign-encrypt'],
      },
      {
        name: 'folder-elastic-open',
        folderNames: ['elastic-open'],
      },
      {
        name: 'folder-elastic',
        folderNames: ['elastic'],
      },
      {
        name: 'folder-electron-open',
        folderNames: ['electron-open'],
      },
      {
        name: 'folder-electron',
        folderNames: ['electron'],
      },
      {
        name: 'folder-element-open-open',
        folderNames: ['element-open-open'],
      },
      {
        name: 'folder-element-open',
        folderNames: ['element-open'],
      },
      {
        name: 'folder-elementary-distributor-logo-open-open',
        folderNames: ['elementary-distributor-logo-open-open'],
      },
      {
        name: 'folder-elementary-distributor-logo-open',
        folderNames: ['elementary-distributor-logo-open'],
      },
      {
        name: 'folder-elementary-distributor-logo',
        folderNames: ['elementary-distributor-logo'],
      },
      {
        name: 'folder-elementary-folder-documents-drag-accept-open-open',
        folderNames: ['elementary-folder-documents-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-documents-drag-accept-open',
        folderNames: ['elementary-folder-documents-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-documents-drag-accept',
        folderNames: ['elementary-folder-documents-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-documents-open-open-open',
        folderNames: ['elementary-folder-documents-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-documents-open-open',
        folderNames: ['elementary-folder-documents-open-open'],
      },
      {
        name: 'folder-elementary-folder-documents-open',
        folderNames: ['elementary-folder-documents-open'],
      },
      {
        name: 'folder-elementary-folder-download-drag-accept-open-open',
        folderNames: ['elementary-folder-download-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-download-drag-accept-open',
        folderNames: ['elementary-folder-download-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-download-drag-accept',
        folderNames: ['elementary-folder-download-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-download-open-open-open',
        folderNames: ['elementary-folder-download-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-download-open-open',
        folderNames: ['elementary-folder-download-open-open'],
      },
      {
        name: 'folder-elementary-folder-download-open',
        folderNames: ['elementary-folder-download-open'],
      },
      {
        name: 'folder-elementary-folder-drag-accept-open-open',
        folderNames: ['elementary-folder-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-drag-accept-open',
        folderNames: ['elementary-folder-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-drag-accept',
        folderNames: ['elementary-folder-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-music-drag-accept-open-open',
        folderNames: ['elementary-folder-music-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-music-drag-accept-open',
        folderNames: ['elementary-folder-music-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-music-drag-accept',
        folderNames: ['elementary-folder-music-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-music-open-open-open',
        folderNames: ['elementary-folder-music-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-music-open-open',
        folderNames: ['elementary-folder-music-open-open'],
      },
      {
        name: 'folder-elementary-folder-music-open',
        folderNames: ['elementary-folder-music-open'],
      },
      {
        name: 'folder-elementary-folder-open-open-open',
        folderNames: ['elementary-folder-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-open-open',
        folderNames: ['elementary-folder-open-open'],
      },
      {
        name: 'folder-elementary-folder-open',
        folderNames: ['elementary-folder-open'],
      },
      {
        name: 'folder-elementary-folder-pictures-drag-accept-open-open',
        folderNames: ['elementary-folder-pictures-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-pictures-drag-accept-open',
        folderNames: ['elementary-folder-pictures-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-pictures-drag-accept',
        folderNames: ['elementary-folder-pictures-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-pictures-open-open-open',
        folderNames: ['elementary-folder-pictures-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-pictures-open-open',
        folderNames: ['elementary-folder-pictures-open-open'],
      },
      {
        name: 'folder-elementary-folder-pictures-open',
        folderNames: ['elementary-folder-pictures-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare-drag-accept-open-open',
        folderNames: ['elementary-folder-publicshare-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare-drag-accept-open',
        folderNames: ['elementary-folder-publicshare-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare-drag-accept',
        folderNames: ['elementary-folder-publicshare-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-publicshare-open-open-open',
        folderNames: ['elementary-folder-publicshare-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare-open-open',
        folderNames: ['elementary-folder-publicshare-open-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare-open',
        folderNames: ['elementary-folder-publicshare-open'],
      },
      {
        name: 'folder-elementary-folder-publicshare',
        folderNames: ['elementary-folder-publicshare'],
      },
      {
        name: 'folder-elementary-folder-remote-drag-accept-open-open',
        folderNames: ['elementary-folder-remote-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-remote-drag-accept-open',
        folderNames: ['elementary-folder-remote-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-remote-drag-accept',
        folderNames: ['elementary-folder-remote-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-remote-open-open-open',
        folderNames: ['elementary-folder-remote-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-remote-open-open',
        folderNames: ['elementary-folder-remote-open-open'],
      },
      {
        name: 'folder-elementary-folder-remote-open',
        folderNames: ['elementary-folder-remote-open'],
      },
      {
        name: 'folder-elementary-folder-tag-open-open',
        folderNames: ['elementary-folder-tag-open-open'],
      },
      {
        name: 'folder-elementary-folder-tag-open',
        folderNames: ['elementary-folder-tag-open'],
      },
      {
        name: 'folder-elementary-folder-tag',
        folderNames: ['elementary-folder-tag'],
      },
      {
        name: 'folder-elementary-folder-templates-drag-accept-open-open',
        folderNames: ['elementary-folder-templates-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-templates-drag-accept-open',
        folderNames: ['elementary-folder-templates-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-templates-drag-accept',
        folderNames: ['elementary-folder-templates-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-templates-open-open-open',
        folderNames: ['elementary-folder-templates-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-templates-open-open',
        folderNames: ['elementary-folder-templates-open-open'],
      },
      {
        name: 'folder-elementary-folder-templates-open',
        folderNames: ['elementary-folder-templates-open'],
      },
      {
        name: 'folder-elementary-folder-videos-drag-accept-open-open',
        folderNames: ['elementary-folder-videos-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-folder-videos-drag-accept-open',
        folderNames: ['elementary-folder-videos-drag-accept-open'],
      },
      {
        name: 'folder-elementary-folder-videos-drag-accept',
        folderNames: ['elementary-folder-videos-drag-accept'],
      },
      {
        name: 'folder-elementary-folder-videos-open-open-open',
        folderNames: ['elementary-folder-videos-open-open-open'],
      },
      {
        name: 'folder-elementary-folder-videos-open-open',
        folderNames: ['elementary-folder-videos-open-open'],
      },
      {
        name: 'folder-elementary-folder-videos-open',
        folderNames: ['elementary-folder-videos-open'],
      },
      {
        name: 'folder-elementary-folder',
        folderNames: ['elementary-folder'],
      },
      {
        name: 'folder-elementary-gtk-network-open-open',
        folderNames: ['elementary-gtk-network-open-open'],
      },
      {
        name: 'folder-elementary-gtk-network-open',
        folderNames: ['elementary-gtk-network-open'],
      },
      {
        name: 'folder-elementary-gtk-network',
        folderNames: ['elementary-gtk-network'],
      },
      {
        name: 'folder-elementary-inode-directory-open-open',
        folderNames: ['elementary-inode-directory-open-open'],
      },
      {
        name: 'folder-elementary-inode-directory-open',
        folderNames: ['elementary-inode-directory-open'],
      },
      {
        name: 'folder-elementary-inode-directory',
        folderNames: ['elementary-inode-directory'],
      },
      {
        name: 'folder-elementary-network-server-open-open',
        folderNames: ['elementary-network-server-open-open'],
      },
      {
        name: 'folder-elementary-network-server-open',
        folderNames: ['elementary-network-server-open'],
      },
      {
        name: 'folder-elementary-network-server',
        folderNames: ['elementary-network-server'],
      },
      {
        name: 'folder-elementary-network-workgroup-open-open',
        folderNames: ['elementary-network-workgroup-open-open'],
      },
      {
        name: 'folder-elementary-network-workgroup-open',
        folderNames: ['elementary-network-workgroup-open'],
      },
      {
        name: 'folder-elementary-network-workgroup',
        folderNames: ['elementary-network-workgroup'],
      },
      {
        name: 'folder-elementary-user-bookmarks-open-open',
        folderNames: ['elementary-user-bookmarks-open-open'],
      },
      {
        name: 'folder-elementary-user-bookmarks-open',
        folderNames: ['elementary-user-bookmarks-open'],
      },
      {
        name: 'folder-elementary-user-bookmarks',
        folderNames: ['elementary-user-bookmarks'],
      },
      {
        name: 'folder-elementary-user-desktop-open-open-open',
        folderNames: ['elementary-user-desktop-open-open-open'],
      },
      {
        name: 'folder-elementary-user-desktop-open-open',
        folderNames: ['elementary-user-desktop-open-open'],
      },
      {
        name: 'folder-elementary-user-desktop-open',
        folderNames: ['elementary-user-desktop-open'],
      },
      {
        name: 'folder-elementary-user-desktop',
        folderNames: ['elementary-user-desktop'],
      },
      {
        name: 'folder-elementary-user-home-drag-accept-open-open',
        folderNames: ['elementary-user-home-drag-accept-open-open'],
      },
      {
        name: 'folder-elementary-user-home-drag-accept-open',
        folderNames: ['elementary-user-home-drag-accept-open'],
      },
      {
        name: 'folder-elementary-user-home-drag-accept',
        folderNames: ['elementary-user-home-drag-accept'],
      },
      {
        name: 'folder-elementary-user-home-open-open-open',
        folderNames: ['elementary-user-home-open-open-open'],
      },
      {
        name: 'folder-elementary-user-home-open-open',
        folderNames: ['elementary-user-home-open-open'],
      },
      {
        name: 'folder-elementary-user-home-open',
        folderNames: ['elementary-user-home-open'],
      },
      {
        name: 'folder-elementary-user-home',
        folderNames: ['elementary-user-home'],
      },
      {
        name: 'folder-elementary-user-trash-open-open',
        folderNames: ['elementary-user-trash-open-open'],
      },
      {
        name: 'folder-elementary-user-trash-open',
        folderNames: ['elementary-user-trash-open'],
      },
      {
        name: 'folder-elementary-user-trash',
        folderNames: ['elementary-user-trash'],
      },
      {
        name: 'folder-elixir-open',
        folderNames: ['elixir-open'],
      },
      {
        name: 'folder-elixir',
        folderNames: ['elixir'],
      },
      {
        name: 'folder-emacs-open',
        folderNames: ['emacs-open'],
      },
      {
        name: 'folder-emacs',
        folderNames: ['emacs'],
      },
      {
        name: 'folder-empties-open',
        folderNames: ['empties-open'],
      },
      {
        name: 'folder-empties',
        folderNames: ['empties'],
      },
      {
        name: 'folder-encrypted-open',
        folderNames: ['encrypted-open'],
      },
      {
        name: 'folder-encrypted',
        folderNames: ['encrypted'],
      },
      {
        name: 'folder-enum-open-open',
        folderNames: ['enum-open-open'],
      },
      {
        name: 'folder-enum-open',
        folderNames: ['enum-open'],
      },
      {
        name: 'folder-environment-open-open',
        folderNames: ['environment-open-open'],
      },
      {
        name: 'folder-environment-open',
        folderNames: ['environment-open'],
      },
      {
        name: 'folder-error-open-open',
        folderNames: ['error-open-open'],
      },
      {
        name: 'folder-error-open',
        folderNames: ['error-open'],
      },
      {
        name: 'folder-eslint-open-open',
        folderNames: ['eslint-open-open'],
      },
      {
        name: 'folder-eslint-open',
        folderNames: ['eslint-open'],
      },
      {
        name: 'folder-event-open-open',
        folderNames: ['event-open-open'],
      },
      {
        name: 'folder-event-open',
        folderNames: ['event-open'],
      },
      {
        name: 'folder-examples-open-open',
        folderNames: ['examples-open-open'],
      },
      {
        name: 'folder-examples-open',
        folderNames: ['examples-open'],
      },
      {
        name: 'folder-exclude-open',
        folderNames: ['exclude-open'],
      },
      {
        name: 'folder-exclude',
        folderNames: ['exclude'],
      },
      {
        name: 'folder-expo-open-open',
        folderNames: ['expo-open-open'],
      },
      {
        name: 'folder-expo-open',
        folderNames: ['expo-open'],
      },
      {
        name: 'folder-export-open-open',
        folderNames: ['export-open-open'],
      },
      {
        name: 'folder-export-open',
        folderNames: ['export-open'],
      },
      {
        name: 'folder-faq-open',
        folderNames: ['faq-open'],
      },
      {
        name: 'folder-faq',
        folderNames: ['faq'],
      },
      {
        name: 'folder-fastlane-open-open',
        folderNames: ['fastlane-open-open'],
      },
      {
        name: 'folder-fastlane-open',
        folderNames: ['fastlane-open'],
      },
      {
        name: 'folder-favicon-open-open',
        folderNames: ['favicon-open-open'],
      },
      {
        name: 'folder-favicon-open',
        folderNames: ['favicon-open'],
      },
      {
        name: 'folder-favorites-open',
        folderNames: ['favorites-open'],
      },
      {
        name: 'folder-favorites',
        folderNames: ['favorites'],
      },
      {
        name: 'folder-features-open-open',
        folderNames: ['features-open-open'],
      },
      {
        name: 'folder-features-open',
        folderNames: ['features-open'],
      },
      {
        name: 'folder-filter-open-open',
        folderNames: ['filter-open-open'],
      },
      {
        name: 'folder-filter-open',
        folderNames: ['filter-open'],
      },
      {
        name: 'folder-firebase-open-open',
        folderNames: ['firebase-open-open'],
      },
      {
        name: 'folder-firebase-open',
        folderNames: ['firebase-open'],
      },
      {
        name: 'folder-firestore-open-open',
        folderNames: ['firestore-open-open'],
      },
      {
        name: 'folder-firestore-open',
        folderNames: ['firestore-open'],
      },
      {
        name: 'folder-flatpak-open',
        folderNames: ['flatpak-open'],
      },
      {
        name: 'folder-flatpak',
        folderNames: ['flatpak'],
      },
      {
        name: 'folder-flow-open-open',
        folderNames: ['flow-open-open'],
      },
      {
        name: 'folder-flow-open',
        folderNames: ['flow-open'],
      },
      {
        name: 'folder-fluig-open',
        folderNames: ['fluig-open'],
      },
      {
        name: 'folder-fluig',
        folderNames: ['fluig'],
      },
      {
        name: 'folder-flutter-open-open',
        folderNames: ['flutter-open-open'],
      },
      {
        name: 'folder-flutter-open',
        folderNames: ['flutter-open'],
      },
      {
        name: 'folder-folder-open',
        folderNames: ['folder-open'],
      },
      {
        name: 'folder-folder',
        folderNames: ['folder'],
      },
      {
        name: 'folder-font-open-open',
        folderNames: ['font-open-open'],
      },
      {
        name: 'folder-font-open',
        folderNames: ['font-open'],
      },
      {
        name: 'folder-forgejo-open-open',
        folderNames: ['forgejo-open-open'],
      },
      {
        name: 'folder-forgejo-open',
        folderNames: ['forgejo-open'],
      },
      {
        name: 'folder-form-open-open',
        folderNames: ['form-open-open'],
      },
      {
        name: 'folder-form-open',
        folderNames: ['form-open'],
      },
      {
        name: 'folder-functions-open-open',
        folderNames: ['functions-open-open'],
      },
      {
        name: 'folder-functions-open',
        folderNames: ['functions-open'],
      },
      {
        name: 'folder-gamemaker-open-open',
        folderNames: ['gamemaker-open-open'],
      },
      {
        name: 'folder-gamemaker-open',
        folderNames: ['gamemaker-open'],
      },
      {
        name: 'folder-gcloud-open',
        folderNames: ['gcloud-open'],
      },
      {
        name: 'folder-gcloud',
        folderNames: ['gcloud'],
      },
      {
        name: 'folder-gdrive-open',
        folderNames: ['gdrive-open'],
      },
      {
        name: 'folder-gdrive',
        folderNames: ['gdrive'],
      },
      {
        name: 'folder-gemini-ai-open-open',
        folderNames: ['gemini-ai-open-open'],
      },
      {
        name: 'folder-gemini-ai-open',
        folderNames: ['gemini-ai-open'],
      },
      {
        name: 'folder-generator-open-open',
        folderNames: ['generator-open-open'],
      },
      {
        name: 'folder-generator-open',
        folderNames: ['generator-open'],
      },
      {
        name: 'folder-gh-workflows-open-open',
        folderNames: ['gh-workflows-open-open'],
      },
      {
        name: 'folder-gh-workflows-open',
        folderNames: ['gh-workflows-open'],
      },
      {
        name: 'folder-git-open-open',
        folderNames: ['git-open-open'],
      },
      {
        name: 'folder-git-open',
        folderNames: ['git-open'],
      },
      {
        name: 'folder-gitea-open-open',
        folderNames: ['gitea-open-open'],
      },
      {
        name: 'folder-gitea-open',
        folderNames: ['gitea-open'],
      },
      {
        name: 'folder-github-open-open',
        folderNames: ['github-open-open'],
      },
      {
        name: 'folder-github-open',
        folderNames: ['github-open'],
      },
      {
        name: 'folder-gitlab-open-open',
        folderNames: ['gitlab-open-open'],
      },
      {
        name: 'folder-gitlab-open',
        folderNames: ['gitlab-open'],
      },
      {
        name: 'folder-global-open-open',
        folderNames: ['global-open-open'],
      },
      {
        name: 'folder-global-open',
        folderNames: ['global-open'],
      },
      {
        name: 'folder-gnome-open',
        folderNames: ['gnome-open'],
      },
      {
        name: 'folder-gnome',
        folderNames: ['gnome'],
      },
      {
        name: 'folder-godot-open-open',
        folderNames: ['godot-open-open'],
      },
      {
        name: 'folder-godot-open',
        folderNames: ['godot-open'],
      },
      {
        name: 'folder-google-drive-open',
        folderNames: ['google-drive-open'],
      },
      {
        name: 'folder-google-drive',
        folderNames: ['google-drive'],
      },
      {
        name: 'folder-gradle-open-open',
        folderNames: ['gradle-open-open'],
      },
      {
        name: 'folder-gradle-open',
        folderNames: ['gradle-open'],
      },
      {
        name: 'folder-graphql-open-open',
        folderNames: ['graphql-open-open'],
      },
      {
        name: 'folder-graphql-open',
        folderNames: ['graphql-open'],
      },
      {
        name: 'folder-great-build-open-open',
        folderNames: ['great-build-open-open'],
      },
      {
        name: 'folder-great-build-open',
        folderNames: ['great-build-open'],
      },
      {
        name: 'folder-great-build',
        folderNames: ['great-build'],
      },
      {
        name: 'folder-great-db-open-open',
        folderNames: ['great-db-open-open'],
      },
      {
        name: 'folder-great-db-open',
        folderNames: ['great-db-open'],
      },
      {
        name: 'folder-great-db',
        folderNames: ['great-db'],
      },
      {
        name: 'folder-great-git-open-open',
        folderNames: ['great-git-open-open'],
      },
      {
        name: 'folder-great-git-open',
        folderNames: ['great-git-open'],
      },
      {
        name: 'folder-great-git',
        folderNames: ['great-git'],
      },
      {
        name: 'folder-great-jest-open-open',
        folderNames: ['great-jest-open-open'],
      },
      {
        name: 'folder-great-jest-open',
        folderNames: ['great-jest-open'],
      },
      {
        name: 'folder-great-jest',
        folderNames: ['great-jest'],
      },
      {
        name: 'folder-great-layout-open-open',
        folderNames: ['great-layout-open-open'],
      },
      {
        name: 'folder-great-layout-open',
        folderNames: ['great-layout-open'],
      },
      {
        name: 'folder-great-layout',
        folderNames: ['great-layout'],
      },
      {
        name: 'folder-great-next-open-open',
        folderNames: ['great-next-open-open'],
      },
      {
        name: 'folder-great-next-open',
        folderNames: ['great-next-open'],
      },
      {
        name: 'folder-great-next',
        folderNames: ['great-next'],
      },
      {
        name: 'folder-great-save-open-open',
        folderNames: ['great-save-open-open'],
      },
      {
        name: 'folder-great-save-open',
        folderNames: ['great-save-open'],
      },
      {
        name: 'folder-great-save',
        folderNames: ['great-save'],
      },
      {
        name: 'folder-great-services-open-open',
        folderNames: ['great-services-open-open'],
      },
      {
        name: 'folder-great-services-open',
        folderNames: ['great-services-open'],
      },
      {
        name: 'folder-great-services',
        folderNames: ['great-services'],
      },
      {
        name: 'folder-great-tests-open-open',
        folderNames: ['great-tests-open-open'],
      },
      {
        name: 'folder-great-tests-open',
        folderNames: ['great-tests-open'],
      },
      {
        name: 'folder-great-tests',
        folderNames: ['great-tests'],
      },
      {
        name: 'folder-great-vscode-open-open',
        folderNames: ['great-vscode-open-open'],
      },
      {
        name: 'folder-great-vscode-open',
        folderNames: ['great-vscode-open'],
      },
      {
        name: 'folder-great-vscode',
        folderNames: ['great-vscode'],
      },
      {
        name: 'folder-green-activities-open',
        folderNames: ['green-activities-open'],
      },
      {
        name: 'folder-green-activities',
        folderNames: ['green-activities'],
      },
      {
        name: 'folder-green-android-open',
        folderNames: ['green-android-open'],
      },
      {
        name: 'folder-green-android',
        folderNames: ['green-android'],
      },
      {
        name: 'folder-green-apple-open',
        folderNames: ['green-apple-open'],
      },
      {
        name: 'folder-green-apple',
        folderNames: ['green-apple'],
      },
      {
        name: 'folder-green-applications-open',
        folderNames: ['green-applications-open'],
      },
      {
        name: 'folder-green-applications',
        folderNames: ['green-applications'],
      },
      {
        name: 'folder-green-arduino-open',
        folderNames: ['green-arduino-open'],
      },
      {
        name: 'folder-green-arduino',
        folderNames: ['green-arduino'],
      },
      {
        name: 'folder-green-backup-open',
        folderNames: ['green-backup-open'],
      },
      {
        name: 'folder-green-backup',
        folderNames: ['green-backup'],
      },
      {
        name: 'folder-green-books-open',
        folderNames: ['green-books-open'],
      },
      {
        name: 'folder-green-books',
        folderNames: ['green-books'],
      },
      {
        name: 'folder-green-cd-open',
        folderNames: ['green-cd-open'],
      },
      {
        name: 'folder-green-cd',
        folderNames: ['green-cd'],
      },
      {
        name: 'folder-green-code-open',
        folderNames: ['green-code-open'],
      },
      {
        name: 'folder-green-code',
        folderNames: ['green-code'],
      },
      {
        name: 'folder-green-desktop-open',
        folderNames: ['green-desktop-open'],
      },
      {
        name: 'folder-green-desktop',
        folderNames: ['green-desktop'],
      },
      {
        name: 'folder-green-development-open',
        folderNames: ['green-development-open'],
      },
      {
        name: 'folder-green-development',
        folderNames: ['green-development'],
      },
      {
        name: 'folder-green-docker-open',
        folderNames: ['green-docker-open'],
      },
      {
        name: 'folder-green-docker',
        folderNames: ['green-docker'],
      },
      {
        name: 'folder-green-documents-open-open',
        folderNames: ['green-documents-open-open'],
      },
      {
        name: 'folder-green-documents-open',
        folderNames: ['green-documents-open'],
      },
      {
        name: 'folder-green-documents',
        folderNames: ['green-documents'],
      },
      {
        name: 'folder-green-download-open-open',
        folderNames: ['green-download-open-open'],
      },
      {
        name: 'folder-green-download-open',
        folderNames: ['green-download-open'],
      },
      {
        name: 'folder-green-download',
        folderNames: ['green-download'],
      },
      {
        name: 'folder-green-downloads-open',
        folderNames: ['green-downloads-open'],
      },
      {
        name: 'folder-green-downloads',
        folderNames: ['green-downloads'],
      },
      {
        name: 'folder-green-drag-accept-open',
        folderNames: ['green-drag-accept-open'],
      },
      {
        name: 'folder-green-drag-accept',
        folderNames: ['green-drag-accept'],
      },
      {
        name: 'folder-green-dropbox-open',
        folderNames: ['green-dropbox-open'],
      },
      {
        name: 'folder-green-dropbox',
        folderNames: ['green-dropbox'],
      },
      {
        name: 'folder-green-favorites-open',
        folderNames: ['green-favorites-open'],
      },
      {
        name: 'folder-green-favorites',
        folderNames: ['green-favorites'],
      },
      {
        name: 'folder-green-games-open',
        folderNames: ['green-games-open'],
      },
      {
        name: 'folder-green-games',
        folderNames: ['green-games'],
      },
      {
        name: 'folder-green-git-open',
        folderNames: ['green-git-open'],
      },
      {
        name: 'folder-green-git',
        folderNames: ['green-git'],
      },
      {
        name: 'folder-green-github-open',
        folderNames: ['green-github-open'],
      },
      {
        name: 'folder-green-github',
        folderNames: ['green-github'],
      },
      {
        name: 'folder-green-gitlab-open',
        folderNames: ['green-gitlab-open'],
      },
      {
        name: 'folder-green-gitlab',
        folderNames: ['green-gitlab'],
      },
      {
        name: 'folder-green-gnome-open',
        folderNames: ['green-gnome-open'],
      },
      {
        name: 'folder-green-gnome',
        folderNames: ['green-gnome'],
      },
      {
        name: 'folder-green-google-drive-open',
        folderNames: ['green-google-drive-open'],
      },
      {
        name: 'folder-green-google-drive',
        folderNames: ['green-google-drive'],
      },
      {
        name: 'folder-green-image-people-open',
        folderNames: ['green-image-people-open'],
      },
      {
        name: 'folder-green-image-people',
        folderNames: ['green-image-people'],
      },
      {
        name: 'folder-green-important-open',
        folderNames: ['green-important-open'],
      },
      {
        name: 'folder-green-important',
        folderNames: ['green-important'],
      },
      {
        name: 'folder-green-java-open',
        folderNames: ['green-java-open'],
      },
      {
        name: 'folder-green-java',
        folderNames: ['green-java'],
      },
      {
        name: 'folder-green-kde-open',
        folderNames: ['green-kde-open'],
      },
      {
        name: 'folder-green-kde',
        folderNames: ['green-kde'],
      },
      {
        name: 'folder-green-linux-open',
        folderNames: ['green-linux-open'],
      },
      {
        name: 'folder-green-linux',
        folderNames: ['green-linux'],
      },
      {
        name: 'folder-green-locked-open',
        folderNames: ['green-locked-open'],
      },
      {
        name: 'folder-green-locked',
        folderNames: ['green-locked'],
      },
      {
        name: 'folder-green-mail-cloud-open',
        folderNames: ['green-mail-cloud-open'],
      },
      {
        name: 'folder-green-mail-cloud',
        folderNames: ['green-mail-cloud'],
      },
      {
        name: 'folder-green-mail-open',
        folderNames: ['green-mail-open'],
      },
      {
        name: 'folder-green-mail',
        folderNames: ['green-mail'],
      },
      {
        name: 'folder-green-mega-open',
        folderNames: ['green-mega-open'],
      },
      {
        name: 'folder-green-mega',
        folderNames: ['green-mega'],
      },
      {
        name: 'folder-green-meocloud-open',
        folderNames: ['green-meocloud-open'],
      },
      {
        name: 'folder-green-meocloud',
        folderNames: ['green-meocloud'],
      },
      {
        name: 'folder-green-music-open-open',
        folderNames: ['green-music-open-open'],
      },
      {
        name: 'folder-green-music-open',
        folderNames: ['green-music-open'],
      },
      {
        name: 'folder-green-music',
        folderNames: ['green-music'],
      },
      {
        name: 'folder-green-network-open',
        folderNames: ['green-network-open'],
      },
      {
        name: 'folder-green-network',
        folderNames: ['green-network'],
      },
      {
        name: 'folder-green-nextcloud-open',
        folderNames: ['green-nextcloud-open'],
      },
      {
        name: 'folder-green-nextcloud',
        folderNames: ['green-nextcloud'],
      },
      {
        name: 'folder-green-notes-open',
        folderNames: ['green-notes-open'],
      },
      {
        name: 'folder-green-notes',
        folderNames: ['green-notes'],
      },
      {
        name: 'folder-green-obsidian-open',
        folderNames: ['green-obsidian-open'],
      },
      {
        name: 'folder-green-obsidian',
        folderNames: ['green-obsidian'],
      },
      {
        name: 'folder-green-onedrive-open',
        folderNames: ['green-onedrive-open'],
      },
      {
        name: 'folder-green-onedrive',
        folderNames: ['green-onedrive'],
      },
      {
        name: 'folder-green-open-open',
        folderNames: ['green-open-open'],
      },
      {
        name: 'folder-green-open',
        folderNames: ['green-open'],
      },
      {
        name: 'folder-green-owncloud-open',
        folderNames: ['green-owncloud-open'],
      },
      {
        name: 'folder-green-owncloud',
        folderNames: ['green-owncloud'],
      },
      {
        name: 'folder-green-pcloud-open',
        folderNames: ['green-pcloud-open'],
      },
      {
        name: 'folder-green-pcloud',
        folderNames: ['green-pcloud'],
      },
      {
        name: 'folder-green-photo-open',
        folderNames: ['green-photo-open'],
      },
      {
        name: 'folder-green-photo',
        folderNames: ['green-photo'],
      },
      {
        name: 'folder-green-pictures-open-open',
        folderNames: ['green-pictures-open-open'],
      },
      {
        name: 'folder-green-pictures-open',
        folderNames: ['green-pictures-open'],
      },
      {
        name: 'folder-green-pictures',
        folderNames: ['green-pictures'],
      },
      {
        name: 'folder-green-print-open',
        folderNames: ['green-print-open'],
      },
      {
        name: 'folder-green-print',
        folderNames: ['green-print'],
      },
      {
        name: 'folder-green-private-open',
        folderNames: ['green-private-open'],
      },
      {
        name: 'folder-green-private',
        folderNames: ['green-private'],
      },
      {
        name: 'folder-green-projects-open',
        folderNames: ['green-projects-open'],
      },
      {
        name: 'folder-green-projects',
        folderNames: ['green-projects'],
      },
      {
        name: 'folder-green-public-open',
        folderNames: ['green-public-open'],
      },
      {
        name: 'folder-green-public',
        folderNames: ['green-public'],
      },
      {
        name: 'folder-green-publicshare-open-open',
        folderNames: ['green-publicshare-open-open'],
      },
      {
        name: 'folder-green-publicshare-open',
        folderNames: ['green-publicshare-open'],
      },
      {
        name: 'folder-green-remote-open-open',
        folderNames: ['green-remote-open-open'],
      },
      {
        name: 'folder-green-remote-open',
        folderNames: ['green-remote-open'],
      },
      {
        name: 'folder-green-remote',
        folderNames: ['green-remote'],
      },
      {
        name: 'folder-green-script-open',
        folderNames: ['green-script-open'],
      },
      {
        name: 'folder-green-script',
        folderNames: ['green-script'],
      },
      {
        name: 'folder-green-snap-open',
        folderNames: ['green-snap-open'],
      },
      {
        name: 'folder-green-snap',
        folderNames: ['green-snap'],
      },
      {
        name: 'folder-green-steam-open',
        folderNames: ['green-steam-open'],
      },
      {
        name: 'folder-green-steam',
        folderNames: ['green-steam'],
      },
      {
        name: 'folder-green-sync-open',
        folderNames: ['green-sync-open'],
      },
      {
        name: 'folder-green-sync',
        folderNames: ['green-sync'],
      },
      {
        name: 'folder-green-syncthing-open',
        folderNames: ['green-syncthing-open'],
      },
      {
        name: 'folder-green-syncthing',
        folderNames: ['green-syncthing'],
      },
      {
        name: 'folder-green-systemd-open',
        folderNames: ['green-systemd-open'],
      },
      {
        name: 'folder-green-systemd',
        folderNames: ['green-systemd'],
      },
      {
        name: 'folder-green-tar-open',
        folderNames: ['green-tar-open'],
      },
      {
        name: 'folder-green-tar',
        folderNames: ['green-tar'],
      },
      {
        name: 'folder-green-templates-open-open',
        folderNames: ['green-templates-open-open'],
      },
      {
        name: 'folder-green-templates-open',
        folderNames: ['green-templates-open'],
      },
      {
        name: 'folder-green-templates',
        folderNames: ['green-templates'],
      },
      {
        name: 'folder-green-torrent-open',
        folderNames: ['green-torrent-open'],
      },
      {
        name: 'folder-green-torrent',
        folderNames: ['green-torrent'],
      },
      {
        name: 'folder-green-unlocked-open',
        folderNames: ['green-unlocked-open'],
      },
      {
        name: 'folder-green-unlocked',
        folderNames: ['green-unlocked'],
      },
      {
        name: 'folder-green-vbox-open',
        folderNames: ['green-vbox-open'],
      },
      {
        name: 'folder-green-vbox',
        folderNames: ['green-vbox'],
      },
      {
        name: 'folder-green-video-open',
        folderNames: ['green-video-open'],
      },
      {
        name: 'folder-green-video',
        folderNames: ['green-video'],
      },
      {
        name: 'folder-green-videos-open-open',
        folderNames: ['green-videos-open-open'],
      },
      {
        name: 'folder-green-videos-open',
        folderNames: ['green-videos-open'],
      },
      {
        name: 'folder-green-videos',
        folderNames: ['green-videos'],
      },
      {
        name: 'folder-green-visiting-open',
        folderNames: ['green-visiting-open'],
      },
      {
        name: 'folder-green-visiting',
        folderNames: ['green-visiting'],
      },
      {
        name: 'folder-green-wifi-open',
        folderNames: ['green-wifi-open'],
      },
      {
        name: 'folder-green-wifi',
        folderNames: ['green-wifi'],
      },
      {
        name: 'folder-green-wine-open',
        folderNames: ['green-wine-open'],
      },
      {
        name: 'folder-green-wine',
        folderNames: ['green-wine'],
      },
      {
        name: 'folder-green-yandex-disk-open',
        folderNames: ['green-yandex-disk-open'],
      },
      {
        name: 'folder-green-yandex-disk',
        folderNames: ['green-yandex-disk'],
      },
      {
        name: 'folder-green',
        folderNames: ['green'],
      },
      {
        name: 'folder-grey-activities-open',
        folderNames: ['grey-activities-open'],
      },
      {
        name: 'folder-grey-activities',
        folderNames: ['grey-activities'],
      },
      {
        name: 'folder-grey-android-open',
        folderNames: ['grey-android-open'],
      },
      {
        name: 'folder-grey-android',
        folderNames: ['grey-android'],
      },
      {
        name: 'folder-grey-apple-open',
        folderNames: ['grey-apple-open'],
      },
      {
        name: 'folder-grey-apple',
        folderNames: ['grey-apple'],
      },
      {
        name: 'folder-grey-applications-open',
        folderNames: ['grey-applications-open'],
      },
      {
        name: 'folder-grey-applications',
        folderNames: ['grey-applications'],
      },
      {
        name: 'folder-grey-arduino-open',
        folderNames: ['grey-arduino-open'],
      },
      {
        name: 'folder-grey-arduino',
        folderNames: ['grey-arduino'],
      },
      {
        name: 'folder-grey-backup-open',
        folderNames: ['grey-backup-open'],
      },
      {
        name: 'folder-grey-backup',
        folderNames: ['grey-backup'],
      },
      {
        name: 'folder-grey-books-open',
        folderNames: ['grey-books-open'],
      },
      {
        name: 'folder-grey-books',
        folderNames: ['grey-books'],
      },
      {
        name: 'folder-grey-cd-open',
        folderNames: ['grey-cd-open'],
      },
      {
        name: 'folder-grey-cd',
        folderNames: ['grey-cd'],
      },
      {
        name: 'folder-grey-code-open',
        folderNames: ['grey-code-open'],
      },
      {
        name: 'folder-grey-code',
        folderNames: ['grey-code'],
      },
      {
        name: 'folder-grey-desktop-open',
        folderNames: ['grey-desktop-open'],
      },
      {
        name: 'folder-grey-desktop',
        folderNames: ['grey-desktop'],
      },
      {
        name: 'folder-grey-development-open',
        folderNames: ['grey-development-open'],
      },
      {
        name: 'folder-grey-development',
        folderNames: ['grey-development'],
      },
      {
        name: 'folder-grey-docker-open',
        folderNames: ['grey-docker-open'],
      },
      {
        name: 'folder-grey-docker',
        folderNames: ['grey-docker'],
      },
      {
        name: 'folder-grey-documents-open-open',
        folderNames: ['grey-documents-open-open'],
      },
      {
        name: 'folder-grey-documents-open',
        folderNames: ['grey-documents-open'],
      },
      {
        name: 'folder-grey-documents',
        folderNames: ['grey-documents'],
      },
      {
        name: 'folder-grey-download-open-open',
        folderNames: ['grey-download-open-open'],
      },
      {
        name: 'folder-grey-download-open',
        folderNames: ['grey-download-open'],
      },
      {
        name: 'folder-grey-download',
        folderNames: ['grey-download'],
      },
      {
        name: 'folder-grey-downloads-open',
        folderNames: ['grey-downloads-open'],
      },
      {
        name: 'folder-grey-downloads',
        folderNames: ['grey-downloads'],
      },
      {
        name: 'folder-grey-drag-accept-open',
        folderNames: ['grey-drag-accept-open'],
      },
      {
        name: 'folder-grey-drag-accept',
        folderNames: ['grey-drag-accept'],
      },
      {
        name: 'folder-grey-dropbox-open',
        folderNames: ['grey-dropbox-open'],
      },
      {
        name: 'folder-grey-dropbox',
        folderNames: ['grey-dropbox'],
      },
      {
        name: 'folder-grey-favorites-open',
        folderNames: ['grey-favorites-open'],
      },
      {
        name: 'folder-grey-favorites',
        folderNames: ['grey-favorites'],
      },
      {
        name: 'folder-grey-games-open',
        folderNames: ['grey-games-open'],
      },
      {
        name: 'folder-grey-games',
        folderNames: ['grey-games'],
      },
      {
        name: 'folder-grey-git-open',
        folderNames: ['grey-git-open'],
      },
      {
        name: 'folder-grey-git',
        folderNames: ['grey-git'],
      },
      {
        name: 'folder-grey-github-open',
        folderNames: ['grey-github-open'],
      },
      {
        name: 'folder-grey-github',
        folderNames: ['grey-github'],
      },
      {
        name: 'folder-grey-gitlab-open',
        folderNames: ['grey-gitlab-open'],
      },
      {
        name: 'folder-grey-gitlab',
        folderNames: ['grey-gitlab'],
      },
      {
        name: 'folder-grey-gnome-open',
        folderNames: ['grey-gnome-open'],
      },
      {
        name: 'folder-grey-gnome',
        folderNames: ['grey-gnome'],
      },
      {
        name: 'folder-grey-google-drive-open',
        folderNames: ['grey-google-drive-open'],
      },
      {
        name: 'folder-grey-google-drive',
        folderNames: ['grey-google-drive'],
      },
      {
        name: 'folder-grey-image-people-open',
        folderNames: ['grey-image-people-open'],
      },
      {
        name: 'folder-grey-image-people',
        folderNames: ['grey-image-people'],
      },
      {
        name: 'folder-grey-important-open',
        folderNames: ['grey-important-open'],
      },
      {
        name: 'folder-grey-important',
        folderNames: ['grey-important'],
      },
      {
        name: 'folder-grey-java-open',
        folderNames: ['grey-java-open'],
      },
      {
        name: 'folder-grey-java',
        folderNames: ['grey-java'],
      },
      {
        name: 'folder-grey-kde-open',
        folderNames: ['grey-kde-open'],
      },
      {
        name: 'folder-grey-kde',
        folderNames: ['grey-kde'],
      },
      {
        name: 'folder-grey-linux-open',
        folderNames: ['grey-linux-open'],
      },
      {
        name: 'folder-grey-linux',
        folderNames: ['grey-linux'],
      },
      {
        name: 'folder-grey-locked-open',
        folderNames: ['grey-locked-open'],
      },
      {
        name: 'folder-grey-locked',
        folderNames: ['grey-locked'],
      },
      {
        name: 'folder-grey-mail-cloud-open',
        folderNames: ['grey-mail-cloud-open'],
      },
      {
        name: 'folder-grey-mail-cloud',
        folderNames: ['grey-mail-cloud'],
      },
      {
        name: 'folder-grey-mail-open',
        folderNames: ['grey-mail-open'],
      },
      {
        name: 'folder-grey-mail',
        folderNames: ['grey-mail'],
      },
      {
        name: 'folder-grey-mega-open',
        folderNames: ['grey-mega-open'],
      },
      {
        name: 'folder-grey-mega',
        folderNames: ['grey-mega'],
      },
      {
        name: 'folder-grey-meocloud-open',
        folderNames: ['grey-meocloud-open'],
      },
      {
        name: 'folder-grey-meocloud',
        folderNames: ['grey-meocloud'],
      },
      {
        name: 'folder-grey-music-open-open',
        folderNames: ['grey-music-open-open'],
      },
      {
        name: 'folder-grey-music-open',
        folderNames: ['grey-music-open'],
      },
      {
        name: 'folder-grey-music',
        folderNames: ['grey-music'],
      },
      {
        name: 'folder-grey-network-open',
        folderNames: ['grey-network-open'],
      },
      {
        name: 'folder-grey-network',
        folderNames: ['grey-network'],
      },
      {
        name: 'folder-grey-nextcloud-open',
        folderNames: ['grey-nextcloud-open'],
      },
      {
        name: 'folder-grey-nextcloud',
        folderNames: ['grey-nextcloud'],
      },
      {
        name: 'folder-grey-notes-open',
        folderNames: ['grey-notes-open'],
      },
      {
        name: 'folder-grey-notes',
        folderNames: ['grey-notes'],
      },
      {
        name: 'folder-grey-obsidian-open',
        folderNames: ['grey-obsidian-open'],
      },
      {
        name: 'folder-grey-obsidian',
        folderNames: ['grey-obsidian'],
      },
      {
        name: 'folder-grey-onedrive-open',
        folderNames: ['grey-onedrive-open'],
      },
      {
        name: 'folder-grey-onedrive',
        folderNames: ['grey-onedrive'],
      },
      {
        name: 'folder-grey-open-open',
        folderNames: ['grey-open-open'],
      },
      {
        name: 'folder-grey-open',
        folderNames: ['grey-open'],
      },
      {
        name: 'folder-grey-owncloud-open',
        folderNames: ['grey-owncloud-open'],
      },
      {
        name: 'folder-grey-owncloud',
        folderNames: ['grey-owncloud'],
      },
      {
        name: 'folder-grey-pcloud-open',
        folderNames: ['grey-pcloud-open'],
      },
      {
        name: 'folder-grey-pcloud',
        folderNames: ['grey-pcloud'],
      },
      {
        name: 'folder-grey-photo-open',
        folderNames: ['grey-photo-open'],
      },
      {
        name: 'folder-grey-photo',
        folderNames: ['grey-photo'],
      },
      {
        name: 'folder-grey-pictures-open-open',
        folderNames: ['grey-pictures-open-open'],
      },
      {
        name: 'folder-grey-pictures-open',
        folderNames: ['grey-pictures-open'],
      },
      {
        name: 'folder-grey-pictures',
        folderNames: ['grey-pictures'],
      },
      {
        name: 'folder-grey-print-open',
        folderNames: ['grey-print-open'],
      },
      {
        name: 'folder-grey-print',
        folderNames: ['grey-print'],
      },
      {
        name: 'folder-grey-private-open',
        folderNames: ['grey-private-open'],
      },
      {
        name: 'folder-grey-private',
        folderNames: ['grey-private'],
      },
      {
        name: 'folder-grey-projects-open',
        folderNames: ['grey-projects-open'],
      },
      {
        name: 'folder-grey-projects',
        folderNames: ['grey-projects'],
      },
      {
        name: 'folder-grey-public-open',
        folderNames: ['grey-public-open'],
      },
      {
        name: 'folder-grey-public',
        folderNames: ['grey-public'],
      },
      {
        name: 'folder-grey-publicshare-open-open',
        folderNames: ['grey-publicshare-open-open'],
      },
      {
        name: 'folder-grey-publicshare-open',
        folderNames: ['grey-publicshare-open'],
      },
      {
        name: 'folder-grey-remote-open-open',
        folderNames: ['grey-remote-open-open'],
      },
      {
        name: 'folder-grey-remote-open',
        folderNames: ['grey-remote-open'],
      },
      {
        name: 'folder-grey-remote',
        folderNames: ['grey-remote'],
      },
      {
        name: 'folder-grey-script-open',
        folderNames: ['grey-script-open'],
      },
      {
        name: 'folder-grey-script',
        folderNames: ['grey-script'],
      },
      {
        name: 'folder-grey-snap-open',
        folderNames: ['grey-snap-open'],
      },
      {
        name: 'folder-grey-snap',
        folderNames: ['grey-snap'],
      },
      {
        name: 'folder-grey-steam-open',
        folderNames: ['grey-steam-open'],
      },
      {
        name: 'folder-grey-steam',
        folderNames: ['grey-steam'],
      },
      {
        name: 'folder-grey-sync-open',
        folderNames: ['grey-sync-open'],
      },
      {
        name: 'folder-grey-sync',
        folderNames: ['grey-sync'],
      },
      {
        name: 'folder-grey-syncthing-open',
        folderNames: ['grey-syncthing-open'],
      },
      {
        name: 'folder-grey-syncthing',
        folderNames: ['grey-syncthing'],
      },
      {
        name: 'folder-grey-systemd-open',
        folderNames: ['grey-systemd-open'],
      },
      {
        name: 'folder-grey-systemd',
        folderNames: ['grey-systemd'],
      },
      {
        name: 'folder-grey-tar-open',
        folderNames: ['grey-tar-open'],
      },
      {
        name: 'folder-grey-tar',
        folderNames: ['grey-tar'],
      },
      {
        name: 'folder-grey-templates-open-open',
        folderNames: ['grey-templates-open-open'],
      },
      {
        name: 'folder-grey-templates-open',
        folderNames: ['grey-templates-open'],
      },
      {
        name: 'folder-grey-templates',
        folderNames: ['grey-templates'],
      },
      {
        name: 'folder-grey-torrent-open',
        folderNames: ['grey-torrent-open'],
      },
      {
        name: 'folder-grey-torrent',
        folderNames: ['grey-torrent'],
      },
      {
        name: 'folder-grey-unlocked-open',
        folderNames: ['grey-unlocked-open'],
      },
      {
        name: 'folder-grey-unlocked',
        folderNames: ['grey-unlocked'],
      },
      {
        name: 'folder-grey-vbox-open',
        folderNames: ['grey-vbox-open'],
      },
      {
        name: 'folder-grey-vbox',
        folderNames: ['grey-vbox'],
      },
      {
        name: 'folder-grey-video-open',
        folderNames: ['grey-video-open'],
      },
      {
        name: 'folder-grey-video',
        folderNames: ['grey-video'],
      },
      {
        name: 'folder-grey-videos-open-open',
        folderNames: ['grey-videos-open-open'],
      },
      {
        name: 'folder-grey-videos-open',
        folderNames: ['grey-videos-open'],
      },
      {
        name: 'folder-grey-videos',
        folderNames: ['grey-videos'],
      },
      {
        name: 'folder-grey-visiting-open',
        folderNames: ['grey-visiting-open'],
      },
      {
        name: 'folder-grey-visiting',
        folderNames: ['grey-visiting'],
      },
      {
        name: 'folder-grey-wifi-open',
        folderNames: ['grey-wifi-open'],
      },
      {
        name: 'folder-grey-wifi',
        folderNames: ['grey-wifi'],
      },
      {
        name: 'folder-grey-wine-open',
        folderNames: ['grey-wine-open'],
      },
      {
        name: 'folder-grey-wine',
        folderNames: ['grey-wine'],
      },
      {
        name: 'folder-grey-yandex-disk-open',
        folderNames: ['grey-yandex-disk-open'],
      },
      {
        name: 'folder-grey-yandex-disk',
        folderNames: ['grey-yandex-disk'],
      },
      {
        name: 'folder-grey',
        folderNames: ['grey'],
      },
      {
        name: 'folder-grunt-open',
        folderNames: ['grunt-open'],
      },
      {
        name: 'folder-grunt',
        folderNames: ['grunt'],
      },
      {
        name: 'folder-guard-open-open',
        folderNames: ['guard-open-open'],
      },
      {
        name: 'folder-guard-open',
        folderNames: ['guard-open'],
      },
      {
        name: 'folder-gulp-open-open',
        folderNames: ['gulp-open-open'],
      },
      {
        name: 'folder-gulp-open',
        folderNames: ['gulp-open'],
      },
      {
        name: 'folder-hasura-open',
        folderNames: ['hasura-open'],
      },
      {
        name: 'folder-hasura',
        folderNames: ['hasura'],
      },
      {
        name: 'folder-haxelib-open',
        folderNames: ['haxelib-open'],
      },
      {
        name: 'folder-haxelib',
        folderNames: ['haxelib'],
      },
      {
        name: 'folder-helm-open-open',
        folderNames: ['helm-open-open'],
      },
      {
        name: 'folder-helm-open',
        folderNames: ['helm-open'],
      },
      {
        name: 'folder-helper-open-open',
        folderNames: ['helper-open-open'],
      },
      {
        name: 'folder-helper-open',
        folderNames: ['helper-open'],
      },
      {
        name: 'folder-home-open-open',
        folderNames: ['home-open-open'],
      },
      {
        name: 'folder-home-open',
        folderNames: ['home-open'],
      },
      {
        name: 'folder-hook-open-open',
        folderNames: ['hook-open-open'],
      },
      {
        name: 'folder-hook-open',
        folderNames: ['hook-open'],
      },
      {
        name: 'folder-husky-open-open',
        folderNames: ['husky-open-open'],
      },
      {
        name: 'folder-husky-open',
        folderNames: ['husky-open'],
      },
      {
        name: 'folder-i18n-open-open',
        folderNames: ['i18n-open-open'],
      },
      {
        name: 'folder-i18n-open',
        folderNames: ['i18n-open'],
      },
      {
        name: 'folder-image-people-open',
        folderNames: ['image-people-open'],
      },
      {
        name: 'folder-image-people',
        folderNames: ['image-people'],
      },
      {
        name: 'folder-images-open-open',
        folderNames: ['images-open-open'],
      },
      {
        name: 'folder-images-open',
        folderNames: ['images-open'],
      },
      {
        name: 'folder-images-stack-open',
        folderNames: ['images-stack-open'],
      },
      {
        name: 'folder-images-stack',
        folderNames: ['images-stack'],
      },
      {
        name: 'folder-import-open-open',
        folderNames: ['import-open-open'],
      },
      {
        name: 'folder-import-open',
        folderNames: ['import-open'],
      },
      {
        name: 'folder-important-open',
        folderNames: ['important-open'],
      },
      {
        name: 'folder-important',
        folderNames: ['important'],
      },
      {
        name: 'folder-include-open-open',
        folderNames: ['include-open-open'],
      },
      {
        name: 'folder-include-open',
        folderNames: ['include-open'],
      },
      {
        name: 'folder-indigo-activities-open',
        folderNames: ['indigo-activities-open'],
      },
      {
        name: 'folder-indigo-activities',
        folderNames: ['indigo-activities'],
      },
      {
        name: 'folder-indigo-android-open',
        folderNames: ['indigo-android-open'],
      },
      {
        name: 'folder-indigo-android',
        folderNames: ['indigo-android'],
      },
      {
        name: 'folder-indigo-apple-open',
        folderNames: ['indigo-apple-open'],
      },
      {
        name: 'folder-indigo-apple',
        folderNames: ['indigo-apple'],
      },
      {
        name: 'folder-indigo-applications-open',
        folderNames: ['indigo-applications-open'],
      },
      {
        name: 'folder-indigo-applications',
        folderNames: ['indigo-applications'],
      },
      {
        name: 'folder-indigo-arduino-open',
        folderNames: ['indigo-arduino-open'],
      },
      {
        name: 'folder-indigo-arduino',
        folderNames: ['indigo-arduino'],
      },
      {
        name: 'folder-indigo-backup-open',
        folderNames: ['indigo-backup-open'],
      },
      {
        name: 'folder-indigo-backup',
        folderNames: ['indigo-backup'],
      },
      {
        name: 'folder-indigo-books-open',
        folderNames: ['indigo-books-open'],
      },
      {
        name: 'folder-indigo-books',
        folderNames: ['indigo-books'],
      },
      {
        name: 'folder-indigo-cd-open',
        folderNames: ['indigo-cd-open'],
      },
      {
        name: 'folder-indigo-cd',
        folderNames: ['indigo-cd'],
      },
      {
        name: 'folder-indigo-code-open',
        folderNames: ['indigo-code-open'],
      },
      {
        name: 'folder-indigo-code',
        folderNames: ['indigo-code'],
      },
      {
        name: 'folder-indigo-desktop-open',
        folderNames: ['indigo-desktop-open'],
      },
      {
        name: 'folder-indigo-desktop',
        folderNames: ['indigo-desktop'],
      },
      {
        name: 'folder-indigo-development-open',
        folderNames: ['indigo-development-open'],
      },
      {
        name: 'folder-indigo-development',
        folderNames: ['indigo-development'],
      },
      {
        name: 'folder-indigo-docker-open',
        folderNames: ['indigo-docker-open'],
      },
      {
        name: 'folder-indigo-docker',
        folderNames: ['indigo-docker'],
      },
      {
        name: 'folder-indigo-documents-open-open',
        folderNames: ['indigo-documents-open-open'],
      },
      {
        name: 'folder-indigo-documents-open',
        folderNames: ['indigo-documents-open'],
      },
      {
        name: 'folder-indigo-documents',
        folderNames: ['indigo-documents'],
      },
      {
        name: 'folder-indigo-download-open-open',
        folderNames: ['indigo-download-open-open'],
      },
      {
        name: 'folder-indigo-download-open',
        folderNames: ['indigo-download-open'],
      },
      {
        name: 'folder-indigo-download',
        folderNames: ['indigo-download'],
      },
      {
        name: 'folder-indigo-downloads-open',
        folderNames: ['indigo-downloads-open'],
      },
      {
        name: 'folder-indigo-downloads',
        folderNames: ['indigo-downloads'],
      },
      {
        name: 'folder-indigo-drag-accept-open',
        folderNames: ['indigo-drag-accept-open'],
      },
      {
        name: 'folder-indigo-drag-accept',
        folderNames: ['indigo-drag-accept'],
      },
      {
        name: 'folder-indigo-dropbox-open',
        folderNames: ['indigo-dropbox-open'],
      },
      {
        name: 'folder-indigo-dropbox',
        folderNames: ['indigo-dropbox'],
      },
      {
        name: 'folder-indigo-favorites-open',
        folderNames: ['indigo-favorites-open'],
      },
      {
        name: 'folder-indigo-favorites',
        folderNames: ['indigo-favorites'],
      },
      {
        name: 'folder-indigo-games-open',
        folderNames: ['indigo-games-open'],
      },
      {
        name: 'folder-indigo-games',
        folderNames: ['indigo-games'],
      },
      {
        name: 'folder-indigo-git-open',
        folderNames: ['indigo-git-open'],
      },
      {
        name: 'folder-indigo-git',
        folderNames: ['indigo-git'],
      },
      {
        name: 'folder-indigo-github-open',
        folderNames: ['indigo-github-open'],
      },
      {
        name: 'folder-indigo-github',
        folderNames: ['indigo-github'],
      },
      {
        name: 'folder-indigo-gitlab-open',
        folderNames: ['indigo-gitlab-open'],
      },
      {
        name: 'folder-indigo-gitlab',
        folderNames: ['indigo-gitlab'],
      },
      {
        name: 'folder-indigo-gnome-open',
        folderNames: ['indigo-gnome-open'],
      },
      {
        name: 'folder-indigo-gnome',
        folderNames: ['indigo-gnome'],
      },
      {
        name: 'folder-indigo-google-drive-open',
        folderNames: ['indigo-google-drive-open'],
      },
      {
        name: 'folder-indigo-google-drive',
        folderNames: ['indigo-google-drive'],
      },
      {
        name: 'folder-indigo-image-people-open',
        folderNames: ['indigo-image-people-open'],
      },
      {
        name: 'folder-indigo-image-people',
        folderNames: ['indigo-image-people'],
      },
      {
        name: 'folder-indigo-important-open',
        folderNames: ['indigo-important-open'],
      },
      {
        name: 'folder-indigo-important',
        folderNames: ['indigo-important'],
      },
      {
        name: 'folder-indigo-java-open',
        folderNames: ['indigo-java-open'],
      },
      {
        name: 'folder-indigo-java',
        folderNames: ['indigo-java'],
      },
      {
        name: 'folder-indigo-kde-open',
        folderNames: ['indigo-kde-open'],
      },
      {
        name: 'folder-indigo-kde',
        folderNames: ['indigo-kde'],
      },
      {
        name: 'folder-indigo-linux-open',
        folderNames: ['indigo-linux-open'],
      },
      {
        name: 'folder-indigo-linux',
        folderNames: ['indigo-linux'],
      },
      {
        name: 'folder-indigo-locked-open',
        folderNames: ['indigo-locked-open'],
      },
      {
        name: 'folder-indigo-locked',
        folderNames: ['indigo-locked'],
      },
      {
        name: 'folder-indigo-mail-cloud-open',
        folderNames: ['indigo-mail-cloud-open'],
      },
      {
        name: 'folder-indigo-mail-cloud',
        folderNames: ['indigo-mail-cloud'],
      },
      {
        name: 'folder-indigo-mail-open',
        folderNames: ['indigo-mail-open'],
      },
      {
        name: 'folder-indigo-mail',
        folderNames: ['indigo-mail'],
      },
      {
        name: 'folder-indigo-mega-open',
        folderNames: ['indigo-mega-open'],
      },
      {
        name: 'folder-indigo-mega',
        folderNames: ['indigo-mega'],
      },
      {
        name: 'folder-indigo-meocloud-open',
        folderNames: ['indigo-meocloud-open'],
      },
      {
        name: 'folder-indigo-meocloud',
        folderNames: ['indigo-meocloud'],
      },
      {
        name: 'folder-indigo-music-open-open',
        folderNames: ['indigo-music-open-open'],
      },
      {
        name: 'folder-indigo-music-open',
        folderNames: ['indigo-music-open'],
      },
      {
        name: 'folder-indigo-music',
        folderNames: ['indigo-music'],
      },
      {
        name: 'folder-indigo-network-open',
        folderNames: ['indigo-network-open'],
      },
      {
        name: 'folder-indigo-network',
        folderNames: ['indigo-network'],
      },
      {
        name: 'folder-indigo-nextcloud-open',
        folderNames: ['indigo-nextcloud-open'],
      },
      {
        name: 'folder-indigo-nextcloud',
        folderNames: ['indigo-nextcloud'],
      },
      {
        name: 'folder-indigo-notes-open',
        folderNames: ['indigo-notes-open'],
      },
      {
        name: 'folder-indigo-notes',
        folderNames: ['indigo-notes'],
      },
      {
        name: 'folder-indigo-obsidian-open',
        folderNames: ['indigo-obsidian-open'],
      },
      {
        name: 'folder-indigo-obsidian',
        folderNames: ['indigo-obsidian'],
      },
      {
        name: 'folder-indigo-onedrive-open',
        folderNames: ['indigo-onedrive-open'],
      },
      {
        name: 'folder-indigo-onedrive',
        folderNames: ['indigo-onedrive'],
      },
      {
        name: 'folder-indigo-open-open',
        folderNames: ['indigo-open-open'],
      },
      {
        name: 'folder-indigo-open',
        folderNames: ['indigo-open'],
      },
      {
        name: 'folder-indigo-owncloud-open',
        folderNames: ['indigo-owncloud-open'],
      },
      {
        name: 'folder-indigo-owncloud',
        folderNames: ['indigo-owncloud'],
      },
      {
        name: 'folder-indigo-pcloud-open',
        folderNames: ['indigo-pcloud-open'],
      },
      {
        name: 'folder-indigo-pcloud',
        folderNames: ['indigo-pcloud'],
      },
      {
        name: 'folder-indigo-photo-open',
        folderNames: ['indigo-photo-open'],
      },
      {
        name: 'folder-indigo-photo',
        folderNames: ['indigo-photo'],
      },
      {
        name: 'folder-indigo-pictures-open-open',
        folderNames: ['indigo-pictures-open-open'],
      },
      {
        name: 'folder-indigo-pictures-open',
        folderNames: ['indigo-pictures-open'],
      },
      {
        name: 'folder-indigo-pictures',
        folderNames: ['indigo-pictures'],
      },
      {
        name: 'folder-indigo-print-open',
        folderNames: ['indigo-print-open'],
      },
      {
        name: 'folder-indigo-print',
        folderNames: ['indigo-print'],
      },
      {
        name: 'folder-indigo-private-open',
        folderNames: ['indigo-private-open'],
      },
      {
        name: 'folder-indigo-private',
        folderNames: ['indigo-private'],
      },
      {
        name: 'folder-indigo-projects-open',
        folderNames: ['indigo-projects-open'],
      },
      {
        name: 'folder-indigo-projects',
        folderNames: ['indigo-projects'],
      },
      {
        name: 'folder-indigo-public-open',
        folderNames: ['indigo-public-open'],
      },
      {
        name: 'folder-indigo-public',
        folderNames: ['indigo-public'],
      },
      {
        name: 'folder-indigo-publicshare-open-open',
        folderNames: ['indigo-publicshare-open-open'],
      },
      {
        name: 'folder-indigo-publicshare-open',
        folderNames: ['indigo-publicshare-open'],
      },
      {
        name: 'folder-indigo-remote-open-open',
        folderNames: ['indigo-remote-open-open'],
      },
      {
        name: 'folder-indigo-remote-open',
        folderNames: ['indigo-remote-open'],
      },
      {
        name: 'folder-indigo-remote',
        folderNames: ['indigo-remote'],
      },
      {
        name: 'folder-indigo-script-open',
        folderNames: ['indigo-script-open'],
      },
      {
        name: 'folder-indigo-script',
        folderNames: ['indigo-script'],
      },
      {
        name: 'folder-indigo-snap-open',
        folderNames: ['indigo-snap-open'],
      },
      {
        name: 'folder-indigo-snap',
        folderNames: ['indigo-snap'],
      },
      {
        name: 'folder-indigo-steam-open',
        folderNames: ['indigo-steam-open'],
      },
      {
        name: 'folder-indigo-steam',
        folderNames: ['indigo-steam'],
      },
      {
        name: 'folder-indigo-sync-open',
        folderNames: ['indigo-sync-open'],
      },
      {
        name: 'folder-indigo-sync',
        folderNames: ['indigo-sync'],
      },
      {
        name: 'folder-indigo-syncthing-open',
        folderNames: ['indigo-syncthing-open'],
      },
      {
        name: 'folder-indigo-syncthing',
        folderNames: ['indigo-syncthing'],
      },
      {
        name: 'folder-indigo-systemd-open',
        folderNames: ['indigo-systemd-open'],
      },
      {
        name: 'folder-indigo-systemd',
        folderNames: ['indigo-systemd'],
      },
      {
        name: 'folder-indigo-tar-open',
        folderNames: ['indigo-tar-open'],
      },
      {
        name: 'folder-indigo-tar',
        folderNames: ['indigo-tar'],
      },
      {
        name: 'folder-indigo-templates-open-open',
        folderNames: ['indigo-templates-open-open'],
      },
      {
        name: 'folder-indigo-templates-open',
        folderNames: ['indigo-templates-open'],
      },
      {
        name: 'folder-indigo-templates',
        folderNames: ['indigo-templates'],
      },
      {
        name: 'folder-indigo-torrent-open',
        folderNames: ['indigo-torrent-open'],
      },
      {
        name: 'folder-indigo-torrent',
        folderNames: ['indigo-torrent'],
      },
      {
        name: 'folder-indigo-unlocked-open',
        folderNames: ['indigo-unlocked-open'],
      },
      {
        name: 'folder-indigo-unlocked',
        folderNames: ['indigo-unlocked'],
      },
      {
        name: 'folder-indigo-vbox-open',
        folderNames: ['indigo-vbox-open'],
      },
      {
        name: 'folder-indigo-vbox',
        folderNames: ['indigo-vbox'],
      },
      {
        name: 'folder-indigo-video-open',
        folderNames: ['indigo-video-open'],
      },
      {
        name: 'folder-indigo-video',
        folderNames: ['indigo-video'],
      },
      {
        name: 'folder-indigo-videos-open-open',
        folderNames: ['indigo-videos-open-open'],
      },
      {
        name: 'folder-indigo-videos-open',
        folderNames: ['indigo-videos-open'],
      },
      {
        name: 'folder-indigo-videos',
        folderNames: ['indigo-videos'],
      },
      {
        name: 'folder-indigo-visiting-open',
        folderNames: ['indigo-visiting-open'],
      },
      {
        name: 'folder-indigo-visiting',
        folderNames: ['indigo-visiting'],
      },
      {
        name: 'folder-indigo-wifi-open',
        folderNames: ['indigo-wifi-open'],
      },
      {
        name: 'folder-indigo-wifi',
        folderNames: ['indigo-wifi'],
      },
      {
        name: 'folder-indigo-wine-open',
        folderNames: ['indigo-wine-open'],
      },
      {
        name: 'folder-indigo-wine',
        folderNames: ['indigo-wine'],
      },
      {
        name: 'folder-indigo-yandex-disk-open',
        folderNames: ['indigo-yandex-disk-open'],
      },
      {
        name: 'folder-indigo-yandex-disk',
        folderNames: ['indigo-yandex-disk'],
      },
      {
        name: 'folder-indigo',
        folderNames: ['indigo'],
      },
      {
        name: 'folder-info-open',
        folderNames: ['info-open'],
      },
      {
        name: 'folder-info',
        folderNames: ['info'],
      },
      {
        name: 'folder-init-open',
        folderNames: ['init-open'],
      },
      {
        name: 'folder-init',
        folderNames: ['init'],
      },
      {
        name: 'folder-injection-open',
        folderNames: ['injection-open'],
      },
      {
        name: 'folder-injection',
        folderNames: ['injection'],
      },
      {
        name: 'folder-input-open-open',
        folderNames: ['input-open-open'],
      },
      {
        name: 'folder-input-open',
        folderNames: ['input-open'],
      },
      {
        name: 'folder-instructions-open.clone-open',
        folderNames: ['instructions-open.clone-open'],
      },
      {
        name: 'folder-instructions-open.clone',
        folderNames: ['instructions-open.clone'],
      },
      {
        name: 'folder-instructions.clone-open',
        folderNames: ['instructions.clone-open'],
      },
      {
        name: 'folder-instructions.clone',
        folderNames: ['instructions.clone'],
      },
      {
        name: 'folder-intellij-open-open',
        folderNames: ['intellij-open-open'],
      },
      {
        name: 'folder-intellij-open',
        folderNames: ['intellij-open'],
      },
      {
        name: 'folder-intellij-open_light-open',
        folderNames: ['intellij-open_light-open'],
      },
      {
        name: 'folder-intellij-open_light',
        folderNames: ['intellij-open_light'],
      },
      {
        name: 'folder-intellij_light-open',
        folderNames: ['intellij_light-open'],
      },
      {
        name: 'folder-intellij_light',
        folderNames: ['intellij_light'],
      },
      {
        name: 'folder-interceptor-open-open',
        folderNames: ['interceptor-open-open'],
      },
      {
        name: 'folder-interceptor-open',
        folderNames: ['interceptor-open'],
      },
      {
        name: 'folder-interface-open-open',
        folderNames: ['interface-open-open'],
      },
      {
        name: 'folder-interface-open',
        folderNames: ['interface-open'],
      },
      {
        name: 'folder-internal-open',
        folderNames: ['internal-open'],
      },
      {
        name: 'folder-internal',
        folderNames: ['internal'],
      },
      {
        name: 'folder-ios-open-open',
        folderNames: ['ios-open-open'],
      },
      {
        name: 'folder-ios-open',
        folderNames: ['ios-open'],
      },
      {
        name: 'folder-iosapp-open',
        folderNames: ['iosapp-open'],
      },
      {
        name: 'folder-iosapp',
        folderNames: ['iosapp'],
      },
      {
        name: 'folder-islands-open',
        folderNames: ['islands-open'],
      },
      {
        name: 'folder-islands',
        folderNames: ['islands'],
      },
      {
        name: 'folder-istanbul-open',
        folderNames: ['istanbul-open'],
      },
      {
        name: 'folder-istanbul',
        folderNames: ['istanbul'],
      },
      {
        name: 'folder-java-open-open',
        folderNames: ['java-open-open'],
      },
      {
        name: 'folder-java-open',
        folderNames: ['java-open'],
      },
      {
        name: 'folder-javascript-open-open',
        folderNames: ['javascript-open-open'],
      },
      {
        name: 'folder-javascript-open',
        folderNames: ['javascript-open'],
      },
      {
        name: 'folder-jest-open',
        folderNames: ['jest-open'],
      },
      {
        name: 'folder-jest',
        folderNames: ['jest'],
      },
      {
        name: 'folder-jinja-open-open',
        folderNames: ['jinja-open-open'],
      },
      {
        name: 'folder-jinja-open',
        folderNames: ['jinja-open'],
      },
      {
        name: 'folder-jinja-open_light-open',
        folderNames: ['jinja-open_light-open'],
      },
      {
        name: 'folder-jinja-open_light',
        folderNames: ['jinja-open_light'],
      },
      {
        name: 'folder-jinja_light-open',
        folderNames: ['jinja_light-open'],
      },
      {
        name: 'folder-jinja_light',
        folderNames: ['jinja_light'],
      },
      {
        name: 'folder-job-open-open',
        folderNames: ['job-open-open'],
      },
      {
        name: 'folder-job-open',
        folderNames: ['job-open'],
      },
      {
        name: 'folder-json-open-open',
        folderNames: ['json-open-open'],
      },
      {
        name: 'folder-json-open',
        folderNames: ['json-open'],
      },
      {
        name: 'folder-jupyter-open-open',
        folderNames: ['jupyter-open-open'],
      },
      {
        name: 'folder-jupyter-open',
        folderNames: ['jupyter-open'],
      },
      {
        name: 'folder-kde-open',
        folderNames: ['kde-open'],
      },
      {
        name: 'folder-kde',
        folderNames: ['kde'],
      },
      {
        name: 'folder-keys-open-open',
        folderNames: ['keys-open-open'],
      },
      {
        name: 'folder-keys-open',
        folderNames: ['keys-open'],
      },
      {
        name: 'folder-kivy-open',
        folderNames: ['kivy-open'],
      },
      {
        name: 'folder-kivy',
        folderNames: ['kivy'],
      },
      {
        name: 'folder-kotlin-open',
        folderNames: ['kotlin-open'],
      },
      {
        name: 'folder-kotlin',
        folderNames: ['kotlin'],
      },
      {
        name: 'folder-kubernetes-open-open',
        folderNames: ['kubernetes-open-open'],
      },
      {
        name: 'folder-kubernetes-open',
        folderNames: ['kubernetes-open'],
      },
      {
        name: 'folder-kusto-open-open',
        folderNames: ['kusto-open-open'],
      },
      {
        name: 'folder-kusto-open',
        folderNames: ['kusto-open'],
      },
      {
        name: 'folder-kustomize-open',
        folderNames: ['kustomize-open'],
      },
      {
        name: 'folder-kustomize',
        folderNames: ['kustomize'],
      },
      {
        name: 'folder-layout-open-open',
        folderNames: ['layout-open-open'],
      },
      {
        name: 'folder-layout-open',
        folderNames: ['layout-open'],
      },
      {
        name: 'folder-lefthook-open-open',
        folderNames: ['lefthook-open-open'],
      },
      {
        name: 'folder-lefthook-open',
        folderNames: ['lefthook-open'],
      },
      {
        name: 'folder-less-open-open',
        folderNames: ['less-open-open'],
      },
      {
        name: 'folder-less-open',
        folderNames: ['less-open'],
      },
      {
        name: 'folder-lib-open-open',
        folderNames: ['lib-open-open'],
      },
      {
        name: 'folder-lib-open',
        folderNames: ['lib-open'],
      },
      {
        name: 'folder-license-open-open',
        folderNames: ['license-open-open'],
      },
      {
        name: 'folder-license-open',
        folderNames: ['license-open'],
      },
      {
        name: 'folder-link-open-open',
        folderNames: ['link-open-open'],
      },
      {
        name: 'folder-link-open',
        folderNames: ['link-open'],
      },
      {
        name: 'folder-linux-open-open',
        folderNames: ['linux-open-open'],
      },
      {
        name: 'folder-linux-open',
        folderNames: ['linux-open'],
      },
      {
        name: 'folder-liquibase-open-open',
        folderNames: ['liquibase-open-open'],
      },
      {
        name: 'folder-liquibase-open',
        folderNames: ['liquibase-open'],
      },
      {
        name: 'folder-locked-open',
        folderNames: ['locked-open'],
      },
      {
        name: 'folder-locked',
        folderNames: ['locked'],
      },
      {
        name: 'folder-log-open-open',
        folderNames: ['log-open-open'],
      },
      {
        name: 'folder-log-open',
        folderNames: ['log-open'],
      },
      {
        name: 'folder-lottie-open-open',
        folderNames: ['lottie-open-open'],
      },
      {
        name: 'folder-lottie-open',
        folderNames: ['lottie-open'],
      },
      {
        name: 'folder-lua-open-open',
        folderNames: ['lua-open-open'],
      },
      {
        name: 'folder-lua-open',
        folderNames: ['lua-open'],
      },
      {
        name: 'folder-luau-open-open',
        folderNames: ['luau-open-open'],
      },
      {
        name: 'folder-luau-open',
        folderNames: ['luau-open'],
      },
      {
        name: 'folder-macos-open-open',
        folderNames: ['macos-open-open'],
      },
      {
        name: 'folder-macos-open',
        folderNames: ['macos-open'],
      },
      {
        name: 'folder-magenta-activities-open',
        folderNames: ['magenta-activities-open'],
      },
      {
        name: 'folder-magenta-activities',
        folderNames: ['magenta-activities'],
      },
      {
        name: 'folder-magenta-android-open',
        folderNames: ['magenta-android-open'],
      },
      {
        name: 'folder-magenta-android',
        folderNames: ['magenta-android'],
      },
      {
        name: 'folder-magenta-apple-open',
        folderNames: ['magenta-apple-open'],
      },
      {
        name: 'folder-magenta-apple',
        folderNames: ['magenta-apple'],
      },
      {
        name: 'folder-magenta-applications-open',
        folderNames: ['magenta-applications-open'],
      },
      {
        name: 'folder-magenta-applications',
        folderNames: ['magenta-applications'],
      },
      {
        name: 'folder-magenta-arduino-open',
        folderNames: ['magenta-arduino-open'],
      },
      {
        name: 'folder-magenta-arduino',
        folderNames: ['magenta-arduino'],
      },
      {
        name: 'folder-magenta-backup-open',
        folderNames: ['magenta-backup-open'],
      },
      {
        name: 'folder-magenta-backup',
        folderNames: ['magenta-backup'],
      },
      {
        name: 'folder-magenta-books-open',
        folderNames: ['magenta-books-open'],
      },
      {
        name: 'folder-magenta-books',
        folderNames: ['magenta-books'],
      },
      {
        name: 'folder-magenta-cd-open',
        folderNames: ['magenta-cd-open'],
      },
      {
        name: 'folder-magenta-cd',
        folderNames: ['magenta-cd'],
      },
      {
        name: 'folder-magenta-code-open',
        folderNames: ['magenta-code-open'],
      },
      {
        name: 'folder-magenta-code',
        folderNames: ['magenta-code'],
      },
      {
        name: 'folder-magenta-desktop-open',
        folderNames: ['magenta-desktop-open'],
      },
      {
        name: 'folder-magenta-desktop',
        folderNames: ['magenta-desktop'],
      },
      {
        name: 'folder-magenta-development-open',
        folderNames: ['magenta-development-open'],
      },
      {
        name: 'folder-magenta-development',
        folderNames: ['magenta-development'],
      },
      {
        name: 'folder-magenta-docker-open',
        folderNames: ['magenta-docker-open'],
      },
      {
        name: 'folder-magenta-docker',
        folderNames: ['magenta-docker'],
      },
      {
        name: 'folder-magenta-documents-open-open',
        folderNames: ['magenta-documents-open-open'],
      },
      {
        name: 'folder-magenta-documents-open',
        folderNames: ['magenta-documents-open'],
      },
      {
        name: 'folder-magenta-documents',
        folderNames: ['magenta-documents'],
      },
      {
        name: 'folder-magenta-download-open-open',
        folderNames: ['magenta-download-open-open'],
      },
      {
        name: 'folder-magenta-download-open',
        folderNames: ['magenta-download-open'],
      },
      {
        name: 'folder-magenta-download',
        folderNames: ['magenta-download'],
      },
      {
        name: 'folder-magenta-downloads-open',
        folderNames: ['magenta-downloads-open'],
      },
      {
        name: 'folder-magenta-downloads',
        folderNames: ['magenta-downloads'],
      },
      {
        name: 'folder-magenta-drag-accept-open',
        folderNames: ['magenta-drag-accept-open'],
      },
      {
        name: 'folder-magenta-drag-accept',
        folderNames: ['magenta-drag-accept'],
      },
      {
        name: 'folder-magenta-dropbox-open',
        folderNames: ['magenta-dropbox-open'],
      },
      {
        name: 'folder-magenta-dropbox',
        folderNames: ['magenta-dropbox'],
      },
      {
        name: 'folder-magenta-favorites-open',
        folderNames: ['magenta-favorites-open'],
      },
      {
        name: 'folder-magenta-favorites',
        folderNames: ['magenta-favorites'],
      },
      {
        name: 'folder-magenta-games-open',
        folderNames: ['magenta-games-open'],
      },
      {
        name: 'folder-magenta-games',
        folderNames: ['magenta-games'],
      },
      {
        name: 'folder-magenta-git-open',
        folderNames: ['magenta-git-open'],
      },
      {
        name: 'folder-magenta-git',
        folderNames: ['magenta-git'],
      },
      {
        name: 'folder-magenta-github-open',
        folderNames: ['magenta-github-open'],
      },
      {
        name: 'folder-magenta-github',
        folderNames: ['magenta-github'],
      },
      {
        name: 'folder-magenta-gitlab-open',
        folderNames: ['magenta-gitlab-open'],
      },
      {
        name: 'folder-magenta-gitlab',
        folderNames: ['magenta-gitlab'],
      },
      {
        name: 'folder-magenta-gnome-open',
        folderNames: ['magenta-gnome-open'],
      },
      {
        name: 'folder-magenta-gnome',
        folderNames: ['magenta-gnome'],
      },
      {
        name: 'folder-magenta-google-drive-open',
        folderNames: ['magenta-google-drive-open'],
      },
      {
        name: 'folder-magenta-google-drive',
        folderNames: ['magenta-google-drive'],
      },
      {
        name: 'folder-magenta-image-people-open',
        folderNames: ['magenta-image-people-open'],
      },
      {
        name: 'folder-magenta-image-people',
        folderNames: ['magenta-image-people'],
      },
      {
        name: 'folder-magenta-important-open',
        folderNames: ['magenta-important-open'],
      },
      {
        name: 'folder-magenta-important',
        folderNames: ['magenta-important'],
      },
      {
        name: 'folder-magenta-java-open',
        folderNames: ['magenta-java-open'],
      },
      {
        name: 'folder-magenta-java',
        folderNames: ['magenta-java'],
      },
      {
        name: 'folder-magenta-kde-open',
        folderNames: ['magenta-kde-open'],
      },
      {
        name: 'folder-magenta-kde',
        folderNames: ['magenta-kde'],
      },
      {
        name: 'folder-magenta-linux-open',
        folderNames: ['magenta-linux-open'],
      },
      {
        name: 'folder-magenta-linux',
        folderNames: ['magenta-linux'],
      },
      {
        name: 'folder-magenta-locked-open',
        folderNames: ['magenta-locked-open'],
      },
      {
        name: 'folder-magenta-locked',
        folderNames: ['magenta-locked'],
      },
      {
        name: 'folder-magenta-mail-cloud-open',
        folderNames: ['magenta-mail-cloud-open'],
      },
      {
        name: 'folder-magenta-mail-cloud',
        folderNames: ['magenta-mail-cloud'],
      },
      {
        name: 'folder-magenta-mail-open',
        folderNames: ['magenta-mail-open'],
      },
      {
        name: 'folder-magenta-mail',
        folderNames: ['magenta-mail'],
      },
      {
        name: 'folder-magenta-mega-open',
        folderNames: ['magenta-mega-open'],
      },
      {
        name: 'folder-magenta-mega',
        folderNames: ['magenta-mega'],
      },
      {
        name: 'folder-magenta-meocloud-open',
        folderNames: ['magenta-meocloud-open'],
      },
      {
        name: 'folder-magenta-meocloud',
        folderNames: ['magenta-meocloud'],
      },
      {
        name: 'folder-magenta-music-open-open',
        folderNames: ['magenta-music-open-open'],
      },
      {
        name: 'folder-magenta-music-open',
        folderNames: ['magenta-music-open'],
      },
      {
        name: 'folder-magenta-music',
        folderNames: ['magenta-music'],
      },
      {
        name: 'folder-magenta-network-open',
        folderNames: ['magenta-network-open'],
      },
      {
        name: 'folder-magenta-network',
        folderNames: ['magenta-network'],
      },
      {
        name: 'folder-magenta-nextcloud-open',
        folderNames: ['magenta-nextcloud-open'],
      },
      {
        name: 'folder-magenta-nextcloud',
        folderNames: ['magenta-nextcloud'],
      },
      {
        name: 'folder-magenta-notes-open',
        folderNames: ['magenta-notes-open'],
      },
      {
        name: 'folder-magenta-notes',
        folderNames: ['magenta-notes'],
      },
      {
        name: 'folder-magenta-obsidian-open',
        folderNames: ['magenta-obsidian-open'],
      },
      {
        name: 'folder-magenta-obsidian',
        folderNames: ['magenta-obsidian'],
      },
      {
        name: 'folder-magenta-onedrive-open',
        folderNames: ['magenta-onedrive-open'],
      },
      {
        name: 'folder-magenta-onedrive',
        folderNames: ['magenta-onedrive'],
      },
      {
        name: 'folder-magenta-open-open',
        folderNames: ['magenta-open-open'],
      },
      {
        name: 'folder-magenta-open',
        folderNames: ['magenta-open'],
      },
      {
        name: 'folder-magenta-owncloud-open',
        folderNames: ['magenta-owncloud-open'],
      },
      {
        name: 'folder-magenta-owncloud',
        folderNames: ['magenta-owncloud'],
      },
      {
        name: 'folder-magenta-pcloud-open',
        folderNames: ['magenta-pcloud-open'],
      },
      {
        name: 'folder-magenta-pcloud',
        folderNames: ['magenta-pcloud'],
      },
      {
        name: 'folder-magenta-photo-open',
        folderNames: ['magenta-photo-open'],
      },
      {
        name: 'folder-magenta-photo',
        folderNames: ['magenta-photo'],
      },
      {
        name: 'folder-magenta-pictures-open-open',
        folderNames: ['magenta-pictures-open-open'],
      },
      {
        name: 'folder-magenta-pictures-open',
        folderNames: ['magenta-pictures-open'],
      },
      {
        name: 'folder-magenta-pictures',
        folderNames: ['magenta-pictures'],
      },
      {
        name: 'folder-magenta-print-open',
        folderNames: ['magenta-print-open'],
      },
      {
        name: 'folder-magenta-print',
        folderNames: ['magenta-print'],
      },
      {
        name: 'folder-magenta-private-open',
        folderNames: ['magenta-private-open'],
      },
      {
        name: 'folder-magenta-private',
        folderNames: ['magenta-private'],
      },
      {
        name: 'folder-magenta-projects-open',
        folderNames: ['magenta-projects-open'],
      },
      {
        name: 'folder-magenta-projects',
        folderNames: ['magenta-projects'],
      },
      {
        name: 'folder-magenta-public-open',
        folderNames: ['magenta-public-open'],
      },
      {
        name: 'folder-magenta-public',
        folderNames: ['magenta-public'],
      },
      {
        name: 'folder-magenta-publicshare-open-open',
        folderNames: ['magenta-publicshare-open-open'],
      },
      {
        name: 'folder-magenta-publicshare-open',
        folderNames: ['magenta-publicshare-open'],
      },
      {
        name: 'folder-magenta-remote-open-open',
        folderNames: ['magenta-remote-open-open'],
      },
      {
        name: 'folder-magenta-remote-open',
        folderNames: ['magenta-remote-open'],
      },
      {
        name: 'folder-magenta-remote',
        folderNames: ['magenta-remote'],
      },
      {
        name: 'folder-magenta-script-open',
        folderNames: ['magenta-script-open'],
      },
      {
        name: 'folder-magenta-script',
        folderNames: ['magenta-script'],
      },
      {
        name: 'folder-magenta-snap-open',
        folderNames: ['magenta-snap-open'],
      },
      {
        name: 'folder-magenta-snap',
        folderNames: ['magenta-snap'],
      },
      {
        name: 'folder-magenta-steam-open',
        folderNames: ['magenta-steam-open'],
      },
      {
        name: 'folder-magenta-steam',
        folderNames: ['magenta-steam'],
      },
      {
        name: 'folder-magenta-sync-open',
        folderNames: ['magenta-sync-open'],
      },
      {
        name: 'folder-magenta-sync',
        folderNames: ['magenta-sync'],
      },
      {
        name: 'folder-magenta-syncthing-open',
        folderNames: ['magenta-syncthing-open'],
      },
      {
        name: 'folder-magenta-syncthing',
        folderNames: ['magenta-syncthing'],
      },
      {
        name: 'folder-magenta-systemd-open',
        folderNames: ['magenta-systemd-open'],
      },
      {
        name: 'folder-magenta-systemd',
        folderNames: ['magenta-systemd'],
      },
      {
        name: 'folder-magenta-tar-open',
        folderNames: ['magenta-tar-open'],
      },
      {
        name: 'folder-magenta-tar',
        folderNames: ['magenta-tar'],
      },
      {
        name: 'folder-magenta-templates-open-open',
        folderNames: ['magenta-templates-open-open'],
      },
      {
        name: 'folder-magenta-templates-open',
        folderNames: ['magenta-templates-open'],
      },
      {
        name: 'folder-magenta-templates',
        folderNames: ['magenta-templates'],
      },
      {
        name: 'folder-magenta-torrent-open',
        folderNames: ['magenta-torrent-open'],
      },
      {
        name: 'folder-magenta-torrent',
        folderNames: ['magenta-torrent'],
      },
      {
        name: 'folder-magenta-unlocked-open',
        folderNames: ['magenta-unlocked-open'],
      },
      {
        name: 'folder-magenta-unlocked',
        folderNames: ['magenta-unlocked'],
      },
      {
        name: 'folder-magenta-vbox-open',
        folderNames: ['magenta-vbox-open'],
      },
      {
        name: 'folder-magenta-vbox',
        folderNames: ['magenta-vbox'],
      },
      {
        name: 'folder-magenta-video-open',
        folderNames: ['magenta-video-open'],
      },
      {
        name: 'folder-magenta-video',
        folderNames: ['magenta-video'],
      },
      {
        name: 'folder-magenta-videos-open-open',
        folderNames: ['magenta-videos-open-open'],
      },
      {
        name: 'folder-magenta-videos-open',
        folderNames: ['magenta-videos-open'],
      },
      {
        name: 'folder-magenta-videos',
        folderNames: ['magenta-videos'],
      },
      {
        name: 'folder-magenta-visiting-open',
        folderNames: ['magenta-visiting-open'],
      },
      {
        name: 'folder-magenta-visiting',
        folderNames: ['magenta-visiting'],
      },
      {
        name: 'folder-magenta-wifi-open',
        folderNames: ['magenta-wifi-open'],
      },
      {
        name: 'folder-magenta-wifi',
        folderNames: ['magenta-wifi'],
      },
      {
        name: 'folder-magenta-wine-open',
        folderNames: ['magenta-wine-open'],
      },
      {
        name: 'folder-magenta-wine',
        folderNames: ['magenta-wine'],
      },
      {
        name: 'folder-magenta-yandex-disk-open',
        folderNames: ['magenta-yandex-disk-open'],
      },
      {
        name: 'folder-magenta-yandex-disk',
        folderNames: ['magenta-yandex-disk'],
      },
      {
        name: 'folder-magenta',
        folderNames: ['magenta'],
      },
      {
        name: 'folder-mail-cloud-open',
        folderNames: ['mail-cloud-open'],
      },
      {
        name: 'folder-mail-cloud',
        folderNames: ['mail-cloud'],
      },
      {
        name: 'folder-mail-open-open',
        folderNames: ['mail-open-open'],
      },
      {
        name: 'folder-mail-open',
        folderNames: ['mail-open'],
      },
      {
        name: 'folder-mappings-open-open',
        folderNames: ['mappings-open-open'],
      },
      {
        name: 'folder-mappings-open',
        folderNames: ['mappings-open'],
      },
      {
        name: 'folder-maps-open',
        folderNames: ['maps-open'],
      },
      {
        name: 'folder-maps',
        folderNames: ['maps'],
      },
      {
        name: 'folder-markdown-open-open',
        folderNames: ['markdown-open-open'],
      },
      {
        name: 'folder-markdown-open',
        folderNames: ['markdown-open'],
      },
      {
        name: 'folder-maven-open',
        folderNames: ['maven-open'],
      },
      {
        name: 'folder-maven',
        folderNames: ['maven'],
      },
      {
        name: 'folder-mega-open',
        folderNames: ['mega-open'],
      },
      {
        name: 'folder-mega',
        folderNames: ['mega'],
      },
      {
        name: 'folder-meocloud-open',
        folderNames: ['meocloud-open'],
      },
      {
        name: 'folder-meocloud',
        folderNames: ['meocloud'],
      },
      {
        name: 'folder-mercurial-open-open',
        folderNames: ['mercurial-open-open'],
      },
      {
        name: 'folder-mercurial-open',
        folderNames: ['mercurial-open'],
      },
      {
        name: 'folder-messages-open-open',
        folderNames: ['messages-open-open'],
      },
      {
        name: 'folder-messages-open',
        folderNames: ['messages-open'],
      },
      {
        name: 'folder-meta-open-open',
        folderNames: ['meta-open-open'],
      },
      {
        name: 'folder-meta-open',
        folderNames: ['meta-open'],
      },
      {
        name: 'folder-meteor-open',
        folderNames: ['meteor-open'],
      },
      {
        name: 'folder-meteor',
        folderNames: ['meteor'],
      },
      {
        name: 'folder-metro-open-open',
        folderNames: ['metro-open-open'],
      },
      {
        name: 'folder-metro-open',
        folderNames: ['metro-open'],
      },
      {
        name: 'folder-middleware-open-open',
        folderNames: ['middleware-open-open'],
      },
      {
        name: 'folder-middleware-open',
        folderNames: ['middleware-open'],
      },
      {
        name: 'folder-migrations-open-open',
        folderNames: ['migrations-open-open'],
      },
      {
        name: 'folder-migrations-open',
        folderNames: ['migrations-open'],
      },
      {
        name: 'folder-mindsdb-open',
        folderNames: ['mindsdb-open'],
      },
      {
        name: 'folder-mindsdb',
        folderNames: ['mindsdb'],
      },
      {
        name: 'folder-mjml-open-open',
        folderNames: ['mjml-open-open'],
      },
      {
        name: 'folder-mjml-open',
        folderNames: ['mjml-open'],
      },
      {
        name: 'folder-mobile-open-open',
        folderNames: ['mobile-open-open'],
      },
      {
        name: 'folder-mobile-open',
        folderNames: ['mobile-open'],
      },
      {
        name: 'folder-mock-open-open',
        folderNames: ['mock-open-open'],
      },
      {
        name: 'folder-mock-open',
        folderNames: ['mock-open'],
      },
      {
        name: 'folder-modals-open',
        folderNames: ['modals-open'],
      },
      {
        name: 'folder-modals',
        folderNames: ['modals'],
      },
      {
        name: 'folder-mojo-open-open',
        folderNames: ['mojo-open-open'],
      },
      {
        name: 'folder-mojo-open',
        folderNames: ['mojo-open'],
      },
      {
        name: 'folder-molecule-open-open',
        folderNames: ['molecule-open-open'],
      },
      {
        name: 'folder-molecule-open',
        folderNames: ['molecule-open'],
      },
      {
        name: 'folder-mongo-open',
        folderNames: ['mongo-open'],
      },
      {
        name: 'folder-mongo',
        folderNames: ['mongo'],
      },
      {
        name: 'folder-moon-open-open',
        folderNames: ['moon-open-open'],
      },
      {
        name: 'folder-moon-open',
        folderNames: ['moon-open'],
      },
      {
        name: 'folder-move-open',
        folderNames: ['move-open'],
      },
      {
        name: 'folder-move',
        folderNames: ['move'],
      },
      {
        name: 'folder-msw-open',
        folderNames: ['msw-open'],
      },
      {
        name: 'folder-msw',
        folderNames: ['msw'],
      },
      {
        name: 'folder-music-open-open',
        folderNames: ['music-open-open'],
      },
      {
        name: 'folder-music-open',
        folderNames: ['music-open'],
      },
      {
        name: 'folder-music-stack-open',
        folderNames: ['music-stack-open'],
      },
      {
        name: 'folder-music-stack',
        folderNames: ['music-stack'],
      },
      {
        name: 'folder-netlify-open-open',
        folderNames: ['netlify-open-open'],
      },
      {
        name: 'folder-netlify-open',
        folderNames: ['netlify-open'],
      },
      {
        name: 'folder-network-open',
        folderNames: ['network-open'],
      },
      {
        name: 'folder-network',
        folderNames: ['network'],
      },
      {
        name: 'folder-new-open',
        folderNames: ['new-open'],
      },
      {
        name: 'folder-new',
        folderNames: ['new'],
      },
      {
        name: 'folder-next-open-open',
        folderNames: ['next-open-open'],
      },
      {
        name: 'folder-next-open',
        folderNames: ['next-open'],
      },
      {
        name: 'folder-nextcloud-open',
        folderNames: ['nextcloud-open'],
      },
      {
        name: 'folder-nextcloud',
        folderNames: ['nextcloud'],
      },
      {
        name: 'folder-nginx-open-open',
        folderNames: ['nginx-open-open'],
      },
      {
        name: 'folder-nginx-open',
        folderNames: ['nginx-open'],
      },
      {
        name: 'folder-ngrx-actions-open.clone-open',
        folderNames: ['ngrx-actions-open.clone-open'],
      },
      {
        name: 'folder-ngrx-actions-open.clone',
        folderNames: ['ngrx-actions-open.clone'],
      },
      {
        name: 'folder-ngrx-actions.clone-open',
        folderNames: ['ngrx-actions.clone-open'],
      },
      {
        name: 'folder-ngrx-actions.clone',
        folderNames: ['ngrx-actions.clone'],
      },
      {
        name: 'folder-ngrx-effects-open.clone-open',
        folderNames: ['ngrx-effects-open.clone-open'],
      },
      {
        name: 'folder-ngrx-effects-open.clone',
        folderNames: ['ngrx-effects-open.clone'],
      },
      {
        name: 'folder-ngrx-effects.clone-open',
        folderNames: ['ngrx-effects.clone-open'],
      },
      {
        name: 'folder-ngrx-effects.clone',
        folderNames: ['ngrx-effects.clone'],
      },
      {
        name: 'folder-ngrx-entities-open.clone-open',
        folderNames: ['ngrx-entities-open.clone-open'],
      },
      {
        name: 'folder-ngrx-entities-open.clone',
        folderNames: ['ngrx-entities-open.clone'],
      },
      {
        name: 'folder-ngrx-entities.clone-open',
        folderNames: ['ngrx-entities.clone-open'],
      },
      {
        name: 'folder-ngrx-entities.clone',
        folderNames: ['ngrx-entities.clone'],
      },
      {
        name: 'folder-ngrx-reducer-open.clone-open',
        folderNames: ['ngrx-reducer-open.clone-open'],
      },
      {
        name: 'folder-ngrx-reducer-open.clone',
        folderNames: ['ngrx-reducer-open.clone'],
      },
      {
        name: 'folder-ngrx-reducer.clone-open',
        folderNames: ['ngrx-reducer.clone-open'],
      },
      {
        name: 'folder-ngrx-reducer.clone',
        folderNames: ['ngrx-reducer.clone'],
      },
      {
        name: 'folder-ngrx-selectors-open.clone-open',
        folderNames: ['ngrx-selectors-open.clone-open'],
      },
      {
        name: 'folder-ngrx-selectors-open.clone',
        folderNames: ['ngrx-selectors-open.clone'],
      },
      {
        name: 'folder-ngrx-selectors.clone-open',
        folderNames: ['ngrx-selectors.clone-open'],
      },
      {
        name: 'folder-ngrx-selectors.clone',
        folderNames: ['ngrx-selectors.clone'],
      },
      {
        name: 'folder-ngrx-state-open.clone-open',
        folderNames: ['ngrx-state-open.clone-open'],
      },
      {
        name: 'folder-ngrx-state-open.clone',
        folderNames: ['ngrx-state-open.clone'],
      },
      {
        name: 'folder-ngrx-state.clone-open',
        folderNames: ['ngrx-state.clone-open'],
      },
      {
        name: 'folder-ngrx-state.clone',
        folderNames: ['ngrx-state.clone'],
      },
      {
        name: 'folder-ngrx-store-open-open',
        folderNames: ['ngrx-store-open-open'],
      },
      {
        name: 'folder-ngrx-store-open',
        folderNames: ['ngrx-store-open'],
      },
      {
        name: 'folder-node-open-open',
        folderNames: ['node-open-open'],
      },
      {
        name: 'folder-node-open',
        folderNames: ['node-open'],
      },
      {
        name: 'folder-nordic-activities-open',
        folderNames: ['nordic-activities-open'],
      },
      {
        name: 'folder-nordic-activities',
        folderNames: ['nordic-activities'],
      },
      {
        name: 'folder-nordic-android-open',
        folderNames: ['nordic-android-open'],
      },
      {
        name: 'folder-nordic-android',
        folderNames: ['nordic-android'],
      },
      {
        name: 'folder-nordic-apple-open',
        folderNames: ['nordic-apple-open'],
      },
      {
        name: 'folder-nordic-apple',
        folderNames: ['nordic-apple'],
      },
      {
        name: 'folder-nordic-applications-open',
        folderNames: ['nordic-applications-open'],
      },
      {
        name: 'folder-nordic-applications',
        folderNames: ['nordic-applications'],
      },
      {
        name: 'folder-nordic-arduino-open',
        folderNames: ['nordic-arduino-open'],
      },
      {
        name: 'folder-nordic-arduino',
        folderNames: ['nordic-arduino'],
      },
      {
        name: 'folder-nordic-backup-open',
        folderNames: ['nordic-backup-open'],
      },
      {
        name: 'folder-nordic-backup',
        folderNames: ['nordic-backup'],
      },
      {
        name: 'folder-nordic-books-open',
        folderNames: ['nordic-books-open'],
      },
      {
        name: 'folder-nordic-books',
        folderNames: ['nordic-books'],
      },
      {
        name: 'folder-nordic-cd-open',
        folderNames: ['nordic-cd-open'],
      },
      {
        name: 'folder-nordic-cd',
        folderNames: ['nordic-cd'],
      },
      {
        name: 'folder-nordic-code-open',
        folderNames: ['nordic-code-open'],
      },
      {
        name: 'folder-nordic-code',
        folderNames: ['nordic-code'],
      },
      {
        name: 'folder-nordic-desktop-open',
        folderNames: ['nordic-desktop-open'],
      },
      {
        name: 'folder-nordic-desktop',
        folderNames: ['nordic-desktop'],
      },
      {
        name: 'folder-nordic-development-open',
        folderNames: ['nordic-development-open'],
      },
      {
        name: 'folder-nordic-development',
        folderNames: ['nordic-development'],
      },
      {
        name: 'folder-nordic-docker-open',
        folderNames: ['nordic-docker-open'],
      },
      {
        name: 'folder-nordic-docker',
        folderNames: ['nordic-docker'],
      },
      {
        name: 'folder-nordic-documents-open-open',
        folderNames: ['nordic-documents-open-open'],
      },
      {
        name: 'folder-nordic-documents-open',
        folderNames: ['nordic-documents-open'],
      },
      {
        name: 'folder-nordic-documents',
        folderNames: ['nordic-documents'],
      },
      {
        name: 'folder-nordic-download-open-open',
        folderNames: ['nordic-download-open-open'],
      },
      {
        name: 'folder-nordic-download-open',
        folderNames: ['nordic-download-open'],
      },
      {
        name: 'folder-nordic-download',
        folderNames: ['nordic-download'],
      },
      {
        name: 'folder-nordic-downloads-open',
        folderNames: ['nordic-downloads-open'],
      },
      {
        name: 'folder-nordic-downloads',
        folderNames: ['nordic-downloads'],
      },
      {
        name: 'folder-nordic-drag-accept-open',
        folderNames: ['nordic-drag-accept-open'],
      },
      {
        name: 'folder-nordic-drag-accept',
        folderNames: ['nordic-drag-accept'],
      },
      {
        name: 'folder-nordic-dropbox-open',
        folderNames: ['nordic-dropbox-open'],
      },
      {
        name: 'folder-nordic-dropbox',
        folderNames: ['nordic-dropbox'],
      },
      {
        name: 'folder-nordic-favorites-open',
        folderNames: ['nordic-favorites-open'],
      },
      {
        name: 'folder-nordic-favorites',
        folderNames: ['nordic-favorites'],
      },
      {
        name: 'folder-nordic-games-open',
        folderNames: ['nordic-games-open'],
      },
      {
        name: 'folder-nordic-games',
        folderNames: ['nordic-games'],
      },
      {
        name: 'folder-nordic-git-open',
        folderNames: ['nordic-git-open'],
      },
      {
        name: 'folder-nordic-git',
        folderNames: ['nordic-git'],
      },
      {
        name: 'folder-nordic-github-open',
        folderNames: ['nordic-github-open'],
      },
      {
        name: 'folder-nordic-github',
        folderNames: ['nordic-github'],
      },
      {
        name: 'folder-nordic-gitlab-open',
        folderNames: ['nordic-gitlab-open'],
      },
      {
        name: 'folder-nordic-gitlab',
        folderNames: ['nordic-gitlab'],
      },
      {
        name: 'folder-nordic-gnome-open',
        folderNames: ['nordic-gnome-open'],
      },
      {
        name: 'folder-nordic-gnome',
        folderNames: ['nordic-gnome'],
      },
      {
        name: 'folder-nordic-google-drive-open',
        folderNames: ['nordic-google-drive-open'],
      },
      {
        name: 'folder-nordic-google-drive',
        folderNames: ['nordic-google-drive'],
      },
      {
        name: 'folder-nordic-image-people-open',
        folderNames: ['nordic-image-people-open'],
      },
      {
        name: 'folder-nordic-image-people',
        folderNames: ['nordic-image-people'],
      },
      {
        name: 'folder-nordic-important-open',
        folderNames: ['nordic-important-open'],
      },
      {
        name: 'folder-nordic-important',
        folderNames: ['nordic-important'],
      },
      {
        name: 'folder-nordic-java-open',
        folderNames: ['nordic-java-open'],
      },
      {
        name: 'folder-nordic-java',
        folderNames: ['nordic-java'],
      },
      {
        name: 'folder-nordic-kde-open',
        folderNames: ['nordic-kde-open'],
      },
      {
        name: 'folder-nordic-kde',
        folderNames: ['nordic-kde'],
      },
      {
        name: 'folder-nordic-linux-open',
        folderNames: ['nordic-linux-open'],
      },
      {
        name: 'folder-nordic-linux',
        folderNames: ['nordic-linux'],
      },
      {
        name: 'folder-nordic-locked-open',
        folderNames: ['nordic-locked-open'],
      },
      {
        name: 'folder-nordic-locked',
        folderNames: ['nordic-locked'],
      },
      {
        name: 'folder-nordic-mail-cloud-open',
        folderNames: ['nordic-mail-cloud-open'],
      },
      {
        name: 'folder-nordic-mail-cloud',
        folderNames: ['nordic-mail-cloud'],
      },
      {
        name: 'folder-nordic-mail-open',
        folderNames: ['nordic-mail-open'],
      },
      {
        name: 'folder-nordic-mail',
        folderNames: ['nordic-mail'],
      },
      {
        name: 'folder-nordic-mega-open',
        folderNames: ['nordic-mega-open'],
      },
      {
        name: 'folder-nordic-mega',
        folderNames: ['nordic-mega'],
      },
      {
        name: 'folder-nordic-meocloud-open',
        folderNames: ['nordic-meocloud-open'],
      },
      {
        name: 'folder-nordic-meocloud',
        folderNames: ['nordic-meocloud'],
      },
      {
        name: 'folder-nordic-music-open-open',
        folderNames: ['nordic-music-open-open'],
      },
      {
        name: 'folder-nordic-music-open',
        folderNames: ['nordic-music-open'],
      },
      {
        name: 'folder-nordic-music',
        folderNames: ['nordic-music'],
      },
      {
        name: 'folder-nordic-network-open',
        folderNames: ['nordic-network-open'],
      },
      {
        name: 'folder-nordic-network',
        folderNames: ['nordic-network'],
      },
      {
        name: 'folder-nordic-nextcloud-open',
        folderNames: ['nordic-nextcloud-open'],
      },
      {
        name: 'folder-nordic-nextcloud',
        folderNames: ['nordic-nextcloud'],
      },
      {
        name: 'folder-nordic-notes-open',
        folderNames: ['nordic-notes-open'],
      },
      {
        name: 'folder-nordic-notes',
        folderNames: ['nordic-notes'],
      },
      {
        name: 'folder-nordic-obsidian-open',
        folderNames: ['nordic-obsidian-open'],
      },
      {
        name: 'folder-nordic-obsidian',
        folderNames: ['nordic-obsidian'],
      },
      {
        name: 'folder-nordic-onedrive-open',
        folderNames: ['nordic-onedrive-open'],
      },
      {
        name: 'folder-nordic-onedrive',
        folderNames: ['nordic-onedrive'],
      },
      {
        name: 'folder-nordic-open-open',
        folderNames: ['nordic-open-open'],
      },
      {
        name: 'folder-nordic-open',
        folderNames: ['nordic-open'],
      },
      {
        name: 'folder-nordic-owncloud-open',
        folderNames: ['nordic-owncloud-open'],
      },
      {
        name: 'folder-nordic-owncloud',
        folderNames: ['nordic-owncloud'],
      },
      {
        name: 'folder-nordic-pcloud-open',
        folderNames: ['nordic-pcloud-open'],
      },
      {
        name: 'folder-nordic-pcloud',
        folderNames: ['nordic-pcloud'],
      },
      {
        name: 'folder-nordic-photo-open',
        folderNames: ['nordic-photo-open'],
      },
      {
        name: 'folder-nordic-photo',
        folderNames: ['nordic-photo'],
      },
      {
        name: 'folder-nordic-pictures-open-open',
        folderNames: ['nordic-pictures-open-open'],
      },
      {
        name: 'folder-nordic-pictures-open',
        folderNames: ['nordic-pictures-open'],
      },
      {
        name: 'folder-nordic-pictures',
        folderNames: ['nordic-pictures'],
      },
      {
        name: 'folder-nordic-print-open',
        folderNames: ['nordic-print-open'],
      },
      {
        name: 'folder-nordic-print',
        folderNames: ['nordic-print'],
      },
      {
        name: 'folder-nordic-private-open',
        folderNames: ['nordic-private-open'],
      },
      {
        name: 'folder-nordic-private',
        folderNames: ['nordic-private'],
      },
      {
        name: 'folder-nordic-projects-open',
        folderNames: ['nordic-projects-open'],
      },
      {
        name: 'folder-nordic-projects',
        folderNames: ['nordic-projects'],
      },
      {
        name: 'folder-nordic-public-open',
        folderNames: ['nordic-public-open'],
      },
      {
        name: 'folder-nordic-public',
        folderNames: ['nordic-public'],
      },
      {
        name: 'folder-nordic-publicshare-open-open',
        folderNames: ['nordic-publicshare-open-open'],
      },
      {
        name: 'folder-nordic-publicshare-open',
        folderNames: ['nordic-publicshare-open'],
      },
      {
        name: 'folder-nordic-remote-open-open',
        folderNames: ['nordic-remote-open-open'],
      },
      {
        name: 'folder-nordic-remote-open',
        folderNames: ['nordic-remote-open'],
      },
      {
        name: 'folder-nordic-remote',
        folderNames: ['nordic-remote'],
      },
      {
        name: 'folder-nordic-script-open',
        folderNames: ['nordic-script-open'],
      },
      {
        name: 'folder-nordic-script',
        folderNames: ['nordic-script'],
      },
      {
        name: 'folder-nordic-snap-open',
        folderNames: ['nordic-snap-open'],
      },
      {
        name: 'folder-nordic-snap',
        folderNames: ['nordic-snap'],
      },
      {
        name: 'folder-nordic-steam-open',
        folderNames: ['nordic-steam-open'],
      },
      {
        name: 'folder-nordic-steam',
        folderNames: ['nordic-steam'],
      },
      {
        name: 'folder-nordic-sync-open',
        folderNames: ['nordic-sync-open'],
      },
      {
        name: 'folder-nordic-sync',
        folderNames: ['nordic-sync'],
      },
      {
        name: 'folder-nordic-syncthing-open',
        folderNames: ['nordic-syncthing-open'],
      },
      {
        name: 'folder-nordic-syncthing',
        folderNames: ['nordic-syncthing'],
      },
      {
        name: 'folder-nordic-systemd-open',
        folderNames: ['nordic-systemd-open'],
      },
      {
        name: 'folder-nordic-systemd',
        folderNames: ['nordic-systemd'],
      },
      {
        name: 'folder-nordic-tar-open',
        folderNames: ['nordic-tar-open'],
      },
      {
        name: 'folder-nordic-tar',
        folderNames: ['nordic-tar'],
      },
      {
        name: 'folder-nordic-templates-open-open',
        folderNames: ['nordic-templates-open-open'],
      },
      {
        name: 'folder-nordic-templates-open',
        folderNames: ['nordic-templates-open'],
      },
      {
        name: 'folder-nordic-templates',
        folderNames: ['nordic-templates'],
      },
      {
        name: 'folder-nordic-torrent-open',
        folderNames: ['nordic-torrent-open'],
      },
      {
        name: 'folder-nordic-torrent',
        folderNames: ['nordic-torrent'],
      },
      {
        name: 'folder-nordic-unlocked-open',
        folderNames: ['nordic-unlocked-open'],
      },
      {
        name: 'folder-nordic-unlocked',
        folderNames: ['nordic-unlocked'],
      },
      {
        name: 'folder-nordic-vbox-open',
        folderNames: ['nordic-vbox-open'],
      },
      {
        name: 'folder-nordic-vbox',
        folderNames: ['nordic-vbox'],
      },
      {
        name: 'folder-nordic-video-open',
        folderNames: ['nordic-video-open'],
      },
      {
        name: 'folder-nordic-video',
        folderNames: ['nordic-video'],
      },
      {
        name: 'folder-nordic-videos-open-open',
        folderNames: ['nordic-videos-open-open'],
      },
      {
        name: 'folder-nordic-videos-open',
        folderNames: ['nordic-videos-open'],
      },
      {
        name: 'folder-nordic-videos',
        folderNames: ['nordic-videos'],
      },
      {
        name: 'folder-nordic-visiting-open',
        folderNames: ['nordic-visiting-open'],
      },
      {
        name: 'folder-nordic-visiting',
        folderNames: ['nordic-visiting'],
      },
      {
        name: 'folder-nordic-wifi-open',
        folderNames: ['nordic-wifi-open'],
      },
      {
        name: 'folder-nordic-wifi',
        folderNames: ['nordic-wifi'],
      },
      {
        name: 'folder-nordic-wine-open',
        folderNames: ['nordic-wine-open'],
      },
      {
        name: 'folder-nordic-wine',
        folderNames: ['nordic-wine'],
      },
      {
        name: 'folder-nordic-yandex-disk-open',
        folderNames: ['nordic-yandex-disk-open'],
      },
      {
        name: 'folder-nordic-yandex-disk',
        folderNames: ['nordic-yandex-disk'],
      },
      {
        name: 'folder-nordic',
        folderNames: ['nordic'],
      },
      {
        name: 'folder-notification-open',
        folderNames: ['notification-open'],
      },
      {
        name: 'folder-notification',
        folderNames: ['notification'],
      },
      {
        name: 'folder-nuget-open',
        folderNames: ['nuget-open'],
      },
      {
        name: 'folder-nuget',
        folderNames: ['nuget'],
      },
      {
        name: 'folder-nuxt-open-open',
        folderNames: ['nuxt-open-open'],
      },
      {
        name: 'folder-nuxt-open',
        folderNames: ['nuxt-open'],
      },
      {
        name: 'folder-nx-open',
        folderNames: ['nx-open'],
      },
      {
        name: 'folder-nx',
        folderNames: ['nx'],
      },
      {
        name: 'folder-obsidian-open-open',
        folderNames: ['obsidian-open-open'],
      },
      {
        name: 'folder-obsidian-open',
        folderNames: ['obsidian-open'],
      },
      {
        name: 'folder-onedrive-open',
        folderNames: ['onedrive-open'],
      },
      {
        name: 'folder-onedrive',
        folderNames: ['onedrive'],
      },
      {
        name: 'folder-open-acf-open',
        folderNames: ['open-acf-open'],
      },
      {
        name: 'folder-open-acf',
        folderNames: ['open-acf'],
      },
      {
        name: 'folder-open-acre-open',
        folderNames: ['open-acre-open'],
      },
      {
        name: 'folder-open-acre',
        folderNames: ['open-acre'],
      },
      {
        name: 'folder-open-adapter-open',
        folderNames: ['open-adapter-open'],
      },
      {
        name: 'folder-open-adapter',
        folderNames: ['open-adapter'],
      },
      {
        name: 'folder-open-addon-open',
        folderNames: ['open-addon-open'],
      },
      {
        name: 'folder-open-addon',
        folderNames: ['open-addon'],
      },
      {
        name: 'folder-open-admin-open',
        folderNames: ['open-admin-open'],
      },
      {
        name: 'folder-open-admin',
        folderNames: ['open-admin'],
      },
      {
        name: 'folder-open-adr-open',
        folderNames: ['open-adr-open'],
      },
      {
        name: 'folder-open-adr',
        folderNames: ['open-adr'],
      },
      {
        name: 'folder-open-agda-open',
        folderNames: ['open-agda-open'],
      },
      {
        name: 'folder-open-agda',
        folderNames: ['open-agda'],
      },
      {
        name: 'folder-open-alacritty-open',
        folderNames: ['open-alacritty-open'],
      },
      {
        name: 'folder-open-alacritty',
        folderNames: ['open-alacritty'],
      },
      {
        name: 'folder-open-amplication-open',
        folderNames: ['open-amplication-open'],
      },
      {
        name: 'folder-open-amplication',
        folderNames: ['open-amplication'],
      },
      {
        name: 'folder-open-android-open',
        folderNames: ['open-android-open'],
      },
      {
        name: 'folder-open-android',
        folderNames: ['open-android'],
      },
      {
        name: 'folder-open-angular-open',
        folderNames: ['open-angular-open'],
      },
      {
        name: 'folder-open-angular',
        folderNames: ['open-angular'],
      },
      {
        name: 'folder-open-animations-open',
        folderNames: ['open-animations-open'],
      },
      {
        name: 'folder-open-animations',
        folderNames: ['open-animations'],
      },
      {
        name: 'folder-open-ansible-open',
        folderNames: ['open-ansible-open'],
      },
      {
        name: 'folder-open-ansible',
        folderNames: ['open-ansible'],
      },
      {
        name: 'folder-open-api-open',
        folderNames: ['open-api-open'],
      },
      {
        name: 'folder-open-api',
        folderNames: ['open-api'],
      },
      {
        name: 'folder-open-apollo-open',
        folderNames: ['open-apollo-open'],
      },
      {
        name: 'folder-open-apollo',
        folderNames: ['open-apollo'],
      },
      {
        name: 'folder-open-app-open',
        folderNames: ['open-app-open'],
      },
      {
        name: 'folder-open-app',
        folderNames: ['open-app'],
      },
      {
        name: 'folder-open-appstore-open',
        folderNames: ['open-appstore-open'],
      },
      {
        name: 'folder-open-appstore',
        folderNames: ['open-appstore'],
      },
      {
        name: 'folder-open-archetype-open',
        folderNames: ['open-archetype-open'],
      },
      {
        name: 'folder-open-archetype',
        folderNames: ['open-archetype'],
      },
      {
        name: 'folder-open-archive-open',
        folderNames: ['open-archive-open'],
      },
      {
        name: 'folder-open-archive',
        folderNames: ['open-archive'],
      },
      {
        name: 'folder-open-article-open',
        folderNames: ['open-article-open'],
      },
      {
        name: 'folder-open-article',
        folderNames: ['open-article'],
      },
      {
        name: 'folder-open-arttext-open',
        folderNames: ['open-arttext-open'],
      },
      {
        name: 'folder-open-arttext',
        folderNames: ['open-arttext'],
      },
      {
        name: 'folder-open-astro-open',
        folderNames: ['open-astro-open'],
      },
      {
        name: 'folder-open-astro',
        folderNames: ['open-astro'],
      },
      {
        name: 'folder-open-atom-open',
        folderNames: ['open-atom-open'],
      },
      {
        name: 'folder-open-atom',
        folderNames: ['open-atom'],
      },
      {
        name: 'folder-open-audio-open',
        folderNames: ['open-audio-open'],
      },
      {
        name: 'folder-open-audio',
        folderNames: ['open-audio'],
      },
      {
        name: 'folder-open-aurelia-open',
        folderNames: ['open-aurelia-open'],
      },
      {
        name: 'folder-open-aurelia',
        folderNames: ['open-aurelia'],
      },
      {
        name: 'folder-open-automator-open',
        folderNames: ['open-automator-open'],
      },
      {
        name: 'folder-open-automator',
        folderNames: ['open-automator'],
      },
      {
        name: 'folder-open-aws-open',
        folderNames: ['open-aws-open'],
      },
      {
        name: 'folder-open-aws',
        folderNames: ['open-aws'],
      },
      {
        name: 'folder-open-azure-devops-open',
        folderNames: ['open-azure-devops-open'],
      },
      {
        name: 'folder-open-azure-devops',
        folderNames: ['open-azure-devops'],
      },
      {
        name: 'folder-open-azure-pipelines-open',
        folderNames: ['open-azure-pipelines-open'],
      },
      {
        name: 'folder-open-azure-pipelines',
        folderNames: ['open-azure-pipelines'],
      },
      {
        name: 'folder-open-base-open',
        folderNames: ['open-base-open'],
      },
      {
        name: 'folder-open-base',
        folderNames: ['open-base'],
      },
      {
        name: 'folder-open-bazaar-open',
        folderNames: ['open-bazaar-open'],
      },
      {
        name: 'folder-open-bazaar',
        folderNames: ['open-bazaar'],
      },
      {
        name: 'folder-open-benchmark-open',
        folderNames: ['open-benchmark-open'],
      },
      {
        name: 'folder-open-benchmark',
        folderNames: ['open-benchmark'],
      },
      {
        name: 'folder-open-bicep-open',
        folderNames: ['open-bicep-open'],
      },
      {
        name: 'folder-open-bicep',
        folderNames: ['open-bicep'],
      },
      {
        name: 'folder-open-bitcoin-open',
        folderNames: ['open-bitcoin-open'],
      },
      {
        name: 'folder-open-bitcoin',
        folderNames: ['open-bitcoin'],
      },
      {
        name: 'folder-open-bloc-open',
        folderNames: ['open-bloc-open'],
      },
      {
        name: 'folder-open-bloc',
        folderNames: ['open-bloc'],
      },
      {
        name: 'folder-open-blueprint-open',
        folderNames: ['open-blueprint-open'],
      },
      {
        name: 'folder-open-blueprint',
        folderNames: ['open-blueprint'],
      },
      {
        name: 'folder-open-bot-open',
        folderNames: ['open-bot-open'],
      },
      {
        name: 'folder-open-bot',
        folderNames: ['open-bot'],
      },
      {
        name: 'folder-open-bower-open',
        folderNames: ['open-bower-open'],
      },
      {
        name: 'folder-open-bower',
        folderNames: ['open-bower'],
      },
      {
        name: 'folder-open-buildkite-open',
        folderNames: ['open-buildkite-open'],
      },
      {
        name: 'folder-open-buildkite',
        folderNames: ['open-buildkite'],
      },
      {
        name: 'folder-open-cabal-open',
        folderNames: ['open-cabal-open'],
      },
      {
        name: 'folder-open-cabal',
        folderNames: ['open-cabal'],
      },
      {
        name: 'folder-open-cake-open',
        folderNames: ['open-cake-open'],
      },
      {
        name: 'folder-open-cake',
        folderNames: ['open-cake'],
      },
      {
        name: 'folder-open-cart-open',
        folderNames: ['open-cart-open'],
      },
      {
        name: 'folder-open-cart',
        folderNames: ['open-cart'],
      },
      {
        name: 'folder-open-channels-open',
        folderNames: ['open-channels-open'],
      },
      {
        name: 'folder-open-channels',
        folderNames: ['open-channels'],
      },
      {
        name: 'folder-open-charts-open',
        folderNames: ['open-charts-open'],
      },
      {
        name: 'folder-open-charts',
        folderNames: ['open-charts'],
      },
      {
        name: 'folder-open-chef-open',
        folderNames: ['open-chef-open'],
      },
      {
        name: 'folder-open-chef',
        folderNames: ['open-chef'],
      },
      {
        name: 'folder-open-ci-open',
        folderNames: ['open-ci-open'],
      },
      {
        name: 'folder-open-ci',
        folderNames: ['open-ci'],
      },
      {
        name: 'folder-open-circleci-open',
        folderNames: ['open-circleci-open'],
      },
      {
        name: 'folder-open-circleci',
        folderNames: ['open-circleci'],
      },
      {
        name: 'folder-open-class-open',
        folderNames: ['open-class-open'],
      },
      {
        name: 'folder-open-class',
        folderNames: ['open-class'],
      },
      {
        name: 'folder-open-client-open',
        folderNames: ['open-client-open'],
      },
      {
        name: 'folder-open-client',
        folderNames: ['open-client'],
      },
      {
        name: 'folder-open-cluster-open',
        folderNames: ['open-cluster-open'],
      },
      {
        name: 'folder-open-cluster',
        folderNames: ['open-cluster'],
      },
      {
        name: 'folder-open-cmake-open',
        folderNames: ['open-cmake-open'],
      },
      {
        name: 'folder-open-cmake',
        folderNames: ['open-cmake'],
      },
      {
        name: 'folder-open-cnab-open',
        folderNames: ['open-cnab-open'],
      },
      {
        name: 'folder-open-cnab',
        folderNames: ['open-cnab'],
      },
      {
        name: 'folder-open-cobol-open',
        folderNames: ['open-cobol-open'],
      },
      {
        name: 'folder-open-cobol',
        folderNames: ['open-cobol'],
      },
      {
        name: 'folder-open-codesandbox-open',
        folderNames: ['open-codesandbox-open'],
      },
      {
        name: 'folder-open-codesandbox',
        folderNames: ['open-codesandbox'],
      },
      {
        name: 'folder-open-components-open',
        folderNames: ['open-components-open'],
      },
      {
        name: 'folder-open-components',
        folderNames: ['open-components'],
      },
      {
        name: 'folder-open-composer-open',
        folderNames: ['open-composer-open'],
      },
      {
        name: 'folder-open-composer',
        folderNames: ['open-composer'],
      },
      {
        name: 'folder-open-conductor-open',
        folderNames: ['open-conductor-open'],
      },
      {
        name: 'folder-open-conductor',
        folderNames: ['open-conductor'],
      },
      {
        name: 'folder-open-config-open',
        folderNames: ['open-config-open'],
      },
      {
        name: 'folder-open-config',
        folderNames: ['open-config'],
      },
      {
        name: 'folder-open-connection-open',
        folderNames: ['open-connection-open'],
      },
      {
        name: 'folder-open-connection',
        folderNames: ['open-connection'],
      },
      {
        name: 'folder-open-constants-open',
        folderNames: ['open-constants-open'],
      },
      {
        name: 'folder-open-constants',
        folderNames: ['open-constants'],
      },
      {
        name: 'folder-open-container-open',
        folderNames: ['open-container-open'],
      },
      {
        name: 'folder-open-container',
        folderNames: ['open-container'],
      },
      {
        name: 'folder-open-content-open',
        folderNames: ['open-content-open'],
      },
      {
        name: 'folder-open-content',
        folderNames: ['open-content'],
      },
      {
        name: 'folder-open-contract-open',
        folderNames: ['open-contract-open'],
      },
      {
        name: 'folder-open-contract',
        folderNames: ['open-contract'],
      },
      {
        name: 'folder-open-controllers-open',
        folderNames: ['open-controllers-open'],
      },
      {
        name: 'folder-open-controllers',
        folderNames: ['open-controllers'],
      },
      {
        name: 'folder-open-core-open',
        folderNames: ['open-core-open'],
      },
      {
        name: 'folder-open-core',
        folderNames: ['open-core'],
      },
      {
        name: 'folder-open-coverage-open',
        folderNames: ['open-coverage-open'],
      },
      {
        name: 'folder-open-coverage',
        folderNames: ['open-coverage'],
      },
      {
        name: 'folder-open-crates-open',
        folderNames: ['open-crates-open'],
      },
      {
        name: 'folder-open-crates',
        folderNames: ['open-crates'],
      },
      {
        name: 'folder-open-cron-open',
        folderNames: ['open-cron-open'],
      },
      {
        name: 'folder-open-cron',
        folderNames: ['open-cron'],
      },
      {
        name: 'folder-open-css-open',
        folderNames: ['open-css-open'],
      },
      {
        name: 'folder-open-css',
        folderNames: ['open-css'],
      },
      {
        name: 'folder-open-cubit-open',
        folderNames: ['open-cubit-open'],
      },
      {
        name: 'folder-open-cubit',
        folderNames: ['open-cubit'],
      },
      {
        name: 'folder-open-cue-open',
        folderNames: ['open-cue-open'],
      },
      {
        name: 'folder-open-cue',
        folderNames: ['open-cue'],
      },
      {
        name: 'folder-open-custom-open',
        folderNames: ['open-custom-open'],
      },
      {
        name: 'folder-open-custom',
        folderNames: ['open-custom'],
      },
      {
        name: 'folder-open-cvs-open',
        folderNames: ['open-cvs-open'],
      },
      {
        name: 'folder-open-cvs',
        folderNames: ['open-cvs'],
      },
      {
        name: 'folder-open-cypress-open',
        folderNames: ['open-cypress-open'],
      },
      {
        name: 'folder-open-cypress',
        folderNames: ['open-cypress'],
      },
      {
        name: 'folder-open-dapr-open',
        folderNames: ['open-dapr-open'],
      },
      {
        name: 'folder-open-dapr',
        folderNames: ['open-dapr'],
      },
      {
        name: 'folder-open-dart-open',
        folderNames: ['open-dart-open'],
      },
      {
        name: 'folder-open-dart',
        folderNames: ['open-dart'],
      },
      {
        name: 'folder-open-db-open',
        folderNames: ['open-db-open'],
      },
      {
        name: 'folder-open-db',
        folderNames: ['open-db'],
      },
      {
        name: 'folder-open-debian-open',
        folderNames: ['open-debian-open'],
      },
      {
        name: 'folder-open-debian',
        folderNames: ['open-debian'],
      },
      {
        name: 'folder-open-debug-open',
        folderNames: ['open-debug-open'],
      },
      {
        name: 'folder-open-debug',
        folderNames: ['open-debug'],
      },
      {
        name: 'folder-open-decorators-open',
        folderNames: ['open-decorators-open'],
      },
      {
        name: 'folder-open-decorators',
        folderNames: ['open-decorators'],
      },
      {
        name: 'folder-open-default-open',
        folderNames: ['open-default-open'],
      },
      {
        name: 'folder-open-default',
        folderNames: ['open-default'],
      },
      {
        name: 'folder-open-delta-open',
        folderNames: ['open-delta-open'],
      },
      {
        name: 'folder-open-delta',
        folderNames: ['open-delta'],
      },
      {
        name: 'folder-open-deno-open',
        folderNames: ['open-deno-open'],
      },
      {
        name: 'folder-open-deno',
        folderNames: ['open-deno'],
      },
      {
        name: 'folder-open-dependabot-open',
        folderNames: ['open-dependabot-open'],
      },
      {
        name: 'folder-open-dependabot',
        folderNames: ['open-dependabot'],
      },
      {
        name: 'folder-open-deploy-open',
        folderNames: ['open-deploy-open'],
      },
      {
        name: 'folder-open-deploy',
        folderNames: ['open-deploy'],
      },
      {
        name: 'folder-open-devcontainer-open',
        folderNames: ['open-devcontainer-open'],
      },
      {
        name: 'folder-open-devcontainer',
        folderNames: ['open-devcontainer'],
      },
      {
        name: 'folder-open-dist-open',
        folderNames: ['open-dist-open'],
      },
      {
        name: 'folder-open-dist',
        folderNames: ['open-dist'],
      },
      {
        name: 'folder-open-docker-open',
        folderNames: ['open-docker-open'],
      },
      {
        name: 'folder-open-docker',
        folderNames: ['open-docker'],
      },
      {
        name: 'folder-open-docs-open',
        folderNames: ['open-docs-open'],
      },
      {
        name: 'folder-open-docs',
        folderNames: ['open-docs'],
      },
      {
        name: 'folder-open-domain-open',
        folderNames: ['open-domain-open'],
      },
      {
        name: 'folder-open-domain',
        folderNames: ['open-domain'],
      },
      {
        name: 'folder-open-download-open',
        folderNames: ['open-download-open'],
      },
      {
        name: 'folder-open-download',
        folderNames: ['open-download'],
      },
      {
        name: 'folder-open-drizzle-open',
        folderNames: ['open-drizzle-open'],
      },
      {
        name: 'folder-open-drizzle',
        folderNames: ['open-drizzle'],
      },
      {
        name: 'folder-open-dropbox-open',
        folderNames: ['open-dropbox-open'],
      },
      {
        name: 'folder-open-dropbox',
        folderNames: ['open-dropbox'],
      },
      {
        name: 'folder-open-dub-open',
        folderNames: ['open-dub-open'],
      },
      {
        name: 'folder-open-dub',
        folderNames: ['open-dub'],
      },
      {
        name: 'folder-open-dump-open',
        folderNames: ['open-dump-open'],
      },
      {
        name: 'folder-open-dump',
        folderNames: ['open-dump'],
      },
      {
        name: 'folder-open-dvc-open',
        folderNames: ['open-dvc-open'],
      },
      {
        name: 'folder-open-dvc',
        folderNames: ['open-dvc'],
      },
      {
        name: 'folder-open-e2e-open',
        folderNames: ['open-e2e-open'],
      },
      {
        name: 'folder-open-e2e',
        folderNames: ['open-e2e'],
      },
      {
        name: 'folder-open-elastic-open',
        folderNames: ['open-elastic-open'],
      },
      {
        name: 'folder-open-elastic',
        folderNames: ['open-elastic'],
      },
      {
        name: 'folder-open-electron-open',
        folderNames: ['open-electron-open'],
      },
      {
        name: 'folder-open-electron',
        folderNames: ['open-electron'],
      },
      {
        name: 'folder-open-elixir-open',
        folderNames: ['open-elixir-open'],
      },
      {
        name: 'folder-open-elixir',
        folderNames: ['open-elixir'],
      },
      {
        name: 'folder-open-emacs-open',
        folderNames: ['open-emacs-open'],
      },
      {
        name: 'folder-open-emacs',
        folderNames: ['open-emacs'],
      },
      {
        name: 'folder-open-empties-open',
        folderNames: ['open-empties-open'],
      },
      {
        name: 'folder-open-empties',
        folderNames: ['open-empties'],
      },
      {
        name: 'folder-open-env-open',
        folderNames: ['open-env-open'],
      },
      {
        name: 'folder-open-env',
        folderNames: ['open-env'],
      },
      {
        name: 'folder-open-error-open',
        folderNames: ['open-error-open'],
      },
      {
        name: 'folder-open-error',
        folderNames: ['open-error'],
      },
      {
        name: 'folder-open-events-open',
        folderNames: ['open-events-open'],
      },
      {
        name: 'folder-open-events',
        folderNames: ['open-events'],
      },
      {
        name: 'folder-open-examples-open',
        folderNames: ['open-examples-open'],
      },
      {
        name: 'folder-open-examples',
        folderNames: ['open-examples'],
      },
      {
        name: 'folder-open-exclude-open',
        folderNames: ['open-exclude-open'],
      },
      {
        name: 'folder-open-exclude',
        folderNames: ['open-exclude'],
      },
      {
        name: 'folder-open-expo-open',
        folderNames: ['open-expo-open'],
      },
      {
        name: 'folder-open-expo',
        folderNames: ['open-expo'],
      },
      {
        name: 'folder-open-faq-open',
        folderNames: ['open-faq-open'],
      },
      {
        name: 'folder-open-faq',
        folderNames: ['open-faq'],
      },
      {
        name: 'folder-open-fastlane-open',
        folderNames: ['open-fastlane-open'],
      },
      {
        name: 'folder-open-fastlane',
        folderNames: ['open-fastlane'],
      },
      {
        name: 'folder-open-favorites-open',
        folderNames: ['open-favorites-open'],
      },
      {
        name: 'folder-open-favorites',
        folderNames: ['open-favorites'],
      },
      {
        name: 'folder-open-features-open',
        folderNames: ['open-features-open'],
      },
      {
        name: 'folder-open-features',
        folderNames: ['open-features'],
      },
      {
        name: 'folder-open-firebase-open',
        folderNames: ['open-firebase-open'],
      },
      {
        name: 'folder-open-firebase',
        folderNames: ['open-firebase'],
      },
      {
        name: 'folder-open-fixtures-open',
        folderNames: ['open-fixtures-open'],
      },
      {
        name: 'folder-open-fixtures',
        folderNames: ['open-fixtures'],
      },
      {
        name: 'folder-open-flow-open',
        folderNames: ['open-flow-open'],
      },
      {
        name: 'folder-open-flow',
        folderNames: ['open-flow'],
      },
      {
        name: 'folder-open-fluig-open',
        folderNames: ['open-fluig-open'],
      },
      {
        name: 'folder-open-fluig',
        folderNames: ['open-fluig'],
      },
      {
        name: 'folder-open-flutter-open',
        folderNames: ['open-flutter-open'],
      },
      {
        name: 'folder-open-flutter',
        folderNames: ['open-flutter'],
      },
      {
        name: 'folder-open-folder-open',
        folderNames: ['open-folder-open'],
      },
      {
        name: 'folder-open-folder',
        folderNames: ['open-folder'],
      },
      {
        name: 'folder-open-fonts-open',
        folderNames: ['open-fonts-open'],
      },
      {
        name: 'folder-open-fonts',
        folderNames: ['open-fonts'],
      },
      {
        name: 'folder-open-functions-open',
        folderNames: ['open-functions-open'],
      },
      {
        name: 'folder-open-functions',
        folderNames: ['open-functions'],
      },
      {
        name: 'folder-open-gcloud-open',
        folderNames: ['open-gcloud-open'],
      },
      {
        name: 'folder-open-gcloud',
        folderNames: ['open-gcloud'],
      },
      {
        name: 'folder-open-generated-open',
        folderNames: ['open-generated-open'],
      },
      {
        name: 'folder-open-generated',
        folderNames: ['open-generated'],
      },
      {
        name: 'folder-open-git-open',
        folderNames: ['open-git-open'],
      },
      {
        name: 'folder-open-git',
        folderNames: ['open-git'],
      },
      {
        name: 'folder-open-gitea-open',
        folderNames: ['open-gitea-open'],
      },
      {
        name: 'folder-open-gitea',
        folderNames: ['open-gitea'],
      },
      {
        name: 'folder-open-github-open',
        folderNames: ['open-github-open'],
      },
      {
        name: 'folder-open-github',
        folderNames: ['open-github'],
      },
      {
        name: 'folder-open-gitlab-open',
        folderNames: ['open-gitlab-open'],
      },
      {
        name: 'folder-open-gitlab',
        folderNames: ['open-gitlab'],
      },
      {
        name: 'folder-open-global-open',
        folderNames: ['open-global-open'],
      },
      {
        name: 'folder-open-global',
        folderNames: ['open-global'],
      },
      {
        name: 'folder-open-gradle-open',
        folderNames: ['open-gradle-open'],
      },
      {
        name: 'folder-open-gradle',
        folderNames: ['open-gradle'],
      },
      {
        name: 'folder-open-graphql-open',
        folderNames: ['open-graphql-open'],
      },
      {
        name: 'folder-open-graphql',
        folderNames: ['open-graphql'],
      },
      {
        name: 'folder-open-grunt-open',
        folderNames: ['open-grunt-open'],
      },
      {
        name: 'folder-open-grunt',
        folderNames: ['open-grunt'],
      },
      {
        name: 'folder-open-guard-open',
        folderNames: ['open-guard-open'],
      },
      {
        name: 'folder-open-guard',
        folderNames: ['open-guard'],
      },
      {
        name: 'folder-open-gulp-open',
        folderNames: ['open-gulp-open'],
      },
      {
        name: 'folder-open-gulp',
        folderNames: ['open-gulp'],
      },
      {
        name: 'folder-open-hasura-open',
        folderNames: ['open-hasura-open'],
      },
      {
        name: 'folder-open-hasura',
        folderNames: ['open-hasura'],
      },
      {
        name: 'folder-open-haxelib-open',
        folderNames: ['open-haxelib-open'],
      },
      {
        name: 'folder-open-haxelib',
        folderNames: ['open-haxelib'],
      },
      {
        name: 'folder-open-helm-open',
        folderNames: ['open-helm-open'],
      },
      {
        name: 'folder-open-helm',
        folderNames: ['open-helm'],
      },
      {
        name: 'folder-open-helper-open',
        folderNames: ['open-helper-open'],
      },
      {
        name: 'folder-open-helper',
        folderNames: ['open-helper'],
      },
      {
        name: 'folder-open-home-open',
        folderNames: ['open-home-open'],
      },
      {
        name: 'folder-open-home',
        folderNames: ['open-home'],
      },
      {
        name: 'folder-open-hook-open',
        folderNames: ['open-hook-open'],
      },
      {
        name: 'folder-open-hook',
        folderNames: ['open-hook'],
      },
      {
        name: 'folder-open-husky-open',
        folderNames: ['open-husky-open'],
      },
      {
        name: 'folder-open-husky',
        folderNames: ['open-husky'],
      },
      {
        name: 'folder-open-i18n-open',
        folderNames: ['open-i18n-open'],
      },
      {
        name: 'folder-open-i18n',
        folderNames: ['open-i18n'],
      },
      {
        name: 'folder-open-icons-open',
        folderNames: ['open-icons-open'],
      },
      {
        name: 'folder-open-icons',
        folderNames: ['open-icons'],
      },
      {
        name: 'folder-open-idea-open',
        folderNames: ['open-idea-open'],
      },
      {
        name: 'folder-open-idea',
        folderNames: ['open-idea'],
      },
      {
        name: 'folder-open-images-open',
        folderNames: ['open-images-open'],
      },
      {
        name: 'folder-open-images',
        folderNames: ['open-images'],
      },
      {
        name: 'folder-open-include-open',
        folderNames: ['open-include-open'],
      },
      {
        name: 'folder-open-include',
        folderNames: ['open-include'],
      },
      {
        name: 'folder-open-info-open',
        folderNames: ['open-info-open'],
      },
      {
        name: 'folder-open-info',
        folderNames: ['open-info'],
      },
      {
        name: 'folder-open-init-open',
        folderNames: ['open-init-open'],
      },
      {
        name: 'folder-open-init',
        folderNames: ['open-init'],
      },
      {
        name: 'folder-open-injection-open',
        folderNames: ['open-injection-open'],
      },
      {
        name: 'folder-open-injection',
        folderNames: ['open-injection'],
      },
      {
        name: 'folder-open-interceptor-open',
        folderNames: ['open-interceptor-open'],
      },
      {
        name: 'folder-open-interceptor',
        folderNames: ['open-interceptor'],
      },
      {
        name: 'folder-open-internal-open',
        folderNames: ['open-internal-open'],
      },
      {
        name: 'folder-open-internal',
        folderNames: ['open-internal'],
      },
      {
        name: 'folder-open-ios-open',
        folderNames: ['open-ios-open'],
      },
      {
        name: 'folder-open-ios',
        folderNames: ['open-ios'],
      },
      {
        name: 'folder-open-iosapp-open',
        folderNames: ['open-iosapp-open'],
      },
      {
        name: 'folder-open-iosapp',
        folderNames: ['open-iosapp'],
      },
      {
        name: 'folder-open-islands-open',
        folderNames: ['open-islands-open'],
      },
      {
        name: 'folder-open-islands',
        folderNames: ['open-islands'],
      },
      {
        name: 'folder-open-istanbul-open',
        folderNames: ['open-istanbul-open'],
      },
      {
        name: 'folder-open-istanbul',
        folderNames: ['open-istanbul'],
      },
      {
        name: 'folder-open-java-open',
        folderNames: ['open-java-open'],
      },
      {
        name: 'folder-open-java',
        folderNames: ['open-java'],
      },
      {
        name: 'folder-open-jest-open',
        folderNames: ['open-jest-open'],
      },
      {
        name: 'folder-open-jest',
        folderNames: ['open-jest'],
      },
      {
        name: 'folder-open-jinja-open',
        folderNames: ['open-jinja-open'],
      },
      {
        name: 'folder-open-jinja',
        folderNames: ['open-jinja'],
      },
      {
        name: 'folder-open-job-open',
        folderNames: ['open-job-open'],
      },
      {
        name: 'folder-open-job',
        folderNames: ['open-job'],
      },
      {
        name: 'folder-open-js-open',
        folderNames: ['open-js-open'],
      },
      {
        name: 'folder-open-js',
        folderNames: ['open-js'],
      },
      {
        name: 'folder-open-json-open',
        folderNames: ['open-json-open'],
      },
      {
        name: 'folder-open-json',
        folderNames: ['open-json'],
      },
      {
        name: 'folder-open-jwt-open',
        folderNames: ['open-jwt-open'],
      },
      {
        name: 'folder-open-jwt',
        folderNames: ['open-jwt'],
      },
      {
        name: 'folder-open-keys-open',
        folderNames: ['open-keys-open'],
      },
      {
        name: 'folder-open-keys',
        folderNames: ['open-keys'],
      },
      {
        name: 'folder-open-kivy-open',
        folderNames: ['open-kivy-open'],
      },
      {
        name: 'folder-open-kivy',
        folderNames: ['open-kivy'],
      },
      {
        name: 'folder-open-kotlin-open',
        folderNames: ['open-kotlin-open'],
      },
      {
        name: 'folder-open-kotlin',
        folderNames: ['open-kotlin'],
      },
      {
        name: 'folder-open-kubernetes-open',
        folderNames: ['open-kubernetes-open'],
      },
      {
        name: 'folder-open-kubernetes',
        folderNames: ['open-kubernetes'],
      },
      {
        name: 'folder-open-kustomize-open',
        folderNames: ['open-kustomize-open'],
      },
      {
        name: 'folder-open-kustomize',
        folderNames: ['open-kustomize'],
      },
      {
        name: 'folder-open-layouts-open',
        folderNames: ['open-layouts-open'],
      },
      {
        name: 'folder-open-layouts',
        folderNames: ['open-layouts'],
      },
      {
        name: 'folder-open-less-open',
        folderNames: ['open-less-open'],
      },
      {
        name: 'folder-open-less',
        folderNames: ['open-less'],
      },
      {
        name: 'folder-open-lib-open',
        folderNames: ['open-lib-open'],
      },
      {
        name: 'folder-open-lib',
        folderNames: ['open-lib'],
      },
      {
        name: 'folder-open-linux-open',
        folderNames: ['open-linux-open'],
      },
      {
        name: 'folder-open-linux',
        folderNames: ['open-linux'],
      },
      {
        name: 'folder-open-logs-open',
        folderNames: ['open-logs-open'],
      },
      {
        name: 'folder-open-logs',
        folderNames: ['open-logs'],
      },
      {
        name: 'folder-open-lottie-open',
        folderNames: ['open-lottie-open'],
      },
      {
        name: 'folder-open-lottie',
        folderNames: ['open-lottie'],
      },
      {
        name: 'folder-open-lua-open',
        folderNames: ['open-lua-open'],
      },
      {
        name: 'folder-open-lua',
        folderNames: ['open-lua'],
      },
      {
        name: 'folder-open-mac-open',
        folderNames: ['open-mac-open'],
      },
      {
        name: 'folder-open-mac',
        folderNames: ['open-mac'],
      },
      {
        name: 'folder-open-mailers-open',
        folderNames: ['open-mailers-open'],
      },
      {
        name: 'folder-open-mailers',
        folderNames: ['open-mailers'],
      },
      {
        name: 'folder-open-main-open',
        folderNames: ['open-main-open'],
      },
      {
        name: 'folder-open-main',
        folderNames: ['open-main'],
      },
      {
        name: 'folder-open-maps-open',
        folderNames: ['open-maps-open'],
      },
      {
        name: 'folder-open-maps',
        folderNames: ['open-maps'],
      },
      {
        name: 'folder-open-markdown-open',
        folderNames: ['open-markdown-open'],
      },
      {
        name: 'folder-open-markdown',
        folderNames: ['open-markdown'],
      },
      {
        name: 'folder-open-math-open',
        folderNames: ['open-math-open'],
      },
      {
        name: 'folder-open-math',
        folderNames: ['open-math'],
      },
      {
        name: 'folder-open-maven-open',
        folderNames: ['open-maven-open'],
      },
      {
        name: 'folder-open-maven',
        folderNames: ['open-maven'],
      },
      {
        name: 'folder-open-mercurial-open',
        folderNames: ['open-mercurial-open'],
      },
      {
        name: 'folder-open-mercurial',
        folderNames: ['open-mercurial'],
      },
      {
        name: 'folder-open-messages-open',
        folderNames: ['open-messages-open'],
      },
      {
        name: 'folder-open-messages',
        folderNames: ['open-messages'],
      },
      {
        name: 'folder-open-meta-open',
        folderNames: ['open-meta-open'],
      },
      {
        name: 'folder-open-meta',
        folderNames: ['open-meta'],
      },
      {
        name: 'folder-open-meteor-open',
        folderNames: ['open-meteor-open'],
      },
      {
        name: 'folder-open-meteor',
        folderNames: ['open-meteor'],
      },
      {
        name: 'folder-open-middleware-open',
        folderNames: ['open-middleware-open'],
      },
      {
        name: 'folder-open-middleware',
        folderNames: ['open-middleware'],
      },
      {
        name: 'folder-open-mindsdb-open',
        folderNames: ['open-mindsdb-open'],
      },
      {
        name: 'folder-open-mindsdb',
        folderNames: ['open-mindsdb'],
      },
      {
        name: 'folder-open-mjml-open',
        folderNames: ['open-mjml-open'],
      },
      {
        name: 'folder-open-mjml',
        folderNames: ['open-mjml'],
      },
      {
        name: 'folder-open-mobile-open',
        folderNames: ['open-mobile-open'],
      },
      {
        name: 'folder-open-mobile',
        folderNames: ['open-mobile'],
      },
      {
        name: 'folder-open-mocks-open',
        folderNames: ['open-mocks-open'],
      },
      {
        name: 'folder-open-mocks',
        folderNames: ['open-mocks'],
      },
      {
        name: 'folder-open-modals-open',
        folderNames: ['open-modals-open'],
      },
      {
        name: 'folder-open-modals',
        folderNames: ['open-modals'],
      },
      {
        name: 'folder-open-models-open',
        folderNames: ['open-models-open'],
      },
      {
        name: 'folder-open-models',
        folderNames: ['open-models'],
      },
      {
        name: 'folder-open-molecules-open',
        folderNames: ['open-molecules-open'],
      },
      {
        name: 'folder-open-molecules',
        folderNames: ['open-molecules'],
      },
      {
        name: 'folder-open-mongo-open',
        folderNames: ['open-mongo-open'],
      },
      {
        name: 'folder-open-mongo',
        folderNames: ['open-mongo'],
      },
      {
        name: 'folder-open-moon-open',
        folderNames: ['open-moon-open'],
      },
      {
        name: 'folder-open-moon',
        folderNames: ['open-moon'],
      },
      {
        name: 'folder-open-msw-open',
        folderNames: ['open-msw-open'],
      },
      {
        name: 'folder-open-msw',
        folderNames: ['open-msw'],
      },
      {
        name: 'folder-open-navigation-open',
        folderNames: ['open-navigation-open'],
      },
      {
        name: 'folder-open-navigation',
        folderNames: ['open-navigation'],
      },
      {
        name: 'folder-open-netlify-open',
        folderNames: ['open-netlify-open'],
      },
      {
        name: 'folder-open-netlify',
        folderNames: ['open-netlify'],
      },
      {
        name: 'folder-open-next-open',
        folderNames: ['open-next-open'],
      },
      {
        name: 'folder-open-next',
        folderNames: ['open-next'],
      },
      {
        name: 'folder-open-node-open',
        folderNames: ['open-node-open'],
      },
      {
        name: 'folder-open-node',
        folderNames: ['open-node'],
      },
      {
        name: 'folder-open-notebooks-open',
        folderNames: ['open-notebooks-open'],
      },
      {
        name: 'folder-open-notebooks',
        folderNames: ['open-notebooks'],
      },
      {
        name: 'folder-open-notification-open',
        folderNames: ['open-notification-open'],
      },
      {
        name: 'folder-open-notification',
        folderNames: ['open-notification'],
      },
      {
        name: 'folder-open-nuget-open',
        folderNames: ['open-nuget-open'],
      },
      {
        name: 'folder-open-nuget',
        folderNames: ['open-nuget'],
      },
      {
        name: 'folder-open-nuxt-open',
        folderNames: ['open-nuxt-open'],
      },
      {
        name: 'folder-open-nuxt',
        folderNames: ['open-nuxt'],
      },
      {
        name: 'folder-open-nx-open',
        folderNames: ['open-nx-open'],
      },
      {
        name: 'folder-open-nx',
        folderNames: ['open-nx'],
      },
      {
        name: 'folder-open-open',
        folderNames: ['open-open'],
      },
      {
        name: 'folder-open-openshift-open',
        folderNames: ['open-openshift-open'],
      },
      {
        name: 'folder-open-openshift',
        folderNames: ['open-openshift'],
      },
      {
        name: 'folder-open-orders-open',
        folderNames: ['open-orders-open'],
      },
      {
        name: 'folder-open-orders',
        folderNames: ['open-orders'],
      },
      {
        name: 'folder-open-osx-open',
        folderNames: ['open-osx-open'],
      },
      {
        name: 'folder-open-osx',
        folderNames: ['open-osx'],
      },
      {
        name: 'folder-open-other-open',
        folderNames: ['open-other-open'],
      },
      {
        name: 'folder-open-other',
        folderNames: ['open-other'],
      },
      {
        name: 'folder-open-packages-open',
        folderNames: ['open-packages-open'],
      },
      {
        name: 'folder-open-packages',
        folderNames: ['open-packages'],
      },
      {
        name: 'folder-open-parcel-open',
        folderNames: ['open-parcel-open'],
      },
      {
        name: 'folder-open-parcel',
        folderNames: ['open-parcel'],
      },
      {
        name: 'folder-open-pdf-open',
        folderNames: ['open-pdf-open'],
      },
      {
        name: 'folder-open-pdf',
        folderNames: ['open-pdf'],
      },
      {
        name: 'folder-open-pdm-open',
        folderNames: ['open-pdm-open'],
      },
      {
        name: 'folder-open-pdm',
        folderNames: ['open-pdm'],
      },
      {
        name: 'folder-open-perl-open',
        folderNames: ['open-perl-open'],
      },
      {
        name: 'folder-open-perl',
        folderNames: ['open-perl'],
      },
      {
        name: 'folder-open-php-open',
        folderNames: ['open-php-open'],
      },
      {
        name: 'folder-open-php',
        folderNames: ['open-php'],
      },
      {
        name: 'folder-open-pinia-open',
        folderNames: ['open-pinia-open'],
      },
      {
        name: 'folder-open-pinia',
        folderNames: ['open-pinia'],
      },
      {
        name: 'folder-open-pipe-open',
        folderNames: ['open-pipe-open'],
      },
      {
        name: 'folder-open-pipe',
        folderNames: ['open-pipe'],
      },
      {
        name: 'folder-open-platformio-open',
        folderNames: ['open-platformio-open'],
      },
      {
        name: 'folder-open-platformio',
        folderNames: ['open-platformio'],
      },
      {
        name: 'folder-open-playwright-open',
        folderNames: ['open-playwright-open'],
      },
      {
        name: 'folder-open-playwright',
        folderNames: ['open-playwright'],
      },
      {
        name: 'folder-open-plugin-open',
        folderNames: ['open-plugin-open'],
      },
      {
        name: 'folder-open-plugin',
        folderNames: ['open-plugin'],
      },
      {
        name: 'folder-open-posts-open',
        folderNames: ['open-posts-open'],
      },
      {
        name: 'folder-open-posts',
        folderNames: ['open-posts'],
      },
      {
        name: 'folder-open-prisma-open',
        folderNames: ['open-prisma-open'],
      },
      {
        name: 'folder-open-prisma',
        folderNames: ['open-prisma'],
      },
      {
        name: 'folder-open-private-open',
        folderNames: ['open-private-open'],
      },
      {
        name: 'folder-open-private',
        folderNames: ['open-private'],
      },
      {
        name: 'folder-open-profiles-open',
        folderNames: ['open-profiles-open'],
      },
      {
        name: 'folder-open-profiles',
        folderNames: ['open-profiles'],
      },
      {
        name: 'folder-open-project-open',
        folderNames: ['open-project-open'],
      },
      {
        name: 'folder-open-project',
        folderNames: ['open-project'],
      },
      {
        name: 'folder-open-projects-open',
        folderNames: ['open-projects-open'],
      },
      {
        name: 'folder-open-projects',
        folderNames: ['open-projects'],
      },
      {
        name: 'folder-open-protobuf-open',
        folderNames: ['open-protobuf-open'],
      },
      {
        name: 'folder-open-protobuf',
        folderNames: ['open-protobuf'],
      },
      {
        name: 'folder-open-providers-open',
        folderNames: ['open-providers-open'],
      },
      {
        name: 'folder-open-providers',
        folderNames: ['open-providers'],
      },
      {
        name: 'folder-open-python-open',
        folderNames: ['open-python-open'],
      },
      {
        name: 'folder-open-python',
        folderNames: ['open-python'],
      },
      {
        name: 'folder-open-quantum-open',
        folderNames: ['open-quantum-open'],
      },
      {
        name: 'folder-open-quantum',
        folderNames: ['open-quantum'],
      },
      {
        name: 'folder-open-quasar-open',
        folderNames: ['open-quasar-open'],
      },
      {
        name: 'folder-open-quasar',
        folderNames: ['open-quasar'],
      },
      {
        name: 'folder-open-queries-open',
        folderNames: ['open-queries-open'],
      },
      {
        name: 'folder-open-queries',
        folderNames: ['open-queries'],
      },
      {
        name: 'folder-open-queue-open',
        folderNames: ['open-queue-open'],
      },
      {
        name: 'folder-open-queue',
        folderNames: ['open-queue'],
      },
      {
        name: 'folder-open-react-open',
        folderNames: ['open-react-open'],
      },
      {
        name: 'folder-open-react',
        folderNames: ['open-react'],
      },
      {
        name: 'folder-open-recoil-open',
        folderNames: ['open-recoil-open'],
      },
      {
        name: 'folder-open-recoil',
        folderNames: ['open-recoil'],
      },
      {
        name: 'folder-open-redhat-open',
        folderNames: ['open-redhat-open'],
      },
      {
        name: 'folder-open-redhat',
        folderNames: ['open-redhat'],
      },
      {
        name: 'folder-open-redis-open',
        folderNames: ['open-redis-open'],
      },
      {
        name: 'folder-open-redis',
        folderNames: ['open-redis'],
      },
      {
        name: 'folder-open-redux-actions-open',
        folderNames: ['open-redux-actions-open'],
      },
      {
        name: 'folder-open-redux-actions',
        folderNames: ['open-redux-actions'],
      },
      {
        name: 'folder-open-redux-epics-open',
        folderNames: ['open-redux-epics-open'],
      },
      {
        name: 'folder-open-redux-epics',
        folderNames: ['open-redux-epics'],
      },
      {
        name: 'folder-open-redux-open',
        folderNames: ['open-redux-open'],
      },
      {
        name: 'folder-open-redux-reducers-open',
        folderNames: ['open-redux-reducers-open'],
      },
      {
        name: 'folder-open-redux-reducers',
        folderNames: ['open-redux-reducers'],
      },
      {
        name: 'folder-open-redux-sagas-open',
        folderNames: ['open-redux-sagas-open'],
      },
      {
        name: 'folder-open-redux-sagas',
        folderNames: ['open-redux-sagas'],
      },
      {
        name: 'folder-open-redux-stores-open',
        folderNames: ['open-redux-stores-open'],
      },
      {
        name: 'folder-open-redux-stores',
        folderNames: ['open-redux-stores'],
      },
      {
        name: 'folder-open-redux',
        folderNames: ['open-redux'],
      },
      {
        name: 'folder-open-redwood-open',
        folderNames: ['open-redwood-open'],
      },
      {
        name: 'folder-open-redwood',
        folderNames: ['open-redwood'],
      },
      {
        name: 'folder-open-relay-open',
        folderNames: ['open-relay-open'],
      },
      {
        name: 'folder-open-relay',
        folderNames: ['open-relay'],
      },
      {
        name: 'folder-open-resolver-open',
        folderNames: ['open-resolver-open'],
      },
      {
        name: 'folder-open-resolver',
        folderNames: ['open-resolver'],
      },
      {
        name: 'folder-open-resource-open',
        folderNames: ['open-resource-open'],
      },
      {
        name: 'folder-open-resource',
        folderNames: ['open-resource'],
      },
      {
        name: 'folder-open-reviews-open',
        folderNames: ['open-reviews-open'],
      },
      {
        name: 'folder-open-reviews',
        folderNames: ['open-reviews'],
      },
      {
        name: 'folder-open-root-open',
        folderNames: ['open-root-open'],
      },
      {
        name: 'folder-open-root',
        folderNames: ['open-root'],
      },
      {
        name: 'folder-open-routes-open',
        folderNames: ['open-routes-open'],
      },
      {
        name: 'folder-open-routes',
        folderNames: ['open-routes'],
      },
      {
        name: 'folder-open-ruby-open',
        folderNames: ['open-ruby-open'],
      },
      {
        name: 'folder-open-ruby',
        folderNames: ['open-ruby'],
      },
      {
        name: 'folder-open-rules-open',
        folderNames: ['open-rules-open'],
      },
      {
        name: 'folder-open-rules',
        folderNames: ['open-rules'],
      },
      {
        name: 'folder-open-rust-open',
        folderNames: ['open-rust-open'],
      },
      {
        name: 'folder-open-rust',
        folderNames: ['open-rust'],
      },
      {
        name: 'folder-open-sass-open',
        folderNames: ['open-sass-open'],
      },
      {
        name: 'folder-open-sass',
        folderNames: ['open-sass'],
      },
      {
        name: 'folder-open-scala-open',
        folderNames: ['open-scala-open'],
      },
      {
        name: 'folder-open-scala',
        folderNames: ['open-scala'],
      },
      {
        name: 'folder-open-scons-open',
        folderNames: ['open-scons-open'],
      },
      {
        name: 'folder-open-scons',
        folderNames: ['open-scons'],
      },
      {
        name: 'folder-open-scratch-open',
        folderNames: ['open-scratch-open'],
      },
      {
        name: 'folder-open-scratch',
        folderNames: ['open-scratch'],
      },
      {
        name: 'folder-open-screens-open',
        folderNames: ['open-screens-open'],
      },
      {
        name: 'folder-open-screens',
        folderNames: ['open-screens'],
      },
      {
        name: 'folder-open-scripts-open',
        folderNames: ['open-scripts-open'],
      },
      {
        name: 'folder-open-scripts',
        folderNames: ['open-scripts'],
      },
      {
        name: 'folder-open-security-open',
        folderNames: ['open-security-open'],
      },
      {
        name: 'folder-open-security',
        folderNames: ['open-security'],
      },
      {
        name: 'folder-open-seed-open',
        folderNames: ['open-seed-open'],
      },
      {
        name: 'folder-open-seed',
        folderNames: ['open-seed'],
      },
      {
        name: 'folder-open-server-open',
        folderNames: ['open-server-open'],
      },
      {
        name: 'folder-open-server',
        folderNames: ['open-server'],
      },
      {
        name: 'folder-open-serverless-open',
        folderNames: ['open-serverless-open'],
      },
      {
        name: 'folder-open-serverless',
        folderNames: ['open-serverless'],
      },
      {
        name: 'folder-open-shader-open',
        folderNames: ['open-shader-open'],
      },
      {
        name: 'folder-open-shader',
        folderNames: ['open-shader'],
      },
      {
        name: 'folder-open-shared-open',
        folderNames: ['open-shared-open'],
      },
      {
        name: 'folder-open-shared',
        folderNames: ['open-shared'],
      },
      {
        name: 'folder-open-skeletons-open',
        folderNames: ['open-skeletons-open'],
      },
      {
        name: 'folder-open-skeletons',
        folderNames: ['open-skeletons'],
      },
      {
        name: 'folder-open-sql-open',
        folderNames: ['open-sql-open'],
      },
      {
        name: 'folder-open-sql',
        folderNames: ['open-sql'],
      },
      {
        name: 'folder-open-src-open',
        folderNames: ['open-src-open'],
      },
      {
        name: 'folder-open-src',
        folderNames: ['open-src'],
      },
      {
        name: 'folder-open-sso-open',
        folderNames: ['open-sso-open'],
      },
      {
        name: 'folder-open-sso',
        folderNames: ['open-sso'],
      },
      {
        name: 'folder-open-sst-open',
        folderNames: ['open-sst-open'],
      },
      {
        name: 'folder-open-sst',
        folderNames: ['open-sst'],
      },
      {
        name: 'folder-open-stack-open',
        folderNames: ['open-stack-open'],
      },
      {
        name: 'folder-open-stack',
        folderNames: ['open-stack'],
      },
      {
        name: 'folder-open-stencil-open',
        folderNames: ['open-stencil-open'],
      },
      {
        name: 'folder-open-stencil',
        folderNames: ['open-stencil'],
      },
      {
        name: 'folder-open-storage-open',
        folderNames: ['open-storage-open'],
      },
      {
        name: 'folder-open-storage',
        folderNames: ['open-storage'],
      },
      {
        name: 'folder-open-storyblok-open',
        folderNames: ['open-storyblok-open'],
      },
      {
        name: 'folder-open-storyblok',
        folderNames: ['open-storyblok'],
      },
      {
        name: 'folder-open-storybook-open',
        folderNames: ['open-storybook-open'],
      },
      {
        name: 'folder-open-storybook',
        folderNames: ['open-storybook'],
      },
      {
        name: 'folder-open-strategy-open',
        folderNames: ['open-strategy-open'],
      },
      {
        name: 'folder-open-strategy',
        folderNames: ['open-strategy'],
      },
      {
        name: 'folder-open-styled-open',
        folderNames: ['open-styled-open'],
      },
      {
        name: 'folder-open-styled',
        folderNames: ['open-styled'],
      },
      {
        name: 'folder-open-styles-open',
        folderNames: ['open-styles-open'],
      },
      {
        name: 'folder-open-styles',
        folderNames: ['open-styles'],
      },
      {
        name: 'folder-open-stylus-open',
        folderNames: ['open-stylus-open'],
      },
      {
        name: 'folder-open-stylus',
        folderNames: ['open-stylus'],
      },
      {
        name: 'folder-open-sublime-open',
        folderNames: ['open-sublime-open'],
      },
      {
        name: 'folder-open-sublime',
        folderNames: ['open-sublime'],
      },
      {
        name: 'folder-open-supabase-open',
        folderNames: ['open-supabase-open'],
      },
      {
        name: 'folder-open-supabase',
        folderNames: ['open-supabase'],
      },
      {
        name: 'folder-open-svelte-open',
        folderNames: ['open-svelte-open'],
      },
      {
        name: 'folder-open-svelte',
        folderNames: ['open-svelte'],
      },
      {
        name: 'folder-open-svg-open',
        folderNames: ['open-svg-open'],
      },
      {
        name: 'folder-open-svg',
        folderNames: ['open-svg'],
      },
      {
        name: 'folder-open-svn-open',
        folderNames: ['open-svn-open'],
      },
      {
        name: 'folder-open-svn',
        folderNames: ['open-svn'],
      },
      {
        name: 'folder-open-swagger-open',
        folderNames: ['open-swagger-open'],
      },
      {
        name: 'folder-open-swagger',
        folderNames: ['open-swagger'],
      },
      {
        name: 'folder-open-sync-open',
        folderNames: ['open-sync-open'],
      },
      {
        name: 'folder-open-sync',
        folderNames: ['open-sync'],
      },
      {
        name: 'folder-open-syntax-open',
        folderNames: ['open-syntax-open'],
      },
      {
        name: 'folder-open-syntax',
        folderNames: ['open-syntax'],
      },
      {
        name: 'folder-open-target-open',
        folderNames: ['open-target-open'],
      },
      {
        name: 'folder-open-target',
        folderNames: ['open-target'],
      },
      {
        name: 'folder-open-taskfile-open',
        folderNames: ['open-taskfile-open'],
      },
      {
        name: 'folder-open-taskfile',
        folderNames: ['open-taskfile'],
      },
      {
        name: 'folder-open-tasks-open',
        folderNames: ['open-tasks-open'],
      },
      {
        name: 'folder-open-tasks',
        folderNames: ['open-tasks'],
      },
      {
        name: 'folder-open-tauri-open',
        folderNames: ['open-tauri-open'],
      },
      {
        name: 'folder-open-tauri',
        folderNames: ['open-tauri'],
      },
      {
        name: 'folder-open-tech-open',
        folderNames: ['open-tech-open'],
      },
      {
        name: 'folder-open-tech',
        folderNames: ['open-tech'],
      },
      {
        name: 'folder-open-temp-open',
        folderNames: ['open-temp-open'],
      },
      {
        name: 'folder-open-temp',
        folderNames: ['open-temp'],
      },
      {
        name: 'folder-open-terraform-open',
        folderNames: ['open-terraform-open'],
      },
      {
        name: 'folder-open-terraform',
        folderNames: ['open-terraform'],
      },
      {
        name: 'folder-open-tests-open',
        folderNames: ['open-tests-open'],
      },
      {
        name: 'folder-open-tests',
        folderNames: ['open-tests'],
      },
      {
        name: 'folder-open-textmate-open',
        folderNames: ['open-textmate-open'],
      },
      {
        name: 'folder-open-textmate',
        folderNames: ['open-textmate'],
      },
      {
        name: 'folder-open-themes-open',
        folderNames: ['open-themes-open'],
      },
      {
        name: 'folder-open-themes',
        folderNames: ['open-themes'],
      },
      {
        name: 'folder-open-tools-open',
        folderNames: ['open-tools-open'],
      },
      {
        name: 'folder-open-tools',
        folderNames: ['open-tools'],
      },
      {
        name: 'folder-open-totvs-open',
        folderNames: ['open-totvs-open'],
      },
      {
        name: 'folder-open-totvs',
        folderNames: ['open-totvs'],
      },
      {
        name: 'folder-open-trait-open',
        folderNames: ['open-trait-open'],
      },
      {
        name: 'folder-open-trait',
        folderNames: ['open-trait'],
      },
      {
        name: 'folder-open-ts-open',
        folderNames: ['open-ts-open'],
      },
      {
        name: 'folder-open-ts',
        folderNames: ['open-ts'],
      },
      {
        name: 'folder-open-turborepo-open',
        folderNames: ['open-turborepo-open'],
      },
      {
        name: 'folder-open-turborepo',
        folderNames: ['open-turborepo'],
      },
      {
        name: 'folder-open-ui-open',
        folderNames: ['open-ui-open'],
      },
      {
        name: 'folder-open-ui',
        folderNames: ['open-ui'],
      },
      {
        name: 'folder-open-unity-open',
        folderNames: ['open-unity-open'],
      },
      {
        name: 'folder-open-unity',
        folderNames: ['open-unity'],
      },
      {
        name: 'folder-open-upload-open',
        folderNames: ['open-upload-open'],
      },
      {
        name: 'folder-open-upload',
        folderNames: ['open-upload'],
      },
      {
        name: 'folder-open-users-open',
        folderNames: ['open-users-open'],
      },
      {
        name: 'folder-open-users',
        folderNames: ['open-users'],
      },
      {
        name: 'folder-open-vagrant-open',
        folderNames: ['open-vagrant-open'],
      },
      {
        name: 'folder-open-vagrant',
        folderNames: ['open-vagrant'],
      },
      {
        name: 'folder-open-venv-open',
        folderNames: ['open-venv-open'],
      },
      {
        name: 'folder-open-venv',
        folderNames: ['open-venv'],
      },
      {
        name: 'folder-open-vercel-open',
        folderNames: ['open-vercel-open'],
      },
      {
        name: 'folder-open-vercel',
        folderNames: ['open-vercel'],
      },
      {
        name: 'folder-open-verdaccio-open',
        folderNames: ['open-verdaccio-open'],
      },
      {
        name: 'folder-open-verdaccio',
        folderNames: ['open-verdaccio'],
      },
      {
        name: 'folder-open-video-open',
        folderNames: ['open-video-open'],
      },
      {
        name: 'folder-open-video',
        folderNames: ['open-video'],
      },
      {
        name: 'folder-open-viewmodel-open',
        folderNames: ['open-viewmodel-open'],
      },
      {
        name: 'folder-open-viewmodel',
        folderNames: ['open-viewmodel'],
      },
      {
        name: 'folder-open-views-open',
        folderNames: ['open-views-open'],
      },
      {
        name: 'folder-open-views',
        folderNames: ['open-views'],
      },
      {
        name: 'folder-open-vim-open',
        folderNames: ['open-vim-open'],
      },
      {
        name: 'folder-open-vim',
        folderNames: ['open-vim'],
      },
      {
        name: 'folder-open-vitepress-open',
        folderNames: ['open-vitepress-open'],
      },
      {
        name: 'folder-open-vitepress',
        folderNames: ['open-vitepress'],
      },
      {
        name: 'folder-open-vm-open',
        folderNames: ['open-vm-open'],
      },
      {
        name: 'folder-open-vm',
        folderNames: ['open-vm'],
      },
      {
        name: 'folder-open-vs-open',
        folderNames: ['open-vs-open'],
      },
      {
        name: 'folder-open-vs',
        folderNames: ['open-vs'],
      },
      {
        name: 'folder-open-vscode-open',
        folderNames: ['open-vscode-open'],
      },
      {
        name: 'folder-open-vscode',
        folderNames: ['open-vscode'],
      },
      {
        name: 'folder-open-vue-open',
        folderNames: ['open-vue-open'],
      },
      {
        name: 'folder-open-vue',
        folderNames: ['open-vue'],
      },
      {
        name: 'folder-open-vuepress-open',
        folderNames: ['open-vuepress-open'],
      },
      {
        name: 'folder-open-vuepress',
        folderNames: ['open-vuepress'],
      },
      {
        name: 'folder-open-vuex-open',
        folderNames: ['open-vuex-open'],
      },
      {
        name: 'folder-open-vuex',
        folderNames: ['open-vuex'],
      },
      {
        name: 'folder-open-web-open',
        folderNames: ['open-web-open'],
      },
      {
        name: 'folder-open-web',
        folderNames: ['open-web'],
      },
      {
        name: 'folder-open-webcomponents-open',
        folderNames: ['open-webcomponents-open'],
      },
      {
        name: 'folder-open-webcomponents',
        folderNames: ['open-webcomponents'],
      },
      {
        name: 'folder-open-webpack-open',
        folderNames: ['open-webpack-open'],
      },
      {
        name: 'folder-open-webpack',
        folderNames: ['open-webpack'],
      },
      {
        name: 'folder-open-windows-open',
        folderNames: ['open-windows-open'],
      },
      {
        name: 'folder-open-windows',
        folderNames: ['open-windows'],
      },
      {
        name: 'folder-open-wine-open',
        folderNames: ['open-wine-open'],
      },
      {
        name: 'folder-open-wine',
        folderNames: ['open-wine'],
      },
      {
        name: 'folder-open-woocommerce-open',
        folderNames: ['open-woocommerce-open'],
      },
      {
        name: 'folder-open-woocommerce',
        folderNames: ['open-woocommerce'],
      },
      {
        name: 'folder-open-woodpecker-open',
        folderNames: ['open-woodpecker-open'],
      },
      {
        name: 'folder-open-woodpecker',
        folderNames: ['open-woodpecker'],
      },
      {
        name: 'folder-open-wordpress-open',
        folderNames: ['open-wordpress-open'],
      },
      {
        name: 'folder-open-wordpress',
        folderNames: ['open-wordpress'],
      },
      {
        name: 'folder-open-xstate-open',
        folderNames: ['open-xstate-open'],
      },
      {
        name: 'folder-open-xstate',
        folderNames: ['open-xstate'],
      },
      {
        name: 'folder-open-yarn-open',
        folderNames: ['open-yarn-open'],
      },
      {
        name: 'folder-open-yarn',
        folderNames: ['open-yarn'],
      },
      {
        name: 'folder-open',
        folderNames: ['open'],
      },
      {
        name: 'folder-opened-open',
        folderNames: ['opened-open'],
      },
      {
        name: 'folder-opened',
        folderNames: ['opened'],
      },
      {
        name: 'folder-openshift-open',
        folderNames: ['openshift-open'],
      },
      {
        name: 'folder-openshift',
        folderNames: ['openshift'],
      },
      {
        name: 'folder-orange-activities-open',
        folderNames: ['orange-activities-open'],
      },
      {
        name: 'folder-orange-activities',
        folderNames: ['orange-activities'],
      },
      {
        name: 'folder-orange-android-open',
        folderNames: ['orange-android-open'],
      },
      {
        name: 'folder-orange-android',
        folderNames: ['orange-android'],
      },
      {
        name: 'folder-orange-apple-open',
        folderNames: ['orange-apple-open'],
      },
      {
        name: 'folder-orange-apple',
        folderNames: ['orange-apple'],
      },
      {
        name: 'folder-orange-applications-open',
        folderNames: ['orange-applications-open'],
      },
      {
        name: 'folder-orange-applications',
        folderNames: ['orange-applications'],
      },
      {
        name: 'folder-orange-arduino-open',
        folderNames: ['orange-arduino-open'],
      },
      {
        name: 'folder-orange-arduino',
        folderNames: ['orange-arduino'],
      },
      {
        name: 'folder-orange-backup-open',
        folderNames: ['orange-backup-open'],
      },
      {
        name: 'folder-orange-backup',
        folderNames: ['orange-backup'],
      },
      {
        name: 'folder-orange-books-open',
        folderNames: ['orange-books-open'],
      },
      {
        name: 'folder-orange-books',
        folderNames: ['orange-books'],
      },
      {
        name: 'folder-orange-cd-open',
        folderNames: ['orange-cd-open'],
      },
      {
        name: 'folder-orange-cd',
        folderNames: ['orange-cd'],
      },
      {
        name: 'folder-orange-code-open',
        folderNames: ['orange-code-open'],
      },
      {
        name: 'folder-orange-code',
        folderNames: ['orange-code'],
      },
      {
        name: 'folder-orange-desktop-open',
        folderNames: ['orange-desktop-open'],
      },
      {
        name: 'folder-orange-desktop',
        folderNames: ['orange-desktop'],
      },
      {
        name: 'folder-orange-development-open',
        folderNames: ['orange-development-open'],
      },
      {
        name: 'folder-orange-development',
        folderNames: ['orange-development'],
      },
      {
        name: 'folder-orange-docker-open',
        folderNames: ['orange-docker-open'],
      },
      {
        name: 'folder-orange-docker',
        folderNames: ['orange-docker'],
      },
      {
        name: 'folder-orange-documents-open-open',
        folderNames: ['orange-documents-open-open'],
      },
      {
        name: 'folder-orange-documents-open',
        folderNames: ['orange-documents-open'],
      },
      {
        name: 'folder-orange-documents',
        folderNames: ['orange-documents'],
      },
      {
        name: 'folder-orange-download-open-open',
        folderNames: ['orange-download-open-open'],
      },
      {
        name: 'folder-orange-download-open',
        folderNames: ['orange-download-open'],
      },
      {
        name: 'folder-orange-download',
        folderNames: ['orange-download'],
      },
      {
        name: 'folder-orange-downloads-open',
        folderNames: ['orange-downloads-open'],
      },
      {
        name: 'folder-orange-downloads',
        folderNames: ['orange-downloads'],
      },
      {
        name: 'folder-orange-drag-accept-open',
        folderNames: ['orange-drag-accept-open'],
      },
      {
        name: 'folder-orange-drag-accept',
        folderNames: ['orange-drag-accept'],
      },
      {
        name: 'folder-orange-dropbox-open',
        folderNames: ['orange-dropbox-open'],
      },
      {
        name: 'folder-orange-dropbox',
        folderNames: ['orange-dropbox'],
      },
      {
        name: 'folder-orange-favorites-open',
        folderNames: ['orange-favorites-open'],
      },
      {
        name: 'folder-orange-favorites',
        folderNames: ['orange-favorites'],
      },
      {
        name: 'folder-orange-games-open',
        folderNames: ['orange-games-open'],
      },
      {
        name: 'folder-orange-games',
        folderNames: ['orange-games'],
      },
      {
        name: 'folder-orange-git-open',
        folderNames: ['orange-git-open'],
      },
      {
        name: 'folder-orange-git',
        folderNames: ['orange-git'],
      },
      {
        name: 'folder-orange-github-open',
        folderNames: ['orange-github-open'],
      },
      {
        name: 'folder-orange-github',
        folderNames: ['orange-github'],
      },
      {
        name: 'folder-orange-gitlab-open',
        folderNames: ['orange-gitlab-open'],
      },
      {
        name: 'folder-orange-gitlab',
        folderNames: ['orange-gitlab'],
      },
      {
        name: 'folder-orange-gnome-open',
        folderNames: ['orange-gnome-open'],
      },
      {
        name: 'folder-orange-gnome',
        folderNames: ['orange-gnome'],
      },
      {
        name: 'folder-orange-google-drive-open',
        folderNames: ['orange-google-drive-open'],
      },
      {
        name: 'folder-orange-google-drive',
        folderNames: ['orange-google-drive'],
      },
      {
        name: 'folder-orange-image-people-open',
        folderNames: ['orange-image-people-open'],
      },
      {
        name: 'folder-orange-image-people',
        folderNames: ['orange-image-people'],
      },
      {
        name: 'folder-orange-important-open',
        folderNames: ['orange-important-open'],
      },
      {
        name: 'folder-orange-important',
        folderNames: ['orange-important'],
      },
      {
        name: 'folder-orange-java-open',
        folderNames: ['orange-java-open'],
      },
      {
        name: 'folder-orange-java',
        folderNames: ['orange-java'],
      },
      {
        name: 'folder-orange-kde-open',
        folderNames: ['orange-kde-open'],
      },
      {
        name: 'folder-orange-kde',
        folderNames: ['orange-kde'],
      },
      {
        name: 'folder-orange-linux-open',
        folderNames: ['orange-linux-open'],
      },
      {
        name: 'folder-orange-linux',
        folderNames: ['orange-linux'],
      },
      {
        name: 'folder-orange-locked-open',
        folderNames: ['orange-locked-open'],
      },
      {
        name: 'folder-orange-locked',
        folderNames: ['orange-locked'],
      },
      {
        name: 'folder-orange-mail-cloud-open',
        folderNames: ['orange-mail-cloud-open'],
      },
      {
        name: 'folder-orange-mail-cloud',
        folderNames: ['orange-mail-cloud'],
      },
      {
        name: 'folder-orange-mail-open',
        folderNames: ['orange-mail-open'],
      },
      {
        name: 'folder-orange-mail',
        folderNames: ['orange-mail'],
      },
      {
        name: 'folder-orange-mega-open',
        folderNames: ['orange-mega-open'],
      },
      {
        name: 'folder-orange-mega',
        folderNames: ['orange-mega'],
      },
      {
        name: 'folder-orange-meocloud-open',
        folderNames: ['orange-meocloud-open'],
      },
      {
        name: 'folder-orange-meocloud',
        folderNames: ['orange-meocloud'],
      },
      {
        name: 'folder-orange-music-open-open',
        folderNames: ['orange-music-open-open'],
      },
      {
        name: 'folder-orange-music-open',
        folderNames: ['orange-music-open'],
      },
      {
        name: 'folder-orange-music',
        folderNames: ['orange-music'],
      },
      {
        name: 'folder-orange-network-open',
        folderNames: ['orange-network-open'],
      },
      {
        name: 'folder-orange-network',
        folderNames: ['orange-network'],
      },
      {
        name: 'folder-orange-nextcloud-open',
        folderNames: ['orange-nextcloud-open'],
      },
      {
        name: 'folder-orange-nextcloud',
        folderNames: ['orange-nextcloud'],
      },
      {
        name: 'folder-orange-notes-open',
        folderNames: ['orange-notes-open'],
      },
      {
        name: 'folder-orange-notes',
        folderNames: ['orange-notes'],
      },
      {
        name: 'folder-orange-obsidian-open',
        folderNames: ['orange-obsidian-open'],
      },
      {
        name: 'folder-orange-obsidian',
        folderNames: ['orange-obsidian'],
      },
      {
        name: 'folder-orange-onedrive-open',
        folderNames: ['orange-onedrive-open'],
      },
      {
        name: 'folder-orange-onedrive',
        folderNames: ['orange-onedrive'],
      },
      {
        name: 'folder-orange-open-open',
        folderNames: ['orange-open-open'],
      },
      {
        name: 'folder-orange-open',
        folderNames: ['orange-open'],
      },
      {
        name: 'folder-orange-owncloud-open',
        folderNames: ['orange-owncloud-open'],
      },
      {
        name: 'folder-orange-owncloud',
        folderNames: ['orange-owncloud'],
      },
      {
        name: 'folder-orange-pcloud-open',
        folderNames: ['orange-pcloud-open'],
      },
      {
        name: 'folder-orange-pcloud',
        folderNames: ['orange-pcloud'],
      },
      {
        name: 'folder-orange-photo-open',
        folderNames: ['orange-photo-open'],
      },
      {
        name: 'folder-orange-photo',
        folderNames: ['orange-photo'],
      },
      {
        name: 'folder-orange-pictures-open-open',
        folderNames: ['orange-pictures-open-open'],
      },
      {
        name: 'folder-orange-pictures-open',
        folderNames: ['orange-pictures-open'],
      },
      {
        name: 'folder-orange-pictures',
        folderNames: ['orange-pictures'],
      },
      {
        name: 'folder-orange-print-open',
        folderNames: ['orange-print-open'],
      },
      {
        name: 'folder-orange-print',
        folderNames: ['orange-print'],
      },
      {
        name: 'folder-orange-private-open',
        folderNames: ['orange-private-open'],
      },
      {
        name: 'folder-orange-private',
        folderNames: ['orange-private'],
      },
      {
        name: 'folder-orange-projects-open',
        folderNames: ['orange-projects-open'],
      },
      {
        name: 'folder-orange-projects',
        folderNames: ['orange-projects'],
      },
      {
        name: 'folder-orange-public-open',
        folderNames: ['orange-public-open'],
      },
      {
        name: 'folder-orange-public',
        folderNames: ['orange-public'],
      },
      {
        name: 'folder-orange-publicshare-open-open',
        folderNames: ['orange-publicshare-open-open'],
      },
      {
        name: 'folder-orange-publicshare-open',
        folderNames: ['orange-publicshare-open'],
      },
      {
        name: 'folder-orange-remote-open-open',
        folderNames: ['orange-remote-open-open'],
      },
      {
        name: 'folder-orange-remote-open',
        folderNames: ['orange-remote-open'],
      },
      {
        name: 'folder-orange-remote',
        folderNames: ['orange-remote'],
      },
      {
        name: 'folder-orange-script-open',
        folderNames: ['orange-script-open'],
      },
      {
        name: 'folder-orange-script',
        folderNames: ['orange-script'],
      },
      {
        name: 'folder-orange-snap-open',
        folderNames: ['orange-snap-open'],
      },
      {
        name: 'folder-orange-snap',
        folderNames: ['orange-snap'],
      },
      {
        name: 'folder-orange-steam-open',
        folderNames: ['orange-steam-open'],
      },
      {
        name: 'folder-orange-steam',
        folderNames: ['orange-steam'],
      },
      {
        name: 'folder-orange-sync-open',
        folderNames: ['orange-sync-open'],
      },
      {
        name: 'folder-orange-sync',
        folderNames: ['orange-sync'],
      },
      {
        name: 'folder-orange-syncthing-open',
        folderNames: ['orange-syncthing-open'],
      },
      {
        name: 'folder-orange-syncthing',
        folderNames: ['orange-syncthing'],
      },
      {
        name: 'folder-orange-systemd-open',
        folderNames: ['orange-systemd-open'],
      },
      {
        name: 'folder-orange-systemd',
        folderNames: ['orange-systemd'],
      },
      {
        name: 'folder-orange-tar-open',
        folderNames: ['orange-tar-open'],
      },
      {
        name: 'folder-orange-tar',
        folderNames: ['orange-tar'],
      },
      {
        name: 'folder-orange-templates-open-open',
        folderNames: ['orange-templates-open-open'],
      },
      {
        name: 'folder-orange-templates-open',
        folderNames: ['orange-templates-open'],
      },
      {
        name: 'folder-orange-templates',
        folderNames: ['orange-templates'],
      },
      {
        name: 'folder-orange-torrent-open',
        folderNames: ['orange-torrent-open'],
      },
      {
        name: 'folder-orange-torrent',
        folderNames: ['orange-torrent'],
      },
      {
        name: 'folder-orange-unlocked-open',
        folderNames: ['orange-unlocked-open'],
      },
      {
        name: 'folder-orange-unlocked',
        folderNames: ['orange-unlocked'],
      },
      {
        name: 'folder-orange-vbox-open',
        folderNames: ['orange-vbox-open'],
      },
      {
        name: 'folder-orange-vbox',
        folderNames: ['orange-vbox'],
      },
      {
        name: 'folder-orange-video-open',
        folderNames: ['orange-video-open'],
      },
      {
        name: 'folder-orange-video',
        folderNames: ['orange-video'],
      },
      {
        name: 'folder-orange-videos-open-open',
        folderNames: ['orange-videos-open-open'],
      },
      {
        name: 'folder-orange-videos-open',
        folderNames: ['orange-videos-open'],
      },
      {
        name: 'folder-orange-videos',
        folderNames: ['orange-videos'],
      },
      {
        name: 'folder-orange-visiting-open',
        folderNames: ['orange-visiting-open'],
      },
      {
        name: 'folder-orange-visiting',
        folderNames: ['orange-visiting'],
      },
      {
        name: 'folder-orange-wifi-open',
        folderNames: ['orange-wifi-open'],
      },
      {
        name: 'folder-orange-wifi',
        folderNames: ['orange-wifi'],
      },
      {
        name: 'folder-orange-wine-open',
        folderNames: ['orange-wine-open'],
      },
      {
        name: 'folder-orange-wine',
        folderNames: ['orange-wine'],
      },
      {
        name: 'folder-orange-yandex-disk-open',
        folderNames: ['orange-yandex-disk-open'],
      },
      {
        name: 'folder-orange-yandex-disk',
        folderNames: ['orange-yandex-disk'],
      },
      {
        name: 'folder-orange',
        folderNames: ['orange'],
      },
      {
        name: 'folder-orders-open',
        folderNames: ['orders-open'],
      },
      {
        name: 'folder-orders',
        folderNames: ['orders'],
      },
      {
        name: 'folder-organism-open-open',
        folderNames: ['organism-open-open'],
      },
      {
        name: 'folder-organism-open',
        folderNames: ['organism-open'],
      },
      {
        name: 'folder-other-open-open',
        folderNames: ['other-open-open'],
      },
      {
        name: 'folder-other-open',
        folderNames: ['other-open'],
      },
      {
        name: 'folder-owncloud-open',
        folderNames: ['owncloud-open'],
      },
      {
        name: 'folder-owncloud',
        folderNames: ['owncloud'],
      },
      {
        name: 'folder-packages-open-open',
        folderNames: ['packages-open-open'],
      },
      {
        name: 'folder-packages-open',
        folderNames: ['packages-open'],
      },
      {
        name: 'folder-paint-open',
        folderNames: ['paint-open'],
      },
      {
        name: 'folder-paint',
        folderNames: ['paint'],
      },
      {
        name: 'folder-palebrown-activities-open',
        folderNames: ['palebrown-activities-open'],
      },
      {
        name: 'folder-palebrown-activities',
        folderNames: ['palebrown-activities'],
      },
      {
        name: 'folder-palebrown-android-open',
        folderNames: ['palebrown-android-open'],
      },
      {
        name: 'folder-palebrown-android',
        folderNames: ['palebrown-android'],
      },
      {
        name: 'folder-palebrown-apple-open',
        folderNames: ['palebrown-apple-open'],
      },
      {
        name: 'folder-palebrown-apple',
        folderNames: ['palebrown-apple'],
      },
      {
        name: 'folder-palebrown-applications-open',
        folderNames: ['palebrown-applications-open'],
      },
      {
        name: 'folder-palebrown-applications',
        folderNames: ['palebrown-applications'],
      },
      {
        name: 'folder-palebrown-arduino-open',
        folderNames: ['palebrown-arduino-open'],
      },
      {
        name: 'folder-palebrown-arduino',
        folderNames: ['palebrown-arduino'],
      },
      {
        name: 'folder-palebrown-backup-open',
        folderNames: ['palebrown-backup-open'],
      },
      {
        name: 'folder-palebrown-backup',
        folderNames: ['palebrown-backup'],
      },
      {
        name: 'folder-palebrown-books-open',
        folderNames: ['palebrown-books-open'],
      },
      {
        name: 'folder-palebrown-books',
        folderNames: ['palebrown-books'],
      },
      {
        name: 'folder-palebrown-cd-open',
        folderNames: ['palebrown-cd-open'],
      },
      {
        name: 'folder-palebrown-cd',
        folderNames: ['palebrown-cd'],
      },
      {
        name: 'folder-palebrown-code-open',
        folderNames: ['palebrown-code-open'],
      },
      {
        name: 'folder-palebrown-code',
        folderNames: ['palebrown-code'],
      },
      {
        name: 'folder-palebrown-desktop-open',
        folderNames: ['palebrown-desktop-open'],
      },
      {
        name: 'folder-palebrown-desktop',
        folderNames: ['palebrown-desktop'],
      },
      {
        name: 'folder-palebrown-development-open',
        folderNames: ['palebrown-development-open'],
      },
      {
        name: 'folder-palebrown-development',
        folderNames: ['palebrown-development'],
      },
      {
        name: 'folder-palebrown-docker-open',
        folderNames: ['palebrown-docker-open'],
      },
      {
        name: 'folder-palebrown-docker',
        folderNames: ['palebrown-docker'],
      },
      {
        name: 'folder-palebrown-documents-open-open',
        folderNames: ['palebrown-documents-open-open'],
      },
      {
        name: 'folder-palebrown-documents-open',
        folderNames: ['palebrown-documents-open'],
      },
      {
        name: 'folder-palebrown-documents',
        folderNames: ['palebrown-documents'],
      },
      {
        name: 'folder-palebrown-download-open-open',
        folderNames: ['palebrown-download-open-open'],
      },
      {
        name: 'folder-palebrown-download-open',
        folderNames: ['palebrown-download-open'],
      },
      {
        name: 'folder-palebrown-download',
        folderNames: ['palebrown-download'],
      },
      {
        name: 'folder-palebrown-downloads-open',
        folderNames: ['palebrown-downloads-open'],
      },
      {
        name: 'folder-palebrown-downloads',
        folderNames: ['palebrown-downloads'],
      },
      {
        name: 'folder-palebrown-drag-accept-open',
        folderNames: ['palebrown-drag-accept-open'],
      },
      {
        name: 'folder-palebrown-drag-accept',
        folderNames: ['palebrown-drag-accept'],
      },
      {
        name: 'folder-palebrown-dropbox-open',
        folderNames: ['palebrown-dropbox-open'],
      },
      {
        name: 'folder-palebrown-dropbox',
        folderNames: ['palebrown-dropbox'],
      },
      {
        name: 'folder-palebrown-favorites-open',
        folderNames: ['palebrown-favorites-open'],
      },
      {
        name: 'folder-palebrown-favorites',
        folderNames: ['palebrown-favorites'],
      },
      {
        name: 'folder-palebrown-games-open',
        folderNames: ['palebrown-games-open'],
      },
      {
        name: 'folder-palebrown-games',
        folderNames: ['palebrown-games'],
      },
      {
        name: 'folder-palebrown-git-open',
        folderNames: ['palebrown-git-open'],
      },
      {
        name: 'folder-palebrown-git',
        folderNames: ['palebrown-git'],
      },
      {
        name: 'folder-palebrown-github-open',
        folderNames: ['palebrown-github-open'],
      },
      {
        name: 'folder-palebrown-github',
        folderNames: ['palebrown-github'],
      },
      {
        name: 'folder-palebrown-gitlab-open',
        folderNames: ['palebrown-gitlab-open'],
      },
      {
        name: 'folder-palebrown-gitlab',
        folderNames: ['palebrown-gitlab'],
      },
      {
        name: 'folder-palebrown-gnome-open',
        folderNames: ['palebrown-gnome-open'],
      },
      {
        name: 'folder-palebrown-gnome',
        folderNames: ['palebrown-gnome'],
      },
      {
        name: 'folder-palebrown-google-drive-open',
        folderNames: ['palebrown-google-drive-open'],
      },
      {
        name: 'folder-palebrown-google-drive',
        folderNames: ['palebrown-google-drive'],
      },
      {
        name: 'folder-palebrown-image-people-open',
        folderNames: ['palebrown-image-people-open'],
      },
      {
        name: 'folder-palebrown-image-people',
        folderNames: ['palebrown-image-people'],
      },
      {
        name: 'folder-palebrown-important-open',
        folderNames: ['palebrown-important-open'],
      },
      {
        name: 'folder-palebrown-important',
        folderNames: ['palebrown-important'],
      },
      {
        name: 'folder-palebrown-java-open',
        folderNames: ['palebrown-java-open'],
      },
      {
        name: 'folder-palebrown-java',
        folderNames: ['palebrown-java'],
      },
      {
        name: 'folder-palebrown-kde-open',
        folderNames: ['palebrown-kde-open'],
      },
      {
        name: 'folder-palebrown-kde',
        folderNames: ['palebrown-kde'],
      },
      {
        name: 'folder-palebrown-linux-open',
        folderNames: ['palebrown-linux-open'],
      },
      {
        name: 'folder-palebrown-linux',
        folderNames: ['palebrown-linux'],
      },
      {
        name: 'folder-palebrown-locked-open',
        folderNames: ['palebrown-locked-open'],
      },
      {
        name: 'folder-palebrown-locked',
        folderNames: ['palebrown-locked'],
      },
      {
        name: 'folder-palebrown-mail-cloud-open',
        folderNames: ['palebrown-mail-cloud-open'],
      },
      {
        name: 'folder-palebrown-mail-cloud',
        folderNames: ['palebrown-mail-cloud'],
      },
      {
        name: 'folder-palebrown-mail-open',
        folderNames: ['palebrown-mail-open'],
      },
      {
        name: 'folder-palebrown-mail',
        folderNames: ['palebrown-mail'],
      },
      {
        name: 'folder-palebrown-mega-open',
        folderNames: ['palebrown-mega-open'],
      },
      {
        name: 'folder-palebrown-mega',
        folderNames: ['palebrown-mega'],
      },
      {
        name: 'folder-palebrown-meocloud-open',
        folderNames: ['palebrown-meocloud-open'],
      },
      {
        name: 'folder-palebrown-meocloud',
        folderNames: ['palebrown-meocloud'],
      },
      {
        name: 'folder-palebrown-music-open-open',
        folderNames: ['palebrown-music-open-open'],
      },
      {
        name: 'folder-palebrown-music-open',
        folderNames: ['palebrown-music-open'],
      },
      {
        name: 'folder-palebrown-music',
        folderNames: ['palebrown-music'],
      },
      {
        name: 'folder-palebrown-network-open',
        folderNames: ['palebrown-network-open'],
      },
      {
        name: 'folder-palebrown-network',
        folderNames: ['palebrown-network'],
      },
      {
        name: 'folder-palebrown-nextcloud-open',
        folderNames: ['palebrown-nextcloud-open'],
      },
      {
        name: 'folder-palebrown-nextcloud',
        folderNames: ['palebrown-nextcloud'],
      },
      {
        name: 'folder-palebrown-notes-open',
        folderNames: ['palebrown-notes-open'],
      },
      {
        name: 'folder-palebrown-notes',
        folderNames: ['palebrown-notes'],
      },
      {
        name: 'folder-palebrown-obsidian-open',
        folderNames: ['palebrown-obsidian-open'],
      },
      {
        name: 'folder-palebrown-obsidian',
        folderNames: ['palebrown-obsidian'],
      },
      {
        name: 'folder-palebrown-onedrive-open',
        folderNames: ['palebrown-onedrive-open'],
      },
      {
        name: 'folder-palebrown-onedrive',
        folderNames: ['palebrown-onedrive'],
      },
      {
        name: 'folder-palebrown-open-open',
        folderNames: ['palebrown-open-open'],
      },
      {
        name: 'folder-palebrown-open',
        folderNames: ['palebrown-open'],
      },
      {
        name: 'folder-palebrown-owncloud-open',
        folderNames: ['palebrown-owncloud-open'],
      },
      {
        name: 'folder-palebrown-owncloud',
        folderNames: ['palebrown-owncloud'],
      },
      {
        name: 'folder-palebrown-pcloud-open',
        folderNames: ['palebrown-pcloud-open'],
      },
      {
        name: 'folder-palebrown-pcloud',
        folderNames: ['palebrown-pcloud'],
      },
      {
        name: 'folder-palebrown-photo-open',
        folderNames: ['palebrown-photo-open'],
      },
      {
        name: 'folder-palebrown-photo',
        folderNames: ['palebrown-photo'],
      },
      {
        name: 'folder-palebrown-pictures-open-open',
        folderNames: ['palebrown-pictures-open-open'],
      },
      {
        name: 'folder-palebrown-pictures-open',
        folderNames: ['palebrown-pictures-open'],
      },
      {
        name: 'folder-palebrown-pictures',
        folderNames: ['palebrown-pictures'],
      },
      {
        name: 'folder-palebrown-print-open',
        folderNames: ['palebrown-print-open'],
      },
      {
        name: 'folder-palebrown-print',
        folderNames: ['palebrown-print'],
      },
      {
        name: 'folder-palebrown-private-open',
        folderNames: ['palebrown-private-open'],
      },
      {
        name: 'folder-palebrown-private',
        folderNames: ['palebrown-private'],
      },
      {
        name: 'folder-palebrown-projects-open',
        folderNames: ['palebrown-projects-open'],
      },
      {
        name: 'folder-palebrown-projects',
        folderNames: ['palebrown-projects'],
      },
      {
        name: 'folder-palebrown-public-open',
        folderNames: ['palebrown-public-open'],
      },
      {
        name: 'folder-palebrown-public',
        folderNames: ['palebrown-public'],
      },
      {
        name: 'folder-palebrown-publicshare-open-open',
        folderNames: ['palebrown-publicshare-open-open'],
      },
      {
        name: 'folder-palebrown-publicshare-open',
        folderNames: ['palebrown-publicshare-open'],
      },
      {
        name: 'folder-palebrown-remote-open-open',
        folderNames: ['palebrown-remote-open-open'],
      },
      {
        name: 'folder-palebrown-remote-open',
        folderNames: ['palebrown-remote-open'],
      },
      {
        name: 'folder-palebrown-remote',
        folderNames: ['palebrown-remote'],
      },
      {
        name: 'folder-palebrown-script-open',
        folderNames: ['palebrown-script-open'],
      },
      {
        name: 'folder-palebrown-script',
        folderNames: ['palebrown-script'],
      },
      {
        name: 'folder-palebrown-snap-open',
        folderNames: ['palebrown-snap-open'],
      },
      {
        name: 'folder-palebrown-snap',
        folderNames: ['palebrown-snap'],
      },
      {
        name: 'folder-palebrown-steam-open',
        folderNames: ['palebrown-steam-open'],
      },
      {
        name: 'folder-palebrown-steam',
        folderNames: ['palebrown-steam'],
      },
      {
        name: 'folder-palebrown-sync-open',
        folderNames: ['palebrown-sync-open'],
      },
      {
        name: 'folder-palebrown-sync',
        folderNames: ['palebrown-sync'],
      },
      {
        name: 'folder-palebrown-syncthing-open',
        folderNames: ['palebrown-syncthing-open'],
      },
      {
        name: 'folder-palebrown-syncthing',
        folderNames: ['palebrown-syncthing'],
      },
      {
        name: 'folder-palebrown-systemd-open',
        folderNames: ['palebrown-systemd-open'],
      },
      {
        name: 'folder-palebrown-systemd',
        folderNames: ['palebrown-systemd'],
      },
      {
        name: 'folder-palebrown-tar-open',
        folderNames: ['palebrown-tar-open'],
      },
      {
        name: 'folder-palebrown-tar',
        folderNames: ['palebrown-tar'],
      },
      {
        name: 'folder-palebrown-templates-open-open',
        folderNames: ['palebrown-templates-open-open'],
      },
      {
        name: 'folder-palebrown-templates-open',
        folderNames: ['palebrown-templates-open'],
      },
      {
        name: 'folder-palebrown-templates',
        folderNames: ['palebrown-templates'],
      },
      {
        name: 'folder-palebrown-torrent-open',
        folderNames: ['palebrown-torrent-open'],
      },
      {
        name: 'folder-palebrown-torrent',
        folderNames: ['palebrown-torrent'],
      },
      {
        name: 'folder-palebrown-unlocked-open',
        folderNames: ['palebrown-unlocked-open'],
      },
      {
        name: 'folder-palebrown-unlocked',
        folderNames: ['palebrown-unlocked'],
      },
      {
        name: 'folder-palebrown-vbox-open',
        folderNames: ['palebrown-vbox-open'],
      },
      {
        name: 'folder-palebrown-vbox',
        folderNames: ['palebrown-vbox'],
      },
      {
        name: 'folder-palebrown-video-open',
        folderNames: ['palebrown-video-open'],
      },
      {
        name: 'folder-palebrown-video',
        folderNames: ['palebrown-video'],
      },
      {
        name: 'folder-palebrown-videos-open-open',
        folderNames: ['palebrown-videos-open-open'],
      },
      {
        name: 'folder-palebrown-videos-open',
        folderNames: ['palebrown-videos-open'],
      },
      {
        name: 'folder-palebrown-videos',
        folderNames: ['palebrown-videos'],
      },
      {
        name: 'folder-palebrown-visiting-open',
        folderNames: ['palebrown-visiting-open'],
      },
      {
        name: 'folder-palebrown-visiting',
        folderNames: ['palebrown-visiting'],
      },
      {
        name: 'folder-palebrown-wifi-open',
        folderNames: ['palebrown-wifi-open'],
      },
      {
        name: 'folder-palebrown-wifi',
        folderNames: ['palebrown-wifi'],
      },
      {
        name: 'folder-palebrown-wine-open',
        folderNames: ['palebrown-wine-open'],
      },
      {
        name: 'folder-palebrown-wine',
        folderNames: ['palebrown-wine'],
      },
      {
        name: 'folder-palebrown-yandex-disk-open',
        folderNames: ['palebrown-yandex-disk-open'],
      },
      {
        name: 'folder-palebrown-yandex-disk',
        folderNames: ['palebrown-yandex-disk'],
      },
      {
        name: 'folder-palebrown',
        folderNames: ['palebrown'],
      },
      {
        name: 'folder-paleorange-activities-open',
        folderNames: ['paleorange-activities-open'],
      },
      {
        name: 'folder-paleorange-activities',
        folderNames: ['paleorange-activities'],
      },
      {
        name: 'folder-paleorange-android-open',
        folderNames: ['paleorange-android-open'],
      },
      {
        name: 'folder-paleorange-android',
        folderNames: ['paleorange-android'],
      },
      {
        name: 'folder-paleorange-apple-open',
        folderNames: ['paleorange-apple-open'],
      },
      {
        name: 'folder-paleorange-apple',
        folderNames: ['paleorange-apple'],
      },
      {
        name: 'folder-paleorange-applications-open',
        folderNames: ['paleorange-applications-open'],
      },
      {
        name: 'folder-paleorange-applications',
        folderNames: ['paleorange-applications'],
      },
      {
        name: 'folder-paleorange-arduino-open',
        folderNames: ['paleorange-arduino-open'],
      },
      {
        name: 'folder-paleorange-arduino',
        folderNames: ['paleorange-arduino'],
      },
      {
        name: 'folder-paleorange-backup-open',
        folderNames: ['paleorange-backup-open'],
      },
      {
        name: 'folder-paleorange-backup',
        folderNames: ['paleorange-backup'],
      },
      {
        name: 'folder-paleorange-books-open',
        folderNames: ['paleorange-books-open'],
      },
      {
        name: 'folder-paleorange-books',
        folderNames: ['paleorange-books'],
      },
      {
        name: 'folder-paleorange-cd-open',
        folderNames: ['paleorange-cd-open'],
      },
      {
        name: 'folder-paleorange-cd',
        folderNames: ['paleorange-cd'],
      },
      {
        name: 'folder-paleorange-code-open',
        folderNames: ['paleorange-code-open'],
      },
      {
        name: 'folder-paleorange-code',
        folderNames: ['paleorange-code'],
      },
      {
        name: 'folder-paleorange-desktop-open',
        folderNames: ['paleorange-desktop-open'],
      },
      {
        name: 'folder-paleorange-desktop',
        folderNames: ['paleorange-desktop'],
      },
      {
        name: 'folder-paleorange-development-open',
        folderNames: ['paleorange-development-open'],
      },
      {
        name: 'folder-paleorange-development',
        folderNames: ['paleorange-development'],
      },
      {
        name: 'folder-paleorange-docker-open',
        folderNames: ['paleorange-docker-open'],
      },
      {
        name: 'folder-paleorange-docker',
        folderNames: ['paleorange-docker'],
      },
      {
        name: 'folder-paleorange-documents-open-open',
        folderNames: ['paleorange-documents-open-open'],
      },
      {
        name: 'folder-paleorange-documents-open',
        folderNames: ['paleorange-documents-open'],
      },
      {
        name: 'folder-paleorange-documents',
        folderNames: ['paleorange-documents'],
      },
      {
        name: 'folder-paleorange-download-open-open',
        folderNames: ['paleorange-download-open-open'],
      },
      {
        name: 'folder-paleorange-download-open',
        folderNames: ['paleorange-download-open'],
      },
      {
        name: 'folder-paleorange-download',
        folderNames: ['paleorange-download'],
      },
      {
        name: 'folder-paleorange-downloads-open',
        folderNames: ['paleorange-downloads-open'],
      },
      {
        name: 'folder-paleorange-downloads',
        folderNames: ['paleorange-downloads'],
      },
      {
        name: 'folder-paleorange-drag-accept-open',
        folderNames: ['paleorange-drag-accept-open'],
      },
      {
        name: 'folder-paleorange-drag-accept',
        folderNames: ['paleorange-drag-accept'],
      },
      {
        name: 'folder-paleorange-dropbox-open',
        folderNames: ['paleorange-dropbox-open'],
      },
      {
        name: 'folder-paleorange-dropbox',
        folderNames: ['paleorange-dropbox'],
      },
      {
        name: 'folder-paleorange-favorites-open',
        folderNames: ['paleorange-favorites-open'],
      },
      {
        name: 'folder-paleorange-favorites',
        folderNames: ['paleorange-favorites'],
      },
      {
        name: 'folder-paleorange-games-open',
        folderNames: ['paleorange-games-open'],
      },
      {
        name: 'folder-paleorange-games',
        folderNames: ['paleorange-games'],
      },
      {
        name: 'folder-paleorange-git-open',
        folderNames: ['paleorange-git-open'],
      },
      {
        name: 'folder-paleorange-git',
        folderNames: ['paleorange-git'],
      },
      {
        name: 'folder-paleorange-github-open',
        folderNames: ['paleorange-github-open'],
      },
      {
        name: 'folder-paleorange-github',
        folderNames: ['paleorange-github'],
      },
      {
        name: 'folder-paleorange-gitlab-open',
        folderNames: ['paleorange-gitlab-open'],
      },
      {
        name: 'folder-paleorange-gitlab',
        folderNames: ['paleorange-gitlab'],
      },
      {
        name: 'folder-paleorange-gnome-open',
        folderNames: ['paleorange-gnome-open'],
      },
      {
        name: 'folder-paleorange-gnome',
        folderNames: ['paleorange-gnome'],
      },
      {
        name: 'folder-paleorange-google-drive-open',
        folderNames: ['paleorange-google-drive-open'],
      },
      {
        name: 'folder-paleorange-google-drive',
        folderNames: ['paleorange-google-drive'],
      },
      {
        name: 'folder-paleorange-image-people-open',
        folderNames: ['paleorange-image-people-open'],
      },
      {
        name: 'folder-paleorange-image-people',
        folderNames: ['paleorange-image-people'],
      },
      {
        name: 'folder-paleorange-important-open',
        folderNames: ['paleorange-important-open'],
      },
      {
        name: 'folder-paleorange-important',
        folderNames: ['paleorange-important'],
      },
      {
        name: 'folder-paleorange-java-open',
        folderNames: ['paleorange-java-open'],
      },
      {
        name: 'folder-paleorange-java',
        folderNames: ['paleorange-java'],
      },
      {
        name: 'folder-paleorange-kde-open',
        folderNames: ['paleorange-kde-open'],
      },
      {
        name: 'folder-paleorange-kde',
        folderNames: ['paleorange-kde'],
      },
      {
        name: 'folder-paleorange-linux-open',
        folderNames: ['paleorange-linux-open'],
      },
      {
        name: 'folder-paleorange-linux',
        folderNames: ['paleorange-linux'],
      },
      {
        name: 'folder-paleorange-locked-open',
        folderNames: ['paleorange-locked-open'],
      },
      {
        name: 'folder-paleorange-locked',
        folderNames: ['paleorange-locked'],
      },
      {
        name: 'folder-paleorange-mail-cloud-open',
        folderNames: ['paleorange-mail-cloud-open'],
      },
      {
        name: 'folder-paleorange-mail-cloud',
        folderNames: ['paleorange-mail-cloud'],
      },
      {
        name: 'folder-paleorange-mail-open',
        folderNames: ['paleorange-mail-open'],
      },
      {
        name: 'folder-paleorange-mail',
        folderNames: ['paleorange-mail'],
      },
      {
        name: 'folder-paleorange-mega-open',
        folderNames: ['paleorange-mega-open'],
      },
      {
        name: 'folder-paleorange-mega',
        folderNames: ['paleorange-mega'],
      },
      {
        name: 'folder-paleorange-meocloud-open',
        folderNames: ['paleorange-meocloud-open'],
      },
      {
        name: 'folder-paleorange-meocloud',
        folderNames: ['paleorange-meocloud'],
      },
      {
        name: 'folder-paleorange-music-open-open',
        folderNames: ['paleorange-music-open-open'],
      },
      {
        name: 'folder-paleorange-music-open',
        folderNames: ['paleorange-music-open'],
      },
      {
        name: 'folder-paleorange-music',
        folderNames: ['paleorange-music'],
      },
      {
        name: 'folder-paleorange-network-open',
        folderNames: ['paleorange-network-open'],
      },
      {
        name: 'folder-paleorange-network',
        folderNames: ['paleorange-network'],
      },
      {
        name: 'folder-paleorange-nextcloud-open',
        folderNames: ['paleorange-nextcloud-open'],
      },
      {
        name: 'folder-paleorange-nextcloud',
        folderNames: ['paleorange-nextcloud'],
      },
      {
        name: 'folder-paleorange-notes-open',
        folderNames: ['paleorange-notes-open'],
      },
      {
        name: 'folder-paleorange-notes',
        folderNames: ['paleorange-notes'],
      },
      {
        name: 'folder-paleorange-obsidian-open',
        folderNames: ['paleorange-obsidian-open'],
      },
      {
        name: 'folder-paleorange-obsidian',
        folderNames: ['paleorange-obsidian'],
      },
      {
        name: 'folder-paleorange-onedrive-open',
        folderNames: ['paleorange-onedrive-open'],
      },
      {
        name: 'folder-paleorange-onedrive',
        folderNames: ['paleorange-onedrive'],
      },
      {
        name: 'folder-paleorange-open-open',
        folderNames: ['paleorange-open-open'],
      },
      {
        name: 'folder-paleorange-open',
        folderNames: ['paleorange-open'],
      },
      {
        name: 'folder-paleorange-owncloud-open',
        folderNames: ['paleorange-owncloud-open'],
      },
      {
        name: 'folder-paleorange-owncloud',
        folderNames: ['paleorange-owncloud'],
      },
      {
        name: 'folder-paleorange-pcloud-open',
        folderNames: ['paleorange-pcloud-open'],
      },
      {
        name: 'folder-paleorange-pcloud',
        folderNames: ['paleorange-pcloud'],
      },
      {
        name: 'folder-paleorange-photo-open',
        folderNames: ['paleorange-photo-open'],
      },
      {
        name: 'folder-paleorange-photo',
        folderNames: ['paleorange-photo'],
      },
      {
        name: 'folder-paleorange-pictures-open-open',
        folderNames: ['paleorange-pictures-open-open'],
      },
      {
        name: 'folder-paleorange-pictures-open',
        folderNames: ['paleorange-pictures-open'],
      },
      {
        name: 'folder-paleorange-pictures',
        folderNames: ['paleorange-pictures'],
      },
      {
        name: 'folder-paleorange-print-open',
        folderNames: ['paleorange-print-open'],
      },
      {
        name: 'folder-paleorange-print',
        folderNames: ['paleorange-print'],
      },
      {
        name: 'folder-paleorange-private-open',
        folderNames: ['paleorange-private-open'],
      },
      {
        name: 'folder-paleorange-private',
        folderNames: ['paleorange-private'],
      },
      {
        name: 'folder-paleorange-projects-open',
        folderNames: ['paleorange-projects-open'],
      },
      {
        name: 'folder-paleorange-projects',
        folderNames: ['paleorange-projects'],
      },
      {
        name: 'folder-paleorange-public-open',
        folderNames: ['paleorange-public-open'],
      },
      {
        name: 'folder-paleorange-public',
        folderNames: ['paleorange-public'],
      },
      {
        name: 'folder-paleorange-publicshare-open-open',
        folderNames: ['paleorange-publicshare-open-open'],
      },
      {
        name: 'folder-paleorange-publicshare-open',
        folderNames: ['paleorange-publicshare-open'],
      },
      {
        name: 'folder-paleorange-remote-open-open',
        folderNames: ['paleorange-remote-open-open'],
      },
      {
        name: 'folder-paleorange-remote-open',
        folderNames: ['paleorange-remote-open'],
      },
      {
        name: 'folder-paleorange-remote',
        folderNames: ['paleorange-remote'],
      },
      {
        name: 'folder-paleorange-script-open',
        folderNames: ['paleorange-script-open'],
      },
      {
        name: 'folder-paleorange-script',
        folderNames: ['paleorange-script'],
      },
      {
        name: 'folder-paleorange-snap-open',
        folderNames: ['paleorange-snap-open'],
      },
      {
        name: 'folder-paleorange-snap',
        folderNames: ['paleorange-snap'],
      },
      {
        name: 'folder-paleorange-steam-open',
        folderNames: ['paleorange-steam-open'],
      },
      {
        name: 'folder-paleorange-steam',
        folderNames: ['paleorange-steam'],
      },
      {
        name: 'folder-paleorange-sync-open',
        folderNames: ['paleorange-sync-open'],
      },
      {
        name: 'folder-paleorange-sync',
        folderNames: ['paleorange-sync'],
      },
      {
        name: 'folder-paleorange-syncthing-open',
        folderNames: ['paleorange-syncthing-open'],
      },
      {
        name: 'folder-paleorange-syncthing',
        folderNames: ['paleorange-syncthing'],
      },
      {
        name: 'folder-paleorange-systemd-open',
        folderNames: ['paleorange-systemd-open'],
      },
      {
        name: 'folder-paleorange-systemd',
        folderNames: ['paleorange-systemd'],
      },
      {
        name: 'folder-paleorange-tar-open',
        folderNames: ['paleorange-tar-open'],
      },
      {
        name: 'folder-paleorange-tar',
        folderNames: ['paleorange-tar'],
      },
      {
        name: 'folder-paleorange-templates-open-open',
        folderNames: ['paleorange-templates-open-open'],
      },
      {
        name: 'folder-paleorange-templates-open',
        folderNames: ['paleorange-templates-open'],
      },
      {
        name: 'folder-paleorange-templates',
        folderNames: ['paleorange-templates'],
      },
      {
        name: 'folder-paleorange-torrent-open',
        folderNames: ['paleorange-torrent-open'],
      },
      {
        name: 'folder-paleorange-torrent',
        folderNames: ['paleorange-torrent'],
      },
      {
        name: 'folder-paleorange-unlocked-open',
        folderNames: ['paleorange-unlocked-open'],
      },
      {
        name: 'folder-paleorange-unlocked',
        folderNames: ['paleorange-unlocked'],
      },
      {
        name: 'folder-paleorange-vbox-open',
        folderNames: ['paleorange-vbox-open'],
      },
      {
        name: 'folder-paleorange-vbox',
        folderNames: ['paleorange-vbox'],
      },
      {
        name: 'folder-paleorange-video-open',
        folderNames: ['paleorange-video-open'],
      },
      {
        name: 'folder-paleorange-video',
        folderNames: ['paleorange-video'],
      },
      {
        name: 'folder-paleorange-videos-open-open',
        folderNames: ['paleorange-videos-open-open'],
      },
      {
        name: 'folder-paleorange-videos-open',
        folderNames: ['paleorange-videos-open'],
      },
      {
        name: 'folder-paleorange-videos',
        folderNames: ['paleorange-videos'],
      },
      {
        name: 'folder-paleorange-visiting-open',
        folderNames: ['paleorange-visiting-open'],
      },
      {
        name: 'folder-paleorange-visiting',
        folderNames: ['paleorange-visiting'],
      },
      {
        name: 'folder-paleorange-wifi-open',
        folderNames: ['paleorange-wifi-open'],
      },
      {
        name: 'folder-paleorange-wifi',
        folderNames: ['paleorange-wifi'],
      },
      {
        name: 'folder-paleorange-wine-open',
        folderNames: ['paleorange-wine-open'],
      },
      {
        name: 'folder-paleorange-wine',
        folderNames: ['paleorange-wine'],
      },
      {
        name: 'folder-paleorange-yandex-disk-open',
        folderNames: ['paleorange-yandex-disk-open'],
      },
      {
        name: 'folder-paleorange-yandex-disk',
        folderNames: ['paleorange-yandex-disk'],
      },
      {
        name: 'folder-paleorange',
        folderNames: ['paleorange'],
      },
      {
        name: 'folder-parcel-open',
        folderNames: ['parcel-open'],
      },
      {
        name: 'folder-parcel',
        folderNames: ['parcel'],
      },
      {
        name: 'folder-pcloud-open',
        folderNames: ['pcloud-open'],
      },
      {
        name: 'folder-pcloud',
        folderNames: ['pcloud'],
      },
      {
        name: 'folder-pdf-open-open',
        folderNames: ['pdf-open-open'],
      },
      {
        name: 'folder-pdf-open',
        folderNames: ['pdf-open'],
      },
      {
        name: 'folder-pdm-open-open',
        folderNames: ['pdm-open-open'],
      },
      {
        name: 'folder-pdm-open',
        folderNames: ['pdm-open'],
      },
      {
        name: 'folder-perl-open',
        folderNames: ['perl-open'],
      },
      {
        name: 'folder-perl',
        folderNames: ['perl'],
      },
      {
        name: 'folder-php-open-open',
        folderNames: ['php-open-open'],
      },
      {
        name: 'folder-php-open',
        folderNames: ['php-open'],
      },
      {
        name: 'folder-phpmailer-open-open',
        folderNames: ['phpmailer-open-open'],
      },
      {
        name: 'folder-phpmailer-open',
        folderNames: ['phpmailer-open'],
      },
      {
        name: 'folder-pictures-open-open',
        folderNames: ['pictures-open-open'],
      },
      {
        name: 'folder-pictures-open',
        folderNames: ['pictures-open'],
      },
      {
        name: 'folder-pinia-open',
        folderNames: ['pinia-open'],
      },
      {
        name: 'folder-pinia',
        folderNames: [
          'pinia',
          'UserStores',
          'UserStore',
          'userstores',
          'userstore',
        ],
      },
      {
        name: 'folder-pink-activities-open',
        folderNames: ['pink-activities-open'],
      },
      {
        name: 'folder-pink-activities',
        folderNames: ['pink-activities'],
      },
      {
        name: 'folder-pink-android-open',
        folderNames: ['pink-android-open'],
      },
      {
        name: 'folder-pink-android',
        folderNames: ['pink-android'],
      },
      {
        name: 'folder-pink-apple-open',
        folderNames: ['pink-apple-open'],
      },
      {
        name: 'folder-pink-apple',
        folderNames: ['pink-apple'],
      },
      {
        name: 'folder-pink-applications-open',
        folderNames: ['pink-applications-open'],
      },
      {
        name: 'folder-pink-applications',
        folderNames: ['pink-applications'],
      },
      {
        name: 'folder-pink-arduino-open',
        folderNames: ['pink-arduino-open'],
      },
      {
        name: 'folder-pink-arduino',
        folderNames: ['pink-arduino'],
      },
      {
        name: 'folder-pink-backup-open',
        folderNames: ['pink-backup-open'],
      },
      {
        name: 'folder-pink-backup',
        folderNames: ['pink-backup'],
      },
      {
        name: 'folder-pink-books-open',
        folderNames: ['pink-books-open'],
      },
      {
        name: 'folder-pink-books',
        folderNames: ['pink-books'],
      },
      {
        name: 'folder-pink-cd-open',
        folderNames: ['pink-cd-open'],
      },
      {
        name: 'folder-pink-cd',
        folderNames: ['pink-cd'],
      },
      {
        name: 'folder-pink-code-open',
        folderNames: ['pink-code-open'],
      },
      {
        name: 'folder-pink-code',
        folderNames: ['pink-code'],
      },
      {
        name: 'folder-pink-desktop-open',
        folderNames: ['pink-desktop-open'],
      },
      {
        name: 'folder-pink-desktop',
        folderNames: ['pink-desktop'],
      },
      {
        name: 'folder-pink-development-open',
        folderNames: ['pink-development-open'],
      },
      {
        name: 'folder-pink-development',
        folderNames: ['pink-development'],
      },
      {
        name: 'folder-pink-docker-open',
        folderNames: ['pink-docker-open'],
      },
      {
        name: 'folder-pink-docker',
        folderNames: ['pink-docker'],
      },
      {
        name: 'folder-pink-documents-open-open',
        folderNames: ['pink-documents-open-open'],
      },
      {
        name: 'folder-pink-documents-open',
        folderNames: ['pink-documents-open'],
      },
      {
        name: 'folder-pink-documents',
        folderNames: ['pink-documents'],
      },
      {
        name: 'folder-pink-download-open-open',
        folderNames: ['pink-download-open-open'],
      },
      {
        name: 'folder-pink-download-open',
        folderNames: ['pink-download-open'],
      },
      {
        name: 'folder-pink-download',
        folderNames: ['pink-download'],
      },
      {
        name: 'folder-pink-downloads-open',
        folderNames: ['pink-downloads-open'],
      },
      {
        name: 'folder-pink-downloads',
        folderNames: ['pink-downloads'],
      },
      {
        name: 'folder-pink-drag-accept-open',
        folderNames: ['pink-drag-accept-open'],
      },
      {
        name: 'folder-pink-drag-accept',
        folderNames: ['pink-drag-accept'],
      },
      {
        name: 'folder-pink-dropbox-open',
        folderNames: ['pink-dropbox-open'],
      },
      {
        name: 'folder-pink-dropbox',
        folderNames: ['pink-dropbox'],
      },
      {
        name: 'folder-pink-favorites-open',
        folderNames: ['pink-favorites-open'],
      },
      {
        name: 'folder-pink-favorites',
        folderNames: ['pink-favorites'],
      },
      {
        name: 'folder-pink-games-open',
        folderNames: ['pink-games-open'],
      },
      {
        name: 'folder-pink-games',
        folderNames: ['pink-games'],
      },
      {
        name: 'folder-pink-git-open',
        folderNames: ['pink-git-open'],
      },
      {
        name: 'folder-pink-git',
        folderNames: ['pink-git'],
      },
      {
        name: 'folder-pink-github-open',
        folderNames: ['pink-github-open'],
      },
      {
        name: 'folder-pink-github',
        folderNames: ['pink-github'],
      },
      {
        name: 'folder-pink-gitlab-open',
        folderNames: ['pink-gitlab-open'],
      },
      {
        name: 'folder-pink-gitlab',
        folderNames: ['pink-gitlab'],
      },
      {
        name: 'folder-pink-gnome-open',
        folderNames: ['pink-gnome-open'],
      },
      {
        name: 'folder-pink-gnome',
        folderNames: ['pink-gnome'],
      },
      {
        name: 'folder-pink-google-drive-open',
        folderNames: ['pink-google-drive-open'],
      },
      {
        name: 'folder-pink-google-drive',
        folderNames: ['pink-google-drive'],
      },
      {
        name: 'folder-pink-image-people-open',
        folderNames: ['pink-image-people-open'],
      },
      {
        name: 'folder-pink-image-people',
        folderNames: ['pink-image-people'],
      },
      {
        name: 'folder-pink-important-open',
        folderNames: ['pink-important-open'],
      },
      {
        name: 'folder-pink-important',
        folderNames: ['pink-important'],
      },
      {
        name: 'folder-pink-java-open',
        folderNames: ['pink-java-open'],
      },
      {
        name: 'folder-pink-java',
        folderNames: ['pink-java'],
      },
      {
        name: 'folder-pink-kde-open',
        folderNames: ['pink-kde-open'],
      },
      {
        name: 'folder-pink-kde',
        folderNames: ['pink-kde'],
      },
      {
        name: 'folder-pink-linux-open',
        folderNames: ['pink-linux-open'],
      },
      {
        name: 'folder-pink-linux',
        folderNames: ['pink-linux'],
      },
      {
        name: 'folder-pink-locked-open',
        folderNames: ['pink-locked-open'],
      },
      {
        name: 'folder-pink-locked',
        folderNames: ['pink-locked'],
      },
      {
        name: 'folder-pink-mail-cloud-open',
        folderNames: ['pink-mail-cloud-open'],
      },
      {
        name: 'folder-pink-mail-cloud',
        folderNames: ['pink-mail-cloud'],
      },
      {
        name: 'folder-pink-mail-open',
        folderNames: ['pink-mail-open'],
      },
      {
        name: 'folder-pink-mail',
        folderNames: ['pink-mail'],
      },
      {
        name: 'folder-pink-mega-open',
        folderNames: ['pink-mega-open'],
      },
      {
        name: 'folder-pink-mega',
        folderNames: ['pink-mega'],
      },
      {
        name: 'folder-pink-meocloud-open',
        folderNames: ['pink-meocloud-open'],
      },
      {
        name: 'folder-pink-meocloud',
        folderNames: ['pink-meocloud'],
      },
      {
        name: 'folder-pink-music-open-open',
        folderNames: ['pink-music-open-open'],
      },
      {
        name: 'folder-pink-music-open',
        folderNames: ['pink-music-open'],
      },
      {
        name: 'folder-pink-music',
        folderNames: ['pink-music'],
      },
      {
        name: 'folder-pink-network-open',
        folderNames: ['pink-network-open'],
      },
      {
        name: 'folder-pink-network',
        folderNames: ['pink-network'],
      },
      {
        name: 'folder-pink-nextcloud-open',
        folderNames: ['pink-nextcloud-open'],
      },
      {
        name: 'folder-pink-nextcloud',
        folderNames: ['pink-nextcloud'],
      },
      {
        name: 'folder-pink-notes-open',
        folderNames: ['pink-notes-open'],
      },
      {
        name: 'folder-pink-notes',
        folderNames: ['pink-notes'],
      },
      {
        name: 'folder-pink-obsidian-open',
        folderNames: ['pink-obsidian-open'],
      },
      {
        name: 'folder-pink-obsidian',
        folderNames: ['pink-obsidian'],
      },
      {
        name: 'folder-pink-onedrive-open',
        folderNames: ['pink-onedrive-open'],
      },
      {
        name: 'folder-pink-onedrive',
        folderNames: ['pink-onedrive'],
      },
      {
        name: 'folder-pink-open-open',
        folderNames: ['pink-open-open'],
      },
      {
        name: 'folder-pink-open',
        folderNames: ['pink-open'],
      },
      {
        name: 'folder-pink-owncloud-open',
        folderNames: ['pink-owncloud-open'],
      },
      {
        name: 'folder-pink-owncloud',
        folderNames: ['pink-owncloud'],
      },
      {
        name: 'folder-pink-pcloud-open',
        folderNames: ['pink-pcloud-open'],
      },
      {
        name: 'folder-pink-pcloud',
        folderNames: ['pink-pcloud'],
      },
      {
        name: 'folder-pink-photo-open',
        folderNames: ['pink-photo-open'],
      },
      {
        name: 'folder-pink-photo',
        folderNames: ['pink-photo'],
      },
      {
        name: 'folder-pink-pictures-open-open',
        folderNames: ['pink-pictures-open-open'],
      },
      {
        name: 'folder-pink-pictures-open',
        folderNames: ['pink-pictures-open'],
      },
      {
        name: 'folder-pink-pictures',
        folderNames: ['pink-pictures'],
      },
      {
        name: 'folder-pink-print-open',
        folderNames: ['pink-print-open'],
      },
      {
        name: 'folder-pink-print',
        folderNames: ['pink-print'],
      },
      {
        name: 'folder-pink-private-open',
        folderNames: ['pink-private-open'],
      },
      {
        name: 'folder-pink-private',
        folderNames: ['pink-private'],
      },
      {
        name: 'folder-pink-projects-open',
        folderNames: ['pink-projects-open'],
      },
      {
        name: 'folder-pink-projects',
        folderNames: ['pink-projects'],
      },
      {
        name: 'folder-pink-public-open',
        folderNames: ['pink-public-open'],
      },
      {
        name: 'folder-pink-public',
        folderNames: ['pink-public'],
      },
      {
        name: 'folder-pink-publicshare-open-open',
        folderNames: ['pink-publicshare-open-open'],
      },
      {
        name: 'folder-pink-publicshare-open',
        folderNames: ['pink-publicshare-open'],
      },
      {
        name: 'folder-pink-remote-open-open',
        folderNames: ['pink-remote-open-open'],
      },
      {
        name: 'folder-pink-remote-open',
        folderNames: ['pink-remote-open'],
      },
      {
        name: 'folder-pink-remote',
        folderNames: ['pink-remote'],
      },
      {
        name: 'folder-pink-script-open',
        folderNames: ['pink-script-open'],
      },
      {
        name: 'folder-pink-script',
        folderNames: ['pink-script'],
      },
      {
        name: 'folder-pink-snap-open',
        folderNames: ['pink-snap-open'],
      },
      {
        name: 'folder-pink-snap',
        folderNames: ['pink-snap'],
      },
      {
        name: 'folder-pink-steam-open',
        folderNames: ['pink-steam-open'],
      },
      {
        name: 'folder-pink-steam',
        folderNames: ['pink-steam'],
      },
      {
        name: 'folder-pink-sync-open',
        folderNames: ['pink-sync-open'],
      },
      {
        name: 'folder-pink-sync',
        folderNames: ['pink-sync'],
      },
      {
        name: 'folder-pink-syncthing-open',
        folderNames: ['pink-syncthing-open'],
      },
      {
        name: 'folder-pink-syncthing',
        folderNames: ['pink-syncthing'],
      },
      {
        name: 'folder-pink-systemd-open',
        folderNames: ['pink-systemd-open'],
      },
      {
        name: 'folder-pink-systemd',
        folderNames: ['pink-systemd'],
      },
      {
        name: 'folder-pink-tar-open',
        folderNames: ['pink-tar-open'],
      },
      {
        name: 'folder-pink-tar',
        folderNames: ['pink-tar'],
      },
      {
        name: 'folder-pink-templates-open-open',
        folderNames: ['pink-templates-open-open'],
      },
      {
        name: 'folder-pink-templates-open',
        folderNames: ['pink-templates-open'],
      },
      {
        name: 'folder-pink-templates',
        folderNames: ['pink-templates'],
      },
      {
        name: 'folder-pink-torrent-open',
        folderNames: ['pink-torrent-open'],
      },
      {
        name: 'folder-pink-torrent',
        folderNames: ['pink-torrent'],
      },
      {
        name: 'folder-pink-unlocked-open',
        folderNames: ['pink-unlocked-open'],
      },
      {
        name: 'folder-pink-unlocked',
        folderNames: ['pink-unlocked'],
      },
      {
        name: 'folder-pink-vbox-open',
        folderNames: ['pink-vbox-open'],
      },
      {
        name: 'folder-pink-vbox',
        folderNames: ['pink-vbox'],
      },
      {
        name: 'folder-pink-video-open',
        folderNames: ['pink-video-open'],
      },
      {
        name: 'folder-pink-video',
        folderNames: ['pink-video'],
      },
      {
        name: 'folder-pink-videos-open-open',
        folderNames: ['pink-videos-open-open'],
      },
      {
        name: 'folder-pink-videos-open',
        folderNames: ['pink-videos-open'],
      },
      {
        name: 'folder-pink-videos',
        folderNames: ['pink-videos'],
      },
      {
        name: 'folder-pink-visiting-open',
        folderNames: ['pink-visiting-open'],
      },
      {
        name: 'folder-pink-visiting',
        folderNames: ['pink-visiting'],
      },
      {
        name: 'folder-pink-wifi-open',
        folderNames: ['pink-wifi-open'],
      },
      {
        name: 'folder-pink-wifi',
        folderNames: ['pink-wifi'],
      },
      {
        name: 'folder-pink-wine-open',
        folderNames: ['pink-wine-open'],
      },
      {
        name: 'folder-pink-wine',
        folderNames: ['pink-wine'],
      },
      {
        name: 'folder-pink-yandex-disk-open',
        folderNames: ['pink-yandex-disk-open'],
      },
      {
        name: 'folder-pink-yandex-disk',
        folderNames: ['pink-yandex-disk'],
      },
      {
        name: 'folder-pink',
        folderNames: ['pink'],
      },
      {
        name: 'folder-pipe-open-open',
        folderNames: ['pipe-open-open'],
      },
      {
        name: 'folder-pipe-open',
        folderNames: ['pipe-open'],
      },
      {
        name: 'folder-plastic-open-open',
        folderNames: ['plastic-open-open'],
      },
      {
        name: 'folder-plastic-open',
        folderNames: ['plastic-open'],
      },
      {
        name: 'folder-platformio-open',
        folderNames: ['platformio-open'],
      },
      {
        name: 'folder-platformio',
        folderNames: ['platformio'],
      },
      {
        name: 'folder-playwright-open',
        folderNames: ['playwright-open'],
      },
      {
        name: 'folder-playwright',
        folderNames: ['playwright'],
      },
      {
        name: 'folder-plugin-open-open',
        folderNames: ['plugin-open-open'],
      },
      {
        name: 'folder-plugin-open',
        folderNames: ['plugin-open'],
      },
      {
        name: 'folder-podcast-open',
        folderNames: ['podcast-open'],
      },
      {
        name: 'folder-podcast',
        folderNames: ['podcast'],
      },
      {
        name: 'folder-policy-open-open',
        folderNames: ['policy-open-open'],
      },
      {
        name: 'folder-policy-open',
        folderNames: ['policy-open'],
      },
      {
        name: 'folder-powershell-open-open',
        folderNames: ['powershell-open-open'],
      },
      {
        name: 'folder-powershell-open',
        folderNames: ['powershell-open'],
      },
      {
        name: 'folder-print-open',
        folderNames: ['print-open'],
      },
      {
        name: 'folder-print',
        folderNames: ['print'],
      },
      {
        name: 'folder-prisma-open-open',
        folderNames: ['prisma-open-open'],
      },
      {
        name: 'folder-prisma-open',
        folderNames: ['prisma-open'],
      },
      {
        name: 'folder-private-open-open',
        folderNames: ['private-open-open'],
      },
      {
        name: 'folder-private-open',
        folderNames: ['private-open'],
      },
      {
        name: 'folder-profiles-open',
        folderNames: ['profiles-open'],
      },
      {
        name: 'folder-profiles',
        folderNames: ['profiles'],
      },
      {
        name: 'folder-project-open-open',
        folderNames: ['project-open-open'],
      },
      {
        name: 'folder-project-open',
        folderNames: ['project-open'],
      },
      {
        name: 'folder-prompts-open-open',
        folderNames: ['prompts-open-open'],
      },
      {
        name: 'folder-prompts-open',
        folderNames: ['prompts-open'],
      },
      {
        name: 'folder-proto-open-open',
        folderNames: ['proto-open-open'],
      },
      {
        name: 'folder-proto-open',
        folderNames: ['proto-open'],
      },
      {
        name: 'folder-public-open-open',
        folderNames: ['public-open-open'],
      },
      {
        name: 'folder-public-open',
        folderNames: ['public-open'],
      },
      {
        name: 'folder-publicshare-open-open',
        folderNames: ['publicshare-open-open'],
      },
      {
        name: 'folder-publicshare-open',
        folderNames: ['publicshare-open'],
      },
      {
        name: 'folder-publicshare',
        folderNames: ['publicshare'],
      },
      {
        name: 'folder-python-open-open',
        folderNames: ['python-open-open'],
      },
      {
        name: 'folder-python-open',
        folderNames: ['python-open'],
      },
      {
        name: 'folder-pytorch-open-open',
        folderNames: ['pytorch-open-open'],
      },
      {
        name: 'folder-pytorch-open',
        folderNames: ['pytorch-open'],
      },
      {
        name: 'folder-quantum-open',
        folderNames: ['quantum-open'],
      },
      {
        name: 'folder-quantum',
        folderNames: ['quantum'],
      },
      {
        name: 'folder-quasar-open-open',
        folderNames: ['quasar-open-open'],
      },
      {
        name: 'folder-quasar-open',
        folderNames: ['quasar-open'],
      },
      {
        name: 'folder-queries-open',
        folderNames: ['queries-open'],
      },
      {
        name: 'folder-queries',
        folderNames: ['queries'],
      },
      {
        name: 'folder-queue-open-open',
        folderNames: ['queue-open-open'],
      },
      {
        name: 'folder-queue-open',
        folderNames: ['queue-open'],
      },
      {
        name: 'folder-r-open-open',
        folderNames: ['r-open-open'],
      },
      {
        name: 'folder-r-open',
        folderNames: ['r-open'],
      },
      {
        name: 'folder-react-components-open-open',
        folderNames: ['react-components-open-open'],
      },
      {
        name: 'folder-react-components-open',
        folderNames: ['react-components-open'],
      },
      {
        name: 'folder-recoil-open',
        folderNames: ['recoil-open'],
      },
      {
        name: 'folder-recoil',
        folderNames: ['recoil'],
      },
      {
        name: 'folder-red-activities-open',
        folderNames: ['red-activities-open'],
      },
      {
        name: 'folder-red-activities',
        folderNames: ['red-activities'],
      },
      {
        name: 'folder-red-android-open',
        folderNames: ['red-android-open'],
      },
      {
        name: 'folder-red-android',
        folderNames: ['red-android'],
      },
      {
        name: 'folder-red-apple-open',
        folderNames: ['red-apple-open'],
      },
      {
        name: 'folder-red-apple',
        folderNames: ['red-apple'],
      },
      {
        name: 'folder-red-applications-open',
        folderNames: ['red-applications-open'],
      },
      {
        name: 'folder-red-applications',
        folderNames: ['red-applications'],
      },
      {
        name: 'folder-red-arduino-open',
        folderNames: ['red-arduino-open'],
      },
      {
        name: 'folder-red-arduino',
        folderNames: ['red-arduino'],
      },
      {
        name: 'folder-red-backup-open',
        folderNames: ['red-backup-open'],
      },
      {
        name: 'folder-red-backup',
        folderNames: ['red-backup'],
      },
      {
        name: 'folder-red-books-open',
        folderNames: ['red-books-open'],
      },
      {
        name: 'folder-red-books',
        folderNames: ['red-books'],
      },
      {
        name: 'folder-red-cd-open',
        folderNames: ['red-cd-open'],
      },
      {
        name: 'folder-red-cd',
        folderNames: ['red-cd'],
      },
      {
        name: 'folder-red-code-open',
        folderNames: ['red-code-open'],
      },
      {
        name: 'folder-red-code',
        folderNames: ['red-code'],
      },
      {
        name: 'folder-red-desktop-open',
        folderNames: ['red-desktop-open'],
      },
      {
        name: 'folder-red-desktop',
        folderNames: ['red-desktop'],
      },
      {
        name: 'folder-red-development-open',
        folderNames: ['red-development-open'],
      },
      {
        name: 'folder-red-development',
        folderNames: ['red-development'],
      },
      {
        name: 'folder-red-docker-open',
        folderNames: ['red-docker-open'],
      },
      {
        name: 'folder-red-docker',
        folderNames: ['red-docker'],
      },
      {
        name: 'folder-red-documents-open-open',
        folderNames: ['red-documents-open-open'],
      },
      {
        name: 'folder-red-documents-open',
        folderNames: ['red-documents-open'],
      },
      {
        name: 'folder-red-documents',
        folderNames: ['red-documents'],
      },
      {
        name: 'folder-red-download-open-open',
        folderNames: ['red-download-open-open'],
      },
      {
        name: 'folder-red-download-open',
        folderNames: ['red-download-open'],
      },
      {
        name: 'folder-red-download',
        folderNames: ['red-download'],
      },
      {
        name: 'folder-red-downloads-open',
        folderNames: ['red-downloads-open'],
      },
      {
        name: 'folder-red-downloads',
        folderNames: ['red-downloads'],
      },
      {
        name: 'folder-red-drag-accept-open',
        folderNames: ['red-drag-accept-open'],
      },
      {
        name: 'folder-red-drag-accept',
        folderNames: ['red-drag-accept'],
      },
      {
        name: 'folder-red-dropbox-open',
        folderNames: ['red-dropbox-open'],
      },
      {
        name: 'folder-red-dropbox',
        folderNames: ['red-dropbox'],
      },
      {
        name: 'folder-red-favorites-open',
        folderNames: ['red-favorites-open'],
      },
      {
        name: 'folder-red-favorites',
        folderNames: ['red-favorites'],
      },
      {
        name: 'folder-red-games-open',
        folderNames: ['red-games-open'],
      },
      {
        name: 'folder-red-games',
        folderNames: ['red-games'],
      },
      {
        name: 'folder-red-git-open',
        folderNames: ['red-git-open'],
      },
      {
        name: 'folder-red-git',
        folderNames: ['red-git'],
      },
      {
        name: 'folder-red-github-open',
        folderNames: ['red-github-open'],
      },
      {
        name: 'folder-red-github',
        folderNames: ['red-github'],
      },
      {
        name: 'folder-red-gitlab-open',
        folderNames: ['red-gitlab-open'],
      },
      {
        name: 'folder-red-gitlab',
        folderNames: ['red-gitlab'],
      },
      {
        name: 'folder-red-gnome-open',
        folderNames: ['red-gnome-open'],
      },
      {
        name: 'folder-red-gnome',
        folderNames: ['red-gnome'],
      },
      {
        name: 'folder-red-google-drive-open',
        folderNames: ['red-google-drive-open'],
      },
      {
        name: 'folder-red-google-drive',
        folderNames: ['red-google-drive'],
      },
      {
        name: 'folder-red-image-people-open',
        folderNames: ['red-image-people-open'],
      },
      {
        name: 'folder-red-image-people',
        folderNames: ['red-image-people'],
      },
      {
        name: 'folder-red-important-open',
        folderNames: ['red-important-open'],
      },
      {
        name: 'folder-red-important',
        folderNames: ['red-important'],
      },
      {
        name: 'folder-red-java-open',
        folderNames: ['red-java-open'],
      },
      {
        name: 'folder-red-java',
        folderNames: ['red-java'],
      },
      {
        name: 'folder-red-kde-open',
        folderNames: ['red-kde-open'],
      },
      {
        name: 'folder-red-kde',
        folderNames: ['red-kde'],
      },
      {
        name: 'folder-red-linux-open',
        folderNames: ['red-linux-open'],
      },
      {
        name: 'folder-red-linux',
        folderNames: ['red-linux'],
      },
      {
        name: 'folder-red-locked-open',
        folderNames: ['red-locked-open'],
      },
      {
        name: 'folder-red-locked',
        folderNames: ['red-locked'],
      },
      {
        name: 'folder-red-mail-cloud-open',
        folderNames: ['red-mail-cloud-open'],
      },
      {
        name: 'folder-red-mail-cloud',
        folderNames: ['red-mail-cloud'],
      },
      {
        name: 'folder-red-mail-open',
        folderNames: ['red-mail-open'],
      },
      {
        name: 'folder-red-mail',
        folderNames: ['red-mail'],
      },
      {
        name: 'folder-red-mega-open',
        folderNames: ['red-mega-open'],
      },
      {
        name: 'folder-red-mega',
        folderNames: ['red-mega'],
      },
      {
        name: 'folder-red-meocloud-open',
        folderNames: ['red-meocloud-open'],
      },
      {
        name: 'folder-red-meocloud',
        folderNames: ['red-meocloud'],
      },
      {
        name: 'folder-red-music-open-open',
        folderNames: ['red-music-open-open'],
      },
      {
        name: 'folder-red-music-open',
        folderNames: ['red-music-open'],
      },
      {
        name: 'folder-red-music',
        folderNames: ['red-music'],
      },
      {
        name: 'folder-red-network-open',
        folderNames: ['red-network-open'],
      },
      {
        name: 'folder-red-network',
        folderNames: ['red-network'],
      },
      {
        name: 'folder-red-nextcloud-open',
        folderNames: ['red-nextcloud-open'],
      },
      {
        name: 'folder-red-nextcloud',
        folderNames: ['red-nextcloud'],
      },
      {
        name: 'folder-red-notes-open',
        folderNames: ['red-notes-open'],
      },
      {
        name: 'folder-red-notes',
        folderNames: ['red-notes'],
      },
      {
        name: 'folder-red-obsidian-open',
        folderNames: ['red-obsidian-open'],
      },
      {
        name: 'folder-red-obsidian',
        folderNames: ['red-obsidian'],
      },
      {
        name: 'folder-red-onedrive-open',
        folderNames: ['red-onedrive-open'],
      },
      {
        name: 'folder-red-onedrive',
        folderNames: ['red-onedrive'],
      },
      {
        name: 'folder-red-open-open',
        folderNames: ['red-open-open'],
      },
      {
        name: 'folder-red-open',
        folderNames: ['red-open'],
      },
      {
        name: 'folder-red-owncloud-open',
        folderNames: ['red-owncloud-open'],
      },
      {
        name: 'folder-red-owncloud',
        folderNames: ['red-owncloud'],
      },
      {
        name: 'folder-red-pcloud-open',
        folderNames: ['red-pcloud-open'],
      },
      {
        name: 'folder-red-pcloud',
        folderNames: ['red-pcloud'],
      },
      {
        name: 'folder-red-photo-open',
        folderNames: ['red-photo-open'],
      },
      {
        name: 'folder-red-photo',
        folderNames: ['red-photo'],
      },
      {
        name: 'folder-red-pictures-open-open',
        folderNames: ['red-pictures-open-open'],
      },
      {
        name: 'folder-red-pictures-open',
        folderNames: ['red-pictures-open'],
      },
      {
        name: 'folder-red-pictures',
        folderNames: ['red-pictures'],
      },
      {
        name: 'folder-red-print-open',
        folderNames: ['red-print-open'],
      },
      {
        name: 'folder-red-print',
        folderNames: ['red-print'],
      },
      {
        name: 'folder-red-private-open',
        folderNames: ['red-private-open'],
      },
      {
        name: 'folder-red-private',
        folderNames: ['red-private'],
      },
      {
        name: 'folder-red-projects-open',
        folderNames: ['red-projects-open'],
      },
      {
        name: 'folder-red-projects',
        folderNames: ['red-projects'],
      },
      {
        name: 'folder-red-public-open',
        folderNames: ['red-public-open'],
      },
      {
        name: 'folder-red-public',
        folderNames: ['red-public'],
      },
      {
        name: 'folder-red-publicshare-open-open',
        folderNames: ['red-publicshare-open-open'],
      },
      {
        name: 'folder-red-publicshare-open',
        folderNames: ['red-publicshare-open'],
      },
      {
        name: 'folder-red-remote-open-open',
        folderNames: ['red-remote-open-open'],
      },
      {
        name: 'folder-red-remote-open',
        folderNames: ['red-remote-open'],
      },
      {
        name: 'folder-red-remote',
        folderNames: ['red-remote'],
      },
      {
        name: 'folder-red-script-open',
        folderNames: ['red-script-open'],
      },
      {
        name: 'folder-red-script',
        folderNames: ['red-script'],
      },
      {
        name: 'folder-red-snap-open',
        folderNames: ['red-snap-open'],
      },
      {
        name: 'folder-red-snap',
        folderNames: ['red-snap'],
      },
      {
        name: 'folder-red-steam-open',
        folderNames: ['red-steam-open'],
      },
      {
        name: 'folder-red-steam',
        folderNames: ['red-steam'],
      },
      {
        name: 'folder-red-sync-open',
        folderNames: ['red-sync-open'],
      },
      {
        name: 'folder-red-sync',
        folderNames: ['red-sync'],
      },
      {
        name: 'folder-red-syncthing-open',
        folderNames: ['red-syncthing-open'],
      },
      {
        name: 'folder-red-syncthing',
        folderNames: ['red-syncthing'],
      },
      {
        name: 'folder-red-systemd-open',
        folderNames: ['red-systemd-open'],
      },
      {
        name: 'folder-red-systemd',
        folderNames: ['red-systemd'],
      },
      {
        name: 'folder-red-tar-open',
        folderNames: ['red-tar-open'],
      },
      {
        name: 'folder-red-tar',
        folderNames: ['red-tar'],
      },
      {
        name: 'folder-red-templates-open-open',
        folderNames: ['red-templates-open-open'],
      },
      {
        name: 'folder-red-templates-open',
        folderNames: ['red-templates-open'],
      },
      {
        name: 'folder-red-templates',
        folderNames: ['red-templates'],
      },
      {
        name: 'folder-red-torrent-open',
        folderNames: ['red-torrent-open'],
      },
      {
        name: 'folder-red-torrent',
        folderNames: ['red-torrent'],
      },
      {
        name: 'folder-red-unlocked-open',
        folderNames: ['red-unlocked-open'],
      },
      {
        name: 'folder-red-unlocked',
        folderNames: ['red-unlocked'],
      },
      {
        name: 'folder-red-vbox-open',
        folderNames: ['red-vbox-open'],
      },
      {
        name: 'folder-red-vbox',
        folderNames: ['red-vbox'],
      },
      {
        name: 'folder-red-video-open',
        folderNames: ['red-video-open'],
      },
      {
        name: 'folder-red-video',
        folderNames: ['red-video'],
      },
      {
        name: 'folder-red-videos-open-open',
        folderNames: ['red-videos-open-open'],
      },
      {
        name: 'folder-red-videos-open',
        folderNames: ['red-videos-open'],
      },
      {
        name: 'folder-red-videos',
        folderNames: ['red-videos'],
      },
      {
        name: 'folder-red-visiting-open',
        folderNames: ['red-visiting-open'],
      },
      {
        name: 'folder-red-visiting',
        folderNames: ['red-visiting'],
      },
      {
        name: 'folder-red-wifi-open',
        folderNames: ['red-wifi-open'],
      },
      {
        name: 'folder-red-wifi',
        folderNames: ['red-wifi'],
      },
      {
        name: 'folder-red-wine-open',
        folderNames: ['red-wine-open'],
      },
      {
        name: 'folder-red-wine',
        folderNames: ['red-wine'],
      },
      {
        name: 'folder-red-yandex-disk-open',
        folderNames: ['red-yandex-disk-open'],
      },
      {
        name: 'folder-red-yandex-disk',
        folderNames: ['red-yandex-disk'],
      },
      {
        name: 'folder-red',
        folderNames: ['red'],
      },
      {
        name: 'folder-redhat-open',
        folderNames: ['redhat-open'],
      },
      {
        name: 'folder-redhat',
        folderNames: ['redhat'],
      },
      {
        name: 'folder-redis-open',
        folderNames: ['redis-open'],
      },
      {
        name: 'folder-redis',
        folderNames: ['redis'],
      },
      {
        name: 'folder-redux-actions-open.clone-open',
        folderNames: ['redux-actions-open.clone-open'],
      },
      {
        name: 'folder-redux-actions-open.clone',
        folderNames: ['redux-actions-open.clone'],
      },
      {
        name: 'folder-redux-actions-open',
        folderNames: ['redux-actions-open'],
      },
      {
        name: 'folder-redux-actions.clone-open',
        folderNames: ['redux-actions.clone-open'],
      },
      {
        name: 'folder-redux-actions.clone',
        folderNames: ['redux-actions.clone'],
      },
      {
        name: 'folder-redux-epics-open',
        folderNames: ['redux-epics-open'],
      },
      {
        name: 'folder-redux-epics',
        folderNames: ['redux-epics'],
      },
      {
        name: 'folder-redux-reducer-open-open',
        folderNames: ['redux-reducer-open-open'],
      },
      {
        name: 'folder-redux-reducer-open',
        folderNames: ['redux-reducer-open'],
      },
      {
        name: 'folder-redux-sagas-open',
        folderNames: ['redux-sagas-open'],
      },
      {
        name: 'folder-redux-sagas',
        folderNames: ['redux-sagas'],
      },
      {
        name: 'folder-redux-selector-open.clone-open',
        folderNames: ['redux-selector-open.clone-open'],
      },
      {
        name: 'folder-redux-selector-open.clone',
        folderNames: ['redux-selector-open.clone'],
      },
      {
        name: 'folder-redux-selector.clone-open',
        folderNames: ['redux-selector.clone-open'],
      },
      {
        name: 'folder-redux-selector.clone',
        folderNames: ['redux-selector.clone'],
      },
      {
        name: 'folder-redux-store-open.clone-open',
        folderNames: ['redux-store-open.clone-open'],
      },
      {
        name: 'folder-redux-store-open.clone',
        folderNames: ['redux-store-open.clone'],
      },
      {
        name: 'folder-redux-store.clone-open',
        folderNames: ['redux-store.clone-open'],
      },
      {
        name: 'folder-redux-store.clone',
        folderNames: ['redux-store.clone'],
      },
      {
        name: 'folder-redux-stores-open',
        folderNames: ['redux-stores-open'],
      },
      {
        name: 'folder-redux-stores',
        folderNames: ['redux-stores'],
      },
      {
        name: 'folder-redux-toolkit-open.clone-open',
        folderNames: ['redux-toolkit-open.clone-open'],
      },
      {
        name: 'folder-redux-toolkit-open.clone',
        folderNames: ['redux-toolkit-open.clone'],
      },
      {
        name: 'folder-redux-toolkit.clone-open',
        folderNames: ['redux-toolkit.clone-open'],
      },
      {
        name: 'folder-redux-toolkit.clone',
        folderNames: ['redux-toolkit.clone'],
      },
      {
        name: 'folder-redwood-open',
        folderNames: ['redwood-open'],
      },
      {
        name: 'folder-redwood',
        folderNames: ['redwood'],
      },
      {
        name: 'folder-relay-open',
        folderNames: ['relay-open'],
      },
      {
        name: 'folder-relay',
        folderNames: ['relay'],
      },
      {
        name: 'folder-remote-ftp-open',
        folderNames: ['remote-ftp-open'],
      },
      {
        name: 'folder-remote-ftp',
        folderNames: ['remote-ftp'],
      },
      {
        name: 'folder-remote-nfs-open',
        folderNames: ['remote-nfs-open'],
      },
      {
        name: 'folder-remote-nfs',
        folderNames: ['remote-nfs'],
      },
      {
        name: 'folder-remote-open-open',
        folderNames: ['remote-open-open'],
      },
      {
        name: 'folder-remote-open',
        folderNames: ['remote-open'],
      },
      {
        name: 'folder-remote-properties-open',
        folderNames: ['remote-properties-open'],
      },
      {
        name: 'folder-remote-properties',
        folderNames: ['remote-properties'],
      },
      {
        name: 'folder-remote-smb-open',
        folderNames: ['remote-smb-open'],
      },
      {
        name: 'folder-remote-smb',
        folderNames: ['remote-smb'],
      },
      {
        name: 'folder-remote-ssh-open',
        folderNames: ['remote-ssh-open'],
      },
      {
        name: 'folder-remote-ssh',
        folderNames: ['remote-ssh'],
      },
      {
        name: 'folder-repository-open-open',
        folderNames: ['repository-open-open'],
      },
      {
        name: 'folder-repository-open',
        folderNames: ['repository-open'],
      },
      {
        name: 'folder-resolver-open-open',
        folderNames: ['resolver-open-open'],
      },
      {
        name: 'folder-resolver-open',
        folderNames: ['resolver-open'],
      },
      {
        name: 'folder-resource-open-open',
        folderNames: ['resource-open-open'],
      },
      {
        name: 'folder-resource-open',
        folderNames: ['resource-open'],
      },
      {
        name: 'folder-review-open-open',
        folderNames: ['review-open-open'],
      },
      {
        name: 'folder-review-open',
        folderNames: ['review-open'],
      },
      {
        name: 'folder-robot-open-open',
        folderNames: ['robot-open-open'],
      },
      {
        name: 'folder-robot-open',
        folderNames: ['robot-open'],
      },
      {
        name: 'folder-root-open-open',
        folderNames: ['root-open-open'],
      },
      {
        name: 'folder-root-open',
        folderNames: ['root-open'],
      },
      {
        name: 'folder-root',
        folderNames: ['root'],
      },
      {
        name: 'folder-routes-open-open',
        folderNames: ['routes-open-open'],
      },
      {
        name: 'folder-routes-open',
        folderNames: ['routes-open'],
      },
      {
        name: 'folder-rpm-open',
        folderNames: ['rpm-open'],
      },
      {
        name: 'folder-rpm',
        folderNames: ['rpm'],
      },
      {
        name: 'folder-ruby-open',
        folderNames: ['ruby-open'],
      },
      {
        name: 'folder-ruby',
        folderNames: ['ruby'],
      },
      {
        name: 'folder-rules-open-open',
        folderNames: ['rules-open-open'],
      },
      {
        name: 'folder-rules-open',
        folderNames: ['rules-open'],
      },
      {
        name: 'folder-rust-open-open',
        folderNames: ['rust-open-open'],
      },
      {
        name: 'folder-rust-open',
        folderNames: ['rust-open'],
      },
      {
        name: 'folder-safebox-lock-open',
        folderNames: ['safebox-lock-open'],
      },
      {
        name: 'folder-safebox-lock',
        folderNames: ['safebox-lock'],
      },
      {
        name: 'folder-salt-open-open',
        folderNames: ['salt-open-open'],
      },
      {
        name: 'folder-salt-open',
        folderNames: ['salt-open'],
      },
      {
        name: 'folder-sandbox-open-open',
        folderNames: ['sandbox-open-open'],
      },
      {
        name: 'folder-sandbox-open',
        folderNames: ['sandbox-open'],
      },
      {
        name: 'folder-sass-open-open',
        folderNames: ['sass-open-open'],
      },
      {
        name: 'folder-sass-open',
        folderNames: ['sass-open'],
      },
      {
        name: 'folder-scala-open-open',
        folderNames: ['scala-open-open'],
      },
      {
        name: 'folder-scala-open',
        folderNames: ['scala-open'],
      },
      {
        name: 'folder-scons-open-open',
        folderNames: ['scons-open-open'],
      },
      {
        name: 'folder-scons-open',
        folderNames: ['scons-open'],
      },
      {
        name: 'folder-scrap-open.clone-open',
        folderNames: ['scrap-open.clone-open'],
      },
      {
        name: 'folder-scrap-open.clone',
        folderNames: ['scrap-open.clone'],
      },
      {
        name: 'folder-scrap.clone-open',
        folderNames: ['scrap.clone-open'],
      },
      {
        name: 'folder-scrap.clone',
        folderNames: ['scrap.clone'],
      },
      {
        name: 'folder-scratch-open',
        folderNames: ['scratch-open'],
      },
      {
        name: 'folder-scratch',
        folderNames: ['scratch'],
      },
      {
        name: 'folder-scripts-open-open',
        folderNames: ['scripts-open-open'],
      },
      {
        name: 'folder-scripts-open',
        folderNames: ['scripts-open'],
      },
      {
        name: 'folder-secure-open-open',
        folderNames: ['secure-open-open'],
      },
      {
        name: 'folder-secure-open',
        folderNames: ['secure-open'],
      },
      {
        name: 'folder-seeders-open-open',
        folderNames: ['seeders-open-open'],
      },
      {
        name: 'folder-seeders-open',
        folderNames: ['seeders-open'],
      },
      {
        name: 'folder-server-open-open',
        folderNames: ['server-open-open'],
      },
      {
        name: 'folder-server-open',
        folderNames: ['server-open'],
      },
      {
        name: 'folder-serverless-open-open',
        folderNames: ['serverless-open-open'],
      },
      {
        name: 'folder-serverless-open',
        folderNames: ['serverless-open'],
      },
      {
        name: 'folder-shader-open-open',
        folderNames: ['shader-open-open'],
      },
      {
        name: 'folder-shader-open',
        folderNames: ['shader-open'],
      },
      {
        name: 'folder-shared-open-open',
        folderNames: ['shared-open-open'],
      },
      {
        name: 'folder-shared-open',
        folderNames: ['shared-open'],
      },
      {
        name: 'folder-sign-open',
        folderNames: ['sign-open'],
      },
      {
        name: 'folder-sign',
        folderNames: ['sign'],
      },
      {
        name: 'folder-simulations-open-open',
        folderNames: ['simulations-open-open'],
      },
      {
        name: 'folder-simulations-open',
        folderNames: ['simulations-open'],
      },
      {
        name: 'folder-skeletons-open',
        folderNames: ['skeletons-open'],
      },
      {
        name: 'folder-skeletons',
        folderNames: ['skeletons'],
      },
      {
        name: 'folder-skills-open-open',
        folderNames: ['skills-open-open'],
      },
      {
        name: 'folder-skills-open',
        folderNames: ['skills-open'],
      },
      {
        name: 'folder-snapcraft-open-open',
        folderNames: ['snapcraft-open-open'],
      },
      {
        name: 'folder-snapcraft-open',
        folderNames: ['snapcraft-open'],
      },
      {
        name: 'folder-snippet-open-open',
        folderNames: ['snippet-open-open'],
      },
      {
        name: 'folder-snippet-open',
        folderNames: ['snippet-open'],
      },
      {
        name: 'folder-src-open-open',
        folderNames: ['src-open-open'],
      },
      {
        name: 'folder-src-open',
        folderNames: ['src-open'],
      },
      {
        name: 'folder-src-tauri-open-open',
        folderNames: ['src-tauri-open-open'],
      },
      {
        name: 'folder-src-tauri-open',
        folderNames: ['src-tauri-open'],
      },
      {
        name: 'folder-sso-open',
        folderNames: ['sso-open'],
      },
      {
        name: 'folder-sso',
        folderNames: ['sso'],
      },
      {
        name: 'folder-sst-open',
        folderNames: ['sst-open'],
      },
      {
        name: 'folder-sst',
        folderNames: ['sst'],
      },
      {
        name: 'folder-stack-mask-open',
        folderNames: ['stack-mask-open'],
      },
      {
        name: 'folder-stack-mask',
        folderNames: ['stack-mask'],
      },
      {
        name: 'folder-stack-open-open',
        folderNames: ['stack-open-open'],
      },
      {
        name: 'folder-stack-open',
        folderNames: ['stack-open'],
      },
      {
        name: 'folder-stash-open',
        folderNames: ['stash-open'],
      },
      {
        name: 'folder-stash',
        folderNames: ['stash'],
      },
      {
        name: 'folder-steam-open',
        folderNames: ['steam-open'],
      },
      {
        name: 'folder-steam',
        folderNames: ['steam'],
      },
      {
        name: 'folder-stencil-open-open',
        folderNames: ['stencil-open-open'],
      },
      {
        name: 'folder-stencil-open',
        folderNames: ['stencil-open'],
      },
      {
        name: 'folder-storage-open',
        folderNames: ['storage-open'],
      },
      {
        name: 'folder-storage',
        folderNames: ['storage'],
      },
      {
        name: 'folder-store-open-open',
        folderNames: ['store-open-open'],
      },
      {
        name: 'folder-store-open',
        folderNames: ['store-open'],
      },
      {
        name: 'folder-storyblok-open',
        folderNames: ['storyblok-open'],
      },
      {
        name: 'folder-storyblok',
        folderNames: ['storyblok'],
      },
      {
        name: 'folder-storybook-open-open',
        folderNames: ['storybook-open-open'],
      },
      {
        name: 'folder-storybook-open',
        folderNames: ['storybook-open'],
      },
      {
        name: 'folder-strategy-open',
        folderNames: ['strategy-open'],
      },
      {
        name: 'folder-strategy',
        folderNames: ['strategy'],
      },
      {
        name: 'folder-styled-open',
        folderNames: ['styled-open'],
      },
      {
        name: 'folder-styled',
        folderNames: ['styled'],
      },
      {
        name: 'folder-stylus-open-open',
        folderNames: ['stylus-open-open'],
      },
      {
        name: 'folder-stylus-open',
        folderNames: ['stylus-open'],
      },
      {
        name: 'folder-sublime-open-open',
        folderNames: ['sublime-open-open'],
      },
      {
        name: 'folder-sublime-open',
        folderNames: ['sublime-open'],
      },
      {
        name: 'folder-supabase-open-open',
        folderNames: ['supabase-open-open'],
      },
      {
        name: 'folder-supabase-open',
        folderNames: ['supabase-open'],
      },
      {
        name: 'folder-svelte-open-open',
        folderNames: ['svelte-open-open'],
      },
      {
        name: 'folder-svelte-open',
        folderNames: ['svelte-open'],
      },
      {
        name: 'folder-svg-open-open',
        folderNames: ['svg-open-open'],
      },
      {
        name: 'folder-svg-open',
        folderNames: ['svg-open'],
      },
      {
        name: 'folder-svn-open',
        folderNames: ['svn-open'],
      },
      {
        name: 'folder-svn',
        folderNames: ['svn'],
      },
      {
        name: 'folder-swagger-open',
        folderNames: ['swagger-open'],
      },
      {
        name: 'folder-swagger',
        folderNames: ['swagger'],
      },
      {
        name: 'folder-sync-open',
        folderNames: ['sync-open'],
      },
      {
        name: 'folder-sync',
        folderNames: ['sync'],
      },
      {
        name: 'folder-syncthing-open',
        folderNames: ['syncthing-open'],
      },
      {
        name: 'folder-syncthing',
        folderNames: ['syncthing'],
      },
      {
        name: 'folder-syntax-open-open',
        folderNames: ['syntax-open-open'],
      },
      {
        name: 'folder-syntax-open',
        folderNames: ['syntax-open'],
      },
      {
        name: 'folder-table-open',
        folderNames: ['table-open'],
      },
      {
        name: 'folder-table',
        folderNames: ['table'],
      },
      {
        name: 'folder-tag-open',
        folderNames: ['tag-open'],
      },
      {
        name: 'folder-tag',
        folderNames: ['tag'],
      },
      {
        name: 'folder-tar-open',
        folderNames: ['tar-open'],
      },
      {
        name: 'folder-tar',
        folderNames: ['tar'],
      },
      {
        name: 'folder-target-open-open',
        folderNames: ['target-open-open'],
      },
      {
        name: 'folder-target-open',
        folderNames: ['target-open'],
      },
      {
        name: 'folder-taskfile-open-open',
        folderNames: ['taskfile-open-open'],
      },
      {
        name: 'folder-taskfile-open',
        folderNames: ['taskfile-open'],
      },
      {
        name: 'folder-tasks-open-open',
        folderNames: ['tasks-open-open'],
      },
      {
        name: 'folder-tasks-open',
        folderNames: ['tasks-open'],
      },
      {
        name: 'folder-tauri-open',
        folderNames: ['tauri-open'],
      },
      {
        name: 'folder-tauri',
        folderNames: ['tauri'],
      },
      {
        name: 'folder-teal-activities-open',
        folderNames: ['teal-activities-open'],
      },
      {
        name: 'folder-teal-activities',
        folderNames: ['teal-activities'],
      },
      {
        name: 'folder-teal-android-open',
        folderNames: ['teal-android-open'],
      },
      {
        name: 'folder-teal-android',
        folderNames: ['teal-android'],
      },
      {
        name: 'folder-teal-apple-open',
        folderNames: ['teal-apple-open'],
      },
      {
        name: 'folder-teal-apple',
        folderNames: ['teal-apple'],
      },
      {
        name: 'folder-teal-applications-open',
        folderNames: ['teal-applications-open'],
      },
      {
        name: 'folder-teal-applications',
        folderNames: ['teal-applications'],
      },
      {
        name: 'folder-teal-arduino-open',
        folderNames: ['teal-arduino-open'],
      },
      {
        name: 'folder-teal-arduino',
        folderNames: ['teal-arduino'],
      },
      {
        name: 'folder-teal-backup-open',
        folderNames: ['teal-backup-open'],
      },
      {
        name: 'folder-teal-backup',
        folderNames: ['teal-backup'],
      },
      {
        name: 'folder-teal-books-open',
        folderNames: ['teal-books-open'],
      },
      {
        name: 'folder-teal-books',
        folderNames: ['teal-books'],
      },
      {
        name: 'folder-teal-cd-open',
        folderNames: ['teal-cd-open'],
      },
      {
        name: 'folder-teal-cd',
        folderNames: ['teal-cd'],
      },
      {
        name: 'folder-teal-code-open',
        folderNames: ['teal-code-open'],
      },
      {
        name: 'folder-teal-code',
        folderNames: ['teal-code'],
      },
      {
        name: 'folder-teal-desktop-open',
        folderNames: ['teal-desktop-open'],
      },
      {
        name: 'folder-teal-desktop',
        folderNames: ['teal-desktop'],
      },
      {
        name: 'folder-teal-development-open',
        folderNames: ['teal-development-open'],
      },
      {
        name: 'folder-teal-development',
        folderNames: ['teal-development'],
      },
      {
        name: 'folder-teal-docker-open',
        folderNames: ['teal-docker-open'],
      },
      {
        name: 'folder-teal-docker',
        folderNames: ['teal-docker'],
      },
      {
        name: 'folder-teal-documents-open-open',
        folderNames: ['teal-documents-open-open'],
      },
      {
        name: 'folder-teal-documents-open',
        folderNames: ['teal-documents-open'],
      },
      {
        name: 'folder-teal-documents',
        folderNames: ['teal-documents'],
      },
      {
        name: 'folder-teal-download-open-open',
        folderNames: ['teal-download-open-open'],
      },
      {
        name: 'folder-teal-download-open',
        folderNames: ['teal-download-open'],
      },
      {
        name: 'folder-teal-download',
        folderNames: ['teal-download'],
      },
      {
        name: 'folder-teal-downloads-open',
        folderNames: ['teal-downloads-open'],
      },
      {
        name: 'folder-teal-downloads',
        folderNames: ['teal-downloads'],
      },
      {
        name: 'folder-teal-drag-accept-open',
        folderNames: ['teal-drag-accept-open'],
      },
      {
        name: 'folder-teal-drag-accept',
        folderNames: ['teal-drag-accept'],
      },
      {
        name: 'folder-teal-dropbox-open',
        folderNames: ['teal-dropbox-open'],
      },
      {
        name: 'folder-teal-dropbox',
        folderNames: ['teal-dropbox'],
      },
      {
        name: 'folder-teal-favorites-open',
        folderNames: ['teal-favorites-open'],
      },
      {
        name: 'folder-teal-favorites',
        folderNames: ['teal-favorites'],
      },
      {
        name: 'folder-teal-games-open',
        folderNames: ['teal-games-open'],
      },
      {
        name: 'folder-teal-games',
        folderNames: ['teal-games'],
      },
      {
        name: 'folder-teal-git-open',
        folderNames: ['teal-git-open'],
      },
      {
        name: 'folder-teal-git',
        folderNames: ['teal-git'],
      },
      {
        name: 'folder-teal-github-open',
        folderNames: ['teal-github-open'],
      },
      {
        name: 'folder-teal-github',
        folderNames: ['teal-github'],
      },
      {
        name: 'folder-teal-gitlab-open',
        folderNames: ['teal-gitlab-open'],
      },
      {
        name: 'folder-teal-gitlab',
        folderNames: ['teal-gitlab'],
      },
      {
        name: 'folder-teal-gnome-open',
        folderNames: ['teal-gnome-open'],
      },
      {
        name: 'folder-teal-gnome',
        folderNames: ['teal-gnome'],
      },
      {
        name: 'folder-teal-google-drive-open',
        folderNames: ['teal-google-drive-open'],
      },
      {
        name: 'folder-teal-google-drive',
        folderNames: ['teal-google-drive'],
      },
      {
        name: 'folder-teal-image-people-open',
        folderNames: ['teal-image-people-open'],
      },
      {
        name: 'folder-teal-image-people',
        folderNames: ['teal-image-people'],
      },
      {
        name: 'folder-teal-important-open',
        folderNames: ['teal-important-open'],
      },
      {
        name: 'folder-teal-important',
        folderNames: ['teal-important'],
      },
      {
        name: 'folder-teal-java-open',
        folderNames: ['teal-java-open'],
      },
      {
        name: 'folder-teal-java',
        folderNames: ['teal-java'],
      },
      {
        name: 'folder-teal-kde-open',
        folderNames: ['teal-kde-open'],
      },
      {
        name: 'folder-teal-kde',
        folderNames: ['teal-kde'],
      },
      {
        name: 'folder-teal-linux-open',
        folderNames: ['teal-linux-open'],
      },
      {
        name: 'folder-teal-linux',
        folderNames: ['teal-linux'],
      },
      {
        name: 'folder-teal-locked-open',
        folderNames: ['teal-locked-open'],
      },
      {
        name: 'folder-teal-locked',
        folderNames: ['teal-locked'],
      },
      {
        name: 'folder-teal-mail-cloud-open',
        folderNames: ['teal-mail-cloud-open'],
      },
      {
        name: 'folder-teal-mail-cloud',
        folderNames: ['teal-mail-cloud'],
      },
      {
        name: 'folder-teal-mail-open',
        folderNames: ['teal-mail-open'],
      },
      {
        name: 'folder-teal-mail',
        folderNames: ['teal-mail'],
      },
      {
        name: 'folder-teal-mega-open',
        folderNames: ['teal-mega-open'],
      },
      {
        name: 'folder-teal-mega',
        folderNames: ['teal-mega'],
      },
      {
        name: 'folder-teal-meocloud-open',
        folderNames: ['teal-meocloud-open'],
      },
      {
        name: 'folder-teal-meocloud',
        folderNames: ['teal-meocloud'],
      },
      {
        name: 'folder-teal-music-open-open',
        folderNames: ['teal-music-open-open'],
      },
      {
        name: 'folder-teal-music-open',
        folderNames: ['teal-music-open'],
      },
      {
        name: 'folder-teal-music',
        folderNames: ['teal-music'],
      },
      {
        name: 'folder-teal-network-open',
        folderNames: ['teal-network-open'],
      },
      {
        name: 'folder-teal-network',
        folderNames: ['teal-network'],
      },
      {
        name: 'folder-teal-nextcloud-open',
        folderNames: ['teal-nextcloud-open'],
      },
      {
        name: 'folder-teal-nextcloud',
        folderNames: ['teal-nextcloud'],
      },
      {
        name: 'folder-teal-notes-open',
        folderNames: ['teal-notes-open'],
      },
      {
        name: 'folder-teal-notes',
        folderNames: ['teal-notes'],
      },
      {
        name: 'folder-teal-obsidian-open',
        folderNames: ['teal-obsidian-open'],
      },
      {
        name: 'folder-teal-obsidian',
        folderNames: ['teal-obsidian'],
      },
      {
        name: 'folder-teal-onedrive-open',
        folderNames: ['teal-onedrive-open'],
      },
      {
        name: 'folder-teal-onedrive',
        folderNames: ['teal-onedrive'],
      },
      {
        name: 'folder-teal-open-open',
        folderNames: ['teal-open-open'],
      },
      {
        name: 'folder-teal-open',
        folderNames: ['teal-open'],
      },
      {
        name: 'folder-teal-owncloud-open',
        folderNames: ['teal-owncloud-open'],
      },
      {
        name: 'folder-teal-owncloud',
        folderNames: ['teal-owncloud'],
      },
      {
        name: 'folder-teal-pcloud-open',
        folderNames: ['teal-pcloud-open'],
      },
      {
        name: 'folder-teal-pcloud',
        folderNames: ['teal-pcloud'],
      },
      {
        name: 'folder-teal-photo-open',
        folderNames: ['teal-photo-open'],
      },
      {
        name: 'folder-teal-photo',
        folderNames: ['teal-photo'],
      },
      {
        name: 'folder-teal-pictures-open-open',
        folderNames: ['teal-pictures-open-open'],
      },
      {
        name: 'folder-teal-pictures-open',
        folderNames: ['teal-pictures-open'],
      },
      {
        name: 'folder-teal-pictures',
        folderNames: ['teal-pictures'],
      },
      {
        name: 'folder-teal-print-open',
        folderNames: ['teal-print-open'],
      },
      {
        name: 'folder-teal-print',
        folderNames: ['teal-print'],
      },
      {
        name: 'folder-teal-private-open',
        folderNames: ['teal-private-open'],
      },
      {
        name: 'folder-teal-private',
        folderNames: ['teal-private'],
      },
      {
        name: 'folder-teal-projects-open',
        folderNames: ['teal-projects-open'],
      },
      {
        name: 'folder-teal-projects',
        folderNames: ['teal-projects'],
      },
      {
        name: 'folder-teal-public-open',
        folderNames: ['teal-public-open'],
      },
      {
        name: 'folder-teal-public',
        folderNames: ['teal-public'],
      },
      {
        name: 'folder-teal-publicshare-open-open',
        folderNames: ['teal-publicshare-open-open'],
      },
      {
        name: 'folder-teal-publicshare-open',
        folderNames: ['teal-publicshare-open'],
      },
      {
        name: 'folder-teal-remote-open-open',
        folderNames: ['teal-remote-open-open'],
      },
      {
        name: 'folder-teal-remote-open',
        folderNames: ['teal-remote-open'],
      },
      {
        name: 'folder-teal-remote',
        folderNames: ['teal-remote'],
      },
      {
        name: 'folder-teal-script-open',
        folderNames: ['teal-script-open'],
      },
      {
        name: 'folder-teal-script',
        folderNames: ['teal-script'],
      },
      {
        name: 'folder-teal-snap-open',
        folderNames: ['teal-snap-open'],
      },
      {
        name: 'folder-teal-snap',
        folderNames: ['teal-snap'],
      },
      {
        name: 'folder-teal-steam-open',
        folderNames: ['teal-steam-open'],
      },
      {
        name: 'folder-teal-steam',
        folderNames: ['teal-steam'],
      },
      {
        name: 'folder-teal-sync-open',
        folderNames: ['teal-sync-open'],
      },
      {
        name: 'folder-teal-sync',
        folderNames: ['teal-sync'],
      },
      {
        name: 'folder-teal-syncthing-open',
        folderNames: ['teal-syncthing-open'],
      },
      {
        name: 'folder-teal-syncthing',
        folderNames: ['teal-syncthing'],
      },
      {
        name: 'folder-teal-systemd-open',
        folderNames: ['teal-systemd-open'],
      },
      {
        name: 'folder-teal-systemd',
        folderNames: ['teal-systemd'],
      },
      {
        name: 'folder-teal-tar-open',
        folderNames: ['teal-tar-open'],
      },
      {
        name: 'folder-teal-tar',
        folderNames: ['teal-tar'],
      },
      {
        name: 'folder-teal-templates-open-open',
        folderNames: ['teal-templates-open-open'],
      },
      {
        name: 'folder-teal-templates-open',
        folderNames: ['teal-templates-open'],
      },
      {
        name: 'folder-teal-templates',
        folderNames: ['teal-templates'],
      },
      {
        name: 'folder-teal-torrent-open',
        folderNames: ['teal-torrent-open'],
      },
      {
        name: 'folder-teal-torrent',
        folderNames: ['teal-torrent'],
      },
      {
        name: 'folder-teal-unlocked-open',
        folderNames: ['teal-unlocked-open'],
      },
      {
        name: 'folder-teal-unlocked',
        folderNames: ['teal-unlocked'],
      },
      {
        name: 'folder-teal-vbox-open',
        folderNames: ['teal-vbox-open'],
      },
      {
        name: 'folder-teal-vbox',
        folderNames: ['teal-vbox'],
      },
      {
        name: 'folder-teal-video-open',
        folderNames: ['teal-video-open'],
      },
      {
        name: 'folder-teal-video',
        folderNames: ['teal-video'],
      },
      {
        name: 'folder-teal-videos-open-open',
        folderNames: ['teal-videos-open-open'],
      },
      {
        name: 'folder-teal-videos-open',
        folderNames: ['teal-videos-open'],
      },
      {
        name: 'folder-teal-videos',
        folderNames: ['teal-videos'],
      },
      {
        name: 'folder-teal-visiting-open',
        folderNames: ['teal-visiting-open'],
      },
      {
        name: 'folder-teal-visiting',
        folderNames: ['teal-visiting'],
      },
      {
        name: 'folder-teal-wifi-open',
        folderNames: ['teal-wifi-open'],
      },
      {
        name: 'folder-teal-wifi',
        folderNames: ['teal-wifi'],
      },
      {
        name: 'folder-teal-wine-open',
        folderNames: ['teal-wine-open'],
      },
      {
        name: 'folder-teal-wine',
        folderNames: ['teal-wine'],
      },
      {
        name: 'folder-teal-yandex-disk-open',
        folderNames: ['teal-yandex-disk-open'],
      },
      {
        name: 'folder-teal-yandex-disk',
        folderNames: ['teal-yandex-disk'],
      },
      {
        name: 'folder-teal',
        folderNames: ['teal'],
      },
      {
        name: 'folder-tech-open',
        folderNames: ['tech-open'],
      },
      {
        name: 'folder-tech',
        folderNames: ['tech'],
      },
      {
        name: 'folder-television-open-open',
        folderNames: ['television-open-open'],
      },
      {
        name: 'folder-television-open',
        folderNames: ['television-open'],
      },
      {
        name: 'folder-temp-open-open',
        folderNames: ['temp-open-open'],
      },
      {
        name: 'folder-temp-open',
        folderNames: ['temp-open'],
      },
      {
        name: 'folder-template-open-open',
        folderNames: ['template-open-open'],
      },
      {
        name: 'folder-template-open',
        folderNames: ['template-open'],
      },
      {
        name: 'folder-templates-open-open',
        folderNames: ['templates-open-open'],
      },
      {
        name: 'folder-templates-open',
        folderNames: ['templates-open'],
      },
      {
        name: 'folder-terraform-open-open',
        folderNames: ['terraform-open-open'],
      },
      {
        name: 'folder-terraform-open',
        folderNames: ['terraform-open'],
      },
      {
        name: 'folder-test-open-open',
        folderNames: ['test-open-open'],
      },
      {
        name: 'folder-test-open',
        folderNames: ['test-open'],
      },
      {
        name: 'folder-text-open',
        folderNames: ['text-open'],
      },
      {
        name: 'folder-text',
        folderNames: ['text'],
      },
      {
        name: 'folder-textmate-open',
        folderNames: ['textmate-open'],
      },
      {
        name: 'folder-textmate',
        folderNames: ['textmate'],
      },
      {
        name: 'folder-theme-open-open',
        folderNames: ['theme-open-open'],
      },
      {
        name: 'folder-theme-open',
        folderNames: ['theme-open'],
      },
      {
        name: 'folder-toc-open-open',
        folderNames: ['toc-open-open'],
      },
      {
        name: 'folder-toc-open',
        folderNames: ['toc-open'],
      },
      {
        name: 'folder-tools-open-open',
        folderNames: ['tools-open-open'],
      },
      {
        name: 'folder-tools-open',
        folderNames: ['tools-open'],
      },
      {
        name: 'folder-torrent-open',
        folderNames: ['torrent-open'],
      },
      {
        name: 'folder-torrent',
        folderNames: ['torrent'],
      },
      {
        name: 'folder-totvs-open',
        folderNames: ['totvs-open'],
      },
      {
        name: 'folder-totvs',
        folderNames: ['totvs'],
      },
      {
        name: 'folder-trait-open',
        folderNames: ['trait-open'],
      },
      {
        name: 'folder-trait',
        folderNames: ['trait'],
      },
      {
        name: 'folder-trash-open-open',
        folderNames: ['trash-open-open'],
      },
      {
        name: 'folder-trash-open',
        folderNames: ['trash-open'],
      },
      {
        name: 'folder-trigger-open-open',
        folderNames: ['trigger-open-open'],
      },
      {
        name: 'folder-trigger-open',
        folderNames: ['trigger-open'],
      },
      {
        name: 'folder-turborepo-open-open',
        folderNames: ['turborepo-open-open'],
      },
      {
        name: 'folder-turborepo-open',
        folderNames: ['turborepo-open'],
      },
      {
        name: 'folder-txt-open',
        folderNames: ['txt-open'],
      },
      {
        name: 'folder-txt',
        folderNames: ['txt'],
      },
      {
        name: 'folder-typescript-open-open',
        folderNames: ['typescript-open-open'],
      },
      {
        name: 'folder-typescript-open',
        folderNames: ['typescript-open'],
      },
      {
        name: 'folder-ui-open-open',
        folderNames: ['ui-open-open'],
      },
      {
        name: 'folder-ui-open',
        folderNames: ['ui-open'],
      },
      {
        name: 'folder-unity-open-open',
        folderNames: ['unity-open-open'],
      },
      {
        name: 'folder-unity-open',
        folderNames: ['unity-open'],
      },
      {
        name: 'folder-unlocked-open',
        folderNames: ['unlocked-open'],
      },
      {
        name: 'folder-unlocked',
        folderNames: ['unlocked'],
      },
      {
        name: 'folder-update-open-open',
        folderNames: ['update-open-open'],
      },
      {
        name: 'folder-update-open',
        folderNames: ['update-open'],
      },
      {
        name: 'folder-upload-open-open',
        folderNames: ['upload-open-open'],
      },
      {
        name: 'folder-upload-open',
        folderNames: ['upload-open'],
      },
      {
        name: 'folder-users-open',
        folderNames: ['users-open'],
      },
      {
        name: 'folder-users',
        folderNames: [
          'users',
          'user',
          'User',
          'leads',
          'Leads',
          'supportcontacts',
          'SupportContacts',
        ],
      },
      {
        name: 'folder-utils-open-open',
        folderNames: ['utils-open-open'],
      },
      {
        name: 'folder-utils-open',
        folderNames: ['utils-open'],
      },
      {
        name: 'folder-vagrant-open',
        folderNames: ['vagrant-open'],
      },
      {
        name: 'folder-vagrant',
        folderNames: ['vagrant'],
      },
      {
        name: 'folder-vbox-open',
        folderNames: ['vbox-open'],
      },
      {
        name: 'folder-vbox',
        folderNames: ['vbox'],
      },
      {
        name: 'folder-vercel-open-open',
        folderNames: ['vercel-open-open'],
      },
      {
        name: 'folder-vercel-open',
        folderNames: ['vercel-open'],
      },
      {
        name: 'folder-verdaccio-open-open',
        folderNames: ['verdaccio-open-open'],
      },
      {
        name: 'folder-verdaccio-open',
        folderNames: ['verdaccio-open'],
      },
      {
        name: 'folder-video-open-open',
        folderNames: ['video-open-open'],
      },
      {
        name: 'folder-video-open',
        folderNames: ['video-open'],
      },
      {
        name: 'folder-video-stack-open',
        folderNames: ['video-stack-open'],
      },
      {
        name: 'folder-video-stack',
        folderNames: ['video-stack'],
      },
      {
        name: 'folder-videocamera-open',
        folderNames: ['videocamera-open'],
      },
      {
        name: 'folder-videocamera',
        folderNames: ['videocamera'],
      },
      {
        name: 'folder-videos-open-open',
        folderNames: ['videos-open-open'],
      },
      {
        name: 'folder-videos-open',
        folderNames: ['videos-open'],
      },
      {
        name: 'folder-viewmodel-open',
        folderNames: ['viewmodel-open'],
      },
      {
        name: 'folder-viewmodel',
        folderNames: ['viewmodel'],
      },
      {
        name: 'folder-views-open-open',
        folderNames: ['views-open-open'],
      },
      {
        name: 'folder-views-open',
        folderNames: ['views-open'],
      },
      {
        name: 'folder-vim-open',
        folderNames: ['vim-open'],
      },
      {
        name: 'folder-vim',
        folderNames: ['vim'],
      },
      {
        name: 'folder-violet-activities-open',
        folderNames: ['violet-activities-open'],
      },
      {
        name: 'folder-violet-activities',
        folderNames: ['violet-activities'],
      },
      {
        name: 'folder-violet-android-open',
        folderNames: ['violet-android-open'],
      },
      {
        name: 'folder-violet-android',
        folderNames: ['violet-android'],
      },
      {
        name: 'folder-violet-apple-open',
        folderNames: ['violet-apple-open'],
      },
      {
        name: 'folder-violet-apple',
        folderNames: ['violet-apple'],
      },
      {
        name: 'folder-violet-applications-open',
        folderNames: ['violet-applications-open'],
      },
      {
        name: 'folder-violet-applications',
        folderNames: ['violet-applications'],
      },
      {
        name: 'folder-violet-arduino-open',
        folderNames: ['violet-arduino-open'],
      },
      {
        name: 'folder-violet-arduino',
        folderNames: ['violet-arduino'],
      },
      {
        name: 'folder-violet-backup-open',
        folderNames: ['violet-backup-open'],
      },
      {
        name: 'folder-violet-backup',
        folderNames: ['violet-backup'],
      },
      {
        name: 'folder-violet-books-open',
        folderNames: ['violet-books-open'],
      },
      {
        name: 'folder-violet-books',
        folderNames: ['violet-books'],
      },
      {
        name: 'folder-violet-cd-open',
        folderNames: ['violet-cd-open'],
      },
      {
        name: 'folder-violet-cd',
        folderNames: ['violet-cd'],
      },
      {
        name: 'folder-violet-code-open',
        folderNames: ['violet-code-open'],
      },
      {
        name: 'folder-violet-code',
        folderNames: ['violet-code'],
      },
      {
        name: 'folder-violet-desktop-open',
        folderNames: ['violet-desktop-open'],
      },
      {
        name: 'folder-violet-desktop',
        folderNames: ['violet-desktop'],
      },
      {
        name: 'folder-violet-development-open',
        folderNames: ['violet-development-open'],
      },
      {
        name: 'folder-violet-development',
        folderNames: ['violet-development'],
      },
      {
        name: 'folder-violet-docker-open',
        folderNames: ['violet-docker-open'],
      },
      {
        name: 'folder-violet-docker',
        folderNames: ['violet-docker'],
      },
      {
        name: 'folder-violet-documents-open-open',
        folderNames: ['violet-documents-open-open'],
      },
      {
        name: 'folder-violet-documents-open',
        folderNames: ['violet-documents-open'],
      },
      {
        name: 'folder-violet-documents',
        folderNames: ['violet-documents'],
      },
      {
        name: 'folder-violet-download-open-open',
        folderNames: ['violet-download-open-open'],
      },
      {
        name: 'folder-violet-download-open',
        folderNames: ['violet-download-open'],
      },
      {
        name: 'folder-violet-download',
        folderNames: ['violet-download'],
      },
      {
        name: 'folder-violet-downloads-open',
        folderNames: ['violet-downloads-open'],
      },
      {
        name: 'folder-violet-downloads',
        folderNames: ['violet-downloads'],
      },
      {
        name: 'folder-violet-drag-accept-open',
        folderNames: ['violet-drag-accept-open'],
      },
      {
        name: 'folder-violet-drag-accept',
        folderNames: ['violet-drag-accept'],
      },
      {
        name: 'folder-violet-dropbox-open',
        folderNames: ['violet-dropbox-open'],
      },
      {
        name: 'folder-violet-dropbox',
        folderNames: ['violet-dropbox'],
      },
      {
        name: 'folder-violet-favorites-open',
        folderNames: ['violet-favorites-open'],
      },
      {
        name: 'folder-violet-favorites',
        folderNames: ['violet-favorites'],
      },
      {
        name: 'folder-violet-games-open',
        folderNames: ['violet-games-open'],
      },
      {
        name: 'folder-violet-games',
        folderNames: ['violet-games'],
      },
      {
        name: 'folder-violet-git-open',
        folderNames: ['violet-git-open'],
      },
      {
        name: 'folder-violet-git',
        folderNames: ['violet-git'],
      },
      {
        name: 'folder-violet-github-open',
        folderNames: ['violet-github-open'],
      },
      {
        name: 'folder-violet-github',
        folderNames: ['violet-github'],
      },
      {
        name: 'folder-violet-gitlab-open',
        folderNames: ['violet-gitlab-open'],
      },
      {
        name: 'folder-violet-gitlab',
        folderNames: ['violet-gitlab'],
      },
      {
        name: 'folder-violet-gnome-open',
        folderNames: ['violet-gnome-open'],
      },
      {
        name: 'folder-violet-gnome',
        folderNames: ['violet-gnome'],
      },
      {
        name: 'folder-violet-google-drive-open',
        folderNames: ['violet-google-drive-open'],
      },
      {
        name: 'folder-violet-google-drive',
        folderNames: ['violet-google-drive'],
      },
      {
        name: 'folder-violet-image-people-open',
        folderNames: ['violet-image-people-open'],
      },
      {
        name: 'folder-violet-image-people',
        folderNames: ['violet-image-people'],
      },
      {
        name: 'folder-violet-important-open',
        folderNames: ['violet-important-open'],
      },
      {
        name: 'folder-violet-important',
        folderNames: ['violet-important'],
      },
      {
        name: 'folder-violet-java-open',
        folderNames: ['violet-java-open'],
      },
      {
        name: 'folder-violet-java',
        folderNames: ['violet-java'],
      },
      {
        name: 'folder-violet-kde-open',
        folderNames: ['violet-kde-open'],
      },
      {
        name: 'folder-violet-kde',
        folderNames: ['violet-kde'],
      },
      {
        name: 'folder-violet-linux-open',
        folderNames: ['violet-linux-open'],
      },
      {
        name: 'folder-violet-linux',
        folderNames: ['violet-linux'],
      },
      {
        name: 'folder-violet-locked-open',
        folderNames: ['violet-locked-open'],
      },
      {
        name: 'folder-violet-locked',
        folderNames: ['violet-locked'],
      },
      {
        name: 'folder-violet-mail-cloud-open',
        folderNames: ['violet-mail-cloud-open'],
      },
      {
        name: 'folder-violet-mail-cloud',
        folderNames: ['violet-mail-cloud'],
      },
      {
        name: 'folder-violet-mail-open',
        folderNames: ['violet-mail-open'],
      },
      {
        name: 'folder-violet-mail',
        folderNames: ['violet-mail'],
      },
      {
        name: 'folder-violet-mega-open',
        folderNames: ['violet-mega-open'],
      },
      {
        name: 'folder-violet-mega',
        folderNames: ['violet-mega'],
      },
      {
        name: 'folder-violet-meocloud-open',
        folderNames: ['violet-meocloud-open'],
      },
      {
        name: 'folder-violet-meocloud',
        folderNames: ['violet-meocloud'],
      },
      {
        name: 'folder-violet-music-open-open',
        folderNames: ['violet-music-open-open'],
      },
      {
        name: 'folder-violet-music-open',
        folderNames: ['violet-music-open'],
      },
      {
        name: 'folder-violet-music',
        folderNames: ['violet-music'],
      },
      {
        name: 'folder-violet-network-open',
        folderNames: ['violet-network-open'],
      },
      {
        name: 'folder-violet-network',
        folderNames: ['violet-network'],
      },
      {
        name: 'folder-violet-nextcloud-open',
        folderNames: ['violet-nextcloud-open'],
      },
      {
        name: 'folder-violet-nextcloud',
        folderNames: ['violet-nextcloud'],
      },
      {
        name: 'folder-violet-notes-open',
        folderNames: ['violet-notes-open'],
      },
      {
        name: 'folder-violet-notes',
        folderNames: ['violet-notes'],
      },
      {
        name: 'folder-violet-obsidian-open',
        folderNames: ['violet-obsidian-open'],
      },
      {
        name: 'folder-violet-obsidian',
        folderNames: ['violet-obsidian'],
      },
      {
        name: 'folder-violet-onedrive-open',
        folderNames: ['violet-onedrive-open'],
      },
      {
        name: 'folder-violet-onedrive',
        folderNames: ['violet-onedrive'],
      },
      {
        name: 'folder-violet-open-open',
        folderNames: ['violet-open-open'],
      },
      {
        name: 'folder-violet-open',
        folderNames: ['violet-open'],
      },
      {
        name: 'folder-violet-owncloud-open',
        folderNames: ['violet-owncloud-open'],
      },
      {
        name: 'folder-violet-owncloud',
        folderNames: ['violet-owncloud'],
      },
      {
        name: 'folder-violet-pcloud-open',
        folderNames: ['violet-pcloud-open'],
      },
      {
        name: 'folder-violet-pcloud',
        folderNames: ['violet-pcloud'],
      },
      {
        name: 'folder-violet-photo-open',
        folderNames: ['violet-photo-open'],
      },
      {
        name: 'folder-violet-photo',
        folderNames: ['violet-photo'],
      },
      {
        name: 'folder-violet-pictures-open-open',
        folderNames: ['violet-pictures-open-open'],
      },
      {
        name: 'folder-violet-pictures-open',
        folderNames: ['violet-pictures-open'],
      },
      {
        name: 'folder-violet-pictures',
        folderNames: ['violet-pictures'],
      },
      {
        name: 'folder-violet-print-open',
        folderNames: ['violet-print-open'],
      },
      {
        name: 'folder-violet-print',
        folderNames: ['violet-print'],
      },
      {
        name: 'folder-violet-private-open',
        folderNames: ['violet-private-open'],
      },
      {
        name: 'folder-violet-private',
        folderNames: ['violet-private'],
      },
      {
        name: 'folder-violet-projects-open',
        folderNames: ['violet-projects-open'],
      },
      {
        name: 'folder-violet-projects',
        folderNames: ['violet-projects'],
      },
      {
        name: 'folder-violet-public-open',
        folderNames: ['violet-public-open'],
      },
      {
        name: 'folder-violet-public',
        folderNames: ['violet-public'],
      },
      {
        name: 'folder-violet-publicshare-open-open',
        folderNames: ['violet-publicshare-open-open'],
      },
      {
        name: 'folder-violet-publicshare-open',
        folderNames: ['violet-publicshare-open'],
      },
      {
        name: 'folder-violet-remote-open-open',
        folderNames: ['violet-remote-open-open'],
      },
      {
        name: 'folder-violet-remote-open',
        folderNames: ['violet-remote-open'],
      },
      {
        name: 'folder-violet-remote',
        folderNames: ['violet-remote'],
      },
      {
        name: 'folder-violet-script-open',
        folderNames: ['violet-script-open'],
      },
      {
        name: 'folder-violet-script',
        folderNames: ['violet-script'],
      },
      {
        name: 'folder-violet-snap-open',
        folderNames: ['violet-snap-open'],
      },
      {
        name: 'folder-violet-snap',
        folderNames: ['violet-snap'],
      },
      {
        name: 'folder-violet-steam-open',
        folderNames: ['violet-steam-open'],
      },
      {
        name: 'folder-violet-steam',
        folderNames: ['violet-steam'],
      },
      {
        name: 'folder-violet-sync-open',
        folderNames: ['violet-sync-open'],
      },
      {
        name: 'folder-violet-sync',
        folderNames: ['violet-sync'],
      },
      {
        name: 'folder-violet-syncthing-open',
        folderNames: ['violet-syncthing-open'],
      },
      {
        name: 'folder-violet-syncthing',
        folderNames: ['violet-syncthing'],
      },
      {
        name: 'folder-violet-systemd-open',
        folderNames: ['violet-systemd-open'],
      },
      {
        name: 'folder-violet-systemd',
        folderNames: ['violet-systemd'],
      },
      {
        name: 'folder-violet-tar-open',
        folderNames: ['violet-tar-open'],
      },
      {
        name: 'folder-violet-tar',
        folderNames: ['violet-tar'],
      },
      {
        name: 'folder-violet-templates-open-open',
        folderNames: ['violet-templates-open-open'],
      },
      {
        name: 'folder-violet-templates-open',
        folderNames: ['violet-templates-open'],
      },
      {
        name: 'folder-violet-templates',
        folderNames: ['violet-templates'],
      },
      {
        name: 'folder-violet-torrent-open',
        folderNames: ['violet-torrent-open'],
      },
      {
        name: 'folder-violet-torrent',
        folderNames: ['violet-torrent'],
      },
      {
        name: 'folder-violet-unlocked-open',
        folderNames: ['violet-unlocked-open'],
      },
      {
        name: 'folder-violet-unlocked',
        folderNames: ['violet-unlocked'],
      },
      {
        name: 'folder-violet-vbox-open',
        folderNames: ['violet-vbox-open'],
      },
      {
        name: 'folder-violet-vbox',
        folderNames: ['violet-vbox'],
      },
      {
        name: 'folder-violet-video-open',
        folderNames: ['violet-video-open'],
      },
      {
        name: 'folder-violet-video',
        folderNames: ['violet-video'],
      },
      {
        name: 'folder-violet-videos-open-open',
        folderNames: ['violet-videos-open-open'],
      },
      {
        name: 'folder-violet-videos-open',
        folderNames: ['violet-videos-open'],
      },
      {
        name: 'folder-violet-videos',
        folderNames: ['violet-videos'],
      },
      {
        name: 'folder-violet-visiting-open',
        folderNames: ['violet-visiting-open'],
      },
      {
        name: 'folder-violet-visiting',
        folderNames: ['violet-visiting'],
      },
      {
        name: 'folder-violet-wifi-open',
        folderNames: ['violet-wifi-open'],
      },
      {
        name: 'folder-violet-wifi',
        folderNames: ['violet-wifi'],
      },
      {
        name: 'folder-violet-wine-open',
        folderNames: ['violet-wine-open'],
      },
      {
        name: 'folder-violet-wine',
        folderNames: ['violet-wine'],
      },
      {
        name: 'folder-violet-yandex-disk-open',
        folderNames: ['violet-yandex-disk-open'],
      },
      {
        name: 'folder-violet-yandex-disk',
        folderNames: ['violet-yandex-disk'],
      },
      {
        name: 'folder-violet',
        folderNames: ['violet'],
      },
      {
        name: 'folder-visiting-open',
        folderNames: ['visiting-open'],
      },
      {
        name: 'folder-visiting',
        folderNames: ['visiting'],
      },
      {
        name: 'folder-vitepress-open',
        folderNames: ['vitepress-open'],
      },
      {
        name: 'folder-vitepress',
        folderNames: ['vitepress'],
      },
      {
        name: 'folder-vm-open-open',
        folderNames: ['vm-open-open'],
      },
      {
        name: 'folder-vm-open',
        folderNames: ['vm-open'],
      },
      {
        name: 'folder-vs-open',
        folderNames: ['vs-open'],
      },
      {
        name: 'folder-vs',
        folderNames: ['vs'],
      },
      {
        name: 'folder-vscode-open-open',
        folderNames: ['vscode-open-open'],
      },
      {
        name: 'folder-vscode-open',
        folderNames: ['vscode-open'],
      },
      {
        name: 'folder-vue-directives-open-open',
        folderNames: ['vue-directives-open-open'],
      },
      {
        name: 'folder-vue-directives-open',
        folderNames: ['vue-directives-open'],
      },
      {
        name: 'folder-vue-open-open',
        folderNames: ['vue-open-open'],
      },
      {
        name: 'folder-vue-open',
        folderNames: ['vue-open'],
      },
      {
        name: 'folder-vuepress-open-open',
        folderNames: ['vuepress-open-open'],
      },
      {
        name: 'folder-vuepress-open',
        folderNames: ['vuepress-open'],
      },
      {
        name: 'folder-vuex-open',
        folderNames: ['vuex-open'],
      },
      {
        name: 'folder-vuex-store-open-open',
        folderNames: ['vuex-store-open-open'],
      },
      {
        name: 'folder-vuex-store-open',
        folderNames: ['vuex-store-open'],
      },
      {
        name: 'folder-vuex',
        folderNames: ['vuex'],
      },
      {
        name: 'folder-wakatime-open-open',
        folderNames: ['wakatime-open-open'],
      },
      {
        name: 'folder-wakatime-open',
        folderNames: ['wakatime-open'],
      },
      {
        name: 'folder-webcomponents-open',
        folderNames: ['webcomponents-open'],
      },
      {
        name: 'folder-webcomponents',
        folderNames: ['webcomponents'],
      },
      {
        name: 'folder-webpack-open-open',
        folderNames: ['webpack-open-open'],
      },
      {
        name: 'folder-webpack-open',
        folderNames: ['webpack-open'],
      },
      {
        name: 'folder-white-activities-open',
        folderNames: ['white-activities-open'],
      },
      {
        name: 'folder-white-activities',
        folderNames: ['white-activities'],
      },
      {
        name: 'folder-white-android-open',
        folderNames: ['white-android-open'],
      },
      {
        name: 'folder-white-android',
        folderNames: ['white-android'],
      },
      {
        name: 'folder-white-apple-open',
        folderNames: ['white-apple-open'],
      },
      {
        name: 'folder-white-apple',
        folderNames: ['white-apple'],
      },
      {
        name: 'folder-white-applications-open',
        folderNames: ['white-applications-open'],
      },
      {
        name: 'folder-white-applications',
        folderNames: ['white-applications'],
      },
      {
        name: 'folder-white-arduino-open',
        folderNames: ['white-arduino-open'],
      },
      {
        name: 'folder-white-arduino',
        folderNames: ['white-arduino'],
      },
      {
        name: 'folder-white-backup-open',
        folderNames: ['white-backup-open'],
      },
      {
        name: 'folder-white-backup',
        folderNames: ['white-backup'],
      },
      {
        name: 'folder-white-books-open',
        folderNames: ['white-books-open'],
      },
      {
        name: 'folder-white-books',
        folderNames: ['white-books'],
      },
      {
        name: 'folder-white-cd-open',
        folderNames: ['white-cd-open'],
      },
      {
        name: 'folder-white-cd',
        folderNames: ['white-cd'],
      },
      {
        name: 'folder-white-code-open',
        folderNames: ['white-code-open'],
      },
      {
        name: 'folder-white-code',
        folderNames: ['white-code'],
      },
      {
        name: 'folder-white-desktop-open',
        folderNames: ['white-desktop-open'],
      },
      {
        name: 'folder-white-desktop',
        folderNames: ['white-desktop'],
      },
      {
        name: 'folder-white-development-open',
        folderNames: ['white-development-open'],
      },
      {
        name: 'folder-white-development',
        folderNames: ['white-development'],
      },
      {
        name: 'folder-white-docker-open',
        folderNames: ['white-docker-open'],
      },
      {
        name: 'folder-white-docker',
        folderNames: ['white-docker'],
      },
      {
        name: 'folder-white-documents-open-open',
        folderNames: ['white-documents-open-open'],
      },
      {
        name: 'folder-white-documents-open',
        folderNames: ['white-documents-open'],
      },
      {
        name: 'folder-white-documents',
        folderNames: ['white-documents'],
      },
      {
        name: 'folder-white-download-open-open',
        folderNames: ['white-download-open-open'],
      },
      {
        name: 'folder-white-download-open',
        folderNames: ['white-download-open'],
      },
      {
        name: 'folder-white-download',
        folderNames: ['white-download'],
      },
      {
        name: 'folder-white-downloads-open',
        folderNames: ['white-downloads-open'],
      },
      {
        name: 'folder-white-downloads',
        folderNames: ['white-downloads'],
      },
      {
        name: 'folder-white-drag-accept-open',
        folderNames: ['white-drag-accept-open'],
      },
      {
        name: 'folder-white-drag-accept',
        folderNames: ['white-drag-accept'],
      },
      {
        name: 'folder-white-dropbox-open',
        folderNames: ['white-dropbox-open'],
      },
      {
        name: 'folder-white-dropbox',
        folderNames: ['white-dropbox'],
      },
      {
        name: 'folder-white-favorites-open',
        folderNames: ['white-favorites-open'],
      },
      {
        name: 'folder-white-favorites',
        folderNames: ['white-favorites'],
      },
      {
        name: 'folder-white-games-open',
        folderNames: ['white-games-open'],
      },
      {
        name: 'folder-white-games',
        folderNames: ['white-games'],
      },
      {
        name: 'folder-white-git-open',
        folderNames: ['white-git-open'],
      },
      {
        name: 'folder-white-git',
        folderNames: ['white-git'],
      },
      {
        name: 'folder-white-github-open',
        folderNames: ['white-github-open'],
      },
      {
        name: 'folder-white-github',
        folderNames: ['white-github'],
      },
      {
        name: 'folder-white-gitlab-open',
        folderNames: ['white-gitlab-open'],
      },
      {
        name: 'folder-white-gitlab',
        folderNames: ['white-gitlab'],
      },
      {
        name: 'folder-white-gnome-open',
        folderNames: ['white-gnome-open'],
      },
      {
        name: 'folder-white-gnome',
        folderNames: ['white-gnome'],
      },
      {
        name: 'folder-white-google-drive-open',
        folderNames: ['white-google-drive-open'],
      },
      {
        name: 'folder-white-google-drive',
        folderNames: ['white-google-drive'],
      },
      {
        name: 'folder-white-image-people-open',
        folderNames: ['white-image-people-open'],
      },
      {
        name: 'folder-white-image-people',
        folderNames: ['white-image-people'],
      },
      {
        name: 'folder-white-important-open',
        folderNames: ['white-important-open'],
      },
      {
        name: 'folder-white-important',
        folderNames: ['white-important'],
      },
      {
        name: 'folder-white-java-open',
        folderNames: ['white-java-open'],
      },
      {
        name: 'folder-white-java',
        folderNames: ['white-java'],
      },
      {
        name: 'folder-white-kde-open',
        folderNames: ['white-kde-open'],
      },
      {
        name: 'folder-white-kde',
        folderNames: ['white-kde'],
      },
      {
        name: 'folder-white-linux-open',
        folderNames: ['white-linux-open'],
      },
      {
        name: 'folder-white-linux',
        folderNames: ['white-linux'],
      },
      {
        name: 'folder-white-locked-open',
        folderNames: ['white-locked-open'],
      },
      {
        name: 'folder-white-locked',
        folderNames: ['white-locked'],
      },
      {
        name: 'folder-white-mail-cloud-open',
        folderNames: ['white-mail-cloud-open'],
      },
      {
        name: 'folder-white-mail-cloud',
        folderNames: ['white-mail-cloud'],
      },
      {
        name: 'folder-white-mail-open',
        folderNames: ['white-mail-open'],
      },
      {
        name: 'folder-white-mail',
        folderNames: ['white-mail'],
      },
      {
        name: 'folder-white-mega-open',
        folderNames: ['white-mega-open'],
      },
      {
        name: 'folder-white-mega',
        folderNames: ['white-mega'],
      },
      {
        name: 'folder-white-meocloud-open',
        folderNames: ['white-meocloud-open'],
      },
      {
        name: 'folder-white-meocloud',
        folderNames: ['white-meocloud'],
      },
      {
        name: 'folder-white-music-open-open',
        folderNames: ['white-music-open-open'],
      },
      {
        name: 'folder-white-music-open',
        folderNames: ['white-music-open'],
      },
      {
        name: 'folder-white-music',
        folderNames: ['white-music'],
      },
      {
        name: 'folder-white-network-open',
        folderNames: ['white-network-open'],
      },
      {
        name: 'folder-white-network',
        folderNames: ['white-network'],
      },
      {
        name: 'folder-white-nextcloud-open',
        folderNames: ['white-nextcloud-open'],
      },
      {
        name: 'folder-white-nextcloud',
        folderNames: ['white-nextcloud'],
      },
      {
        name: 'folder-white-notes-open',
        folderNames: ['white-notes-open'],
      },
      {
        name: 'folder-white-notes',
        folderNames: ['white-notes'],
      },
      {
        name: 'folder-white-obsidian-open',
        folderNames: ['white-obsidian-open'],
      },
      {
        name: 'folder-white-obsidian',
        folderNames: ['white-obsidian'],
      },
      {
        name: 'folder-white-onedrive-open',
        folderNames: ['white-onedrive-open'],
      },
      {
        name: 'folder-white-onedrive',
        folderNames: ['white-onedrive'],
      },
      {
        name: 'folder-white-open-open',
        folderNames: ['white-open-open'],
      },
      {
        name: 'folder-white-open',
        folderNames: ['white-open'],
      },
      {
        name: 'folder-white-owncloud-open',
        folderNames: ['white-owncloud-open'],
      },
      {
        name: 'folder-white-owncloud',
        folderNames: ['white-owncloud'],
      },
      {
        name: 'folder-white-pcloud-open',
        folderNames: ['white-pcloud-open'],
      },
      {
        name: 'folder-white-pcloud',
        folderNames: ['white-pcloud'],
      },
      {
        name: 'folder-white-photo-open',
        folderNames: ['white-photo-open'],
      },
      {
        name: 'folder-white-photo',
        folderNames: ['white-photo'],
      },
      {
        name: 'folder-white-pictures-open-open',
        folderNames: ['white-pictures-open-open'],
      },
      {
        name: 'folder-white-pictures-open',
        folderNames: ['white-pictures-open'],
      },
      {
        name: 'folder-white-pictures',
        folderNames: ['white-pictures'],
      },
      {
        name: 'folder-white-print-open',
        folderNames: ['white-print-open'],
      },
      {
        name: 'folder-white-print',
        folderNames: ['white-print'],
      },
      {
        name: 'folder-white-private-open',
        folderNames: ['white-private-open'],
      },
      {
        name: 'folder-white-private',
        folderNames: ['white-private'],
      },
      {
        name: 'folder-white-projects-open',
        folderNames: ['white-projects-open'],
      },
      {
        name: 'folder-white-projects',
        folderNames: ['white-projects'],
      },
      {
        name: 'folder-white-public-open',
        folderNames: ['white-public-open'],
      },
      {
        name: 'folder-white-public',
        folderNames: ['white-public'],
      },
      {
        name: 'folder-white-publicshare-open-open',
        folderNames: ['white-publicshare-open-open'],
      },
      {
        name: 'folder-white-publicshare-open',
        folderNames: ['white-publicshare-open'],
      },
      {
        name: 'folder-white-remote-open-open',
        folderNames: ['white-remote-open-open'],
      },
      {
        name: 'folder-white-remote-open',
        folderNames: ['white-remote-open'],
      },
      {
        name: 'folder-white-remote',
        folderNames: ['white-remote'],
      },
      {
        name: 'folder-white-script-open',
        folderNames: ['white-script-open'],
      },
      {
        name: 'folder-white-script',
        folderNames: ['white-script'],
      },
      {
        name: 'folder-white-snap-open',
        folderNames: ['white-snap-open'],
      },
      {
        name: 'folder-white-snap',
        folderNames: ['white-snap'],
      },
      {
        name: 'folder-white-steam-open',
        folderNames: ['white-steam-open'],
      },
      {
        name: 'folder-white-steam',
        folderNames: ['white-steam'],
      },
      {
        name: 'folder-white-sync-open',
        folderNames: ['white-sync-open'],
      },
      {
        name: 'folder-white-sync',
        folderNames: ['white-sync'],
      },
      {
        name: 'folder-white-syncthing-open',
        folderNames: ['white-syncthing-open'],
      },
      {
        name: 'folder-white-syncthing',
        folderNames: ['white-syncthing'],
      },
      {
        name: 'folder-white-systemd-open',
        folderNames: ['white-systemd-open'],
      },
      {
        name: 'folder-white-systemd',
        folderNames: ['white-systemd'],
      },
      {
        name: 'folder-white-tar-open',
        folderNames: ['white-tar-open'],
      },
      {
        name: 'folder-white-tar',
        folderNames: ['white-tar'],
      },
      {
        name: 'folder-white-templates-open-open',
        folderNames: ['white-templates-open-open'],
      },
      {
        name: 'folder-white-templates-open',
        folderNames: ['white-templates-open'],
      },
      {
        name: 'folder-white-templates',
        folderNames: ['white-templates'],
      },
      {
        name: 'folder-white-torrent-open',
        folderNames: ['white-torrent-open'],
      },
      {
        name: 'folder-white-torrent',
        folderNames: ['white-torrent'],
      },
      {
        name: 'folder-white-unlocked-open',
        folderNames: ['white-unlocked-open'],
      },
      {
        name: 'folder-white-unlocked',
        folderNames: ['white-unlocked'],
      },
      {
        name: 'folder-white-vbox-open',
        folderNames: ['white-vbox-open'],
      },
      {
        name: 'folder-white-vbox',
        folderNames: ['white-vbox'],
      },
      {
        name: 'folder-white-video-open',
        folderNames: ['white-video-open'],
      },
      {
        name: 'folder-white-video',
        folderNames: ['white-video'],
      },
      {
        name: 'folder-white-videos-open-open',
        folderNames: ['white-videos-open-open'],
      },
      {
        name: 'folder-white-videos-open',
        folderNames: ['white-videos-open'],
      },
      {
        name: 'folder-white-videos',
        folderNames: ['white-videos'],
      },
      {
        name: 'folder-white-visiting-open',
        folderNames: ['white-visiting-open'],
      },
      {
        name: 'folder-white-visiting',
        folderNames: ['white-visiting'],
      },
      {
        name: 'folder-white-wifi-open',
        folderNames: ['white-wifi-open'],
      },
      {
        name: 'folder-white-wifi',
        folderNames: ['white-wifi'],
      },
      {
        name: 'folder-white-wine-open',
        folderNames: ['white-wine-open'],
      },
      {
        name: 'folder-white-wine',
        folderNames: ['white-wine'],
      },
      {
        name: 'folder-white-yandex-disk-open',
        folderNames: ['white-yandex-disk-open'],
      },
      {
        name: 'folder-white-yandex-disk',
        folderNames: ['white-yandex-disk'],
      },
      {
        name: 'folder-white',
        folderNames: ['white'],
      },
      {
        name: 'folder-wifi-open',
        folderNames: ['wifi-open'],
      },
      {
        name: 'folder-wifi',
        folderNames: ['wifi'],
      },
      {
        name: 'folder-windows-open-open',
        folderNames: ['windows-open-open'],
      },
      {
        name: 'folder-windows-open',
        folderNames: ['windows-open'],
      },
      {
        name: 'folder-wine-open',
        folderNames: ['wine-open'],
      },
      {
        name: 'folder-wine',
        folderNames: ['wine'],
      },
      {
        name: 'folder-woocommerce-open',
        folderNames: ['woocommerce-open'],
      },
      {
        name: 'folder-woocommerce',
        folderNames: ['woocommerce'],
      },
      {
        name: 'folder-woodpecker-open',
        folderNames: ['woodpecker-open'],
      },
      {
        name: 'folder-woodpecker',
        folderNames: ['woodpecker'],
      },
      {
        name: 'folder-wordpress-open-open',
        folderNames: ['wordpress-open-open'],
      },
      {
        name: 'folder-wordpress-open',
        folderNames: ['wordpress-open'],
      },
      {
        name: 'folder-xstate-open',
        folderNames: ['xstate-open'],
      },
      {
        name: 'folder-xstate',
        folderNames: ['xstate'],
      },
      {
        name: 'folder-yandex-disk-open',
        folderNames: ['yandex-disk-open'],
      },
      {
        name: 'folder-yandex-disk',
        folderNames: ['yandex-disk'],
      },
      {
        name: 'folder-yarn-open-open',
        folderNames: ['yarn-open-open'],
      },
      {
        name: 'folder-yarn-open',
        folderNames: ['yarn-open'],
      },
      {
        name: 'folder-yaru-activities-open',
        folderNames: ['yaru-activities-open'],
      },
      {
        name: 'folder-yaru-activities',
        folderNames: ['yaru-activities'],
      },
      {
        name: 'folder-yaru-android-open',
        folderNames: ['yaru-android-open'],
      },
      {
        name: 'folder-yaru-android',
        folderNames: ['yaru-android'],
      },
      {
        name: 'folder-yaru-apple-open',
        folderNames: ['yaru-apple-open'],
      },
      {
        name: 'folder-yaru-apple',
        folderNames: ['yaru-apple'],
      },
      {
        name: 'folder-yaru-applications-open',
        folderNames: ['yaru-applications-open'],
      },
      {
        name: 'folder-yaru-applications',
        folderNames: ['yaru-applications'],
      },
      {
        name: 'folder-yaru-arduino-open',
        folderNames: ['yaru-arduino-open'],
      },
      {
        name: 'folder-yaru-arduino',
        folderNames: ['yaru-arduino'],
      },
      {
        name: 'folder-yaru-backup-open',
        folderNames: ['yaru-backup-open'],
      },
      {
        name: 'folder-yaru-backup',
        folderNames: ['yaru-backup'],
      },
      {
        name: 'folder-yaru-books-open',
        folderNames: ['yaru-books-open'],
      },
      {
        name: 'folder-yaru-books',
        folderNames: ['yaru-books'],
      },
      {
        name: 'folder-yaru-cd-open',
        folderNames: ['yaru-cd-open'],
      },
      {
        name: 'folder-yaru-cd',
        folderNames: ['yaru-cd'],
      },
      {
        name: 'folder-yaru-code-open',
        folderNames: ['yaru-code-open'],
      },
      {
        name: 'folder-yaru-code',
        folderNames: ['yaru-code'],
      },
      {
        name: 'folder-yaru-desktop-open',
        folderNames: ['yaru-desktop-open'],
      },
      {
        name: 'folder-yaru-desktop',
        folderNames: ['yaru-desktop'],
      },
      {
        name: 'folder-yaru-development-open',
        folderNames: ['yaru-development-open'],
      },
      {
        name: 'folder-yaru-development',
        folderNames: ['yaru-development'],
      },
      {
        name: 'folder-yaru-docker-open',
        folderNames: ['yaru-docker-open'],
      },
      {
        name: 'folder-yaru-docker',
        folderNames: ['yaru-docker'],
      },
      {
        name: 'folder-yaru-documents-open-open',
        folderNames: ['yaru-documents-open-open'],
      },
      {
        name: 'folder-yaru-documents-open',
        folderNames: ['yaru-documents-open'],
      },
      {
        name: 'folder-yaru-documents',
        folderNames: ['yaru-documents'],
      },
      {
        name: 'folder-yaru-download-open-open',
        folderNames: ['yaru-download-open-open'],
      },
      {
        name: 'folder-yaru-download-open',
        folderNames: ['yaru-download-open'],
      },
      {
        name: 'folder-yaru-download',
        folderNames: ['yaru-download'],
      },
      {
        name: 'folder-yaru-downloads-open',
        folderNames: ['yaru-downloads-open'],
      },
      {
        name: 'folder-yaru-downloads',
        folderNames: ['yaru-downloads'],
      },
      {
        name: 'folder-yaru-drag-accept-open',
        folderNames: ['yaru-drag-accept-open'],
      },
      {
        name: 'folder-yaru-drag-accept',
        folderNames: ['yaru-drag-accept'],
      },
      {
        name: 'folder-yaru-dropbox-open',
        folderNames: ['yaru-dropbox-open'],
      },
      {
        name: 'folder-yaru-dropbox',
        folderNames: ['yaru-dropbox'],
      },
      {
        name: 'folder-yaru-favorites-open',
        folderNames: ['yaru-favorites-open'],
      },
      {
        name: 'folder-yaru-favorites',
        folderNames: ['yaru-favorites'],
      },
      {
        name: 'folder-yaru-games-open',
        folderNames: ['yaru-games-open'],
      },
      {
        name: 'folder-yaru-games',
        folderNames: ['yaru-games'],
      },
      {
        name: 'folder-yaru-git-open',
        folderNames: ['yaru-git-open'],
      },
      {
        name: 'folder-yaru-git',
        folderNames: ['yaru-git'],
      },
      {
        name: 'folder-yaru-github-open',
        folderNames: ['yaru-github-open'],
      },
      {
        name: 'folder-yaru-github',
        folderNames: ['yaru-github'],
      },
      {
        name: 'folder-yaru-gitlab-open',
        folderNames: ['yaru-gitlab-open'],
      },
      {
        name: 'folder-yaru-gitlab',
        folderNames: ['yaru-gitlab'],
      },
      {
        name: 'folder-yaru-gnome-open',
        folderNames: ['yaru-gnome-open'],
      },
      {
        name: 'folder-yaru-gnome',
        folderNames: ['yaru-gnome'],
      },
      {
        name: 'folder-yaru-google-drive-open',
        folderNames: ['yaru-google-drive-open'],
      },
      {
        name: 'folder-yaru-google-drive',
        folderNames: ['yaru-google-drive'],
      },
      {
        name: 'folder-yaru-image-people-open',
        folderNames: ['yaru-image-people-open'],
      },
      {
        name: 'folder-yaru-image-people',
        folderNames: ['yaru-image-people'],
      },
      {
        name: 'folder-yaru-important-open',
        folderNames: ['yaru-important-open'],
      },
      {
        name: 'folder-yaru-important',
        folderNames: ['yaru-important'],
      },
      {
        name: 'folder-yaru-java-open',
        folderNames: ['yaru-java-open'],
      },
      {
        name: 'folder-yaru-java',
        folderNames: ['yaru-java'],
      },
      {
        name: 'folder-yaru-kde-open',
        folderNames: ['yaru-kde-open'],
      },
      {
        name: 'folder-yaru-kde',
        folderNames: ['yaru-kde'],
      },
      {
        name: 'folder-yaru-linux-open',
        folderNames: ['yaru-linux-open'],
      },
      {
        name: 'folder-yaru-linux',
        folderNames: ['yaru-linux'],
      },
      {
        name: 'folder-yaru-locked-open',
        folderNames: ['yaru-locked-open'],
      },
      {
        name: 'folder-yaru-locked',
        folderNames: ['yaru-locked'],
      },
      {
        name: 'folder-yaru-mail-cloud-open',
        folderNames: ['yaru-mail-cloud-open'],
      },
      {
        name: 'folder-yaru-mail-cloud',
        folderNames: ['yaru-mail-cloud'],
      },
      {
        name: 'folder-yaru-mail-open',
        folderNames: ['yaru-mail-open'],
      },
      {
        name: 'folder-yaru-mail',
        folderNames: ['yaru-mail'],
      },
      {
        name: 'folder-yaru-mega-open',
        folderNames: ['yaru-mega-open'],
      },
      {
        name: 'folder-yaru-mega',
        folderNames: ['yaru-mega'],
      },
      {
        name: 'folder-yaru-meocloud-open',
        folderNames: ['yaru-meocloud-open'],
      },
      {
        name: 'folder-yaru-meocloud',
        folderNames: ['yaru-meocloud'],
      },
      {
        name: 'folder-yaru-music-open-open',
        folderNames: ['yaru-music-open-open'],
      },
      {
        name: 'folder-yaru-music-open',
        folderNames: ['yaru-music-open'],
      },
      {
        name: 'folder-yaru-music',
        folderNames: ['yaru-music'],
      },
      {
        name: 'folder-yaru-network-open',
        folderNames: ['yaru-network-open'],
      },
      {
        name: 'folder-yaru-network',
        folderNames: ['yaru-network'],
      },
      {
        name: 'folder-yaru-nextcloud-open',
        folderNames: ['yaru-nextcloud-open'],
      },
      {
        name: 'folder-yaru-nextcloud',
        folderNames: ['yaru-nextcloud'],
      },
      {
        name: 'folder-yaru-notes-open',
        folderNames: ['yaru-notes-open'],
      },
      {
        name: 'folder-yaru-notes',
        folderNames: ['yaru-notes'],
      },
      {
        name: 'folder-yaru-obsidian-open',
        folderNames: ['yaru-obsidian-open'],
      },
      {
        name: 'folder-yaru-obsidian',
        folderNames: ['yaru-obsidian'],
      },
      {
        name: 'folder-yaru-onedrive-open',
        folderNames: ['yaru-onedrive-open'],
      },
      {
        name: 'folder-yaru-onedrive',
        folderNames: ['yaru-onedrive'],
      },
      {
        name: 'folder-yaru-open-open',
        folderNames: ['yaru-open-open'],
      },
      {
        name: 'folder-yaru-open',
        folderNames: ['yaru-open'],
      },
      {
        name: 'folder-yaru-owncloud-open',
        folderNames: ['yaru-owncloud-open'],
      },
      {
        name: 'folder-yaru-owncloud',
        folderNames: ['yaru-owncloud'],
      },
      {
        name: 'folder-yaru-pcloud-open',
        folderNames: ['yaru-pcloud-open'],
      },
      {
        name: 'folder-yaru-pcloud',
        folderNames: ['yaru-pcloud'],
      },
      {
        name: 'folder-yaru-photo-open',
        folderNames: ['yaru-photo-open'],
      },
      {
        name: 'folder-yaru-photo',
        folderNames: ['yaru-photo'],
      },
      {
        name: 'folder-yaru-pictures-open-open',
        folderNames: ['yaru-pictures-open-open'],
      },
      {
        name: 'folder-yaru-pictures-open',
        folderNames: ['yaru-pictures-open'],
      },
      {
        name: 'folder-yaru-pictures',
        folderNames: ['yaru-pictures'],
      },
      {
        name: 'folder-yaru-print-open',
        folderNames: ['yaru-print-open'],
      },
      {
        name: 'folder-yaru-print',
        folderNames: ['yaru-print'],
      },
      {
        name: 'folder-yaru-private-open',
        folderNames: ['yaru-private-open'],
      },
      {
        name: 'folder-yaru-private',
        folderNames: ['yaru-private'],
      },
      {
        name: 'folder-yaru-projects-open',
        folderNames: ['yaru-projects-open'],
      },
      {
        name: 'folder-yaru-projects',
        folderNames: ['yaru-projects'],
      },
      {
        name: 'folder-yaru-public-open',
        folderNames: ['yaru-public-open'],
      },
      {
        name: 'folder-yaru-public',
        folderNames: ['yaru-public'],
      },
      {
        name: 'folder-yaru-publicshare-open-open',
        folderNames: ['yaru-publicshare-open-open'],
      },
      {
        name: 'folder-yaru-publicshare-open',
        folderNames: ['yaru-publicshare-open'],
      },
      {
        name: 'folder-yaru-remote-open-open',
        folderNames: ['yaru-remote-open-open'],
      },
      {
        name: 'folder-yaru-remote-open',
        folderNames: ['yaru-remote-open'],
      },
      {
        name: 'folder-yaru-remote',
        folderNames: ['yaru-remote'],
      },
      {
        name: 'folder-yaru-script-open',
        folderNames: ['yaru-script-open'],
      },
      {
        name: 'folder-yaru-script',
        folderNames: ['yaru-script'],
      },
      {
        name: 'folder-yaru-snap-open',
        folderNames: ['yaru-snap-open'],
      },
      {
        name: 'folder-yaru-snap',
        folderNames: ['yaru-snap'],
      },
      {
        name: 'folder-yaru-steam-open',
        folderNames: ['yaru-steam-open'],
      },
      {
        name: 'folder-yaru-steam',
        folderNames: ['yaru-steam'],
      },
      {
        name: 'folder-yaru-sync-open',
        folderNames: ['yaru-sync-open'],
      },
      {
        name: 'folder-yaru-sync',
        folderNames: ['yaru-sync'],
      },
      {
        name: 'folder-yaru-syncthing-open',
        folderNames: ['yaru-syncthing-open'],
      },
      {
        name: 'folder-yaru-syncthing',
        folderNames: ['yaru-syncthing'],
      },
      {
        name: 'folder-yaru-systemd-open',
        folderNames: ['yaru-systemd-open'],
      },
      {
        name: 'folder-yaru-systemd',
        folderNames: ['yaru-systemd'],
      },
      {
        name: 'folder-yaru-tar-open',
        folderNames: ['yaru-tar-open'],
      },
      {
        name: 'folder-yaru-tar',
        folderNames: ['yaru-tar'],
      },
      {
        name: 'folder-yaru-templates-open-open',
        folderNames: ['yaru-templates-open-open'],
      },
      {
        name: 'folder-yaru-templates-open',
        folderNames: ['yaru-templates-open'],
      },
      {
        name: 'folder-yaru-templates',
        folderNames: ['yaru-templates'],
      },
      {
        name: 'folder-yaru-torrent-open',
        folderNames: ['yaru-torrent-open'],
      },
      {
        name: 'folder-yaru-torrent',
        folderNames: ['yaru-torrent'],
      },
      {
        name: 'folder-yaru-unlocked-open',
        folderNames: ['yaru-unlocked-open'],
      },
      {
        name: 'folder-yaru-unlocked',
        folderNames: ['yaru-unlocked'],
      },
      {
        name: 'folder-yaru-vbox-open',
        folderNames: ['yaru-vbox-open'],
      },
      {
        name: 'folder-yaru-vbox',
        folderNames: ['yaru-vbox'],
      },
      {
        name: 'folder-yaru-video-open',
        folderNames: ['yaru-video-open'],
      },
      {
        name: 'folder-yaru-video',
        folderNames: ['yaru-video'],
      },
      {
        name: 'folder-yaru-videos-open-open',
        folderNames: ['yaru-videos-open-open'],
      },
      {
        name: 'folder-yaru-videos-open',
        folderNames: ['yaru-videos-open'],
      },
      {
        name: 'folder-yaru-videos',
        folderNames: ['yaru-videos'],
      },
      {
        name: 'folder-yaru-visiting-open',
        folderNames: ['yaru-visiting-open'],
      },
      {
        name: 'folder-yaru-visiting',
        folderNames: ['yaru-visiting'],
      },
      {
        name: 'folder-yaru-wifi-open',
        folderNames: ['yaru-wifi-open'],
      },
      {
        name: 'folder-yaru-wifi',
        folderNames: ['yaru-wifi'],
      },
      {
        name: 'folder-yaru-wine-open',
        folderNames: ['yaru-wine-open'],
      },
      {
        name: 'folder-yaru-wine',
        folderNames: ['yaru-wine'],
      },
      {
        name: 'folder-yaru-yandex-disk-open',
        folderNames: ['yaru-yandex-disk-open'],
      },
      {
        name: 'folder-yaru-yandex-disk',
        folderNames: ['yaru-yandex-disk'],
      },
      {
        name: 'folder-yaru',
        folderNames: ['yaru'],
      },
      {
        name: 'folder-yellow-activities-open',
        folderNames: ['yellow-activities-open'],
      },
      {
        name: 'folder-yellow-activities',
        folderNames: ['yellow-activities'],
      },
      {
        name: 'folder-yellow-android-open',
        folderNames: ['yellow-android-open'],
      },
      {
        name: 'folder-yellow-android',
        folderNames: ['yellow-android'],
      },
      {
        name: 'folder-yellow-apple-open',
        folderNames: ['yellow-apple-open'],
      },
      {
        name: 'folder-yellow-apple',
        folderNames: ['yellow-apple'],
      },
      {
        name: 'folder-yellow-applications-open',
        folderNames: ['yellow-applications-open'],
      },
      {
        name: 'folder-yellow-applications',
        folderNames: ['yellow-applications'],
      },
      {
        name: 'folder-yellow-arduino-open',
        folderNames: ['yellow-arduino-open'],
      },
      {
        name: 'folder-yellow-arduino',
        folderNames: ['yellow-arduino'],
      },
      {
        name: 'folder-yellow-backup-open',
        folderNames: ['yellow-backup-open'],
      },
      {
        name: 'folder-yellow-backup',
        folderNames: ['yellow-backup'],
      },
      {
        name: 'folder-yellow-books-open',
        folderNames: ['yellow-books-open'],
      },
      {
        name: 'folder-yellow-books',
        folderNames: ['yellow-books'],
      },
      {
        name: 'folder-yellow-cd-open',
        folderNames: ['yellow-cd-open'],
      },
      {
        name: 'folder-yellow-cd',
        folderNames: ['yellow-cd'],
      },
      {
        name: 'folder-yellow-code-open',
        folderNames: ['yellow-code-open'],
      },
      {
        name: 'folder-yellow-code',
        folderNames: ['yellow-code'],
      },
      {
        name: 'folder-yellow-desktop-open',
        folderNames: ['yellow-desktop-open'],
      },
      {
        name: 'folder-yellow-desktop',
        folderNames: ['yellow-desktop'],
      },
      {
        name: 'folder-yellow-development-open',
        folderNames: ['yellow-development-open'],
      },
      {
        name: 'folder-yellow-development',
        folderNames: ['yellow-development'],
      },
      {
        name: 'folder-yellow-docker-open',
        folderNames: ['yellow-docker-open'],
      },
      {
        name: 'folder-yellow-docker',
        folderNames: ['yellow-docker'],
      },
      {
        name: 'folder-yellow-documents-open-open',
        folderNames: ['yellow-documents-open-open'],
      },
      {
        name: 'folder-yellow-documents-open',
        folderNames: ['yellow-documents-open'],
      },
      {
        name: 'folder-yellow-documents',
        folderNames: ['yellow-documents'],
      },
      {
        name: 'folder-yellow-download-open-open',
        folderNames: ['yellow-download-open-open'],
      },
      {
        name: 'folder-yellow-download-open',
        folderNames: ['yellow-download-open'],
      },
      {
        name: 'folder-yellow-download',
        folderNames: ['yellow-download'],
      },
      {
        name: 'folder-yellow-downloads-open',
        folderNames: ['yellow-downloads-open'],
      },
      {
        name: 'folder-yellow-downloads',
        folderNames: ['yellow-downloads'],
      },
      {
        name: 'folder-yellow-drag-accept-open',
        folderNames: ['yellow-drag-accept-open'],
      },
      {
        name: 'folder-yellow-drag-accept',
        folderNames: ['yellow-drag-accept'],
      },
      {
        name: 'folder-yellow-dropbox-open',
        folderNames: ['yellow-dropbox-open'],
      },
      {
        name: 'folder-yellow-dropbox',
        folderNames: ['yellow-dropbox'],
      },
      {
        name: 'folder-yellow-favorites-open',
        folderNames: ['yellow-favorites-open'],
      },
      {
        name: 'folder-yellow-favorites',
        folderNames: ['yellow-favorites'],
      },
      {
        name: 'folder-yellow-games-open',
        folderNames: ['yellow-games-open'],
      },
      {
        name: 'folder-yellow-games',
        folderNames: ['yellow-games'],
      },
      {
        name: 'folder-yellow-git-open',
        folderNames: ['yellow-git-open'],
      },
      {
        name: 'folder-yellow-git',
        folderNames: ['yellow-git'],
      },
      {
        name: 'folder-yellow-github-open',
        folderNames: ['yellow-github-open'],
      },
      {
        name: 'folder-yellow-github',
        folderNames: ['yellow-github'],
      },
      {
        name: 'folder-yellow-gitlab-open',
        folderNames: ['yellow-gitlab-open'],
      },
      {
        name: 'folder-yellow-gitlab',
        folderNames: ['yellow-gitlab'],
      },
      {
        name: 'folder-yellow-gnome-open',
        folderNames: ['yellow-gnome-open'],
      },
      {
        name: 'folder-yellow-gnome',
        folderNames: ['yellow-gnome'],
      },
      {
        name: 'folder-yellow-google-drive-open',
        folderNames: ['yellow-google-drive-open'],
      },
      {
        name: 'folder-yellow-google-drive',
        folderNames: ['yellow-google-drive'],
      },
      {
        name: 'folder-yellow-image-people-open',
        folderNames: ['yellow-image-people-open'],
      },
      {
        name: 'folder-yellow-image-people',
        folderNames: ['yellow-image-people'],
      },
      {
        name: 'folder-yellow-important-open',
        folderNames: ['yellow-important-open'],
      },
      {
        name: 'folder-yellow-important',
        folderNames: ['yellow-important'],
      },
      {
        name: 'folder-yellow-java-open',
        folderNames: ['yellow-java-open'],
      },
      {
        name: 'folder-yellow-java',
        folderNames: ['yellow-java'],
      },
      {
        name: 'folder-yellow-kde-open',
        folderNames: ['yellow-kde-open'],
      },
      {
        name: 'folder-yellow-kde',
        folderNames: ['yellow-kde'],
      },
      {
        name: 'folder-yellow-linux-open',
        folderNames: ['yellow-linux-open'],
      },
      {
        name: 'folder-yellow-linux',
        folderNames: ['yellow-linux'],
      },
      {
        name: 'folder-yellow-locked-open',
        folderNames: ['yellow-locked-open'],
      },
      {
        name: 'folder-yellow-locked',
        folderNames: ['yellow-locked'],
      },
      {
        name: 'folder-yellow-mail-cloud-open',
        folderNames: ['yellow-mail-cloud-open'],
      },
      {
        name: 'folder-yellow-mail-cloud',
        folderNames: ['yellow-mail-cloud'],
      },
      {
        name: 'folder-yellow-mail-open',
        folderNames: ['yellow-mail-open'],
      },
      {
        name: 'folder-yellow-mail',
        folderNames: ['yellow-mail'],
      },
      {
        name: 'folder-yellow-mega-open',
        folderNames: ['yellow-mega-open'],
      },
      {
        name: 'folder-yellow-mega',
        folderNames: ['yellow-mega'],
      },
      {
        name: 'folder-yellow-meocloud-open',
        folderNames: ['yellow-meocloud-open'],
      },
      {
        name: 'folder-yellow-meocloud',
        folderNames: ['yellow-meocloud'],
      },
      {
        name: 'folder-yellow-music-open-open',
        folderNames: ['yellow-music-open-open'],
      },
      {
        name: 'folder-yellow-music-open',
        folderNames: ['yellow-music-open'],
      },
      {
        name: 'folder-yellow-music',
        folderNames: ['yellow-music'],
      },
      {
        name: 'folder-yellow-network-open',
        folderNames: ['yellow-network-open'],
      },
      {
        name: 'folder-yellow-network',
        folderNames: ['yellow-network'],
      },
      {
        name: 'folder-yellow-nextcloud-open',
        folderNames: ['yellow-nextcloud-open'],
      },
      {
        name: 'folder-yellow-nextcloud',
        folderNames: ['yellow-nextcloud'],
      },
      {
        name: 'folder-yellow-notes-open',
        folderNames: ['yellow-notes-open'],
      },
      {
        name: 'folder-yellow-notes',
        folderNames: ['yellow-notes'],
      },
      {
        name: 'folder-yellow-obsidian-open',
        folderNames: ['yellow-obsidian-open'],
      },
      {
        name: 'folder-yellow-obsidian',
        folderNames: ['yellow-obsidian'],
      },
      {
        name: 'folder-yellow-onedrive-open',
        folderNames: ['yellow-onedrive-open'],
      },
      {
        name: 'folder-yellow-onedrive',
        folderNames: ['yellow-onedrive'],
      },
      {
        name: 'folder-yellow-open-open',
        folderNames: ['yellow-open-open'],
      },
      {
        name: 'folder-yellow-open',
        folderNames: ['yellow-open'],
      },
      {
        name: 'folder-yellow-owncloud-open',
        folderNames: ['yellow-owncloud-open'],
      },
      {
        name: 'folder-yellow-owncloud',
        folderNames: ['yellow-owncloud'],
      },
      {
        name: 'folder-yellow-pcloud-open',
        folderNames: ['yellow-pcloud-open'],
      },
      {
        name: 'folder-yellow-pcloud',
        folderNames: ['yellow-pcloud'],
      },
      {
        name: 'folder-yellow-photo-open',
        folderNames: ['yellow-photo-open'],
      },
      {
        name: 'folder-yellow-photo',
        folderNames: ['yellow-photo'],
      },
      {
        name: 'folder-yellow-pictures-open-open',
        folderNames: ['yellow-pictures-open-open'],
      },
      {
        name: 'folder-yellow-pictures-open',
        folderNames: ['yellow-pictures-open'],
      },
      {
        name: 'folder-yellow-pictures',
        folderNames: ['yellow-pictures'],
      },
      {
        name: 'folder-yellow-print-open',
        folderNames: ['yellow-print-open'],
      },
      {
        name: 'folder-yellow-print',
        folderNames: ['yellow-print'],
      },
      {
        name: 'folder-yellow-private-open',
        folderNames: ['yellow-private-open'],
      },
      {
        name: 'folder-yellow-private',
        folderNames: ['yellow-private'],
      },
      {
        name: 'folder-yellow-projects-open',
        folderNames: ['yellow-projects-open'],
      },
      {
        name: 'folder-yellow-projects',
        folderNames: ['yellow-projects'],
      },
      {
        name: 'folder-yellow-public-open',
        folderNames: ['yellow-public-open'],
      },
      {
        name: 'folder-yellow-public',
        folderNames: ['yellow-public'],
      },
      {
        name: 'folder-yellow-publicshare-open-open',
        folderNames: ['yellow-publicshare-open-open'],
      },
      {
        name: 'folder-yellow-publicshare-open',
        folderNames: ['yellow-publicshare-open'],
      },
      {
        name: 'folder-yellow-remote-open-open',
        folderNames: ['yellow-remote-open-open'],
      },
      {
        name: 'folder-yellow-remote-open',
        folderNames: ['yellow-remote-open'],
      },
      {
        name: 'folder-yellow-remote',
        folderNames: ['yellow-remote'],
      },
      {
        name: 'folder-yellow-script-open',
        folderNames: ['yellow-script-open'],
      },
      {
        name: 'folder-yellow-script',
        folderNames: ['yellow-script'],
      },
      {
        name: 'folder-yellow-snap-open',
        folderNames: ['yellow-snap-open'],
      },
      {
        name: 'folder-yellow-snap',
        folderNames: ['yellow-snap'],
      },
      {
        name: 'folder-yellow-steam-open',
        folderNames: ['yellow-steam-open'],
      },
      {
        name: 'folder-yellow-steam',
        folderNames: ['yellow-steam'],
      },
      {
        name: 'folder-yellow-sync-open',
        folderNames: ['yellow-sync-open'],
      },
      {
        name: 'folder-yellow-sync',
        folderNames: ['yellow-sync'],
      },
      {
        name: 'folder-yellow-syncthing-open',
        folderNames: ['yellow-syncthing-open'],
      },
      {
        name: 'folder-yellow-syncthing',
        folderNames: ['yellow-syncthing'],
      },
      {
        name: 'folder-yellow-systemd-open',
        folderNames: ['yellow-systemd-open'],
      },
      {
        name: 'folder-yellow-systemd',
        folderNames: ['yellow-systemd'],
      },
      {
        name: 'folder-yellow-tar-open',
        folderNames: ['yellow-tar-open'],
      },
      {
        name: 'folder-yellow-tar',
        folderNames: ['yellow-tar'],
      },
      {
        name: 'folder-yellow-templates-open-open',
        folderNames: ['yellow-templates-open-open'],
      },
      {
        name: 'folder-yellow-templates-open',
        folderNames: ['yellow-templates-open'],
      },
      {
        name: 'folder-yellow-templates',
        folderNames: ['yellow-templates'],
      },
      {
        name: 'folder-yellow-torrent-open',
        folderNames: ['yellow-torrent-open'],
      },
      {
        name: 'folder-yellow-torrent',
        folderNames: ['yellow-torrent'],
      },
      {
        name: 'folder-yellow-unlocked-open',
        folderNames: ['yellow-unlocked-open'],
      },
      {
        name: 'folder-yellow-unlocked',
        folderNames: ['yellow-unlocked'],
      },
      {
        name: 'folder-yellow-vbox-open',
        folderNames: ['yellow-vbox-open'],
      },
      {
        name: 'folder-yellow-vbox',
        folderNames: ['yellow-vbox'],
      },
      {
        name: 'folder-yellow-video-open',
        folderNames: ['yellow-video-open'],
      },
      {
        name: 'folder-yellow-video',
        folderNames: ['yellow-video'],
      },
      {
        name: 'folder-yellow-videos-open-open',
        folderNames: ['yellow-videos-open-open'],
      },
      {
        name: 'folder-yellow-videos-open',
        folderNames: ['yellow-videos-open'],
      },
      {
        name: 'folder-yellow-videos',
        folderNames: ['yellow-videos'],
      },
      {
        name: 'folder-yellow-visiting-open',
        folderNames: ['yellow-visiting-open'],
      },
      {
        name: 'folder-yellow-visiting',
        folderNames: ['yellow-visiting'],
      },
      {
        name: 'folder-yellow-wifi-open',
        folderNames: ['yellow-wifi-open'],
      },
      {
        name: 'folder-yellow-wifi',
        folderNames: ['yellow-wifi'],
      },
      {
        name: 'folder-yellow-wine-open',
        folderNames: ['yellow-wine-open'],
      },
      {
        name: 'folder-yellow-wine',
        folderNames: ['yellow-wine'],
      },
      {
        name: 'folder-yellow-yandex-disk-open',
        folderNames: ['yellow-yandex-disk-open'],
      },
      {
        name: 'folder-yellow-yandex-disk',
        folderNames: ['yellow-yandex-disk'],
      },
      {
        name: 'folder-yellow',
        folderNames: ['yellow'],
      },
      {
        name: 'folder-zeabur-open-open',
        folderNames: ['zeabur-open-open'],
      },
      {
        name: 'folder-zeabur-open',
        folderNames: ['zeabur-open'],
      },
    ],
  },
  {
    name: 'classic',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
  },
  { name: 'none', defaultIcon: { name: '' } },
];
