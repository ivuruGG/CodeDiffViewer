
# 🌟 **Code Diff Viewer**

> **簡単で便利なコード比較ツール**  
Code Diff Viewerは、2つのコードスニペットやファイルを簡単に比較し、変更箇所を直感的に把握できるエンジニア向けツールです。

---

## ✨ **機能一覧**

1. **📂 ファイル比較機能**
   - コードファイルをアップロードして差分を視覚的に確認。
   - 行単位での追加・削除箇所をハイライト。

2. **✏️ テキスト編集モード**
   - ファイルをアップロードせず、直接コードを入力して比較可能。

3. **🌙 ダークモード対応**
   - 見やすいUIを実現し、長時間の作業でも目に優しい設計。

4. **🚀 オフライン対応**
   - Progressive Web App（PWA）対応で、インターネット接続がなくても利用可能。

---

## 🛠️ **技術スタック**

| 技術                | 使用内容                                      |
|---------------------|---------------------------------------------|
| **React**           | UI構築                                       |
| **Tailwind CSS**    | スタイリングとダークモード対応                  |
| **diff-match-patch**| テキスト差分計算ロジック                      |
| **Vite**            | 高速な開発環境とビルド                       |
| **Workbox**         | PWA（オフライン対応）                         |

---

## 📂 **プロジェクト構造**

```
CodeDiffViewer/
├── public/              # 静的ファイル
├── src/
│   ├── components/      # UIコンポーネント
│   │   ├── DiffViewer.jsx      # 差分表示コンポーネント
│   │   ├── FileInput.jsx       # ファイル入力コンポーネント
│   │   └── TextEditor.jsx      # テキスト入力コンポーネント
│   ├── utils/           # ユーティリティ関数
│   │   └── diffUtils.js        # 差分計算ロジック
│   ├── App.jsx          # メインアプリ
│   ├── index.css        # Tailwindの設定
│   └── main.jsx         # エントリーポイント
├── package.json         # プロジェクトの依存関係
├── vite.config.js       # Viteの設定
└── README.md            # プロジェクトの説明
```

---

## 🚀 **使い方**

1. このリポジトリをクローンします：
   ```bash
   git clone https://github.com/<your-username>/CodeDiffViewer.git
   cd CodeDiffViewer
   ```

2. 必要な依存関係をインストールします：
   ```bash
   npm install
   ```

3. ローカルサーバーを起動します：
   ```bash
   npm run dev
   ```

4. ブラウザで開きます：  
   ```
   http://localhost:5173
   ```

---

## 🎨 **スクリーンショット**

| **ダークモード**                     | **ライトモード**                  |
|------------------------------------|-----------------------------------|
| ![Dark Mode](https://via.placeholder.com/300x200) | ![Light Mode](https://via.placeholder.com/300x200) |

---

## 💡 **今後の改善予定**
- ファイル履歴の保存機能
- フォルダ単位での比較サポート
- さらなるテーマカスタマイズ対応

---

## 🤝 **コントリビューション**
バグの報告や機能追加の提案は大歓迎です！以下の手順でコントリビューションできます：

1. このリポジトリをフォークします。
2. 新しいブランチを作成します（`git checkout -b feature/new-feature`）。
3. 変更をコミットします（`git commit -m 'Add new feature'`）。
4. プルリクエストを送信します。

---

## 📜 **ライセンス**

MIT Licenseに基づいて提供されています。以下はライセンスの全文です：

---

```
MIT License

Copyright (c) 2024 <Your Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
