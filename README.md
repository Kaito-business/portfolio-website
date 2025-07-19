# Portfolio Website

GitHub公開用のポートフォリオサイトです。リッチで革新的なUIを通じて、技術的な専門性とデザインセンスをアピールします。

## 🌟 特徴

- **モダンなデザイン**: 3D背景エフェクトとアニメーションを使用したインタラクティブなUI
- **レスポンシブ対応**: モバイル、タブレット、デスクトップで最適化された表示
- **ダークモード**: システム設定に応じた自動切り替えと手動切り替え機能
- **パフォーマンス最適化**: Next.js の SSG による高速表示
- **アクセシビリティ**: WCAG 2.1 AA準拠のアクセシブルなデザイン

## 🛠️ 技術スタック

- **Frontend**: React 18, TypeScript, Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, React Three Fiber
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

## 📁 プロジェクト構造

```
src/
├── app/                 # Next.js App Router
├── components/          # Reactコンポーネント
│   ├── about/          # About セクション
│   ├── contact/        # Contact セクション
│   ├── hero/           # Hero セクション（3D背景含む）
│   ├── layout/         # Header, Footer
│   ├── projects/       # Projects ショーケース
│   └── skills/         # Skills セクション
├── data/               # サンプルデータ
├── types/              # TypeScript型定義
└── utils/              # ユーティリティ関数
```

## 🚀 開発環境のセットアップ

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   npm run dev
   ```
   [http://localhost:3000](http://localhost:3000) でサイトを確認できます。

3. **本番ビルド**
   ```bash
   npm run build
   ```

4. **本番サーバーの起動**
   ```bash
   npm start
   ```

## 📝 カスタマイズ

### 個人情報の変更

`src/data/sampleData.ts` ファイルを編集して、あなたの情報に更新してください：

```typescript
export const personalInfo: PersonalInfo = {
  name: "あなたの名前",
  title: "あなたの職業",
  description: "あなたの説明",
  // ...
};
```

### プロジェクトの追加

`src/data/sampleData.ts` の `projects` 配列に新しいプロジェクトを追加できます：

```typescript
export const projects: Project[] = [
  {
    id: "new-project",
    title: "新しいプロジェクト",
    description: "プロジェクトの説明",
    // ...
  },
  // ...
];
```

### スキルの更新

`src/data/sampleData.ts` の `skills` 配列でスキルを更新できます：

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    level: 90,
    experience: "3年",
    // ...
  },
  // ...
];
```

## 🎨 デザインシステム

### カラーパレット

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Green (#10B981)
- **Dark Mode**: Gray scale with blue accents

### ブレークポイント

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 📱 セクション詳細

### Hero Section
- タイピングアニメーション
- 3D パーティクル背景
- CTA ボタン

### About Section
- プロフィール情報
- 強みの紹介
- 統計情報

### Skills Section
- カテゴリ別スキル表示
- 円形プログレスバー
- ホバー時の詳細表示

### Projects Section
- フィルタリング機能
- インタラクティブカード
- 詳細モーダル表示

### Contact Section
- 連絡フォーム
- ソーシャルリンク
- 連絡先情報

## 🚀 デプロイメント

### GitHub Pages

1. **GitHub Actions の設定**
   
   `.github/workflows/deploy.yml` ファイルを作成し、自動デプロイを設定します。

2. **ビルド設定**
   
   `next.config.js` でGitHub Pages用の設定を行います：

   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/repository-name',
     images: {
       unoptimized: true
     }
   };
   ```

### Vercel

1. Vercel アカウントにGitHub リポジトリを接続
2. 自動デプロイが設定されます

## 🧪 テスト

### Lighthouse スコア目標

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 サポート

質問やサポートが必要な場合は、Issues を作成してください。

---

**Built with ❤️ using Next.js and TypeScript**
