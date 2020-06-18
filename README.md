# intern2022_TakashiNishikawa
produced by Takashi Nishikawa

## 自己採点
自己採点結果 : 11/11

以下指定されていた11項目全ての要件を満たしました

- 達成 => ヘッダーに初期状態で現在ユーザの名前/画像/拍手出来るポイント:100/拍手されたポイント:0が表示される 
- 達成 => 現在ユーザのアイコンの近辺でユーザを選択できるようになり、選択後はユーザが切り替わる
- 達成 => ヘッダーでユーザを切り替えた後は、そのユーザが持つポイントが正しく表示される(拍手後に確認) 
- 達成 => 投稿欄のユーザアイコン近辺で褒めたいユーザを選択出来る 
- 達成 => テキストが５文字未満の場合、投稿ボタンはクリック出来ない
- 達成 => テキストが５文字以上であれば紹介が投稿される 
- 達成 => 一覧に追加された紹介した/された人、テキスト、拍手数、投稿日時が正しく表示されている 
- 達成 => 投稿一覧の内容はリロード後も情報は保持される 
- 達成 => 投稿された人/投稿した人は拍手が出来ない 
- 達成 => 拍手後は、拍手した人の拍手出来るポイントが-2、紹介した/された人には拍手されたポイントが+1される 
- 達成 => 拍手数のマウスホバーにより、拍手した人と拍手数が一覧表示される

## 初回起動方法

1. コマンドラインツール等でファイルprase_place以下のディレクトリに移動
2. 'npm install' と入力し必要なパッケージをインストール(時間がかかります[5~10分])
3. 'npm start' と入力してReactアプリを起動する
4. ブラウザでローカルホストのアドレスでサイトが立ち上がるので入る
5. 右上にある以下の項目を埋め「ユーザーを追加」を押すことでユーザーを追加できる
    - ユーザー名を入力
    - アイコンのurlを入力(ブラウザに上がっているアクセス制限のかかっていない画像のurlを入力することでアイコンの画像が表示されます。)

## 初回以降

1. コマンドラインツール等でファイルprase_place以下のディレクトリに移動
2. npm startと入力してReactアプリを起動する
3. ブラウザでローカルホストのアドレスでサイトが立ち上がるので入る

## 使用フレームワーク
- React（指定された条件）
- Redux（ステート、アクションの管理）

## その他使用技術等
- atomic design: コンポーネントをパーツ化し開発しやすいようにしていました。
- TypeScript: 素のJavaScriptではなくAltJSを使用しました。

## チャレンジ項目
- TypeScriptを使ってみた : 今までは素のJavaScriptでしかReactを扱ったことがなかったが今回AltJSであるTypeScriptを使って書いてみました。
- データ定義・設計を行う : 前回サービスを作っているときにデータ定義をしっかり設計しなかったため、サーバー処理や通信処理でバグやエラーが多発したので、今回はデータ定義や処理を事前にしっかりと設計してからプログラムの記述を開始しました。
- 短期間開発 : 意図したものではありませんでしたが、学校のPBLでインターン課題に全く取り組めず、課題に取り組めた日数は4日間だけでした。データ定義をしっかりと行ったおかげで何とか4日間で実装することができました。
