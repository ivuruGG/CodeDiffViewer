// diff-match-patchライブラリをインポート
import { diff_match_patch } from "diff-match-patch";

// テキスト間の差分を計算する関数
export const computeDiffs = (text1, text2) => {
  // テキストが空の場合に備えたエラーハンドリング
  if (!text1 || !text2) {
    console.log("One or both inputs are empty.");
    return []; // 空の配列を返す
  }

  // diff-match-patch のインスタンスを作成
  const dmp = new diff_match_patch();

  // 差分を計算
  const diffs = dmp.diff_main(text1, text2);

  // 差分をクリーンアップ（不要な変更を減らす）
  dmp.diff_cleanupSemantic(diffs);

  // 計算された差分を返す
  return diffs;
};
