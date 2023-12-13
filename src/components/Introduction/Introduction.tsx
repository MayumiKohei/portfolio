import React from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
    return (
        <div className="introduction-container">
            <h1>PDF比較ツールへようこそ！</h1>
            <p>
                当ツールでは、2つのPDFドキュメントをシームレスに比較することができます。以下は簡単なステップですぐに始める方法です：
            </p>
            <ol>
                <li>ボタンをクリックしてPDFドキュメントをアップロードします。</li>
                <li>PDFをプレビューして視覚的に異なる点を確認します。</li>
                <li>「比較」ボタンをクリックして比較プロセスを開始します。</li>
                <li>結果を確認し、ハイライトされた変更やエラーメッセージを含めて確認します。</li>
            </ol>
            <p>
                PDF比較ツールをご利用いただき、効率的で正確な文書比較体験をお楽しみください！
            </p>
        </div>
    )
};

export default Introduction;