# セットアップ

## 事前準備

### エディタ

とりあえずVSCodeにJavaScript/TypeScript/Vueなどのプラグインを入れて使えばいいと思う

(VSCodeで書かないから詳しくは知らん)

贅沢したいならWebStormを使うのがおすすめ

https://www.jetbrains.com/webstorm/

### Node.jsのインストール

https://nodejs.org/ja/download/

NodistとかNVMとかのNode.jsバージョン管理ツールで入れたいなら自分で調べてね

### yarnのインストール

JavaScriptのパッケージ管理ツール

npmでもいいけど個人的にyarnに慣れているので

https://yarnpkg.com/en/docs/install

### Vue CLI(v4.0.4)のインストール

Vueに関係する作業するためのコマンドラインツール

yarnがインストールされているなら以下のコマンドを実行

```bash
$ yarn global add @vue/cli@4.0.4
```

## Vueのプロジェクト作成

適当なディレクトリで以下のコマンドを実行

```bash
$ vue create vue-ts-todo
```

`vue create`以降はプロジェクト名なので任意で変更してOK

実行すると選択メニューが出るので以下のように選択する

```bash
Please pick a preset:
> Manully select features
Check the features needed for your project:
> TypeScript
> Router
> CSS Pre-processors
> Linter / Formatter
> Unit Testing
Use class-style component syntax? 
> n
Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? 
> n
Use history mode for router? 
> y
Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default):
> Sass/SCSS (with dart-sass)
Pick a linter / formatter config:
> ESlint + Prettier
Pick additional lint features:
> Lint on save
> Lint and fix on commit
Pick a unit testing solution:
> Jest
Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
> In dedicated config files
Save this as a preset for future projects?
> n
```

## プロジェクトのコマンド

- `yarn serve`
  - 開発環境のローカルサーバを立ち上げる
  - デフォで`http://localhost:8080`でサーバが起動する
  - ポート番号を変えたい場合は`yarn serve -p 5000`というふうにすればよい
  - ファイルを変更すると自動でブラウザに反映するホットリロード機能がある
  - ESLintの構文チェックとかTypeScriptの型チェックとかもホットリロード時にやってくれる
- `yarn build`
  - 本番用サーバにデプロイするためのHTML/CSS/JSファイルをビルドして作成するコマンド
  - 基本的にHTMLは`index.html`しか作成されず、CSS/JSもひとまとまりのファイルに固められる
  - これらのファイルをホスティングサービスで配信したり、Nginxとか使ってDockerコンテナ化したりする
- `yarn lint`
  - コードが文法的に間違っていないかや、推奨されない書き方をチェックするコマンド
    - ESLintなどの静的コード検証ツールがある場合に限る
  - また実行することで自動でコードを直してくれたりもする
    - Prettierなどのコードフォーマッターがある場合に限る
  - 今回の設定ではESLint+Prettierで、コミット時に自動でコードチェック&修正されるようにしている
- `yarn test:unit`
  - 単体テストを行うためのコマンド
  - 今回はテストフレームワークとしてJestを使う


