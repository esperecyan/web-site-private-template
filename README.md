テンプレートからリポジトリを生成後
==================================
- ライセンスの設定
- GitHub Appの設定
    1. Appの作成
		1. デプロイ先が個人アカウントのリポジトリならそのアカウントの、デプロイ先が組織ならその組織の  
		   Settings → Developer settings → GitHub Apps → New GitHub App
		1. GitHub App name、Homepage URL は任意
		1. Webhook で Active からチェックを外す
		1. Permissions で、Repository permissions → Contents → Access: Read and write
		1. Create GitHub App
	1. デプロイ先のリポジトリへAppをインストール
		1. 作成したAppで、Install App → Install
		1. Only select repositories へチェックを入れ、Select repositories でデプロイ先のリポジトリを選択
		1. Install
	1. 生成したリポジトリへAppの情報を登録
    	1. 生成したリポジトリで Settings → Security → Secrets and variables → Actions → Variables → New repository variable
		1. Name へ `DEPLOY_APP_ID` と入力
		1. Value へ作成したAppのApp IDを貼り付け
		1. Add variable
		1. 生成したリポジトリで Settings → Security → Secrets and variables → Actions → Secrets → New repository secrets
		1. Name へ `DEPLOY_APP_PRIVATE_KEY` と入力
		1. 作成したAppで、Generate a private key
		1. ダウンロードされたファイルの中身を、Secrets へ貼り付け
		1. ダウンロードされたファイルを抹消
		1. Add secret
- デプロイ先の設定
    1. 生成したリポジトリで Settings → Security → Secrets and variables → Actions → Variables → New repository variable
	1. Name へ `DESTINATION_REPOSITORY_OWNER` と入力
	1. Value へデプロイ先の「ユーザー名」または「組織名」を入力
		+ 例: `https://github.com/esperecyan/esperecyan.github.io` なら `esperecyan`
	1. Add variable
	1. Name へ `DESTINATION_REPOSITORY_NAME` と入力
	1. Value へデプロイ先の「リポジトリ名」を入力
		+ 例: `https://github.com/esperecyan/esperecyan.github.io` なら `esperecyan.github.io`
	1. Add variable
- [web-dev-server.config.js](web-dev-server.config.js) の `port` の値を、49152〜65535のランダムな値に変更
- README.md のこの項を削除

--------------------------------------------------

開発環境の構築
==============
1. [Node.js]のインストール
2. [Visual Studio Code]のインストール
3. Visual Studio Codeでフォルダを開いたときに推奨されるプラグインをインストール
4. ターミナルで `npm ci` を実行

[Node.js]: https://nodejs.org/ja/
[Visual Studio Code]: https://azure.microsoft.com/products/visual-studio-code/

ローカルサーバーの起動
======================
1. ターミナルで `npm start` を実行
